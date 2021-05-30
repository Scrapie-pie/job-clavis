import Vue from 'vue';

import { ValidationObserver, ValidationProvider, extend} from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';
import * as rules from 'vee-validate/dist/rules';


// install rules and localization
Object.keys(rules).forEach(rule => {extend(rule, rules[rule]);});
import { messages } from 'vee-validate/dist/locale/ru.json';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

// Add a rule.
extend('req', {
  validate: value => value.length>1,
  message: 'Поле обязательно для заполнения'
});



// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
