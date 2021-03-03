// const userName = 'Max';
// let age = 30;

// age = 29;

// function add(a:number, b: number) {
//   let result;
//   result = a - b;
//   return result;
// }


// if (age >= 20) {
//   let isAdult = true;
// }
 
// console.log(isAdult);　// エラーになる

// let const はブロックスコープを採用している


// ひとつの式と戻り値のみを返す場合は{}とreturnを省略することができる
// 右側の引数にはデフォルト値を設定できるaだけにデフォルト値を渡すことはできない（パラメータをスキップすることができない）
const add = (a: number , b: number = 1) => a - b;

// 引数がひとつのときは（）を省略することができる
const printOutput : (output: string | number) => void = output => {
  console.log(output);
}

printOutput(add(2));


const hobbies= ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// スプレット演算子（...）配列やオブジェクトの値を取り出して、展開する
// コピーして別物として追加される
activeHobbies.push(...hobbies);

const hobby = hobbies[0];




