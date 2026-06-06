class BSNode 
{
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode(val){
        if (this.value === undefined) {
            return false;
        }
        else if(this.value === val){
            return true;
        }
        else if (val > this.value && this.rightChild) {
            return(this.rightChild.findNode(val));
        }
        else if(val < this.value && this.leftChild) {
            return(this.leftChild.findNode(val));
        }
        else
        {
            return false;
        }
    }
    findCommonParent(a, b){
        let newNode = this.value;
        if(this.leftChild)
            if(this.leftChild.findNode(a) && this.leftChild.findNode(b))
                newNode = this.leftChild.findCommonParent(a, b);
        if(this.rightChild)
            if(this.rightChild.findNode(a) && this.rightChild.findNode(b))
                newNode = this.rightChild.findCommonParent(a,b);
        return newNode;
    }
    
}


const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

let bSTree = new BSNode();

letters.forEach(l => bSTree.insertNode(l));
    
console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G")) //should return "E"
console.log(bSTree.findCommonParent("B", "L")) //should return "J"
console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree.findCommonParent("E", "H")) //should return "J"

