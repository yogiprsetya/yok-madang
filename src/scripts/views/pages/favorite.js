import FavoriteRestaurant from '../../services/favorite-restaurant';

const { BASE_IMAGE_URL } = process.env;

const Favorite = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Pemadam Kelaparan</h1>
          <p class="hero-text">Find the best places to eat</p>
        </div>

        <div class="hero-image">
          <picture>
            <source media="(max-width: 600px)" srcset="images/heros/hero-image-sm.jpg">
            <img src="images/heros/hero-image-lg.jpg" alt="hero" class="lazyload" />
          </picture>
        </div>
      </div>

      <main id="content">
        <section class="content">
          <h2>Explore Restaurant</h2>

          <div class="row" id="list"></div>
          <div class="no-resto"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#list');

    if (restaurants.length === 0) {
      document.querySelector('.no-resto').innerHTML = 'Restoran Favorit belum ada.';
    }

    restaurants.forEach(({ id, pictureId, name, rating, city, description }) => {
      restaurantsContainer.innerHTML += `
        <div class="col resto">
        <img class="resto-img lazyload" data-src="${BASE_IMAGE_URL + pictureId}" alt="${name}" title="${name}" />
          <div class="rating">
            <small>${city}</small>
            <p>Rating: ${rating}</p>
          </div>

          <article>
            <h3 class="resto-name">
              <a href="${`/#/detail/${id}`}">${name}</a>
            </h3>

            <p>${description.slice(0, 100)} ...</p>
          </article>
        </div>
      `;
    });
  },
};

export default Favorite;
