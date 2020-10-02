import {render} from "@components/render";
import {MainMenu} from "@components/navigation/main-menu/main-menu";
import {MainContent} from "@components/navigation/main-content";
import mainStyle from "@style/main.css";

export class Home extends HTMLElement {
  connectedCallback() {
    render(MainMenu, this, `<a href="">Home</a><a href="">Get Started</a><a href="">Wiki</a>`);
    render(MainContent, this, `
      <mobile-stack>
        <logo-component>
          <h1 slot="title">Ragu</h1>
          <h2 slot="sub-title">Slice your front-end</h2>
        </logo-component>
  
        <div>
          <button-set max-width="400px">
            <primary-button>
              <a href="">Get started</a>
            </primary-button>
            <secondary-button>
              <a href="https://github.com/ragu-framework/ragu">Github</a>
            </secondary-button>
          </button-set>
        </div>
      </mobile-stack>
  
      <section class="${mainStyle.infoSection}">
        <h2> 
          Using a Micro-frontend
        </h2>
  
        <p>To use a micro-frontend exposed by Ragu Server is easy as it. Ragu handles all dependency fetching.</p>
  
        <code-block>&lt;ragu-component src=&quot;http://ragu-server.domain.com/components/my-component/&quot;&gt;&lt;/ragu-component&gt;</code-block>
      </section>
  
      <section class="${mainStyle.infoSection}">
        <h2>
          Why to use?
        </h2>
  
        <vertical-slide>
          <div class="${mainStyle.infoSection__details}">
            <h3>🚀 Server Side Rendering</h3>
            <p>Ragu micro-frontends can be exported rendered at the server side improving the user experience and the load time.</p>
          </div>
  
          <div class="${mainStyle.infoSection__details}">
            <h3>📦 Build System</h3>
            <p>Ragu Server comes with a build system on top of webpack which you can extend though the ragu server configuration.</p>
          </div>
  
          <div class="${mainStyle.infoSection__details}">
            <h3>🤝 Coupleless Integration</h3>
            <p>Share code using private npm package requires project build to apply changes. Ragu enable independent deployment.</p>
          </div>
        </vertical-slide>
      </section>
    `);
  }
}

customElements.define('home-page', Home);
