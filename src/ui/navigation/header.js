import {BaseComponent, registerComponent, render} from "ui/components";
import {MainMenu} from "ui/navigation/main-menu/main-menu";

@registerComponent()
export class Header extends BaseComponent {
  render() {
    return MainMenu.render(`<a href="">Home</a><a href="">Get Started</a><a href="">Wiki</a>`);
  }
}
