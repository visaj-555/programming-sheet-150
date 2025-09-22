// 43. Finding All Divisors of a Number

function Divisors(number) {
  let arr = new Array();

  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(Divisors(12));
