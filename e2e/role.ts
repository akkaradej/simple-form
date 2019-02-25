import { Role } from 'testcafe';

export const normal = Role('http://example.com/login', async t => {
  await t
    .typeText('#login', 'TestUser')
    .typeText('#password', 'testpass')
    .click('#sign-in');
});

export const facebook = Role('http://example.com/login', async t => {
  await t
    .click('#sign-in-with-facebook')
    .typeText('#email', 'testuser@mycompany.com')
    .typeText('#pass', 'testpass')
    .click('#submit');
});

export const admin = Role('http://example.com/login', async t => {
  await t
    .typeText('#login', 'Admin')
    .typeText('#password', 'adminpass')
    .click('#sign-in');
});
