# Node.js file Editor.

### Maximum Marks - 13

```
✅ able to submit the application - 1 mark (minimum score)
✅ should read the contents of a file - 2 mark
✅ should append content to a file - 2 mark
✅ should delete a file - 2 marks
✅ should create a file - 2 mark
✅ should rename a file - 2 mark
✅ should list all files in a directory - 2 mark
```

Create a Node.js program that allows for basic file manipulation.The program should take command line arguments to specify the desired operation (command for the particular operation are given in "()" , use those commands only ):
```
 - reading ( read )
 - deleting ( delete )
 - creating ( create )
 - appending ( append )
 - rename ( rename )
 - list ( list )
 ```

 and the file or directory to be affected. For example, running `'node index.js read test.txt' `should output the contents of the file `'test.txt'`, and `'node index.js append  test.txt CONTENT'` should append the string `'CONTENT'` to the end of the file. Additionally, the program should support renaming files and listing the contents of a directory, for example, `'node index.js rename test.txt new.txt' `and `'node index.js list .' `respectively.

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

```
npm install

// complete functions on index.js

// test locally
npm run test
```

## Test Cases

- Create a file called "test.txt" in the same directory as your Node.js program and add some text to it.
  - `Input:` node index.js read test.txt
  - `Expected output:` The contents of the file "test.txt"
- in the same "test.txt" directory as your Node.js program and add some text to it.(the new text should always be append in a new line)
  - `Input:` node index.js append "new content" test.txt
  - `Expected output:` "Content appended to the file 'test.txt'"
- Create a file called "test.txt" in the same directory as your Node.js program and add some text to it.
  - `Input:` node index.js delete test.txt
  - `Expected output:` "File 'test.txt' deleted"
- Create a file called "test.txt" in the same directory as your Node.js program
  - `Input:` node index.js create test.txt
  - `Expected output:` "File 'test.txt' created"
- Create a file called "test.txt" in the same directory as your Node.js program and add some text to it.
  - `Input:` node index.js rename test.txt new.txt
  - `Expected output:` "File 'test.txt' renamed to 'new.txt'"
- List of all files and directories in current dir
  - `Input:` node index.js list .
  - `Expected output:` A list of all files and directories in the current directory.


## Evaluation Criteria

- Correct implementation of the mathematical operations
- Proper handling of command line arguments
- Proper implementation of random number generation
- Proper handling of edge cases
- Code readability and organization
- Comments explaining the logic behind each step

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time