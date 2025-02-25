/*
기사단원의 무기
URL : https://school.programmers.co.kr/learn/courses/30/lessons/136798
 */

function solution(number, limit, power) {
    var answer = 1;

    for(var i=2; i<= number; i++) {
        var count = getCount(i);

        answer += count>limit? power : count;
    }

    return answer;
}

function getCount(number) {
    let count = 0;
    
    let num = Math.sqrt(number);

    for(let i=1; i<=num; i++) {
        if(number % i == 0) {
            if(number / i == i || number/i <= num) {
                count++;
            } else {
                count += 2;
            }
        }
    }

    return count;
}

var result = solution(21, 3, 2);
console.log(result);