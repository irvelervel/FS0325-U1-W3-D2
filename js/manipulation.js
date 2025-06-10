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
