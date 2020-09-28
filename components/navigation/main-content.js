class MainContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host {
           margin-top: 85px;
           display: block;
           padding: 0 20px;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('main-content', MainContent);
