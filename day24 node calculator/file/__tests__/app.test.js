const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

global.score = 1;

describe("File manipulation program", () => {
  beforeEach(() => {
    // create test files and directory
    fs.writeFileSync("test.txt", "test_content");
    fs.writeFileSync("test2.txt", "test_content_2");
    fs.mkdirSync("test_folder");
  });

  afterEach(() => {
    // remove test files and directory
    fs.unlinkSync("test.txt");
    fs.unlinkSync("test2.txt");
    fs.rmdirSync("test_folder", { force: true });
  });

  it("should read the contents of a file", (done) => {
    const output = execSync("node index.js read test.txt").toString();
    expect(output.trim()).toEqual("test_content");
    done();
    global.score += 2;
  });

  it("should append content to a file", (done) => {
    execSync(`node index.js append test.txt "new content"`);
    const fileContent = fs.readFileSync("test.txt", "utf8");
    expect(fileContent).toEqual("test_content\nnew content");
    done();
    global.score += 2;
  });

  it("should delete a file", (done) => {
    execSync(`node index.js delete test.txt`);
    expect(() => fs.accessSync("test.txt")).toThrow();

    fs.writeFileSync("test.txt", "");
    done();
    global.score += 2;
  });

  it("should create a file", (done) => {
    execSync(`node index.js create new_file.txt`);
    expect(() => fs.accessSync("new_file.txt")).not.toThrow();

    fs.unlinkSync("new_file.txt");
    done();

    global.score += 2;
  });

  it("should rename a file", (done) => {
    execSync(`node index.js rename test.txt new_name.txt`);
    expect(() => fs.accessSync("new_name.txt")).not.toThrow();
    expect(() => fs.accessSync("test.txt")).toThrow();

    execSync(`node index.js rename new_name.txt test.txt`);
    done();
    global.score += 2;
  });

  it("should list all files in a directory", (done) => {
    const output = execSync(`node index.js list .`).toString();
    // console.log("all List",output)
    expect(output).toContain("test.txt");
    expect(output).toContain("test2.txt");
    expect(output).toContain("test_folder");
    done();
    global.score += 2;
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
