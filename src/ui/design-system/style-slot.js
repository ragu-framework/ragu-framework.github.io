import {BaseComponent} from "@ui/base-component";

export class StyleSlot extends BaseComponent {
  get template() {
    return `
      <slot></slot>
    `;
  }

  afterConnect() {

  }

  connectedCallback() {
    this.shadowDOM && this.attachShadow({mode: "open"});
    this.render();
  }

  render() {
    this.element.innerHTML = `${this.styleTemplate || ''}${this.template}`
    this.afterConnect();
  }
}
