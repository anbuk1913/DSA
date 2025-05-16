class HashTable{
    constructor(size){
        this.size = size
        this.table = Array(size).fill(null).map(()=>[])
    }
    hash(key){
        let total = 0
        for(let i of key){
            total+=i.charCodeAt(0)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        const table = this.table[index]
        for(let i of table){
            if(i[0]==key){
                i[1] = value
                return
            }
        }
        table.push([key,value])
    }
    get(key){
        const index = this.hash(key)
        const table = this.table[index]
        for(let i of table){
            if(i[0]==key){
                return i[1]
            }
        }
        return null
    }
}

const obj = new HashTable(50)