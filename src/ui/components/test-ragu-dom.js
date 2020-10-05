import {BaseComponent, registerComponent} from "@ui/components";
import {Title1} from "@ui/design-system/typography/title-1";
import {Text} from "@ui/design-system/typography/text";
import {PrimaryButton} from "@ui/design-system/buttons/primary-button";
import {MainContent} from "@ui/navigation/main-content";

@registerComponent()
export class TestRaguDom extends BaseComponent {
  shadowDOM = false;

  microFrontend = "https://ragu-catalog-react.herokuapp.com/components/pokemon-details?name=bulbasaur";

  render() {
    return `
      <style>
        ${TestRaguDom.elementName()} #json-wrapper {
          background: #2B3332;
          padding: 20px;
          font-family: 'Source Code Pro', monospace;
          color: white;
          overflow: auto;
          white-space: nowrap;
        }

        ${TestRaguDom.elementName()} .centered {
          max-width: 920px;
          margin: 0 auto;
        }

        ${TestRaguDom.elementName()} a {
          color: #BF265E;
        }

        ${TestRaguDom.elementName()} json-viewer {
          --font-family: 'Source Code Pro', monospace;
          --preview-background: transparent;
          --key-color: #d9751e;
          --string-value-color: #779e62;
          --numeric-value-color: #ba4a3c;
          --null-value-color: #7f7f7f;
          --boolean-value-color: #ba4a3c;
          --toggle-color: #bbb;
        }

        ${TestRaguDom.elementName()} form {
          display: flex;
          align-items: center;
          width: 100%;
        }

        ${TestRaguDom.elementName()} #result ${Title1.elementName()} {
          margin: 20px 0;
          display: block;
          padding: 0 20px;
        }

        ${TestRaguDom.elementName()} #output {
          text-align: center;
          overflow: auto;
          padding: 0 20px;
        }
        ${TestRaguDom.elementName()} #output > div {
          min-width: min(920px, 100%);
          display: inline-block;
          text-align: initial;
        }

        ${TestRaguDom.elementName()} #other-examples {
          background: rgba(43, 51, 50, 0.06);
          padding: 6px 40px 20px;
          border-radius: 10px;
        }

        ${TestRaguDom.elementName()} #other-examples strong {
          margin-top: 14px;
          display: block;
        }

        ${TestRaguDom.elementName()} .error {
          color: #ba4a3c;
        }

        ${TestRaguDom.elementName()} form input {
          flex-grow: 1;
          margin-right: 20px;
          border: 1px solid rgba(43, 51, 50, 0.13);
          padding: 16px 20px;
          border-radius: 10px;
        }

        @media screen and (min-width: 940px) {
          ${TestRaguDom.elementName()} #result ${Title1.elementName()} {
            padding: 0
          }
        }
      </style>

      ${MainContent.render(`
        ${Title1.render(`Playground`)}

        ${Text.render(`
          <p>
            There is a demo using React and Vue.js at the same app live at:
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
                <li>
                  <strong>React Catalog</strong>
                  <ul>
                    <li><a href="https://ragu-catalog-react.herokuapp.com/components/pokemon-details?name=pikachu" rel="nofollow">Pikachu</a></li>
                    <li><a href="https://ragu-catalog-react.herokuapp.com/components/featured-products" rel="nofollow">Pokemon Catalog</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Vue.js Cart</strong>
                  <ul>
                    <li><a href="https://ragu-cart-vuejs.herokuapp.com/components/cart" rel="nofollow">Cart Count</a></li>
                    <li><a href="https://ragu-cart-vuejs.herokuapp.com/components/cart-list" rel="nofollow">Cart List</a></li>
                  </ul>
                </li>
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

    this.element.querySelector('#result').style.opacity = '0.3';

    this.element.querySelector('ragu-component')
      .addEventListener('ragu:fetch-fail', (e) => {
        this.onMicroFrontendError()
      });

    this.element.querySelector('ragu-component')
      .addEventListener('ragu:hydrated', (e) => this.onMicroFrontendHydrated(e));

    this.element.querySelectorAll("#other-examples a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.microFrontend = e.target.href;
        this.updateMicroFrontends();
      });
    })

    this.element.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.microFrontend = this.element.querySelector('input').value;
      this.updateMicroFrontends();
    });
  }

  onMicroFrontendHydrated(e) {
    const allowedKeys = [
      'client',
      'dependencies',
      'html',
      'props',
      'resolverFunction',
      'state',
      'styles'
    ]

    const response = {};

    allowedKeys.forEach(key => {
      response[key] = e.detail[key];
    });

    this.element.querySelector('#result').style.opacity = '1';
    this.element.querySelector('#json-wrapper').innerHTML = `
      <p><strong>GET:</strong> ${this.microFrontend}</p>

      <json-viewer value='${JSON.stringify(response)}'></json-viewer>
    `
  }

  updateMicroFrontends() {
    this.element.querySelector('#result').style.opacity = '0.3';
    this.element.querySelector('input').value = this.microFrontend;
    this.element.querySelector('ragu-component').setAttribute('src', this.microFrontend);
  }

  onMicroFrontendError() {
    this.element.querySelector('#result').style.opacity = '1';
    this.element.querySelector('ragu-component').innerHTML = "Error!";
    this.element.querySelector('#json-wrapper').innerHTML = `
      <div class="error">
        <p><strong>GET:</strong> ${this.microFrontend}</p>

        Fail to load!
      </div>
    `
  }
}
