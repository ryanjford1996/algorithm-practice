//Has Path Problem - takes 3 arguments: graph, source, and destination. 
//Return true if destination can be reached from source, false if not.

//depth first solution, recursive
const hasPathDepth = (graph, src, dst) => {
    if (src === dst) return true

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst)) return true
    }

    return false
}

//breadth first solution, iterative
const hasPathBreadth = (graph, src, dst) => {
    queue = [ src ];

    while (queue.length > 0) {
        let current = queue.shift();
        if (current === dst) return true;
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    
    return false
}