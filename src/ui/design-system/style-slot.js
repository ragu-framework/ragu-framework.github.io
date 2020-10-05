import {BaseComponent} from "ui/components";

export class StyleSlot extends BaseComponent {
  get template() {
    return `
      <slot></slot>
    `;
  }

  connectedCallback() {
    this.shadowDOM && this.attachShadow({mode: "open"});
    this.element.innerHTML = `${this.styleTemplate}${this.template}`
  }
}
