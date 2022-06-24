import React from 'react';

const Practice = () => { 
  //nums = [2,7,11,15];
  //target = 9;
  //[2, 7] = 9,
   //[0,1] = 9,
  //i, j ~ double for loops
  let twoSum = function (nums=[2,7,11,15],target= 9 ) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++){
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
  }

  return (
    <div>
      {twoSum()}
    </div>
  )
}

export default Practice