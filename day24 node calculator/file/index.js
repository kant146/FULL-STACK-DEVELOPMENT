const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

// const files= "./test.txt";


switch (operation) {
  // complete the following function.
    case "read":
      let data=fs.readFileSync(`./${file}`,"utf-8")
        console.log(data);
      break;

    case "delete":
      fs.unlinkSync(`./${file}`)
      break;

    case "create": 
    fs.writeFileSync(`./${file}`,`${content}`)
    break;

    case "append":
      fs.appendFileSync(`./${file}`,`\n${content}`)
    
      break;

    case "rename":
      fs.renameSync(`./${file}`,`${content}`)
    
      break;

    case "list":
      fs.readdirSync(`${file}`).forEach(e => {
        console.log(e)
      });
      break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}
