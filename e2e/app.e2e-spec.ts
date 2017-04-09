import { NotabtionAngularPage } from './app.po';

describe('notabtion-angular App', () => {
  let page: NotabtionAngularPage;

  beforeEach(() => {
    page = new NotabtionAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
