function square(x) {
  return x * x;
}

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(8));

const getFirstName1 = (fullName) => {
  return fullName.split(' ')[0];
};

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName1('Alberto Lopez'));
console.log(getFirstName2('Kiwi Chueca'));
