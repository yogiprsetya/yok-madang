import FavoriteRestaurant from '../../services/favorite-restaurant';

const { BASE_IMAGE_URL } = process.env;

const Favorite = {
  async render() {
    return `
      <div class="hero" style="background-image: url('images/heros/hero-image_4.jpg');">
        <div class="hero-inner">
          <h1 class="hero-title">Pemadam Kelaparan</h1>
          <p class="hero-text">Find the best places to eat</p>
        </div>
      </div>

      <main id="content">
        <section class="content">
          <h2>Explore Restaurant</h2>

          <div class="row" id="list"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#list');

    restaurants.forEach(({ id, pictureId, name, rating, city, description }) => {
      restaurantsContainer.innerHTML += `
        <div class="col resto">
        <img class="resto-img" src="${BASE_IMAGE_URL + pictureId}" alt="${name}" title="${name}">
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
