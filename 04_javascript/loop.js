// for (let i = 0; i < 10; i++) {

//     console.log(i);
//   }
// nested loop : loop inside another loop
// multiplication table
// num =3
// for(i=1;i<=10;i++){
//   console.log(`${num} x${i} = ${num*i}`);
// }


// for(i=1;i<=5;i++){
//   for(j=1;j<=10;j++){
//     console.log(`${i} x${j} = ${j*i}`);
//   }
//   console.log(`-------------`);
// }

// countdown timer
// minutes = 3
// while(minutes>0){
//   seconds = 5
//   while(seconds>0){
//     console.log(`${minutes}m ${seconds}s remaining`);
//     seconds--
//   }
//   minutes--
// }
// // pyramid
// let n=5
// for(let i=1;i<=n;i++){
//   let row = ''
//   for(let j=1;j<=i;j++){
//       // row += '* '
//       row += `${j}`
    
//   }
//   console.log(row);
// }

// for(let i=5;i>=1;i--){
//   let row=''
//   for(let j=5;j>=i;j--){
//     row+=`${j}`
//   }
//   console.log(row);
// }

// for(let i=1;i<=5;i++){
//   let row= ''
//   for(let j=1;j<=i;j++){
//     row+= `${j}`
//   }
//   console.log(row);
// }
// for(let i=1;i<=5;i++){
//   let row= ''
//   for(let j=6-i;j<=5;j++){
//     row+= `${j}`
//   }
//   console.log(row);
// }

// break and continue

// break: overall loop terminate
for(let i=0; i<=10; i++)
{
  if(i==5){
    break;
  }console.log(i);
}

// continue: terminates one iteration after it

for(let i=0; i<=10; i++)
{
  if(i==5){
    continue;
  }console.log(i);
}
