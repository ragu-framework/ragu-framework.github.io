import {BaseComponent, registerComponent} from "@ui/base-component";

@registerComponent()
export class MainContent extends BaseComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host {
           margin: 0 auto 0;
           display: block;
           padding: 0 20px;
           max-width: 920px;
        }
      </style>
      <slot></slot>
    `;
  }
}
