export const render = (componentClass, element, content = '') => {
  const component = new componentClass();
  component.innerHTML = `${content}`

  element.appendChild(component);

  return component;
}
