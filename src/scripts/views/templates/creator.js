const { BASE_IMAGE_URL } = process.env;

const createRestaurantItem = ({ pictureId, name, city, rating, description }) => `
  <div class="col resto">
    <img class="resto-img" src="${BASE_IMAGE_URL + pictureId}" alt="${name}" title="${name}">
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
  </div>
`;

export {
  createRestaurantItem
};
