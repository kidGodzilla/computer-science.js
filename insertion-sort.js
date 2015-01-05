var insertionSort = function (a) {
    // Iterate through our array
	for (var i = 1, value; i < a.length; i++) {
        // Our array is split into two parts: values preceeding i are sorted, while others are unsorted
        // Store the unsorted value at i
		value = a[i];
        // Interate backwards through the unsorted values until we find the correct location for our `next` value
		for (var j = i; a[j-1] > value; j--) {
            // Shift the value to the right
			a[j] = a[j-1];
		}
        // Once we've created an open "slot" in the correct location for our value, insert it
		a[j] = value;
	}
    // Return the sorted array
	return a;
};
