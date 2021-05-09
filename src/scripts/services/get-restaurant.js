const { BASE_URL } = process.env;

class getRestaurants {
  static async restaurantList() {
    const response = await fetch(`${BASE_URL}list`);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async restaurantDetails(id) {
    const response = await fetch(`${BASE_URL}detail/${id}`);
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default getRestaurants;
