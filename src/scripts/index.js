import 'regenerator-runtime';
import '../styles/main.scss';
import swRegister from './utilities/sw-register';
import App from './views/app';

const app = new App({
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.querySelectorAll('#nav-list').forEach(el => el.innerHTML = `
  <li class="nav-item"><a href="">Home</a></li>
  <li class="nav-item"><a href="#">Favorite</a></li>
  <li class="nav-item"><a target="_blank" href="https://github.com/yogiprsetya">About Us</a></li>
`);
