document.addEventListener('contextmenu', event => event.preventDefault());

const isRoot = location.pathname.endsWith('/') || location.pathname.endsWith('index.html');
const navPath = isRoot ? 'nav.html' : '../nav.html';

fetch(navPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;
  });
