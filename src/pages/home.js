import {registerComponent} from "@ui/base-component";
import {MainContent} from "@ui/navigation/main-content";
import {VerticalSlide} from "@ui/design-system/vertical-slide";
import {StyleSlot} from "@ui/design-system/style-slot";
import {Text} from "@ui/design-system/typography/text";
import {Title1} from "@ui/design-system/typography/title-1";
import {InfoSection} from "@ui/design-system/sections/info-section";
import reactLogo from '../languages-and-frameworks/react.png';
import vueLogo from '../languages-and-frameworks/vue.png';
import customElementsLogo from '../languages-and-frameworks/custom-elements.png';
import angularLogo from '../languages-and-frameworks/angular.png';
import {TestRaguDom} from "@ui/components/test-ragu-dom";


@registerComponent()
export class Home extends StyleSlot {
  shadowDOM = false;

  styleTemplate = `<style>
    .infoSection {
      margin: 60px 0;
    }
    .ragu-compatibility a {
      color: inherit;
    }

    .embed-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      max-width: 100%;
    }

    .embed-container iframe, .embed-container object, .embed-container embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .background-wrapper {
      background: linear-gradient(86.92deg, #bf265e 5.1%, rgba(255, 255, 255, 0) 97.29%), #f1ab42;
      margin-top: -40px;
      min-height: 800px;
      box-shadow: 0 0 75px rgba(0, 0, 0, 0.15);
    }

    .logo-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 180px 0 90px;
      align-items: center;
      margin: 0 auto;
    }

    .logo-wrapper h1 {
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 96px;
      color: white;
      margin: 0;
      padding-right: 80px;
      border-right: 1px solid rgba(255, 255, 255, 0.4);
      text-align: right;
    }

    .logo-wrapper h2 {
      font-family: Lato, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 30px;
      margin: 0;
      padding-left: 80px;
      color: #FFFFFF;
    }

    .ragu-compatibility {
      font-family: Poppins, sans-serif;
      padding: 80px 0;
      font-weight: 300;
      font-size: 14px;
    }

    @keyframes compatibility-animation {
      0% {transform: rotate(-10deg);}
      50% {transform: rotate(10deg);}
      100% {transform: rotate(-10deg);}
    }

    @keyframes compatibility-animation-odd {
      0% {transform: rotate(10deg);}
      50% {transform: rotate(-10deg);}
      100% {transform: rotate(10deg);}
    }

    .ragu-compatibility .language {
      margin-top: 60px;
      display: grid;
      text-align: center;
      justify-content: space-between;
      text-decoration: none;
    }

    .ragu-compatibility .language img {
      transition: transform ease-in-out 3s;
    }

    .ragu-compatibility .language:not(:hover) img {
      animation: 1s compatibility-animation infinite;
    }

    .ragu-compatibility .language:not(:hover):nth-child(odd) img {
      animation: 1s compatibility-animation-odd infinite;
    }

    .ragu-compatibility .language:hover img {
      animation: none;
      transform: rotate(-10deg) scale(1.3);
    }

    .ragu-compatibility .language:not(a) {
      filter: grayscale(1);
      transition: filter ease-in-out 0.5s
    }

    .ragu-compatibility .language:hover {
      filter: grayscale(0);
    }

    .ragu-compatibility h3 {
      font-size: 1rem;
      margin: 0;
    }

    .ragu-compatibility h1, .ragu-compatibility h2 {
      text-align: center;
      margin: 0;
    }

    .ragu-compatibility h1 {
      font-family: Lato, sans-serif;
      font-weight: 300;
      font-size: 96px;
      color: #2C3332;
    }

    .core-concepts {
      background: linear-gradient(86.92deg, #61DAFB 5.1%, rgba(255, 255, 255, 0) 97.29%), #41B883;
      box-shadow: 0 0 75px rgba(0, 0, 0, 0.15);
      padding-top: 5rem;
      margin-bottom: 5rem;
      display: flex;
    }

    .ragu-compatibility h2 {
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
    }

    @media screen and (max-width: 920px){
      .background-wrapper {
        padding-top: 100px;
      }

      .logo-wrapper {
        grid-template-columns: 1fr;
        padding: 0;
        max-width: 80%;
        margin-bottom: 20px;
      }

      .logo-wrapper h1, .logo-wrapper h2 {
        padding: 0 0 20px;
        text-align: center;
      }

      .logo-wrapper h1 {
        border-right: 0;
      }

      .ragu-compatibility h1 {
        font-size: 48px;
      }

      .ragu-compatibility h2 {
        font-size: 24px;
      }
    }
  </style>
`;

  get template() {
    return `
    <div class="background-wrapper">
      ${MainContent.render(`
          <div class="logo-wrapper">
            <h1>Ragu</h1>
            <h2>It was never so simple to deliver a frontend!</h2>
          </div>
      `)}

      <ragu-component src="https://ragu-framework.github.io/ragu-cli/index.json"></ragu-component>
    </div>

    ${MainContent.render(`
      <section id="how-to" class="infoSection ragu-compatibility">
        <h1>Ready to Start?</h1>
        <h2>Pick Your Framework:</h2>

        ${VerticalSlide.render(`
          <a href="#!/ragu-react-server-adapter" class="language">
            <img src="${reactLogo}" alt="react" />
            <h3>React Docs</h3>
          </a>
          <a href="#!/ragu-vue-server-adapter" class="language">
            <img src="${vueLogo}" />
            <h3>Vue Docs</h3>
          </a>
          <div class="language">
            <img src="${angularLogo}" />
            <h3>Angular</h3>
            <small>(not supported yet)</small>
          </div>
          <div class="language">
            <img src="${customElementsLogo}" />
            <h3>Custom Elements</h3>
            <small>(not supported yet)</small>
          </div>
        `, {small: true})}
      </section>
    `)}

    <section class="core-concepts">
      <ragu-component src="https://ragu-framework.github.io/ragu/main-features-mfe.json"></ragu-component>
    </section>

    ${TestRaguDom.render()}

    ${MainContent.render(`
      ${Title1.render(`Articles`)}

      ${Text.render(`
        <ul>
          <li>
            <a href="https://medium.com/@carlosmaniero/micro-frontends-with-react-vue-and-ragu-c5a2e3ecc2ab" target="_blank">
              Micro-frontends with React, Vue and Ragu
            </a>
          </li>
          <li>
            <a href="https://medium.com/@carlosmaniero/transforming-your-vue-js-project-into-micro-frontends-with-server-side-rendering-9cdaab16f5e9" target="_blank">
              Transforming your Vue.js project into Micro-frontends with Server Side Rendering
            </a>
          </li>
        </ul>
      `)}
    `, {
      class: 'footer'
    })}
    `
  }
}
