import {registerComponent} from "@components/components";
import {MainContent} from "@components/navigation/main-content";
import {Header} from "@components/navigation/header";
import {CodeBlock} from "@components/design-system/code/code-block";
import {VerticalSlide} from "@components/design-system/vertical-slide";
import {ButtonSet} from "@components/design-system/buttons/button-set";
import {StyleSlot} from "@components/design-system/style-slot";
import {Logo} from "@components/design-system/logo/logo";
import {MobileStack} from "@components/design-system/mobile-stack";
import {PrimaryButton} from "@components/design-system/buttons/primary-button";
import {SecondaryButton} from "@components/design-system/buttons/secondary-button";


@registerComponent()
export class Home extends StyleSlot {
  styleTemplate = `<style>
    .infoSection {
        margin: 60px 0;
    }
    
    .infoSection__details h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.625rem;
    }
    
    h2 {
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin: 0;
    }
    
    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.375;
    }
  </style>
`;

  get template() {
    const header = Header.render();

    const main = MainContent.render(`
      ${MobileStack.render(`
        ${Logo.render(`<h1 slot="title">Ragu</h1><h2 slot="sub-title">Slice your front-end</h2>`)}
  
        <div>
          ${ButtonSet.render(
            `
              ${PrimaryButton.render(`<a href="">Get started</a>`)}
              ${SecondaryButton.render(`<a href="https://github.com/ragu-framework/ragu">Github</a>`)}
            `, 
            {'max-width': '420px'}
          )}
        </div>
      `)}
  
      <section class="infoSection">
        <h2> 
          Using a Micro-frontend
        </h2>
  
        <p>To use a micro-frontend exposed by Ragu Server is easy as it. Ragu handles all dependency fetching.</p>
  
        ${CodeBlock.render("&lt;ragu-component src=&quot;http://ragu-server.domain.com/components/my-component/&quot;&gt;&lt;/ragu-component&gt;")}
      </section>
  
      <section class="infoSection">
        <h2>
          Why to use?
        </h2>
  
        ${VerticalSlide.render(`
          <div class="infoSection__details">
            <h3>🚀 Server Side Rendering</h3>
            <p>Ragu micro-frontends can be exported rendered at the server side improving the user experience and the load time.</p>
          </div>
  
          <div class="infoSection__details">
            <h3>📦 Build System</h3>
            <p>Ragu Server comes with a build system on top of webpack which you can extend though the ragu server configuration.</p>
          </div>
  
          <div class="infoSection__details">
            <h3>🤝 Coupleless Integration</h3>
            <p>Share code using private npm package requires project build to apply changes. Ragu enable independent deployment.</p>
          </div>
        `)}
      </section>
    `);

    return `${header}${main}`
  }
}
