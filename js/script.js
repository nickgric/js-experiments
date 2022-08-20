//Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

const user = {
  name: "John",
  surName: "Stones",
  age: 20,
  hobby: "tenis",
  haveCar: true,
  merried: false,
};

function changeObject(object) {
  const keysValues = [];
  const keys = Object.keys(object);
  const values = Object.values(object);

  for (let i = 0; i < keys.length; i += 1) {
    keysValues.push([keys[i], values[i]]);
  }

  return keysValues;
}

console.log(changeObject(user));
