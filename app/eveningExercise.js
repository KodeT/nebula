exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
  return (arr.indexOf(item))
  },

  sum : function(arr) {
 for (var i = 0, sum = 0; i < arr.length; i++)
 {
   sum += arr[i]
    }
    return sum

  },
  // The first statement var i = 0; executes prior to the loop running.
  // The second statement i < nums.length; is a condition that keeps the loop running. In this case it is saying, “while variable i is less than the length of (amount of items in) nums”.
  // The third statement i++ executes at the end of each loop. i++ is a shortcut for i = i + 1. This makes variable i increase by 1 each loop.
  // Since its initial value is 0, it will run 5 times. Each time it loops, i is the incremental value (0, 1, 2, 3, 4). If we set our second statement to be “less than or equal to”, i <= nums.length;, it will run 6 times.
  // If we accidentally set our second statement to be “greater than”, i > nums.length;, our loop would not run since the first time around it would already have not met the condition.

   remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
      }
    }
      return arr;
    },
// splice
    // index − Index at which to start changing the array.
    //
    // howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.

  // for (initialization; test condition; final expression(iteration statement)){
  //    Statement(s) to be executed if test condition is true
  // }
  // when i starts at 0 check if i is less than number of items in array. if it is than execute the statement that if the index of the array is = the the item (arg passed through) than remove one item at that index. then increment by 1...this happens until i reaches the length of the array.
//   final-expression
// An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.
// statement
// A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements. To execute no statement within the loop, use an empty statement (;).

  reverseString : function(str) {
    return str.split('').reverse().join('');

  },
// First it splits the string into an array with the values (i.e. "how are you" becomes how, are, you) - splits a string into an array of substrings and returns a new array, then calls the ‘reverse()’ - reverses order of elements in the array  and finally returns the joined array  - puts it back into a string.
  longestSubString : function(str) {
    var substring_arr = str.split(' ')
    var longest_substring = ''

    for (var i = 0; i < substring_arr.length; i++) {
      if (substring_arr[i].length > longest_substring.length) {
        longest_substring = substring_arr[i];
      }
  }
      return longest_substring;
  },

// 1. substring_arr variable - splits the string into an array of substrings and returns the new array
// 2. create a variable to hold the longest substring so we can compare each time it iterates through the array
// 3. var i = 0 - initialize, conditional - if i is less than the number of items in the array than execute the if statement
// 4. if statement says compare the length of the particular substring you are at, if it is longer than whateveri s in the longest substring variable than set the longest substring equal to the substring_array at that index.  keep doing that until you get to where i is no longer less than the length of substring_arr, then return whatever is in the longest substring

  letterMoveForward : function(str) {
    var new_str = ""
    for (var i = 0; i < str.length; i++){
      if (str[i] >= 'a' && str[i] <= 'y'){
      new_str += String.fromCharCode(str.charCodeAt(i) + 1);
      // method fromCharCode is applied directly on the Javascript String object and takes at least one argument - here - str.charCodeAt -
      // fromCharCode - returns a string based on unicode values that are passed through.
      // charCodeAt returns the unicode value of the letter at i which gets passed through as an argument for fromCharcode.  Increments up +1
    }
    else if (str[i] == 'z') {
      new_str += 'a';
    }
    else
     new_str += str[i];
  }
   return new_str;
  },



  capitalizeWords : function(str) {
    var split_str = str.split(' ');


    for (var i = 0; i < split_str.length; i++){
    split_str[i] = split_str[i].charAt(0).toUpperCase() + split_str[i].slice(1);

  }

    return split_str.join(" ");
 }
};
// charAt allows you to access a single character
// split_string[i] - accesses a given index in the array created after splitting the strings
// slice extracts the part of the string at the specified index
// replace the character at split_str[i]
