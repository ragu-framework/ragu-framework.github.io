require('./hamburger-menu');

describe('Hamburger Menu', () => {
  it('calls toggle with true when menu is closed', (done) => {
    document.body.innerHTML = '<hamburger-menu></hamburger-menu>';

    const menu = document.body.querySelector('hamburger-menu');
    menu.addEventListener('hamburger-menu-toggle', (e) => {
      expect(e.detail.open).toBeTruthy();
      done();
    });

    menu.click();
  });

  it('calls toggle with false when menu is open', (done) => {
    document.body.innerHTML = '<hamburger-menu></hamburger-menu>';

    const menu = document.body.querySelector('hamburger-menu');
    menu.click();

    menu.addEventListener('hamburger-menu-toggle', (e) => {
      expect(e.detail.open).toBeFalsy();
      done();
    });

    menu.click();
  });
});
