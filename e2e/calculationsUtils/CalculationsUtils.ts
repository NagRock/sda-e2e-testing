import {by, element} from 'protractor';

export function changeCalculationsTo(type: string) {
  const sumOption = element(by.cssContainingText('option', type));
  sumOption.click();
}
