function findShortestString(arr) {
  let shortest = arr[0]
  for (let str of arr) {
    if (shortest.length > str.length) {
      shortest = str
    }
  }
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("Expecting: 'tv'");
  console.log("=>", findShortestString(['parts', 'uncharted', 'tv', 'room']));

  console.log("Expecting: 'it'");
  console.log("=>", findShortestString(['combat', 'let', 'it', 'in']));

  console.log("Expecting: 'said'");
  console.log("=>", findShortestString(['said', 'wasnt', 'where', 'surface']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
