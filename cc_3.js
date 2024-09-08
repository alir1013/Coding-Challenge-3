//Task 1:Creating a function to calculate average sales 
function calculateAverageSales (sales){
    const totalsales= sales.reduce((total,sale)=> total+sale);
    totalsales=sales
    return totalsales/sales.length;
}
const sales= [100,563,901,423,712]
console.log(calculateAverageSales(sales));
