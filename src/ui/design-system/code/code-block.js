import {StyleSlot} from "../style-slot";
import {registerComponent} from "ui/components";

@registerComponent()
export class CodeBlock extends StyleSlot {
  get styleTemplate() {
    return `
      <style>
        :host {
          background: #2B3332;
          color: #FFFFFF;
          padding: 1.5rem 0.75rem;
          font-family: 'Source Code Pro', monospace;
          overflow: auto;
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          white-space: nowrap;
        }
      </style>
    `
  }
}
