import { Selector } from 'testcafe';

import {
    input, textarea, checkbox, radio, select, button, link
} from '../control';

fixture`Test PoC`
    .page`http://localhost:4200`;
test('Test case PoC', async t => {
    await t
        // Name
        .typeText(input.withName('name'), 'Akkaraphon Phannaphop')
        // Subject
        .click(select.withName('subject'))
        .click(select.withName('subject').withOptionText('With options 1'))
        // Message
        .typeText(textarea.withName('message'), 'ทดลองเขียน PoC')
        // Agree
        .click(checkbox.withExactText('I agree'))
        // Yes or No
        .click(radio.withExactText('Yes'))
        // Submit
        .click(button.withExactText('Submit'))
        // ข้อมูลถูกค้อง
        .expect(Selector('#dataName').innerText).eql('Akkaraphon Phannaphop')
        .expect(Selector('#dataSubject').innerText).eql('1')
        .expect(Selector('#dataMessage').innerText).eql('ทดลองเขียน PoC')
        .expect(Selector('#dataAgree').innerText).eql('true')
        .expect(Selector('#dataQuestion').innerText).eql('yes')

})
