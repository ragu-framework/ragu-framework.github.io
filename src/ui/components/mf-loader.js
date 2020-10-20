import {BaseComponent, registerComponent} from "@ui/base-component";

@registerComponent()
export class MfLoader extends BaseComponent {
  shadowDOM = false;

  render() {
    return `
      <div class="mf-loader__loading-indicator">Loading...</div>
      <ragu-component src="${this.getAttribute('src')}"></ragu-component>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.querySelector('ragu-component').addEventListener('ragu:hydrated', () => {
      this.querySelector('.mf-loader__loading-indicator').remove();
    })
  }
}
