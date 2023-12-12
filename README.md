[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12540707&assignment_repo_type=AssignmentRepo)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the source to the target (not
the list of nodes that you looked at during the search). Start with the template
I provided in `code.js` and test your new function. I have not provided any test
code, but you can base yours on test code from other exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer

The 'visited' set ensures that each node is visited at most once which takes $O(1)$ time on average per node. The 'path' array keeps track of the path from the 'startNode' to the 'targetNode', adding and removing nodes from the path is $O(1)$ time. The core recursive algorithm 'dfs' explores each neighbor of the current node. In the worst case this function would have to traverse through every edge in the graph once, which gives $O(E)$ time. If the 'targetNode' is not found, the 'dfs' function backtracks popping nodes from the 'path', which takes $O(1)$ for each node. Ovearll the time complexity of this Depth-First-Search algorithm is $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges in the graph. 

## Bonus

Implement and analyze breadth-first search.
