import { CynderDragonsPage } from './app.po';

describe('cynder-dragons App', () => {
  let page: CynderDragonsPage;

  beforeEach(() => {
    page = new CynderDragonsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
