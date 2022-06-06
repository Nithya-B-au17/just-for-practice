/*
Fizz Buzz is a very simple programming task, asked in software developer job interviews.

A typical round of Fizz Buzz can be:
write a program that prints  the number from 1 to N and for multiples of Nof '3'
print "Fizz" instead of the number  and for the multiples of '5'
print "Buzz". If number is multiple by '3' and '5' print "FizzBuzz" 
*/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15)