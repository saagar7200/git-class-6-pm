//! node inbuilt modules

// * path module
import path from "path";

let file1 = "xyz/dfr/";

let filePath = "abc/def/ghi/xyz.txt";

//* to get extention name form filename / path
console.log(path.extname(filePath));

// * return last portion of the path
console.log(path.basename(filePath));

// * return directory name portion of the path
console.log(path.dirname(filePath));

// * to join multiple paths to get one complete path
console.log(path.join(file1, "./", filePath));

// * returns absolute path of any file
console.log(path.resolve("index.js"));
console.log(path.resolve("../typescript/index.ts"));

// ../typescript.index.ts

// ! fs module
// * to work with file-system
//? sync
//? async

// ! importing fs module
import fs from "fs";
import { error } from "console";

//* write file
// fs.writeFileSync()  //* sync method ( blocking )

// fs.writeFile()  //* async  ( non-blocking )

// fs.writeFile("file.txt", `This is demo content`,(error) => {
//   if (error) {
//     console.log(error)
//     return
//   }

//   console.log("write file success");
// })


// ! read file

// fs.readFile('file.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log('---------read output----------')
//     console.log(data)
// })


fs.appendFile("file.txt", `This is new fresh fresh content\n`,(error) => {
  if (error) {
    console.log(error)
    return
  }

  console.log("write file success");
})