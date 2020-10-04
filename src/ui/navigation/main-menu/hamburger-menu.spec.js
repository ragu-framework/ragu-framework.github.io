import {HamburgerMenu} from "ui/navigation/main-menu/hamburger-menu";

require('./hamburger-menu');

describe('Hamburger Menu', () => {
  it('calls toggle with true when menu is closed', (done) => {
    document.body.innerHTML = HamburgerMenu.render();
    const menu = document.body.querySelector(HamburgerMenu.elementName());

    menu.addEventListener('hamburger-menu-toggle', (e) => {
      expect(e.detail.open).toBeTruthy();
      done();
    });

    menu.click();
  });

  it('calls toggle with false when menu is open', (done) => {
    document.body.innerHTML = HamburgerMenu.render();
    const menu = document.body.querySelector(HamburgerMenu.elementName());
    menu.click();

    menu.addEventListener('hamburger-menu-toggle', (e) => {
      expect(e.detail.open).toBeFalsy();
      done();
    });

    menu.click();
  });
});
