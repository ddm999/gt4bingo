// Manufacturer listing
// numcars is a very rough value, just needs to be in the ballpark
var Manufacturers_US = [
	//{name: "Cadillac", minprice: 0, numcars: 1},
	{name: "Chevrolet", minprice: 22150, numcars: 13},
	{name: "Chrysler", minprice: 16390, numcars: 4},
	{name: "Dodge", minprice: 20640, numcars: 8},
	{name: "Ford (US)", minprice: 12920, numcars: 11},
	//{name: "Panoz", minprice: 4500000, numcars: 1},
	{name: "Plymouth", minprice: 58360, numcars: 5},
	{name: "Pontiac", minprice: 21120, numcars: 2},
	{name: "Saleen", minprice: 419130, numcars: 3},
	//{name: "Shelby", minprice: 184630, numcars: 1},
	{name: "Buick", minprice: 31080, numcars: 2},
	//{name: "Callaway", minprice: 175880, numcars: 1},
	//{name: "DMC", minprice: 0, numcars: 1},
	//{name: "Eagle", minprice: 15740, numcars: 1},
	//{name: "Jay Leno", minprice: 0, numcars: 1},
	//{name: "Mercury", minprice: 0, numcars: 1},
	{name: "Infiniti", minprice: 30720, numcars: 3},
	{name: "Lexus", minprice: 20700, numcars: 6},
	{name: "Chaparral", minprice: 1100000, numcars: 2},
	{name: "Scion", minprice: 15780, numcars: 2},
	//{name: "Nike", minprice: 0, numcars: 1},
	{name: "Aston Martin", minprice: 164470, numcars: 3},
	//{name: "Ginetta", minprice: 0, numcars: 1},
	//{name: "Bentley", minprice: 0, numcars: 1},
	{name: "Jaguar", minprice: 92130, numcars: 5},
	{name: "Lotus", minprice: 41060, numcars: 9},
	{name: "MG", minprice: 38860, numcars: 2},
	{name: "MINI", minprice: 19620, numcars: 3},
	{name: "TVR", minprice: 70940, numcars: 4},
	//{name: "Jensen Healey", minprice: 0, numcars: 1},
	//{name: "Lister", minprice: 0, numcars: 1},
	//{name: "Marcos", minprice: 0, numcars: 1},
	//{name: "Caterham", minprice: 60000, numcars: 1},
	//{name: "Land Rover", minprice: 0, numcars: 1},
	//{name: "AC Cars", minprice: 423200, numcars: 1},
	//{name: "Triumph", minprice: 17200, numcars: 1},
	//{name: "Spyker", minprice: 254660, numcars: 1},
	//{name: "Gillet", minprice: 1000000, numcars: 1},
	{name: "Volvo", minprice: 35580, numcars: 2},
	//{name: "SEAT", minprice: 24980, numcars: 1},
	{name: "Citroen", minprice: 21850, numcars: 6},
	{name: "Peugeot", minprice: 12630, numcars: 10},
	//{name: "Alpine", minprice: 0, numcars: 2},
	{name: "Renault", minprice: 26390, numcars: 7},
	{name: "Pescarolo Sport", minprice: 4500000, numcars: 1},
	//{name: "Hommell", minprice: 47360, numcars: 1},
	{name: "Audi", minprice: 22400, numcars: 17},
	{name: "Mercedes-Benz", minprice: 67910, numcars: 16},
	{name: "Volkswagen", minprice: 15490, numcars: 15},
	{name: "BMW", minprice: 31940, numcars: 13},
	{name: "Opel", minprice: 17960, numcars: 6},
	{name: "RUF", minprice: 77730, numcars: 5},
	{name: "Alfa Romeo", minprice: 30590, numcars: 9},
	//{name: "Autobianchi", minprice: 0, numcars: 1},
	{name: "Fiat", minprice: 24060, numcars: 4},
	{name: "Lancia", minprice: 133970, numcars: 5},
	{name: "Pagani", minprice: 388720, numcars: 3},
	//{name: "Cizeta", minprice: 0, numcars: 1},
	{name: "Hyundai", minprice: 33020, numcars: 4},
	//{name: "Proto Motors", minprice: 80000, numcars: 1},
	{name: "Daihatsu", minprice: 14980, numcars: 4},
	{name: "Honda", minprice: 9570, numcars: 33},
	//{name: "MUGEN", minprice: 75000, numcars: 1},
	//{name: "Isuzu", minprice: 0, numcars: 2},
	{name: "Mazda", minprice: 14500, numcars: 16},
	{name: "Mitsubishi", minprice: 9220, numcars: 20},
	{name: "Nissan", minprice: 10950, numcars: 40},
	{name: "NISMO", minprice: 55000, numcars: 7},
	{name: "Subaru", minprice: 28500, numcars: 13},
	{name: "Suzuki", minprice: 12400, numcars: 6},
	{name: "Toyota", minprice: 14530, numcars: 29},
	//{name: "TRD", minprice: 25500, numcars: 1},
	{name: "Acura", minprice: 24740, numcars: 5},
	{name: "Tommy kaira", minprice: 59500, numcars: 2},
	{name: "ASL", minprice: 65000, numcars: 2},
	//{name: "DOME", minprice: 0, numcars: 1},
	//{name: "Ford (AU)", minprice: 450000, numcars: 1},
	{name: "Holden", minprice: 40430, numcars: 2},
	{name: "FPV", minprice: 46740, numcars: 2},
	//{name: "HPA Motorsports", minprice: 450000, numcars: 1},
	//{name: "HKS", minprice: 200000, numcars: 1},
	//{name: "RE Amemiya", minprice: 500000, numcars: 1},
	{name: "AMUSE", minprice: 50000, numcars: 4},
	{name: "Opera Performance", minprice: 70000, numcars: 2},
	{name: "Spoon", minprice: 50000, numcars: 5},
	//{name: "BLITZ", minprice: 200000, numcars: 1},
	//{name: "Tom's", minprice: 50000, numcars: 1},
	//{name: "TRIAL", minprice: 100000, numcars: 1},
	{name: "Mine's", minprice: 150000, numcars: 2},
]