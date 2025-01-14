// Specific car listing
// Only rare or special models that are purchasable from dealerships are allowed here
// These models cannot be the cheapest model if the manufacturer is in the Manufacturers_US list
var Cars_US = [
    {name: "Chrysler Prowler '02", price: 47430, manufacturer: "Chrysler"},
    {name: "Dodge Viper GTS '99", price: 78000, manufacturer: "Dodge"},
    {name: "Ford GT '05", price: 149880, manufacturer: "Ford (US)"},
    {name: "Panoz Esperante GTR-1 Race Car '98", price: 4500000, manufacturer: "Panoz"},
    {name: "Callaway C12 '03", price: 175880, manufacturer: "Callaway"},
    {name: "Eagle Talon Esi '97", price: 15740, manufacturer: "Eagle"},
    {name: "Jaguar XJ220 '92", price: 749140, manufacturer: "Jaguar"},
    {name: "Lotus Esprit Sport 350 '00", price: 126240, manufacturer: "Lotus"},
    {name: "Lotus Motor Sport Elise '99", price: 97180, manufacturer: "Lotus"},
    {name: "TVR Cerbera Speed 12 '00", price: 259970, manufacturer: "TVR"},
    {name: "AC Cars 427 S/C '66", price: 423200, manufacturer: "AC Cars"},
    {name: "Spyker C8 Laviolette", price: 254660, manufacturer: "Spyker"},
    {name: "Gillet Vertigo Race Car", price: 1000000, manufacturer: "Gillet"},
    {name: "Seat Ibiza Cupra '04", price: 24980, manufacturer: "Seat"},
    {name: "Hommell Berlinette R/S Coupe '99", price: 47360, manufacturer: "Hommell"},
    {name: "Audi Abt Audi TT-R Touring Car '02", price: 550000, manufacturer: "Audi"},
    {name: "Audi quattro '82", price: 90360, manufacturer: "Audi"},
    {name: "Mercedes-Benz SLR McLaren '03", price: 610000, manufacturer: "Mercedes-Benz"},
    {name: "Volkswagen New Beetle RSi '00", price: 94050, manufacturer: "Volkswagen"},
    {name: "BMW 320i Touring Car '03", price: 450000, manufacturer: "BMW"},
    {name: "BMW 120d '04", price: 33020, manufacturer: "BMW"},
    {name: "BMW Z4 '03", price: 75610, manufacturer: "BMW"},
    {name: "Opel Vectra 3.2 V6 '03", price: 36530, manufacturer: "Opel"},
    {name: "RUF CTR2 '96", price: 297110, manufacturer: "RUF"},
    {name: "RUF RGT '00", price: 143250, manufacturer: "RUF"},
    {name: "Alfa Romeo Spider 3.0i V6 24V '01", price: 51190, manufacturer: "Alfa Romeo"},
    {name: "Fiat Punto HGT Abarth '00", price: 30030, manufacturer: "Fiat"},
    {name: "Proto Motors SPIRRA 4.6 V8 '04", price: 80000, manufacturer: "Proto Motors"},
    {name: "Honda ELEMENT '03", price: 25900, manufacturer: "Honda"},
    {name: "Honda NSX '01", price: 92070, manufacturer: "Honda"},
    {name: "Honda INTEGRA TYPE R Touring Car '02", price: 450000, manufacturer: "Honda"},
    {name: "Honda Gathers Drider CIVIC Race Car '98", price: 450000, manufacturer: "Honda"},
    {name: "MUGEN S2000 '00", price: 75000, manufacturer: "MUGEN"},
    {name: "Mitsubishi Lancer Evolution Super Rally Car '03", price: 1250000, manufacturer: "Mitsubishi"},
    {name: "Mitsubishi Lancer 1600 GSR '73", price: 14200, manufacturer: "Mitsubishi"},
    {name: "Mitsubishi GALANT GTO MR '70", price: 21800, manufacturer: "Mitsubishi"},
    {name: "Nissan C-WEST RAZO SILVIA (JGTC) '01", price: 500000, manufacturer: "Nissan"},
    {name: "Nissan FALKEN GT-R Race Car '04", price: 550000, manufacturer: "Nissan"},
    {name: "Nissan SKYLINE Sport Coupe (BLRA-3) '62", price: 320000, manufacturer: "Nissan"},
    {name: "Nissan Fairlady Z 280Z-L 2seater (S130) '78", price: 38000, manufacturer: "Nissan"},
    {name: "Nissan R390 GT1 Road Car '98", price: 1000000, manufacturer: "Nissan"},
    {name: "NISMO Fairlady Z Z-tune (Z33) '03", price: 150000, manufacturer: "NISMO"},
    {name: "NISMO Skyline GT-R R-tune (R34) '99", price: 125000, manufacturer: "NISMO"},
    {name: "Subaru LEGACY Touring Wagon 2.0GT specB '03", price: 30300, manufacturer: "Subaru"},
    {name: "Subaru CUSCO SUBARU ADVAN IMPREZA (JGTC) '03", price: 500000, manufacturer: "Subaru"},
    {name: "Suzuki ALTO LAPIN Turbo '02", price: 12400, manufacturer: "Suzuki"},
    {name: "Toyota PRIUS G Touring Selection (J) '03", price: 25700, manufacturer: "Toyota"},
    {name: "Toyota VOLTZ S '02", price: 17880, manufacturer: "Toyota"},
    {name: "Toyota SUPERAUTOBACS APEX MR-S (JGTC) '00", price: 500000, manufacturer: "Toyota"},
    {name: "Toyota SPORTS 800 '65", price: 32000, manufacturer: "Toyota"},
    {name: "Toyota 2000GT '67", price: 160000, manufacturer: "Toyota"},
    {name: "Toyota Modellista CELICA TRD Sports M (ZZT231) '00", price: 25500, manufacturer: "TRD"},
    {name: "Acura NSX '04", price: 94440, manufacturer: "Acura"},
    {name: "Tommy kaira ZZII '00", price: 500000, manufacturer: "Tommy kaira"},
    {name: "ASL ARTA Garaiya (JGTC) '03", price: 500000, manufacturer: "ASL"},
    {name: "2000 Ford Falcon XR8", price: 450000, manufacturer: "Ford (AU)"},
    {name: "Holden Monaro CV8 '04", price: 47960, manufacturer: "Holden"},
    {name: "HPA Motorsports Stage II R32 '04", price: 31870, manufacturer: "HPA"},
    {name: "HKS GENKI HYPER SILVIA RS2 (D1GP) '04", price: 200000, manufacturer: "HKS"},
    {name: "RE Amemiya AMEMIYA ASPARADRINK RX-7 (JGTC) '04", price: 500000, manufacturer: "RE Amemiya"},
    {name: "AMUSE CarbonR (R34) '04", price: 250000, manufacturer: "AMUSE"},
    {name: "Opera Performance S2000 '04", price: 150000, manufacturer: "Opera Performance"},
    {name: "Spoon S2000 '00", price: 85000, manufacturer: "Spoon"},
    {name: "BLITZ ER34 D1 spec 2004 (D1GP) '04", price: 200000, manufacturer: "BLITZ"},
    {name: "Tom's X540 CHASER '00", price: 50000, manufacturer: "Tom's"},
    {name: "TRIAL CELICA SS-II (ZZT231) '03", price: 100000, manufacturer: "TRIAL"},
    {name: "Mine's Skyline GT-R N1 V-spec (R34) '00", price: 200000, manufacturer: "Mine's"},
]