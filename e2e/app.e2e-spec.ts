import { MovieSearchAppPage } from './app.po';

describe('movie-search-app App', () => {
  let page: MovieSearchAppPage;

  beforeEach(() => {
    page = new MovieSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
