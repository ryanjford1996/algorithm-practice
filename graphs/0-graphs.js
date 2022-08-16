
//Graph practice

//Depth First -- Iterative (Stack order, Stack order, so can be done iteratively or recursively)
const depthFirstPrintIterative = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

//Depth First -- Recursive (Stack order, so can be done iteratively or recursively)
const depthFirstPrintRecursive = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor);
    }
}


//Breadth First -- Iterative (Queue order, practically must be done iteratively)
const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

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


//Undirected path - wrate a function that takes in an array of edges for an undirected
//graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether
// or not there exists a path between nodeA and nodeB.

//Undirected path with helper function to build graph.

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;

    if (visited.has(src)) return false;

    visited.add(src)

    for (let neighbor of graph[src]) {
       if (hasPath(graph, neighbor, dst, visited) === true) {
        return true
       }
    };

    return false;
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [ a, b ] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}


//manual tests

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};