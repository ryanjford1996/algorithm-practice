//   Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
//   The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
    const visited = new Set();
    
    let maxBranch = 0;
    
    for (let node in graph) {
      let currentBranch = exploreComponents(graph, node, visited);
      if (currentBranch > maxBranch) maxBranch = currentBranch;
    }
    
    return maxBranch
  };
  
  const exploreComponents = (graph, node, visited) => {
    if (visited.has(String(node))) return 0;
    
    visited.add(String(node));
    let count = 1;
    for (let neighbor of graph[node]) {
      count += exploreComponents(graph, neighbor, visited)
    }
    
    return count
    
  }