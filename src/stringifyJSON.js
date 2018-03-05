// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"'
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
    return '[' + obj.map(function(item) {
      return stringifyJSON(item);}).join(',') + ']';
    } else if (obj === null) {
      return 'null';
    } else {
      return '{' + Object.keys(obj).filter(function(key) {
        return typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined';}).map(function(key) {
        return stringifyJSON(key) + ':' + stringifyJSON(obj[key])}).join(',') + '}'
    }
  } else {
    return '' + obj;  
  }
};
