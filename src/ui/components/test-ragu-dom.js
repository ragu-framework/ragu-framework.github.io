import {BaseComponent, registerComponent} from "@ui/components";
import {Title1} from "@ui/design-system/typography/title-1";
import {Text} from "@ui/design-system/typography/text";
import {PrimaryButton} from "@ui/design-system/buttons/primary-button";
import {MainContent} from "@ui/navigation/main-content";

@registerComponent()
export class TestRaguDom extends BaseComponent {
  microFrontend = "https://ragu-catalog-react.herokuapp.com/components/pokemon-details?name=bulbasaur";

  render() {
    return `
      <style>
        #json-wrapper {
          background: #2B3332;
          padding: 20px;
          font-family: 'Source Code Pro', monospace;
          color: white;
        }

        .centered {
          width: 920px;
          margin: 0 auto;
        }

        a {
          color: #BF265E;
        }

        json-viewer {
          --font-family: 'Source Code Pro', monospace;
          --preview-background: transparent;
          --key-color: #d9751e;
          --string-value-color: #779e62;
          --numeric-value-color: #ba4a3c;
          --null-value-color: #7f7f7f;
          --boolean-value-color: #ba4a3c;
          --toggle-color: #bbb;
        }

        form {
          display: flex;
          align-items: center;
          width: 100%;
        }

        #result ${Title1.elementName()} {
          margin: 20px 0;
          display: block;
        }

        #output {
          text-align: center;
        }
        #output > div {
          min-width: 920px;
          display: inline-block;
          text-align: initial;
        }

        input {
          flex-grow: 1;
          margin-right: 20px;
          border: 1px solid rgba(43, 51, 50, 0.13);
          padding: 16px 20px;
          border-radius: 10px;
        }
      </style>

      ${MainContent.render(`
        ${Title1.render(`Check it out!`)}

        ${Text.render(`
          <p>
            There is a demo using React and VueJS at the same app live at:
            <a href="https://ragu-ecommerce.herokuapp.com/" target="_blank">https://ragu-ecommerce.herokuapp.com/.</a>
          </p>
          <p>
            You can play with some micro-frontends from ragu-ecommerce to have a better understanding of how it works and
            how easy it is to use a micro-frontend.
          </p>
        `)}

        <form>
          <input type="text" value="${this.microFrontend}">
          ${PrimaryButton.render(`<button>Go!</button>`)}
        </form>

        ${Text.render(`
          <div>
            <p>
              <strong>Other examples: </strong>

              <ul id="other-examples">
                <li><a href="https://ragu-catalog-react.herokuapp.com/components/pokemon-details?name=pikachu" rel="nofollow">Pikachu</a></li>
                <li><a href="https://ragu-catalog-react.herokuapp.com/components/featured-products" rel="nofollow">Pokemon Catalog</a></li>
              </ul>
            </p>
          </div>
        `)}
      `)}

      <div id="result">
        <div class="centered">
          ${Title1.render(`Response`)}
          <div id="json-wrapper"></div>
        </div>

        <div class="centered">
          ${Title1.render(`Result`)}
        </div>

        <div id="output">
          <div>
            <ragu-component src="${this.microFrontend}"></ragu-component>
          </div>
        </div>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback();

    this.shadowRoot.getElementById('result').style.opacity = '0.3';

    this.shadowRoot.querySelector('ragu-component')
      .addEventListener('ragu:hydrated', (e) => this.onMicroFrontendHydrated(e));

    this.shadowRoot.querySelectorAll("#other-examples a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.microFrontend = e.target.href;
        this.updateMicroFrontends();
      });
    })

    this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.microFrontend = this.shadowRoot.querySelector('input').value;
      this.updateMicroFrontends();
    });
  }

  onMicroFrontendHydrated(e) {
    this.shadowRoot.getElementById('result').style.opacity = '1';
    this.shadowRoot.getElementById('json-wrapper').innerHTML = `
      GET: ${this.microFrontend}

      <json-viewer value='${JSON.stringify(e.detail)}'></json-viewer>
    `
  }

  updateMicroFrontends() {
    this.shadowRoot.getElementById('result').style.opacity = '0.3';
    this.shadowRoot.querySelector('input').value = this.microFrontend;
    this.shadowRoot.querySelector('ragu-component').setAttribute('src', this.microFrontend);
  }
}
