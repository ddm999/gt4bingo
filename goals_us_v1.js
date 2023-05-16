// This is part of a version currently in development and may be changed at any time.

// Tags
var Manufacturer = {name: "Manufacturer", max: [10,10,10,10,10], line: true},
	BeatEvent =    {name: "BeatEvent", max: [15,15,15,15,15], line: true},
	RallyEvent =   {name: "RallyEvent", max: [5,5,5,5,5], line: true},
	BeatSeries =   {name: "BeatSeries", max: [10,10,10,10,10], line: true},
	FamilyCup =    {name: "FamilyCup", max: [10,10,10,10,10], line: true},
	Missions =     {name: "Mission", max: [5,5,5,5,5], line: true},
	Licence =      {name: "Licence", max: [5,5,5,5,5], line: true},
	Never =        {name: "Never", max: [3,3,3,2,1], line: false},
	OwnCars =      {name: "OwnCars", max: [3,3,3,2,1], line: false};

var bingoList_us_v1 = [

// Very Short (0)
[
	{name: "Gold a Coffee Break", antisynergy:["CoffeeGold"], tags:[Licence]},
	{name: "Gold 5 B License tests", antisynergy:["BGold"], tags:[Licence]},
	{name: "Own a total of 10 different car models", antisynergy:["CarOwnCount"], tags:[OwnCars]},
],

// Short (1)
[
	{name: "Win 5 different Special Conditions event races", antisynergy:["RallyCount"], tags:[RallyEvent,BeatEvent], licence: "A"},
	{name: "Gold an A License test", antisynergy:["AGold"], tags:[Licence], licence: "B", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 A License tests", antisynergy:["AGold"], tags:[Licence], licence: "B"},
	{name: "Gold 10 B License tests", antisynergy:["BGold"], tags:[Licence], catalyst:["ManyLicenceTest"]},
	{name: "Own a total of 20 different car models", antisynergy:["CarOwnCount"], tags:[OwnCars]},
	{name: "Own cars from 10 different manufacturers", antisynergy:["ManuOwnCount"], tags:[OwnCars]},
],

// Medium (2)
[
	{name: "Win 10 different Special Conditions event races", antisynergy:["RallyCount"], tags:[RallyEvent,BeatEvent], licence: "A"},
	{name: "Gold an IB License test", antisynergy:["IBGold"], tags:[Licence], licence: "A", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 IB License tests", antisynergy:["IBGold"], tags:[Licence], licence: "A"},
	{name: "Gold 10 A License tests", antisynergy:["AGold"], tags:[Licence], licence: "B", catalyst:["ManyLicenceTest"]},
	{name: "Own a total of 30 different car models", antisynergy:["CarOwnCount"], tags:[OwnCars]},
	{name: "Own cars from 20 different manufacturers", antisynergy:["ManuOwnCount"], tags:[OwnCars]},

	{name: "Never drive a garage car without first applying a wing from GT Auto to it", tags:[Never]},
	{name: "Never drive a garage car with Sports tyres equipped", tags:[Never]},
],

// Long (3)
[
	{name: "Gold an IA License test", antisynergy:["IAGold"], tags:[Licence], licence: "IB", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 IA License tests", antisynergy:["IAGold"], tags:[Licence], licence: "IB"},
	{name: "Gold 10 IB License tests", antisynergy:["IBGold"], tags:[Licence], licence: "A", catalyst:["ManyLicenceTest"]},
	{name: "Own a total of 50 different car models", antisynergy:["CarOwnCount"], tags:[OwnCars]},
	{name: "Own cars from 30 different manufacturers", antisynergy:["ManuOwnCount"], tags:[OwnCars]},

	{name: "LONG TASK NOT YET IMPLEMENTED 1"},
	{name: "LONG TASK NOT YET IMPLEMENTED 2"},
	{name: "LONG TASK NOT YET IMPLEMENTED 3"},
	{name: "LONG TASK NOT YET IMPLEMENTED 4"},
	{name: "LONG TASK NOT YET IMPLEMENTED 5"},
	{name: "LONG TASK NOT YET IMPLEMENTED 6"},
	{name: "LONG TASK NOT YET IMPLEMENTED 7"},
	{name: "LONG TASK NOT YET IMPLEMENTED 8"},
	{name: "LONG TASK NOT YET IMPLEMENTED 9"},
	{name: "LONG TASK NOT YET IMPLEMENTED 10"},
	{name: "LONG TASK NOT YET IMPLEMENTED 11"},
	{name: "LONG TASK NOT YET IMPLEMENTED 12"},
	{name: "LONG TASK NOT YET IMPLEMENTED 13"},
	{name: "LONG TASK NOT YET IMPLEMENTED 14"},
	{name: "LONG TASK NOT YET IMPLEMENTED 15"},
	{name: "LONG TASK NOT YET IMPLEMENTED 16"},
	{name: "LONG TASK NOT YET IMPLEMENTED 17"},
	{name: "LONG TASK NOT YET IMPLEMENTED 18"},
	{name: "LONG TASK NOT YET IMPLEMENTED 19"},
],

// Very Long (4)
[
	{name: "Gold an S License test", antisynergy:["SGold"], tags:[Licence], licence: "IA", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 S License tests", antisynergy:["SGold"], tags:[Licence], licence: "IA"},
	{name: "Gold 10 IA License tests", antisynergy:["IAGold"], tags:[Licence], licence: "IB", catalyst:["ManyLicenceTest"]},

	{name: "VERY LONG TASK NOT YET IMPLEMENTED 20"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 21"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 22"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 23"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 24"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 25"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 26"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 27"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 28"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 29"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 30"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 31"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 32"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 33"},
	{name: "VERY LONG TASK NOT YET IMPLEMENTED 34"},
],

// Extremely Long (5)
[
	{name: "Gold 10 S License tests", antisynergy:["SGold"], tags:[Licence], licence: "IA", catalyst:["ManyLicenceTest"]},

	{name: "EXTREMELY LONG TASK NOT YET IMPLEMENTED 35"},
	{name: "EXTREMELY LONG TASK NOT YET IMPLEMENTED 36"},
	{name: "EXTREMELY LONG TASK NOT YET IMPLEMENTED 37"},
]

];

/* PROCEDURALLY GENERATED GOALS */

Events_Orig["-"].forEach(element => {
	bingoList_us_v1[0].push({
		name: "Win a race in "+element+" ASPECPTS",
		tags: [BeatEvent],
		antisynergy: [element],
		licence: "-",
		infrequency: 2
	})
	bingoList_us_v1[1].push({
		name: "Finish every event in "+element+" in at least third place ASPECPTS",
		tags: [BeatSeries],
		antisynergy: [element],
		licence: "-",
		infrequency: 3
	})
});
Events_Orig["b"].forEach(element => {
	bingoList_us_v1[1].push({
		name: "Win a race in "+element+" ASPECPTS",
		tags: [BeatEvent],
		antisynergy: [element],
		licence: "B",
		infrequency: 2
	})
	bingoList_us_v1[2].push({
		name: "Finish every event in "+element+" in at least third place ASPECPTS",
		tags: [BeatSeries],
		antisynergy: [element],
		licence: "B",
		infrequency: 3
	})
});
Events_Orig["a"].forEach(element => {
	bingoList_us_v1[2].push({
		name: "Win a race in "+element+" ASPECPTS",
		tags: [BeatEvent],
		antisynergy: [element],
		licence: "A",
		infrequency: 2
	})
	bingoList_us_v1[3].push({
		name: "Finish every event in "+element+" in at least third place ASPECPTS",
		tags: [BeatSeries],
		antisynergy: [element],
		licence: "A",
		infrequency: 3
	})
});
Events_Orig["rally"].forEach(element => {
	bingoList_us_v1[2].push({
		name: "Win a "+element+" special condition event race ASPECPTS",
		tags: [RallyEvent, BeatEvent],
		antisynergy: [element],
		licence: "A",
		infrequency: 1
	})
});
Events_Orig["ib"].forEach(element => {
	bingoList_us_v1[3].push({
		name: "Win a race in "+element+" ASPECPTS",
		tags: [BeatEvent],
		antisynergy: [element],
		licence: "IB",
		infrequency: 2
	})
	bingoList_us_v1[4].push({
		name: "Finish every event in "+element+" in at least third place ASPECPTS",
		tags: [BeatSeries],
		antisynergy: [element],
		licence: "IB",
		infrequency: 3
	})
});
Events_Orig["ia"].forEach(element => {
	bingoList_us_v1[3].push({
		name: "Win a race in "+element+" ASPECPTS",
		tags: [BeatEvent],
		antisynergy: [element],
		licence: "IA",
		infrequency: 2
	})
	bingoList_us_v1[4].push({
		name: "Finish every event in "+element+" in at least third place ASPECPTS",
		tags: [BeatSeries],
		antisynergy: [element],
		licence: "IA",
		infrequency: 3
	})
});
Object.entries(Events_Orig["mission_ib"]).forEach(([key, value]) => {
	if (value > 5)
	{
		bingoList_us_v1[3].push({
			name: "Win "+Math.round(value/2)+" different "+key+" missions",
			tags: [Missions],
			licence: "IB"
		})
	}
	bingoList_us_v1[4].push({
		name: "Win all "+value+" different "+key+" missions",
		tags: [Missions],
		licence: "IB"
	})
});
Object.entries(Events_Orig["mission_ia"]).forEach(([key, value]) => {
	if (value > 5)
	{
		bingoList_us_v1[4].push({
			name: "Win "+Math.round(value/2)+" different "+key+" missions",
			tags: [Missions],
			licence: "IA"
		})
		bingoList_us_v1[5].push({
			name: "Win all "+value+" different "+key+" missions",
			tags: [Missions],
			licence: "IA"
		})
	}
	else
	{
		bingoList_us_v1[4].push({
			name: "Win all "+value+" different "+key+" missions",
			tags: [Missions],
			licence: "IB"
		})
	}
});
Events_Orig["extreme"].forEach(element => {
	bingoList_us_v1[4].push({
		name: "Win a race in "+element+" ASPECPTS",
		tags: [BeatEvent],
		antisynergy: [element],
		licence: "IA",
		infrequency: 2
	})
	bingoList_us_v1[5].push({
		name: "Finish every event in "+element+" in at least third place ASPECPTS",
		tags: [BeatSeries],
		antisynergy: [element],
		licence: "IA",
		infrequency: 3
	})
});
Events_Orig["s"].forEach(element => {
	bingoList_us_v1[5].push({
		name: "Win a race in "+element+" ASPECPTS",
		tags: [BeatEvent],
		antisynergy: [element],
		licence: "S",
		infrequency: 2
	})
});

Manufacturers_US.forEach(element => {
	var value = element.minprice / (Math.floor(element.numcars/5)+1);
	if (value < 10000)
	{
		bingoList_us_v1[0].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	} else if (value < 50000)
	{
		bingoList_us_v1[1].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	} else if (value < 200000)
	{
		bingoList_us_v1[2].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	} else if (value < 500000)
	{
		bingoList_us_v1[3].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	} else
	{
		bingoList_us_v1[4].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	}
})