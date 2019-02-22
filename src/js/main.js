import '../sass/style.scss'

const htmlElement = document.getElementById('app');
htmlElement.innerHTML = 'Webpack with live reload, dev server, sass, babel & image/file loader';
htmlElement.style.background = 'peru';
console.warn(htmlElement.innerHTML);
