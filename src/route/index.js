import {Home} from "@pages/home";
import {Router} from "director/build/director";
import {RaguReactServerAdapter} from "@pages/ragu-react-server-adapter";

require("../style/variables.css")

const router = Router({
  '\!': () => {
    document.getElementById('app-root').innerHTML = '';
    document.getElementById('app-root').appendChild(new Home());
  },
  '\!/react/server/install': () => {
    document.getElementById('app-root').innerHTML = '';
    document.getElementById('app-root').appendChild(new RaguReactServerAdapter());
  }
});


if (location.hash === '') {
  location.hash = '!';
}

router.init();
