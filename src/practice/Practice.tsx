import React from 'react';

const Practice = () => { 
  //nums = [2,7,11,15];
  //target = 9;
  //[2, 7] = 9,
   //[0,1] = 9,
  //i, j ~ double for loops;

  //HashMap


  let twoSum = function (nums=[2,7,11,15],target= 9 ) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++){
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }
  }

    //nums =[2,4,5,10,12]
    //targ = 11
    //returns [2,4,5] when added together = 11
    //results [0,1,2]= 11;
  
  const threeSum = (numbers =[2,4,5,10,12], targ= 11) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++){
        for (let k = j + 1; k < numbers.length; k++){
          if (numbers[i] + numbers[j] + numbers[k] === targ) return [i,j,k]
        }
      }
    }
}

  return (
    <div>
      {twoSum()}<br/>
      {threeSum()}
    </div>
  )
}

export default Practice