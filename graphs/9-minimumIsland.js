// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
//W represents water and L represents land. The function should return the size of the smallest island. 
//An island is a vertically or horizontally connected region of land.
//You may assume that the grid contains at least one island.

const minimumIsland = (grid) => {
    const visited = new Set();

    minCount = 10;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            newCount = explore(grid, r, c, visited)
            if (newCount === 0) continue
            else if (newCount < minCount) {
                minCount = newCount;
            }
        }
    }

    return minCount;
}

const explore = (grid, r, c, visited) => {
    const rowInbounds = ( 0 <= r && r < grid.length);
    const colInbounds = ( 0 <= c && c < grid[0].length);
    if (!rowInbounds || !colInbounds) return 0;

    if (grid[r][c] == 'W') return 0;
    const coordinates = r + ',' + c;
    if (visited.has(coordinates)) return 0

    visited.add(coordinates);
  
    curCount = 1;

    curCount += explore(grid, r+1, c, visited)
    curCount += explore(grid, r-1, c, visited)
    curCount += explore(grid, r, c+1, visited)
    curCount += explore(grid, r, c-1, visited)
    
    return curCount
}