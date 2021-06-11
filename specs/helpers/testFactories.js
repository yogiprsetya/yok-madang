import LikeBtnInit from '../../src/scripts/utilities/save-button';
import FavoriteRestaurant from '../../src/scripts/services/favorite-restaurant';

const createLikeButtonShallow = async (restaurant) => {
  await LikeBtnInit.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    favoriteRestaurants: FavoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonShallow };
