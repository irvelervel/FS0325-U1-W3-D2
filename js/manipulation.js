// 2) Ora, tramite le metodologie apprese per attraversare il DOM e recuperare riferimenti
// agli elementi che ci interessano, impariamo COSA possiamo FARE con questi elementi!

// - cambiamo il valore di un titolo
// recuperiamo un riferimento al titolo
const h1 = document.getElementById('main-title')
// manipoliamone il contenuto
console.log(h1.innerText) // la proprietà innerText può essere usata "in lettura"
h1.innerText = 'EPIBlog' // ...ma potete anche sovrascriverne il contenuto!

// - aggiungiamo del contenuto HTML
// recuperiamo un riferimento alla lista nav
// utilizzo getElementsByTagName
const navs = document.getElementsByTagName('nav') // TUTTI i <nav> della pagina
navs[0].innerHTML += '<a href="#">Cantautori</a>'
// sarebbe come dire
// navs[0].innerHTML = navs[0].innerHTML + '<a href="#">Cantautori</a>'
// gli elementi generati "a mano" tramite JS ereditano tutte le proprietà CSS
// che avrebbero ricevuto anche se fossero stati generati inizialmente via HTML

// - manipoliamo il css di un elemento
const makeArchiveRed = function () {
  const archiveTitle = document.querySelector('#archive h3')
  console.log('archiveTitle', archiveTitle)
  // la proprietà "style" di un riferimento HTML è un oggetto
  // al suo interno contiene TUTTE LE PROPRIETÀ CSS ESISTENTI
  archiveTitle.style.color = 'red'
  archiveTitle.style.fontStyle = 'italic'
  archiveTitle.style.textDecoration = 'underline'
}

// - cambiamo il colore del testo di tutte le ancora nel nav in verde acido
const makeAnchorsGreen = function () {
  const allTheNavAnchors = document.querySelectorAll('header > nav > a')
  // !!! allTheNavAnchors.style.color = 'green' <-- SBAGLIATO! dovete farlo per OGNI
  // elemento dell'array!
  for (let i = 0; i < allTheNavAnchors.length; i++) {
    // e ora, uno alla volta, cambiamo le proprietà di "style"
    allTheNavAnchors[i].style.color = 'limegreen'
  }
}

makeAnchorsGreen()

// - cambiare la sorgente dell'immagine del cane in un gatto
const makeItABear = function () {
  // troviamo l'immagine nell'<aside>
  const picture = document.querySelector('#archive img')
  picture.setAttribute('src', 'https://placebear.com/400/400')
}

// setAttribute si usa spesso per cambiare:
// - src nelle immagini
// - alt nelle immagini
// - href nei link
// - id negli elementi
// - etc.

// - manipoliamo le classi CSS assegnate ad un elemento
const makeItYellow = function () {
  // prendo il footer > p
  const p = document.querySelector('footer > p')
  // assegniamo a p la classe "yellow" in css
  p.classList.add('yellow') // diventerà <p class="yellow">...</p>
}

makeItYellow()

// - creiamo da zero un nuovo link per la sezione Archivio
const createNewLinks = function () {
  const ul = document.getElementsByTagName('ul')[0]
  // metodo a): aggiungo in coda all'HTML di questa ul un nuovo <li>
  ul.innerHTML += '<li><a href="#maggio-2024">Maggio 2024</a></li>'
  // metodo b): creo un'àncora, creo un li, appendo l'ancora dentro li, appendo
  // l'li dentro la ul
  const newA = document.createElement('a') // <a></a>
  newA.innerText = 'Aprile 2024' // <a>Aprile 2024</a>
  newA.setAttribute('href', '#aprile-2024') // <a href="#aprile-2024">Aprile 2024</a>
  // l'elemento ora esiste "in memoria", ma fisicamente non è stato ancora "appeso" da
  // nessuna parte nel DOM. Quando si crea un elemento a mano con "createElement", è
  // necessario successivamente inserirlo nella pagina, con un metodo che si chiama
  // "appendChild()"
  const newLi = document.createElement('li') // <li></li>
  newLi.appendChild(newA) // <li><a href="#aprile-2024">Aprile 2024</a></li>
  ul.appendChild(newLi)
  // ho creato un'àncora vuota, vi ho messo il contenuto, vi ho settato l'attributo
  // href, ho creato un li vuoto, ho appeso l'àncora all'li vuoto, ho appeso li riempito
  // alla ul
  //
  // rimuoviamo il bottone per aggiungere i link a fine operazione
  const buttonToRemove = document.getElementsByClassName('to-remove')[0]
  console.log(buttonToRemove)
  buttonToRemove.remove()
}
