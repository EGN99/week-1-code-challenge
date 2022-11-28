let salary=45000;

// PAYE deduction
//amount to be deducted is 'deduction1'

let deduction1;
if (salary<=24000){
    //deduction1 for is 10 percent if salary is below or equal to 24000.
    deduction1=(salary*0.10)
} else if(salary>24000 && salary<=32333){
    //deduction1 for is 10 percent if salary is more than or equal to 32333.
    deduction1=(salary*0.25)
} else deduction1=(salary*0.30)
    //deduction1 for is 30 percent if salary is more than 32333.


//NSSF calculator
//amount to be deducted is 'deduction2'
//deduction2 is 6 percent of salary
let deduction2=(salary*0.06)

//NHIF
//amount to be deducted is 'deduction3'

let deduction3;
if (salary<6000){
    deduction3=150
}else if (salary>5999 && salary<8000){
     deduction3=300
}else if (salary>7999 && salary<12000){
    deduction3=400
}else if (salary>11999 && salary<15000){
deduction3=500
}
else if (salary>14999 && salary<20000){
deduction3=600
}
else if (salary>19999 && salary<25000){
deduction3=750
}
else if(salary>24999 && salary<30000){
deduction3=850
}
else if(salary>29999 && salary<35000){
deduction3=900
}
else if(salary>34999 && salary<40000){
deduction3=950
}
else if(salary>39999 && salary<45000){
deduction3=1000
}
else if(salary>44999 && salary<50000){
deduction3=1100
}
else if(salary>49999 && salary<60000){
deduction3=1200
}
else if(salary>59999 && salary<70000){
deduction3=1300
}
else if(salary>69999 && salary<80000){
deduction3=1400
}
else if(salary>79999 && salary<90000){
deduction3=1500
}
else if(salary>89999 && salary<100000){
deduction3=1600
}
else (salary>=100000)
deduction3=1700


//Net salary calculator
//Net salary=salary-(NHIF payment+NSSF payment+PAYE tax)
let netSalary = salary-(deduction1+deduction2+deduction3);
console.log(netSalary)