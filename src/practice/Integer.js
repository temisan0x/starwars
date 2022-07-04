import React from 'react'

//object is a collection of properties, functions,variables and methods;
//they make code more readable & they can store values
//while loop excutes a peace of code as long as the condition is true

export var roman = function () {
    const numeral = 'MCMXCIV';

    const romanInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let i = 0;
    let total = 0;

    while (i < numeral.length) {
        const currNum = romanInt[numeral[i]]
        const nextNum = romanInt[numeral[i + 1]]

        if (currNum < nextNum) {
            total = total + (nextNum - currNum)
            i = i + 2
        } else {
            total = total + currNum
            i++
        }
    }
    return total


}
