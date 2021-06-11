import UrlParser from '../../utilities/url-parser';
import getRestaurants from '../../services/get-restaurant';
import LikeBtnInit from '../../utilities/save-button';

const { BASE_IMAGE_URL } = process.env;

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await getRestaurants.restaurantDetails(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = `
      <div class="restaurant">
        <div class="restaurant-thumbnail">
          <img
            src="${restaurant.pictureId ? BASE_IMAGE_URL + restaurant.pictureId : 'images/no-image.png'}"
            alt="${restaurant.name}"
            class="lazyload"
          />

          <h1>${restaurant.name}</h1>
          <span class="restaurant-rating">Rating ${restaurant.rating}</span>
        </div>

        <div class="restaurant-content">
          <div id="save-btn-container"></div>
          <p class="restaurant-location">${restaurant.address}, ${restaurant.city}</p>
          <p class="restaurant-description">${restaurant.description}</p>

          <h3>Kategori</h3>
          ${restaurant.categories.map(category => `<span class="restaurant-category">${category.name}</span>`).join('')}

          <h3>Menu</h3>

          <h4>Makanan</h4>
          <ol class="menu-list">
            ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
          </ol>

          <h4>Minuman</h4>
          <ol class="menu-list">
            ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
          </ol>

          <h3>Komentar</h3>
          <div class="restaurant-review">
            ${restaurant.customerReviews.map(review => `
              <div class="review-container">
                <p class="name">${review.name}</p>
                <p class="review">${review.review}</p>
                <small class="date"><i class="far fa-clock"></i> ${review.date}</small>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    LikeBtnInit.init({
      likeButtonContainer: document.getElementById('save-btn-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
