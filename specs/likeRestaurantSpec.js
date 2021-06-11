import FavoriteRestaurant from '../src/scripts/services/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-button-container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonShallow({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonShallow({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonShallow({ id: 1 });

    document.querySelector('#like-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonShallow({ id: 1 });
    await FavoriteRestaurant.putRestaurant({ id: 1 });

    document.querySelector('#like-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    FavoriteRestaurant.deleteRestaurant(1);
  });
});
