export interface Duck {
  name: string,
  numLegs: number,
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: 'Lucas',
  numLegs: 2,
  makeSound: (sound: string) => console.log(sound)
}

const duck2: Duck = {
  name: 'Donal',
  numLegs: 2,
  makeSound: (sound: string) => console.log(sound)
}

duck1.makeSound('quack');
duck2.makeSound('quack');

export const ducks = [duck1, duck2]