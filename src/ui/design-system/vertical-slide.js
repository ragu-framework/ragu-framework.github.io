import {StyleSlot} from "./style-slot";
import {registerComponent} from "@ui/base-component";

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
          display: flex;
          justify-content: center;
        }
        .scroller {
          display: flex;
          overflow: auto;
        }
        .scroller ::slotted(*) {
          min-width: ${this.getAttribute('small') ? '130px' : '240px'};
          flex-basis: 0;
          flex-grow: 1;
          margin-left: 40px;
        }
        .scroller ::slotted(*:first-child) {
         margin-left: 20px;
        }
        
        @media screen and (min-width: 919px){
          :host .scroller {
            overflow: initial;
          }
        }
      </style>
    `;
  }
}
