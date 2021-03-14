// This file should not be edited anymore since a stable version refers to it (except
// maybe for purely visual things that don't change the goals, like typos).


var bingoList_v3 = [

// Very Easy (0)
[
	{name: "(32-64) Cobblestone"},
	{name: "(32-64) Dirt"},
	{name: "(32-64) Oak Wood Planks", antisynergy: "OakPlanks", infrequency: 25},
	{name: "(32-64) Spruce Wood Planks", antisynergy: "SprucePlanks", infrequency: 25},
	{name: "(32-64) Birch Wood Planks", antisynergy: "BirchPlanks", infrequency: 25},
	{name: "(32-64) Dark Oak Wood Planks", antisynergy: "DarkOakPlanks", infrequency: 25},
	{name: "(32-64) Acacia Wood Planks", antisynergy: "AcaciaPlanks", infrequency: 25},
	{name: "(5-15) Oak Logs", antisynergy: "OakLogs", infrequency: 25},
	{name: "(5-15) Spruce Logs", antisynergy: "SpruceLogs", infrequency: 25},
	{name: "(5-15) Birch Logs", antisynergy: "BirchLogs", infrequency: 25},
	{name: "(5-15) Dark Oak Logs", antisynergy: "DarkOakLogs", infrequency: 25},
	{name: "(5-15) Acacia Logs", antisynergy: "AcaciaLogs", infrequency: 25},
	{name: "(5-15) Redstone", antisynergy: "Redstone", infrequency: 2},
	{name: "Lava Bucket", reactant: "UseBuckets", infrequency: 4},
	{name: "Milk Bucket", reactant: "UseBuckets", infrequency: 4},
	{name: "Water Bucket", reactant: "UseBuckets", infrequency: 4},
	{name: "Bucket of Fish", reactant: "UseBuckets", infrequency: 4, tooltiptext: "Can be any of the types of Fish", tooltipimg: "Goal Tooltip Images/FishBucket.jpg"},
	{name: "(16-32) Andesite", infrequency: 3},
	{name: "(16-32) Granite", infrequency: 3},
	{name: "(16-32) Diorite", infrequency: 3},
	{name: "Iron Block", antisynergy: "IronBlocks", infrequency: 2},
	{name: "Gold Block", antisynergy: "GoldBlocks", infrequency: 2},
	{name: "(5-25) Poppies & (5-25) Dandelions"},
	{name: "Level (5-7)", antisynergy: "Level", infrequency: 2},
	{name: "(2-5) Note Blocks", antisynergy: "NoteBlocks", infrequency: 2},
	{name: "(32-64) Leaves"},
	{name: "Build a (2-4)x(2-4)x(2-4) leaf cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/LeafCube.jpg"},
	{name: "(2-4) Colours of Wool", antisynergy: "WoolColour", infrequency: 4},
	{name: "(8-16) Snowballs"},
	{name: "(2-4) Different Slabs", antisynergy: "Slabs", infrequency: 2},
	{name: "(2-4) Different Stairs", antisynergy: "Stairs", infrequency: 2},
	{name: "Diamond"},
	{name: "(5-15) Rotten Flesh", antisynergy: "RotFlesh", infrequency: 2},
	{name: "(10-32) Stone", tooltiptext: "NOT Cobblestone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: "Stone", infrequency: 2},
	{name: "(1-5) Bread", antisynergy: "Bread", infrequency: 2},
	{name: "Hay Bale", antisynergy: "HayBale", infrequency: 2},
	{name: "Flower Pot"},
	{name: "(2-10) Feathers", antisynergy: "Feathers", infrequency: 2},
	{name: "Sleep in a bed", reactant: "Sleep"},
	{name: "(5-15) Charcoal"},
	{name: "(5-15) Coal"},
	{name: "Fishing Rod"},
	{name: "(2-5) Apples"},
	{name: "(32-64) Sticks", antisynergy: "Sticks", infrequency: 2},
	{name: "(32-64) Kelp"},
	{name: "(5-10) Oak Wood", antisynergy: "OakWood", infrequency: 25},
	{name: "(5-10) Spruce Wood", antisynergy: "SpruceWood", infrequency: 25},
	{name: "(5-10) Birch Wood", antisynergy: "BirchWood", infrequency: 25},
	{name: "(5-10) Dark Oak Wood", antisyngitergy: "DarkOakWood", infrequency: 25},
	{name: "(5-10) Acacia Wood", antisynergy: "AcaciaWood", infrequency: 25},
	{name: "(5-10) Stripped Oak Wood", antisynergy: "StrippedOakWood", reactant: "AxeUse", infrequency: 25},
	{name: "(5-10) Stripped Spruce Wood", antisynergy: "StrippedSpruceWood", reactant: "AxeUse", infrequency: 25},
	{name: "(5-10) Stripped Birch Wood", antisynergy: "StrippedBirchWood", reactant: "AxeUse", infrequency: 25},
	{name: "(5-10) Stripped Dark Oak Wood", antisynergy: "StrippedDarkOakWood", reactant: "AxeUse", infrequency: 25},
	{name: "(5-10) Stripped Acacia Wood", antisynergy: "StrippedAcaciaWood", reactant: "AxeUse", infrequency: 25},
	{name: "(5-15) Stripped Oak Logs", antisynergy: "StrippedOakLog", reactant: "AxeUse", infrequency: 25},
	{name: "(5-15) Stripped Spruce Logs", antisynergy: "StrippedSpruceLog", reactant: "AxeUse", infrequency: 25},
	{name: "(5-15) Stripped Birch Logs", antisynergy: "StrippedBirchLog", reactant: "AxeUse", infrequency: 25},
	{name: "(5-15) Stripped Dark Oak Logs", antisynergy: "StrippedDarkOakLog", reactant: "AxeUse", infrequency: 25},
	{name: "(5-15) Stripped Acacia Logs", antisynergy: "StrippedAcaciaLog", reactant: "AxeUse", infrequency: 25},
	{name: "(2-10) Raw Cod", antisynergy: "RawCod", infrequency: 2},
	{name: "(2-5) Raw Salmon", antisynergy: "RawSalmon", infrequency: 2},
	{name: "(2-3) Different Edible Items", tooltiptext: "Raw and cooked variants count as one (e.g. Raw Beef and Steak)", tooltipimg: "Goal Tooltip Images/RawAndCooked.jpg", antisynergy: "EdibleItems", infrequency: 2},

],

// Easy (1)
[
	{name: "(2-4) Different Fish"},
	{name: "Grow a Tree in the Nether"},
	{name: "(4-7) Colours of Terracotta", antisynergy: "TerracottaColour", infrequency: 4},
	{name: "(1-5) Mushroom Stew"},
	{name: "Shoot a Button with an Arrow"},
	{name: "Book and Quill"},
	{name: "(16-64) Flint"},
	{name: "Cake"},
	{name: "Pumpkin Pie"},
	{name: "Fish a Treasure and a Junk item", reactant: "Fishing"},
	{name: "(16-64) Coarse Dirt"},
	{name: "(2-3) Clocks"},
	{name: "(2-4) Iron Blocks", antisynergy: "IronBlocks", infrequency: 2},
	{name: "(2-3) Gold Blocks", antisynergy: "GoldBlocks", infrequency: 2},
	{name: "Golden Apple"},
	{name: "(2-4) Bookshelves"},
	{name: "Never wear Chestplates", catalyst: "WearArmour"},
	{name: "Never use a Shield"},
	{name: "Jukebox"},
	{name: "Build a glass cube and fill the inner with lava"},
	{name: "(16-32) Moss Stone"},
	{name: "(5-15) Cacti"},
	{name: "(1-3) TNT"},
	{name: "Level (8-15)", antisynergy: "Level", infrequency: 2},
	{name: "Create a Snow Golem"},
	{name: "(5-15) Note Blocks", antisynergy: "NoteBlocks", infrequency: 2},
	{name: "(5-15) Ink Sacks", antisynergy: "InkSacks", infrequency: 2},
	{name: "(6-10) Bread", antisynergy: "Bread", infrequency: 2},
	{name: "(2-3) Hay Bales", antisynergy: "HayBale", infrequency: 2},
	{name: "(5-8) Colours of Wool", antisynergy: "WoolColour", infrequency: 4},
	{name: "(5-10) Pistons"},
	{name: "Full Iron Armour", infrequency: 3},
	{name: "Full Leather Armour", infrequency: 3},
	{name: "Full Gold Armour", infrequency: 3},
	{name: "Cauldron with Water"},
	{name: "Complete a Map", antisynergy: "CompleteMap"},
	{name: "(16-64) Soul Sand"},
	{name: "(5-10) Pumpkins"},
	{name: "(2-5) Carved Pumpkins"},
	{name: "(10-30) Vines"},
	{name: "(5-7) Different Slabs", antisynergy: "Slabs", infrequency: 2},
	{name: "Every type of Sword"},
	{name: "Every type of Pickaxe"},
	{name: "(16-64) Brick Blocks"},
	{name: "(16-32) Nether Brick Blocks"},
	{name: "(16-64) Arrows"},
	{name: "(Try to) Sleep in the Nether"},
	{name: "Fermented Spider Eye"},
	{name: "(5-7) Different Stairs", antisynergy: "Stairs", infrequency: 2},
	{name: "(2-3) Ender Pearls", antisynergy: "EnderPearl", infrequency: 2},
	{name: "16 Chicken Eggs"},
	{name: "Hang up 3 Different 4x4 Paintings"},
	{name: "(5-10) Bone Blocks"},
	{name: "2 Creepers in the same Boat", tooltiptext: "The 2 Creepers must be in the same boat at the same time", tooltipimg: "Goal Tooltip Images/2creepers1boat.jpg"},
	{name: "Trade with a Villager"},
	{name: "(2-3) Different Pattern / Colour Shields"},
	{name: "Dead Bush"},
	{name: "(15-32) Grass", tooltiptext: "The plant, NOT the block", tooltipimg: "Goal Tooltip Images/TallGrass.jpg"},
	{name: "Cyan Dye", infrequency: 10},
	{name: "Light Gray Dye and Light Blue Dye", infrequency: 10},
	{name: "Magenta Dye", infrequency: 10},
	{name: "Rose Red", infrequency: 10},
	{name: "Orange Dye", infrequency: 10},
	{name: "Dandelion Yellow", infrequency: 10},
	{name: "Cactus Green", infrequency: 10},
	{name: "Pink Dye", infrequency: 10},
	{name: "Purple Dye", infrequency: 10},
	{name: "Lime Dye", infrequency: 10},
	{name: "Never Sleep", catalyst: "Sleep"},
	{name: "Grow a Huge Mushroom"},
	{name: "Water Bucket, Lava Bucket and Milk Bucket", antisynergy: "BucketTypes", reactant: "UseBuckets"},
	{name: "(3-6) Different Flowers", antisynergy: "Flowers", infrequency: 3},
	{name: "(3-6) Colours of Concrete", antisynergy: "ConcreteColour", infrequency: 4},
	{name: "(3-6) Colours of Glazed Terracotta", antisynergy: "GlazedColour", infrequency: 4},
	{name: "(3-6) Colours of Beds", antisynergy: "BedColour", infrequency: 4},
	{name: "Finish where you spawned using a Compass", tooltiptext: "Be stood close enough to spin your compass within a couple blocks at the end of the game", tooltipimg: "Goal Tooltip Images/Compass.jpg", antisynergy: "Finish"},
	{name: "Build a Redstone AND Gate"},
	{name: "(32-64) Stone", tooltiptext: "NOT Cobblestone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: "Stone", infrequency: 2},
	{name: "Kill (4-8) Animals with only fire"},
	{name: "Kill a Creeper with only fire"},
	{name: "(32-64) Iron Nuggets"},
	{name: "(32-64) Gold Nuggets"},
	{name: "(16-32) Rotten Flesh", antisynergy: "RotFlesh", infrequency: 2},
	{name: "(16-64) Redstone", antisynergy: "Redstone", infrequency: 2},
	{name: "Golden Carrot"},
	{name: "Rotten Flesh, Spider Eye, Bone, Gunpowder and Ender Pearl"},
	{name: "(32-64) Feathers", antisynergy: "Feathers", infrequency: 2},
	{name: "(2-10) Lily Pads"},
	{name: "(65-128) Sticks", antisynergy: "Sticks", infrequency: 2},
	{name: "Wear 4 different colour Leather Armour at the same time", reactant: "WearArmour"},
	{name: "(65-128) Oak Wood Planks", antisynergy: "OakPlanks", infrequency: 25},
	{name: "(65-128) Spruce Wood Planks", antisynergy: "SprucePlanks", infrequency: 25},
	{name: "(65-128) Birch Wood Planks", antisynergy: "BirchPlanks", infrequency: 25},
	{name: "(65-128) Dark Oak Wood Planks", antisynergy: "DarkOakPlanks", infrequency: 25},
	{name: "(65-128) Acacia Wood Planks", antisynergy: "AcaciaPlanks", infrequency: 25},
	{name: "(16-32) Oak Logs", antisynergy: "OakLogs", infrequency: 25},
	{name: "(16-32) Spruce Logs", antisynergy: "SpruceLogs", infrequency: 25},
	{name: "(16-32) Birch Logs", antisynergy: "BirchLogs", infrequency: 25},
	{name: "(16-32) Dark Oak Logs", antisynergy: "DarkOakLogs", infrequency: 25},
	{name: "(16-32) Acacia Logs", antisynergy: "AcaciaLogs", infrequency: 25},
	{name: "(11-20) Oak Wood", antisynergy: "OakWood", infrequency: 25},
	{name: "(11-20) Spruce Wood", antisynergy: "SpruceWood", infrequency: 25},
	{name: "(11-20) Birch Wood", antisynergy: "BirchWood", infrequency: 25},
	{name: "(11-20) Dark Oak Wood", antisynergy: "DarkOakWood", infrequency: 25},
	{name: "(11-20) Acacia Wood", antisynergy: "AcaciaWood", infrequency: 25},
	{name: "(11-20) Stripped Oak Wood", antisynergy: "StrippedOakWood", reactant: "AxeUse", infrequency: 25},
	{name: "(11-20) Stripped Spruce Wood", antisynergy: "StrippedSpruceWood", reactant: "AxeUse", infrequency: 25},
	{name: "(11-20) Stripped Birch Wood", antisynergy: "StrippedBirchWood", reactant: "AxeUse", infrequency: 25},
	{name: "(11-20) Stripped Dark Oak Wood", antisynergy: "StrippedDarkOakWood", reactant: "AxeUse", infrequency: 25},
	{name: "(11-20) Stripped Acacia Wood", antisynergy: "StrippedAcaciaWood", reactant: "AxeUse", infrequency: 25},
	{name: "(16-32) Stripped Oak Logs", antisynergy: "StrippedOakLog", reactant: "AxeUse", infrequency: 25},
	{name: "(16-32) Stripped Spruce Logs", antisynergy: "StrippedSpruceLog", reactant: "AxeUse", infrequency: 25},
	{name: "(16-32) Stripped Birch Logs", antisynergy: "StrippedBirchLog", reactant: "AxeUse", infrequency: 25},
	{name: "(16-32) Stripped Dark Oak Logs", antisynergy: "StrippedDarkOakLog", reactant: "AxeUse", infrequency: 25},
	{name: "(16-32) Stripped Acacia Logs", antisynergy: "StrippedAcaciaLog", reactant: "AxeUse", infrequency: 25},
	{name: "(15-32) Seagrass"},
	{name: "(2-5) Tropical Fish"},
	{name: "(2-5) Pufferfish"},
	{name: "(15-32) Raw Cod", antisynergy: "RawCod", infrequency: 2},
	{name: "(11-20) Raw Salmon", antisynergy: "RawSalmon", infrequency: 2},
	{name: "Never use a Fishing Rod", catalyst: "Fishing"},
	{name: "Never use a Boat"},
	{name: "Get a Fish into Nether"},
	{name: "(11-20) Dried Kelp Blocks", antisynergy: "KelpBlocks"},
	{name: "Drown a Zombie"},
	{name: "(2-5) Gunpowder", antisynergy: "Gunpowder", infrequency: 2},
	{name: "(2-5) Spider Eyes", antisynergy: "SpiderEye", infrequency: 2},
	{name: "(4-5) Different Edible Items", tooltiptext: "Raw and cooked variants count as one (e.g. Raw Beef and Steak)", tooltipimg: "Goal Tooltip Images/RawAndCooked.jpg", antisynergy: "EdibleItems", infrequency: 2},
],

// Medium (2)
[
	{name: "Wither Skull"},
	{name: "(6-7) Different Edible Items", tooltiptext: "Raw and cooked variants count as one (e.g. Raw Beef and Steak)", tooltipimg: "Goal Tooltip Images/RawAndCooked.jpg", antisynergy: "EdibleItems", infrequency: 2},
	{name: "(3-5) Different Gold Items"},
	{name: "Beetroot Soup"},
	{name: "Emerald"},
	{name: "Tame a Horse"},
	{name: "Place a Cactus in a Flower Pot"},
	{name: "Detonate a TNT-Minecart"},
	{name: "(10-30) Magma Blocks"},
	{name: "Skull Charge Banner"},
	{name: "Damaged Anvil"},
	{name: "(16-64) Melons (Slices)"},
	{name: "Sleep inside a village", reactant: "Sleep"},
	{name: "Kill a Skeleton with its own Arrow"},
	{name: "Never wear any Armour", catalyst: "WearArmour"},
	{name: "Get a Skeleton's Bow", tooltiptext: "Get the rare Bow item drop from a Skeleton"},
	{name: "Diamond Block", antisynergy: "DiamondBlock", infrequency: 2},
	{name: "(2-3) Lapis Lazuli Blocks"},
	{name: "Destroy a Monster Spawner"},
	{name: "(2-5) Different Saplings"},
	{name: "Tame a Wolf"},
	{name: "6 Fire Charges"},
	{name: "(1-3) Magma Cream"},
	{name: "Create an Iron Golem"},
	{name: "Eye of Ender"},
	{name: "Rabbit Stew"},
	{name: "Potion of Fire Resistance", infrequency: 12},
	{name: "Potion of Healing", infrequency: 12},
	{name: "Potion of Poison", infrequency: 12},
	{name: "Potion of Harming", infrequency: 12},
	{name: "Potion of Regeneration", infrequency: 12},
	{name: "Potion of Slowness", infrequency: 12},
	{name: "Potion of Strength", infrequency: 12},
	{name: "Potion of Swiftness", infrequency: 12},
	{name: "Potion of Weakness", infrequency: 12},
	{name: "Potion of Leaping", infrequency: 12},
	{name: "Potion of Slow Falling", infrequency: 12},
	{name: "Potion of the Turtle Master", infrequency: 12},
	{name: "Finish by jumping from top to bottom of the world", tooltiptext: "Dig a hole to bedrock and build to 256 Y (height limit), then jump from top to bottom at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTopToBottom.jpg", antisynergy: "Finish"},
	{name: "Vegetarian", tooltiptext: "Never eat meat, including fish", tooltipimg: "Goal Tooltip Images/NoFish.jpg", antisynergy: "Food"},
	{name: "Carnivore", tooltiptext: "Only eat meat", tooltipimg: "Goal Tooltip Images/NoBread.jpg", antisynergy: "Food"},
	{name: "Kill yourself with your own arrow", reactant: "Death"},
	{name: "Get a '... while trying to escape ...' Death message", tooltiptext: "Example: 'PLAYER' drowned while trying to escape a Skeleton", reactant: "Death"},
	{name: "Set fire to a Villager's House"},
	{name: "Finish on top of the world", tooltiptext: "Build up to 256 Y (the height limit) and stand on the top at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTop.jpg", antisynergy: "Finish"},
	{name: "Kill a hostile mob with Gravel/Sand"},
	{name: "Put a Carpet on a Llama"},
	{name: "Activate a (4-6)x(4-6) Nether Portal (not counting corners)", tooltiptext: "Width/height of the obsidian frame, disregarding corners (or in other words, width/height of the - once activated - purple portal area).", tooltipimg: "Goal Tooltip Images/Portal.jpg"},
	{name: "(5-15) Obsidian"},
	{name: "(5-7) Iron Blocks", antisynergy: "IronBlocks", infrequency: 2},
	{name: "(3-4) Gold Blocks", antisynergy: "GoldBlocks", infrequency: 2},
	{name: "Daylight Sensor"},
	{name: "Enchanted Golden Sword"},
	{name: "(8-11) Colours of Wool", antisynergy: "WoolColour", infrequency: 4},
	{name: "(8-11) Colours of Terracotta", antisynergy: "TerracottaColour", infrequency: 4},
	{name: "(7-10) Colours of Glazed Terracotta", antisynergy: "GlazedColour", infrequency: 4},
	{name: "(7-10) Colours of Concrete", antisynergy: "ConcreteColour", infrequency: 4},
	{name: "(7-10) Colours of Beds", antisynergy: "BedColour", infrequency: 4},
	{name: "Power a Redstone Lamp"},
	{name: "(7-10) Different Flowers", antisynergy: "Flowers", infrequency: 3},
	{name: "Put a Pigman in Water"},
	{name: "Place an Iron, Gold and Diamond block on top of each other"},
	{name: "Kill a hostile mob with an Anvil"},
	{name: "Never Die", tooltiptext: "No death allowed, including if immediately caused by completing the last goal (e.g. inadvertently dying to the explosion of \"Detonate a TNT-Minecart\")", catalyst: "Death"},
	{name: "Level (16-26)", antisynergy: "Level", infrequency: 2},
	{name: "(2-3) Different Seeds", antisynergy: "Seeds", tooltiptext: "Includes: Beetroot Seeds, Melon Seeds, Nether Wart, Pumpkin Seeds and (Wheat) Seeds. As per the 'A Seedy Place' advancement."},
	{name: "Wear 4 Different Armour types at the same time",  tooltiptext: "Example: GOLD shoes, LEATHER Trousers, IRON Chestplate and DIAMOND Helmet", tooltipimg: "Goal Tooltip Images/4Armour.jpg", reactant: "WearArmour"},
	{name: "Fill a Hopper with 320 items"},
	{name: "(16-32) Red Nether Brick Blocks"},
	{name: "(16-32) Spectral Arrows"},
	{name: "Activate a Nether Portal inside of a Village"},
	{name: "(33-64) Rotten Flesh", antisynergy: "RotFlesh", infrequency: 2},
	{name: "(16-32) Ink Sacks", antisynergy: "InkSacks", infrequency: 2},
	{name: "(2-6) Slimeballs"},
	{name: "Use a lead on a Rabbit"},
	{name: "Firework Star"},
	{name: "Hang a mob with a lead", tooltiptext: "Suspend a mob in mid air using a fence and a lead", tooltipimg: "Goal Tooltip Images/HangingLead.jpg"},
	{name: "Blaze Rod"},
	{name: "Ghast Tear"},
	{name: "Never use Coal", tooltiptext: "Never use Coal for any crafting recipes, fuel in a furnace or trades, CAN use Charcoal", tooltipimg: "Goal Tooltip Images/NoCoal.jpg"},
	{name: "(32-64) Glowstone Dust"},
	{name: "(10-32) Item Frames"},
	{name: "(2-3) Different Diamond Items"},
	{name: "Blow up an End Crystal"},
	{name: "(2-5) Prismarine Crystals", infrequency: 2},
	{name: "Dig straight down to Bedrock from Sea level (1x1 hole)"},
	{name: "Never use a Sword", catalyst: "SwordUse", tooltiptext: "Never use a Sword for Combat or Block Breaking. Holding or crafting is fine.", tooltipimg: "Goal Tooltip Images/NoSword.jpg"},
	{name: "Deplete an Iron Sword", reactant: "SwordUse", tooltiptext: "Use an Iron Sword until it breaks, if you are unsure if you did check the Statistics screen!" ,tooltipimg: "Goal Tooltip Images/SwordDepelete.jpg"},
	{name: "Full Diamond Armour"},
	{name: "Saddle"},
	{name: "Give a mob a Hat"},
	{name: "Clean a Pattern off a Banner"},
	{name: "Heart of the Sea"},
	{name: "Phantom Membrane"},
	{name: "Turtle Shell"},
	{name: "Add a Marker to a Map"},
	{name: "Water Bucket, Lava Bucket, Milk Bucket, Bucket of Fish", antisynergy: "BucketTypes", reactant: "UseBuckets", tooltiptext: "Can be any of the types of Fish", tooltipimg: "Goal Tooltip Images/FishBucket.jpg"},
	{name: "Leash a Dolphin to a Fence"},
	{name: "(21-32) Dried Kelp Blocks", antisynergy: "KelpBlocks"},
	{name: "(6-15) Gunpowder", antisynergy: "Gunpowder", infrequency: 2},
	{name: "(6-15) Spider Eyes", antisynergy: "SpiderEye", infrequency: 2},
	{name: "(4-6) Ender Pearls", antisynergy: "EnderPearl", infrequency: 2},
	{name: "Never use an Axe", catalyst: "AxeUse"},
	{name: "Enchant an item"},
	{name: "Complete a full size Map", antisynergy: "CompleteMap"},
	{name: "Blue Shield with White Flower Charge"},
],

// Hard (3)
[
	{name: "Grass Block", tooltiptext: "If you don't have Silk Touch I know a guy who might pick one up for you...",tooltipimg: "Goal Tooltip Images/GrassBlock.jpg"},
	{name: "Create an Enchantment requiring level 10+"},
	{name: "Milk a Mooshroom", infrequency: 2},
	{name: "Shear a Mooshroom", infrequency: 2},
	{name: "(2-5) Sea Lanterns"},
	{name: "Sponge", tooltiptext: "DRY Sponge, not a wet one", tooltipimg: "Goal Tooltip Images/Sponge.jpg"},
	{name: "Bounce on a Slime Block", tooltiptext: "Get a Slime Block, place it on the ground and give it a good old bouncin' on", tooltipimg: "Goal Tooltip Images/SlimeBlock.jpg"},
	{name: "Listen to a Music Disc"},
	{name: "(11-14) Different Flowers", antisynergy: "Flowers", infrequency: 3},
	{name: "(3-5) Diamond Blocks", antisynergy: "DiamondBlock", infrequency: 2},
	{name: "Get a Zombie Pigman's Sword", tooltiptext: "Get the rare Golden Sword item drop from a Pigman", tooltipimg: "Goal Tooltip Images/GoldenSword.jpg"},
	{name: "Finish by launching Fireworks of (5-10) Different Colours", antisynergy: "Finish"},
	{name: "Nametag an Enderman"},
	{name: "Kill yourself with an Ender Pearl", tooltiptext: "Need to die to the damage taken from USING a pearl (not subsequent fall/other damage)", tooltipimg: "Goal Tooltip Images/EnderPearl.jpg", reactant: "Death"},
	{name: "Finish on top of a Blaze spawner", tooltiptext: "Stand on top of a Blaze spawner at the end of the game", antisynergy: "Finish"},
	{name: "(12-15) Colours of Wool", antisynergy: "WoolColour", infrequency: 4},
	{name: "(12-15) Colours of Terracotta", antisynergy: "TerracottaColour", infrequency: 4},
	{name: "(11-14) Colours of Glazed Terracotta", antisynergy: "GlazedColour", infrequency: 4},
	{name: "(11-14) Colours of Concrete", antisynergy: "ConcreteColour", infrequency: 4},
	{name: "(11-14) Colours of Beds", antisynergy: "BedColour", infrequency: 4},
	{name: "Poison a Parrot", infrequency: 2},
	{name: "Tame a Parrot", infrequency: 2},
	{name: "Kill an Iron Golem"},
	{name: "Ice Block on top of a Magma Block"},
	{name: "Level (27-37)", antisynergy: "Level", infrequency: 2},
	{name: "Build a (2-4)x(2-4)x(2-4) Ice cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/IceCube.jpg"},
	{name: "(4-5) Different Seeds", antisynergy: "Seeds", tooltiptext: "Includes: Beetroot Seeds, Melon Seeds, Nether Wart, Pumpkin Seeds and (Wheat) Seeds. As per the 'A Seedy Place' advancement."},
	{name: "Finish on top of a stairway to Heaven", tooltiptext: "Using Stairs, build up to 256 Y (the height limit) and stand on the top at the end of the game (If you need to jump over a block it's not a finished stairway)", tooltipimg: "Goal Tooltip Images/FinishStairs.jpg", antisynergy: "Finish"},
	{name: "Never place Torches"},
	{name: "Get a Ghast into the Overworld"},
	{name: "Enchanted Golden Apple"},
	{name: "Tame an Ocelot"},
	{name: "Tame a Donkey"},
	{name: "Never wear Armour or use Shields", catalyst: "WearArmour"},
	{name: "Kill a mob that is wearing Full Iron Armour"},
	{name: "Enchant 5 different items"},
	{name: "Never use Buckets", catalyst: "UseBuckets"},
	{name: "Conduit"},
	{name: "(2-5) types of Dead Coral Blocks"},
	{name: "(16-32) Sea Pickles"},
	{name: "Trident"},
	{name: "Get a '... didn't want to live in the same world as ...' Death message", reactant: "Death"},
	{name: "Cookie"},
	{name: "Grow a Full Jungle Tree"},
	{name: "(2-10) Prismarine Shards", infrequency: 2},
	{name: "(16-32) Jungle Logs", infrequency: 4},
	{name: "(11-20) Jungle Wood", infrequency: 4},
	{name: "(11-20) Stripped Jungle Wood", reactant: "AxeUse", infrequency: 4},
	{name: "(11-20) Stripped Jungle Logs", reactant: "AxeUse", infrequency: 4},
],

// Very Hard (4)
[
	{name: "(4-6) Different Ores (Silk Touch)", tooltiptext: "Coal, Diamond, Emerald, Gold, Iron, Lapis Lazuli, Nether Quatz and Redstone ores are your choices", tooltipimg: "Goal Tooltip Images/Ores.jpg"},
	{name: "(7-9) Different Potions", tooltiptext: "Splash variants count! Even Lingering if you want to get crazy", tooltipimg: "Goal Tooltip Images/Potions.jpg"},
	{name: "Cure a Zombie Villager"},
	{name: "Every type of Chestplate", tooltiptext: "Leather, Gold, Iron, Diamond and yes, even Chainmail", tooltipimg: "Goal Tooltip Images/chainmail chest.jpg"},
	{name: "Nether Star"},
	{name: "Dragon Egg"},
	{name: "Any hostile mob head OTHER than a Wither Skeleton's"},
	{name: "(5-10) Popped Chorus Fruit"},
	{name: "Every colour of Dye"},
	{name: "Level (38-50)", antisynergy: "Level", infrequency: 2},
	{name: "Fill a Double Chest with 3456 items"},
	{name: "(16-32) Tipped Arrows"},
	{name: "Place 1 of each Mineral block on top of each other", tooltiptext: "Coal, Iron, Gold, Diamond, Redstone, Lapis, Emerald and Quartz blocks", tooltipimg: "Goal Tooltip Images/MineralBlocks.jpg"},
	{name: "Save yourself with a Totem of Undying"},
	{name: "Sleep in a Woodland Mansion"},
	{name: "(10-32) Mycelium"},
	{name: "Get a villager into The End"},
	{name: "(2-10) Dragon's Breath"},
	{name: "5 types of Coral Blocks", tooltiptext: "The alive stuff, not the Dead Coral Blocks", tooltipimg: "Goal Tooltip Images/CoralBlocks.jpg"},
	{name: "(32-64) Blue Ice"},
	{name: "Fully power a Conduit"},
	{name: "Never Craft Sticks"},
]

];
