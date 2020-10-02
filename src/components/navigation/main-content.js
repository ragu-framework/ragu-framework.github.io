export class MainContent extends HTMLElement {
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

customElements.define('main-content', MainContent);
