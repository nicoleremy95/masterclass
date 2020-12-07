class HashTable{
    //the constructor takes in the size of the array, 53 is a good default number because it is prime
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
      }

      //via separate chaining 
      set(key,value){
          let index = this._hash(key);
          //if there is no value at this particular index, then create an emtpy array to hold key value pair
          if(!this.keyMap[index]){
              this.keyMap[index] = [];
          }
          //push key value pair into the array
          this.keyMap[index].push([key, value]);
      }

      //via separate chaining 
      get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i ++){
                if(this.keyMap[index][i][0]===key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
      }

      //loop over hash table and extract  all values 
      values(){
          let valuesArr = [];
          for(let i =0; i < this.keyMap.length; i ++){
              if(this.keyMap[i]){
                  for(let j = 0; j < this.keyMap[i].length; j++){
                      //if the value doesn't already exist in the valuesArr, then include it. if there is already this value in the valuesArr, then don't include it 
                      if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                      }
                  }
              }
          }
          return valuesArr;
      }

      //loop over hash table and extract  all keys 
      keys(){
          let keysArr = [];
          for(let i =0; i < this.keyMap.length; i ++){
              if(this.keyMap[i]){
                  for(let j = 0; j < this.keyMap[i].length; j++){
                      //if the value doesn't already exist in the keysArr, then include it. if there is already this value in the keysArr, then don't include it 
                      if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                      }
                  }
              }
          }
          return keysArr;
      }
}

let ht = new HashTable();
ht.set("milk", "2%")
