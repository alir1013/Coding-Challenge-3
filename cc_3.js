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
function findTopAndBottomPerformers (salesPerson){
    const maxSales= Math.max(...salesPerson.map(person => person.totalSlaes)); //Finding max sales
    const minSales= Math.min (...salesPeople.map(person=> person.totalSales)); //Finding min sales
    const topPerformer=salesPeople.find(person=> person.totalSales === maxSales);
    const bottomPerformer= salesPeople.find (person => person.totalSales===minSales);
    return {topPerformer,bottomPerformer}; 

}
//Employee Sales Data 
const salesPeople= [
    {employee: "Khalid", totalSales:5648},
    {employee:"Sarah",totalSales:3012},
    {employee:"Laila",totalSales:2019},
    {employee:"Alicia",totalSales:5921}
];
   
//Task 4: Combine Functions to Generate a Performance Report
function generatePerformanceReport (salesData) {
    const salesReports = salesData.map (salesPerson => {
    const averageSales = calculateAverageSales (salesPerson.salesFigures); //Computing average sales for each salesperson
    const performanceRating= determinePerformanceRating(averageSales); // assinging a performance rating to each salesperson
    return {
        employee: salesPerson.employee,
        averageSales,
        performanceRating,
    };
    });
    const {topPerformer,bottomPerformer} = findTopAndBottomPerformers(salesData); //to identify top and bottom performers 
    return {
        salesReports,
        topPerformer,
        bottomPerformer,
    };
    }
