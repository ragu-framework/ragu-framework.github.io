import {StyleSlot} from "./style-slot";

class MobileStack extends StyleSlot {
  get styleTemplate() {
    return `
      <style>
        @media screen and (min-width: 720px) {
          :host {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      </style>
    `;
  }
}

customElements.define('mobile-stack', MobileStack)
