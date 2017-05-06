import { map } from 'lodash';
import template from './numberlist.hbs';

// console.log(map([1,2,3,4,5], n => n * n));

let numbers = map([1,2,3,4,5,6], n => n*n);

// console.log(template({numbers}));
// document.getElementById("app-container").innerHTML = template({numbers});


setTimeout( () => {
    require(['./numberlist.hbs'], template => {
        document.getElementById("app-container").innerHTML = template({numbers});
    })
}, 2000);