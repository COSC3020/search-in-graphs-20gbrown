function depthFirstSearch(graph, startNode, targetNode) {
  const visited = new Set();
  const path = [];

  function dfs(currentNode) {
    visited.add(currentNode);
    path.push(currentNode);

    if (currentNode === targetNode) {
      return true; // found the target
    }

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor) && dfs(neighbor)) {
        return true; // path found, exit recursion
      }
    }

    // if the target is not found in the current branch, backtrack
    path.pop();
    return false;
  }

  if (dfs(startNode)) {
    return path; // return the path from start to target
  } else {
    return null; // path from start to target does not exist
  }
}

/*const adjacencyList = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: ["G"],
    G: [],
  };
  
  const startNode = "A";
  const targetNode = "F";
  const path = depthFirstSearch(adjacencyList, startNode, targetNode);
*/