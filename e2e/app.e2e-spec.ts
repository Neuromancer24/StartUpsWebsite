import { StartUpsPage } from './app.po';

describe('start-ups App', function() {
  let page: StartUpsPage;

  beforeEach(() => {
    page = new StartUpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
