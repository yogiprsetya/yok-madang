Feature('Like/Unlike Restaurant');

Before(I => {
  I.amOnPage('/');
});

Scenario('Like dan Unlike', I => {
  I.seeElement('.resto-name a');
  I.click(locate('.resto-name a').first());

  I.seeElement('#like-button');
  I.click("#like-button");

  I.amOnPage('/#/favorit');
  I.seeElement('.resto-name');

  I.seeElement('.resto-name a');
  I.click(locate('.resto-name a').first());

  I.seeElement('#like-button');
  I.click("#like-button");

  I.amOnPage('/#/favorit');

  I.see('Restoran Favorit belum ada.', '.no-resto');
});
