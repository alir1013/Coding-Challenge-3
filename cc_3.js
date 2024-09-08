//Task 1:Creating a function to calculate average sales 
function calculateAverageSales (sales){
    const totalSales= sales.reduce((total,sale)=> total+sale);
    let averageSales=totalSales/sales.length; 
    return averageSales;
}
const sales=[100,563,901,423,712]
console.log(calculateAverageSales(sales));

