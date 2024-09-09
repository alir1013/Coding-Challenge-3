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
    const maxSales= Math.max(...salesPerson.map(person => person.totalSales)); //Finding max sales
    const minSales= Math.min (...salesPerson.map(person=> person.totalSales)); //Finding min sales
    
    const topPerformer= salesPerson.find(person=> person.totalSales === maxSales);
    const bottomPerformer= salesPerson.find (person => person.totalSales===minSales);
   
    return {topPerformer,bottomPerformer}; 

}
//Employee Sales Data 
const salesPerson= [
    {employee: "Khalid", totalSales:5648},
    {employee:"Sarah",totalSales:3012},
    {employee:"Laila",totalSales:2019},
    {employee:"Alicia",totalSales:5921}
];
const {topPerformer,bottomPerformer}= findTopAndBottomPerformers (salesPerson);

console.log ("TopPerformer:",topPerformer.employee); //Output:Alicia
console.log ("BottomPerformer:", bottomPerformer.employee); //Output:Laila
   
//Task 4: Combine Functions to Generate a Performance Report
function generatePerformanceReport (salesData) {
    const salesReport = salesData.map (salesPerson => {
    const averageSales = calculateAverageSales (salesPerson.sales); //Computing average sales for each salesperson
    const performanceRating= determinePerformanceRating(averageSales); // assinging a performance rating to each salesperson
    return {
        employee: salesPerson.employee,
        averageSales,
        performanceRating,
    };
    });
    const{topPerformer,bottomPerformer} = findTopAndBottomPerformers(performanceReport); //identifying top and bottom performers 
    const performanceReport= generatePerformanceReport (salesData);
    return {
        performanceReport,
        topPerformer,
        bottomPerformer,
    };
    };

console.log ("Performace Report:",PerformanceReport); //Output:

//Task 5: Testing the Functions with Sample Data
const salesData=[
    {name: 'Alice',sales:[12000,15000,13000]},
    {name: 'Bob', sales:[7000,6000,7500]},
    {name: 'Charlie',sales:[3000,4000,3500]},
    {name: `Diana`,sales:[9000,8500,9200]},
];
console.log 
