import { Es1Page } from './app.po';

describe('es1 App', () => {
  let page: Es1Page;

  beforeEach(() => {
    page = new Es1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
