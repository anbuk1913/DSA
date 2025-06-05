class Heap{
    constructor(){
        this.heap = []
    }
    hasParent(i){
        return Math.floor((i-1)/2)
    }
    getLeft(i){
        return i*2+1
    }
    getRight(i){
        return i*2+2
    }
    getParentValue(i){
        
    }
}