function solution(n, lost, reserve) {
    let answer = n;
    let students = new Array;

    for(var i=0; i<answer+1; i++) {
        students[i] = 0;
    }

    lost.forEach(num => {
        students[num] -= 1;
    });

    reserve.forEach(num => {
        students[num] += 1;
    });

    for(var i=1; i<students.length; i++) {
        if(students[i] == -1) {
            if(students[i-1] == 1) {
                students[i-1] = 0;
                students[i] = 0;
            } else if(students[i+1] == 1) {
                students[i+1] = 0;
                students[i] = 0;
            } else {
                answer--;
            }
        }
    }

    return answer;
}


    /**
     * n	lost	reserve	return
     * 5	[2, 4]	[1, 3, 5]	5
     * 5	[2, 4]	[3]	4
     * 3	[3]	[1]	2
     */

    let n = 5;
    let lost = [4];
    let reserve = [2];
    var result = solution(n, lost, reserve);
    console.log(result);