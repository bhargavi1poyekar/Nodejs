const fs=require('fs')

//read files

// fs.readFile('./docs/blog2.txt',(err, data)=>{
//      if (err){
//         console.log(err);
//     }
//     //  console.log(data) // returns binary data
//     else{ console.log(data.toString())}
// })

// console.log('continues to move ahead, even though readfile isnt completed')

//Writing files-> replaces the contents of the file, if file exists, if file doesnt exists, new file is created

// fs.writeFile('./docs/blog2.txt','second line writing',()=>{ 
//     console.log('File was written') 
// }) 

// directories

// if (!fs.existsSync('./assets')){
// fs.mkdir('./assets', (err)=>{
//     if (err){
//         console.log(err)
//     }
//     else{console.log('folder created')}

// })
// }else{
//     fs.rmdir('./assets',(err)=>{
//         if (err){
//             console.log(err)
//         }
//         else{
//             console.log('folder deleted')
//         }
//     })
// }


//deleting files

// if (!fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt',(err)=>{
//       if (err){
//         console.log(err)
//       }else{
//         console.log('file deleted')
//       }  
//     })
// }