import React from 'react'

//palindrome a word that matches the same when called backwards
/**
*121 = true;
*123 = false;
*argorithm
 *  create reversed variable
 * create current variable equal to int
 * loop through if curent doesn't equal to 0;
 * 
 */


const Palindrome = (int = 121) => {
    //return true or false 
    if (int < 0) {
        return false;
    }
    let reversed = 0;
    let current = int;

    while (current !== 0) {
        reversed = reversed * 10 + current % 10;
        current = Math.floor(reversed / 10);
    }
    return (
        <div>Palindrome</div>
    )
}

export default Palindrome