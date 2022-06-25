import React from 'react';

const TwoSum = () => {
  //nums = [2,7,11,15]; scan array to find a matching pair;
  //target = 9;
  //[2, 7] = 9,
  //[0,1] = 9,
  //i, j ~ double [for loops];

  //HashMap
  //map = {2: 0, 7:1, 11:2,}
  //value = 9
  let twoSum = function (nums = [2, 7, 11, 15], target = 9) {
    var map = {}
    for (let i = 0; i < nums.length; i++) {
      var value = nums[i];
      var complementPair = target - value;
      if (map[complementPair] !== undefined) {
        return [map[complementPair], i]
      } else {
        map[value] = i
      }//keep looping through the loops
    }
  }


  let twoSome = function (numbs = [1, 3, 4, 5], targt = 9) {
    //we create a new Map, that helps store the values in a memory
    let map = new Map();
    //we loop through the arrays of numbs
    for (let i = 0; i < numbs.length; i++) {
      //complement pair and record ~ [ 
      //9 -1 = 5; (check)= [0];
      //9 - 3 = 5; (check)= [1];
      //9 - 4 = 5; (check) =[2];
      //9 - 5 =4; (check)=[3];
      //]
      let number = targt - numbs[i]; //number will be looped through
      //we check(true) if number(targt diff from numbs[i]) is present in the map,
      if (!map.has(number)) {
        //if not we set the number at an index to the map along side it's index
        map.set(numbs[i], i);
      } else {
        //if map has the number(targt diff from the number at i),
        //we retrieve it alongside it's current index.
        return [map.get(number), i];
      }
    }
    return [];
  }
  //nums =[2,4,5,10,12]
  //targ = 11
  //returns [2,4,5] when added together = 11
  //results [0,1,2]= 11;
  const threeSum = (numbers = [2, 4, 5, 10, 12], targ = 11) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        for (let k = j + 1; k < numbers.length; k++) {
          if (numbers[i] + numbers[j] + numbers[k] === targ) return [i, j, k]
        }
      }
    }
  }

  return (
    <div>
      {twoSum()}<br />
      {threeSum()} <br />
      {twoSome()}
    </div>
  )
}

export default TwoSum