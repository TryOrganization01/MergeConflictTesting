let fname = "Sanjai";

let code = [10,5,7,7,3,2,10,3,6,9,1,6], k = 0; 
console.log(decrypt(code, k));
function decrypt(code, k) {
    let resultArray = [];

    if(k === 0) {
        return code.fill(0, 0, code.length);
    } else {
        k = Math.abs(k)
        let sum = 0, count = 0;
        for (let i = 0; i < code.length - 1; i++) {
            let j = code.length - k + i;
            sum = 0;
            count = 0;
            while(count !== k) {
                if(j < code.length) {
                    sum += code[j++];
                    count++;
                } else {
                    let l = j - code.length;
                    while (count !== k) {
                        sum += code[l++];
                        count++;
                    }
                }
            }
            resultArray.push(sum);
        }
        count = 0;
        sum = 0;
        let i = code.length - 2;
        while (count !== k) {
            sum += code[i--];
            count++;
        }
        resultArray.push(sum);
    }
    
    return resultArray;
}