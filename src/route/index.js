import {Home} from "@pages/home";
import {Router} from "director/build/director";
import {RaguReactServerAdapter} from "@pages/ragu-react-server-adapter";
import {Page} from "@pages/page";

require("../style/variables.css");

document.getElementById('app-root').innerHTML = Page.render(
  `
    <span slot="gh-button">
      <a
        class="github-button"
        href="https://github.com/ragu-framework/ragu"
        data-icon="octicon-star" 
        data-size="large"
        data-show-count="true"
        aria-label="Star ragu-framework/ragu on GitHub"
      >Star</a>
    </span>`);

const page = document.getElementById('app-root').firstChild;

const router = Router({
  '\!': () => {
    page.setContent(new Home());
  },
  '\!/react/server/install': () => {
    page.setContent(new RaguReactServerAdapter());
  }
});


if (location.hash === '') {
  location.hash = '!';
}

router.init();
