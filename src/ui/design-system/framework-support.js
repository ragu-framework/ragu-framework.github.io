import {BaseComponent, registerComponent} from "@ui/components";
import {ImageDescription} from "@ui/design-system/image-description";
import {InfoSection} from "@ui/design-system/sections/info-section";


@registerComponent()
export class FrameworkSupport extends BaseComponent {
  render() {
    return ImageDescription.render(`
      <style>
        ::slotted(*) {
          display: block;
          white-space: nowrap;
        }
        h2 {
          margin-top: 0;
        }
      </style>

      <img 
        src="${this.getAttribute('framework-logo')}" alt="${this.getAttribute("framework-name")} logo"
        slot="image"
        width="73"
      >

      ${InfoSection.render(`
        <h2 slot="title">${this.getAttribute("framework-name")}</h2>
        <slot slot="content"></slot>
      `, {slot: 'description'})}
    `)
  }
}
