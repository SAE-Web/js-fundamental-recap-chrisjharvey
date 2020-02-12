numbers = []
for (let i = 0; i < 99; i++) {
    numbers[i] = Math.floor(Math.random()*100)
    
}
//1. Print out the list of numbers.
//2. At the end of this for loop, what is the value of the variable i?
//3. At the end of this, I should get 100 numbers. How would you confirm this?
// If it isn't, what do to make this happen?

isDivisibleBy = (number, divisor)=>{
  //4. Write the method so it takes the number and returns true if the number is divisible by the divisor.
}

for (const number of numbers) {
    //5. Complete this so it can use the above method to check if the numbers in the list are multiples of 8
}

function generateLuckyNumber(){
    return Math.floor(Math.random()*50)
}
//6. Create a web page. When the page loads, The text should read
//Today's lucky number for you is <number>
//Use this code found in week4.html

//7.(Advanced) Change the code, so that when a user clicks a button, it generates a lucky number

//8. (Advanced). Change the code so that a button click now displays 6 lucky numbers at once.