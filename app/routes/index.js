import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map((model) => {
      let type;
      let { attributes } = model;
      const { category } = attributes;

      if (COMMUNITY_CATEGORIES.includes(category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { type, ...attributes };
    });
  }
}
