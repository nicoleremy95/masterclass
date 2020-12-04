function makeAnagram(a, b) {
    let ob1 = {};
    let ob2 = {};
    let count = 0;
    let bird = 0;
    
    for(let val of a){
        ob1[val] = (ob1[val] || 0) + 1
    }
    for (let val of b){
        ob2[val] = (ob2[val] || 0) + 1
    }
    
    //if the same key has unequal 
    for(let key in ob1){
        if(ob1[key] > ob2[key] || ob1[key] < ob2[key]){
            count ++;
        }
        // if(!key in ob2){
        //     count ++;
        // }
    }
    for(let key in ob2){
        if(key in ob1){
            bird ++;
        } else {
            count ++;
        }
    }
    
    
    return count; 
    
    
    
}