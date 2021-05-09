import geRrestaurants from '../../services/get-restaurant';
import { createRestaurantItem } from '../templates/creator';

const Home = {
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
    const restaurants = await geRrestaurants.restaurantList();
    const restaurantsContainer = document.querySelector('#list');

    restaurants.forEach(restaurant => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  }
};

export default Home;
