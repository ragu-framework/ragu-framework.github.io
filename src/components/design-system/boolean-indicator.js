import {BaseComponent, registerComponent} from "@components/components";

@registerComponent()
export class BooleanIndicator extends BaseComponent {
  render() {
    return `${this.getAttribute('checked') === 'true' ? `✅` : `🚫`} ${super.render()}`;
  }
}
