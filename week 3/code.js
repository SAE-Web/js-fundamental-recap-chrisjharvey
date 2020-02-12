const greeting = ['Introduction','to','Javascript'] 
const numbers = [7,42,44,47,58,59,52]

//1. Write code that will output the size of the variable greeting
//and the variable numbers

console.log(greeting.length);
console.log(numbers.length);


//2. Write code that will compare the size of these two variables and return the larger of the two
if (greeting.length > numbers.length) {
   console.log(greeting);
} else {
    console.log(numbers);
    
}

//3a. Create code that will take the variable greeting and output "Welcome to an Introduction to Javascript"

console.log(`Welcome to an ${greeting[0]} ${greeting[1]} ${greeting[2]}`);
    

//3b. Create code that will check the variable numbers and out the number(s) that are even and a multiple of EITHER 13 OR 14



for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 || numbers[i] % 13 === 0||numbers[i] % 14 === 0 ){ 
       console.log(numbers[i])
    }
    }

    function isInterestingNumber(number) {

        if (number % 2 === 0 && number % 13 === 0) {
            return true
        } else {
            return false
        }
    }
        console.log(isInterestingNumber(24));

    for (let i = 0; i < numbers.length; i++) {
        console.log(isInterestingNumber(numbers[i])) 

        }
        
    

//4. Write code that will check if 34 is in the variable numbers
    if (numbers.includes(34)) {
        console.log('34 is in the array');
   } else {
      console.log('34 is not in the array');
   }
    