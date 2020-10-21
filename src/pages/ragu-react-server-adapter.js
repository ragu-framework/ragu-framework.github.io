import {registerComponent} from "@ui/base-component";
import {MainContent} from "@ui/navigation/main-content";
import {StyleSlot} from "@ui/design-system/style-slot";
import {MfLoader} from "@ui/components/mf-loader";


@registerComponent()
export class RaguReactServerAdapter extends StyleSlot {
  shadowDOM = false;

  get template() {
    return `
    ${MainContent.render(`
      ${MfLoader.render('', {src: 'https://ragu-react-server-adapter.herokuapp.com/components/installation'})}
    `)}
    `
  }
}
