const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const graphDataGenerator = jsc.record({
  A: jsc.array(jsc.elements(['B', 'C', 'D', 'E', 'F', 'G'])),
  B: jsc.array(jsc.elements(['A', 'C', 'D', 'E', 'F', 'G'])),
  C: jsc.array(jsc.elements(['A', 'B', 'D', 'E', 'F', 'G'])),
  D: jsc.array(jsc.elements(['A', 'B', 'C', 'E', 'F', 'G'])),
  E: jsc.array(jsc.elements(['A', 'B', 'C', 'D', 'F', 'G'])),
  F: jsc.array(jsc.elements(['A', 'B', 'C', 'D', 'E', 'G'])),
  G: jsc.array(jsc.elements(['A', 'B', 'C', 'D', 'E', 'F'])),
});

const test = jsc.forall(graphDataGenerator, function (graphData) {
  const startNode = 'A';
  const targetNode = 'F';
  
  const path = depthFirstSearch(graphData, startNode, targetNode);

  if (path) {
    return path[0] === startNode && path[path.length - 1] === targetNode;
  } else {
    return true;
  }
});

jsc.assert(test);
