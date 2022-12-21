// const n = Number(prompt("bir sayı giriniz"));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log("Sum:", sum);

// const num = Number(prompt("enter a number"));

// for (let j = 1; j <=num; j++) {
//     const randomNum=Math.round(Math.random()*100)
//     console.log(`${j}. ramdom number:${randomNum}`);
// }

const primeNum = Number(prompt("enter a number"));
let isPrime = true;

if (primeNum < 2) {
  console.log("Number should be bigger than 1");
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i == 0) {
      console.log(`${primeNum} is not a prime number`);
      isPrime = false;
      break;
    }
  }

  if (isPrime === true) console.log(`${primeNum} is a prime number`);
}
