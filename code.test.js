const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const test = jsc.forall('array string', function (graphData) {
  // Convert graph data to an adjacency list
  /*const adjacencyList = {};

  // Populate the adjacency list based on the graph data
  for (const edge of graphData) {
    const [from, to] = edge.split('->');
    if (!adjacencyList[from]) {
      adjacencyList[from] = [];
    }
    adjacencyList[from].push(to);
  }*/

  if (typeof graphData !== 'object') {
    return true; // Skip non-graph inputs
  }

  // Define start and target nodes
  const startNode = 'A';
  const targetNode = 'F';

  // Run the DFS algorithm
  const path = depthFirstSearch(graphData, startNode, targetNode);

  // Check if a path was found
  if (path) {
    // Verify if the path is valid
    return path[0] === startNode && path[path.length - 1] === targetNode;
  } else {
    // If no path was found, return true
    return true;
  }
});

jsc.assert(test);