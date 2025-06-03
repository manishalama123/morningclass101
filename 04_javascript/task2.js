let op = '*';
const arrow = (op)=>{
    let num1= 3;
    let num2=5;
    switch(op){
        case '+':
            return(num1+num2);
        
        case '-':
            return(num1-num2);
        
        case '*':
            return(num1*num2);
    
        case '/':
            if(num2==0){
                console.log(`The number cant be divided by 0.`);
            }
            else{
               return(num1/num2); 
            }
            
        
        case '%':
            return(num1%num2);
    }
}
console.log(arrow(op)); 