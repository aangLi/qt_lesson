/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {boolean}
 */
function arraysSimilar (arrs1, arrs2){
    
    if (arrs1 instanceof Array && arrs2 instanceof Array && arrs1.length != 0 && arrs2.length !=0){
        let number = arrs1.length;
        let i = 0;
        while (arrs1.length != 0) {
            // arr2.filter(ar => Object.prototype.toString.apply(arr) == Object.prototype.toString.apply(ar))
            arr1 = arrs1[0];
            i++;
            arrs2.forEach((arr2,index) => {
                // console.log(`第${i}  arrs1:${arr1},  ${index}  arrs2:${arr2}`);
                if (Object.prototype.toString.apply(arr2) == Object.prototype.toString.apply(arr1)){
                    arrs2[index] = [];
                    arrs1.shift();
                    
                    // console.log(`arrs1:${arrs1}   ,   arrs2:${arrs2}`);
                    // console.log(arrs1);
                    // console.log(arrs2);
                    // // continue;
                }
                
            });

            if(i > number) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }

}


