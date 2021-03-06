import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Soundmoose';
    expect(subject).toEqual(result);
  });

  it('should display default genre selection', () => {
    let result = element(by.css('.top-tracks-header .selection .text')).getText();
    expect(result).toEqual('All music');
  });

  it('should be able to choose music genre', () => {
    let select = element(by.css('.top-tracks-header .selection'))
    let desiredOption;
    select.click();
    browser.pause();
  });

});
