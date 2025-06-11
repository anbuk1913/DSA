class Graph{
    constructor(){
        this.adjacency = {}
    }
    addVertex(vertex){
        if(!this.adjacency[vertex]){
            this.adjacency[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacency[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacency[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacency[vertex1].add(vertex2)
        this.adjacency[vertex2].add(vertex1)
    }
    display(){
        for(let i in this.adjacency){
            console.log(i,"->",[...this.adjacency[i]])
        }
    }
    hasEdge(vertex1,vertex2){
        return this.adjacency[vertex1].has(vertex2) && this.adjacency[vertex2].has(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjacency[vertex1].delete(vertex2)
        this.adjacency[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacency[vertex]){
            return null
        } else {
            for(let i of this.adjacency[vertex]){
                this.removeEdge(i,vertex)
            }
            delete this.adjacency[vertex]
        }
    }
}