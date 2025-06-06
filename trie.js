class Node {
    constructor(){
        this.children ={}
        this.EndoftheWord = false
    }
}

class tire {
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]= new Node()
            }
            node = node.children[char]
        }
        node.EndoftheWord = true 
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.EndoftheWord
    }


    startwith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true 
    }

    autoComplete(word){
        let node = this.root 
        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }
        let list = []
        this.collectword(node,word,list)
        return list
    }

    collectword(node , word , list){
        if(node.EndoftheWord){
            list.push(word)
        }
        for(let char in node.children){
            this.collectword(node.children[char],word+char,list)
        }
    }

    print(){
        let list = []
        this.collectword(this.root,'',list)
        console.log(list)
    }

    delete(word){
        let node = this.root
        let path = []
        for(let char of word){
            if(!node.children[char]){
                return null
            }
            path.push([node,char])
            node = node.children[char]
        }
        if(node.EndoftheWord){
            node.EndoftheWord = false
        }
        for(let i = word.length-1 ; i>=0 ;i--){  
            let [parentNode,char] = path[i]
            if(Object.keys(node.children).length > 0 || node.EndoftheWord){
                break
            }
            delete parentNode.children[char]            
            node = parentNode
        }
    }
}


let t = new tire()

t.insert("sharik")
t.insert("apple")
t.insert("sherik")
console.log(t)