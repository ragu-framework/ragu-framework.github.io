import {BaseComponent} from "@ui/base-component";

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
