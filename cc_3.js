//Task 1:Creating a function to calculate average sales 
function calculateAverageSales (sales){
    const totalSales= sales.reduce((total,sale)=> total+sale);
    let averageSales=totalSales/sales.length; 
    return averageSales;
}
const sales=[100,563,901,423,712] //Sales Data 
console.log("Average Sales:",calculateAverageSales(sales)); //Output:539.8

//Task 2: Create a function to determine performance rating
function determinePerformanceRating (averageSales){
    if (averageSales>10000)
        return "Excellent";
    else if (averageSales >= 7000 && averageSales <= 10000)
        return "Good";
    else if (averageSales >= 4000 && averageSales <= 7000)
        return "Satisfactory";
    if(averageSales< 4000)
        return "Needs Improvement";
}