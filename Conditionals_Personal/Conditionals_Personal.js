
//How many cuts to cut a lown that is 56 feet x 48 feet and each cut takes 5 minutes and how much time this chore will take.If there is enough time
//before going into work within 120 minutes.
//In inches
var lawnWidthMowerCut = 24;
//In feet east to west
var lawnWidth = 56;
//In feet north to south
var lawnDiameter = 48;
//Average single cut takes 2 minutes..in minutes
var lawnCutTime = 2;
//In inches east to west
var lawnWidthCutsEtoW = lawnWidth * 12 / lawnWidthMowerCut;
// In inches north to south
var lawnDiameterNtoS = lawnDiameter * 12 / lawnWidthMowerCut;
//The total of cuts both e to w and s to n
var NumberofCuts = lawnDiameterNtoS + lawnWidthCutsEtoW; 
//Total amount of time in mimuntes needed to cut lawnDiameter
var totalTimeNeeded = NumberofCuts * lawnCutTime;
if(totalTimeNeeded < 100){
	console.log("Yes you have enough time to cut the lawn. This lawn will take "+totalTimeNeeded+" minutes to cut this lawn.");
	}else{
		if(totalTimeNeeded > 100);
		console.log("No, there is not enough time to cut this lawn.");
	}