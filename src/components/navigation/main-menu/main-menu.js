import {registerComponent} from "@components/components";

@registerComponent()
export class MainMenu extends HTMLElement {
  template = `
    <style>
      :host {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background: white;
      }

      header {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 65px;
        border-bottom: 1px solid rgba(43, 51, 50, 0.13);
      }
      
      h1 {
        font-family: var(--main-title-font-family), 'sans-serif';
        font-weight: var(--main-title-weight);
        font-size: 0.8rem;
      }
      
      nav {
        position: fixed;
        top: 66px;
        right: max(-100%, -320px);
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        width: 80%;
        max-width: 320px;
        backdrop-filter: blur(5px);
        padding: 20px;
        box-sizing: border-box;
        border-left: 1px solid rgba(43, 51, 50, 0.13);
        border-top: 1px solid #ffffff;
        transition-duration: 1s;
      }
      nav.open {
        right: 0;
      }
      ::slotted(a) {
        display: block;
        font-family: var(--link-font-family), sans-serif;
        color: var(--main-menu-link-color);
        text-decoration: none;
        padding: 10px 20px;
        font-weight: 300;
        margin-bottom: 20px;
        background: rgba(43, 51, 50, 0.03);
        transition-duration: 0.5s;
        border-radius: 26px;
      }
      ::slotted(a:hover) {
        background: rgba(43, 51, 50, 0.08);
      }
    </style>
    <header>
        <h1>
            Ragu Framework
        </h1>
        
        <nav>
            <slot></slot>
        </nav>
        
        <hamburger-menu></hamburger-menu>
    </header>
  `

  constructor() {
    super();
  }

  connectedCallback() {
    this.dom = this.attachShadow({mode: 'open'});
    this.dom.innerHTML = this.template;

    this.bindEvents();
  }

  bindEvents() {
    this.dom.addEventListener('hamburger-menu-toggle', (e) => {
      e.detail.open && this.dom.querySelector('nav').classList.add('open');
      !e.detail.open && this.dom.querySelector('nav').classList.remove('open');
    });
  }
}
