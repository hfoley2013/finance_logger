interface Ninja {
  name: string,
  belt: string,
  age: number | string,
};

const carl: Ninja = {
  name: 'carol',
  belt: 'black',
  age: 35,
};

const jenny: Ninja = {
  name: 'jenny',
  belt: 'blue',
  age: 20,
};

const john: Ninja = {
  name: 'john',
  belt: 'brown',
  age: 40,
};

let ninjaArr: Ninja[] = [carl, jenny, john];

let ninjas: Ninja[] = [];

ninjaArr.forEach((ninja) => {
  ninjas.push(ninja);
});

console.log(ninjas);
