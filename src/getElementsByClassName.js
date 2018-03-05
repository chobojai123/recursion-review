// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var nodes = [];
  node = node || document.body;
  
  if (node.classList && node.classList.contains(className)) {
    nodes.push(node);
  } 

  if (node.childNodes.length > 0) {
    for (var index = 0; index < node.childNodes.length; index++) {
       nodes = nodes.concat(getElementsByClassName(className, node.childNodes[index]));
    }
  }
  return nodes;
};
