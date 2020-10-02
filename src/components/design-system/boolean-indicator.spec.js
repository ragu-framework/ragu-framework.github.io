import {BooleanIndicator} from "@components/design-system/boolean-indicator";

describe('Boolean indicator', () => {
  it('renders the true emoji when checked', async () => {
    document.body.innerHTML = BooleanIndicator.render('my test', { checked: true });
    expect(document.body.firstChild.shadowRoot.innerHTML).toContain(`✅`);
  });

  it('renders the false emoji when not checked', async () => {
    document.body.innerHTML = BooleanIndicator.render('my test', { checked: false });
    expect(document.body.firstChild.shadowRoot.innerHTML).toContain(`🚫`);
  });
})
