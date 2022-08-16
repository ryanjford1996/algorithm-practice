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