type Conbinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine (
  input1: Conbinable, 
  input2: Conbinable, 
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' ){
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // if (resultConversion === 'as-number') {
  //   return  +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(30, 50, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine(30, 50, 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Nana', 'Suzuki', 'AS-text');
console.log(combinedNames);


