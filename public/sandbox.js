"use strict";
;
const carl = {
    name: 'carol',
    belt: 'black',
    age: 35,
};
const jenny = {
    name: 'jenny',
    belt: 'blue',
    age: 20,
};
const john = {
    name: 'john',
    belt: 'brown',
    age: 40,
};
let ninjaArr = [carl, jenny, john];
let ninjas = [];
ninjaArr.forEach((ninja) => {
    ninjas.push(ninja);
});
console.log(ninjas);
