// 1. counting sheep
function countingSheep(num){
    if (num === 0){
        console.log(`${num}: No more sheep left`)
        return
    }
    console.log(`${num}: Another sheep jumps over the fence`)
    countingSheep(num-1)
}

countingSheep(3)

// 2. power calculator 
function powerCalculator(base, exponent) {
    if (exponent < 0){
        return "Exponent should be greater than or equal to 0"
    }
    if (exponent === 0){
        return 1
    }
        return base * powerCalculator(base, exponent-1)
}

console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -2))

// 3. reverse str
function reverseString(str) {
    if (str === ""){
        return ""
    } 

    return reverseString(str.substr(1)) + str.charAt(0)
    
}

console.log(reverseString("hello"))
console.log(reverseString("the sky is blue"))

// 4. triangular number
function triangularNumber(n){
    if (n === 1){
        return 1
    }
    return n + triangularNumber(n-1)
}

console.log(triangularNumber(1))
console.log(triangularNumber(2))
console.log(triangularNumber(3))
console.log(triangularNumber(4))
console.log(triangularNumber(5))

// 5. string splitter
function stringSplitter(str, seperator){

    let theSeparator = str.indexOf(seperator)

    if (theSeparator === -1){
        return [str.slice(0, str.length)]
    }

    return [str.slice(0, theSeparator), ...stringSplitter(str.slice(theSeparator + 1), seperator)]
}

console.log(stringSplitter("02/20/2020", "/"))

// 6. fibonacci
function fibonacci(num){
    if (num < 2){
        return num
    }

    return fibonacci(num - 1) + fibonacci(num - 2)
}

for (var i=0; i <= 10; i++){
    console.log(`The fibonacci number of ${i} is ${fibonacci(i)}`);
}

// 7. factorial
function findFactorial(n){
    if (n === 1){
        return n
    }
    return n * findFactorial(n-1)
}

console.log(findFactorial(5))

// 8. maze 

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];
  
  const findWayOut = function(maze, position=0, row=0, column=0, path=[], direction='S') {
    if(row >= maze.length || column >= maze[0].length) {
      return;
    }
    if(row < 0 || column < 0) {
      return;
    }
    path[position] = direction
    position++
    if(maze[row][column] === 'e') {
      console.log('We found the path.', path)
      return;
    }
    if(maze[row][column] === ' ') {
      maze[row][column] = 'V'
      findWayOut(maze, position, row, column - 1, path, 'L')
      findWayOut(maze, position, row, column + 1, path, 'R')
      findWayOut(maze, position, row - 1, column, path, 'U')
      findWayOut(maze, position, row + 1, column, path, 'D')
      maze[row][column] = ' '
    }
    position--
  }
  
  findWayOut(maze)

// 9. all ways out maze 


// 10. anagrams
function anagrams(word){
    let results = [];

    if (word.length < 2){
        results.push(word)
        return results
    }

    for (let i=0; i<word.length; i++){
        let firstChar = word[i]
        let remainingChars = word.substring(0, i) + word.substring(i+1)
        let innerPermutations = anagrams(remainingChars)

        for (var j=0; j<innerPermutations.length; j++){
            results.push(firstChar + innerPermutations[j])
        }
    }
    return results
}

console.log(anagrams("east")) 

//11. org chart

const facebook = {
    Zuckerberg: {
      Schroepfer: {
        Bosworth: {
          Steve: {},
          Kyle: {},
          Andra: {}
        },
        Zhao: {
          Richie: {},
          Sofia: {}
        }
      },
      Schrage: {
        VanDyck: {
          Sabrina: {},
          Michelle: {},
          Josh: {}
        },
        Swain: {
          Blanch: {},
          Tom: {},
          Joe: {}
        }
      },
      Sandberg: {
        Goler: {
          Eddie: {},
          Julie: {},
          Annie: {}
        },
        Hernandez: {
          Rowi: {},
          Inga: {},
          Morgan: {}
        },
        Moissinac: {
          Amy: {},
          Chuck: {},
          Vinni: {}
        },
        Kelley: {
          Eric: {},
          Ana: {},
          Wes: {}
        }
      }
    }
  };
  
  const orgChart = function (obj, indent = '') {
    let output = '';
    for (let key in obj) {
      // let indent = '  ';
      output = output + indent + key + '\n';
      output = output + orgChart(obj[key], indent+'     ');
    }
    return output;
  };
  
  console.log(orgChart(facebook 
  ));

// 12. binary 
function convertToBinary(dec){
    if (dec === 0){
        return 0
    } 

    return dec % 2 + 10 * (convertToBinary(Math.floor(dec / 2)))
}

console.log(convertToBinary(0)) //output: 0
console.log(convertToBinary(2)) //output: 0
console.log(convertToBinary(3)) // output: 11
