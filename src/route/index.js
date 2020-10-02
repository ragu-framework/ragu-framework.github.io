import {render} from "@components/components";
import {Home} from "@pages/home";

require('@components/design-system/style-slot');
require('@components/design-system/buttons/button-set');
require("@components/navigation/main-menu/hamburger-menu.js");
require("@components/design-system/style-slot.js");
require("@components/design-system/mobile-stack.js");
require("@components/design-system/vertical-slide.js");
require("@components/design-system/logo/logo.js");
require("@components/design-system/buttons/primary-button.js");
require("@components/design-system/buttons/secondary-button.js");
require("@components/design-system/buttons/button-set.js");
require("@components/design-system/code/code-block.js");

const style = document.createElement('style');
style.innerHTML = require("../style/variables.css");
document.head.appendChild(style);

document.body.innerHTML = render(Home);
