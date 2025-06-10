// ATTRAVERSAMENTO E MANIPOLAZIONE DEL DOM (DOM TRAVERSING & DOM MANIPULATION)

// I documenti web moderni prevedono un livello di interazione e di dinamicità
// impossibile da realizzare solamente tramite HTML + CSS. Basti pensare ad una pagina
// con un calendario: siamo stra-abituati a visualizzare al caricamento già la giornata
// odierna ad esempio, e questa informazione non può essere scritta permanentemente
// nell'HTML.

// Per ottenere questo livello di interazione è necessario introdurre anche JS nella
// nostra quotidiana realizzazione di pagine web: JS ci servirà per ad es. mostrare/nascondere
// sezioni al click di un bottone, ingrandire/rimpicciolire leggermente gli elementi,
// cambiare colore a titoli e sfondi, effetti visivi di vario tipo etc.

// Al fine di rendere le nostre pagine web dinamiche dobbiamo imparare i segreti dell'
// attraversamento e della manipolazione del DOM: il DOM è la rappresentazione in JS
// dei tag HTML.

// Per utilizzare efficacemente JS al fine di rendere dinamiche le pagine web dobbiamo
// interiorizzare un processo fatto di 2 STEP:

// 1) DOM TRAVERSING (attraversamento del DOM, la ricerca degli elementi)
// 2) DOM MANIPULATION (manipolazione e cambiamento connotati dell'elemento selezionato)

// -------

// 1) DOM TRAVERSING (selezione degli elementi della pagina via JS)
// vediamo ora tutte le principali tecniche per raggiungere via JS i tag pre-esistenti
// nel nostro documento HTML
// il documento HTML è universalmente selezionabile tramite un oggetto JS preesistente
// di nome: document
console.log(document)

// a) con l'attributo "id"
const h1 = document.getElementById('main-title')
console.log('H1', h1)
// getElementById tornerà UN riferimento dalla pagina: l'elemento dotato dell'id
// specificato, oppure null (nel caso l'id specificato non sia stato trovato nella pagina)

const footerP = document.getElementById('copyright')
console.log('footer p', footerP)

const wrong = document.getElementById('topogigio')
console.log('non esiste', wrong)

// b) con l'attributo "class"
const sections = document.getElementsByClassName('content-section')
console.log('sections', sections)
// getElementsByClassName torna una HTMLCollection di TUTTI i risultati trovati
// (ovvero di tutti gli elementi HTML dotati della classe specificata)

// c) tramite il nome del tag
const allH3 = document.getElementsByTagName('h3')
console.log('tutti gli h3', allH3)
// getElementsByTagName torna una HTMLCollection di TUTTI i risultati trovati
// (ovvero di tutti gli elementi HTML dotati del TAG specificato)

const allMains = document.getElementsByTagName('main')
console.log('tutti i main', allMains)
// allMains è un ARRAY di tutti i <main> (cioè un array con un elemento!)
// allMains[0] è il primo e unico <main> trovato

// qual ora i metodi visti fin adesso NON riescano a recuperare in modo preciso
// i riferimenti di cui siete in cerca... (magari dovete trovare l'h3 dentro la seconda
// section)

// se avete in mente un valido selettore CSS per recuperare l'elemento che vi serve,
// potete usare querySelector e querySelectorAll per trovarlo!

// d) querySelector
// querySelector recupera un riferimento in JS a UN elemento tramite il selettore
// che avreste utilizzato per selezionarlo in CSS
const h3InsideSecondSection = document.querySelector('section+section h3')
console.log(h3InsideSecondSection)

const specialLiInsideUl = document.querySelector('ul > li > a.special')
console.log(specialLiInsideUl)

// querySelector è un metodo PIÙ PESANTE da gestire per il browser: usatelo con
// parsimonia, cercando di preferire quelli precedenti se possibile!

// in caso di multipli match con il selettore CSS fornito, querySelector tornerà
// sempre e solo al massimo UN riferimento: quello del primo elemento con il match

// e) querySelectorAll
// querySelectorAll funziona COME querySelector, ma serve per recuperare MULTIPLI
// riferimenti in caso di selettori CSS che colpirebbero diversi tag.
const allSpecialAnchors = document.querySelectorAll('ul > li > a.special')
console.log(allSpecialAnchors)
// i risultati in questo caso vengono restituiti in una "NodeList", una struttura
// di nuovo simile ad un array ma senza molti dei metodi che abbiamo visto ieri:
// in particolare, sulle NodeList si può iterare facilmente con forEach (ma non
// con map, filter, reduce, etc.)
// nota di Stefano: se fate un "for", non sbagliate mai!
// per trasformarli in veri e propri array potete usare: Array.from(allSpecialAnchors)

// NB: ogni riferimento a elementi HTML che recuperate possiede TANTE proprietà
allSpecialAnchors[0].parentElement // OGNI elemento ha anche un riferimento
// a SUO PADRE DIRETTO!
console.log('il padre del primo special', allSpecialAnchors[0].parentElement)
console.log(
  'il nonno del primo special',
  allSpecialAnchors[0].parentElement.parentElement
)

// ogni elemento HTML ha anche i riferimenti ai suoi FIGLI DIRETTI
console.log(
  'figli diretti di main',
  document.getElementsByTagName('main')[0].children
)

// abbiamo TANTI metodi per recuperare i riferimenti che ci interessano di TUTTI
// i possibili contenuti del nostro HTML.
// e mo che ci facciamo? -> proseguiamo su manipulation.js
