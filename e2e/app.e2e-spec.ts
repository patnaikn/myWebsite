import { MyWebsite1Page } from './app.po';

describe('my-website1 App', function() {
  let page: MyWebsite1Page;

  beforeEach(() => {
    page = new MyWebsite1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
