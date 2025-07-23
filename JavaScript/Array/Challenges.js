/*
1.Declare an array named 'teaFlavors' that contains the strings "green tea", "black tea", and "oolong tea"
Access the first element of the array and store it in a variable name 'firstTea'.
*/

let teaFlavors =['green tea','black tea', 'oolong tea'];

const firstTea=teaFlavors[0];
console.log(firstTea);


/*
2.Declare an array named 'cities' containing "London ", "Tokyo","paris",and "New York".
Access the third element in the arrat and store it in a  variable named 'favoriteCity'.
*/

let cities=["London",'Tokyo','Paris','New York'];

const favoriteCity=cities[2];
console.log(favoriteCity);



/*
3.You have an array named "teaTypes" containing  
"herbal tea", "white tea", and "masala chai",
 change the second element of the array to "jasmine tea".
*/

let teaTypes= ["herbel tea", "white tea", "masala chai"]

teaTypes[1]="jasmin tea";

console.log(teaTypes);




/*

4.Declare an array named 'citiesVisited' Containing " Mumbau" and " Sydney".
 Add  "Berlin" to the array using the  "push " method.

*/

let citiesVisited =["Mumbai", "Sydney"];
// citiesVisited[2]="Berlin";
citiesVisited.push("Berlin");
console.log(citiesVisited);
console.log(citiesVisited.length);


/*
5.You have an array named 'teaOrders' with 'chai', 'iced tea' ,'matcha' and 'early grey'
Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'

*/


let teaOrders=["chai","iced tea ", "matcha", "early grey"];
const lastOrder=teaOrders.pop();
console.log(teaOrders)
console.log(lastOrder);






/*
6. You have an array named 'PopularTeas' containing "green tea", 'oolong tea' and ' chai'
Create a soft copy of this array named 'softCopyTeas'.
*/


let popularTeas=["green tea","oolong tea", "chai"];
let softCopyTeas= popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

/*
7. You have an array named 'topCities' containing 'Berlin' , 'Singapore' and 'New York'.
Create a hard copy of this array named "hardCopyCities".
*/


let topCities =["Berlin","Singapore","New York"];
// let hardCopyCities=[...topCities];
let hardCopyCities=topCities.slice();
// topCities.pop();
// console.log(hardCopyCities);
console.log([...hardCopyCities]);


/*
8. You have two arrays: 'europeanCites', containing 
'paris' and 'Rome', and 
'asianCities' containing 'Tokyo' and 'Bangkok'
Merge these two arrays into a new array named 'worldCities'
*/

let europeanCities=["paris","Rome "];
let asianCities=["Tokyo","Bangkok"];
// let worldCities=[ europeanCities ,asianCities];
let worldCities=europeanCities.concat(asianCities);
console.log(worldCities);

/*
9.You have an array named 'teaMenu' containing "masala chai ","oolon tea" ,"green tea" and "early grey".
Find the length o the array and store it in a variable named 'menuLength'.
*/



let teaMenu=["Masala chai"," oolong tea", "green tea", "early grey"];
let menuLength= teaMenu.length;
console.log(menuLength);

/*
10. You havae an array named 'cityBucketList', containing "kyoto",'London','Cape Town' and 'Vancouver'
check if "London"is in the array and store the result in a variable named 'isLondonInList'.

*/

let cityBucketList =['kyoto','London','Cape Town','Vancouver'];
let isLondonInList=cityBucketList.includes("London");
console.log(isLondonInList )
