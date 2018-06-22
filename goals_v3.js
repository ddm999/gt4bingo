// This is part of a version currently in development and may be changed at any time.


var bingoList_v3 = [

// Very Easy (0)
[
	{name: "(32-64) Cobblestone"},
	{name: "(32-64) Dirt"},
	{name: "(32-64) Oak Wood Planks", antisynergy: "OakPlanks", frequency: 5},
	{name: "(32-64) Spruce Wood Planks", antisynergy: "SprucePlanks", frequency: 5},
	{name: "(32-64) Birch Wood Planks", antisynergy: "BirchPlanks", frequency: 5},
	{name: "(32-64) Dark Oak Wood Planks", antisynergy: "DarkOakPlanks", frequency: 5},
	{name: "(32-64) Acacia Wood Planks", antisynergy: "AcaciaPlanks", frequency: 5},
	{name: "(5-15) Oak Wood", antisynergy: "OakWood", frequency: 5},
	{name: "(5-15) Spruce Wood", antisynergy: "SpruceWood", frequency: 5},
	{name: "(5-15) Birch Wood", antisynergy: "BirchWood", frequency: 5},
	{name: "(5-15) Dark Oak Wood", antisynergy: "DarkOakWood", frequency: 5},
	{name: "(5-15) Acacia Wood", antisynergy: "AcaciaWood", frequency: 5},
	{name: "(5-15) Redstone", antisynergy: "Redstone", frequency: 2},
	{name: "Lava Bucket", reactant: "UseBuckets", frequency: 3},
	{name: "Milk Bucket", reactant: "UseBuckets", frequency: 3},
	{name: "Water Bucket", reactant: "UseBuckets", frequency: 3},
	{name: "(16-32) Andesite", frequency: 3},
	{name: "(16-32) Granite", frequency: 3},
	{name: "(16-32) Diorite", frequency: 3},
	{name: "Iron Block", antisynergy: "IronBlocks", frequency: 2},
	{name: "Gold Block", antisynergy: "GoldBlocks", frequency: 2},
	{name: "(5-25) Poppies & (5-25) Dandelions"},
	{name: "Level (5-7)", antisynergy: "Level", frequency: 4},
	{name: "(2-5) Note Blocks", antisynergy: "NoteBlocks", frequency: 2},
	{name: "(32-64) Leaves"},
	{name: "Build a (2-4)x(2-4)x(2-4) leaf cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/LeafCube.jpg"},
	{name: "(2-4) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(8-16) Snowballs"},
	{name: "(2-4) Different Slabs", antisynergy: "Slabs", frequency: 2},
	{name: "(2-4) Different Stairs", antisynergy: "Stairs", frequency: 2},
	{name: "Diamond"},
	{name: "(5-15) Rotten Flesh", antisynergy: "RotFlesh", frequency: 2},
	{name: "(10-32) Stone", tooltiptext: "NOT Cobblestone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: "Stone", frequency: 2},
	{name: "(1-5) Bread", antisynergy: "Bread", frequency: 2},
	{name: "Hay Bale", antisynergy: "HayBale", frequency: 2},
	{name: "Flower Pot"},
	{name: "(2-10) Feathers", antisynergy: "Feathers", frequency: 2},
	{name: "Sleep in a bed", reactant: "Sleep"},
	{name: "(5-15) Charcoal"},
	{name: "(5-15) Coal"},
	{name: "Fishing Rod"},
	{name: "(2-10) Raw Fish"},
	{name: "(2-5) Apples"},
	{name: "(32-64) Sticks", antisynergy: "Sticks", frequency: 2},
],

// Easy (1)
[
	{name: "(2-4) Different Fish"},
	{name: "Grow a Tree in the Nether"},
	{name: "(4-7) Colours of Terracotta", antisynergy: "TerracottaColour", frequency: 4},
	{name: "(1-5) Mushroom Stew"},
	{name: "Shoot a Button with an Arrow"},
	{name: "Book and Quill"},
	{name: "(16-64) Flint"},
	{name: "Cake"},
	{name: "Pumpkin Pie"},
	{name: "Fish a Treasure and a Junk item"},
	{name: "(16-64) Coarse Dirt"},
	{name: "(2-3) Clocks"},
	{name: "(2-4) Iron Blocks", antisynergy: "IronBlocks", frequency: 2},
	{name: "(2-3) Gold Blocks", antisynergy: "GoldBlocks", frequency: 2},
	{name: "Golden Apple"},
	{name: "(2-4) Bookshelves"},
	{name: "Never wear Chestplates", catalyst: "WearArmour"},
	{name: "Never use a Shield"},
	{name: "Jukebox"},
	{name: "Build a glass cube and fill the inner with lava"},
	{name: "(16-32) Moss Stone"},
	{name: "(5-15) Cacti"},
	{name: "(1-3) TNT"},
	{name: "Level (8-15)", antisynergy: "Level", frequency: 4},
	{name: "Create a Snow Golem"},
	{name: "(5-15) Note Blocks", antisynergy: "NoteBlocks", frequency: 2},
	{name: "(5-15) Ink Sacks", antisynergy: "InkSacks", frequency: 2},
	{name: "(6-10) Bread", antisynergy: "Bread", frequency: 2},
	{name: "(2-3) Hay Bales", antisynergy: "HayBale", frequency: 2},
	{name: "(5-8) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(5-10) Pistons"},
	{name: "Full Iron Armour", frequency: 3},
	{name: "Full Leather Armour", frequency: 3},
	{name: "Full Gold Armour", frequency: 3},
	{name: "Cauldron with Water"},
	{name: "Complete a Map"},
	{name: "(16-64) Soul Sand"},
	{name: "(5-10) Pumpkins"},
	{name: "(10-30) Vines"},
	{name: "(5-7) Different Slabs", antisynergy: "Slabs", frequency: 2},
	{name: "Every type of Sword"},
	{name: "Every type of Pickaxe"},
	{name: "(16-64) Brick Blocks"},
	{name: "(16-32) Nether Brick Blocks"},
	{name: "(16-64) Arrows"},
	{name: "Sleep in the Nether"},
	{name: "Fermented Spider Eye"},
	{name: "(5-7) Different Stairs", antisynergy: "Stairs", frequency: 2},
	{name: "(2-4) Ender Pearls"},
	{name: "16 Chicken Eggs"},
	{name: "Hang up 3 Different 4x4 Paintings"},
	{name: "(5-10) Bone Blocks"},
	{name: "2 Creepers in the same Boat", tooltiptext: "The 2 Creepers must be in the same boat at the same time", tooltipimg: "Goal Tooltip Images/2creepers1boat.jpg"},
	{name: "Trade with a Villager"},
	{name: "(2-3) Different Pattern / Colour Shields"},
	{name: "Dead Bush"},
	{name: "(15-32) Grass", tooltiptext: "The tall stuff, NOT the block", tooltipimg: "Goal Tooltip Images/TallGrass.jpg"},
	{name: "Cyan Dye", frequency: 10},
	{name: "Light Gray Dye and Light Blue Dye", frequency: 10},
	{name: "Magenta Dye", frequency: 10},
	{name: "Rose Red", frequency: 10},
	{name: "Orange Dye", frequency: 10},
	{name: "Dandelion Yellow", frequency: 10},
	{name: "Cactus Green", frequency: 10},
	{name: "Pink Dye", frequency: 10},
	{name: "Purple Dye", frequency: 10},
	{name: "Lime Dye", frequency: 10},
	{name: "Never Sleep", catalyst: "Sleep"},
	{name: "Grow a Huge Mushroom"},
	{name: "Water Bucket, Lava Bucket and Milk Bucket", reactant: "UseBuckets"},
	{name: "(3-6) Different Flowers", antisynergy: "Flowers", frequency: 3},
	{name: "(3-6) Colours of Concrete", antisynergy: "ConcreteColour", frequency: 4},
	{name: "(3-6) Colours of Glazed Terracotta", antisynergy: "GlazedColour", frequency: 4},
	{name: "(3-6) Colours of Beds", antisynergy: "BedColour", frequency: 4},
	{name: "Finish where you spawned using a Compass", tooltiptext: "Be stood close enough to spin your compass within a couple blocks at the end of the game", tooltipimg: "Goal Tooltip Images/Compass.jpg", antisynergy: "Finish"},
	{name: "Build a Redstone AND Gate"},
	{name: "(32-64) Stone", tooltiptext: "NOT Cobblestone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: "Stone", frequency: 2},
	{name: "Kill (4-8) Animals with only fire"},
	{name: "Kill a Creeper with only fire"},
	{name: "(32-64) Iron Nuggets"},
	{name: "(32-64) Gold Nuggets"},
	{name: "(16-32) Rotten Flesh", antisynergy: "RotFlesh", frequency: 2},
	{name: "(16-64) Redstone", antisynergy: "Redstone", frequency: 2},
	{name: "Golden Carrot"},
	{name: "Rotten Flesh, Spider Eye, Bone, Gunpowder and Ender Pearl"},
	{name: "(32-64) Feathers", antisynergy: "Feathers", frequency: 2},
	{name: "(2-10) Lily Pads"},
	{name: "(65-128) Oak Wood Planks", antisynergy: "OakPlanks", frequency: 5},
	{name: "(65-128) Spruce Wood Planks", antisynergy: "SprucePlanks", frequency: 5},
	{name: "(65-128) Birch Wood Planks", antisynergy: "BirchPlanks", frequency: 5},
	{name: "(65-128) Dark Oak Wood Planks", antisynergy: "DarkOakPlanks", frequency: 5},
	{name: "(65-128) Acacia Wood Planks", antisynergy: "AcaciaPlanks", frequency: 5},
	{name: "(16-32) Oak Wood", antisynergy: "OakWood", frequency: 5},
	{name: "(16-32) Spruce Wood", antisynergy: "SpruceWood", frequency: 5},
	{name: "(16-32) Birch Wood", antisynergy: "BirchWood", frequency: 5},
	{name: "(16-32) Dark Oak Wood", antisynergy: "DarkOakWood", frequency: 5},
	{name: "(16-32) Acacia Wood", antisynergy: "AcaciaWood", frequency: 5},
	{name: "(65-128) Sticks", antisynergy: "Sticks", frequency: 2},
	{name: "Wear 4 different colour Leather Armour at the same time", reactant: "WearArmour"},
],

// Medium (2) 
[
	{name: "Wither Skull"},
	{name: "(6-8) Different Edible Items"},
	{name: "(3-5) Different Gold Items"},
	{name: "Beetroot Soup"},
	{name: "Emerald"},
	{name: "Tame a Horse"},
	{name: "Place a Cactus in a Flower Pot"},
	{name: "Detonate a TNT-Minecart"},
	{name: "(10-30) Magma Blocks"},
	{name: "Skull Charge Banner"},
	{name: "Cookie"},
	{name: "Very Damaged Anvil"},
	{name: "(16-64) Melons (Slices)"},
	{name: "Sleep inside a village", reactant: "Sleep"},
	{name: "Kill a Skeleton with it's own Arrow"},
	{name: "Never wear any Armour", catalyst: "WearArmour"},
	{name: "Get a Skeleton's Bow", tooltiptext: "Kill Skeletons until you get a rare drop from one, it being their Bow", tooltipimg: "Goal Tooltip Images/Bow.jpg"},
	{name: "Diamond Block", antisynergy: "DiamondBlock", frequency: 2},
	{name: "(2-3) Lapis Lazuli Blocks"},
	{name: "Destroy a Monster Spawner"},
	{name: "(2-5) Different Saplings"},
	{name: "Tame a Wolf"},
	{name: "6 Fire Charges"},
	{name: "(1-3) Magma Cream"},
	{name: "Grow a Full Jungle Tree"},
	{name: "Create an Iron Golem"},
	{name: "Eye of Ender"},
	{name: "Rabbit Stew"},
	{name: "Potion of Fire Resistance", frequency: 10},
	{name: "Potion of Healing", frequency: 10},
	{name: "Potion of Poison", frequency: 10},
	{name: "Potion of Harming", frequency: 10},
	{name: "Potion of Regeneration", frequency: 10},
	{name: "Potion of Slowness", frequency: 10},
	{name: "Potion of Strength", frequency: 10},
	{name: "Potion of Swiftness", frequency: 10},
	{name: "Potion of Weakness", frequency: 10},
	{name: "Potion of Leaping", frequency: 10},
	{name: "Finish by jumping from top to bottom of the world", tooltiptext: "Dig a hole to bedrock, build to 256 Y (height limit), then jump from top to bottom at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTopToBottom.jpg", antisynergy: "Finish"},
	{name: "Vegetarian", tooltiptext: "Never eat meat, including fish", tooltipimg: "Goal Tooltip Images/NoFish.jpg", antisynergy: "Food"},
	{name: "Carnivore", tooltiptext: "Only eat meat", tooltipimg: "Goal Tooltip Images/NoBread.jpg", antisynergy: "Food"},
	{name: "Kill yourself with your own arrow", reactant: "Death"},
	{name: "Get a '... while trying to escape ...' Death message", tooltiptext: "Example: 'PLAYER' drowned while trying to escape a Skeleton", tooltipimg: "Goal Tooltip Images/EscapeMessage.jpg", reactant: "Death"},
	{name: "Set fire to a Villager's House"},
	{name: "Finish on top of the world", tooltiptext: "Build up to 256 Y (the height limit) and stand on the top at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTop.jpg", antisynergy: "Finish"},
	{name: "Kill a hostile mob with Gravel/Sand"},
	{name: "Put a Carpet on a Llama"},
	{name: "Activate a (4-6)x(4-6) Nether Portal (not counting corners)", tooltiptext: "Width/height of the obsidian frame, disregarding corners (or in other words, width/height of the - once activated - purple portal area).", tooltipimg: "Goal Tooltip Images/Portal.jpg"},
	{name: "(5-15) Obsidian"},
	{name: "(5-7) Iron Blocks", antisynergy: "IronBlocks", frequency: 2},
	{name: "(3-4) Gold Blocks", antisynergy: "GoldBlocks", frequency: 2},
	{name: "Daylight Sensor"},
	{name: "Enchanted Golden Sword"},
	{name: "(8-11) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(8-11) Colours of Terracotta", antisynergy: "TerracottaColour", frequency: 4},
	{name: "(7-10) Colours of Glazed Terracotta", antisynergy: "GlazedColour", frequency: 4},
	{name: "(7-10) Colours of Concrete", antisynergy: "ConcreteColour", frequency: 4},
	{name: "(7-10) Colours of Beds", antisynergy: "BedColour", frequency: 4},
	{name: "Power a Redstone Lamp"},
	{name: "(7-10) Different Flowers", antisynergy: "Flowers", frequency: 3},
	{name: "Put a Pigman in Water"},
	{name: "Place an Iron, Gold and Diamond block on top of each other"},
	{name: "Kill a hostile mob with an Anvil"},
	{name: "Never Die", catalyst: "Death"},
	{name: "Level (16-26)", antisynergy: "Level", frequency: 4},
	{name: "(2-3) Different Seeds", antisynergy: "Seeds", tooltiptext: "Includes Nether Wart and Cocoa Beans", tooltipimg: "Goal Tooltip Images/Seeds.jpg"},
	{name: "Wear 4 Different Armour types at the same time",  tooltiptext: "Example: GOLD shoes, LEATHER Trousers, IRON Chestplate and DIAMOND Helmet", tooltipimg: "Goal Tooltip Images/4Armour.jpg", reactant: "WearArmour"},
	{name: "Fill a Hopper with 320 items"},
	{name: "(16-32) Red Nether Brick Blocks"},
	{name: "(16-32) Spectral Arrows"},
	{name: "Activate a Nether Portal inside of a Village"},
	{name: "(33-64) Rotten Flesh", antisynergy: "RotFlesh", frequency: 2},
	{name: "(16-32) Ink Sacks", antisynergy: "InkSacks", frequency: 2},
	{name: "(2-6) Slimeballs"},
	{name: "Use a lead on a Rabbit"},
	{name: "Firework Star"},
	{name: "Hang a mob with a lead", tooltiptext: "Suspend a mob in mid air using some fences and a lead", tooltipimg: "Goal Tooltip Images/HangingLead.jpg"},
	{name: "Blaze Rod"},
	{name: "Ghast Tear"},
	{name: "Never use Coal", tooltiptext: "Never use Coal for any crafting recipes or fuel in a furnace, CAN use Charcoal", tooltipimg: "Goal Tooltip Images/NoCoal.jpg"},
	{name: "(32-64) Glowstone Dust"},
	{name: "(10-32) Item Frames"},
	{name: "(2-3) Different Diamond Items"},
	{name: "Blow up an End Crystal"},
	{name: "(2-10) Prismarine Shards", frequency: 2},
	{name: "(2-4) Prismarine Crystals", frequency: 2},
	{name: "Dig straight down to Bedrock from Sea level (1x1 hole)"},
	{name: "Never use a Sword", catalyst: "SwordUse", tooltiptext: "Never use a Sword for Combat or Block Breaking. Holding or crafting is fine.", tooltipimg: "Goal Tooltip Images/NoSword.jpg"},
	{name: "Deplete an Iron Sword", reactant: "SwordUse", tooltiptext: "Use an Iron Sword until it breaks, if you are unsure if you did check the Statistics screen!" ,tooltipimg: "Goal Tooltip Images/SwordDepelete.jpg"},
	{name: "(16-32) Jungle Wood", frequency: 5},
	{name: "Full Diamond Armour"},
	{name: "Saddle"},
	{name: "Give a Hostile mob a Hat"},
	{name: "Clean a Pattern off of a Banner"},
],

// Hard (3)
[
	{name: "Grass Block", tooltiptext: "If you don't have Silk Touch I know a guy who might pick one up for you...",tooltipimg: "Goal Tooltip Images/GrassBlock.jpg"},
	{name: "Create an Enchantment requiring level 10+"},
	{name: "Milk a Mooshroom", frequency: 2},
	{name: "Shear a Mooshroom", frequency: 2},
	{name: "(2-5) Sea Lanterns"},
	{name: "Sponge", tooltiptext: "DRY Sponge, not a wet one", tooltipimg: "Goal Tooltip Images/Sponge.jpg"},
	{name: "Bounce on a Slime Block", tooltiptext: "Get a Slime Block, place it on the ground and give it a good old bouncin' on", tooltipimg: "Goal Tooltip Images/SlimeBlock.jpg"},
	{name: "Listen to a Music Disc"},
	{name: "(11-14) Different Flowers", antisynergy: "Flowers", frequency: 3},
	{name: "(3-5) Diamond Blocks", antisynergy: "DiamondBlock", frequency: 2},
	{name: "Get a Zombie Pigman's Sword", tooltiptext: "Kill Pigmen until you get a rare drop from one, it being their Golden Sword", tooltipimg: "Goal Tooltip Images/GoldenSword.jpg"},
	{name: "Finish by launching Fireworks of (5-10) Different Colours", antisynergy: "Finish"},
	{name: "Nametag an Enderman"},
	{name: "Kill yourself with an Ender Pearl", tooltiptext: "Need to die to the small fall damage taken from using a pearl", tooltipimg: "Goal Tooltip Images/EnderPearl.jpg", reactant: "Death"},
	{name: "Finish on top of a Blaze spawner", tooltiptext: "Be stood on top of a Blaze spawner at the end of the game", tooltipimg: "Goal Tooltip Images/BlazeSpawner.jpg", antisynergy: "Finish"},
	{name: "(12-15) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(12-15) Colours of Terracotta", antisynergy: "TerracottaColour", frequency: 4},
	{name: "(11-14) Colours of Glazed Terracotta", antisynergy: "GlazedColour", frequency: 4},
	{name: "(11-14) Colours of Concrete", antisynergy: "ConcreteColour", frequency: 4},
	{name: "(11-14) Colours of Beds", antisynergy: "BedColour", frequency: 4},
	{name: "Poison a Parrot", frequency: 2},
	{name: "Tame a Parrot", frequency: 2},
	{name: "Kill an Iron Golem"},
	{name: "Ice Block on top of a Magma Block"},
	{name: "Level (27-37)", antisynergy: "Level", frequency: 4},
	{name: "Build a (2-4)x(2-4)x(2-4) Ice cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/IceCube.jpg"},
	{name: "(4-5) Different Seeds", antisynergy: "Seeds", tooltiptext: "Includes Nether Wart and Cocoa Beans", tooltipimg: "Goal Tooltip Images/Seeds.jpg"},
	{name: "Finish on top of a stairway to Heaven", tooltiptext: "Using Stairs, build up to 256 Y (the height limit) and stand on the top at the end of the game (If you need to jump over a block to go from bottom to top, it's not a finished stairway)", tooltipimg: "Goal Tooltip Images/FinishStairs.jpg", antisynergy: "Finish"},
	{name: "Never place Torches"},
	{name: "Get a Ghast into the Overworld"},
	{name: "Enchanted Golden Apple"},
	{name: "Tame an Ocelot"},
	{name: "Tame a Donkey"},
	{name: "Never wear Armour or use Shields", catalyst: "WearArmour"},
	{name: "Kill a mob that is wearing Full Iron Armour"},
	{name: "Enchant 5 different items"},
	{name: "Never use Buckets", catalyst: "UseBuckets"},
],

// Very Hard (4)
[
	{name: "(4-6) Different Ores (Silk Touch)", tooltiptext: "Coal, Diamond, Emerald, Gold, Iron, Lapis Lazuli, Nether Quatz and Redstone ores are your choices", tooltipimg: "Goal Tooltip Images/Ores.jpg"},
	{name: "(7-9) Different Potions", tooltiptext: "Splash variants count! Even Lingering if you want to get crazy", tooltipimg: "Goal Tooltip Images/Potions.jpg"},
	{name: "Cure a Zombie Villager"},
	{name: "Every type of Chestplate", tooltiptext: "Leather, Gold, Iron, Diamond and yes, even Chainmail", tooltipimg: "Goal Tooltip Images/chainmail chest.jpg"},
	{name: "Nether Star"},
	{name: "Dragon Egg"},
	{name: "Any mob head OTHER than a Wither Skeleton's", tooltiptext: "Dragon, Skeleton, Zombie or a Creeper Head. Wither Skeleton skulls do NOT count", tooltipimg: "Goal Tooltip Images/NoWitherSkull.jpg"},
	{name: "(5-10) Popped Chorus Fruit"},
	{name: "Every colour of Dye"},
	{name: "Level (38-50)", antisynergy: "Level", frequency: 4},
	{name: "Fill a Double Chest with 3456 items"},
	{name: "(16-32) Tipped Arrows"},
	{name: "Place 1 of each Mineral block on top of each other", tooltiptext: "Coal, Iron, Gold, Diamond, Redstone, Lapis, Emerald and Quartz blocks", tooltipimg: "Goal Tooltip Images/MineralBlocks.jpg"},
	{name: "Save yourself with a Totem of Undying"},
	{name: "Sleep in a Woodland Mansion"},
	{name: "(10-32) Mycelium"},
	{name: "Get a villager into The End"},
	{name: "(2-10) Dragon's Breath"},
]

];