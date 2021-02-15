// const person : {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number,string];
// } = {
//   name: 'nana',
//   age: 26,
//   hobbies: ['Sports','Cooking'],
//   role: [2, 'author'],
// }

enum Role {
  ADMIN,
  READ_ONRY,
  AUTHOR
}

const person = {
  name: 'nana',
  age: 26,
  hobbies: ['Sports','Cooking'],
  role: Role.ADMIN,
}

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0,'admin',8]

let favoriteActivities: string[];
favoriteActivities = ['Sports']


console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  
}

if (person.role === Role.ADMIN) {
  console.log('よみとり専用');
  
}