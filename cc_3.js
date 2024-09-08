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
let averageSales= (calculateAverageSales(sales)); 
console.log("Performance Rating:",determinePerformanceRating(averageSales)); //Output: Needs Improvement 

//Task 3:Creating a function to identify top and bottom performers
function findTopAndBottomPerformers(salesPerson)
    const maxSales=Math.max(...salesPerson.map(people=>people.totalSales));
    const minSales= Math.min(...salesPerson.map(people=>people.totalSales));

    const {topPerformer,bottomPerformer}= salesPerson.reduce;
    const salesPerson= [
        {name: "Khalid", averageSales: 5648},
        {name:"Sarah", averageSales: 3012},
        {name:"Laila", averageSales: 2019},
        {name: "Alicia", averageSakes: 5921}
    ];
    const performers= findTopAndBottomPerformers (salesPerson);
return {
    topPerformer: topPerformer.name,
    bottomPerformer: bottomPerformer.name
    
};

    



