const classToNameComponentRegistry = {
};

export const elementNameOfComponent = (componentClass) => {
  if (componentClass.tagName) {
    return componentClass.tagName;
  }

  if (!classToNameComponentRegistry[componentClass]) {
    classToNameComponentRegistry[componentClass] = `ragu-${componentClass.name.toLowerCase()}-${Math.ceil(Math.random() * 10000000)}`;
  }

  return classToNameComponentRegistry[componentClass];
}

export const render = (componentClass, content = '', attributes = {}) => {
  const elementName = elementNameOfComponent(componentClass);
  let attributesString = "";

  for (const attributeKey of Object.keys(attributes)) {
    attributesString += ` ${attributeKey}="${attributes[attributeKey]}"`;
  }

  return `<${elementName}${attributesString}>${content}</${elementName}>`;

}

export class BaseComponent extends HTMLElement {
  shadowDOM = true;

  connectedCallback() {
    this.shadowDOM && this.attachShadow({mode: "open"});
    this.element.innerHTML = `${this.render()}`
  }

  render() {
    return `<slot></slot>`
  }

  get element() {
    return this.shadowDOM ? this.shadowRoot : this;
  }

  static render(...args) {
    return render(this, ...args);
  }

  static elementName() {
    return elementNameOfComponent(this);
  }

  static createStyledElement(html = '<slot></slot>') {
    return (template, ...args) => createStyledComponent(this.render(html))(template, ...args);
  }
}


export const registerComponent = () => (componentClass) => {
  customElements.define(elementNameOfComponent(componentClass), componentClass);
}

export const createStyledComponent = (html) => (template, ...args) => {
  class Styled extends BaseComponent {
    get template() {
      return html;
    }

    connectedCallback() {
      this.attachShadow({mode: "open"});
      this.shadowRoot.innerHTML = `${this.styleTemplate}${this.template}`
    }

    get styleTemplate() {
      return `<style>${String.raw(template, ...args)}</style>`;
    }
  }

  Styled.tagName = `styled-${Math.ceil(Math.random() * 10000000)}`

  registerComponent()(Styled);

  return Styled
}

export const styled = (template, ...args) => {
  return createStyledComponent(`<slot></slot>`)(template, ...args)
}
