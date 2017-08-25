import {browser, element, by} from 'protractor';
import {changeCalculationsTo} from '../calculationsUtils/CalculationsUtils';

describe('sum', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have correct sum calculation header', async (done) => {
    changeCalculationsTo('Dodawanie');
    const calculationHeader = element.all(by.tagName('h4')).first();
    const calculationHeaderText = await calculationHeader.getText();
    expect('Dodawanie').toEqual(calculationHeaderText);
    done();
  });

  it('should sum two numbers', async () => {
    changeCalculationsTo('Dodawanie');
    const firstInput = element.all(by.tagName('input')).first();
    const secondInput = element.all(by.tagName('input')).get(1);
    firstInput.clear();
    secondInput.clear();
    firstInput.sendKeys('10');
    browser.sleep(1500);
    secondInput.sendKeys('20');
    browser.sleep(1500);
    const calculateButton = element(by.tagName('button'));
    calculateButton.click();
    browser.sleep(1500);
    const resultContainer = element(by.className('result'));
    const resultText = await resultContainer.getText();
    expect('30').toEqual(resultText);
  });
});
