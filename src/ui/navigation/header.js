import {BaseComponent, registerComponent, render} from "@ui/base-component";
import {MainMenu} from "@ui/navigation/main-menu/main-menu";

@registerComponent()
export class Header extends BaseComponent {
  render() {
    return MainMenu.render(`
      <slot slot="right-nav" name="right-nav"></slot>

      <a slot="link" href="https://github.com/ragu-framework/ragu#installation" target="_blank">Get Started</a>
      <a slot="link" href="https://github.com/ragu-framework/ragu/wiki" target="_blank">Wiki</a>
    `);
  }
}
