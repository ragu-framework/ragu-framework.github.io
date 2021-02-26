import {BaseComponent, registerComponent} from "@ui/base-component";

@registerComponent()
export class MainMenu extends BaseComponent {
  template = `
    <style>
      :host {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(86.92deg, rgba(215,55,113,0.95) 5.1%, rgba(255, 255, 255, 0) 97.29%), rgba(246,183,41,0.95);
        color: white;
        z-index: 1;
      }
      
      @supports (backdrop-filter: blur(6px)) {
        :host {
          background: linear-gradient(86.92deg, rgba(215,55,113,0.6) 5.1%, rgba(255, 255, 255, 0) 97.29%), rgba(246,183,41,0.6);
          backdrop-filter: blur(6px);
        }
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
      
      h1 a {
        color: inherit;
        text-decoration: none;
      }
      
      nav ul {
        list-style: none;
        display: grid;
        grid-auto-flow: column;
        grid-gap: 20px;
        padding: 0;
      }
      
      nav ul a {
        color: white;
        text-decoration: none;
        font-family: Poppins, sans-serif;
        font-weight: normal;
        font-size: 14px;
        text-align: center;
        width: 190px;
        display: block;
        padding: 5px 0;
        border-radius: 20px;
        background: rgba(191, 38, 97, 0.2);
      }

      .right-nav {
        display: flex;
        align-items: center;
      }

      slot[name="right-nav"] {
        margin-right: 10px;
        display: block;
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
      
      @media screen and (max-width: 920px){
        :host nav {
          display: none;
        }
      }
    </style>
    <header>
      <h1>
        <a href="#!">Ragu Framework</a>
      </h1>
      
      <nav>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="https://github.com/ragu-framework/ragu/issues" target="_blank">Ask a Question</a>
          </li>
          <li>
            <a href="https://github.com/ragu-framework/ragu" target="_blank">Github</a>
          </li>
        </ul>
      </nav>
      
      <div class="right-nav">
        <slot name="right-nav"></slot>
      </div>
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
