import { Ng2MultilanguagePage } from './app.po';

describe('ng2-multilanguage App', () => {
  let page: Ng2MultilanguagePage;

  beforeEach(() => {
    page = new Ng2MultilanguagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
