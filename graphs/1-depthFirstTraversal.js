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