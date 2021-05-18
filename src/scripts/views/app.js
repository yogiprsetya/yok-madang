import DrawerInit from '../utilities/drawer';
import UrlParser from '../utilities/url-parser';
import routes from '../routes';

class App {
  constructor({ menu, drawer, content }) {
    this._menu = menu;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInit.init({
      menu: this._menu,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
