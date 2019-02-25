import { Selector } from 'testcafe';

interface ExtendedSelector extends Selector {
  withName(attribute: string): SelectorPromise;
}

interface ExtendedSelectSelectorPromise extends SelectorPromise {
  withOptionText(text: string): SelectorPromise;
}

interface ExtendedSelectSelector extends Selector {
  withName(attribute: string): ExtendedSelectSelectorPromise;
}

export function ExtendedSelector(selector: string): ExtendedSelector {
  const obj = Selector(selector);
  obj['withName'] = (attribute: string) => {
    return obj.withAttribute('name', attribute);
  };
  return obj as ExtendedSelector;
}

export function ExtendedSelectSelector(selector: string): ExtendedSelectSelector {
  function ExtendedSelectOption(obj: SelectorPromise): ExtendedSelectSelectorPromise {
    obj['withOptionText'] = (text: string) => {
      return obj.find('option').withExactText(text);
    };
    return obj as ExtendedSelectSelectorPromise;
  }

  const obj = Selector(selector);
  obj['withName'] = (attribute: string) => {
    return ExtendedSelectOption(obj.withAttribute('name', attribute));
  };
  return obj as ExtendedSelectSelector;
}

export const input = ExtendedSelector('.input');
export const textarea = ExtendedSelector('.textarea');
export const checkbox = ExtendedSelector('.checkbox');
export const radio = ExtendedSelector('.radio');
export const select = ExtendedSelectSelector('select');

export const button = ExtendedSelector('.button');
export const link = ExtendedSelector('a');

export const pageTitle = Selector('#pageTitle');
export const contentTitle = Selector('#contentTitle');
