import { NgtPartnerProductPortalPage } from './app.po';

describe('ngt-partner-product-portal App', () => {
  let page: NgtPartnerProductPortalPage;

  beforeEach(() => {
    page = new NgtPartnerProductPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
