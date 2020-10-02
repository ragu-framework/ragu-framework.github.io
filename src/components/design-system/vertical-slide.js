import {StyleSlot} from "./style-slot";
import {registerComponent} from "@components/components";

@registerComponent()
export class VerticalSlide extends StyleSlot {
  template = `
    <div class="scroller">
      <slot></slot>
    </div> 
  `

  get styleTemplate() {
    return `
      <style>
        :host {
          width: calc(100% + 40px);
          box-sizing: border-box;
          margin-left: -20px;
          display: block;
        }
        .scroller {
          display: flex;
          overflow: auto;
        }
        .scroller ::slotted(*) {
          min-width: 240px;
          flex-basis: auto;
          flex-grow: 1;
          margin-left: 40px;
        }
        .scroller ::slotted(*:first-child) {
         margin-left: 20px;
        }
      </style>
    `;
  }
}
