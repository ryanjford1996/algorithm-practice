//Write a function, islandCount, that takes in a grid containing Ws and Ls.
//W represents water and L represents land. The function should return the number of islands on the grid. 
//An island is a vertically or horizontally connected region of land.

const islandCount = (grid) => {
    const visited = new Set();
    
    let count = 0;
  
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (explore(grid, r, c, visited)) {
          count += 1;
        }
      }
    }
    return count;
  }
  
  const explore = (grid, r, c, visited) => {
    const rowInbounds = (0 <= r && r < grid.length);
    const colInbounds = (0 <= c && c < grid[0].length);
    if (!colInbounds || !rowInbounds) return false;
    
    if (grid[r][c] === 'W') return false;
    
    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, r-1, c, visited);
    explore(grid, r+1, c, visited);
    explore(grid, r, c-1, visited);
    explore(grid, r, c+1, visited);
    
    return true
  }