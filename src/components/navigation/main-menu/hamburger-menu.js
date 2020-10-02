class HamburgerMenu extends HTMLElement {
  constructor() {
    super();
    this.open = false;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        @keyframes rotate-scale-up {
          0% {
            transform: scale(1) rotateZ(0);
          }
          50% {
            transform: scale(1.25) rotateZ(157deg);
          }
          100% {
            transform: scale(1) rotateZ(315deg);
          }
        }
        
        @keyframes rotate-scale-down {
          0% {
            transform: scale(1) rotateZ(315deg);
          }
          50% {
            transform: scale(1.25) rotateZ(157deg);
          }
          100% {
            transform: scale(1) rotateZ(0);
          }
        }
        
        * {
          outline: none;
        }
        button {
          border: 0;
          background: transparent;
          cursor: pointer;
          padding: 0;
          margin: 0;
          width: 20px;
          height: 20px;
          box-sizing: border-box;
        }
        button.opened {
          animation: rotate-scale-up 0.65s linear both;

          transition-duration: 0.5s;
        }
        button.closed {
            animation: rotate-scale-down 0.65s linear both;
        }
        button:focus {
          box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.05);
          border-radius: 100px;
          padding: 5px;
          width: 30px;
          height: 30px;
          margin: -5px;
        }
      </style>

      <button tabindex="0">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" tabindex="-1">
          <rect x="8" width="3.2" height="20" fill="#2B3332"/>
          <rect y="11.2" width="3.2" height="20" transform="rotate(-90 0 11.2)" fill="#2B3332"/>
        </svg>
      </button>
    `;

    this.addEventListener('click', () => {
      this.open = !this.open;
      this.toggleClassed(shadowRoot);

      this.dispatchEvent(new CustomEvent('hamburger-menu-toggle', {
        detail: {
          open: this.open
        },
        bubbles: true
      }));
    });
  }

  toggleClassed(shadowRoot) {
    this.open && shadowRoot.querySelector('button').classList.remove('closed');
    this.open && shadowRoot.querySelector('button').classList.add('opened');
    !this.open && shadowRoot.querySelector('button').classList.remove('opened');
    !this.open && shadowRoot.querySelector('button').classList.add('closed');
  }
}

customElements.define('hamburger-menu', HamburgerMenu);
