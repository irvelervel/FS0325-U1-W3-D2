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
