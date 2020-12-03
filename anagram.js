function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    let obj2 = {};
    let obj1 = {};

    for(let val of str1){
        obj1[val] = (obj1[val] || 0) + 1
    }
    for(let val of str2){
        obj2[val] = (obj2[val] || 0 ) +1

    }

    for (key in obj1){
        if(!key in obj2[key]){
            return false;
        }
        if(obj2[key] !== obj1[key]){
            return false;
        }
    }
    return true;
}