import {BaseComponent, registerComponent, render} from "ui/components";
import {MainMenu} from "ui/navigation/main-menu/main-menu";

@registerComponent()
export class Header extends BaseComponent {
  render() {
    return MainMenu.render(`
      <a href="https://github.com/ragu-framework/ragu#installation" target="_blank">Get Started</a>
      <a href="https://github.com/ragu-framework/ragu/wiki" target="_blank">Wiki</a>
    `);
  }
}
