import {StyleSlot} from "ui/design-system/style-slot";
import {registerComponent} from "ui/components";

@registerComponent()
export class BaseButton extends StyleSlot {
  get styleTemplate() {
    return `
      <style>
        :host {
          display: flex;
        }
        ::slotted(*) {
          background: ${this.background};
          border: 1px solid ${this.borderColor};
          box-sizing: border-box;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          color: ${this.textColor};
          text-decoration: none;
          font-family: var(--main-title-font-family), sans-serif;
          font-weight: 300;
          width: 100%;
          padding: 13px;
          text-align: center;
          transition: opacity ease-in-out 0.3s;
        }
        ::slotted(*:hover) {
          opacity: 0.8;
        }
      </style>
    `
  }
}
