const funcOne = (num1: number, num2: number) => {
    return num1 + num2;
};

console.log(funcOne(2, 22));

const makeName = (firstName: string, lastName?: string) => {
    return firstName + ' ' + lastName;
};
// ? MAKES LASTNAME OPTIONAL
console.log(makeName('Ellis', 'Hornabrook'));
