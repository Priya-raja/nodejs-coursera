//to read from console use global object process. 
// read arguments passed through runtime using argv

var name = process.argv[2]; //read from 2nd index as node and filename will be the 0 and 1
var age = parseInt(process.argv[3]);  //arguments in runtime are always strings so parse it
var basicSalary = parseFloat(process.argv[4]);

if(age<= 0){
    console.log("Inavlid age, enter the correct age")
}

else if(basicSalary<= 0){
    console.log("Inavlid basicSalary")
}

else {
    const hra = (50*basicSalary)/100;
    const specialAllowance = (12*basicSalary)/100;
    const pf = (12*basicSalary)/100;
    
    let grossSalary = (basicSalary + specialAllowance+ hra) - pf
    
    let annualGrossSalary = 12 * grossSalary
    
    console.log(`the  annual gross salary of ${name} is ${annualGrossSalary}`)
    
}


