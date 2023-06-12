const i18n = require('./i18n.config');

console.log(i18n.getLocales()); // ['en', 'mm']
console.log(i18n.getLocale()); // 'en'

i18n.setLocale('en');

console.log(i18n.__('Hello')); // 'Hello'
console.log(i18n.__n('You have %s message', 5)); // 'You have 5 messages'
