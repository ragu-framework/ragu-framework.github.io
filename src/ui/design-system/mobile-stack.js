import {StyleSlot} from "./style-slot";
import {registerComponent} from "ui/components";

@registerComponent()
export class MobileStack extends StyleSlot {
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
