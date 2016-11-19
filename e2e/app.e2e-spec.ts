import { NewprojectPage } from './app.po';

describe('newproject App', function() {
  let page: NewprojectPage;

  beforeEach(() => {
    page = new NewprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
