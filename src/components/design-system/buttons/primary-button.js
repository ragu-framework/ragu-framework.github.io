class PrimaryButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
        }
        ::slotted(*) {
          background: #BF265E;
          border: 1px solid #BF265E;
          box-sizing: border-box;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          color: white;
          text-decoration: none;
          font-family: var(--main-title-font-family), sans-serif;
          font-weight: 300;
          width: 100%;
          padding: 13px;
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

customElements.define('primary-button', PrimaryButton);
