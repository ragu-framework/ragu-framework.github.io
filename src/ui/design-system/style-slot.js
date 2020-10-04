import {BaseComponent} from "ui/components";

export class StyleSlot extends BaseComponent {
  get template() {
    return `
      <slot></slot>
    `;
  }

  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = `${this.styleTemplate}${this.template}`
  }
}
