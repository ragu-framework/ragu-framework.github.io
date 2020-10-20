import {BaseComponent, registerComponent} from "@ui/base-component";

@registerComponent()
export class BooleanIndicator extends BaseComponent {
  render() {
    return `${this.getAttribute('checked') === 'true' ? `✅` : `🚫`} ${super.render()}`;
  }
}
