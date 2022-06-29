import React from 'react'

export const Palindrome = () => {

    const int = 11211;

    const results = (): boolean => {
        return String(int) === String(int).split(' ').reverse().join('')
    }

    console.log('====================================');
    console.log(results());
    console.log('====================================');
    return (
        <div>{results()}</div>
    )
}
