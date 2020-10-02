export class StyleSlot extends HTMLElement {
  template = `
    <slot></slot>
  `;

  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = `${this.styleTemplate}${this.template}`
  }
}
