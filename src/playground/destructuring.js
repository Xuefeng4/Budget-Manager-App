//obejct destructuring

const person = {
	name:'Nathan',
	age:'Andrew',
	location: {
  city: "Urbana",
  temp: 39
  }
};

let {name:newName = "Anonymous",age} = person;
let {city,temp:temperature} = person.location;

console.log(
  `I am ${newName} from ${city} where the temperature is ${temperature}`
);


//array destructuring
const address = ['1299 S Juniper', 'Urbana','Illinois','19345'];
const [street,town,state,zip = "champaign"] = address;
//const [street,town,state] = address; 不要最后一个
//const [,town,state]  不要第一个
console.log(`You are in ${town} ${state}`);
