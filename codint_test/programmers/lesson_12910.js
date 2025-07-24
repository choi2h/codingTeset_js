function solution(arr, divisor) {    
    arr = arr.filter(i => i%divisor == 0).sort((a,b) => a-b);
    return arr.length > 0 ? arr : 0;
}

/*
[5, 9, 7, 10]	5	[5, 10]
[2, 36, 1, 3]	1	[1, 2, 3, 36]
[3,2,6]	10	[-1]
*/
console.log(solution([10, 9, 7, 5],5));


const array = [40, 1, 5, 200];
array.sort();

console.log(array);