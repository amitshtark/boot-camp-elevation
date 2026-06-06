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
            return null;
        }
        else if(this.value === val){
            return this;
        }
        else if (val > this.value && this.rightChild) {
            return(this.rightChild.findNode(val));
        }
        else if(val < this.value && this.leftChild) {
            return(this.leftChild.findNode(val));
        }
        else
        {
            return null;
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
    removeNode(parent, val){
        if(this.value === undefined){
            console.log("no such node");
            return;
        }
        if(val < this.value)
            if(this.leftChild)
                return this.leftChild.removeNode(this, val)
            else{
                console.log("no such node");
                return;
        }

        if(val > this.value)
            if(this.rightChild)
                return this.rightChild.removeNode(this, val)
            else{
                console.log("no such node");
                return;
        }

        if(this.leftChild && this.rightChild)
        {
            let tempNode = this.leftChild;
            let tempParent = this;
            while(tempNode.rightChild)
            {
                tempParent = tempNode;
                tempNode = tempNode.rightChild
            }
            this.value = tempNode.value;
            tempNode.removeNode(tempParent, tempNode.value)
            return;
        }
        if(this.leftChild)
        {
            if(parent.leftChild === this)
                parent.leftChild = this.leftChild;
            else if(parent.rightChild === this)
                parent.rightChild = this.leftChild;
            else{
                let child = this.leftChild;
                this.value = child.value;
                this.leftChild = child.leftChild;
                this.rightChild = child.rightChild;
            }
            return;
        }

        if(this.rightChild)
        {
            if(parent.leftChild === this)
                parent.leftChild = this.rightChild;
            else if(parent.rightChild === this)
                parent.rightChild = this.rightChild;
            else{
                let child = this.rightChild;
                this.value = child.value;
                this.leftChild = child.leftChild;
                this.rightChild = child.rightChild;
            }
            return;
        }
        if(parent.leftChild === this)
            parent.leftChild = null;
        else if(parent.rightChild === this)
            parent.rightChild = null;
        else
            this.value = undefined;
    }

    }
    


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
nodeWithOneChild.removeNode(nodeWithOneChild, 9);
console.log(nodeWithOneChild);    

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8);
console.log(nodeWithTwoChildren);

