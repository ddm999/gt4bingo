// This is part of a version currently in development and may be changed at any time.

// Tags
var Manufacturer = {name: "Manufacturer", max: [10,10,8,5,3,2], line: true},
	SpecificCar =  {name: "SpecificCar", max: [5,5,5,5,5,5], line: false},
	BeatEvent =    {name: "BeatEvent", max: [15,15,15,15,15,15], line: true},
	EventHall =    {name: "EventHall", max: [5,5,5,5,5,5], line: false},
	RallyEvent =   {name: "RallyEvent", max: [5,5,5,5,5,5], line: false},
	BeatSeries =   {name: "BeatSeries", max: [10,10,10,10,10,10], line: true},
	FamilyCup =    {name: "FamilyCup", max: [5,5,5,5,3,2], line: false},
	Missions =     {name: "Mission", max: [5,5,5,5,5,5], line: false},
	Licence =      {name: "Licence", max: [5,5,5,5,5,5], line: true},
	Never =        {name: "Never", max: [2,2,3,3,2,2], line: false},
	OwnCars =      {name: "OwnCars", max: [2,2,2,2,2,2], line: false},
	Finish =       {name: "Finish", max: [3,3,3,3,3,3], line: false},
	Photo =        {name: "Photo", max: [2,2,2,2,2,2], line: false},
	EasyTask =     {name: "EasyTask", max: [5,5,5,5,5,5], line: false};

