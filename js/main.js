// Masalalar codewars //

{
    const removeChar = (str) => str.length <= 2 ? str: str.slice(1, str.length-1)

    console.log( removeChar("salom")); // alo
}

{
    function findSmallestInt(args) {
        args.sort((a,b) => a-b)
        return args[0]
    }
    console.log( findSmallestInt([20, 1, 5, 6]));
    console.log( findSmallestInt([5, 6, 2, -9]));
}

{
    function countSheeps(sheep) {
        return sheep.filter(qoy => qoy).length
    }
    console.log( countSheeps([undefined])); // 1
    console.log( countSheeps([undefined,null,false,true])); // 1
    console.log( countSheeps([undefined,null,false,true,true,false,null,undefined])); // 2
}

{
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    console.log(reverseString('world')); // 'dlrow'
    console.log(reverseString('word'));  // 'drow'
}

{
    function opposite(number) {
        return -number;
    }
    console.log(opposite(1));   // -1
    console.log(opposite(14));  // -14
    console.log(opposite(-34)); // 34
}

{
    function makeNegative(number) {
        return number > 0 ? -number : number;
    }
    console.log(makeNegative(1));    // -1
    console.log(makeNegative(-5));   // -5
    console.log(makeNegative(0));    // 0
    console.log(makeNegative(0.12)); // -0.12
}

{
    function boolToWord(bool) {
        return bool ? "Yes" : "No";
    }
    console.log(boolToWord(true));  // "Yes"
    console.log(boolToWord(false)); // "No"
}

{
    function sumOfPositives(arr) {
        return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
    }
    console.log(sumOfPositives([1, -4, 7, 12])); // 20
    console.log(sumOfPositives([-1, -2, -3]));   // 0
    console.log(sumOfPositives([]));             // 0    
}

{
    function repeatStr(n, s) {
        return s.repeat(n);
    }
    console.log(repeatStr(6, "I"));      // "IIIIII"
    console.log(repeatStr(5, "Hello"));  // "HelloHelloHelloHelloHello"    
}

{
    function squareSum(numbers) {
        return numbers.reduce((sum, num) => sum + num * num, 0);
    }
    console.log(squareSum([1, 2, 2])); // 9
    console.log(squareSum([0, 3, 4, 5])); // 50
    console.log(squareSum([])); // 0    
}

{
    function stringToNumber(str) {
        return parseInt(str, 10);
    }
    console.log(stringToNumber("1234")); // 1234
    console.log(stringToNumber("605"));  // 605
    console.log(stringToNumber("1405")); // 1405
    console.log(stringToNumber("-7"));   // -7
}

{
    function summation(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
    console.log(summation(2)); // 3 (1 + 2)
    console.log(summation(8)); // 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
}

{
    function greet() {
        return "Hello, world!";
    }
    console.log(greet()); // "Hello, world!"
}

{
    function doubleInteger(n) {
        return n * 2;
    }
    console.log(doubleInteger(5)); // 10
    console.log(doubleInteger(-8)); // -16
    console.log(doubleInteger(0)); // 0
}

{
    function greet(name) {
        return `Hello, ${name} how are you doing today?`;
    }
    console.log(greet("John")); // "Hello, John how are you doing today?"
    console.log(greet("Emily")); // "Hello, Emily how are you doing today?"
}