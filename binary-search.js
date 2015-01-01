function binarySearch(array, value) {
  	var j = 0, length = array.length;
  	// A for loop was used to save space. More easily understood as a while loop. Exits if our pointer moves out of range.
    while (j < length) {
    	var i = (length + j - 1) >> 1; // move the pointer to the median value using a shift in place of Math.floor() (to save characters)
    	// If the value we're searching for is greater than the median, move our lower-bound past the median
      if (value > a[i]) 
        j = i + 1;
      // Otherwise, if the value we're searching for is less than the median, move our upper-bound to the median value
      else if (value < array[i]) 
        length = i;
      // If neither of the above conditions have been met, we have found our value. Congratulations! Return it!
      else
        return i
    }
  // If we've somehow exited the loop, our value was not present and we should return "Not Found".
  return -1
}
