//Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected 
//graph. The function should return the number of connected components within the graph.

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
      if (explore(graph, parseInt(node), visited)) {
        count += 1;
      }
    }
    return count
  };
  
  const explore = (graph, node, visited) => {
    if (visited.has(node)) return false;
    
    visited.add(node);
    
    for (let neighbor of graph[node]) {
        explore(graph, neighbor, visited);
    }
    
    return true
  }