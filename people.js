const people=['yoshi','ryu','chun-li','mario'];
const ages=[1,2,44,6,3,2,5]

console.log(people)

// module.exports=people // exporting single thing

// module.exports={
//     people:people,
//     ages:ages,
// };

// if dictionary key and value have same names, we cna directly use the values:
module.exports={
    people, ages
};