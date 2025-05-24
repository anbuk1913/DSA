class stack{
    constructor(){
        this.str = []
        this.redoWord = []
    }
    add(char){
        this.str.push(char)
    }
    undo(){
        let tem = this.str[this.str.length-1]
        this.redoWord.push(tem)
        this.str.pop()
        return tem
    }
    redo(){
        if(this.redoWord.length == 0){
            return
        }
        this.str.push(this.redoWord[this.redoWord.length-1])
        this.redoWord.pop()
    }
    display(){
        return this.str.join(" ")
    }
}