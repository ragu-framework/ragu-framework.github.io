import {BaseComponent, registerComponent} from "ui/components";

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
           margin: 85px auto 20px;
           display: block;
           padding: 0 20px;
           max-width: 920px;
        }
      </style>
      <slot></slot>
    `;
  }
}
