import { AngularCLITemplatePage } from './app.po';

describe('angular-clitemplate App', () => {
  let page: AngularCLITemplatePage;

  beforeEach(() => {
    page = new AngularCLITemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
