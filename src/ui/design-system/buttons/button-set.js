import {StyleSlot} from "../style-slot";
import {registerComponent} from "@ui/base-component";

@registerComponent()
export class ButtonSet extends StyleSlot {
  get styleTemplate() {
    return `
      <style>
        :host {
          display: grid;
          grid-gap: 20px;
          grid-auto-columns: 1fr;
          grid-auto-flow: column;
          max-width: ${this.getAttribute('max-width')};
          margin: 20px auto;
        }
      </style>
    `
  }
}
