class UniqueArray {
    constructor() {
        this.uniqueObj = {};
        this.uniqueArr = [];
        this.uniqueLength = 0;
    }

    showAll(){
        console.log(this.uniqueArr);
    }

    add(item) {
        if(!this.exists(item))
        {
            this.uniqueObj[item] = this.uniqueLength;
            this.uniqueArr[this.uniqueLength] = item;
            this.uniqueLength++;
        }
    }

    exists(item) {
        if(this.uniqueObj[item] !== undefined)
            return true;
        return false;
    }
    get(index){
        if(index >= 0 && index < this.uniqueLength)
        {
            return this.uniqueArr[index];
        }
        else
            return -1;
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
