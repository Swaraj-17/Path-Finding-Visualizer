"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DepthFirstSearch = DepthFirstSearch;
var Data;
var visited = [];
var spotted = false; //Implementing BFS Traversal

function DepthFirstSearch(arrayData, startNode, endNode) {
  Data = new Array(2);
  Data = arrayData;
  visited = []; //console.log(Data[0][0]);

  var found = false;

  for (var i = 0; i < Data.length; i++) {
    for (var j = 0; j < Data.length; j++) {
      if (Data[i][j].id == startNode) {
        startNode = Data[i][j];
        found = true;
        break;
      }

      if (found) {
        break;
      }
    }
  } //console.log(startNode)


  graphTraversal(startNode, endNode);
  dfsanimate(visited, endNode);
} //Recursion


function graphTraversal(node, stop) {
  //console.log(node);
  if (spotted) {//pass
  } else {
    node.visited = true;
    visited.push(node.id);

    for (var i = 0; i < node.neighbors.length; i++) {
      if (!node.neighbors[i].visited) {
        graphTraversal(node.neighbors[i]);
      }
    }

    if (node == stop) {
      spotted = true;
    }
  }
} //Animate


function dfsanimate(data, stop) {
  //console.log(data);
  //console.log(stop);
  var notfound = true;

  var _loop = function _loop() {
    var x = data[i];

    if (x != stop) {
      setTimeout(function () {
        $("#" + x).addClass("animate"); //console.log(x);
      }, (i + 1) * 100);
    } else {
      notfound = false;
      setTimeout(function () {
        alert("Element Found! \nNode visited after searching " + (i - 1) + " nodes.");
      }, (i + 3) * 100);
      return "break";
    }
  };

  for (var i = 1; i < data.length; i++) {
    var _ret = _loop();

    if (_ret === "break") break;
  }

  if (notfound) {
    setTimeout(function () {
      alert("Element cannot be found!");
    }, (i + 3) * 100);
  }
}