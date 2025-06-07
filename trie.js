class Node{
    constructor(){
        this.children = {}
        this.endOftheWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    
    insert(word){
        let node = this.root
        for(let i of word){
            if(!node.children[i]){
                node.children[i] = new Node
            }
            node = node.children[i]
        }
        node.endOftheWord = true
    }
    search(word){
        let node = this.root
        for(let i of word){
            if(!node.children[i]){
                return false
            }
            node = node.children[i]
        }
        return node.endOftheWord
    }
    startWith(word){
        let node = this.root
        for(let i of word){
            if(!node.children[i]){
                return false
            }
            node = node.children[i]
        }
        return true
    }
    autoComplete(word){
        let node = this.root
        for(let i of word){
            if(!node.children[i]){
                return []
            }
            node = node.children[i]
        }
        let list = []
        this.collectWords(node,word,list)
        return list
    }
    collectWords(node,word,list){
        if(node.endOftheWord){
            list.push(word)
        }
        for(let char in node.children){
            this.collectWords(node.children[char],word+char,list)
        }
    }
    print(){
        let list = []
        this.collectWords(this.root,"",list)
        console.log(list)
    }
    delete(word){
        let node = this.root
        let path = []
        for(let i of word){
            if(!node.children[i]){
                null
            }
            path.push([node,i])
            node = node.children[i]
        }
        if(node.endOftheWord){
            node.endOftheWord = false
        }
        for(let i=word.length-1;i>=0;i--){
            let [parentNode,char] = path[i]
            if(Object.keys(node.children).length>0 || node.endOftheWord){
                break
            }
            delete parentNode.children[char]
            node = parentNode
        }
    }
}