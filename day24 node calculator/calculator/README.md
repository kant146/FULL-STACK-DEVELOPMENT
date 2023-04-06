# Command Line Argument Based Calculator in Node.js

### Maximum Marks - 12
```
✅ able to submit the application - 1 mark (minimum score)
✅ should add two numbers - 1 mark
✅ should subtract two numbers - 1 mark
✅ should multiply two numbers- 1 marks
✅ should divide two numbers - 1 mark
✅ should return sin of a number - 1 mark
✅ should return cos of a number - 1 mark
✅ should return tan of a number - 1 mark
✅ should return the random number of length given - 3 mark
✅ should return a message if no length is given for random- 1 marks
```

Create a command line argument-based calculator using Node.js that takes in mathematical operations and numbers as arguments from the terminal and provides the appropriate output. The calculator should support the following operations (commands for the particular operation are given in "()", use those commands only ):

- addition ( add ) 
- subtraction ( sub ) 
- multiplication ( mult ) 
- division ( divide ) 
- sine ( sin ) 
- cosine ( cos ) 
- tangent ( tan ) 
- random number generation  ( random )

The code should use the built-in crypto module to generate random numbers, and should also have the capability to take in an additional argument for determining the length of the generated random number (in the `random` operation if the length is not provided it should show the `"Provide length for random number generation."` message (without cote) ).

`Hint: can use "crypto.randomBytes" function and convert to ".toString("binary")"`

For example, running the command `node index.js add 1 2` should return `3`, and running the command `node index.js random` should give the message `node index.js random 15`  should generate a random number of the given length (`ok not to show in a proper integer format`).

Your solution should be well-organized and easy to understand, with clear and concise comments explaining the logic behind each step.


## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

```
npm install

// complete functions on index.js

// test locally
npm run test
```

## Requirements

- The code should be written in Node.js
- Use `process.argv` property to retrieve the command line arguments passed to the script
- Use a switch statement or if-else statement to check the first argument (operation) and perform the appropriate calculation based on the remaining arguments
- Use the built-in crypto module and its "randomBytes()" method to generate a random number of the desired length (if provided as an argument)
- Use `console.log()` to output the result of the calculation
- Handle cases where the wrong number of arguments or invalid operations are passed
- Add comments throughout your code to explain the logic behind each step

## Evaluation Criteria

- Correct implementation of the mathematical operations
- Proper handling of command line arguments
- Proper implementation of random number generation
- Proper handling of edge cases
- Code readability and organization
- Comments explaining the logic behind each step

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
