import { EstudoAngularPage } from './app.po';

describe('estudo-angular App', () => {
  let page: EstudoAngularPage;

  beforeEach(() => {
    page = new EstudoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
