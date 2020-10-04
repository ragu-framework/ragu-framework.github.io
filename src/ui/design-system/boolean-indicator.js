import {BaseComponent, registerComponent} from "ui/components";

@registerComponent()
export class BooleanIndicator extends BaseComponent {
  render() {
    return `${this.getAttribute('checked') === 'true' ? `✅` : `🚫`} ${super.render()}`;
  }
}
