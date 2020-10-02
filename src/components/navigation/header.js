import {BaseComponent, registerComponent, render} from "@components/components";
import {MainMenu} from "@components/navigation/main-menu/main-menu";

@registerComponent()
export class Header extends BaseComponent {
  render() {
    return render(MainMenu, `<a href="">Home</a><a href="">Get Started</a><a href="">Wiki</a>`);
  }
}
