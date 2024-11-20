let fname = "Sumi";
let code = [10,5,7,7,3,2,10,3,6,9,1,6], k = 0; 
console.log(decrypt(code, k));
function decrypt(code, k) {
    let resultArray = [];

    if(k === 0) {
        return code.fill(0, 0, code.length);
    }
}