function printevennumber(arr){
    console.log("Even number in the array:");
    arr.forEach(num=>{
        if(num%2 === 0){
            console.log(num);
        }
    });
}
function bignumber(arr){
    let max= arr[0];
    arr.forEach(num=>{
    if(num>max){
        max= arr[i];
    }
    });
}
const people =[
    { firstName: 'Mike', lastName: 'Johnson', gender: 'male' },
    { firstName: 'Emily', lastName: 'Davis', gender: 'female' },
    { firstName: 'Robert', lastName: 'Brown', gender: 'male' },
]
function printmalefirstname(people){
    people.forEach(person=>{
        if(person.gender==='male'){
            console.log(person.lastName);
        }
    });
}

const numbers= [1,2,3,4,5,6,7,8,9,10];
printevennumber(numbers);
printmalefirstname(people);