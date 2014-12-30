function randomArray() {
    for (var a=[], i=0; ++i < 19;) a.push(~~(Math.random() * 100));
    return a;
}

function quicksort(a) {
    var l = [], r = [], m;

    if(!a.length) return [];

    m = a.pop();

    while (a.length) {
        a[0] < m ? l.push(a.shift()) : r.push(a.shift());
    }

    return quicksort(l).concat(m, quicksort(r));
}

// Code golfed, 144 characters
s = function(a){l=[];r=[];if(!a.length)return[];for(m=a.pop();a.length;)a[0]<m?l.push(a.shift()):r.push(a.shift());return s(l).concat(m,s(r))}

console.log(ar = randomArray());
console.log(quicksort(ar));