var bingoList_us_v1 = [

// Very Short (0)
[
	{name: "Gold a Coffee Break", antisynergy:["CoffeeGold"], tags:[Licence,EasyTask]},
	{name: "Gold 5 B License tests", antisynergy:["BGold"], tags:[Licence]},
	{name: "Own a total of 10 unique cars", antisynergy:["CarOwnCount"], tags:[OwnCars], tooltiptext:"The same car in different colours does not count, including special prize-only colours. Different trims of the same car are counted separately."},
	{name: "Lap all opponent cars in a race"},
],

// Short (1)
[
	{name: "Win 5 different Special Conditions event races", antisynergy:["RallyCount"], tags:[RallyEvent,EventHall], licence: "A"},
	{name: "Gold an A License test", antisynergy:["AGold"], tags:[Licence,EasyTask], licence: "B", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 A License tests", antisynergy:["AGold"], tags:[Licence], licence: "B"},
	{name: "Gold 10 B License tests", antisynergy:["BGold"], tags:[Licence], catalyst:["ManyLicenceTest"]},
	{name: "Own a total of 25 unique cars", antisynergy:["CarOwnCount"], tags:[OwnCars], tooltiptext:"The same car in different colours does not count, including special prize-only colours. Different trims of the same car are counted separately."},
	{name: "Own cars from 10 different manufacturers", antisynergy:["ManuOwnCount"], tags:[OwnCars]},

	{name: "Never drive a prize car", tags:[Never,EasyTask]},
	{name: "Never drive a garage car without first completing a Power & Speed 400m Run in it", tags:[Never,EasyTask], tooltiptext: "You don't need to redo the run after applying tuning parts. You only need to do it once per unique car: you don't have to do the run in a duplicate car."},
	{name: "Never purchase a car from any used car dealership", catalyst:["UsedPurchase"], tags:[Never,EasyTask], tooltiptext: "The Historic Showroom, Used Car Showroom I and Used Car Showroom II are the 3 used car dealerships."},
],

// Medium (2)
[
	{name: "Win 10 different Special Conditions event races", antisynergy:["RallyCount"], tags:[RallyEvent,EventHall], licence: "A"},
	{name: "Gold an IB License test", antisynergy:["IBGold"], tags:[Licence,EasyTask], licence: "A", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 IB License tests", antisynergy:["IBGold"], tags:[Licence], licence: "A"},
	{name: "Gold 10 A License tests", antisynergy:["AGold"], tags:[Licence], licence: "B", catalyst:["ManyLicenceTest"]},
	{name: "Own a total of 40 unique cars", antisynergy:["CarOwnCount"], tags:[OwnCars], tooltiptext:"The same car in different colours does not count, including special prize-only colours. Different trims of the same car are counted separately."},
	{name: "Own cars from 20 different manufacturers", antisynergy:["ManuOwnCount"], tags:[OwnCars]},
	{name: "Win 10 different races in the Beginner Event Hall", antisynergy:["BeginnerHall"], tags:[EventHall]},
	{name: "Win 10 different races in the Professional Event Hall", antisynergy:["ProfessionalHall"], tags:[EventHall], licence: "B"},
	{name: "Win 10 different races in the American Event Hall", antisynergy:["AmericanHall"], tags:[EventHall], licence: "A"},
	{name: "Win 10 different races in the European Event Hall", antisynergy:["EuropeanHall"], tags:[EventHall], licence: "A"},
	{name: "Win 10 different races in the Japanese Event Hall", antisynergy:["JapaneseHall"], tags:[EventHall], licence: "B"},

	{name: "Never drive a garage car with Sports tyres equipped", tags:[Never,EasyTask]},
	{name: "Never purchase a car from the Historic Showroom", reactant:["UsedPurchase"], tags:[Never,EasyTask], infrequency: 2},
	{name: "Never purchase a car from the Used Car Showroom I", reactant:["UsedPurchase"], tags:[Never,EasyTask], infrequency: 2},
	{name: "Never purchase a car from the Used Car Showroom II", reactant:["UsedPurchase"], tags:[Never,EasyTask], infrequency: 2},
	{name: "Never drive a garage car without first applying a wing from GT Auto to it", antisynergy:["GTAuto"], tags:[Never,EasyTask]},
	{name: "Never perform an oil change in GT Auto", antisynergy:["GTAuto"], tags:[Never,EasyTask]},
],

// Long (3)
[
	{name: "Gold an IA License test", antisynergy:["IAGold"], tags:[Licence,EasyTask], licence: "IB", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 IA License tests", antisynergy:["IAGold"], tags:[Licence], licence: "IB"},
	{name: "Win 5 different Medium difficulty Special Conditions event races", antisynergy:["RallyCount"], tags:[RallyEvent,EventHall], licence: "IB"},
	{name: "Gold 10 IB License tests", antisynergy:["IBGold"], tags:[Licence], licence: "A", catalyst:["ManyLicenceTest"]},
	{name: "Own a total of 60 unique cars", antisynergy:["CarOwnCount"], tags:[OwnCars], tooltiptext:"The same car in different colours does not count, including special prize-only colours. Different trims of the same car are counted separately."},
	{name: "Own cars from 30 different manufacturers", antisynergy:["ManuOwnCount"], tags:[OwnCars]},
	{name: "Win 25 different races in the Beginner Event Hall", antisynergy:["BeginnerHall"], tags:[EventHall]},
	{name: "Win 20 different races in the Professional Event Hall", antisynergy:["ProfessionalHall"], tags:[EventHall], licence: "A"},
	{name: "Win all 14 different races in the American Event Hall", antisynergy:["AmericanHall"], tags:[EventHall], licence: "IB"},
	{name: "Win 20 different races in the European Event Hall", antisynergy:["EuropeanHall"], tags:[EventHall], licence: "IB"},
	{name: "Win 20 different races in the Japanese Event Hall", antisynergy:["JapaneseHall"], tags:[EventHall], licence: "A"},
],

// Very Long (4)
[
	{name: "Gold an S License test", antisynergy:["SGold"], tags:[Licence,EasyTask], licence: "IA", reactant:["ManyLicenceTest"]},
	{name: "Gold 5 S License tests", antisynergy:["SGold"], tags:[Licence], licence: "IA"},
	{name: "Gold 10 IA License tests", antisynergy:["IAGold"], tags:[Licence], licence: "IB", catalyst:["ManyLicenceTest"]},
	{name: "Win 5 different Hard difficulty Special Conditions event races", antisynergy:["RallyCount"], tags:[RallyEvent], licence: "IA"},
	{name: "Win 30 different races in the European Event Hall", antisynergy:["EuropeanHall"], tags:[EventHall], licence: "IB"},
	{name: "Own a total of 100 unique cars", antisynergy:["CarOwnCount"], tags:[OwnCars], tooltiptext:"The same car in different colours does not count, including special prize-only colours. Different trims of the same car are counted separately."},
],

// Extremely Long (5)
[
	{name: "Gold 10 S License tests", antisynergy:["SGold"], tags:[Licence], licence: "IA", catalyst:["ManyLicenceTest"]},
	{name: "Win any endurance race", tags:[BeatEvent]},
	{name: "Win all 35 different races in the Japanese Event Hall", antisynergy:["JapaneseHall"], tags:[EventHall], licence: "IA"},
	{name: "Win 40 different races in the European Event Hall", antisynergy:["EuropeanHall"], tags:[EventHall], licence: "IA"},
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
		tags: [RallyEvent],
		antisynergy: [element],
		licence: "A",
		infrequency: 1
	})
	bingoList_us_v1[4].push({
		name: "Win every "+element+" special condition event race ASPECPTS",
		tags: [RallyEvent],
		antisynergy: [element],
		licence: "IA",
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
	if (value < 25000)
	{
		bingoList_us_v1[0].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	}
	else if (value < 75000)
	{
		bingoList_us_v1[1].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	}
	else if (value < 200000)
	{
		bingoList_us_v1[2].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	}
	else if (value < 500000)
	{
		bingoList_us_v1[3].push({
			name: "Win a race in a "+element.name+" car ASPECPTS",
			tags: [Manufacturer],
			antisynergy: [element.name],
			licence: "-",
			infrequency: 2
		})
	}
	else
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

Cars_US.forEach(element => {
	if (element.price < 25000)
	{
		bingoList_us_v1[0].push({
			name: "Win a race in a "+element.name+" ASPECPTS",
			tags: [SpecificCar],
			antisynergy: [element.manufacturer],
			tooltiptext: "Dealership purchase price: "+element.price,
			licence: "-",
			infrequency: 3
		})
	}
	else if (element.price < 75000)
	{
		bingoList_us_v1[1].push({
			name: "Win a race in a "+element.name+" ASPECPTS",
			tags: [SpecificCar],
			antisynergy: [element.manufacturer],
			tooltiptext: "Dealership purchase price: "+element.price+" Cr",
			licence: "-",
			infrequency: 3
		})
	}
	else if (element.price < 200000)
	{
		bingoList_us_v1[2].push({
			name: "Win a race in a "+element.name+" ASPECPTS",
			tags: [SpecificCar],
			antisynergy: [element.manufacturer],
			tooltiptext: "Dealership purchase price: "+element.price+" Cr",
			licence: "-",
			infrequency: 3
		})
	}
	else if (element.price < 500000)
	{
		bingoList_us_v1[3].push({
			name: "Win a race in a "+element.name+" ASPECPTS",
			tags: [SpecificCar],
			antisynergy: [element.manufacturer],
			tooltiptext: "Dealership purchase price: "+element.price+" Cr",
			licence: "-",
			infrequency: 3
		})
	}
	else
	{
		bingoList_us_v1[4].push({
			name: "Win a race in a "+element.name+" ASPECPTS",
			tags: [SpecificCar],
			antisynergy: [element.manufacturer],
			tooltiptext: "Dealership purchase price: "+element.price+" Cr",
			licence: "-",
			infrequency: 3
		})
	}
})

Courses_Orig.forEach(element => {
	if (element.maxcars < 6)
		return;

	var list = 0;
	if (element.weeks > 30)
		list = 5;
	else if (element.weeks > 20)
		list = 4;
	else if (element.weeks > 10)
		list = 3;
	else if (element.weeks > 5)
		list = 2;
	else if (element.weeks > 0)
		list = 1;

	var tooltip = null;
	if (element.weeks > 0)
		tooltip = element.name+" unlocks for Family Cup use after "+element.weeks+" weeks of gameplay.";

	if (element.reverse == true)
	{
		bingoList_us_v1[list].push({
			name: "Win a Family Cup at "+element.name+" Forward on difficulty 0 or above ASPECPTS",
			tags: [FamilyCup],
			antisynergy: [element.name],
			tooltiptext: tooltip,
			licence: "-",
			infrequency: 2*(list+1)
		})
		bingoList_us_v1[list].push({
			name: "Win a Family Cup at "+element.name+" Reverse on difficulty 0 or above ASPECPTS",
			tags: [FamilyCup],
			antisynergy: [element.name],
			tooltiptext: tooltip,
			licence: "-",
			infrequency: 2*(list+1)
		})
		if (list < 5)
		{
			bingoList_us_v1[list+1].push({
				name: "Win a Family Cup at "+element.name+" Forward on difficulty 5 or above ASPECPTS",
				tags: [FamilyCup,EasyTask],
				antisynergy: [element.name],
				tooltiptext: tooltip,
				licence: "-",
				infrequency: (2*(list+1))-1
			})
			bingoList_us_v1[list+1].push({
				name: "Win a Family Cup at "+element.name+" Reverse on difficulty 5 or above ASPECPTS",
				tags: [FamilyCup,EasyTask],
				antisynergy: [element.name],
				tooltiptext: tooltip,
				licence: "-",
				infrequency: (2*(list+1))-1
			})
		}
	}
	else
	{
		bingoList_us_v1[list].push({
			name: "Win a Family Cup at "+element.name+" on difficulty 0 or above ASPECPTS",
			tags: [FamilyCup],
			antisynergy: [element.name],
			tooltiptext: tooltip,
			licence: "-",
			infrequency: list+1
		})
		if (list < 5)
		{
			bingoList_us_v1[list+1].push({
				name: "Win a Family Cup at "+element.name+" on difficulty 5 or above ASPECPTS",
				tags: [FamilyCup,EasyTask],
				antisynergy: [element.name],
				tooltiptext: tooltip,
				licence: "-",
				infrequency: 2*(list+1)
			})
		}
	}
})

var carphoto_type = [
	"lowest power",
	"highest power",
	"lowest weight",
	"highest weight",
	"first acquired",
	"most recently acquired",
	"oldest (by game displayed year)",
	"newest (by game displayed year)"	
];

PhotoLocations_Orig.forEach(element => {
	carphoto_type.forEach(phototype => {
		bingoList_us_v1[2].push({
			name: "As your final goal: Take a photo of your "+phototype+" car at "+element+" (Photo Travel) and save it.",
			tags: [Finish,Photo,EasyTask],
			tooltiptext: "This must be your final action to complete a line and win. PS: It's not required, but if you want your photo to render correctly on PCSX2, set your Internal Resolution to 1x (Native) before taking the photo.",
			licence: "-",
			infrequency: 3*carphoto_type.length
		})
	})
})