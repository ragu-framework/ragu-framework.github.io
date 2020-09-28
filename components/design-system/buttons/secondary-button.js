class SecondaryButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
        }
        ::slotted(*) {
          background: white;
          border: 1px solid #BF265E;
          box-sizing: border-box;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          text-decoration: none;
          color: var(--dark-color);
          font-family: var(--main-title-font-family), sans-serif;
          font-weight: 300;
          padding: 13px;
          width: 100%;
          text-align: center;
          transition: opacity ease-in-out 0.3s;
        }
        ::slotted(*:hover) {
          opacity: 0.8;
        }
      </style>
      
      <slot></slot> 
    `;
  }
}

customElements.define('secondary-button', SecondaryButton);
