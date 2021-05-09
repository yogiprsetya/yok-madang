import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/mobile.css';
import data from '../DATA.json';

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

data.restaurants.forEach(({pictureId, name, city, rating, description }) => {
  document.querySelector('#list').innerHTML += `
    <div class="col resto">
      <img class="resto-img" src="${pictureId}" alt="${name}" title="${name}">

      <div class="rating">
        <small>${city}</small>
        <p>Rating: ${rating}</p>
      </div>

      <article>
        <h3 class="resto-name">
          <a href="#">${name}</a>
        </h3>

        <p>${description.slice(0, 100)} ...</p>
      </article>
    </div>`;
});

document.querySelectorAll('#nav-list').forEach(el => el.innerHTML = `
  <li class="nav-item"><a href="">Home</a></li>
  <li class="nav-item"><a href="#">Favorite</a></li>
  <li class="nav-item"><a target="_blank" href="https://github.com/yogiprsetya">About Us</a></li>
`);
