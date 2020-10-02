import logo from './logo.png';
import {BaseComponent, registerComponent} from "@components/components";

@registerComponent()
export class Logo extends BaseComponent {
  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          padding: 20px;
        }
        section {
          align-items: center;
          display: flex;
        }
        img {
          margin-right: 20px;
        }
        ::slotted(h1), ::slotted(h2) {
          margin: 0;
        }
        ::slotted(h1) {
          font-family: var(--main-title-font-family), sans-serif;
          font-size: 4rem;
        }
        ::slotted(h2) {
          font-family: var(--secondary-title-font-family), sans-serif;
          font-weight: var(--secondary-title-weight);
          font-size: 1rem;
          
        }
      </style>
      <section>
        <img src="${logo}" alt="Ragu Logo" width="106" height="106">
        <div class="logo-lettering">
          <slot name="title"></slot> 
          <slot name="sub-title"></slot>
        </div> 
      </section>
    `
  }
}