// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateTotalBudget(n_laptop,n_tablets,n_mobile)
{
    const laptop_price =35000;
    const tablet_price = 15000;
    const mobile_price = 20000;
    let laptop_sub_total=laptop_price*n_laptop;
    let tablet_sub_total=tablet_price*n_tablets;
    let mobile_sub_total=mobile_price*n_mobile;
    let total=laptop_sub_total+tablet_sub_total+mobile_sub_total;
    return total;
}
let required = calculateTotalBudget(20,30,50)
console.log('total money required'+' '+required+' '+'tk only');

