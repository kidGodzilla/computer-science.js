var selectionSort = function (a) {
  // Move forward through an array, swapping the value at i with the smallest value after i
  for (var i = -1; ++i < a.length;) {
      // Move forward from i and remember the position of the smallest value
      for (var m = j = i; ++j < a.length;) {
          // If the value at j is smaller than our current minimum, remember it's position
          if (a[m] > a[j]) m = j;
      }

      // Swap the value at i with the minimum value following i
      var t = a[m];
      a[m] = a[i];
      a[i] = t;
    }
  return a;
}
