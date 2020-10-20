import {MfLoader} from "@ui/components/mf-loader";

describe('MF Loader', () => {
  let component;

  beforeEach(() => {
    document.body.innerHTML = MfLoader.render('', {'src': 'my-micro'});
    component = document.body.firstChild;
  });

  it('renders a loading message by default', () => {
    document.body.innerHTML = MfLoader.render('', {'src': 'my-micro'});

    expect(component.textContent).toContain('Loading');
  });

  it('renders a ragu-component', () => {
    document.body.innerHTML = MfLoader.render('', {'src': 'my-micro'});
    const component = document.body.firstChild;

    expect(component.querySelector('[src=my-micro]').tagName).toContain('RAGU-COMPONENT');
  });

  it('hides loading message after ragu:hydrated event', () => {
    document.body.innerHTML = MfLoader.render('', {'src': 'my-micro'});
    const component = document.body.firstChild;

    const raguComponent = component.querySelector('[src=my-micro]');
    raguComponent.dispatchEvent(new CustomEvent('ragu:hydrated'));

    expect(component.textContent).not.toContain('Loading');
  });
});
