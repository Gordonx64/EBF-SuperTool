

function loadEquips(){
    /*Start JSON File for Equips*/
    return new Promise(function(resolve, reject){
        equips = {
      "heavensgate":{
         "SID":"heavensgate",
         "type":"Equip.SWORD",
         "icon":226,
         "skin":1,
         "map":[3],
         "HP":[0],
         "attack":[15,30,40,50,65],
         "defence":[0],
         "magicAttack":[15,30,40,50,65],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "weak":[20, 40, 60, 80, 100],
            "dispel":[20, 40, 60, 80, 100]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.HOLY"],null,["Equip.CAST","Spells.holysword",0.2],null,["Equip.COUNTER","Spells.unleash"]],
         "materials":[["Items.feather",3],["Items.steel",4],["Items.gold",2,"Items.steel",4],["Items.mythril",1,"Summons.MirrorAngel",1]]
      },
      
      "inferno":{
         "SID":"inferno",
         "type":"Equip.SWORD",
         "icon":230,
         "skin":2,
         "map":[3],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[5,5,10,10,15],
         "evade":[5,5,10,10,15],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.BURN",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[1,1,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.FIRE"],null,["Equip.CAST","Spells.fume",0.33]],
         "materials":[["Items.glass",2],["Items.magma",4],["Items.magma",4,"Items.ruby",2],["Summons.FallenBurned",1,"Items.magma",8,"Items.ruby",2]]
      },
      
      "thechopper":{
         "SID":"thechopper",
         "type":"Equip.SWORD",
         "icon":240,
         "skin":3,
         "map":[3],
         "HP":[5,5,10,10,10],
         "attack":[25,35,50,65,80],
         "defence":[5,10,15,15,20],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[-5],
         "evade":[-5],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.SCARE","Foe.TREES"],null,["Equip.CAST","Spells.sawblade",1],null,["Equip.BOOST","Element.NONE"]],
         "materials":[["Items.wood",2],["Items.steel",4],["Items.steel",15,"Items.emerald",3],["Items.titanium",1,"Items.wood",30]]
      },
      
      "sapphiresaint":{
         "SID":"sapphiresaint",
         "type":"Equip.SWORD",
         "icon":239,
         "skin":4,
         "map":[41],
         "HP":[0],
         "attack":[15,30,45,60,75],
         "defence":[0,5,10,15,20],
         "magicAttack":[0,5,10,15,20],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "burn":[20, 40, 60, 80, 100]
         },
         "element":"Element.WATER",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.CAST","Spells.whirlpool",0.33]],
         "materials":[["Items.glass",1],["Items.ice",1,"Items.water",1],["Items.rune2",2,"Items.sapphire",1],["Items.diamond",1,"Items.sapphire",3]]
      },
      
      "giantslayer":{
         "SID":"giantslayer",
         "type":"Equip.SWORD",
         "icon":233,
         "skin":5,
         "map":[41],
         "HP":[0],
         "attack":[50,70,90,115,140],
         "defence":[0],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[-30],
         "evade":[-10],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100],
            "weight":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.IGNORE_BUFFS"],null,["Equip.INTIMIDATE"],null,["Equip.COUNTER","Spells.slash"]],
         "materials":[["Items.iron",2],["Items.iron",2,"Items.pipe",2],["Items.steel",25,"Items.pipe",5],["Items.titanium",1,"Items.steel",15,"Items.iron",10]]
      },
      
      "iceneedle":{
         "SID":"iceneedle",
         "type":"Equip.SWORD",
         "icon":231,
         "skin":6,
         "map":[41],
         "HP":[0],
         "attack":[15,30,45,60,75],
         "defence":[0],
         "magicAttack":[15,30,40,50,60],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[-30],
            "water":[10, 20, 30, 40, 50],
            "wet":[20, 40, 60, 80, 100]
         },
         "element":"Element.ICE",
         "statusEffect":"Status.FREEZE",
         "statusChance":[10,10,15,15,25],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.CAST","Spells.frostfragment",0.33]],
         "materials":[["Items.snowball",3],["Items.ice",1,"Items.water",1],["Items.sapphire",3,"Items.ice",2,"Items.water",2],["Items.sapphire",10,"Items.ice",10,"Items.water",10]]
      },
      
      "hypderdrill":{
         "SID":"hypderdrill",
         "type":"Equip.SWORD",
         "icon":223,
         "skin":7,
         "map":[48],
         "HP":[0],
         "attack":[20,30,45,60,75],
         "defence":[0,0,0,5,10],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "thunder":[-30]
         },
         "element":"Element.EARTH",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.DEFENCE",
         "buffChance":[60,70,80,90,100],
         "buffDegree":[-20,-25,-25,-25,-30],
         "specials":[["Equip.BOOST","Element.EARTH"],null,["Equip.CAST","Spells.stalactite2",0.25],null,["Equip.IGNORE_BUFFS"]],
         "materials":[["Items.turd",4],["Items.steel",1,"Items.pipe",2],["Items.silver",5,"Items.pipe",2],["Items.titanium",1,"Items.silver",5,"Items.turd",50]]
      },
      
      "emeraldsmasher":{
         "SID":"emeraldsmasher",
         "type":"Equip.SWORD",
         "icon":235,
         "skin":8,
         "map":[48],
         "HP":[0],
         "attack":[20,30,45,60,70],
         "defence":[0],
         "magicAttack":[20,30,45,60,70],
         "magicDefence":[0],
         "accuracy":[-5],
         "evade":[-5],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100]
         },
         "element":"Element.BIO",
         "statusEffect":"Status.STAGGER",
         "statusChance":[20,30,40,50,70],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.COUNTER","Spells.nettleknife"],null,["Equip.CAST","Spells.rockfall",0.5]],
         "materials":[["Items.iron",2],["Items.iron",6,"Items.pipe",2],["Items.emerald",3,"Items.virus",3],["Items.titanium",1,"Items.emerald",3]]
      },
      
      "devilsfork":{
         "SID":"devilsfork",
         "type":"Equip.SWORD",
         "icon":221,
         "skin":9,
         "map":[48],
         "HP":[0,0,0,5,10],
         "attack":[0,0,10,20,30],
         "defence":[0],
         "magicAttack":[20,30,45,60,75],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.DRY",
         "statusChance":[20,40,60,80,100],
         "statusDegree":[2,2,2,3,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.SCARE","Foe.SLIMES"],["Equip.BOOST_BUFFS",10],["Equip.CAST","Spells.blackspikes",0.5],null,["Equip.BOOST","Element.FIRE"]],
         "materials":[["Items.iron",2],["Items.powder",2,"Items.magma",2],["Summons.SlimeLava",1,"Items.magma",8],["Summons.SlimeBigLava",1,"Items.magma",16]]
      },
      
      "berzerker":{
         "SID":"berzerker",
         "type":"Equip.SWORD",
         "icon":224,
         "skin":10,
         "map":[48],
         "HP":[0,0,5,10,15],
         "attack":[40,50,60,75,100],
         "defence":[0,0,5,10,15],
         "magicAttack":[0,5,10,15,20],
         "magicDefence":[0,0,5,10,15],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "weak":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.DISPEL",
         "statusChance":[20,25,30,35,50],
         "statusDegree":[1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.STATUS","Status.TIRED",1,0.5],null,["Equip.COUNTER","Spells.revenge"],null,["Equip.BOOST","Element.NONE"]],
         "materials":[["Items.brick",5],["Items.brick",10,"Items.turd",10],["Items.rune2",5,"Items.brick",10],["Items.mythril",1,"Items.rune2",4]]
      },
      
      "ultrapro":{
         "SID":"ultrapro9000",
         "type":"Equip.SWORD",
         "icon":227,
         "skin":11,
         "map":[15],
         "HP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[30,35,40,45,50],
         "evade":[0,5,10,15,20],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100],
            "water":[10, 20, 30, 40, 50]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.CHILL",
         "statusChance":[30,40,50,60,70],
         "statusDegree":[1,1,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[null,null,["Equip.STEAL"],null,["Equip.BOOST_FOOD"]],
         "materials":[["Items.wood",1],["Items.wood",4],["Items.lego",1,"Items.leather",5],["Items.gamechild",1,"Items.chips",1,"Items.beer",1]]
      },
      
      "dragonsfeather":{
         "SID":"dragonsfeather",
         "type":"Equip.SWORD",
         "icon":220,
         "skin":12,
         "map":[15],
         "HP":[-20],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[20,25,30,35,40],
         "evade":[20,25,30,35,40],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50]
         },
         "element":"Element.WIND",
         "statusEffect":"Status.NONE",
         "statusChance":[30,40,50,60,70],
         "statusDegree":[1,1,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.STATUS","Status.HASTE",2,0.2],["Equip.BOOST","Element.WIND"],["Equip.CAST","Spells.gale",0.5],null,["Equip.COUNTER","Spells.slash"]],
         "materials":[["Items.shuriken",2],["Items.shuriken",8],["Summons.FallenLost",1],["Items.mythril",1,"Items.feather",4]]
      },
      
      "souleather":{
         "SID":"souleather",
         "type":"Equip.SWORD",
         "icon":222,
         "skin":13,
         "map":[15],
         "HP":[0],
         "attack":[100,120,140,160,180],
         "defence":[-40],
         "magicAttack":[0],
         "magicDefence":[-40],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[-30],
            "dark":[-30]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.CURSE",
         "statusChance":[30,40,50,60,70],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.STATUS","Status.CURSE",1,0.5],null,["Equip.COUNTER","Spells.slash"],null,["Equip.DRAIN_HP"]],
         "materials":[["Items.iron",3],["Items.claw",3],["Items.amber",4,"Items.spike",6],["Items.darkmatter",1,"Summons.MirrorDemon",1]]
      },
      
      "poisonfang":{
         "SID":"poisonfang",
         "type":"Equip.SWORD",
         "icon":228,
         "skin":14,
         "map":[15],
         "HP":[0],
         "attack":[10,20,30,40,55],
         "defence":[0],
         "magicAttack":[10,20,30,40,55],
         "magicDefence":[0],
         "accuracy":[0,5,10,15,20],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "poison":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.BIO",
         "statusEffect":"Status.POISON",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.DRAIN_HP"],null,["Equip.CAST","Spells.shreddingshrub",0.25]],
         "materials":[["Items.shuriken",2],["Items.butterflywing",4],["Items.opal",1,"Items.butterflywing",6],["Items.opal",4,"Items.butterflywing",8]]
      },
      
      "lightningbolt":{
         "SID":"lightningbolt",
         "type":"Equip.SWORD",
         "icon":236,
         "skin":15,
         "map":[19],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[10,20,35,50,60],
         "magicDefence":[0],
         "accuracy":[0,5,10,15,20],
         "evade":[0],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.STUN",
         "statusChance":[10,10,15,15,25],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.CAST","Spells.thunder",0.5],null,["Equip.COUNTER","Spells.slicingcyclone"]],
         "materials":[["Items.seashell",2],["Items.seashell",3,"Items.geode",2],["Items.topaz",2,"Items.geode",2],["Items.starfragment",1,"Items.seashell",3]]
      },
      
      "crimsonrazorback":{
         "SID":"crimsonrazorback",
         "type":"Equip.SWORD",
         "icon":234,
         "skin":16,
         "map":[23],
         "HP":[0],
         "attack":[0,0,10,20,30],
         "defence":[0],
         "magicAttack":[20,40,60,80,100],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.WIND",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.MAGIC_ATTACK",
         "buffChance":[60,70,80,90,100],
         "buffDegree":[-20,-25,-25,-25,-30],
         "specials":[["Equip.BOOST","Element.WIND"],null,["Equip.CAST","Spells.gust",0.5],null,["Equip.SUMMON","Spells.powermetal",0.66]],
         "materials":[["Items.spring",2],["Items.spring",5,"Items.beer",1],["Items.cpu",2,"Items.beer",3],["Items.gamechild",1,"Items.cpu",2]]
      },
      
      "fusionblade":{
         "SID":"fusionblade",
         "type":"Equip.SWORD",
         "icon":229,
         "skin":17,
         "map":[23],
         "HP":[0],
         "attack":[15,30,40,50,65],
         "defence":[0],
         "magicAttack":[15,30,40,50,65],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.BURN",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[1,1,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.CAST","Spells.bullet",0.33],null,["Equip.IGNORE_BUFFS"]],
         "materials":[["Items.powder",2],["Items.gear",2,"Items.steel",1],["Items.cpu",2,"Items.gear",2],["Items.plutonium",1,"Summons.FishJet",1]]
      },
      
      "goldenaxe":{
         "SID":"goldenaxe",
         "type":"Equip.SWORD",
         "icon":237,
         "skin":18,
         "map":[23],
         "HP":[5,5,10,10,20],
         "attack":[15,30,40,50,65],
         "defence":[0],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "dispel":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.BAD_LUCK",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.STATUS","Status.GOOD_LUCK",2,0.5],null,["Equip.BOOST","Element.THUNDER"],null,["Equip.CAST","Spells.bigspark",0.4]],
         "materials":[["Items.pipe",2],["Items.pipe",4,"Items.leather",1],["Items.gold",3,"Items.leather",2],["Items.grail",1,"Summons.FishGold",1]]
      },
      
      "darkstalker":{
         "SID":"darkstalker",
         "type":"Equip.SWORD",
         "icon":225,
         "skin":19,
         "map":[23],
         "HP":[0],
         "attack":[5,15,25,35,45],
         "defence":[0],
         "magicAttack":[5,15,25,35,45],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.BAD_LUCK",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.ATTACK",
         "buffChance":[60,70,80,90,100],
         "buffDegree":[-20,-25,-30,-35,-40],
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.CAST","Spells.bonestar",0.5],null,null],
         "materials":[["Items.claw",1],["Items.claw",2],["Items.rune",1,"Items.spike",4],["Items.darkmatter",1,"Items.spike",4]]
      },
      
      "loveblade":{
         "SID":"loveblade",
         "type":"Equip.SWORD",
         "icon":238,
         "skin":20,
         "map":[23],
         "HP":[10,15,20,25,30],
         "attack":[-50],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[5,10,15,20,20],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50],
            "death":[20, 40, 60, 80, 100]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.ACCURACY",
         "buffChance":[60,70,80,90,100],
         "buffDegree":[-10,-10,-15,-15,-20],
         "specials":[["Equip.BOOST_HEALING"],null,["Equip.BOOST_BUFFS",10],null,["Equip.DEFEND_STATUS","Status.LOVED",1]],
         "materials":[["Items.cupcake",1],["Items.flower",4],["Items.dragonfruit",4,"Items.cloudberries",4],["Items.moonpearl",2,"Items.flower",8]]
      },
      
      "clubofwithering":{
         "SID":"clubofwithering",
         "type":"Equip.SWORD",
         "icon":232,
         "skin":21,
         "map":[15],
         "HP":[0],
         "attack":[5,10,20,30,45],
         "defence":[0,5,5,10,10],
         "magicAttack":[5,10,20,30,45],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "stagger":[20, 40, 60, 80, 100],
            "weak":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.WEAKEN",
         "statusChance":[60,70,80,90,100],
         "statusDegree":[1,2,2,3,3],
         "buffEffect":"Stats.MAGIC_DEFENCE",
         "buffChance":[60,70,80,90,100],
         "buffDegree":[-20,-25,-30,-35,-40],
         "specials":[null,null,["Equip.CAST","Spells.bones",0.6],null,["Equip.SUMMON","Spells.bonestar",0.66]],
         "materials":[["Items.claw",1],["Items.claw",2],["Items.spike",3,"Items.leather",2],["Items.moonpearl",2,"Summons.HandSkeleton",1]]
      },
      
      
      "solspear":{
         "SID":"solspear",
         "type":"Equip.STAFF",
         "icon":262,
         "skin":1,
         "map":[5],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0,5,5,10,10],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.DRY",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,3,3,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.FIRE"],null,["Equip.CAST","Spells.ember",0.5],null,["Equip.SUMMON","Spells.flare",0.66]],
         "materials":[["Items.wood",2],["Items.magma",3],["Items.gold",2,"Items.satin",2],["Items.starfragment",1,"Items.gold",1]]
      },
      
      "darktooth":{
         "SID":"darktooth",
         "type":"Equip.STAFF",
         "icon":250,
         "skin":2,
         "map":[5],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0,0,5,5,10],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0,0,5,5,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.DARK",
         "buffEffect":"Stats.NONE",
         "statusEffect":"Status.DISPEL",
         "statusChance":[20,30,40,40,50],
         "statusDegree":[1,1,1,1,1],
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.CAST","Spells.geometry2",0.33],null,["Equip.COUNTER","Spells.pulse"]],
         "materials":[["Items.gems",1],["Items.gems",4],["Items.rune",3],["Items.darkmatter",1,"Items.satin",3]]
      },
      
      "druidstaff":{
         "SID":"druidstaff",
         "type":"Equip.STAFF",
         "icon":256,
         "skin":3,
         "map":[5],
         "HP":[0,5,5,10,10],
         "attack":[0,10,20,30,45],
         "defence":[5,5,10,15,25],
         "magicAttack":[10,20,30,40,55],
         "magicDefence":[5,5,10,15,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bio":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50],
            "poison":[20, 40, 60, 80, 100]
         },
         "element":"Element.BIO",
         "statusEffect":"Status.POISON",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,3,3,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.CAST","Spells.vines",0.33],null,["Equip.SUMMON","Spells.mushroom",1.5]],
         "materials":[["Items.wood",1,"Items.cactus",1],["Items.wood",3,"Items.cactus",3],["Items.spike",5,"Items.root",10],["Items.opal",4,"Items.root",10]]
      },
      
      "arctictrident":{
         "SID":"arctictrident",
         "type":"Equip.STAFF",
         "icon":259,
         "skin":4,
         "map":[5],
         "HP":[0],
         "attack":[0,10,20,30,45],
         "defence":[0],
         "magicAttack":[0,10,20,30,45],
         "magicDefence":[0],
         "accuracy":[5,5,10,10,10],
         "evade":[5,5,10,10,10],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "burn":[20, 40, 60, 80, 100]
         },
         "element":"Element.ICE",
         "statusEffect":"Status.CHILL",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.ICE"],["Equip.STATUS","Status.CHILL",2,0.5],["Equip.CAST","Spells.deepfreeze",0.5],null,["Equip.COUNTER","Spells.iceshard"]],
         "materials":[["Items.steel",1],["Items.steel",1,"Items.water",1,"Items.ice",1],["Items.sapphire",3,"Items.steel",3],["Items.sapphire",6,"Items.moonpearl",1]]
      },
      
      "wrathofzeus":{
         "SID":"wrathofzeus",
         "type":"Equip.STAFF",
         "icon":257,
         "skin":5,
         "map":[5],
         "HP":[0],
         "attack":[0,5,10,20,30],
         "defence":[0],
         "magicAttack":[10,25,40,55,70],
         "magicDefence":[0],
         "accuracy":[0,5,5,10,10],
         "evade":[0],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.CAST","Spells.plasmacage",0.5],null,["Equip.SUMMON","Spells.thunderbolt",1]],
         "materials":[["Items.seashell",2],["Items.gems",4],["Summons.DogZap",1],["Items.starfragment",1]]
      },
      
      "dragonwings":{
         "SID":"dragonwings",
         "type":"Equip.STAFF",
         "icon":258,
         "skin":6,
         "map":[5],
         "HP":[0],
         "attack":[5,10,20,30,40],
         "defence":[0],
         "magicAttack":[5,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[5,10,15,20,25],
         "evade":[5,10,15,20,25],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50],
            "dispel":[20, 40, 60, 80, 100]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.BURN",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,3,3,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.FIRE"],null,["Equip.SUMMON","Summons.DragonOmega",0.15],null,["Equip.COUNTER","Spells.fireball"]],
         "materials":[["Items.magma",1],["Items.amber",1],["Items.scales",1],["Items.scales",2,"Items.amber",1,"Items.magma",2]]
      },
      
      "nimbusrod":{
         "SID":"nimbusrod",
         "type":"Equip.STAFF",
         "icon":247,
         "skin":7,
         "map":[5],
         "HP":[0,5,5,10,15],
         "attack":[0,5,10,15,20],
         "defence":[0],
         "magicAttack":[10,20,30,45,60],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50]
         },
         "element":"Element.WATER",
         "statusEffect":"Status.CHILL",
         "statusChance":[70,80,90,100,120],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.CAST","Spells.bubblering",0.33],null,["Equip.SUMMON","Spells.rain",1]],
         "materials":[["Items.snowball",3],["Items.ice",2,"Items.snowball",2],["Items.sapphire",2,"Items.ice",2],["Items.moonpearl",2,"Items.sapphire",2]]
      },
      
      "alchemyset":{
         "SID":"alchemyset",
         "type":"Equip.STAFF",
         "icon":253,
         "skin":8,
         "map":[5],
         "HP":[0,5,5,10,10],
         "attack":[0],
         "defence":[0],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "weaken":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.RANDOM",
         "statusChance":[70,80,90,100,120],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST_STATUS"],null,["Equip.COUNTER","Spells.spectrum"],null,["Equip.BOOST_DEBUFFS"]],
         "materials":[["Items.glass",1],["Items.butterflywing",3,"Items.powder",3],["Summons.WormFuzzy",1,"Summons.WormPutrid",1,"Summons.WormScaly",1],["Items.darkmatter",1,"Items.glass",10]]
      },
      
      "kaladanda":{
         "SID":"kaladanda",
         "type":"Equip.STAFF",
         "icon":252,
         "skin":9,
         "map":[15],
         "HP":[0,5,10,15,20],
         "attack":[15,30,45,60,80],
         "defence":[0,5,5,10,15],
         "magicAttack":[15,30,45,60,80],
         "magicDefence":[0,5,5,10,15],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "stagger":[20, 40, 60, 80, 100],
            "weak":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.WEAKEN",
         "statusChance":[60,70,80,90,100],
         "statusDegree":[1,2,2,3,3],
         "buffEffect":"Stats.DEFENCE",
         "buffChance":[60,70,80,90,100],
         "buffDegree":[-30,-40,-50,-60,-70],
         "specials":[["Equip.STATUS","Status.WEAKEN",1,0.5],null,["Equip.CAST","Spells.bones",0.5],null,["Equip.COUNTER","Spells.staffstrike"]],
         "materials":[["Items.feather",2],["Items.claw",2],["Items.spike",3,"Items.silk",2],["Items.moonpearl",2,"Items.spike",5]]
      },
      
      "knife":{
         "SID":"knife",
         "type":"Equip.STAFF",
         "icon":263,
         "skin":10,
         "map":[15],
         "HP":[0],
         "attack":[20,40,60,80,100],
         "defence":[0],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[5,10,15,20,25],
         "evade":[5,10,15,20,25],
         "resistance":{
            "death":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.DEATH",
         "statusChance":[10,20,30,40,50],
         "statusDegree":[1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST_FOOD"],null,["Equip.BOOST_BUFFS"]],
         "materials":[["Items.pumpkin",2],["Items.pineapple",4],["Items.watermelon",6,"Items.blueberries",4],["Items.dragonfruit",18,"Items.cloudberries",6]]
      },
      
      "celticcross":{
         "SID":"celticcross",
         "type":"Equip.STAFF",
         "icon":255,
         "skin":11,
         "map":[15],
         "HP":[0],
         "attack":[10,20,30,40,55],
         "defence":[0],
         "magicAttack":[10,20,30,40,55],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.SCARE","Foe.GHOSTS"],["Equip.BOOST","Element.HOLY"],["Equip.CAST","Spells.talisman",0.5],null,["Equip.COUNTER","Spells.shine"]],
         "materials":[["Items.brick",4],["Items.silk",2,"Items.brick",1],["Items.rune2",5,"Items.silk",2],["Items.grail",1,"Items.satin",3]]
      },
      
      "obsidianstaff":{
         "SID":"obsidianstaff",
         "type":"Equip.STAFF",
         "icon":248,
         "skin":12,
         "map":[15],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[-20],
         "magicAttack":[30,45,60,85,110],
         "magicDefence":[-20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.DRY",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.CAST","Spells.darken",0.5]],
         "materials":[["Items.powder",2],["Items.amber",2],["Items.powder",10,"Items.rune",1],["Items.darkmatter",1,"Summons.BoulderObsidian",1,"Items.amber",3]]
      },
      
      "paperfan":{
         "SID":"paperfan",
         "type":"Equip.STAFF",
         "icon":260,
         "skin":13,
         "map":[15],
         "HP":[0],
         "attack":[-50],
         "defence":[0],
         "magicAttack":[15,25,40,55,75],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50]
         },
         "element":"Element.WIND",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.WIND"],null,["Equip.CAST","Spells.whirlwind",0.5],["Equip.STATUS","Status.HASTE",2,0.2]],
         "materials":[["Items.feather",2],["Items.tape",3,"Items.shuriken",3],["Items.tape",10,"Items.kevlar",1],["Items.kevlar",4,"Items.tape",10]]
      },
      
      "wreckingrod":{
         "SID":"wreckingrod",
         "type":"Equip.STAFF",
         "icon":249,
         "skin":14,
         "map":[15],
         "HP":[5,10,15,20,25],
         "MP":[0],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[-10],
         "evade":[-20],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100],
            "thunder":[10, 20, 30, 40, 50]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.STAGGER",
         "statusChance":[50,60,70,85,100],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.CAST","Spells.blast",0.5],null,["Equip.COUNTER","Spells.energybomb"]],
         "materials":[["Items.iron",1,"Items.spring",1],["Items.iron",4,"Items.spring",4],["Items.cpu",2,"Items.steel",2,"Items.floppy",1],["Items.plutonium",1,"Items.powder",10]]
      },
      
      "slimestaff":{
         "SID":"slimestaff",
         "type":"Equip.STAFF",
         "icon":251,
         "skin":15,
         "map":[15],
         "HP":[5,10,15,20,25],
         "attack":[0],
         "defence":[5,10,15,20,25],
         "magicAttack":[5,10,15,20,25],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.SCARE","Foe.SLIMES"],["Equip.BOOST_HEALING"],["Equip.BOOST","Element.HOLY"],null,["Equip.SUMMON","Summons.SlimeBunny",0.5]],
         "materials":[["Items.wool",3],["Items.plastic",3],["Items.plastic",10,"Items.satin",3,"Items.flower",5],["Items.grail",1,"Summons.SlimeBunny",1]]
      },
      
      "elderswisdom":{
         "SID":"elderswisdom",
         "type":"Equip.STAFF",
         "icon":264,
         "skin":16,
         "map":[15],
         "HP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0],
         "magicAttack":[10,20,30,45,60],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50],
            "weight":[20, 40, 60, 80, 100]
         },
         "element":"Element.EARTH",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.EARTH"],null,["Equip.SUMMON","Spells.bigroot",1.25],["Equip.BOOST_BUFFS"],["Equip.CAST","Spells.lighten",0.5]],
         "materials":[["Items.wood",2],["Items.root",2,"Items.claw",2],["Items.spike",2,"Items.claw",6],["Items.opal",3,"Items.moonpearl",1]]
      },
      
      "gigavolt":{
         "SID":"gigavolt",
         "type":"Equip.STAFF",
         "icon":254,
         "skin":17,
         "map":[15],
         "HP":[0],
         "attack":[10,20,35,50,65],
         "defence":[0,5,5,10,10],
         "magicAttack":[10,20,35,50,65],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[5,10,15,20,25],
         "evade":[5,10,15,20,25],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50],
            "dispel":[20, 40, 60, 80, 100]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.CAST","Spells.lasersword",0.33],null,["Equip.COUNTER","Spells.staffstrike"]],
         "materials":[["Items.seashell",2],["Items.amber",2],["Items.topaz",2,"Items.ruby",2],["Items.topaz",6,"Items.ruby",6]]
      },
      
      "soulcrusher":{
         "SID":"soulcrusher",
         "type":"Equip.STAFF",
         "icon":261,
         "skin":18,
         "map":[15],
         "HP":[5,5,10,15,20],
         "attack":[30,45,60,80,100],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[-20],
         "evade":[-20],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.INTIMIDATE"],null,["Equip.SUMMON","Summons.WraithSteel",0.66],null,["Equip.BOOST_BUFFS"]],
         "materials":[["Items.iron",2],["Items.steel",2],["Items.rune",2,"Items.steel",2],["Items.titanium",1,"Summons.WraithSteel",1,"Items.steel",2]]
      },
      
      "oakstaff":{
         "SID":"oakstaff",
         "type":"Equip.STAFF",
         "icon":245,
         "skin":19,
         "map":[15],
         "HP":[10,20,30,40,50],
         "attack":[-50],
         "defence":[10,15,20,30,40],
         "magicAttack":[-50],
         "magicDefence":[10,15,20,30,40],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50]
         },
         "element":"Element.EARTH",
         "elementDegree":50,
         "statusEffect":"Status.NONE",
         "statusChance":[0],
         "statusDegree":[0],
         "buffEffect":"Stats.NONE",
         "buffChance":[0],
         "buffDegree":[0],
         "specials":[["Equip.SCARE","Foe.TREES"],null,["Equip.BOOST_HEALING"],null,["Equip.STATUS","Status.BLESS",2,0.15]],
         "materials":[["Items.wood",1,"Items.turd",1],["Items.root",3,"Items.herb",3,"Items.flower",3],["Summons.IdolWood",1,"Items.root",15,"Items.flower",15],["Summons.GloopWood",1,"Items.emerald",6,"Items.opal",1]]
      },
      
      "shootingstar":{
         "SID":"shootingstar",
         "type":"Equip.STAFF",
         "icon":246,
         "skin":20,
         "map":[15],
         "HP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[10,25,40,55,75],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dispel":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.NONE"],null,["Equip.CAST","Spells.luckystar",0.33],["Equip.SUMMON","Spells.starshower",0.5]],
         "materials":[["Items.gems",1],["Items.gems",4],["Items.ruby",1,"Items.sapphire",1,"Items.emerald",1],["Items.starfragment",1,"Items.gems",10]]
      },
      
      "beholdingeye":{
         "SID":"beholdingeye",
         "type":"Equip.STAFF",
         "icon":265,
         "skin":21,
         "map":[15],
         "HP":[0],
         "attack":[0,5,10,15,20],
         "defence":[0],
         "magicAttack":[0,5,10,15,20],
         "magicDefence":[0],
         "accuracy":[20,40,60,80,100],
         "evade":[10,20,30,40,50],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.VIRUS",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,3,3,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST_DEBUFFS"],null,["Equip.CAST","Spells.tentacles",0.5],null,["Equip.BOOST_BUFFS"]],
         "materials":[["Items.iron",2],["Items.virus",2],["Items.scales",1,"Items.virus",1],["Summons.ChomperMutant",1,"Items.rune",1]]
      },

      
      "shadowblaster":{
         "SID":"shadowblaster",
         "type":"Equip.GUN",
         "icon":278,
         "skin":1,
         "map":[30],
         "HP":[0],
         "attack":[0,5,10,15,20],
         "defence":[0],
         "magicAttack":[15,30,45,60,80],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "death":[20, 40, 60, 80, 100]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.COUNTER","Spells.darkblast"],null,["Equip.CAST","Spells.gravitysurge",0.2]],
         "materials":[["Items.bomb",2],["Items.rune",1],["Summons.FlybotRed",1,"Items.bomb",2],["Items.darkmatter",1,"Items.rune",1]]
      },
      
      "biohazardblaster":{
         "SID":"biohazardblaster",
         "type":"Equip.GUN",
         "icon":281,
         "skin":2,
         "map":[30],
         "HP":[0,5,10,15,20],
         "attack":[10,15,20,25,35],
         "defence":[0],
         "magicAttack":[10,15,20,25,35],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bio":[30, 60, 90, 120, 150],
            "water":[10, 20, 30, 40, 50]
         },
         "element":"Element.BIO",
         "statusEffect":"Status.VIRUS",
         "statusChance":[60,70,80,90,100],
         "statusDegree":[1,1,1,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.DRAIN_HP"],null,["Equip.STATUS","Status.POISON",2,1]],
         "materials":[["Items.glass",1],["Items.glass",4,"Items.plastic",1],["Items.virus",4,"Items.kevlar",2],["Items.darkmatter",1,"Items.virus",4]]
      },
      
      "coconutshooter":{
         "SID":"coconutshooter",
         "type":"Equip.GUN",
         "icon":282,
         "skin":3,
         "map":[30],
         "HP":[0],
         "attack":[15,25,40,55,70],
         "defence":[5,5,5,5,10],
         "magicAttack":[5,10,20,30,40],
         "magicDefence":[5,5,5,5,10],
         "accuracy":[0],
         "evade":[-10],
         "resistance":{
            "bio":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50]
         },
         "element":"Element.EARTH",
         "statusEffect":"Status.STAGGER",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.EARTH"],null,["Equip.CAST","Spells.stonefist",0.5],null,["Equip.SUMMON","Spells.lumber",1]],
         "materials":[["Items.wood",1,"Items.herb",1,"Items.cactus",1],["Items.wood",4,"Items.herb",4,"Items.cactus",4],["Items.emerald",2,"Items.root",3],["Items.opal",2,"Summons.MirrorWise",1]]
      },
      
      "gungnir":{
         "SID":"gungnir",
         "type":"Equip.GUN",
         "icon":277,
         "skin":4,
         "map":[30],
         "HP":[0,5,5,10,10],
         "attack":[15,25,40,55,70],
         "defence":[0,5,5,10,10],
         "magicAttack":[15,25,40,55,70],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0,5,10,15,20],
         "evade":[0,5,10,15,20],
         "resistance":{
            "death":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100],
            "dispel":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.STAGGER",
         "statusChance":[50,60,70,90,100],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[],
         "materials":[["Items.spring",3],["Items.plastic",3],["Items.lego",1,"Items.plastic",4],["Items.plutonium",1,"Items.plastic",6]]
      },
      
      "heartstopper":{
         "SID":"heartstopper",
         "type":"Equip.GUN",
         "icon":288,
         "skin":5,
         "map":[30],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0,5,5,10,10],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "stun":[20, 40, 60, 80, 100],
            "bomb":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.DOOM",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[3,3,3,3,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.CAST","Spells.spark",0.5],null,["Equip.COUNTER","Spells.doubleshot"]],
         "materials":[["Items.turd",3],["Items.amber",2],["Items.topaz",3,"Items.amber",4],["Items.topaz",10,"Items.amber",8]]
      },
      
      "heavyclaw":{
         "SID":"heavyclaw",
         "type":"Equip.GUN",
         "icon":270,
         "skin":6,
         "map":[30],
         "HP":[5,10,15,20,25],
         "attack":[20,35,50,60,80],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[-20],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "dispel":[20, 40, 60, 80, 100]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.DEFENCE",
         "buffChance":[30,40,50,60,70],
         "buffDegree":[-20,-20,-25,-25,-30],
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.STATUS","Status.HEAVY",2,0.5],null,["Equip.SUMMON","Spells.airstrike2",1]],
         "materials":[["Items.steel",2],["Items.steel",3],["Items.cpu",2,"Items.gear",10],["Items.diamond",1,"Items.steel",10]]
      },
      
      "hellfireshotgun":{
         "SID":"hellfireshotgun",
         "type":"Equip.GUN",
         "icon":284,
         "skin":7,
         "map":[30],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[5,10,15,20,25],
         "evade":[5,5,5,10,15],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.BURN",
         "statusChance":[50,60,80,90,100],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.FIRE"],null,["Equip.CAST","Spells.flameburst",0.5],null,["Equip.COUNTER","Spells.flameshot"]],
         "materials":[["Items.pipe",2],["Items.pipe",4],["Items.lego",1,"Items.powder",5],["Items.lego",3,"Items.powder",5]]
      },
      
      "crystalwing":{
         "SID":"crystalwing",
         "type":"Equip.GUN",
         "icon":279,
         "skin":8,
         "map":[30],
         "HP":[0,0,5,10,15],
         "attack":[0,10,20,30,40],
         "defence":[5,5,5,10,15],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[5,5,5,10,15],
         "accuracy":[0,5,5,10,15],
         "evade":[0,5,5,10,15],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.WEAKEN",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.HOLY"],null,["Equip.BOOST_HEALING"],null,["Equip.SUMMON","Spells.heal",1]],
         "materials":[["Items.butterflywing",1],["Items.butterflywing",3,"Items.glass",1],["Items.silver",5,"Items.butterflywing",5],["Items.diamond",1,"Items.silver",2]]
      },
      
      "spinesnapper":{
         "SID":"spinesnapper",
         "type":"Equip.GUN",
         "icon":286,
         "skin":9,
         "map":[30],
         "HP":[-10],
         "attack":[0,5,10,20,30],
         "defence":[0],
         "magicAttack":[0,5,10,20,30],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[20,25,30,35,40],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "death":[20, 40, 60, 80, 100],
            "holy":[-30]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.DEATH",
         "statusChance":[10,15,20,25,30],
         "statusDegree":[1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.BOOST_DEBUFFS"],["Equip.SUMMON","Summons.FallenBeheaded",0.4],["Equip.BOOST_STATUS"]],
         "materials":[["Items.claw",1],["Items.claw",3],["Items.spike",2,"Summons.BatBone",1],["Items.spike",12,"Items.claw",12,"Items.rune",1]]
      },
      
      "soulpistol":{
         "SID":"soulpistol",
         "type":"Equip.GUN",
         "icon":287,
         "skin":10,
         "map":[30],
         "HP":[0],
         "attack":[10,25,40,55,75],
         "defence":[0,0,5,10,15],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0,0,5,10,15],
         "accuracy":[0,5,5,10,10],
         "evade":[0,5,5,10,10],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50],
            "weak":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.TIRED",
         "statusChance":[60,70,80,90,100],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.DRAIN_HP"],null,["Equip.IGNORE_BUFFS"],null,["Equip.BOOST_BUFFS"]],
         "materials":[["Items.spring",2],["Items.spring",2,"Items.pipe",5],["Items.silver",3,"Items.pipe",5,"Items.gear",5],["Summons.FishSteam",1,"Items.silver",3,"Items.gold",3]]
      },
      
      "thundercore":{
         "SID":"thundercore",
         "type":"Equip.GUN",
         "icon":283,
         "skin":11,
         "map":[30],
         "HP":[0],
         "attack":[0,5,10,20,30],
         "defence":[0],
         "magicAttack":[10,20,30,45,60],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.STUN",
         "statusChance":[10,15,15,20,25],
         "statusDegree":[1,1,1,1,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.STATUS","Status.CHARGE",1,0.2],null,["Equip.COUNTER","Spells.plasma"]],
         "materials":[["Items.glass",1],["Items.glass",4,"Items.tape",1],["Summons.FlybotYellow",1,"Items.tape",6],["Items.starfragment",1,"Items.glass",5]]
      },
      
      "deepblue":{
         "SID":"deepblue",
         "type":"Equip.GUN",
         "icon":273,
         "skin":12,
         "map":[30],
         "HP":[0],
         "attack":[20,35,50,70,90],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[-10],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "wet":[20, 40, 60, 80, 100]
         },
         "element":"Element.WATER",
         "statusEffect":"Status.WET",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[1,1,1,1,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.CAST","Spells.whirlpool",0.33],null,["Equip.COUNTER","Spells.crush"]],
         "materials":[["Items.steel",1],["Items.ice",2,"Items.steel",1],["Items.ice",5,"Items.sapphire",2],["Items.mythril",1,"Items.ice",5]]
      },
      
      "subzero":{
         "SID":"subzero",
         "type":"Equip.GUN",
         "icon":272,
         "skin":13,
         "map":[30],
         "HP":[0],
         "attack":[0,5,10,20,30],
         "defence":[0],
         "magicAttack":[10,20,30,45,60],
         "magicDefence":[10,10,15,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50],
            "burn":[20, 40, 60, 80, 100]
         },
         "element":"Element.ICE",
         "statusEffect":"Status.FREEZE",
         "statusChance":[5,10,15,20,25],
         "statusDegree":[1,1,1,1,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.CAST","Spells.glacialglaive",0.25],null,["Equip.STATUS","Status.CHARGE",1,0.2]],
         "materials":[["Items.floppy",1],["Items.water",2,"Items.spring",2],["Summons.FlybotBlue",1,"Items.spring",2],["Items.floppy",52]]
      },
      
      "vortexcannon":{
         "SID":"vortexcannon",
         "type":"Equip.GUN",
         "icon":274,
         "skin":14,
         "map":[30],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,5,10,10],
         "magicAttack":[25,40,55,65,90],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[-10],
         "evade":[-10],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "weight":[20, 40, 60, 80, 100],
            "stagger":[20, 40, 60, 80, 100]
         },
         "element":"Element.WIND",
         "statusEffect":"Status.DISPEL",
         "statusChance":[20,30,40,40,50],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.WIND"],null,["Equip.CAST","Spells.whirlwind",0.66],null,["Equip.COUNTER","Spells.airwave"]],
         "materials":[["Items.pipe",2],["Items.steel",4],["Items.steel",16,"Items.gear",4],["Items.cpu",2,"Items.steel",60]]
      },
      
      "chainsawgun":{
         "SID":"chainsawgun",
         "type":"Equip.GUN",
         "icon":275,
         "skin":15,
         "map":[30],
         "HP":[0],
         "MP":[0],
         "attack":[40,60,80,100,120],
         "defence":[0],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.SCARE","Foe.TREES"],["Equip.BOOST","Element.NONE"],["Equip.CAST","Spells.sawblade",1],null,["Equip.IGNORE_BUFFS"]],
         "materials":[["Items.gear",1],["Items.gear",3],["Items.gear",6,"Items.spike",8],["Items.diamond",1,"Items.gear",6]]
      },
      
      "nitrobomber":{
         "SID":"nitrobomber",
         "type":"Equip.GUN",
         "icon":271,
         "skin":16,
         "map":[30],
         "HP":[0],
         "attack":[5,5,10,20,30],
         "defence":[0,0,0,5,10],
         "magicAttack":[10,25,40,55,70],
         "magicDefence":[0,0,0,5,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.STAGGER",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.CAST","Spells.nitro",0.44],null,["Equip.IGNORE_BUFFS"]],
         "materials":[["Items.bomb",2],["Items.powder",5,"Items.bomb",2],["Items.cpu",3,"Items.bomb",5],["Items.plutonium",1,"Items.bomb",5]]
      },
      
      "desertscorpion":{
         "SID":"desertscorpion",
         "type":"Equip.GUN",
         "icon":289,
         "skin":17,
         "map":[30],
         "HP":[0,5,5,10,10],
         "attack":[10,20,30,40,50],
         "defence":[0,5,10,15,20],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wet":[20, 40, 60, 80, 100],
            "fire":[10, 20, 30, 40, 50]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.DRY",
         "statusChance":[50,60,70,85,100],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.CAST","Spells.sanddune",0.25],null,["Equip.SUMMON","Spells.sandstorm",0.66]],
         "materials":[["Items.turd",4],["Items.amber",1],["Items.kevlar",1,"Items.amber",2],["Items.kevlar",4,"Items.turd",36]]
      },
      
      "accelerator":{
         "SID":"accelerator",
         "type":"Equip.GUN",
         "icon":290,
         "skin":18,
         "map":[30],
         "HP":[0],
         "attack":[10,20,30,40,55],
         "defence":[0],
         "magicAttack":[10,20,30,40,55],
         "magicDefence":[0],
         "accuracy":[0,5,10,10,15],
         "evade":[0,5,10,10,15],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.BAD_LUCK",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.CAST","Spells.slowdown",0.33],null,["Equip.SUMMON","Spells.speedup",0.66],null,["Equip.STATUS","Status.GOOD_LUCK",2,0.3]],
         "materials":[["Items.gear",1],["Items.gear",2,"Items.spring",2],["Items.cpu",2,"Items.gear",2,"Items.spring",2],["Items.plutonium",1,"Items.gear",2,"Items.spring",4]]
      },
      
      "supersnipe":{
         "SID":"supersnipe",
         "type":"Equip.GUN",
         "icon":276,
         "skin":19,
         "map":[30],
         "HP":[0],
         "MP":[0],
         "attack":[15,30,40,50,60],
         "defence":[0],
         "magicAttack":[0,5,10,20,30],
         "magicDefence":[0],
         "accuracy":[25,30,35,40,50],
         "evade":[0,5,10,15,20],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "weak":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.DEATH",
         "statusChance":[10,15,15,15,20],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.WIND"],null,["Equip.SUMMON","Spells.lockon",1],null,["Equip.CAST","Spells.geometry",0.2]],
         "materials":[["Items.floppy",1],["Items.pipe",4],["Items.cpu",2,"Items.glass",3],["Items.gamechild",1,"Items.cpu",2]]
      },
      
      "greengoliath":{
         "SID":"greengoliath",
         "type":"Equip.GUN",
         "icon":280,
         "skin":20,
         "map":[30],
         "HP":[0],
         "MP":[0],
         "attack":[25,35,50,75,100],
         "defence":[0],
         "magicAttack":[25,35,50,75,100],
         "magicDefence":[0],
         "accuracy":[-10],
         "evade":[-10],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "weak":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.TIRED",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.STATUS","Status.TIRED",1,0.5],["Equip.BOOST","Element.BIO"],null,null,["Equip.CAST","Spells.bamboo2",0.5]],
         "materials":[["Items.herb",4],["Items.floppy",2],["Items.cpu",1,"Items.kevlar",1,"Items.herb",12],["Items.titanium",1,"Items.cpu",1]]
      },
      
      "flametitan":{
         "SID":"flametitan",
         "type":"Equip.GUN",
         "icon":285,
         "skin":21,
         "map":[30],
         "HP":[0,0,0,5,10],
         "attack":[5,10,15,20,25],
         "defence":[0],
         "magicAttack":[20,35,55,70,90],
         "magicDefence":[0],
         "accuracy":[-10],
         "evade":[-10],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "weight":[20, 40, 60, 80, 100]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.DRY",
         "statusChance":[50,65,80,90,100],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.FIRE"],null,["Equip.STATUS","Status.HEAVY",2,0.5]],
         "materials":[["Items.pipe",2],["Items.pipe",8],["Items.scales",1,"Items.pipe",6],["Items.scales",2,"Summons.SpriteFire",1]]
      },
      
      "fairybow":{
         "SID":"fairybow",
         "type":"Equip.BOW",
         "icon":309,
         "skin":2,
         "map":[56],
         "HP":[0],
         "attack":[15,25,35,50,65],
         "defence":[5,5,10,10,15],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bio":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50]
         },
         "element":"Element.BIO",
         "statusEffect":"Status.POISON",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.CAST","Spells.razorleaf",0.5],null,["Equip.SUMMON","Spells.lumber",1]],
         "materials":[["Items.wood",2],["Items.wood",4,"Items.herb",1],["Items.emerald",1,"Items.virus",3,"Items.root",10],["Items.emerald",3,"Items.opal",3,"Items.virus",3]]
      },
      
      "emeraldcyclone":{
         "SID":"emeraldcyclone",
         "type":"Equip.BOW",
         "icon":303,
         "skin":3,
         "map":[56],
         "HP":[0],
         "attack":[10,20,30,45,60],
         "defence":[0],
         "magicAttack":[10,20,30,45,60],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0,5,5,10,15],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "tired":[20, 40, 60, 80, 100]
         },
         "element":"Element.WIND",
         "statusEffect":"Status.DISPEL",
         "statusChance":[20,30,40,40,50],
         "statusDegree":[1,1,1,1,1],
         "specials":[["Equip.BOOST","Element.WIND"],null,["Equip.SUMMON","Spells.whirlwind",1.5],null,["Equip.COUNTER","Spells.piercingshot"]],
         "materials":[["Items.cactus",2],["Items.cactus",8],["Items.emerald",3,"Items.cactus",16],["Items.emerald",10,"Items.leather",8]]
      },
      
      "crimsondragon":{
         "SID":"crimsondragon",
         "type":"Equip.BOW",
         "icon":312,
         "skin":4,
         "map":[56],
         "HP":[0],
         "MP":[0],
         "attack":[15,30,40,50,65],
         "defence":[0],
         "magicAttack":[15,30,40,50,65],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "water":[-30],
            "ice":[10, 20, 30, 40, 50]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.BURN",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.FIRE"],null,["Equip.CAST","Spells.firecrystals",0.33],null,["Equip.SUMMON","Spells.firespin",1]],
         "materials":[["Items.magma",1],["Items.magma",3],["Items.scales",1,"Items.magma",1],["Items.ruby",10,"Items.magma",2]]
      },
      
      "coldsteel":{
         "SID":"coldsteel",
         "type":"Equip.BOW",
         "icon":308,
         "skin":5,
         "map":[56],
         "HP":[0],
         "MP":[0],
         "attack":[15,30,40,50,65],
         "defence":[0,5,5,10,10],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[-10],
         "resistance":{
            "fire":[-30],
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100]
         },
         "element":"Element.ICE",
         "statusEffect":"Status.FREEZE",
         "statusChance":[10,15,20,25,30],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.CAST","Spells.iceshard",0.5],null,["Equip.COUNTER","Spells.arrowcut"]],
         "materials":[["Items.steel",1],["Items.steel",2,"Items.water",2],["Summons.CreepIcicle",1,"Items.water",5],["Items.sapphire",10,"Items.steel",15]]
      },
      
      "thorshammer":{
         "SID":"thorshammer",
         "type":"Equip.BOW",
         "icon":314,
         "skin":6,
         "map":[56],
         "HP":[0],
         "MP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[10,20,30,45,60],
         "magicDefence":[0],
         "accuracy":[10,15,15,15,20],
         "evade":[0],
         "resistance":{
            "weight":[20, 40, 60, 80, 100],
            "thunder":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.STUN",
         "statusChance":[10,15,15,15,20],
         "statusDegree":[1,1,1,1,1],
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.SUMMON","Spells.sparkarrow2",0.66],null,["Equip.COUNTER","Spells.piercingshot"]],
         "materials":[["Items.seashell",2],["Items.seashell",8],["Items.topaz",3,"Items.amber",6],["Items.topaz",10,"Items.amber",10]]
      },
      
      "gaiasgift":{
         "SID":"gaiasgift",
         "type":"Equip.BOW",
         "icon":305,
         "skin":7,
         "map":[56],
         "HP":[5,5,10,15,20],
         "MP":[0],
         "attack":[0,5,10,20,30],
         "defence":[5,5,5,5,10],
         "magicAttack":[0,5,10,20,30],
         "magicDefence":[5,5,5,5,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50]
         },
         "element":"Element.EARTH",
         "statusEffect":"Status.HEAVY",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.EARTH"],null,["Equip.BOOST_STATUS"],["Equip.STATUS","Status.REGEN",2,0.2],["Equip.BOOST_HEALING"]],
         "materials":[["Items.turd",3],["Items.gems",4],["Items.emerald",2,"Summons.BitPoison",1],["Items.emerald",3,"Items.opal",3]]
      },
      
      "irontusk":{
         "SID":"irontusk",
         "type":"Equip.BOW",
         "icon":295,
         "skin":8,
         "map":[56],
         "HP":[0],
         "MP":[0],
         "attack":[25,35,50,70,90],
         "defence":[0,5,10,10,10],
         "magicAttack":[0],
         "magicDefence":[0,5,10,10,10],
         "accuracy":[-10],
         "evade":[-10],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.STAGGER",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[1,1,1,1,1],
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.CAST","Spells.energybomb",0.5],null,["Equip.COUNTER","Spells.bowwhack"]],
         "materials":[["Items.iron",2],["Items.steel",3],["Items.silver",5,"Items.steel",12],["Items.titanium",1,"Items.silver",5]]
      },
      
      "chieftainshorns":{
         "SID":"chieftainshorns",
         "type":"Equip.BOW",
         "icon":296,
         "skin":9,
         "map":[56],
         "HP":[5,10,15,20,25],
         "MP":[0],
         "attack":[0,5,10,20,30],
         "defence":[0,5,5,5,10],
         "magicAttack":[0,5,10,20,30],
         "magicDefence":[0,5,5,5,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50]
         },
         "element":"Element.WIND",
         "statusEffect":"Status.LIGHT",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.MAGIC_DEFENCE",
         "buffChance":[60,70,80,90,100],
         "buffDegree":[-20,-25,-25,-25,-30],
         "specials":[["Equip.BOOST","Element.WIND"],null,["Equip.SUMMON","Spells.remedy",1],null,["Equip.COUNTER","Spells.arrowcut"]],
         "materials":[["Items.feather",2],["Items.claw",2],["Items.spike",4,"Items.claw",6],["Items.opal",4,"Items.spike",4,"Items.feather",6]]
      },
      
      "juggernaut":{
         "SID":"juggernaut",
         "type":"Equip.BOW",
         "icon":301,
         "skin":10,
         "map":[56],
         "HP":[0,5,5,10,10],
         "MP":[0],
         "attack":[10,20,30,40,50],
         "defence":[5,10,15,20,25],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[-10],
         "resistance":{
            "dispel":[20, 40, 60, 80, 100],
            "stagger":[20, 40, 60, 80, 100],
            "stun":[20, 40, 60, 80, 100]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.DISPEL",
         "statusChance":[30,50,60,70,80],
         "statusDegree":[1,1,1,1,1],
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.INTIMIDATE"],null,["Equip.CAST","Spells.blast",0.5]],
         "materials":[["Items.bomb",2],["Items.powder",3,"Items.bomb",3],["Items.kevlar",2,"Items.cpu",1],["Items.titanium",1,"Items.powder",10,"Items.bomb",10]]
      },
      
      "aquamarine":{
         "SID":"aquamarine",
         "type":"Equip.BOW",
         "icon":313,
         "skin":11,
         "map":[56],
         "HP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0],
         "magicAttack":[20,30,40,50,60],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50]
         },
         "element":"Element.WATER",
         "statusEffect":"Status.CHILL",
         "statusChance":[30,40,50,60,70],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.COUNTER","Spells.aquaarrow"],null,["Equip.CAST","Spells.bubblering",0.33]],
         "materials":[["Items.snowball",5],["Items.ice",2],["Items.sapphire",3,"Summons.BitWater",1],["Items.moonpearl",2,"Items.sapphire",2]]
      },
      
      "eagleeye":{
         "SID":"eagleeye",
         "type":"Equip.BOW",
         "icon":306,
         "skin":12,
         "map":[56],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[30,45,60,75,100],
         "evade":[0,5,10,15,20],
         "resistance":{
            "stagger":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100],
            "weak":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "elementDegree":100,
         "specials":[["Equip.COUNTER","Spells.piercingshot"],null,["Equip.STATUS","Status.GOOD_LUCK",2,0.3],null,["Equip.SUMMON","Spells.bind",1]],
         "materials":[["Items.gear",1],["Items.gear",3],["Items.cpu",1,"Items.gear",5,"Items.pipe",5],["Items.gamechild",1,"Items.cpu",1]]
      },
      
      "thestinger":{
         "SID":"thestinger",
         "type":"Equip.BOW",
         "icon":302,
         "skin":13,
         "map":[56],
         "HP":[0],
         "attack":[25,40,55,65,90],
         "defence":[0],
         "magicAttack":[-20],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "bio":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50],
            "burn":[-30]
         },
         "element":"Element.BIO",
         "statusEffect":"Status.STUN",
         "statusChance":[10,20,30,40,50],
         "statusDegree":[1,1,1,1,1],
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.CAST","Spells.vines",0.33],null,["Equip.SUMMON","Spells.razorleaf2",0.66]],
         "materials":[["Items.cactus",2],["Items.cactus",8],["Items.root",12,"Items.virus",10],["Summons.ChomperLeafy",1,"Items.emerald",4]]
      },
      
      "thedeceased":{
         "SID":"thedeceased",
         "type":"Equip.BOW",
         "icon":304,
         "skin":14,
         "map":[56],
         "HP":[0],
         "MP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "weak":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.DOOM",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[3,3,3,3,2],
         "buffEffect":"Stats.DEFENCE",
         "buffChance":[30,40,50,60,70],
         "buffDegree":[-20,-20,-25,-25,-30],
         "specials":[null,null,["Equip.SUMMON","Summons.HandZombie",0.8],null,["Equip.BOOST_DEBUFFS"]],
         "materials":[["Items.claw",1],["Items.claw",2],["Items.spike",3,"Items.virus",2],["Items.darkmatter",1,"Items.spike",5]]
      },
      
      "blackwidow":{
         "SID":"blackwidow",
         "type":"Equip.BOW",
         "icon":311,
         "skin":15,
         "map":[56],
         "HP":[0],
         "attack":[15,25,35,55,70],
         "defence":[0],
         "magicAttack":[0,5,10,20,30],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.CURSE",
         "statusChance":[20,30,40,50,60],
         "statusDegree":[5,5,5,5,5],
         "specials":[["Equip.BOOST","Element.DARK"],["Equip.INTIMIDATE"],["Equip.COUNTER","Spells.arrowcut"],null,["Equip.SUMMON","Spells.spiders",0.66]],
         "materials":[["Items.powder",2],["Items.powder",3,"Items.claw",2],["Items.rune",2,"Items.virus",2],["Items.darkmatter",1,"Items.virus",2]]
      },
      
      "sharanga":{
         "SID":"sharanga",
         "type":"Equip.BOW",
         "icon":300,
         "skin":16,
         "map":[56],
         "HP":[0,5,5,10,10],
         "attack":[15,30,45,60,80],
         "defence":[0],
         "magicAttack":[15,30,45,60,80],
         "magicDefence":[0],
         "accuracy":[0,5,10,15,20],
         "evade":[0,5,10,15,20],
         "resistance":{
            "weight":[20, 40, 60, 80, 100],
            "wet":[20, 40, 60, 80, 100],
            "dispel":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.DISPEL",
         "statusChance":[20,30,40,40,50],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[null,null,["Equip.CAST","Spells.geometry",0.2]],
         "materials":[["Items.geode",2],["Items.geode",6],["Items.opal",2,"Items.geode",4],["Items.diamond",1,"Items.opal",1]]
      },
      
      "heavensvoice":{
         "SID":"heavensvoice",
         "type":"Equip.BOW",
         "icon":297,
         "skin":17,
         "map":[56],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[0,5,10,20,30],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "weight":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100],
            "holy":[20, 40, 60, 80, 100]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.SYPHON",
         "statusChance":[20,30,40,40,50],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.HOLY"],null,["Equip.CAST","Spells.judgement",0.33],null,["Equip.COUNTER","Spells.piercingshot"]],
         "materials":[["Items.feather",2],["Items.gems",5],["Items.gold",2,"Items.ruby",1],["Items.grail",1,"Items.gold",2,"Items.ruby",1]]
      },
      
      "fenrirsjaw":{
         "SID":"fenrirsjaw",
         "type":"Equip.BOW",
         "icon":315,
         "skin":18,
         "map":[56],
         "HP":[0],
         "attack":[10,20,30,40,55],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[0,5,5,10,10],
         "evade":[0,5,5,10,10],
         "resistance":{
            "death":[20, 40, 60, 80, 100],
            "poison":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.TIRED",
         "statusChance":[20,30,40,40,50],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.DRAIN_HP"],["Equip.BOOST","Element.NONE"],["Equip.IGNORE_BUFFS"],null,["Equip.SUMMON","Summons.FallenLost",0.3]],
         "materials":[["Items.spring",2],["Items.spring",8],["Items.silver",6],["Items.mythril",1,"Items.spring",5]]
      },
      
      "alchemistsbow":{
         "SID":"alchemistsbow",
         "type":"Equip.BOW",
         "icon":310,
         "skin":19,
         "map":[56],
         "HP":[0],
         "attack":[0,5,15,25,35],
         "defence":[0],
         "magicAttack":[0,5,15,25,35],
         "magicDefence":[0],
         "accuracy":[-5],
         "evade":[0],
         "resistance":{
            "syphon":[20, 40, 60, 80, 100],
            "poison":[20, 40, 60, 80, 100],
            "burn":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.RANDOM",
         "statusChance":[60,70,80,90,100],
         "statusDegree":[1,1,1,1,1],
         "buffEffect":"Stats.NONE",
         "specials":[null,null,null,null,["Equip.BOOST_STATUS"]],
         "materials":[["Items.glass",2],["Items.glass",8],["Summons.SlimeSand",1,"Summons.SlimeWater",1,"Summons.SlimeMouse",1],["Items.emerald",3,"Items.sapphire",3,"Items.ruby",3]]
      },
      
      "angelwing":{
         "SID":"angelwing",
         "type":"Equip.BOW",
         "icon":307,
         "skin":20,
         "map":[56],
         "HP":[0],
         "MP":[0],
         "attack":[10,20,25,35,50],
         "defence":[0],
         "magicAttack":[10,20,25,35,50],
         "magicDefence":[0],
         "accuracy":[0,0,0,5,15],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "weak":[20, 40, 60, 80, 100]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.WEAKEN",
         "statusChance":[20,30,40,50,60],
         "statusDegree":[5,5,5,5,5],
         "specials":[["Equip.BOOST","Element.HOLY"],null,["Equip.SUMMON","Spells.arrowrain",0.66],null,null],
         "materials":[["Items.feather",1,"Items.butterflywing",1],["Items.feather",3,"Items.butterflywing",3],["Items.silver",7,"Items.feather",2],["Items.diamond",1,"Items.silver",5]]
      },
      
      "earthswhisper":{
         "SID":"earthswhisper",
         "type":"Equip.BOW",
         "icon":299,
         "skin":21,
         "map":[56],
         "HP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0,5,10,15,20],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bio":[20, 40, 60, 80, 100],
            "earth":[20, 40, 60, 80, 100]
         },
         "element":"Element.EARTH",
         "statusEffect":"Status.HEAVY",
         "statusChance":[20,30,40,40,50],
         "statusDegree":[2,2,2,2,2],
         "buffEffect":"Stats.NONE",
         "specials":[["Equip.BOOST","Element.EARTH"],null,["Equip.SUMMON","Spells.remedy",1.25],null,["Equip.CAST","Spells.cataclysmiccut",0.33]],
         "materials":[["Items.root",2],["Items.root",4,"Items.wood",4],["Items.opal",1,"Items.rune2",1],["Items.opal",4,"Items.rune2",3]]
      },
      
      "regalturtle":{
         "SID":"regalturtle",
         "type":"Equip.BOW",
         "icon":298,
         "skin":22,
         "map":[56],
         "HP":[10,15,20,30,40],
         "MP":[0],
         "attack":[0,5,5,10,10],
         "defence":[10,15,20,30,40],
         "magicAttack":[-50],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50]
         },
         "element":"Element.HOLY",
         "specials":[["Equip.BOOST_HEALING"],null,["Equip.STATUS","Status.DEFEND",1,0.33],null,["Equip.BOOST","Element.HOLY"]],
         "materials":[["Items.seashell",1,"Items.iron",1],["Items.buckle",4],["Summons.CreepRed",1],["Items.grail",1,"Items.gold",1,"Items.silver",1]]
      },
      
      "steelbuckler":{
         "SID":"steelbuckler",
         "type":"Equip.TOYS",
         "icon":323,
         "skin":1,
         "map":[56],
         "HP":[0,5,5,5,10],
         "MP":[0],
         "attack":[10,20,35,50,65],
         "defence":[10,15,20,25,30],
         "magicAttack":[0,10,10,20,30],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "weight":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":null,
         "specials":[["Equip.BOOST","Element.NONE"],null,["Equip.COUNTER","Spells.rapidslash2"],null,null],
         "materials":[["Items.steel",1],["Items.steel",3],["Items.rune2",2,"Items.silver",6],["Items.titanium",1,"Items.silver",6]]
      },
      
      "elvenshield":{
         "SID":"elvenshield",
         "type":"Equip.TOYS",
         "icon":324,
         "skin":2,
         "map":[56],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0,5,5,10,15],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0,5,5,10,15],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bio":[20, 40, 60, 80, 100],
            "earth":[20, 40, 60, 80, 100],
            "holy":[20, 40, 60, 80, 100]
         },
         "element":"Element.EARTH",
         "statusEffect":"Status.BAD_LUCK",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,3],
         "specials":[["Equip.BOOST","Element.EARTH"],null,["Equip.SUMMON","Spells.fairybomb",1.5],["Equip.CAST","Spells.stonefist",0.35],["Equip.STATUS","Status.GOOD_LUCK",2,0.3]],
         "materials":[["Items.wood",2],["Items.wood",8],["Items.rune2",2,"Items.silver",3],["Items.mythril",1,"Items.silver",1]]
      },
      
      "vikingbuckler":{
         "SID":"vikingbuckler",
         "type":"Equip.TOYS",
         "icon":322,
         "skin":3,
         "map":[56],
         "HP":[0],
         "attack":[25,35,50,70,90],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.STAGGER",
         "statusChance":[20,30,40,50,60],
         "statusDegree":[1],
         "specials":[["Equip.STATUS","Status.BERSERK",1,2],null,["Equip.COUNTER","Spells.sworddance2"],null,["Equip.CAST","Spells.groundblade",0.33]],
         "materials":[["Items.wood",1,"Items.iron",1],["Items.wood",4,"Items.iron",4],["Items.rune2",4,"Items.wood",8],["Items.diamond",1,"Items.rune",2]]
      },
      
      "pixelpopper":{
         "SID":"pixelpopper",
         "type":"Equip.TOYS",
         "icon":321,
         "skin":4,
         "map":[56],
         "HP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "weight":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.RANDOM",
         "statusChance":[60,70,80,90,100],
         "statusDegree":[1],
         "specials":[["Equip.BOOST","Element.NONE"],null,["Equip.CAST","Spells.pixelfish",0.25],null,["Equip.SUMMON","Spells.pixelriceball",0.66]],
         "materials":[["Items.floppy",1],["Items.tape",8],["Items.cpu",1,"Items.tape",2],["Items.gamechild",2]]
      },
      
      "godlybook":{
         "SID":"godlybook",
         "type":"Equip.TOYS",
         "icon":325,
         "skin":5,
         "map":[56],
         "HP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0],
         "magicAttack":[20,30,40,50,60],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.CURSE",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,3],
         "specials":[["Equip.BOOST","Element.HOLY"],null,["Equip.CAST","Spells.talisman",0.5],null,["Equip.STATUS","Status.AUTOLIFE",1,0.3]],
         "materials":[["Items.leather",1],["Items.leather",3],["Items.gold",2,"Items.silver",2],["Items.grail",1,"Items.leather",3]]
      },
      
      "humanskull":{
         "SID":"humanskull",
         "type":"Equip.TOYS",
         "icon":327,
         "skin":6,
         "map":[56],
         "HP":[0],
         "attack":[0,10,20,30,40],
         "defence":[0],
         "magicAttack":[0,5,10,20,30],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "death":[20, 40, 60, 80, 100],
            "dark":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.BAD_LUCK",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,3],
         "buffEffect":"Stats.DEFENCE",
         "buffChance":[30,40,50,60,70],
         "buffDegree":[-20,-20,-25,-25,-30],
         "specials":[null,null,["Equip.SUMMON","Spells.death",1],null,["Equip.BOOST_DEBUFFS"]],
         "materials":[["Items.claw",1],["Items.claw",3],["Items.spike",4,"Items.claw",4],["Items.moonpearl",1,"Items.rune",3]]
      },
      
      "devilssunrise":{
         "SID":"devilssunrise",
         "type":"Equip.TOYS",
         "icon":332,
         "skin":7,
         "map":[56],
         "HP":[0],
         "attack":[25,35,50,70,90],
         "defence":[0,5,10,15,20],
         "magicAttack":[-30],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[-10],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "dark":[20, 40, 60, 80, 100],
            "burn":[20, 40, 60, 80, 100]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.DOOM",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[3,3,3,3,2],
         "specials":[["Equip.BOOST","Element.DARK"],null,null,null,["Equip.CAST","Spells.blackspikes",0.5]],
         "materials":[["Items.iron",2],["Items.iron",4,"Items.shuriken",4],["Items.rune",2,"Items.shuriken",3],["Items.rune",5,"Summons.FallenBeheaded",1]]
      },
      
      "kingsguard":{
         "SID":"kingsguard",
         "type":"Equip.TOYS",
         "icon":333,
         "skin":8,
         "map":[56],
         "HP":[0],
         "attack":[15,25,40,55,70],
         "defence":[0,5,10,15,20],
         "magicAttack":[15,25,40,55,70],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[-30],
         "resistance":{
            "holy":[20, 40, 60, 80, 100],
            "dark":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100]
         },
         "element":"Element.HOLY",
         "statusEffect":"Status.NONE",
         "buffEffect":"Stats.ACCURACY",
         "buffChance":[30,40,50,60,70],
         "buffDegree":[-20,-20,-25,-25,-30],
         "specials":[["Equip.BOOST","Element.HOLY"],null,null,null,["Equip.STATUS","Status.BRAVE",1,0.3]],
         "materials":[["Items.buckle",1],["Items.buckle",3],["Items.gold",3,"Items.ruby",1],["Items.gold",7,"Summons.FallenCrucified",1]]
      },
      
      "masamune":{
         "SID":"masamune",
         "type":"Equip.TOYS",
         "icon":331,
         "skin":9,
         "map":[56],
         "HP":[-70],
         "attack":[100,125,150,175,200],
         "defence":[0],
         "magicAttack":[100,125,150,175,200],
         "magicDefence":[0],
         "accuracy":[10,15,20,25,30],
         "evade":[10,15,20,25,30],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "element":"Element.WIND",
         "statusEffect":"Status.NONE",
         "specials":[["Equip.BOOST","Element.WIND"],null,["Equip.COUNTER","Spells.backstab"],null,["Equip.CAST","Spells.tempest",0.3]],
         "materials":[["Items.shuriken",2],["Items.shuriken",8],["Items.gold",3,"Items.shuriken",16],["Items.mythril",1,"Items.shuriken",32]]
      },
      
      "leafshield":{
         "SID":"leafshield",
         "type":"Equip.TOYS",
         "icon":330,
         "skin":10,
         "map":[56],
         "HP":[0,0,5,10,20],
         "attack":[-50],
         "defence":[10,15,20,30,40],
         "magicAttack":[-50],
         "magicDefence":[10,15,20,30,40],
         "accuracy":[0],
         "evade":[20],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50]
         },
         "element":"Element.EARTH",
         "specials":[["Equip.BOOST_HEALING"],null,["Equip.SUMMON","Summons.IdolWood",0.5],null,["Equip.STATUS","Status.REGEN",2,0.2]],
         "materials":[["Items.herb",2],["Items.herb",8,"Items.root",2],["Items.root",10,"Items.emerald",2],["Items.emerald",6,"Items.opal",2]]
      },
      
      "dogsausage":{
         "SID":"dogsausage",
         "type":"Equip.TOYS",
         "icon":326,
         "skin":11,
         "map":[56],
         "HP":[0],
         "attack":[5,10,20,30,40],
         "defence":[0],
         "magicAttack":[15,25,40,55,75],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[20],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "burn":[20, 40, 60, 80, 100],
            "freeze":[20, 40, 60, 80, 100]
         },
         "element":"Element.FIRE",
         "statusEffect":"Status.BURN",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.SCARE","Foe.BEASTS"],["Equip.BOOST","Element.FIRE"],["Equip.BOOST_FOOD"],null,["Equip.BOOST_BUFFS"]],
         "materials":[["Items.beer",1],["Items.crisps",2],["Items.chips",1,"Summons.DogTanuki",1],["Items.chips",12,"Items.beer",8]]
      },
      
      "bloodbank":{
         "SID":"bloodbank",
         "type":"Equip.TOYS",
         "icon":339,
         "skin":12,
         "map":[56],
         "HP":[10,15,20,25,30],
         "attack":[20,30,45,60,75],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[0,5,5,10,10],
         "evade":[0],
         "resistance":{
            "poison":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100],
            "weak":[20, 40, 60, 80, 100]
         },
         "element":"Element.BIO",
         "statusEffect":"Status.POISON",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.DRAIN_HP"],null,["Equip.STATUS","Status.REGEN",2,0.3]],
         "materials":[["Items.raspberries",2],["Items.blueberries",4],["Items.cloudberries",4,"Items.virus",4],["Items.darkmatter",1,"Items.virus",2]]
      },
      
      "bookofspells":{
         "SID":"bookofspells",
         "type":"Equip.TOYS",
         "icon":335,
         "skin":13,
         "map":[56],
         "HP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[10,20,35,50,65],
         "magicDefence":[10,20,30,40,50],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50]
         },
         "element":"Element.ICE",
         "statusEffect":"Status.FREEZE",
         "statusChance":[30,40,50,60,75],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.CAST","Spells.iceshard",0.5],null,["Equip.SUMMON","Spells.hail",0.66]],
         "materials":[["Items.snowball",5],["Items.snowball",25],["Items.ice",20,"Items.water",20],["Items.diamond",1,"Items.sapphire",2]]
      },
      
      "turtleshell":{
         "SID":"turtleshell",
         "type":"Equip.TOYS",
         "icon":334,
         "skin":14,
         "map":[56],
         "HP":[0,5,5,10,10],
         "attack":[20,35,50,65,80],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "wet":[20, 40, 60, 80, 100],
            "fire":[10, 20, 30, 40, 50]
         },
         "element":"Element.WATER",
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.CAST","Spells.pouringpike",0.4],null,["Equip.BOOST_FOOD"]],
         "materials":[["Items.seashell",2],["Items.seashell",7,"Items.tape",1],["Summons.CreepGreen",1,"Items.seashell",12],["Items.moonpearl",2,"Items.sapphire",2]]
      },
      
      "icecreamsandwich":{
         "SID":"icecreamsandwich",
         "type":"Equip.TOYS",
         "icon":336,
         "skin":15,
         "map":[56],
         "HP":[0,5,5,10,15],
         "attack":[0],
         "defence":[5,10,15,20,30],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[5,10,15,20,30],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "wet":[20, 40, 60, 80, 100],
            "fire":[10, 20, 30, 40, 50]
         },
         "element":"Element.ICE",
         "statusEffect":"Status.CHILL",
         "statusChance":[50,60,70,80,100],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST_BUFFS"],["Equip.BOOST","Element.ICE"],["Equip.CAST","Spells.wafer",0.5],null,["Equip.BOOST_HEALING"]],
         "materials":[["Items.snowball",2,"Items.raspberries",1],["Items.cupcake",2,"Items.snowball",4],["Items.moonpearl",1,"Summons.SlimeIcecream",1],["Items.moonpearl",1,"Summons.SlimeBigIcecream",1]]
      },
      
      "neonlightbulb":{
         "SID":"neonlightbulb",
         "type":"Equip.TOYS",
         "icon":338,
         "skin":16,
         "map":[56],
         "HP":[0],
         "attack":[10,20,30,40,50],
         "defence":[0],
         "magicAttack":[10,20,30,40,50],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0,10,20,30,40],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50],
            "earth":[-30]
         },
         "element":"Element.THUNDER",
         "statusEffect":"Status.STUN",
         "statusChance":[10,20,30,40,50],
         "statusDegree":[2,2,2,2,2],
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.CAST","Spells.plasmacage",0.25],null,["Equip.COUNTER","Spells.laserblade"]],
         "materials":[["Items.spring",2],["Items.glass",5],["Items.topaz",2,"Items.glass",20,"Items.plastic",2],["Items.topaz",7,"Summons.BatThunder",1]]
      },
      
      "riotshield":{
         "SID":"riotshield",
         "type":"Equip.TOYS",
         "icon":328,
         "skin":17,
         "map":[56],
         "HP":[30,35,40,45,50],
         "attack":[10,20,35,50,65],
         "defence":[10,20,30,40,50],
         "magicAttack":[0],
         "magicDefence":[10,20,30,40,50],
         "accuracy":[0],
         "evade":[-50],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100]
         },
         "element":"Element.DARK",
         "statusEffect":"Status.WEAKEN",
         "statusChance":[30,50,70,85,100],
         "statusDegree":[2,2,2,2,3],
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.COUNTER","Spells.backstab"],null,["Equip.SUMMON","Spells.bind",1]],
         "materials":[["Items.bomb",2],["Items.plastic",3],["Items.kevlar",2,"Items.plastic",15],["Items.rune",2,"Items.cpu",1,"Items.kevlar",1]]
      },
      
      "banditblade":{
         "SID":"banditblade",
         "type":"Equip.TOYS",
         "icon":341,
         "skin":18,
         "map":[56],
         "HP":[0],
         "attack":[10,20,30,45,60],
         "defence":[0],
         "magicAttack":[10,20,30,45,60],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[5,10,15,20,25],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100],
            "stagger":[20, 40, 60, 80, 100]
         },
         "element":"Element.WATER",
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.STEAL"],null,["Equip.STATUS","Status.HASTE",2,0.2]],
         "materials":[["Items.buckle",1],["Items.buckle",2,"Items.leather",1],["Items.silver",4,"Items.leather",4],["Items.moonpearl",2,"Items.silver",4,"Items.buckle",8]]
      },
      
      "powerpaw":{
         "SID":"powerpaw",
         "type":"Equip.TOYS",
         "icon":329,
         "skin":19,
         "map":[56],
         "HP":[0,5,5,10,10],
         "attack":[20,35,45,60,75],
         "defence":[0],
         "magicAttack":[0,10,20,30,40],
         "magicDefence":[0],
         "accuracy":[5,10,15,20,25],
         "evade":[0],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50]
         },
         "element":"Element.BOMB",
         "statusEffect":"Status.STAGGER",
         "statusChance":[30,35,40,45,50],
         "statusDegree":[1],
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.CAST","Spells.bullet",0.66],null,["Equip.SUMMON","Summons.PixelIdol",0.8]],
         "materials":[["Items.spring",1,"Items.tape",1],["Items.floppy",2,"Items.tape",2],["Items.cpu",1,"Summons.IdolMetal",1],["Items.gamechild",1,"Items.cpu",1,"Items.floppy",2]]
      },
      
      "starhammer":{
         "SID":"starhammer",
         "type":"Equip.TOYS",
         "icon":337,
         "skin":20,
         "map":[56],
         "HP":[0],
         "attack":[50,70,90,110,130],
         "defence":[0,5,10,15,20],
         "magicAttack":[50,70,90,110,130],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50]
         },
         "element":"Element.NONE",
         "statusEffect":"Status.DISPEL",
         "statusChance":[20,40,60,80,100],
         "statusDegree":[1],
         "specials":[["Equip.BOOST","Element.NONE"],null,["Equip.CAST","Spells.starpow",1],null,["Equip.SUMMON","Spells.luckystar2",1]],
         "materials":[["Items.lego",1,"Items.wood",10],["Items.lego",2,"Items.wood",20],["Items.grail",1,"Items.gold",5],["Items.starfragment",3,"Items.darkmatter",1]]
      },
      
      "bustersword":{
         "SID":"bustersword",
         "type":"Equip.TOYS",
         "icon":320,
         "skin":21,
         "map":[56],
         "HP":[0],
         "attack":[0,10,0,0,0],
         "defence":[0,0,5,0,0],
         "magicAttack":[0,0,10,5,0],
         "magicDefence":[0,0,0,5,0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[-30],
            "water":[-30]
         },
         "element":"Element.NONE",
         "specials":[],
         "materials":[["Items.wool",2],["Items.brick",4],["Items.turd",5],["Items.snowball",1]]
      },
      
      "captainshat":{
         "SID":"captainshat",
         "type":"Equip.HAT_MALE",
         "icon":345,
         "skin":2,
         "map":[3],
         "HP":[5,5,5,5,10],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0,0,0,5,10],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.BOOST_STATUS"]],
         "materials":[["Items.wool",1],["Items.feather",3,"Items.seashell",1],["Items.satin",1,"Items.seashell",6],["Items.moonpearl",1,"Items.rune2",1,"Items.feather",3]]
      },
      
      "scottishcap":{
         "SID":"scottishcap",
         "type":"Equip.HAT_MALE",
         "icon":348,
         "skin":3,
         "map":[4],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50],
            "death":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.STATUS","Status.BLESS",2,0.15],null,null,null,["Equip.DEFEND_STATUS","Status.BLESS",2]],
         "materials":[["Items.wool",1],["Items.silk",1],["Items.silk",4],["Items.opal",2,"Items.silk",1]]
      },
      
      "dragonhelm":{
         "SID":"dragonhelm",
         "type":"Equip.HAT_MALE",
         "icon":349,
         "skin":4,
         "map":[9],
         "HP":[0],
         "attack":[0,5,5,5,10],
         "defence":[5,10,15,20,25],
         "magicAttack":[0,5,5,5,10],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "burn":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.STATUS","Status.BRAVE",2,0.15]],
         "materials":[["Items.brick",2],["Items.magma",1,"Items.brick",1],["Items.topaz",1,"Items.magma",2],["Items.scales",1,"Items.topaz",1]]
      },
      
      "deathmask":{
         "SID":"deathmask",
         "type":"Equip.HAT_MALE",
         "icon":361,
         "skin":5,
         "map":[10],
         "HP":[0],
         "attack":[15,20,30,40,50],
         "defence":[0],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[-25],
         "evade":[-25],
         "resistance":{
            "fire":[-30],
            "burn":[-30]
         },
         "specials":[],
         "materials":[["Items.wood",1],["Items.wood",5],["Items.spike",2,"Items.root",4],["Items.darkmatter",1]]
      },
      
      "spacehelmet":{
         "SID":"spacehelmet",
         "type":"Equip.HAT_MALE",
         "icon":359,
         "skin":6,
         "map":[27],
         "HP":[5,5,10,10,15],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "poison":[20, 40, 60, 80, 100],
            "burn":[20, 40, 60, 80, 100],
            "wet":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.STATUS","Status.REGEN",1,0.5]],
         "materials":[["Items.glass",1],["Items.glass",3],["Items.plastic",8,"Items.satin",1],["Items.cpu",1,"Items.plastic",2]]
      },
      
      "headband":{
         "SID":"headband",
         "type":"Equip.HAT_MALE",
         "icon":360,
         "skin":7,
         "map":[11],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,5,10,10],
         "magicAttack":[0],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[5,10,15,20,25],
         "evade":[5,10,15,20,25],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.STATUS","Status.BRAVE",2,0.5],null,["Equip.DEFEND_BUFF","Stats.MAGIC_DEFENCE",80]],
         "materials":[["Items.wool",2],["Items.silk",1],["Items.satin",1,"Items.silk",3],["Items.satin",6]]
      },
      
      "cardboardbox":{
         "SID":"cardboardbox",
         "type":"Equip.HAT_MALE",
         "icon":351,
         "skin":8,
         "map":[5],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,5,10,10],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "dispel":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_BUFFS",10],null,null,null,["Equip.BOOST_DEBUFFS",10]],
         "materials":[["Items.wool",1],["Items.floppy",1],["Items.cpu",1],["Items.cpu",2,"Items.floppy",1]]
      },
      
      "puppyhat":{
         "SID":"puppyhat",
         "type":"Equip.HAT_MALE",
         "icon":363,
         "skin":9,
         "map":[29],
         "HP":[0,0,5,5,10],
         "attack":[0],
         "defence":[0],
         "magicAttack":[5,5,10,15,20],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "freeze":[20, 40, 60, 80, 100],
            "stun":[20, 40, 60, 80, 100],
            "dispel":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_CATCH"],null,["Equip.SUMMON","Summons.DogMaxi",0.5]],
         "materials":[["Items.fur",1],["Items.fur",2,"Items.crisps",1],["Items.satin",1,"Items.buckle",1,"Items.fur",8],["Items.lego",1,"Items.burger",2]]
      },
      
      "armyhelmet":{
         "SID":"armyhelmet",
         "type":"Equip.HAT_MALE",
         "icon":356,
         "skin":10,
         "map":[18],
         "HP":[0],
         "attack":[0],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100],
            "stun":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.SUMMON","Spells.medipack",1]],
         "materials":[["Items.plastic",1],["Items.plastic",2],["Items.cpu",1],["Items.lego",1,"Items.plastic",4]]
      },
      
      "gasmask":{
         "SID":"gasmask",
         "type":"Equip.HAT_MALE",
         "icon":352,
         "skin":11,
         "map":[25],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[-10],
         "evade":[-10],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "poison":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.SUMMON","Spells.poisongas",0.66]],
         "materials":[["Items.glass",1],["Items.glass",2,"Items.plastic",1],["Items.plastic",1,"Items.cpu",1],["Items.cpu",2,"Items.plastic",1]]
      },
      
      "spelunkinghat":{
         "SID":"spelunkinghat",
         "type":"Equip.HAT_MALE",
         "icon":355,
         "skin":12,
         "map":[24],
         "HP":[0],
         "MP":[0],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[20,25,30,35,40],
         "evade":[0,5,5,10,10],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.BOOST_CATCH"],null,null],
         "materials":[["Items.wool",1],["Items.silk",1,"Items.wool",2],["Items.satin",2,"Items.buckle",1],["Items.satin",6,"Items.buckle",2]]
      },
      
      "genjihelmet":{
         "SID":"genjihelmet",
         "type":"Equip.HAT_MALE",
         "icon":354,
         "skin":14,
         "map":[26],
         "HP":[0],
         "attack":[5,5,10,15,20],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[5,5,5,5,5],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,null,null,["Equip.DEFEND_STATUS","Status.GOOD_LUCK",3]],
         "materials":[["Items.shuriken",1],["Items.shuriken",4],["Items.kevlar",1,"Items.buckle",1],["Items.kevlar",2]]
      },
      
      "pumpkinhead":{
         "SID":"pumpkinhead",
         "type":"Equip.HAT_MALE",
         "icon":364,
         "skin":15,
         "map":[31],
         "HP":[0],
         "attack":[0],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.INTIMIDATE"],null,null,["Equip.SUMMON","Summons.BatBlood",0.8]],
         "materials":[["Items.pumpkin",1],["Items.pumpkin",4],["Items.watermelon",6],["Items.dragonfruit",8,"Items.pumpkin",8]]
      },
      
      "wizardhat":{
         "SID":"wizardhat",
         "type":"Equip.HAT_MALE",
         "icon":358,
         "skin":16,
         "map":[15],
         "HP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[5,10,15,20,25],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "syphon":[20, 40, 60, 80, 100],
            "dispel":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_HEALING"]],
         "materials":[["Items.wool",1],["Items.wool",2,"Items.buckle",1],["Items.satin",2,"Items.buckle",1],["Items.satin",6,"Items.silk",1,"Items.herb",1]]
      },
      
      "baskethat":{
         "SID":"baskethat",
         "type":"Equip.HAT_MALE",
         "icon":350,
         "skin":17,
         "map":[13],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,10,10,10],
         "magicAttack":[0],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[5,5,10,15,15],
         "evade":[5,5,10,15,15],
         "resistance":{
            "weak":[20, 40, 60, 80, 100],
            "tired":[20, 40, 60, 80, 100],
            "thunder":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.BOOST_THROWS"]],
         "materials":[["Items.shuriken",1],["Items.shuriken",2,"Items.herb",1],["Items.leather",4,"Items.butterflywing",2],["Items.kevlar",2,"Items.butterflywing",2]]
      },
      
      "hornedhelmet":{
         "SID":"hornedhelmet",
         "type":"Equip.HAT_MALE",
         "icon":357,
         "skin":18,
         "map":[22],
         "HP":[0],
         "attack":[0,5,10,15,20],
         "defence":[5,10,15,20,25],
         "magicAttack":[-20],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.STATUS","Status.BERSERK",1,2]],
         "materials":[["Items.iron",1],["Items.claw",1],["Items.spike",3,"Items.beer",1],["Items.spike",8,"Items.beer",2]]
      },
      
      "santahat":{
         "SID":"santahat",
         "type":"Equip.HAT_MALE",
         "icon":365,
         "skin":19,
         "map":[14],
         "HP":[0,0,0,5,10],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0,0,0,5,10],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.SUMMON","Spells.present",1.5],null,null,null,["Equip.BOOST_FOOD"]],
         "materials":[["Items.wool",1,"Items.snowball",1],["Items.silk",1,"Items.snowball",1],["Items.satin",2,"Items.snowball",1],["Items.satin",7,"Items.snowball",5]]
      },
      
      "knightshelmet":{
         "SID":"knightshelmet",
         "type":"Equip.HAT_MALE",
         "icon":347,
         "skin":13,
         "map":[20],
         "HP":[5,5,5,10,10],
         "attack":[0],
         "defence":[15,20,25,30,40],
         "magicAttack":[0],
         "magicDefence":[5,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[-30],
            "water":[-30],
            "thunder":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.SUMMON","Summons.CatWarrior",0.66]],
         "materials":[["Items.iron",1],["Items.steel",1],["Items.silver",3,"Items.steel",2],["Items.silver",8,"Items.steel",2]]
      },
      
      "officershat":{
         "SID":"officershat",
         "type":"Equip.HAT_MALE",
         "icon":346,
         "skin":20,
         "map":[8],
         "HP":[0],
         "attack":[0,0,0,5,10],
         "defence":[0,5,5,10,10],
         "magicAttack":[0,0,0,5,10],
         "magicDefence":[0,5,10,10,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,null,null,["Equip.SUMMON","Spells.tankcannon",0.66]],
         "materials":[["Items.wool",1],["Items.silk",1],["Items.satin",1,"Items.silk",4],["Items.satin",5,"Items.powder",10,"Items.bomb",10]]
      },
      
      "spartanhelmet":{
         "SID":"spartanhelmet",
         "type":"Equip.HAT_MALE",
         "icon":362,
         "skin":21,
         "map":[33],
         "HP":[0,5,5,10,10],
         "attack":[0],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "death":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.DEFEND_BUFF","Stats.HP",20],null,["Equip.STATUS","Status.MORALE",2,0.5]],
         "materials":[["Items.iron",1],["Items.buckle",1],["Items.gold",1,"Items.buckle",1],["Items.gold",3,"Items.amber",1]]
      },
      
      "necromandershelmet":{
         "SID":"necromandershelmet",
         "type":"Equip.HAT_MALE",
         "icon":353,
         "skin":22,
         "map":[32],
         "HP":[0],
         "attack":[10,15,20,25,30],
         "defence":[10,15,20,25,30],
         "magicAttack":[10,15,20,25,30],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[-30],
            "fire":[-30]
         },
         "specials":[["Equip.STATUS","Status.CURSE",2,0.5]],
         "materials":[["Items.seashell",1],["Items.claw",1],["Items.spike",2,"Items.gems",2],["Items.spike",5,"Items.rune",1]]
      },
      
      "bunnyears":{
         "SID":"bunnyears",
         "type":"Equip.HAT_FEMALE",
         "icon":400,
         "skin":2,
         "map":[34],
         "HP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[10,15,20,25,35],
         "resistance":{
            "stun":[20, 40, 60, 80, 100],
            "stagger":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.DEFEND_BUFF","Stats.EVADE",30],null,["Equip.BOOST_CATCH"]],
         "materials":[["Items.feather",1],["Items.silk",1,"Items.feather",1],["Items.silk",2,"Items.amber",4],["Items.moonpearl",1,"Items.silk",2]]
      },
      
      "redribbon":{
         "SID":"redribbon",
         "type":"Equip.HAT_FEMALE",
         "icon":395,
         "skin":3,
         "map":[35],
         "HP":[0],
         "attack":[0,0,0,5,10],
         "defence":[0,5,10,15,20],
         "magicAttack":[0,0,0,5,10],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,null,null,["Equip.STATUS","Status.AUTOLIFE",2,0.15]],
         "materials":[["Items.wool",1],["Items.silk",1],["Items.satin",1,"Items.gems",10],["Items.satin",3,"Items.gems",20]]
      },
      
      "kittyears":{
         "SID":"kittyears",
         "type":"Equip.HAT_FEMALE",
         "icon":405,
         "skin":4,
         "map":[36],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,5,10,10],
         "magicAttack":[0],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[5,5,10,10,15],
         "evade":[5,5,10,10,15],
         "resistance":{
            "curse":[20, 40, 60, 80, 100],
            "weaken":[20, 40, 60, 80, 100]
         },
         "specials":[null,["Equip.DEFEND_STATUS","Status.GOOD_LUCK",3],null,["Equip.SUMMON","Summons.CatWizard",1]],
         "materials":[["Items.shuriken",1],["Items.powder",2,"Items.wool",1],["Items.satin",2,"Items.powder",2],["Items.rune",1,"Items.satin",3]]
      },
      
      "curlyhorns":{
         "SID":"curlyhorns",
         "type":"Equip.HAT_FEMALE",
         "icon":404,
         "skin":5,
         "map":[37],
         "HP":[0,5,5,10,15],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dispel":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.DEFEND_BUFF","Stats.DEFENCE",80],null,["Equip.BOOST_CATCH"]],
         "materials":[["Items.brick",1],["Items.coffee",1],["Items.coffee",3,"Items.spike",2],["Items.coffee",10,"Items.spike",6]]
      },
      
      "nursehat":{
         "SID":"nursehat",
         "type":"Equip.HAT_FEMALE",
         "icon":399,
         "skin":6,
         "map":[38],
         "HP":[0,0,0,0,5],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0,0,0,0,5],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "syphon":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100],
            "holy":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST_HEALING"]],
         "materials":[["Items.apple",1],["Items.cupcake",1],["Items.coffee",2,"Items.satin",2],["Items.lego",1,"Items.burger",2]]
      },
      
      "iceshards":{
         "SID":"iceshards",
         "type":"Equip.HAT_FEMALE",
         "icon":396,
         "skin":7,
         "map":[39],
         "HP":[0],
         "attack":[0],
         "defence":[5,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[5,5,10,15,20],
         "accuracy":[0],
         "evade":[0,0,0,5,10],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100]
         },
         "specials":[null,["Equip.SUMMON","Spells.icefall",0.66]],
         "materials":[["Items.snowball",2],["Items.water",1],["Items.water",6,"Items.ice",6],["Items.sapphire",4,"Items.water",7]]
      },
      
      "leafyhairclip":{
         "SID":"leafyhairclip",
         "type":"Equip.HAT_FEMALE",
         "icon":401,
         "skin":8,
         "map":[40],
         "HP":[0],
         "MP":[0],
         "attack":[5,5,5,10,10],
         "defence":[0,5,10,15,20],
         "magicAttack":[5,5,5,10,10],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bio":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "fire":[-30]
         },
         "specials":[null,null,["Equip.STATUS","Status.BLESS",2,0.15],["Equip.SUMMON","Spells.razorleaf",0.75],null],
         "materials":[["Items.herb",1],["Items.herb",2,"Items.flower",2],["Items.flower",8,"Items.amber",6],["Items.emerald",3,"Items.amber",3]]
      },
      
      "robotears":{
         "SID":"robotears",
         "type":"Equip.HAT_FEMALE",
         "icon":413,
         "skin":9,
         "map":[41],
         "HP":[0],
         "MP":[0],
         "attack":[0,5,5,10,15],
         "defence":[10,15,20,25,35],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0,0,0,0,5],
         "evade":[0,0,0,0,5],
         "resistance":{
            "bio":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50],
            "thunder":[-30]
         },
         "specials":[["Equip.SUMMON","Summons.CatSniper",1]],
         "materials":[["Items.spring",1],["Items.tape",2],["Items.cpu",1,"Items.floppy",1],["Items.cpu",2]]
      },
      
      "rubberduck":{
         "SID":"rubberduck",
         "type":"Equip.HAT_FEMALE",
         "icon":403,
         "skin":10,
         "map":[42],
         "HP":[5,5,5,5,10],
         "attack":[0,5,5,10,10],
         "defence":[0,5,5,10,10],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "burn":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_BUFFS",10],null,null,null,["Equip.BOOST_DEBUFFS",10]],
         "materials":[["Items.feather",1],["Items.ice",1],["Items.ice",8],["Items.moonpearl",1,"Items.ice",8]]
      },
      
      "darkbobble":{
         "SID":"darkbobble",
         "type":"Equip.HAT_FEMALE",
         "icon":409,
         "skin":11,
         "map":[43],
         "HP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[10,15,20,25,30],
         "magicDefence":[0,0,5,10,15],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "syphon":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.DEFEND_BUFF","Stats.MAGIC_ATTACK",80]],
         "materials":[["Items.powder",1],["Items.powder",3],["Items.rune",1],["Items.rune",2,"Items.opal",1]]
      },
      
      "popehat":{
         "SID":"popehat",
         "type":"Equip.HAT_FEMALE",
         "icon":397,
         "skin":12,
         "map":[53],
         "HP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[0],
         "magicDefence":[20,30,40,50,60],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.SCARE","Foe.GHOSTS"]],
         "materials":[["Items.wool",1],["Items.silk",1,"Items.butterflywing",1],["Items.satin",1,"Items.gold",1],["Items.satin",3,"Items.gold",3]]
      },
      
      "hollyhairpin":{
         "SID":"hollyhairpin",
         "type":"Equip.HAT_FEMALE",
         "icon":415,
         "skin":13,
         "map":[49],
         "HP":[0],
         "MP":[0],
         "attack":[0,5,5,10,10],
         "defence":[0,0,5,10,15],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[0,0,5,10,15],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "dispel":[20, 40, 60, 80, 100],
            "freeze":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.SUMMON","Spells.candycane",1],null,null,null,["Equip.BOOST_FOOD"]],
         "materials":[["Items.snowball",2],["Items.snowball",8],["Items.satin",1,"Items.silk",4],["Items.lego",1,"Items.satin",1]]
      },
      
      "flowerbobble":{
         "SID":"flowerbobble",
         "type":"Equip.HAT_FEMALE",
         "icon":411,
         "skin":14,
         "map":[51],
         "HP":[0],
         "MP":[0],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0,0,0,0,5],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "tired":[20, 40, 60, 80, 100],
            "holy":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.STATUS","Status.LOVED",1,0.3]],
         "materials":[["Items.flower",1],["Items.flower",3],["Items.rune2",3],["Items.opal",1,"Items.rune2",2]]
      },
      
      "drillbits":{
         "SID":"drillbits",
         "type":"Equip.HAT_FEMALE",
         "icon":398,
         "skin":15,
         "map":[52],
         "HP":[0],
         "MP":[0],
         "attack":[15,20,25,30,35],
         "defence":[15,20,25,30,35],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "thunder":[-30],
            "stun":[-30]
         },
         "specials":[null],
         "materials":[["Items.turd",2],["Items.turd",4,"Items.iron",3],["Items.silver",3,"Items.steel",4],["Items.silver",8]]
      },
      
      "spiderbobble":{
         "SID":"spiderbobble",
         "type":"Equip.HAT_FEMALE",
         "icon":414,
         "skin":16,
         "map":[48],
         "HP":[0],
         "attack":[0],
         "defence":[5,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[5,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "death":[20, 40, 60, 80, 100],
            "dark":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.SUMMON","Spells.spiders",0.66]],
         "materials":[["Items.powder",1],["Items.powder",3],["Items.virus",6],["Items.virus",6,"Items.rune",2]]
      },
      
      "royalcrown":{
         "SID":"royalcrown",
         "type":"Equip.HAT_FEMALE",
         "icon":402,
         "skin":17,
         "map":[47],
         "HP":[0],
         "MP":[0],
         "attack":[10,10,15,20,25],
         "defence":[0,5,5,10,10],
         "magicAttack":[0,5,10,15,20],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "thunder":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.STATUS","Status.BRAVE",2,0.15]],
         "materials":[["Items.silver",1],["Items.gold",1],["Items.gold",1,"Items.gems",1],["Items.gold",1,"Items.sapphire",2]]
      },
      
      "slimebunny":{
         "SID":"slimebunny",
         "type":"Equip.HAT_FEMALE",
         "icon":407,
         "skin":18,
         "map":[56],
         "HP":[10,10,15,15,20],
         "MP":[0],
         "attack":[0],
         "defence":[0,5,5,10,15],
         "magicAttack":[0],
         "magicDefence":[0,5,5,10,15],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[-30],
            "curse":[-30]
         },
         "specials":[["Equip.STATUS","Status.REGEN",2,0.15],null,null,null,["Equip.SUMMON","Spells.purify",0.66]],
         "materials":[["Items.flower",1],["Items.flower",3],["Items.amber",10],["Items.moonpearl",1,"Items.cupcake",5]]
      },
      
      "furhat":{
         "SID":"furhat",
         "type":"Equip.HAT_FEMALE",
         "icon":406,
         "skin":19,
         "map":[55],
         "HP":[0,5,5,10,10],
         "MP":[0],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.SUMMON","Summons.MammothWooly",0.15]],
         "materials":[["Items.fur",1],["Items.fur",3],["Items.fur",20],["Items.satin",4,"Items.fur",20]]
      },
      
      "blueelephant":{
         "SID":"blueelephant",
         "type":"Equip.HAT_FEMALE",
         "icon":408,
         "skin":20,
         "map":[54],
         "HP":[10,15,20,25,35],
         "attack":[0,0,0,0,5],
         "defence":[0],
         "magicAttack":[0,0,0,0,5],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.BOOST_STATUS"],null,["Equip.SUMMON","Summons.MammothWar",0.15]],
         "materials":[["Items.tape",2],["Items.pretzel",2],["Items.burger",1],["Items.gamechild",1]]
      },
      
      "ninjachopsticks":{
         "SID":"ninjachopsticks",
         "type":"Equip.HAT_FEMALE",
         "icon":412,
         "skin":21,
         "map":[46],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,10,10,10],
         "magicAttack":[0],
         "magicDefence":[0,5,5,10,10],
         "accuracy":[5,5,10,15,15],
         "evade":[5,5,10,15,15],
         "resistance":{
            "weak":[20, 40, 60, 80, 100],
            "tired":[20, 40, 60, 80, 100],
            "thunder":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.BOOST_THROWS"]],
         "materials":[["Items.shuriken",1],["Items.shuriken",4],["Items.shuriken",8,"Items.silver",3],["Items.rune",3,"Items.shuriken",2]]
      },
      
      "fierybobble":{
         "SID":"fierybobble",
         "type":"Equip.HAT_FEMALE",
         "icon":410,
         "skin":22,
         "map":[44],
         "HP":[0],
         "attack":[0],
         "defence":[5,5,5,10,10],
         "magicAttack":[5,5,5,10,10],
         "magicDefence":[0,5,10,15,25],
         "accuracy":[0],
         "evade":[5,5,5,10,10],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.SUMMON","Summons.GloopWood",0.25]],
         "materials":[["Items.geode",1],["Items.amber",1],["Items.amber",7],["Items.magma",7,"Items.amber",7]]
      },

      "hoboclothes":{
         "SID":"hoboclothes",
         "type":"Equip.ARMOR_MALE",
         "icon":370,
         "skin":2,
         "map":[2,12,2],
         "HP":[0],
         "attack":[0,5,5,10,10],
         "defence":[5,10,15,20,25],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[5,5,5,5,10],
         "resistance":{
            "stun":[20, 40, 60, 80, 100],
            "bio":[10, 20, 30, 40, 50],
            "death":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.BOOST","Element.EARTH"],["Equip.STEAL"],null],
         "materials":[["Items.wool",1,"Items.turd",1],["Items.wool",4,"Items.turd",4],["Items.leather",12,"Items.virus",3],["Items.kevlar",2,"Items.leather",4]]
      },
      
      "shellarmor":{
         "SID":"shellarmor",
         "type":"Equip.ARMOR_MALE",
         "icon":376,
         "skin":3,
         "map":[8,17,2],
         "HP":[0],
         "attack":[0],
         "defence":[10,15,25,30,40],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[10,20,25,30,40],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "holy":[20, 40, 60, 80, 100],
            "dispel":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.HOLY"],null,["Equip.DEFEND_STATUS","Status.ENCHANTED",1]],
         "materials":[["Items.gems",1],["Items.silver",1],["Items.gold",2,"Items.silver",1],["Items.gold",5,"Items.ruby",1]]
      },
      
      "coatofteeth":{
         "SID":"coatofteeth",
         "type":"Equip.ARMOR_MALE",
         "icon":389,
         "skin":4,
         "map":[11,8,2],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[5,10,15,20,25],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[10],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.BOOST_DEBUFFS",10],null,["Equip.SUMMON","Summons.HandSkeleton",0.4]],
         "materials":[["Items.claw",1],["Items.claw",2],["Items.spike",1,"Items.rune",1],["Items.rune",4]]
      },
      
      "explorersjacket":{
         "SID":"explorersjacket",
         "type":"Equip.ARMOR_MALE",
         "icon":378,
         "skin":5,
         "map":[4,11,2],
         "HP":[0],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[20,25,30,40,50],
         "evade":[0],
         "resistance":{
            "poison":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "wet":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.BOOST_CATCH"]],
         "materials":[["Items.wool",2],["Items.silk",2],["Items.kevlar",1,"Items.buckle",4],["Items.kevlar",3,"Items.buckle",4]]
      },
      
      "spaceace":{
         "SID":"spaceace",
         "type":"Equip.ARMOR_MALE",
         "icon":384,
         "skin":6,
         "map":[25,15,14],
         "HP":[5,5,5,10,15],
         "attack":[0],
         "defence":[10,15,20,30,40],
         "magicAttack":[0],
         "magicDefence":[10,15,20,30,40],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "weight":[20, 40, 60, 80, 100],
            "stun":[20, 40, 60, 80, 100],
            "freeze":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.SUMMON","Spells.flare",0.6],null,["Equip.DEFEND_STATUS","Status.REGEN",3]],
         "materials":[["Items.tape",2],["Items.plastic",2],["Items.kevlar",1,"Items.plastic",2],["Items.kevlar",1,"Items.lego",1,"Items.plastic",4]]
      },
      
      "spartancuirass":{
         "SID":"spartancuirass",
         "type":"Equip.ARMOR_MALE",
         "icon":374,
         "skin":7,
         "map":[27,15,2],
         "HP":[5,5,10,10,15],
         "attack":[0],
         "defence":[10,15,25,30,40],
         "magicAttack":[0],
         "magicDefence":[10,20,25,30,40],
         "accuracy":[5],
         "evade":[5],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "weak":[20, 40, 60, 80, 100]
         },
         "specials":[null,["Equip.DEFEND_BUFF","Stats.DEFENCE",80],null,["Equip.SUMMON","Summons.FallenCrucified",0.25],["Equip.BOOST","Element.FIRE"]],
         "materials":[["Items.iron",2],["Items.silver",1],["Items.silver",2,"Items.gold",1],["Items.gold",6,"Items.buckle",4]]
      },
      
      "flamesuit":{
         "SID":"flamesuit",
         "type":"Equip.ARMOR_MALE",
         "icon":377,
         "skin":8,
         "map":[23,4,2],
         "HP":[0],
         "attack":[0],
         "defence":[5,10,15,25,30],
         "magicAttack":[0],
         "magicDefence":[5,10,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[20, 40, 60, 80, 100],
            "burn":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.WATER"],["Equip.BOOST_STATUS"],null,["Equip.BOOST_BUFFS",10],null],
         "materials":[["Items.tape",2],["Items.plastic",2],["Items.kevlar",1,"Items.buckle",2],["Items.kevlar",3,"Items.plastic",2]]
      },
      
      "dragonarmor":{
         "SID":"dragonarmor",
         "type":"Equip.ARMOR_MALE",
         "icon":385,
         "skin":9,
         "map":[22,9,2],
         "HP":[0],
         "attack":[0,0,5,10,10],
         "defence":[10,15,20,25,35],
         "magicAttack":[0,0,5,10,10],
         "magicDefence":[10,15,20,25,35],
         "accuracy":[0,0,0,0,5],
         "evade":[0,0,0,0,5],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST","Element.FIRE"],["Equip.STATUS","Status.GOOD_LUCK",2,0.5],null],
         "materials":[["Items.brick",2],["Items.brick",8,"Items.magma",1],["Items.gold",1,"Items.magma",6],["Items.scales",1,"Items.gold",1]]
      },
      
      "officerscoat":{
         "SID":"officerscoat",
         "type":"Equip.ARMOR_MALE",
         "icon":379,
         "skin":10,
         "map":[21,8,2],
         "HP":[0],
         "attack":[0,5,5,10,10],
         "defence":[5,10,15,25,30],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[5,10,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.SUMMON","Spells.tankgun",0.45]],
         "materials":[["Items.wool",2],["Items.silk",1,"Items.bomb",3],["Items.satin",2,"Items.rune",1],["Items.satin",6,"Items.rune",2,"Items.bomb",6]]
      },
      
      "scottishkilt":{
         "SID":"scottishkilt",
         "type":"Equip.ARMOR_MALE",
         "icon":387,
         "skin":11,
         "map":[19,10,2],
         "HP":[0],
         "attack":[5,5,10,10,15],
         "defence":[5,10,15,25,30],
         "magicAttack":[0],
         "magicDefence":[5,10,20,25,30],
         "accuracy":[5,5,10,10,15],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wet":[20, 40, 60, 80, 100],
            "ice":[-30]
         },
         "specials":[null,["Equip.STATUS","Status.MORALE",2,0.5],null,["Equip.SUMMON","Spells.rain",0.66],null],
         "materials":[["Items.wool",2],["Items.geode",4],["Items.satin",2,"Items.buckle",4,"Items.geode",4],["Items.opal",2,"Items.buckle",2]]
      },
      
      "heroicarmor":{
         "SID":"heroicarmor",
         "type":"Equip.ARMOR_MALE",
         "icon":373,
         "skin":12,
         "map":[10,16,2],
         "HP":[0,5,10,15,20],
         "attack":[0],
         "defence":[10,20,40,50,65],
         "magicAttack":[0],
         "magicDefence":[10,15,20,30,45],
         "accuracy":[0],
         "evade":[-20],
         "resistance":{
            "fire":[-30],
            "water":[-30],
            "thunder":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.NONE"],null,null,null,null],
         "materials":[["Items.steel",1],["Items.steel",3],["Items.silver",6,"Items.steel",8],["Items.titanium",1]]
      },
      
      "camojacket":{
         "SID":"camojacket",
         "type":"Equip.ARMOR_MALE",
         "icon":380,
         "skin":13,
         "map":[5,12,2],
         "HP":[0],
         "MP":[0],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0,5,10,15,20],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.SUMMON","Spells.airstrike1",1]],
         "materials":[["Items.turd",2],["Items.turd",2,"Items.cactus",2,"Items.root",2],["Items.kevlar",1,"Items.floppy",3],["Items.kevlar",3,"Items.bomb",4]]
      },
      
      "prieststunic":{
         "SID":"prieststunic",
         "type":"Equip.ARMOR_MALE",
         "icon":375,
         "skin":14,
         "map":[15,11,2],
         "HP":[5,5,5,5,10],
         "attack":[-10],
         "defence":[5,10,15,25,30],
         "magicAttack":[0],
         "magicDefence":[20,25,30,35,40],
         "accuracy":[0],
         "evade":[10],
         "resistance":{
            "holy":[10, 20, 30, 40, 50],
            "dark":[10, 20, 30, 40, 50],
            "poison":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_HEALING"],["Equip.BOOST","Element.HOLY"],null,null,["Equip.STATUS","Status.AUTOLIFE",1,0.3]],
         "materials":[["Items.feather",2],["Items.feather",6,"Items.buckle",1],["Items.silk",4,"Items.silver",2],["Items.moonpearl",1,"Items.silver",4]]
      },
      
      "wizardrobe":{
         "SID":"wizardrobe",
         "type":"Equip.ARMOR_MALE",
         "icon":388,
         "skin":15,
         "map":[14,10,2],
         "HP":[-10],
         "attack":[-20],
         "defence":[0,5,10,15,20],
         "magicAttack":[15,20,25,30,45],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[10],
         "evade":[0],
         "resistance":{
            "dispel":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.DEFEND_BUFF","Stats.MAGIC_ATTACK",80]],
         "materials":[["Items.wool",2],["Items.butterflywing",3],["Items.satin",2,"Items.gems",2],["Items.ruby",3,"Items.emerald",3,"Items.sapphire",3]]
      },
      
      "genjiarmor":{
         "SID":"genjiarmor",
         "type":"Equip.ARMOR_MALE",
         "icon":382,
         "skin":16,
         "map":[16,9,2],
         "HP":[0],
         "attack":[5,5,10,15,20],
         "defence":[10,20,30,35,40],
         "magicAttack":[0],
         "magicDefence":[0,0,5,5,10],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "wind":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST","Element.EARTH"],null,["Equip.DEFEND_BUFF","Stats.ATTACK",80]],
         "materials":[["Items.shuriken",1,"Items.brick",1],["Items.shuriken",4,"Items.brick",4],["Items.kevlar",2,"Items.buckle",4],["Items.gold",2,"Items.kevlar",1,"Items.buckle",2]]
      },
      
      "ninjagear":{
         "SID":"ninjagear",
         "type":"Equip.ARMOR_MALE",
         "icon":381,
         "skin":17,
         "map":[17,8,2],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,5,10,15],
         "magicAttack":[0],
         "magicDefence":[0,5,5,10,15],
         "accuracy":[10,15,15,20,25],
         "evade":[10,10,15,20,25],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "weight":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.WIND"],["Equip.DEFEND_STATUS","Status.INVISIBLE",1],null,["Equip.BOOST_THROWS"],null],
         "materials":[["Items.shuriken",1,"Items.bomb",1],["Items.shuriken",4,"Items.bomb",4],["Items.rune",1,"Items.bomb",2,"Items.shuriken",2],["Items.kevlar",2,"Items.rune",2]]
      },
      
      "vikingfur":{
         "SID":"vikingfur",
         "type":"Equip.ARMOR_MALE",
         "icon":372,
         "skin":18,
         "map":[18,12,2],
         "HP":[0],
         "attack":[0,5,10,15,20],
         "defence":[10,15,20,25,30],
         "magicAttack":[-20],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.SUMMON","Summons.BearBrown",0.5],null,["Equip.BOOST_CATCH"]],
         "materials":[["Items.fur",1],["Items.fur",2,"Items.buckle",1],["Items.spike",2,"Items.fur",12,"Items.buckle",1],["Items.rune2",15,"Items.buckle",1]]
      },
      
      "santaoutfit":{
         "SID":"santaoutfit",
         "type":"Equip.ARMOR_MALE",
         "icon":390,
         "skin":19,
         "map":[12,8,2],
         "HP":[0,0,5,10,15],
         "attack":[0],
         "defence":[10,15,20,25,35],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,35],
         "accuracy":[0],
         "evade":[-5],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100],
            "wet":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.SUMMON","Spells.present",2]],
         "materials":[["Items.snowball",2,"Items.wool",1],["Items.snowball",8,"Items.wool",4],["Items.satin",2,"Items.leather",8],["Items.lego",1,"Items.satin",2]]
      },
      
      "turtlegi":{
         "SID":"turtlegi",
         "type":"Equip.ARMOR_MALE",
         "icon":383,
         "skin":20,
         "map":[13,14,2],
         "HP":[0,0,5,5,10],
         "attack":[0],
         "defence":[0],
         "magicAttack":[0],
         "magicDefence":[0],
         "accuracy":[0,5,10,15,20],
         "evade":[0,5,10,15,20],
         "resistance":{
            "stun":[20, 40, 60, 80, 100],
            "stagger":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.RANDOM_BUFFS"],null,null,null,["Equip.STATUS","Status.MORALE",1,1]],
         "materials":[["Items.wool",1,"Items.brick",1],["Items.silk",1,"Items.brick",8],["Items.satin",2,"Items.rune2",2],["Items.scales",1,"Items.satin",2]]
      },
      
      "hipstershirt":{
         "SID":"hipstershirt",
         "type":"Equip.ARMOR_MALE",
         "icon":386,
         "skin":21,
         "map":[7,13,2],
         "HP":[0,5,5,5,10],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0,5,5,5,10],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_FOOD"],null,["Equip.BOOST_BUFFS",10]],
         "materials":[["Items.wool",2],["Items.coffee",1],["Items.coffee",2,"Items.pretzel",2,"Items.burger",2],["Items.burger",6,"Items.cola",2]]
      },
      
      "captainscoat":{
         "SID":"captainscoat",
         "type":"Equip.ARMOR_MALE",
         "icon":371,
         "skin":22,
         "map":[3,5,2],
         "HP":[0],
         "MP":[0],
         "attack":[0,5,5,10,10],
         "defence":[5,10,15,20,25],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[5,5,5,5,10],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.SUMMON","Summons.SquidPink",0.22]],
         "materials":[["Items.seashell",2],["Items.buckle",2],["Items.leather",8,"Items.sapphire",2],["Items.sapphire",5,"Items.leather",3]]
      },

      "magicalskirt":{
         "SID":"magicalskirt",
         "type":"Equip.ARMOR_FEMALE",
         "icon":430,
         "skin":2,
         "map":[35,18,2],
         "HP":[0,5,5,10,10],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "poison":[20, 40, 60, 80, 100],
            "death":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.NONE"],["Equip.STATUS","Status.LOVED",2,0.15],null,null,["Equip.SUMMON","Summons.SlimeBunny",0.5]],
         "materials":[["Items.feather",1],["Items.silk",2],["Items.satin",2,"Items.gems",4],["Items.moonpearl",1,"Items.opal",1]]
      },
      
      "bubblydress":{
         "SID":"bubblydress",
         "type":"Equip.ARMOR_FEMALE",
         "icon":432,
         "skin":3,
         "map":[37,19,2],
         "HP":[0],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[5,5,10,15,20],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "water":[10, 20, 30, 40, 50],
            "dispel":[20, 40, 60, 80, 100],
            "weak":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.WATER"],null,["Equip.DEFEND_STATUS","Status.ENCHANTED",1]],
         "materials":[["Items.butterflywing",1],["Items.ice",2],["Items.ice",4,"Items.satin",2],["Items.sapphire",2,"Items.moonpearl",1]]
      },
      
      "rangerskirt":{
         "SID":"rangerskirt",
         "type":"Equip.ARMOR_FEMALE",
         "icon":421,
         "skin":4,
         "map":[34,9,2],
         "HP":[0],
         "attack":[5,5,10,15,20],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0,5,5,10,15],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "tired":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.SUMMON","Spells.bind",1],null,["Equip.BOOST_CATCH"]],
         "materials":[["Items.herb",1],["Items.herb",2,"Items.leather",1],["Items.leather",10,"Items.buckle",2],["Items.kevlar",2,"Items.leather",6]]
      },
      
      "maidoutfit":{
         "SID":"maidoutfit",
         "type":"Equip.ARMOR_FEMALE",
         "icon":433,
         "skin":5,
         "map":[39,8,2],
         "HP":[0,5,5,10,10],
         "attack":[0,5,10,15,20],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_FOOD"],null,["Equip.BOOST_THROWS"]],
         "materials":[["Items.cupcake",1],["Items.coffee",1],["Items.coffee",2,"Items.burger",2],["Items.coffee",10,"Items.burger",5]]
      },
      
      "schooluniform":{
         "SID":"schooluniform",
         "type":"Equip.ARMOR_FEMALE",
         "icon":428,
         "skin":6,
         "map":[40,15,2],
         "HP":[0],
         "MP":[0],
         "attack":[0,0,5,5,10],
         "defence":[0],
         "magicAttack":[0,0,5,5,10],
         "magicDefence":[0],
         "accuracy":[0],
         "evade":[10,15,20,30,40],
         "resistance":{
            "weight":[20, 40, 60, 80, 100],
            "tired":[20, 40, 60, 80, 100],
            "curse":[20, 40, 60, 80, 100]
         },
         "specials":[null,null,["Equip.DEFEND_BUFF","Stats.ATTACK",80],["Equip.STEAL"]],
         "materials":[["Items.cola",1],["Items.cola",2],["Items.satin",3,"Items.cola",3],["Items.satin",12,"Items.cola",10]]
      },
      
      "camoskirt":{
         "SID":"camoskirt",
         "type":"Equip.ARMOR_FEMALE",
         "icon":435,
         "skin":7,
         "map":[42,5,2],
         "HP":[0],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bomb":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "stagger":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.SUMMON","Spells.medipack",1],null],
         "materials":[["Items.cactus",2],["Items.cactus",6],["Items.leather",8,"Items.bomb",10],["Items.kevlar",3,"Items.cactus",2]]
      },
      
      "reddress":{
         "SID":"reddress",
         "type":"Equip.ARMOR_FEMALE",
         "icon":420,
         "skin":8,
         "map":[43,9,2],
         "HP":[0],
         "attack":[0],
         "defence":[0,5,10,15,20],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[15,20,25,30,40],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "ice":[10, 20, 30, 40, 50]
         },
         "specials":[null,null,["Equip.STATUS","Status.GOOD_LUCK",2,0.5],null,["Equip.BOOST_STATUS"]],
         "materials":[["Items.butterflywing",1],["Items.gems",3],["Items.gems",15,"Items.satin",4],["Items.sapphire",2,"Items.topaz",2,"Items.ruby",2]]
      },
      
      "obsidianarmor":{
         "SID":"obsidianarmor",
         "type":"Equip.ARMOR_FEMALE",
         "icon":436,
         "skin":9,
         "map":[44,8,13],
         "HP":[0],
         "attack":[0],
         "defence":[20,30,40,50,60],
         "magicAttack":[0],
         "magicDefence":[15,20,25,30,30],
         "accuracy":[0],
         "evade":[-20],
         "resistance":{
            "fire":[10, 20, 30, 40, 50],
            "burn":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.FIRE"],null,null,null,["Equip.STATUS","Status.BRAVE",2,0.2]],
         "materials":[["Items.iron",1],["Items.iron",2,"Items.geode",2],["Items.rune",1,"Items.geode",10],["Items.scales",1,"Items.iron",12]]
      },
      
      "summerkimono":{
         "SID":"summerkimono",
         "type":"Equip.ARMOR_FEMALE",
         "icon":438,
         "skin":10,
         "map":[45,19,2],
         "HP":[0],
         "attack":[0],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0,5,5,10,10],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "thunder":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.THUNDER"],null,["Equip.DEFEND_STATUS","Status.BLESS",2]],
         "materials":[["Items.wool",2],["Items.wool",8,"Items.shuriken",4],["Items.topaz",2,"Items.satin",2],["Items.topaz",4,"Items.opal",1]]
      },
      
      "popedress":{
         "SID":"popedress",
         "type":"Equip.ARMOR_FEMALE",
         "icon":426,
         "skin":11,
         "map":[48,20,2],
         "HP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[0],
         "magicDefence":[20,30,40,55,70],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50],
            "curse":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.HOLY"],null,null,null,["Equip.STATUS","Status.AUTOLIFE",1,0.3]],
         "materials":[["Items.flower",1],["Items.silk",2],["Items.silver",2,"Items.gold",1],["Items.grail",1]]
      },
      
      "nurseuniform":{
         "SID":"nurseuniform",
         "type":"Equip.ARMOR_FEMALE",
         "icon":437,
         "skin":12,
         "map":[49,18,2],
         "HP":[0,5,5,10,10],
         "attack":[0],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "poison":[20, 40, 60, 80, 100],
            "stun":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_HEALING"],null,null,["Equip.BOOST","Element.HOLY"],["Equip.SUMMON","Spells.renew",1]],
         "materials":[["Items.apple",2],["Items.banana",3],["Items.coffee",6,"Items.satin",2],["Items.lego",2,"Items.cupcake",6]]
      },
      
      "darkgown":{
         "SID":"darkgown",
         "type":"Equip.ARMOR_FEMALE",
         "icon":434,
         "skin":13,
         "map":[50,20,2],
         "HP":[0],
         "MP":[0],
         "attack":[0],
         "defence":[0],
         "magicAttack":[10,15,20,25,30],
         "magicDefence":[15,20,25,30,40],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "death":[20, 40, 60, 80, 100],
            "holy":[-30]
         },
         "specials":[["Equip.BOOST","Element.DARK"],null,null,["Equip.DEFEND_BUFF","Stats.MAGIC_DEFENCE",80]],
         "materials":[["Items.flower",1],["Items.silk",2],["Items.satin",1,"Items.rune",1],["Items.darkmatter",1]]
      },
      
      "samidress":{
         "SID":"samidress",
         "type":"Equip.ARMOR_FEMALE",
         "icon":431,
         "skin":14,
         "map":[53,20,2],
         "HP":[0],
         "attack":[0,5,5,10,10],
         "defence":[5,10,15,20,25],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "holy":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST","Element.WIND"],null,null,["Equip.BOOST_BUFFS",10]],
         "materials":[["Items.wool",1,"Items.feather",1],["Items.fur",2,"Items.feather",4],["Items.satin",4,"Items.fur",8],["Items.rune2",10,"Items.fur",12]]
      },
      
      "cowcostume":{
         "SID":"cowcostume",
         "type":"Equip.ARMOR_FEMALE",
         "icon":422,
         "skin":15,
         "map":[51,9,2],
         "HP":[5,5,10,15,20],
         "MP":[0],
         "attack":[0],
         "defence":[5,10,15,20,25],
         "magicAttack":[0],
         "magicDefence":[5,10,15,20,25],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dispel":[20, 40, 60, 80, 100],
            "earth":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST","Element.EARTH"],null,null,["Equip.BOOST_DEBUFFS",10],["Equip.DEFEND_BUFF","Stats.HP",20]],
         "materials":[["Items.buckle",1],["Items.leather",2],["Items.silk",6,"Items.leather",12],["Items.burger",3,"Items.leather",12]]
      },
      
      "furdress":{
         "SID":"furdress",
         "type":"Equip.ARMOR_FEMALE",
         "icon":423,
         "skin":16,
         "map":[57,9,2],
         "HP":[0],
         "MP":[0],
         "attack":[0,5,5,10,10],
         "defence":[10,15,20,25,30],
         "magicAttack":[0,5,5,10,10],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "water":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.SUMMON","Summons.MonolithViking",0.15],null,["Equip.BOOST_CATCH"]],
         "materials":"vikingfur.materials"
      },
      
      "santaskirt":{
         "SID":"santaskirt",
         "type":"Equip.ARMOR_FEMALE",
         "icon":440,
         "skin":17,
         "map":[58,8,2],
         "HP":[0],
         "attack":[0],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0,0,5,10,15],
         "resistance":{
            "ice":[10, 20, 30, 40, 50],
            "freeze":[20, 40, 60, 80, 100],
            "wet":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.ICE"],null,["Equip.SUMMON","Spells.candycane2",1]],
         "materials":"santaoutfit.materials"
      },
      
      "mechasuit":{
         "SID":"mechasuit",
         "type":"Equip.ARMOR_FEMALE",
         "icon":427,
         "skin":18,
         "map":[59,13,2],
         "HP":[0,0,5,5,5],
         "attack":[0,0,0,0,5],
         "defence":[10,15,20,25,35],
         "magicAttack":[0,0,0,0,5],
         "magicDefence":[10,15,20,25,35],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "bio":[10, 20, 30, 40, 50],
            "bomb":[10, 20, 30, 40, 50],
            "thunder":[-30]
         },
         "specials":[["Equip.BOOST","Element.BOMB"],null,["Equip.SUMMON","Summons.CatBomber",0.9]],
         "materials":[["Items.iron",2],["Items.bomb",2,"Items.steel",2],["Items.cpu",1,"Items.powder",2],["Items.gamechild",1]]
      },
      
      "cactusdress":{
         "SID":"cactusdress",
         "type":"Equip.ARMOR_FEMALE",
         "icon":429,
         "skin":19,
         "map":[60,11,2],
         "HP":[0],
         "MP":[0],
         "attack":[5,10,10,15,20],
         "defence":[10,15,20,25,30],
         "magicAttack":[0],
         "magicDefence":[0,5,10,15,20],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "earth":[10, 20, 30, 40, 50],
            "bio":[10, 20, 30, 40, 50],
            "poison":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.BIO"],null,["Equip.SUMMON","Spells.cactus",2]],
         "materials":[["Items.cactus",2],["Items.cactus",8],["Items.geode",8,"Items.emerald",2],["Items.emerald",7,"Items.herb",3,"Items.cactus",3]]
      },
      
      "ninjaskirt":{
         "SID":"ninjaskirt",
         "type":"Equip.ARMOR_FEMALE",
         "icon":425,
         "skin":20,
         "map":[61,8,2],
         "HP":[0],
         "attack":[0],
         "defence":[0,0,5,10,15],
         "magicAttack":[0],
         "magicDefence":[0,0,5,10,15],
         "accuracy":[10,15,15,20,25],
         "evade":[10,10,15,20,25],
         "resistance":{
            "wind":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "stun":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST","Element.WIND"],["Equip.DEFEND_STATUS","Status.INVISIBLE",1],null,["Equip.BOOST_THROWS"],null],
         "materials":"ninjagear.materials"
      },
      
      "casualskirt":{
         "SID":"casualskirt",
         "type":"Equip.ARMOR_FEMALE",
         "icon":424,
         "skin":21,
         "map":[62,9,2],
         "HP":[0],
         "attack":[0,5,5,10,15],
         "defence":[0,0,5,10,15],
         "magicAttack":[0,5,5,10,15],
         "magicDefence":[0,0,5,10,15],
         "accuracy":[0],
         "evade":[10,10,15,20,25],
         "resistance":{
            "death":[20, 40, 60, 80, 100],
            "syphon":[20, 40, 60, 80, 100],
            "stun":[20, 40, 60, 80, 100]
         },
         "specials":[["Equip.BOOST_FOOD"],null,["Equip.BOOST_BUFFS",10]],
         "materials":"hipstershirt.materials"
      },
      
      "spidergown":{
         "SID":"spidergown",
         "type":"Equip.ARMOR_FEMALE",
         "icon":439,
         "skin":22,
         "map":[52,20,2],
         "HP":[0,5,5,10,10],
         "attack":[0],
         "defence":[10,15,20,25,35],
         "magicAttack":[0],
         "magicDefence":[10,15,20,25,30],
         "accuracy":[0],
         "evade":[0],
         "resistance":{
            "dark":[10, 20, 30, 40, 50],
            "fire":[10, 20, 30, 40, 50],
            "earth":[10, 20, 30, 40, 50]
         },
         "specials":[["Equip.BOOST","Element.DARK"],null,["Equip.SUMMON","Summons.MirrorHaunted",0.5]],
         "materials":[["Items.shuriken",2],["Items.amber",1],["Items.rune",1,"Items.amber",4],["Items.rune",4]]
      },
      
      "empty":{
         "SID":"empty",
         "type":"Equip.FLAIR",
         "icon":515,
         "skin":2,
         "materials":[]
      },
      
      "swordmedal":{
         "SID":"swordmedal",
         "type":"Equip.FLAIR",
         "icon":445,
         "skin":15,
         "attack":[10,20,30],
         "materials":[["Items.silver",1,"Items.gold",1],["Items.silver",4,"Items.gold",4]]
      },
      
      "shieldmedal":{
         "SID":"shieldmedal",
         "type":"Equip.FLAIR",
         "icon":454,
         "skin":16,
         "defence":[10,20,30],
         "materials":"swordmedal.materials"
      },
      
      "goldstar":{
         "SID":"goldstar",
         "type":"Equip.FLAIR",
         "icon":463,
         "skin":10,
         "magicAttack":[10,20,30],
         "materials":[["Items.gold",1,"Items.gems",5],["Items.gold",5]]
      },
      
      "platinumstar":{
         "SID":"platinumstar",
         "type":"Equip.FLAIR",
         "icon":472,
         "skin":11,
         "magicDefence":[10,20,30],
         "materials":[["Items.silver",2,"Items.gems",5],["Items.silver",10]]
      },
      
      "smallcloud":{
         "SID":"smallcloud",
         "type":"Equip.FLAIR",
         "icon":446,
         "skin":21,
         "HP":[0,5,10],
         "resistance":{"water":[10, 20, 30]},
         "specials":[["Equip.MORE_SP"]],
         "materials":[["Items.ice",2,"Items.water",2],["Items.ice",10,"Items.water",10]]
      },
      
      "ironcross":{
         "SID":"ironcross",
         "type":"Equip.FLAIR",
         "icon":476,
         "skin":7,
         "resistance":{
            "bomb":[20, 35, 50],
            "stagger":[40, 70, 100]
         },
         "materials":[["Items.iron",5,"Items.steel",5],["Items.iron",10,"Items.steel",10,"Items.silver",3]]
      },
      
      "bandage":{
         "SID":"bandage",
         "type":"Equip.FLAIR",
         "icon":447,
         "skin":18,
         "resistance":{
            "earth":[20, 35, 50],
            "death":[40, 70, 100]
         },
         "materials":[["Items.silk",4,"Items.turd",2],["Items.silk",14,"Items.turd",10]]
      },
      
      "goldenpentagram":{
         "SID":"goldenpentagram",
         "type":"Equip.FLAIR",
         "icon":448,
         "skin":28,
         "resistance":{
            "holy":[20,35,50],
            "weak":[40,70,100]
         },
         "materials":[["Items.gold",1],["Items.gold",2,"Items.silver",1]]
      },
      
      "targetbadge":{
         "SID":"targetbadge",
         "type":"Equip.FLAIR",
         "icon":449,
         "skin":4,
         "resistance":{"wind":[10, 20, 30]},
         "accuracy":[10,20,30],
         "specials":[null,null,["Equip.DEFEND_STATUS","Status.TARGET",2]],
         "materials":[["Items.plastic",3],["Items.plastic",10]]
      },
      
      "bigeyebrows":{
         "SID":"bigeyebrows",
         "type":"Equip.FLAIR",
         "icon":450,
         "skin":34,
         "resistance":{
            "death":[40, 70, 100],
            "stun":[40, 70, 100],
            "stagger":[40, 70, 100]
         },
         "specials":[],
         "materials":[["Items.leather",2],["Items.leather",10]]
      },
      
      "frostbadge":{
         "SID":"frostbadge",
         "type":"Equip.FLAIR",
         "icon":451,
         "skin":9,
         "resistance":{
            "ice":[20, 35, 50],
            "freeze":[40, 70, 100]
         },
         "materials":[["Items.water",8],["Items.sapphire",1,"Items.water",16]]
      },
      
      "hoopearings":{
         "SID":"hoopearings",
         "type":"Equip.FLAIR",
         "icon":452,
         "skin":24,
         "magicAttack":[0,5,10],
         "resistance":{"thunder":[10, 20, 30]},
         "specials":[["Equip.STATUS","Status.GOOD_LUCK",2,0.25],null,["Equip.DEFEND_STATUS","Status.GOOD_LUCK",2]],
         "materials":[["Items.gold",1],["Items.gold",2]]
      },
      
      "pearlnecklace":{
         "SID":"pearlnecklace",
         "type":"Equip.FLAIR",
         "icon":453,
         "skin":37,
         "resistance":{
            "water":[20, 35, 50],
            "wet":[40, 70, 100]
         },
         "materials":[["Items.ice",8],["Items.sapphire",1,"Items.ice",16]]
      },
      
      "greencross":{
         "SID":"greencross",
         "type":"Equip.FLAIR",
         "icon":473,
         "skin":3,
         "magicDefence":[0,5,10],
         "resistance":{"burn":[20, 35, 50]},
         "specials":[["Equip.STATUS","Status.REGEN",2,0.3],null,["Equip.DEFEND_STATUS","Status.REGEN",2]],
         "materials":[["Items.silver",2],["Items.emerald",1,"Items.silver",4]]
      },
      
      "minidrone":{
         "SID":"minidrone",
         "type":"Equip.FLAIR",
         "icon":455,
         "skin":23,
         "accuracy":[0,5,10],
         "resistance":{
            "bomb":[10, 20, 30],
            "earth":[10, 20, 30]
         },
         "specials":[["Equip.BOOST_CATCH"]],
         "materials":[["Items.spring",3,"Items.tape",3],["Items.cpu",3]]
      },
      
      "surgicalmask":{
         "SID":"surgicalmask",
         "type":"Equip.FLAIR",
         "icon":456,
         "skin":19,
         "resistance":{
            "bio":[20, 35, 50],
            "poison":[40, 70, 100]
         },
         "materials":[["Items.silk",2,"Items.garlic",2],["Items.garlic",8,"Items.kevlar",1]]
      },
      
      "silvercross":{
         "SID":"silvercross",
         "type":"Equip.FLAIR",
         "icon":457,
         "skin":31,
         "resistance":{
            "dark":[20, 35, 50],
            "curse":[40, 70, 100]
         },
         "materials":[["Items.silver",2],["Items.silver",6]]
      },
      
      "balancebadge":{
         "SID":"balancebadge",
         "type":"Equip.FLAIR",
         "icon":458,
         "skin":5,
         "resistance":{
            "dark":[10, 20, 30],
            "holy":[10, 20, 30]
         },
         "HP":[0,0,5],
         "attack":[5,5,5],
         "defence":[0,5,5],
         "magicAttack":[5,5,5],
         "magicDefence":[0,5,5],
         "accuracy":[5,5,5],
         "evade":[0,0,5],
         "materials":[["Items.rune",1,"Items.rune2",1],["Items.rune",1,"Items.rune2",1]]
      },
      
      "fakemustache":{
         "SID":"fakemustache",
         "type":"Equip.FLAIR",
         "icon":459,
         "skin":33,
         "resistance":{"ice":[10, 20, 30]},
         "specials":[["Equip.STEAL"]],
         "materials":[["Items.fur",2,"Items.silver",1],["Items.fur",8,"Items.gold",1]]
      },
      
      "lightningbadge":{
         "SID":"lightningbadge",
         "type":"Equip.FLAIR",
         "icon":460,
         "skin":8,
         "resistance":{
            "thunder":[20, 35, 50],
            "stun":[40, 70, 100]
         },
         "materials":[["Items.amber",2],["Items.amber",2,"Items.topaz",3]]
      },
      
      "chromeearings":{
         "SID":"chromeearings",
         "type":"Equip.FLAIR",
         "icon":461,
         "skin":26,
         "statusEffect":"Status.FREEZE",
         "statusChance":[10,20,30],
         "statusDegree":[2,2,2],
         "resistance":{"ice":[10, 20, 30]},
         "specials":[["Equip.NO_STACK"]],
         "materials":[["Items.silver",2,"Items.water",1],["Items.silver",6,"Items.water",3]]
      },
      
      "cattail":{
         "SID":"cattail",
         "type":"Equip.FLAIR",
         "icon":462,
         "skin":35,
         "evade":[10,15,15],
         "resistance":{"dark":[10, 20, 30]},
         "specials":[null,null,["Equip.DEFEND_BUFF","Stats.EVADE",30]],
         "materials":[["Items.fur",4,"Items.leather",2],["Items.fur",10,"Items.leather",5]]
      },
      
      "fatfly":{
         "SID":"fatfly",
         "type":"Equip.FLAIR",
         "icon":464,
         "skin":22,
         "statusEffect":"Status.DOOM",
         "statusChance":[30,40,50],
         "statusDegree":[3,3,2],
         "resistance":{
            "dark":[10, 20, 30],
            "bio":[10, 20, 30]
         },
         "specials":[["Equip.NO_STACK"],null,["Equip.SUMMON","Spells.flybomb",1.25]],
         "materials":[["Items.virus",2],["Items.virus",10]]
      },
      
      "luckyclover":{
         "SID":"luckyclover",
         "type":"Equip.FLAIR",
         "icon":465,
         "skin":6,
         "resistance":{"bio":[10, 20, 30]},
         "specials":[["Equip.STATUS","Status.BLESS",1,0.3],null,["Equip.DEFEND_STATUS","Status.BLESS",2]],
         "materials":[["Items.geode",4],["Items.emerald",3,"Items.geode",4]]
      },
      
      "heartpendant":{
         "SID":"heartpendant",
         "type":"Equip.FLAIR",
         "icon":466,
         "skin":29,
         "defence":[0,0,5],
         "magicDefence":[0,0,5],
         "resistance":{"death":[40, 70, 100]},
         "specials":[["Equip.STATUS","Status.LOVED",2,0.25],null,["Equip.DEFEND_STATUS","Status.LOVED",2]],
         "materials":[["Items.gems",5],["Items.ruby",4]]
      },
      
      "crossbonepin":{
         "SID":"crossbonepin",
         "type":"Equip.FLAIR",
         "icon":467,
         "skin":12,
         "statusEffect":"Status.CURSE",
         "statusChance":[30,45,60],
         "statusDegree":[4,5,6],
         "resistance":{
            "death":[20, 35, 50],
            "curse":[20, 35, 50]
         },
         "specials":[["Equip.NO_STACK"]],
         "materials":[["Items.claw",4],["Items.spike",4]]
      },
      
      "battlepaint":{
         "SID":"battlepaint",
         "type":"Equip.FLAIR",
         "icon":468,
         "skin":32,
         "attack":[0,5,10],
         "resistance":{"water":[10, 20, 30]},
         "specials":[["Equip.STATUS","Status.BRAVE",2,0.2],null,["Equip.DEFEND_STATUS","Status.BRAVE",4]],
         "materials":[["Items.blueberries",6],["Items.blueberries",20]]
      },
      
      "flamebadge":{
         "SID":"flamebadge",
         "type":"Equip.FLAIR",
         "icon":469,
         "skin":14,
         "resistance":{
            "fire":[20, 35, 50],
            "burn":[40, 70, 100]
         },
         "materials":[["Items.magma",6],["Items.magma",2,"Items.ruby",3]]
      },
      
      "amethystearings":{
         "SID":"amethystearings",
         "type":"Equip.FLAIR",
         "icon":470,
         "skin":27,
         "statusEffect":"Status.DISPEL",
         "statusChance":[30,50,75],
         "statusDegree":[1,1,1],
         "resistance":{"dispel":[20, 35, 50]},
         "specials":[["Equip.NO_STACK"]],
         "materials":[["Items.butterflywing",8],["Items.butterflywing",36]]
      },
      
      "tentacle":{
         "SID":"tentacle",
         "type":"Equip.FLAIR",
         "icon":471,
         "skin":36,
         "defence":[0,5,10],
         "magicDefence":[0,5,10],
         "resistance":{"stun":[20, 35, 50]},
         "specials":[["Equip.SUMMON","Spells.tentacles",1.25]],
         "materials":[["Items.virus",2],["Items.virus",10]]
      },
      
      "fairy":{
         "SID":"fairy",
         "type":"Equip.FLAIR",
         "icon":474,
         "skin":20,
         "resistance":{"holy":[10, 20, 30]},
         "specials":[["Equip.STATUS","Status.AUTOLIFE",2,0.15],null,["Equip.DEFEND_STATUS","Status.AUTOLIFE",1]],
         "materials":[["Items.butterflywing",8],["Items.moonpearl",1,"Items.butterflywing",8]]
      },
      
      "thetriforce":{
         "SID":"thetriforce",
         "type":"Equip.FLAIR",
         "icon":475,
         "skin":30,
         "resistance":{
            "dispel":[20, 35, 50],
            "syphon":[20, 35, 50]
         },
         "specials":[["Equip.STATUS","Status.MORALE",2,0.25],null,["Equip.DEFEND_STATUS","Status.MORALE",2]],
         "materials":[["Items.gold",1],["Items.gold",3]]
      },
      
      "peacebadge":{
         "SID":"peacebadge",
         "type":"Equip.FLAIR",
         "icon":477,
         "skin":1,
         "statusEffect":"Status.WEAKEN",
         "statusChance":[30,45,60],
         "statusDegree":[4,5,6],
         "defence":[0,5,10],
         "resistance":{"weak":[20, 35, 50]},
         "specials":[["Equip.NO_STACK"]],
         "materials":[["Items.tape",14],["Items.tape",60]]
      },
      
      "angelpin":{
         "SID":"angelpin",
         "type":"Equip.FLAIR",
         "icon":478,
         "skin":13,
         "resistance":{
            "wind":[20,35,50],
            "weight":[40,70,100]
         },
         "materials":[["Items.feather",2,"Items.silk",2],["Items.silver",6,"Items.feather",12]]
      },
      
      "emeraldearings":{
         "SID":"emeraldearings",
         "type":"Equip.FLAIR",
         "icon":479,
         "skin":25,
         "statusEffect":"Status.POISON",
         "statusChance":[40,60,80],
         "statusDegree":[2,2,3],
         "resistance":{"bio":[10, 20, 30]},
         "specials":[["Equip.NO_STACK"]],
         "materials":[["Items.virus",2],["Items.emerald",2]]
      },
      "angryfaic":{
         "SID":"angryfaic",
         "type":"Equip.FLAIR",
         "icon":480,
         "skin":38,
         "defence":[0,5,5],
         "magicDefence":[0,5,5],
         "resistance":{"fire":[10, 20, 30]},
         "specials":[["Equip.DEFEND_STATUS","Status.TARGET",2],null,["Equip.INTIMIDATE"]],
         "materials":[["Items.amber",3],["Items.rune",1,"Items.amber",5]]
      },      
      "pocketwatch":{
         "SID":"pocketwatch",
         "type":"Equip.FLAIR",
         "icon":481,
         "skin":2,
         "resistance":{"stun":[20, 35, 50]},
         "specials":[["Equip.STATUS","Status.HASTE",2,0.15]],
         "materials":[["Items.spring",2,"Items.gear",4],["Items.spring",10,"Items.gear",20]]
      }
        }
        resolve();
    });
}

function loadSkills(){
   return new Promise(function(resolve, reject){
      skills = {
         "defend":{
            "SID":"defend",
            "icon":155,
            "unsyphonable":true,
            "target":"Target.AUTO",
            "statusEffect":"Status.DEFEND",
            "statusChance":[0],
            "statusDegree":[1]
         },
         
         "swap":{
            "SID":"swap",
            "icon":158,
            "unsyphonable":true,
            "target":"Target.READY_ALLY"
         },
         
         "standby1":{
            "SID":"bring1",
            "icon":157,
            "unsyphonable":true,
            "target":"Target.SWAPABLE_ALLY"
         },
         
         "standby2":{
            "SID":"bring1",
            "icon":163,
            "unsyphonable":true,
            "target":"Target.SWAPABLE_ALLY"
         },
         
         "flee":{
            "SID":"flee",
            "icon":159,
            "unsyphonable":true,
            "target":"Target.ALL_ALLY"
         },
         
         "skip":{
            "SID":"skip",
            "icon":156,
            "unsyphonable":true,
            "target":"Target.AUTO"
         },
         
         "scan":{
            "SID":"scan",
            "icon":162,
            "animation":["magic4","magic3","magic2","magic1","magic1"],
            "MC":"Scan",
            "type":"Stats.NONE",
            "unsyphonable":true,
            "target":"Target.ALL_ENEMY"
         },
         
         "capture":{
            "SID":"capture",
            "animation":["magic4","magic3","magic1","magic1","magic1"],
            "MC":"Box",
            "icon":160,
            "unsyphonable":true,
            "target":"Target.CAPTURABLE_ENEMY"
         },
         

         
         "slash":{
            "SID":"swordslash",
            "icon":18,
            "AP":[0,200,2000],
            "animation":["attack1"],
            "unsyphonable":true,
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[40,75,150],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE"
         },
         
         "earthedge":{
            "SID":"earthedge",
            "icon":3,
            "AP":[0,30],
            "animation":["magic2"],
            "MC":"Tremor",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,40],
            "element":"Element.EARTH"
         },
         
         "quakespikes":{
            "SID":"quakespikes",
            "icon":4,
            "AP":[100,300],
            "animation":["magic2"],
            "MC":"Quake",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60,90],
            "element":"Element.EARTH",
            "accuracy":140
         },
         
         "cataclysmiccut":{
            "SID":"cataclysmiccut",
            "icon":5,
            "AP":[1000,3000,9000],
            "animation":["magic2"],
            "MC":"Cataclysm",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[130,170,210],
            "element":"Element.EARTH",
            "critical":30
         },
         
         "geysergush":{
            "SID":"geysergush",
            "icon":8,
            "AP":[0,30],
            "animation":["magic2"],
            "MC":"Geyser",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,40],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[40,40,40],
            "statusDegree":[1,1,1]
         },
         
         "pouringpike":{
            "SID":"pouringpike",
            "icon":9,
            "AP":[100,300],
            "animation":["magic2"],
            "MC":"Flood",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60,85],
            "element":"Element.WATER",
            "accuracy":100,
            "statusEffect":"Status.WET",
            "statusChance":[40,45,50],
            "statusDegree":[2,2,2]
         },
         
         "surgingskewer":{
            "SID":"surgingskewer",
            "icon":10,
            "AP":[1000,3000,9000],
            "animation":["magic2"],
            "MC":"Torrent",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[120,160,200],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[50,55,60],
            "statusDegree":[2,2,2],
            "critical":30
         },
         
         "frostfragment":{
            "SID":"frostfragment",
            "icon":11,
            "AP":[50,200],
            "animation":["magic2"],
            "MC":"Tundra",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,75],
            "element":"Element.ICE",
            "statusEffect":"Status.CHILL",
            "statusChance":[20,25,30],
            "statusDegree":[2,2,2]
         },
         
         "glacialglaive":{
            "SID":"glacialglaive",
            "icon":12,
            "AP":[750,2000,5000],
            "animation":["magic2"],
            "MC":"IceBerg",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[110,150,190],
            "element":"Element.ICE",
            "statusEffect":"Status.CHILL",
            "statusChance":[30,35,40],
            "statusDegree":[2,2,2]
         },
         
         "slicingcyclone":{
            "SID":"slicingcyclone",
            "icon":20,
            "AP":[180,600,2000,4000],
            "animation":["attack8"],
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[40,55,75,100],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":2
         },
         
         "stealitem":{
            "SID":"stealitem",
            "icon":29,
            "AP":[0,100,500,2500],
            "MP":[0,0,0,0],
            "animation":["special1"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[5,10,15,20],
            "element":"Element.NONE",
            "accuracy":80
         },
         
         "firespire":{
            "SID":"firespire",
            "icon":6,
            "AP":[50,200],
            "animation":["magic2"],
            "MC":"FireSpire",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,75],
            "element":"Element.FIRE",
            "statusEffect":"Status.DRY",
            "statusChance":[20,25,30],
            "statusDegree":[2,2,2]
         },
         
         "lavalance":{
            "SID":"lavalance",
            "icon":7,
            "AP":[750,2000,5000],
            "animation":["magic2"],
            "MC":"LavaLance",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[110,150,190],
            "element":"Element.FIRE",
            "statusEffect":"Status.DRY",
            "statusChance":[30,35,40],
            "statusDegree":[2,2,2]
         },
         
         "nettleknife":{
            "SID":"nettleknife",
            "icon":16,
            "AP":[15,50],
            "animation":["magic2"],
            "MC":"Nettle",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,45],
            "element":"Element.BIO",
            "statusEffect":"Status.POISON",
            "statusChance":[30,40],
            "statusDegree":[2,2]
         },
         
         "shreddingshrub":{
            "SID":"shreddingshrub",
            "icon":17,
            "AP":[300,1000,3000],
            "animation":["magic2"],
            "MC":"Nettle2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70,130,180],
            "element":"Element.BIO",
            "statusEffect":"Status.POISON",
            "statusChance":[40,50,60],
            "statusDegree":[3,3,4]
         },
         
         "legend":{
            "SID":"legend",
            "icon":27,
            "AP":[800,2000,5000,15000],
            "MP":[24,30,36,42],
            "animation":["attack3"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[120,170,220,280],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "critical":15,
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":3
         },
         
         "lightblade":{
            "SID":"lightblade",
            "icon":14,
            "AP":[120,400],
            "MP":[8,11],
            "animation":["magic1"],
            "MC":"LightBlade",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,80],
            "element":"Element.HOLY"
         },
         
         "holysword":{
            "SID":"holysword",
            "icon":15,
            "AP":[1200,2500,6000],
            "MP":[15,20,25],
            "animation":["magic1"],
            "MC":"HolySword",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[120,160,200],
            "element":"Element.HOLY",
            "statusEffect":"Status.DISPEL",
            "statusChance":[25,30,35],
            "statusDegree":[1,1,1]
         },
         
         "unleash":{
            "SID":"unleash",
            "icon":13,
            "AP":[100,300,1000,3000],
            "MP":[8,11,14,20],
            "animation":["attack5"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,55,95,140],
            "element":"Element.WEAPON",
            "elementDegree":200,
            "statusEffect":"Status.WEAPON",
            "statusChance":[200],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[200],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE"
         },
         
         "quickslash":{
            "SID":"quickslash",
            "icon":19,
            "AP":[20,200,2000],
            "animation":["attack2"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[35,70,120],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "accuracy":300,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "temper":{
            "SID":"temper",
            "icon":24,
            "AP":[0,500,1500],
            "animation":["magic1"],
            "MC":"Temper2",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "buffDegree":[40,55,70],
            "buffChance":[0],
            "buffEffect":"temper",
            "statusEffect":["Status.BRAVE"],
            "statusChance":[0],
            "statusDegree":[3,3,3],
            "statusOnly":true,
            "cooldownTime":2
         },
         
         "revenge":{
            "SID":"revenge",
            "icon":23,
            "AP":[100,300,1000,3000],
            "MP":[12,15,18,22],
            "animation":["attack4"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[400,600,800,999],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "accuracy":120,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "cleaver":{
            "SID":"cleaver",
            "icon":31,
            "AP":[100,300,1000,3000,10000],
            "animation":["attack6"],
            "jump":true,
            "limit":true,
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[220,310,420,540,660],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "critical":30,
            "accuracy":150
         },
         
         "ragnarok":{
            "SID":"ragnarok",
            "icon":30,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic1"],
            "MC":"Ragnarok",
            "jump":true,
            "limit":true,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[120,200,300,420,560],
            "element":"Element.NONE",
            "elementDegree":0,
            "buffEffect":"temper",
            "buffDegree":[40,50,60,70,80],
            "statusEffect":["Status.BRAVE"],
            "statusDegree":[5],
            "statusChance":[0],
            "accuracy":150
         },
         

         
         "staffstrike":{
            "SID":"staffstrike",
            "icon":38,
            "AP":[0,200,2000],
            "animation":["attack1"],
            "unsyphonable":true,
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[30,60,120],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE"
         },
         
         "cleanse":{
            "SID":"blessedbunny",
            "icon":58,
            "AP":[500,1500],
            "animation":["magic5"],
            "MC":"Cleanse",
            "statusEffect":["Status.BLESS"],
            "statusChance":[0],
            "statusDegree":[1,3],
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "damage":[0,0]
         },
         
         "luckystar":{
            "SID":"luckystar",
            "icon":55,
            "AP":[10,50,300],
            "animation":["magic4"],
            "MC":"LuckyStar",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,50,80,110,135,160],
            "element":"Element.NONE",
            "critical":25,
            "randomness":150,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "starshower":{
            "SID":"starshower",
            "icon":56,
            "AP":[1500,3500,7000],
            "animation":["magic2"],
            "MC":"StarShower",
            "alternative":"luckystar",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,70,90],
            "element":"Element.NONE",
            "critical":25,
            "randomness":150,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "starpower":{
            "SID":"starpower",
            "icon":57,
            "AP":[100,500,1500],
            "animation":["magic5"],
            "MC":"Bless",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "buffDegree":[40,55,70],
            "buffEffect":"bless2",
            "buffChance":[0],
            "statusEffect":["Status.GOOD_LUCK"],
            "statusChance":[0],
            "statusDegree":[3,3,3],
            "statusOnly":true,
            "cooldownTime":2
         },
         
         "toxic":{
            "SID":"intoxicate",
            "icon":39,
            "AP":[60,200,600,2000],
            "animation":["magic4"],
            "MC":"Toxic",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[20,25,30,40],
            "element":"Element.BIO",
            "statusEffect":"Status.POISON",
            "statusChance":[100,100,125,150],
            "statusDegree":[2,3,4,5]
         },
         
         "fire":{
            "SID":"fireball",
            "icon":35,
            "AP":[15,35],
            "animation":["magic4"],
            "MC":"Fire1",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,45],
            "element":"Element.FIRE",
            "statusEffect":"Status.BURN",
            "statusChance":[10,20],
            "statusDegree":[2,2]
         },
         
         "fireball":{
            "SID":"fireblast",
            "icon":36,
            "AP":[150,500],
            "animation":["magic4"],
            "MC":"Fireball",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[65,90,100,120,140],
            "element":"Element.FIRE",
            "statusEffect":"Status.BURN",
            "statusChance":[25,30,50,65,80],
            "statusDegree":[2,2,2,2,2]
         },
         
         "firestorm":{
            "SID":"firestorm",
            "icon":37,
            "AP":[1500,3000,6000],
            "animation":["magic2"],
            "MC":"Firestorm",
            "alternative":"fireball",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,65,80],
            "element":"Element.FIRE",
            "statusEffect":"Status.BURN",
            "statusChance":[40,45,50],
            "statusDegree":[2,2,2]
         },
         
         "thunder":{
            "SID":"thunderbolt",
            "icon":45,
            "AP":[15,35],
            "animation":["magic4"],
            "MC":"Thunder",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,45],
            "element":"Element.THUNDER",
            "accuracy":115,
            "statusEffect":"Status.STUN",
            "statusChance":[5,10,15],
            "statusDegree":[1,1,1]
         },
         
         "thunderbolt":{
            "SID":"thundershock",
            "icon":46,
            "AP":[150,500],
            "animation":["magic4"],
            "MC":"Thunderbolt",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":3,
            "damage":[65,90,100,120,140],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STUN",
            "statusChance":[15,20,25,30,40],
            "statusDegree":[1],
            "accuracy":115
         },
         
         "thunderstorm":{
            "SID":"thunderstorm",
            "icon":47,
            "AP":[1500,3000,6000],
            "animation":["magic2"],
            "MC":"Thunderstorm",
            "alternative":"thunderbolt",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,65,80],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STUN",
            "statusChance":[20,20,20],
            "statusDegree":[1],
            "accuracy":115
         },
         
         "ice":{
            "SID":"iceshard",
            "icon":40,
            "AP":[15,35],
            "animation":["magic4"],
            "MC":"Ice",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,45],
            "element":"Element.ICE",
            "statusEffect":"Status.FREEZE",
            "statusChance":[5,10],
            "statusDegree":[2,2]
         },
         
         "iceshard":{
            "SID":"iceshatter",
            "icon":41,
            "AP":[150,500],
            "animation":["magic4"],
            "MC":"Iceshard",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[65,90,100,120,140],
            "element":"Element.ICE",
            "statusEffect":"Status.FREEZE",
            "statusChance":[10,10,10,15,20],
            "statusDegree":[2,2,2,2,2]
         },
         
         "icestorm":{
            "SID":"icestorm",
            "icon":42,
            "AP":[1500,3000,6000],
            "animation":["magic2"],
            "MC":"Icestorm",
            "alternative":"iceshard",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,65,80],
            "element":"Element.ICE",
            "statusEffect":"Status.FREEZE",
            "statusChance":[10,10,10],
            "statusDegree":[2,2,2]
         },
         
         "pulse":{
            "SID":"darkpulse",
            "icon":48,
            "AP":[300,600,1500],
            "animation":["magic4"],
            "MC":"Pulse",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80,120,170],
            "element":"Element.DARK",
            "statusEffect":"Status.HEAVY",
            "statusChance":[50,75,100],
            "statusDegree":[2,2,2]
         },
         
         "pulsar":{
            "SID":"darkpulsar",
            "icon":49,
            "AP":[2500,5000,10000],
            "animation":["magic2"],
            "MC":"Pulsar",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[75,110,150],
            "element":"Element.DARK",
            "statusEffect":"Status.HEAVY",
            "statusChance":[40,50,60],
            "statusDegree":[2,2,2],
            "accuracy":115,
            "cooldownTime":3
         },
         
         "spectrum":{
            "SID":"spectralflash",
            "icon":59,
            "AP":[50,250],
            "animation":["magic4"],
            "MC":"Spectrum",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,75,100,130,160],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[150],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[150],
            "buffDegree":[100],
            "bonusChance":0.5
         },
         
         "spectrum2":{
            "SID":"rainbowblast",
            "icon":60,
            "AP":[1500,3000,6000],
            "animation":["magic4"],
            "MC":"Spectrum2",
            "alternative":"spectrum",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,70,90],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[50],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[50],
            "buffDegree":[100],
            "bonusChance":0.5
         },
         
         "shine":{
            "SID":"holylight",
            "icon":43,
            "AP":[300,600,1500],
            "animation":["magic5"],
            "MC":"Shine",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80,120,170],
            "element":"Element.HOLY",
            "statusEffect":"Status.WEAKEN",
            "statusChance":[30,40,50],
            "statusDegree":[4,4,4]
         },
         
         "judgement":{
            "SID":"divinejudgement",
            "icon":44,
            "AP":[2000,4000,8000],
            "animation":["magic1"],
            "MC":"Judgement",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[210,260,330],
            "element":"Element.HOLY",
            "accuracy":150,
            "cooldownTime":3
         },
         
         "syphon":{
            "SID":"syphon",
            "icon":53,
            "AP":[50,150],
            "animation":["magic4"],
            "MC":"Syphon",
            "type":"Stats.NONE",
            "target":"Target.ONE_ENEMY",
            "statusEffect":"Status.SYPHON",
            "statusChance":[100,125,150,200,250],
            "statusDegree":[1,2,3,4,5],
            "statusOnly":true,
            "cooldownTime":3
         },
         
         "syphon2":{
            "SID":"syphon2",
            "icon":54,
            "AP":[500,1000,2000],
            "animation":["magic2"],
            "MC":"Syphon2",
            "alternative":"syphon",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "statusEffect":"Status.SYPHON",
            "statusChance":[50,75,100],
            "statusDegree":[2,2,2,2],
            "statusOnly":true,
            "cooldownTime":3
         },
         
         "genesis":{
            "SID":"genesis",
            "icon":61,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic6"],
            "MC":"Genesis",
            "limit":true,
            "jump":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[90,160,200,270,360],
            "element":"Element.HOLY",
            "statusEffect":["Status.AUTOLIFE"],
            "statusChance":[0],
            "statusDegree":[5],
            "accuracy":200
         },
         
         "kyun":{
            "SID":"kyun",
            "icon":62,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic6"],
            "MC":"Kyun",
            "limit":true,
            "jump":true,
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "damage":[30,40,50,60,70],
            "buffDegree":[30,40,50,60,70],
            "buffEffect":"kyun",
            "buffChance":[0],
            "statusEffect":["Status.LOVED"],
            "statusChance":[0],
            "statusDegree":[2]
         },

         
         "pistolwhip":{
            "SID":"pistolwhip",
            "icon":68,
            "AP":[0,200,2000],
            "animation":["attack1"],
            "unsyphonable":true,
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[35,70,140],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE"
         },
         
         "snipe":{
            "SID":"snipe",
            "icon":65,
            "AP":[50,300,1500],
            "animation":["attack3"],
            "MC":"Snipe",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80,140,220],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "accuracy":300,
            "critical":30,
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":2
         },
         
         "doubleshot":{
            "SID":"doubleshot",
            "icon":66,
            "AP":[0,200,700],
            "animation":["attack4"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60,110,180],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[150],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[150],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE"
         },
         
         "unloadd":{
            "SID":"unload",
            "icon":67,
            "AP":[500,1000,2000,5000],
            "animation":["attack5"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[160,230,320,420],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "critical":30,
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":6
         },
         
         "flameshot":{
            "SID":"flameshot",
            "icon":80,
            "AP":[15,90],
            "animation":["shoot1"],
            "MC":"FlameShot",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[55,80],
            "element":"Element.FIRE",
            "buffEffect":"Stats.DEFENCE",
            "buffChance":[50,75],
            "buffDegree":[-25,-25],
            "cooldownTime":2
         },
         
         "flameburst":{
            "SID":"flameburst",
            "icon":81,
            "AP":[300,800],
            "animation":["shoot1"],
            "MC":"FlameBurst",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[45,70,100,105,110],
            "element":"Element.FIRE",
            "buffEffect":"Stats.DEFENCE",
            "buffChance":[50,75,100,100,100],
            "buffDegree":[-25],
            "cooldownTime":2
         },
         
         "bullethell":{
            "SID":"bullethell",
            "icon":82,
            "AP":[1500,3000,5000],
            "animation":["shoot2"],
            "MC":"BulletHell",
            "alternative":"flameburst",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.CENTER_ENEMY",
            "damage":[150,190,240],
            "element":"Element.FIRE",
            "buffEffect":"Stats.DEFENCE",
            "buffChance":[100,125,150],
            "buffDegree":[-25],
            "cooldownTime":2
         },
         
         "plasma":{
            "SID":"plasmashot",
            "icon":75,
            "AP":[15,90],
            "animation":["shoot1"],
            "MC":"Plasma",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[55,80],
            "element":"Element.THUNDER",
            "buffEffect":"Stats.EVADE",
            "buffChance":[50,75],
            "buffDegree":[-25],
            "cooldownTime":2
         },
         
         "plasmawave":{
            "SID":"plasmawave",
            "icon":76,
            "AP":[300,800],
            "animation":["shoot1"],
            "MC":"PlasmaWave",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[45,70,100,105,110],
            "element":"Element.THUNDER",
            "buffEffect":"Stats.EVADE",
            "buffChance":[50,75,100,100,100],
            "buffDegree":[-25],
            "cooldownTime":2
         },
         
         "plasmacross":{
            "SID":"plasmafield",
            "icon":77,
            "AP":[1500,3000,5000],
            "animation":["shoot2"],
            "MC":"PlasmaCross",
            "alternative":"plasmawave",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.CENTER_ENEMY",
            "damage":[150,190,240],
            "element":"Element.THUNDER",
            "buffEffect":"Stats.EVADE",
            "buffChance":[100,125,150],
            "buffDegree":[-25,-25,-25],
            "cooldownTime":2
         },
         
         "poisongas":{
            "SID":"poisongas",
            "icon":74,
            "AP":[500,1500,3000,6000],
            "animation":["magic1"],
            "MC":"PoisonGas",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[10,20,30,40],
            "element":"Element.BIO",
            "statusEffect":"Status.POISON",
            "statusChance":[100,125,150,200],
            "statusDegree":[2,3,4,5],
            "cooldownTime":4
         },
         
         "airstrike1":{
            "SID":"airstrike1",
            "icon":70,
            "AP":[300,1000],
            "animation":["magic1"],
            "MC":"AirStrike",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[100,150,200,250],
            "element":"Element.BOMB",
            "statusEffect":"Status.STAGGER",
            "statusChance":[20,30,40,50],
            "statusDegree":[2],
            "cooldownTime":4
         },
         
         "airstrike2":{
            "SID":"airstrike2",
            "icon":71,
            "AP":[2000,4000],
            "animation":["magic1"],
            "MC":"AirStrike2",
            "multiMC":true,
            "alternative":"airstrike1",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[80,120],
            "element":"Element.BOMB",
            "statusEffect":"Status.STAGGER",
            "statusChance":[40,50],
            "statusDegree":[1],
            "cooldownTime":4
         },
         
         "airstrike3":{
            "SID":"airstrike3",
            "icon":72,
            "AP":[300,1000,3000,6000],
            "animation":["magic1"],
            "MC":"AirStrike3",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[80,120,160,220],
            "element":"Element.BOMB",
            "statusEffect":"Status.STAGGER",
            "statusChance":[80,100,120,150],
            "statusDegree":[2,2,2,2],
            "cooldownTime":11
         },
         
         "medipack":{
            "SID":"medipack1",
            "icon":86,
            "AP":[50,250],
            "animation":["magic1"],
            "MC":"Medipack",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ALLY",
            "damage":[40,60],
            "cooldownTime":4
         },
         
         "medipack2":{
            "SID":"medipack2",
            "icon":87,
            "AP":[1500,4000],
            "animation":["magic1"],
            "MC":"Medipack",
            "multiMC":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ALLY",
            "damage":[60,80],
            "cooldownTime":4
         },
         
         "tankgun":{
            "SID":"tankguns",
            "icon":88,
            "AP":[750,1200,2000,4000],
            "animation":["magic1"],
            "MC":"TankGuns",
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[40,65,100,140],
            "element":"Element.BOMB",
            "cooldownTime":2
         },
         
         "crush":{
            "SID":"armorcrush",
            "icon":69,
            "AP":[300,1000,3000],
            "animation":["attack2"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70,110,160],
            "element":"Element.WEAPON",
            "statusEffect":"Status.DISPEL",
            "statusChance":[100,150,200],
            "statusDegree":[1,1,1],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":2
         },
         
         "hyperbeam":{
            "SID":"hyperbeam",
            "icon":83,
            "AP":[1000,2000,4000,8000],
            "animation":["special1"],
            "jump":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[120,170,230,300],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[150],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[150],
            "buffDegree":[100],
            "accuracy":120
         },
         
         "darkblast":{
            "SID":"darkshot",
            "icon":78,
            "AP":[15,80],
            "animation":["shoot1"],
            "MC":"DarkBlast",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[55,90],
            "element":"Element.DARK",
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[50,75],
            "buffDegree":[-25,-25],
            "cooldownTime":2
         },
         
         "gravitysurge":{
            "SID":"gravitysurge",
            "icon":198,
            "AP":[300,800],
            "animation":["shoot1"],
            "MC":"DarkFlare",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[45,70,100,105,110],
            "element":"Element.DARK",
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[50,75,100,100,100],
            "buffDegree":[-25],
            "cooldownTime":2
         },
         
         "antimatter":{
            "SID":"antimatterflux",
            "icon":79,
            "AP":[1500,3000,5000],
            "animation":["shoot2"],
            "MC":"AntiMatter",
            "alternative":"gravitysurge",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.CENTER_ENEMY",
            "damage":[150,190,240],
            "element":"Element.DARK",
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[100,125,150],
            "buffDegree":[-25,-25,-25],
            "cooldownTime":2
         },
         
         "nuke":{
            "SID":"nuke",
            "icon":90,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic1"],
            "MC":"Nuke1",
            "limit":true,
            "jump":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[150,230,320,400,500],
            "element":"Element.FIRE",
            "statusEffect":"Status.BURN",
            "statusChance":[100],
            "statusDegree":[5,5,5,5,5],
            "accuracy":200
         },
         
         "nuke2":{
            "target":"Target.ALL_ALLY",
            "statusEffect":"Status.BURN",
            "statusChance":[100],
            "statusDegree":[5,5,5,5,5],
            "statusOnly":true
         },
         
         "oblivion":{
            "SID":"oblivion",
            "icon":89,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic4"],
            "MC":"Oblivion",
            "jump":true,
            "limit":true,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[120,190,280,370,480],
            "element":"Element.BOMB",
            "statusEffect":"Status.STAGGER",
            "statusChance":[50,75,100,125,150],
            "statusDegree":[2,2,2,2,2],
            "accuracy":200
         },
         

         
         "arrowcut":{
            "SID":"arrowslash",
            "icon":95,
            "AP":[0,200,2000],
            "animation":["attack1"],
            "unsyphonable":true,
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[35,70,140],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonusChance":0.5,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "bowwhack":{
            "SID":"bowwhack",
            "icon":105,
            "AP":[50,150,500],
            "animation":["attack2"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[30,20,10],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonusChance":0,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "gust":{
            "SID":"gust",
            "icon":100,
            "AP":[15,35],
            "animation":["magic1"],
            "MC":"Gust",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":3,
            "damage":[30,45],
            "statusEffect":"Status.LIGHT",
            "statusChance":[20,30],
            "statusDegree":[2,2],
            "element":"Element.WIND"
         },
         
         "whirlwind":{
            "SID":"whirlwind",
            "icon":101,
            "AP":[150,500],
            "animation":["magic1"],
            "MC":"Whirlwind",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":3,
            "damage":[65,90,120,130,140],
            "element":"Element.WIND",
            "statusEffect":"Status.LIGHT",
            "statusChance":[60,80,100,120,150],
            "statusDegree":[2,2,2,2,3]
         },
         
         "hurricane":{
            "SID":"hurricane",
            "icon":102,
            "AP":[1500,3000,6000],
            "animation":["magic1"],
            "MC":"Hurricane",
            "alternative":"whirlwind",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,70,90],
            "element":"Element.WIND",
            "statusEffect":"Status.LIGHT",
            "statusChance":[20,30,40],
            "statusDegree":[2,2,2]
         },
         
         "log":{
            "SID":"logjab",
            "icon":108,
            "AP":[40,300],
            "animation":["magic2"],
            "MC":"Wood",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[40,70],
            "element":"Element.EARTH",
            "statusEffect":"Status.STAGGER",
            "statusChance":[50,80],
            "statusDegree":[1],
            "critical":20
         },
         
         "lumber":{
            "SID":"lumbertrap",
            "icon":109,
            "AP":[1200,2500,5000],
            "animation":["magic2"],
            "MC":"Lumber",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[100,150,220],
            "randomness":10,
            "element":"Element.EARTH",
            "statusEffect":"Status.STAGGER",
            "statusChance":[100,120,150],
            "statusDegree":[1],
            "critical":20
         },
         
         "razorleaf":{
            "SID":"leafblade",
            "icon":106,
            "AP":[40,300],
            "animation":["magic3"],
            "MC":"RazorLeaf2",
            "critical":30,
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[50,95,150,175,200],
            "element":"Element.BIO"
         },
         
         "razorleaf2":{
            "SID":"razorleaf",
            "icon":107,
            "AP":[1000,3000,6000],
            "animation":["magic3"],
            "MC":"RazorLeaf",
            "alternative":"razorleaf",
            "critical":30,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "aim":1,
            "damage":[50,75,100],
            "element":"Element.BIO"
         },
         
         "soularrow":{
            "SID":"soularrow",
            "icon":114,
            "AP":[120,450],
            "animation":["shoot1"],
            "MC":"SoulArrow2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[70,100,140,180,190],
            "element":"Element.HOLY",
            "statusEffect":"Status.WEAKEN",
            "statusChance":[50,100,100,100,120],
            "statusDegree":[3,3,4,4,5]
         },
         
         "frostarrow":{
            "SID":"frostarrow",
            "icon":111,
            "AP":[120,450],
            "animation":["shoot1"],
            "MC":"FrostArrow2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[50,75,100,140,150],
            "element":"Element.ICE",
            "statusEffect":"Status.FREEZE",
            "statusChance":[50,70,85,100,120],
            "statusDegree":[1]
         },
         
         "nitroarrow":{
            "SID":"nitroarrow",
            "icon":113,
            "AP":[120,450],
            "animation":["shoot1"],
            "MC":"BombArrow2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[60,90,120,160,170],
            "element":"Element.BOMB",
            "statusEffect":"Status.DISPEL",
            "statusChance":[50,70,85,100,120],
            "statusDegree":[1]
         },
         
         "sparkarrow":{
            "SID":"sparkarrow",
            "icon":112,
            "AP":[120,450],
            "animation":["shoot1"],
            "MC":"SparkArrow2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[70,100,140,180,190],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STUN",
            "statusChance":[50,70,85,100,120],
            "statusDegree":[1]
         },
         
         "aquaarrow":{
            "SID":"aquaarrow",
            "icon":110,
            "AP":[120,450],
            "animation":["shoot1"],
            "MC":"AquaArrow2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[80,110,150,200,210],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[100,100,100,100,100],
            "statusDegree":[2,4,5,7,9]
         },
         
         "soularrow2":{
            "SID":"soularrow2",
            "icon":119,
            "AP":[1000,2000,4000],
            "animation":["shoot4"],
            "MC":"SoulArrow",
            "multiMC":true,
            "alternative":"soularrow",
            "type":"Stats.ATTACK",
            "target":"Target.RANDOM_ENEMY",
            "aim":1,
            "damage":[50,70,95],
            "element":"Element.HOLY",
            "statusEffect":"Status.WEAKEN",
            "statusChance":[60,80,100],
            "statusDegree":[2]
         },
         
         "frostarrow2":{
            "SID":"frostarrow2",
            "icon":116,
            "AP":[1000,2000,4000],
            "animation":["shoot4"],
            "MC":"FrostArrow",
            "multiMC":true,
            "alternative":"frostarrow",
            "type":"Stats.ATTACK",
            "target":"Target.RANDOM_ENEMY",
            "aim":1,
            "damage":[40,55,70],
            "element":"Element.ICE",
            "statusEffect":"Status.FREEZE",
            "statusChance":[30,35,40],
            "statusDegree":[1]
         },
         
         "nitroarrow2":{
            "SID":"nitroarrow2",
            "icon":118,
            "AP":[1000,2000,4000],
            "animation":["shoot4"],
            "MC":"BombArrow",
            "multiMC":true,
            "alternative":"nitroarrow",
            "type":"Stats.ATTACK",
            "target":"Target.RANDOM_ENEMY",
            "aim":1,
            "damage":[45,60,85],
            "element":"Element.BOMB",
            "statusEffect":"Status.DISPEL",
            "statusChance":[30,35,40,45,50],
            "statusDegree":[1]
         },
         
         "sparkarrow2":{
            "SID":"sparkarrow2",
            "icon":117,
            "AP":[1000,2000,4000],
            "animation":["shoot4"],
            "MC":"SparkArrow",
            "multiMC":true,
            "alternative":"sparkarrow",
            "type":"Stats.ATTACK",
            "target":"Target.RANDOM_ENEMY",
            "aim":1,
            "damage":[50,70,90],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STUN",
            "statusChance":[30,40,50],
            "statusDegree":[1]
         },
         
         "aquaarrow2":{
            "SID":"aquaarrow2",
            "icon":115,
            "AP":[1000,2000,4000],
            "animation":["shoot4"],
            "MC":"AquaArrow",
            "multiMC":true,
            "alternative":"aquaarrow",
            "type":"Stats.ATTACK",
            "target":"Target.RANDOM_ENEMY",
            "aim":1,
            "damage":[55,75,100],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[100],
            "statusDegree":[1,2,2]
         },
         
         "piercingshot":{
            "SID":"piercingshot",
            "icon":98,
            "AP":[40,150,500],
            "animation":["shoot3"],
            "MC":"PiercingShot",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[40,75,130],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "critical":30,
            "accuracy":300,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "comboshot":{
            "SID":"comboshot",
            "icon":99,
            "AP":[500,1200,3000,7000],
            "animation":["shoot2"],
            "MC":"ComboShot",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[80,120,170,220],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[150],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[150],
            "buffDegree":[100],
            "critical":20,
            "accuracy":120,
            "bonusChance":0.5,
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":2
         },
         
         "arrowrain":{
            "SID":"arrowrain",
            "icon":97,
            "AP":[500,1000,2000,4000,8000],
            "animation":["shoot4"],
            "MC":"ArrowRain",
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[30,40,50,70,90],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "critical":20,
            "accuracy":100,
            "cooldownTime":2,
            "bonus":"Spell.BERSERKABLE"
         },
         
         "renew":{
            "SID":"renew",
            "icon":103,
            "AP":[10,50],
            "animation":["magic1"],
            "MC":"Renew",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "aim":3,
            "damage":[20,40]
         },
         
         "remedy":{
            "SID":"remedy",
            "icon":104,
            "AP":[250,1000,3000],
            "animation":["magic1"],
            "MC":"Remedy",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "aim":3,
            "damage":[50,65,80],
            "statusDegree":[1,2,3],
            "statusEffect":["Status.BLESS"],
            "statusChance":[0]
         },
         

         
         "motherearth":{
            "SID":"motherearth",
            "icon":121,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic2"],
            "MC":"MotherEarth",
            "limit":true,
            "jump":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[70,130,200,270,350],
            "element":"Element.BIO",
            "statusEffect":"Status.POISON",
            "statusChance":[100,100,100,100,100],
            "statusDegree":[5,6,7,8,9],
            "accuracy":200
         },
         
         "mightyoak":{
            "SID":"mightyoak",
            "icon":120,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic1"],
            "MC":"MightyOak",
            "limit":true,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[120,200,290,390,500],
            "element":"Element.EARTH",
            "elementDegree":100,
            "accuracy":200
         },
         
         "backstab":{
            "SID":"backstab",
            "icon":125,
            "AP":[0,200,2000],
            "animation":["attack1"],
            "unsyphonable":true,
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":1,
            "damage":[40,80,150],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "bonus":"Spell.BERSERKABLE"
         },
         
         "rapidslash":{
            "SID":"multistab",
            "icon":130,
            "AP":[40,200],
            "animation":["attack2"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,80],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "critical":15,
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":2
         },
         
         "rapidslash2":{
            "SID":"bladeblitz",
            "icon":132,
            "AP":[1000,3500,7000],
            "animation":["attack3"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[120,170,230],
            "element":"Element.WEAPON",
            "statusEffect":"Status.WEAPON",
            "statusChance":[150],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[150],
            "buffDegree":[100],
            "critical":15,
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":2
         },
         
         "swiftslash":{
            "SID":"swiftslash",
            "icon":126,
            "AP":[40,400,1200,4000],
            "animation":["attack4"],
            "jump":true,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[25,45,70,100],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "accuracy":150,
            "bonus":"Spell.BERSERKABLE",
            "cooldownTime":2
         },
         
         "ninelives":{
            "SID":"ninelives",
            "icon":144,
            "AP":[60,180,500,2000,6000],
            "animation":["special2"],
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "damage":[10,15,25,30,40],
            "statusChance":[100],
            "statusDegree":[1,2,2,3,3],
            "statusEffect":["Status.AUTOLIFE"],
            "statusChance":[0],
            "cooldownTime":11
         },
         
         "starblast":{
            "SID":"starblast",
            "icon":127,
            "AP":[60,180,500,2000,6000],
            "animation":["special1"],
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,90,140,200,260],
            "element":"Element.NONE",
            "statusEffect":"Status.DISPEL",
            "statusChance":[100,100,100,110,120],
            "statusDegree":[1],
            "accuracy":150,
            "cooldownTime":11
         },
         
         "sworddance":{
            "SID":"sworddance",
            "icon":135,
            "AP":[50,150],
            "animation":["attack5"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40,70],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100]
         },
         
         "sworddance2":{
            "SID":"sworddance2",
            "icon":136,
            "AP":[500,1500],
            "animation":["attack5"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[100,130],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100]
         },
         
         "sworddance3":{
            "SID":"sworddance3",
            "icon":137,
            "AP":[4000,9000],
            "animation":["attack5"],
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[165,200],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100]
         },
         
         "darkslash":{
            "SID":"darkslash",
            "icon":147,
            "AP":[30,150,500],
            "animation":["attack5"],
            "MC":"DarkSlash",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[45,75,110],
            "element":"Element.DARK",
            "statusEffect":"Status.CURSE",
            "statusChance":[20,30,40],
            "statusDegree":[3,3,3]
         },
         
         "darkslash2":{
            "SID":"darkslash2",
            "icon":148,
            "AP":[2000,5000],
            "animation":["attack5"],
            "MC":"DarkSlash2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[150,200],
            "element":"Element.DARK",
            "statusEffect":"Status.CURSE",
            "statusChance":[50,60,75],
            "statusDegree":[4,4,5]
         },
         
         "holyslash":{
            "SID":"holyslash",
            "icon":140,
            "AP":[30,150,500],
            "animation":["attack5"],
            "MC":"HolySlash",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[45,75,110],
            "element":"Element.HOLY",
            "statusEffect":"Status.SYPHON",
            "statusChance":[20,30,40],
            "statusDegree":[1,1,1]
         },
         
         "holyslash2":{
            "SID":"holyslash2",
            "icon":141,
            "AP":[2000,5000],
            "animation":["attack5"],
            "MC":"HolySlash2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[150,200],
            "element":"Element.HOLY",
            "statusEffect":"Status.SYPHON",
            "statusChance":[50,60,75],
            "statusDegree":[2,2,3]
         },
         
         "lightningslash":{
            "SID":"lightningslash",
            "icon":152,
            "AP":[30,150,500],
            "animation":["attack5"],
            "MC":"LightningSlash",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[45,75,110],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STUN",
            "statusChance":[5,10,15],
            "statusDegree":[1,1,1]
         },
         
         "lightningslash2":{
            "SID":"lightningslash2",
            "icon":153,
            "AP":[2000,5000],
            "animation":["attack5"],
            "MC":"LightningSlash2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[150,200],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STUN",
            "statusChance":[20,25,30],
            "statusDegree":[1,1,2]
         },
         
         "windslash":{
            "SID":"windslash",
            "icon":145,
            "AP":[30,150,500],
            "animation":["attack5"],
            "MC":"WindSlash",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[45,75,110],
            "element":"Element.WIND",
            "statusEffect":"Status.WEAKEN",
            "statusChance":[20,30,40],
            "statusDegree":[3,3,3]
         },
         
         "windslash2":{
            "SID":"windslash2",
            "icon":146,
            "AP":[2000,5000],
            "animation":["attack5"],
            "MC":"WindSlash2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[155,210],
            "element":"Element.WIND",
            "statusEffect":"Status.WEAKEN",
            "statusChance":[50,60,75],
            "statusDegree":[4,4,5]
         },
         
         "waterslash":{
            "SID":"waterslash",
            "icon":142,
            "AP":[30,150,500],
            "animation":["attack5"],
            "MC":"WaterSlash",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[45,75,110],
            "element":"Element.WATER",
            "statusEffect":"Status.BAD_LUCK",
            "statusChance":[20,30,40],
            "statusDegree":[3,3,3]
         },
         
         "waterslash2":{
            "SID":"waterslash2",
            "icon":143,
            "AP":[2000,5000],
            "animation":["attack5"],
            "MC":"WaterSlash2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[150,200],
            "element":"Element.WATER",
            "statusEffect":"Status.BAD_LUCK",
            "statusChance":[50,60,75],
            "statusDegree":[4,4,5]
         },
         
         "sushicat":{
            "SID":"sushicat",
            "icon":138,
            "AP":[300,1000],
            "animation":["magic4"],
            "MC":"SushiCat",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80,130],
            "element":"Element.NONE",
            "cooldownTime":3
         },
         
         "sushicat2":{
            "SID":"sushicat2",
            "icon":139,
            "AP":[3000,7000],
            "animation":["magic4"],
            "MC":"SushiCat",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[200,250],
            "element":"Element.NONE",
            "statusDegree":[2,3],
            "statusEffect":["Status.GOOD_LUCK"],
            "statusChance":[0],
            "cooldownTime":3
         },
         
         "berserk":{
            "SID":"berserk",
            "icon":133,
            "AP":[20,150],
            "animation":["magic4"],
            "MC":"Berserk",
            "type":"Stats.NONE",
            "target":"Target.ONE_ANY",
            "statusEffect":"Status.BERSERK",
            "statusChance":[100],
            "statusDegree":[2,4,6,8],
            "statusOnly":true,
            "cooldownTime":2
         },
         
         "berserk2":{
            "SID":"berserk2",
            "icon":134,
            "AP":[700,2000],
            "animation":["magic4"],
            "MC":"Berserk",
            "alternative":"berserk",
            "multiMC":true,
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "statusEffect":"Status.BERSERK",
            "statusChance":[100],
            "statusDegree":[2,3],
            "statusOnly":true,
            "cooldownTime":3
         },
         
         "charm":{
            "SID":"cherish",
            "icon":128,
            "AP":[20,200],
            "animation":["magic5"],
            "MC":"Charm",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "statusDegree":[4,6,9],
            "statusOnly":true,
            "statusEffect":["Status.LOVED"],
            "statusChance":[0],
            "cooldownTime":3
         },
         
         "charm2":{
            "SID":"cherish2",
            "icon":129,
            "AP":[2500],
            "animation":["magic5"],
            "MC":"Charm",
            "alternative":"charm",
            "multiMC":true,
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "statusDegree":[2],
            "statusOnly":true,
            "statusEffect":["Status.LOVED"],
            "statusChance":[0],
            "cooldownTime":4
         },
         
         "thecreator":{
            "SID":"thecreator",
            "icon":151,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic3"],
            "MC":"Creator",
            "limit":true,
            "jump":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[100,170,260,350,450],
            "element":"Element.HOLY",
            "statusDegree":[2,3,4,4,5],
            "statusEffect":["Status.GOOD_LUCK"],
            "statusChance":[0],
            "accuracy":150
         },
         
         "thedestroyer":{
            "SID":"thedestroyer",
            "icon":150,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic3"],
            "MC":"Destroyer",
            "limit":true,
            "jump":true,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[100,170,260,350,450],
            "element":"Element.DARK",
            "statusEffect":"Status.DISPEL",
            "statusChance":[100,125,150,175,200],
            "statusDegree":[1],
            "accuracy":150
         },
         

         
         "snowbunny":{
            "SID":"snowbunny",
            "icon":195,
            "AP":[40,120],
            "animation":["magic1","magic4","magic3","magic2","magic2"],
            "MC":"SnowBunny",
            "multiMC":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[15,25],
            "element":"Element.ICE",
            "statusEffect":"Status.CHILL",
            "statusChance":[40,60],
            "statusDegree":[2,2],
            "cooldownTime":3
         },
         
         "snowcat":{
            "SID":"snowcat",
            "icon":196,
            "AP":[1200,2500,5000],
            "animation":["magic1","magic2","magic3","magic2","magic2"],
            "MC":"SnowCat",
            "multiMC":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[40,55,80],
            "randomness":10,
            "element":"Element.ICE",
            "statusEffect":"Status.CHILL",
            "statusChance":[80,100,120],
            "statusDegree":[2,2,2],
            "cooldownTime":3
         },
         
         "ivy":{
            "SID":"ivy",
            "icon":207,
            "AP":[40,300],
            "animation":["magic2","","","magic2","magic2"],
            "MC":"Ivy",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,60],
            "element":"Element.BIO",
            "statusEffect":"Status.POISON",
            "statusChance":[50,70],
            "statusDegree":[2,3]
         },
         
         "vines":{
            "SID":"vines",
            "icon":208,
            "AP":[1000,2000,4000],
            "animation":["magic2","","","magic2","magic2"],
            "MC":"Vines",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80,120,160],
            "randomness":10,
            "element":"Element.BIO",
            "statusEffect":"Status.POISON",
            "statusChance":[80,90,100],
            "statusDegree":[3,4,5],
            "buffEffect":"Stats.EVADE",
            "buffChance":[100,100,100],
            "buffDegree":[-20,-25,-30]
         },
         
         "energy":{
            "SID":"energy",
            "icon":174,
            "AP":[15,35],
            "animation":["","magic4","shoot1","","magic1"],
            "MC":"Energy",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,50],
            "element":"Element.BOMB",
            "critical":30
         },
         
         "energybomb":{
            "SID":"energy2",
            "icon":175,
            "AP":[150,500],
            "animation":["","magic4","shoot1","","magic4"],
            "MC":"EnergyBomb",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60,90,120,130,140],
            "element":"Element.BOMB",
            "critical":30
         },
         
         "energybarrage":{
            "SID":"energy3",
            "icon":176,
            "AP":[1500,3000,6000],
            "animation":["","magic2","shoot2","","magic4"],
            "MC":"EnergyBlast",
            "alternative":"energybomb",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,65,80],
            "element":"Element.BOMB",
            "critical":30
         },
         
         "bubbles":{
            "SID":"bubbles",
            "icon":50,
            "AP":[15,35],
            "animation":["","magic4","shoot1","magic1","magic1"],
            "MC":"Bubbles",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,50],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[40,60],
            "statusDegree":[2,2],
            "upgrade":"whirlpool"
         },
         
         "whirlpool":{
            "SID":"whirlpool",
            "icon":51,
            "AP":[150,500],
            "animation":["","magic4","shoot1","magic1","magic4"],
            "MC":"Whirlpool",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60,90,120,130,140],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[80,100,120,140,150],
            "statusDegree":[2,2,2,3,3],
            "buffEffect":"Stats.EVADE",
            "buffChance":[60,80,100,100,100],
            "buffDegree":[-15,-20,-25,-30,-35],
            "upgrade":"vortex"
         },
         
         "vortex":{
            "SID":"vortex",
            "icon":52,
            "AP":[1500,3000,6000],
            "animation":["","magic2","shoot2","magic1","magic4"],
            "MC":"Vortex",
            "alternative":"whirlpool",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,65,80],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[50,60,70],
            "statusDegree":[2,2,2],
            "buffEffect":"Stats.EVADE",
            "buffChance":[60,80,100],
            "buffDegree":[-15,-15,-15]
         },
         
         "laserblade":{
            "SID":"laserblade",
            "icon":209,
            "AP":[100,250],
            "animation":["magic2","","magic3","","magic2"],
            "MC":"LaserBlade",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,75],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STAGGER",
            "statusChance":[20,25,30],
            "statusDegree":[1,1,1]
         },
         
         "lasersword":{
            "SID":"lasersword",
            "icon":210,
            "AP":[750,2000,5000],
            "animation":["magic2","","magic3","","magic2"],
            "MC":"LaserSword",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[110,150,190],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STAGGER",
            "statusChance":[30,35,40],
            "statusDegree":[1,1,1]
         },
         
         "bullet":{
            "SID":"bulletbob",
            "icon":177,
            "AP":[100,250],
            "animation":["magic1","","magic1","","magic1"],
            "MC":"Bullet",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,75],
            "element":"Element.BOMB",
            "critical":30
         },
         
         "bigbullet":{
            "SID":"bigbullet",
            "icon":178,
            "AP":[750,2000,5000],
            "animation":["magic1","","magic1","","magic1"],
            "MC":"BigBullet",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[110,150,200],
            "element":"Element.BOMB",
            "critical":30
         },
         
         "powermetal":{
            "SID":"powermetal",
            "icon":179,
            "AP":[600,1200,2500,5000],
            "animation":["magic1","","magic1","","magic2"],
            "MC":"PowerMetal",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[30,40,50,60],
            "element":"Element.WIND",
            "elementDegree":100,
            "accuracy":200,
            "cooldownTime":3
         },
         
         "powermetal2":{
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "damage":[12,24,35,45]
         },
         
         "air":{
            "SID":"air",
            "icon":204,
            "AP":[15,35],
            "animation":["","magic4","shoot1","","magic4"],
            "MC":"Air",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30,50],
            "element":"Element.WIND",
            "statusEffect":"Status.STAGGER",
            "statusChance":[10,20],
            "statusDegree":[1,1]
         },
         
         "airwave":{
            "SID":"air2",
            "icon":205,
            "AP":[150,500],
            "animation":["","magic4","shoot1","","magic4"],
            "MC":"AirWave",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60,90,120,130,140],
            "element":"Element.WIND",
            "statusEffect":"Status.STAGGER",
            "statusChance":[20,25,30,35,40],
            "statusDegree":[2,2,2,2,2]
         },
         
         "shockwave":{
            "SID":"air3",
            "icon":206,
            "AP":[1500,3000,6000],
            "animation":["","magic2","shoot2","","magic4"],
            "MC":"ShockWave",
            "alternative":"airwave",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,65,80],
            "element":"Element.WIND",
            "statusEffect":"Status.STAGGER",
            "statusChance":[20,25,30],
            "statusDegree":[1,1,1]
         },
         
         "sawblade":{
            "SID":"sawblade",
            "icon":199,
            "AP":[100,200],
            "animation":["magic1","","magic1","magic3",""],
            "MC":"Sawblade",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,80,60],
            "element":"Element.NONE",
            "elementDegree":100,
            "statusEffect":"Status.DEATH",
            "statusChance":[10,10],
            "statusDegree":[1,1]
         },
         
         "sawblades":{
            "SID":"sawblades",
            "icon":200,
            "AP":[1000,2000,4000],
            "animation":["magic1","","magic1","magic3",""],
            "MC":"Sawblades",
            "multiMC":true,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[60,100,140],
            "element":"Element.NONE",
            "elementDegree":100,
            "statusEffect":"Status.DEATH",
            "statusChance":[15,20,25],
            "statusDegree":[1,1,1],
            "cooldownTime":2
         },
         
         "gaiaglow":{
            "SID":"gaia",
            "icon":185,
            "AP":[15,35],
            "animation":["","magic4","","magic3","magic4"],
            "MC":"GaiaGlow",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":3,
            "damage":[30,50],
            "element":"Element.EARTH",
            "elementDegree":100,
            "statusEffect":"Status.TIRED",
            "statusChance":[20,40],
            "statusDegree":[2,2]
         },
         
         "gaiabloom":{
            "SID":"gaia2",
            "icon":186,
            "AP":[150,500],
            "animation":["","magic4","","magic3","magic4"],
            "MC":"GaiaBloom",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "aim":3,
            "damage":[60,90,120,130,140],
            "element":"Element.EARTH",
            "elementDegree":100,
            "statusEffect":"Status.TIRED",
            "statusChance":[60,80,100,120,140],
            "statusDegree":[3,4,5,5,5]
         },
         
         "gaiablossom":{
            "SID":"gaia3",
            "icon":187,
            "AP":[1500,3000,6000],
            "animation":["","magic2","","magic3","magic4"],
            "MC":"GaiaBlossom",
            "alternative":"gaiabloom",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50,65,80],
            "element":"Element.EARTH",
            "elementDegree":100,
            "statusEffect":"Status.TIRED",
            "statusChance":[50,60,70],
            "statusDegree":[3,3,3]
         },
         
         "firespin":{
            "SID":"firespin",
            "icon":173,
            "AP":[750,1500,3000,6000],
            "animation":["","magic2","","magic1","magic4"],
            "MC":"FireSpin",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[25,35,45,60],
            "element":"Element.FIRE",
            "elementDegree":100,
            "statusEffect":"Status.BURN",
            "statusChance":[85,90,95,100],
            "statusDegree":[3,3,3,3],
            "buffEffect":"Stats.DEFENCE",
            "buffChance":[70,80,90,100],
            "buffDegree":[-15,-20,-25,-30],
            "cooldownTime":2
         },
         
         "holyfire":{
            "SID":"purgingflame",
            "icon":203,
            "AP":[750,1500,3000,6000],
            "animation":["magic1","magic5","shoot1","magic1",""],
            "MC":"HolyFire",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,80,110,150],
            "element":"Element.HOLY",
            "elementDegree":100,
            "accuracy":150,
            "statusEffect":"Status.DISPEL",
            "statusChance":[80,90,95,100],
            "statusDegree":[1,1,1,1],
            "buffEffect":"Stats.MAGIC_ATTACK",
            "buffChance":[80,90,95,100],
            "buffDegree":[-20,-30,-40,-50]
         },
         
         "screamer":{
            "SID":"screamer",
            "icon":197,
            "AP":[1200,2500,5000],
            "animation":["magic1","magic1","","magic1","magic3"],
            "MC":"Screamer",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[30,60,100],
            "element":"Element.DARK",
            "elementDegree":100,
            "buffEffect":"Stats.ATTACK",
            "buffChance":[100,100,100],
            "buffDegree":[-20,-25,-30],
            "accuracy":120,
            "cooldownTime":4
         },
         
         "heal":{
            "SID":"heal",
            "icon":181,
            "AP":[10,30,60],
            "animation":["magic1","magic5","","magic1","magic5"],
            "MC":"Heal",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "damage":[20,30,40,60,80,90,95,100],
            "cooldownTime":2
         },
         
         "healmore":{
            "SID":"healmore",
            "icon":182,
            "AP":[300,700,1500,3000,10000],
            "animation":["magic1","magic1","","magic1","magic5"],
            "MC":"HealMore",
            "alternative":"heal",
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "damage":[15,20,25,35,50],
            "cooldownTime":2
         },
         
         "revive":{
            "SID":"revive",
            "icon":184,
            "AP":[150,600,3000,8000],
            "animation":["","magic5","","magic1","magic5"],
            "MC":"Revive",
            "type":"Stats.NONE",
            "target":"Target.ANY_ALLY",
            "damage":[10,50,80,120],
            "statusEffect":["Status.AUTOLIFE"],
            "statusChance":[0],
            "statusDegree":[2,3,4,5]
         },
         
         "purify":{
            "SID":"purify",
            "icon":183,
            "AP":[500],
            "animation":["magic1","magic5","","magic1","magic5"],
            "MC":"Purify",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY_OR_ALL_ALLY",
            "statusOnly":true,
            "cooldownTime":3
         },
         
         "lockon":{
            "SID":"lockon",
            "icon":190,
            "AP":[50,200,1000],
            "animation":["magic1","magic5","magic2","magic1","magic5"],
            "MC":"LockOn",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "buffEffect":"lockon",
            "buffChance":[0],
            "buffDegree":[40,55,70],
            "statusDegree":[3,4,5],
            "statusEffect":["Status.GOOD_LUCK"],
            "statusChance":[0],
            "statusOnly":true,
            "cooldownTime":2
         },
         
         "protect":{
            "SID":"protect",
            "icon":192,
            "AP":[100,400,1500,3000,6000],
            "animation":["magic1","","","magic1","magic5"],
            "MC":"Protect",
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "buffEffect":"protect",
            "buffChance":[0],
            "buffDegree":[30,40,50,55,60],
            "statusOnly":true,
            "cooldownTime":6
         },
         
         "barrier":{
            "SID":"barrier",
            "icon":191,
            "AP":[100,400,1500,3000,6000],
            "animation":["","magic5","magic2","","magic5"],
            "MC":"Barrier",
            "buffEffect":"barrier",
            "buffChance":[0],
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "buffDegree":[30,40,50,55,60],
            "statusOnly":true,
            "cooldownTime":6
         },
         
         "dispel":{
            "SID":"dispel",
            "icon":194,
            "AP":[300,1000,3000,8000],
            "animation":["magic1","magic1","magic2","magic1",""],
            "MC":"Dispel",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY_OR_ALL_ALLY",
            "statusEffect":"Status.DISPEL",
            "statusChance":[70,85,95,120],
            "statusDegree":[1,1,1,1],
            "statusOnly":true,
            "accuracy":150,
            "cooldownTime":6
         },
         
         "flare":{
            "SID":"flare",
            "icon":85,
            "AP":[300,1000,3000],
            "animation":["","magic1","magic2","",""],
            "MC":"Flare",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "buffEffect":"Stats.ACCURACY",
            "buffChance":[80,90,100],
            "buffDegree":[-20,-25,-30],
            "statusOnly":true,
            "accuracy":150,
            "cooldownTime":3
         },
         
         "bind":{
            "SID":"bind",
            "icon":189,
            "AP":[300,1000,3000],
            "animation":["magic4","","magic1","magic1",""],
            "MC":"Bind",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "buffEffect":"Stats.EVADE",
            "buffChance":[100,100,100],
            "buffDegree":[-20,-35,-50],
            "statusOnly":true,
            "accuracy":150,
            "cooldownTime":3
         },
         
         "debilitate":{
            "SID":"debilitate",
            "icon":193,
            "AP":[100,400,1500,5000],
            "animation":["magic1","magic1","magic2","",""],
            "MC":"Debilitate",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "buffEffect":"Stats.DEFENCE",
            "buffChance":[85,90,95,100],
            "buffDegree":[-20,-30,-40,-50],
            "statusOnly":true,
            "cooldownTime":6
         },
         
         "enfeeble":{
            "SID":"enfeeble",
            "icon":202,
            "AP":[100,400,1500,5000],
            "animation":["","magic1","magic2","magic1",""],
            "MC":"Enfeeble",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[85,90,95,100],
            "buffDegree":[-20,-30,-40,-50],
            "statusOnly":true,
            "cooldownTime":6
         },
         
         "teradrill":{
            "SID":"teradrill",
            "icon":201,
            "AP":[200,600,2000,5000],
            "animation":["magic2","","magic3","magic2",""],
            "MC":"TeraDrill",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60,90,120,150],
            "element":"Element.EARTH",
            "elementDegree":25,
            "critical":20,
            "cooldownTime":3
         },
         
         "guardian":{
            "SID":"guardian",
            "icon":28,
            "AP":[200,600,1200,2500,5000],
            "MP":[6,10,14,19,25],
            "animation":["magic1","magic5","","","magic5"],
            "MC":"Guardian",
            "type":"Stats.NONE",
            "buffEffect":"guardian",
            "buffChance":[0],
            "target":"Target.ONE_ALLY",
            "buffDegree":[40,50,60,70,80],
            "statusOnly":true,
            "cooldownTime":2
         },
         
         "reflex":{
            "SID":"reflex",
            "icon":188,
            "AP":[200,1000,3000,10000],
            "animation":["magic1","","","magic1","magic5"],
            "MC":"Reflex",
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "buffEffect":"reflex",
            "buffChance":[0],
            "buffDegree":[25,30,35,40],
            "statusOnly":true,
            "cooldownTime":6
         },
         
         "partytime":{
            "SID":"encore",
            "icon":149,
            "AP":[1000],
            "animation":["magic4","magic4","magic1","magic1","magic1"],
            "MC":"PartyTime",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "statusDegree":[1],
            "statusOnly":true,
            "cooldownTime":3
         },
         
         "gale":{
            "SID":"gale",
            "icon":21,
            "AP":[100,250],
            "MP":[7,9],
            "animation":["magic1","","magic2","magic1","magic1"],
            "MC":"Gale",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50,75],
            "element":"Element.WIND",
            "statusEffect":"Status.LIGHT",
            "statusChance":[20,30,40],
            "statusDegree":[2,2,2]
         },
         
         "tempest":{
            "SID":"tempest",
            "icon":22,
            "AP":[750,2000,5000],
            "MP":[14,18,22],
            "animation":["magic1","","magic2","magic1","magic4"],
            "MC":"Tempest",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[110,150,190],
            "element":"Element.WIND",
            "statusEffect":"Status.LIGHT",
            "statusChance":[50,50,50],
            "statusDegree":[2,2,2]
         },
         
         "abzero":{
            "SID":"abzero",
            "icon":170,
            "AP":[100,300,1000,3000,10000],
            "animation":["","magic1","","magic1","magic3"],
            "MC":"Abzero",
            "jump":true,
            "limit":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[80,130,190,260,330],
            "element":"Element.ICE",
            "elementDegree":100,
            "statusEffect":"Status.FREEZE",
            "statusChance":[80,85,90,95,100],
            "statusDegree":[3,3,4,4,5],
            "buffEffect":"Stats.EVADE",
            "buffChance":[100],
            "buffDegree":[-30,-35,-40,-45,-50],
            "accuracy":200
         },
         
         "tsunami":{
            "SID":"tsunami",
            "icon":171,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic4","magic2","","magic1","magic3"],
            "MC":"Tsunami",
            "jump":true,
            "limit":true,
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "damage":[90,150,240,340,450],
            "element":"Element.WATER",
            "elementDegree":100,
            "statusEffect":"Status.DEATH",
            "statusChance":[10,10,15,15,20],
            "statusDegree":[1],
            "accuracy":300
         },
         
         "tsunami2":{
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "statusEffect":"Status.WET",
            "statusChance":[300,300,300,300,300],
            "statusDegree":[9,9,9,9,9,9],
            "accuracy":300,
            "statusOnly":true
         },
         
         "supernova":{
            "SID":"supernova",
            "icon":169,
            "AP":[100,300,1000,3000,10000],
            "animation":["","magic2","magic1","","magic3"],
            "MC":"Supernova",
            "limit":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL",
            "damage":[200,300,400,500,600],
            "element":"Element.FIRE",
            "elementDegree":50,
            "statusEffect":"Status.BURN",
            "statusChance":[100,150,200,250,300],
            "statusDegree":[9,9,9,9,9,9],
            "accuracy":9000
         },
         
         "deathmetal":{
            "SID":"deathmetal",
            "icon":180,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic1","","magic1","","magic5"],
            "MC":"DeathMetal",
            "jump":true,
            "limit":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[80,140,210,290,380],
            "element":"Element.WIND",
            "elementDegree":100,
            "statusEffect":"Status.MORALE",
            "statusChance":[0],
            "statusDegree":[5],
            "accuracy":200
         },
         
         "deathmetal2":{
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "damage":[40,60,90,120,150]
         },
         
         "annihilate":{
            "SID":"annihilate",
            "icon":172,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic3","","","shoot5","magic6"],
            "MC":"Annihilate",
            "jump":true,
            "limit":true,
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[80,120,180,250,350],
            "element":"Element.NONE",
            "elementDegree":100,
            "statusEffect":"Status.DEATH",
            "statusChance":[50,65,80,90,100],
            "statusDegree":[1,1,1,1,1],
            "accuracy":75
         },
         
         "ion":{
            "SID":"ion",
            "icon":167,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic4","","magic1","","magic3"],
            "MC":"Ion",
            "jump":true,
            "limit":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[80,150,240,330,420],
            "element":"Element.THUNDER",
            "elementDegree":100,
            "statusEffect":"Status.STUN",
            "statusChance":[30,35,40,45,50],
            "statusDegree":[2,2,2,2,2],
            "accuracy":300
         },
         
         "blackhole":{
            "SID":"blackhole",
            "icon":168,
            "AP":[100,300,1000,3000,10000],
            "animation":["","magic2","shoot2","","magic4"],
            "MC":"BlackHole",
            "jump":true,
            "limit":true,
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[150,230,320,420,550],
            "element":"Element.DARK",
            "elementDegree":100,
            "statusEffect":"Status.HEAVY",
            "statusChance":[100],
            "statusDegree":[1,2,3,4,5],
            "accuracy":150
         },
         
         "rapture":{
            "SID":"rapture",
            "icon":166,
            "AP":[100,300,1000,3000,10000],
            "animation":["magic1","magic2","magic3","magic2","magic4"],
            "MC":"Rapture",
            "jump":true,
            "limit":true,
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "damage":[100,170,260,360,480],
            "element":"Element.WEAPON",
            "elementDegree":100,
            "statusEffect":"Status.WEAPON",
            "statusChance":[100],
            "statusDegree":[100],
            "buffEffect":"Stats.WEAPON",
            "buffChance":[100],
            "buffDegree":[100],
            "accuracy":200
         },
         
         "bones":{
            "SID":"bones",
            "MC":"Bones",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50],
            "element":"Element.DARK",
            "elementDegree":50,
            "statusEffect":"Status.DOOM",
            "statusChance":[20],
            "statusDegree":[5]
         },
         
         "bonestar":{
            "SID":"bonestar",
            "MC":"BoneStar",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.DARK",
            "statusEffect":"Status.SYPHON",
            "statusChance":[50],
            "statusDegree":[2]
         },
         
         "groundblade":{
            "SID":"groundblade",
            "MC":"GroundBlade",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.ICE",
            "elementDegree":50,
            "statusEffect":"Status.CHILL",
            "statusChance":[25],
            "statusDegree":[2]
         },
         
         "luckystar2":{
            "SID":"fallingstar",
            "MC":"LuckyStar2",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.NONE",
            "elementDegree":0,
            "critical":25,
            "randomness":150
         },
         
         "firerock":{
            "SID":"firerock",
            "MC":"FireRock",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50],
            "element":"Element.FIRE",
            "elementDegree":75,
            "statusEffect":"Status.DRY",
            "statusChance":[75],
            "statusDegree":[2]
         },
         
         "stalactite":{
            "SID":"stalactite",
            "MC":"Stalactite",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40],
            "element":"Element.EARTH",
            "elementDegree":75,
            "statusEffect":"Status.STAGGER",
            "statusChance":[50],
            "statusDegree":[2]
         },
         
         "stalactite2":{
            "SID":"stalactite2",
            "MC":"Stalactite2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80],
            "element":"Element.EARTH",
            "elementDegree":75,
            "statusEffect":"Status.STAGGER",
            "statusChance":[75],
            "statusDegree":[2]
         },
         
         "fume":{
            "SID":"fume",
            "MC":"Fume",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50],
            "element":"Element.FIRE",
            "statusEffect":"Status.BURN",
            "statusChance":[75],
            "statusDegree":[3]
         },
         
         "eruption":{
            "SID":"eruption",
            "MC":"Eruption",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80],
            "element":"Element.FIRE",
            "statusEffect":"Status.BURN",
            "statusChance":[100],
            "statusDegree":[5]
         },
         
         "scald":{
            "SID":"scald",
            "MC":"Scald",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40],
            "element":"Element.WATER",
            "statusEffect":"Status.BURN",
            "statusChance":[50],
            "statusDegree":[2]
         },
         
         "rain":{
            "SID":"rain",
            "MC":"Rain",
            "target":"Target.ALL"
         },
        
         
         "sandstorm":{
            "SID":"sandstorm",
            "MC":"Sandstorm",
            "target":"Target.ALL"
         },
         
         "hail":{
            "SID":"hail",
            "MC":"Hail",
            "target":"Target.ALL"
         },
         
         "nitro":{
            "SID":"nitro",
            "MC":"Nitro",
            "target":"Target.ONE_ENEMY"
         },
         
         "acid":{
            "SID":"acid",
            "MC":"Acid",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.BIO",
            "statusEffect":"Status.BURN",
            "statusChance":[100],
            "statusDegree":[3],
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[100],
            "buffDegree":[-25]
         },
         
         "acid2":{
            "SID":"acid2",
            "MC":"Acid2",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.CENTER_ENEMY",
            "damage":[38],
            "element":"Element.BIO",
            "elementDegree":100,
            "statusEffect":"Status.BURN",
            "statusChance":[66],
            "statusDegree":[3]
         },
         
         "bamboo":{
            "SID":"bamboo",
            "MC":"Bamboo",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40],
            "element":"Element.BIO",
            "elementDegree":50,
            "statusEffect":"Status.POISON",
            "statusChance":[20],
            "statusDegree":[2]
         },
         
         "bamboo2":{
            "SID":"bamboo2",
            "MC":"Bamboo2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.BIO",
            "elementDegree":50,
            "statusEffect":"Status.POISON",
            "statusChance":[50],
            "statusDegree":[2]
         },
         
         "bluebolt":{
            "SID":"bluebolt",
            "MC":"BlueBolt",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[30],
            "element":"Element.THUNDER",
            "statusEffect":"Status.CONFUSE",
            "statusChance":[10],
            "statusDegree":[1]
         },
         
         "bubblering":{
            "SID":"bubblering",
            "MC":"BubbleRing",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.WATER",
            "statusEffect":"Status.SYPHON",
            "statusChance":[100],
            "statusDegree":[1]
         },
         
         "deepfreeze":{
            "SID":"deepfreeze",
            "MC":"Blizzard",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.ICE",
            "statusEffect":"Status.FREEZE",
            "statusChance":[50],
            "statusDegree":[3]
         },
         
         "wafer":{
            "SID":"wafer",
            "MC":"Wafer",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30],
            "element":"Element.NONE"
         },
         
         "present":{
            "SID":"present",
            "MC":"Present",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.BOMB",
            "statusEffect":"Status.BAD_LUCK",
            "statusChance":[100],
            "statusDegree":[2]
         },
         
         "swordswirl":{
            "name":"Sabre Spin",
            "MC":"SwordDance",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[110],
            "element":"Element.HOLY",
            "elementDegree":25,
            "statusEffect":"Status.DEATH",
            "statusChance":[10],
            "statusDegree":[1],
            "accuracy":50
         },
         
         "iceneedle":{
            "name":"Ice Needle",
            "MC":"IceNeedle",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[100],
            "element":"Element.ICE",
            "statusEffect":"Status.DEATH",
            "statusChance":[33],
            "statusDegree":[1]
         },
         
         "plasmacage":{
            "SID":"plasmacage",
            "MC":"PlasmaCage",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.THUNDER",
            "statusEffect":"Status.STUN",
            "statusChance":[100],
            "statusDegree":[2],
            "accuracy":150
         },
         
         "tankcannon":{
            "SID":"tankcannon",
            "MC":"TankCannon",
            "target":"Target.ALL_ENEMY"
         },
         
         "candycane":{
            "SID":"candycanes",
            "MC":"CandyCane",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50],
            "element":"Element.NONE"
         },
         
         "candycane2":{
            "SID":"candycanes",
            "MC":"CandyCane2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[100],
            "element":"Element.NONE"
         },
         
         "cactus":{
            "SID":"cactus",
            "MC":"Cactus",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[28],
            "element":"Element.BIO",
            "elementDegree":75,
            "statusEffect":"Status.STUN",
            "statusChance":[20],
            "statusDegree":[1],
            "accuracy":90
         },
         
         "cacti":{
            "SID":"cacti",
            "MC":"Cacti",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.BIO",
            "elementDegree":75,
            "statusEffect":"Status.STUN",
            "statusChance":[50],
            "statusDegree":[1],
            "accuracy":90
         },
         
         "thunderblast":{
            "name":"Electric Blast",
            "MC":"ThunderBlast",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[24],
            "element":"Element.THUNDER",
            "elementDegree":100,
            "statusEffect":"Status.STAGGER",
            "statusChance":[40],
            "statusDegree":[1]
         },
         
         "pixelfish":{
            "SID":"bonefish",
            "MC":"PixelFish",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[180],
            "element":"Element.NONE",
            "statusEffect":"Status.DISABLE",
            "statusChance":[100],
            "statusDegree":[1]
         },
         
         "pixelriceball":{
            "SID":"riceball",
            "MC":"PixelRiceball",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[250],
            "element":"Element.NONE",
            "statusEffect":"Status.STUFFED",
            "statusChance":[100],
            "statusDegree":[5]
         },
         
         "pixelfork":{
            "name":"Fork Frenzy",
            "MC":"PixelFork",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[300],
            "element":"Element.NONE",
            "statusEffect":"Status.HUNGRY",
            "statusChance":[100],
            "statusDegree":[2]
         },
         
         "pixelswords":{
            "name":"Unlimited Bladeworks",
            "MC":"PixelSwords",
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[210],
            "element":"Element.NONE",
            "statusEffect":"Status.DISPEL",
            "statusChance":[33],
            "statusDegree":[1]
         },
         
         "sand":{
            "SID":"sand",
            "MC":"Sand",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40],
            "element":"Element.EARTH",
            "buffEffect":"Stats.ACCURACY",
            "buffChance":[50],
            "buffDegree":[-25]
         },
         
         "sanddune":{
            "SID":"sanddune",
            "MC":"SandDune",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[100],
            "element":"Element.EARTH",
            "buffEffect":"Stats.ACCURACY",
            "buffChance":[100],
            "buffDegree":[-50]
         },
         
         "mushroom":{
            "SID":"mushroom",
            "MC":"Mushroom",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[25],
            "element":"Element.BIO",
            "elementDegree":50,
            "statusEffect":"Status.STUN",
            "statusChance":[20],
            "statusDegree":[1]
         },
         
         "lifedrain":{
            "SID":"lifedrain",
            "MC":"LifeDrain",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60]
         },
         
         "harden":{
            "name":"Harden",
            "MC":"Harden",
            "type":"Stats.NONE",
            "target":"Target.ONE_ANY",
            "statusEffect":"Status.LOVED",
            "statusChance":[100],
            "statusDegree":[3],
            "statusOnly":true
         },
         
         "lighten":{
            "SID":"lighten",
            "MC":"Lighten",
            "type":"Stats.NONE",
            "target":"Target.ONE_ANY",
            "statusEffect":"Status.ENCHANTED",
            "statusChance":[100],
            "statusDegree":[3],
            "statusOnly":true
         },
         
         "darken":{
            "SID":"darken",
            "MC":"Darken",
            "type":"Stats.NONE",
            "target":"Target.ONE_ANY",
            "statusEffect":"Status.INVISIBLE",
            "statusChance":[100],
            "statusDegree":[3],
            "statusOnly":true
         },
         
         "puff":{
            "SID":"smokepuff",
            "MC":"Puff",
            "type":"Stats.NONE",
            "target":"Target.ONE_ANY",
            "statusEffect":"Status.SHROUD",
            "statusChance":[100],
            "statusDegree":[3]
         },
         
         "puff2":{
            "SID":"smokepuff",
            "MC":"Puff2",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[20],
            "element":"Element.NONE",
            "elementDegree":100,
            "accuracy":300
         },
         
         "hellfire":{
            "name":"Hellfire",
            "MC":"HellFire",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[100],
            "element":"Element.FIRE",
            "statusEffect":"Status.BERSERK",
            "statusChance":[66],
            "statusDegree":[3]
         },
         
         "slimify":{
            "SID":"confusion",
            "MC":"Slimify",
            "type":"Stats.NONE",
            "target":"Target.ONE_ENEMY",
            "statusEffect":"Status.CONFUSE",
            "statusChance":[100],
            "statusDegree":[3],
            "statusOnly":true
         },
         
         "ink":{
            "SID":"ink",
            "MC":"Ink",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[65],
            "element":"Element.DARK",
            "elementDegree":100,
            "statusEffect":"Status.INVISIBLE",
            "statusChance":[100],
            "statusDegree":[3],
            "buffEffect":"Stats.ACCURACY",
            "buffChance":[100],
            "buffDegree":[-50]
         },
         
         "chocolate":{
            "SID":"chocolate",
            "MC":"Chocolate",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[20],
            "element":"Element.EARTH",
            "elementDegree":100,
            "buffEffect":"Stats.ACCURACY",
            "buffChance":[100],
            "buffDegree":[-10],
            "statusEffect":"Status.HEAVY",
            "statusChance":[100],
            "statusDegree":[2]
         },
         
         "tentacles":{
            "SID":"tentacles",
            "MC":"Tentacles",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.NONE",
            "buffEffect":"Stats.EVADE",
            "buffChance":[100],
            "buffDegree":[-50],
            "statusEffect":"Status.POISON",
            "statusChance":[100],
            "statusDegree":[3]
         },
         
         "recycle":{
            "name":"Recycle",
            "MC":"Recycle",
            "type":"Stats.NONE",
            "target":"Target.ONE_ANY",
            "element":"Element.NONE",
            "buffEffect":"Stats.EVADE"
         },
         
         "snowblast":{
            "name":"Snow Blast",
            "MC":"SnowBlast",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.CENTER_ENEMY",
            "damage":[80],
            "element":"Element.ICE",
            "elementDegree":100,
            "statusEffect":"Status.FREEZE",
            "statusChance":[100],
            "statusDegree":[5]
         },
         
         "slowdown":{
            "SID":"slowdown",
            "MC":"SlowDown",
            "type":"Stats.NONE",
            "target":"Target.ONE_ENEMY",
            "statusEffect":"Status.STUN",
            "statusChance":[100],
            "statusDegree":[1],
            "statusOnly":true
         },
         
         "speedup":{
            "SID":"speedup",
            "MC":"SpeedUp",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "statusEffect":"Status.HASTE",
            "statusOnly":true
         },
         
         "rootspike":{
            "SID":"poisonroot",
            "MC":"RootSpike",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[85],
            "element":"Element.BIO",
            "elementDegree":50,
            "statusEffect":"Status.POISON",
            "statusChance":[50],
            "statusDegree":[3]
         },
         
         "rootspike2":{
            "SID":"searoot",
            "MC":"RootSpike2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[75],
            "element":"Element.WATER",
            "elementDegree":50,
            "statusEffect":"Status.WET",
            "statusChance":[50],
            "statusDegree":[2]
         },
         
         "rootspike3":{
            "SID":"burningroot",
            "MC":"RootSpike3",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80],
            "element":"Element.FIRE",
            "elementDegree":50,
            "statusEffect":"Status.DRY",
            "statusChance":[50],
            "statusDegree":[2]
         },
         
         "rootspike4":{
            "name":"Alien Root",
            "MC":"RootSpike4",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80],
            "element":"Element.BIO",
            "elementDegree":50,
            "statusEffect":"Status.VIRUS",
            "statusChance":[50],
            "statusDegree":[3]
         },
         
         "smallfireball":{
            "name":"",
            "MC":"SmallFireball",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.FIRE",
            "statusEffect":"Status.SCORCHED",
            "statusChance":[100],
            "statusDegree":[2]
         },
         
         "smallholyball":{
            "name":"",
            "MC":"SmallHolyball",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[90],
            "element":"Element.HOLY",
            "statusEffect":"Status.WEAKEN",
            "statusChance":[100],
            "statusDegree":[3]
         },
         
         "blast":{
            "SID":"bombblast",
            "MC":"Blast",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.BOMB",
            "elementDegree":100,
            "statusEffect":"Status.STAGGER",
            "statusChance":[50],
            "statusDegree":[1,1,1,1]
         },
         
         "bigblast":{
            "SID":"bigblast",
            "MC":"BigBlast",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[50],
            "element":"Element.BOMB",
            "elementDegree":100,
            "statusEffect":"Status.STAGGER",
            "statusChance":[50],
            "statusDegree":[1,1,1,1]
         },
         
         "doomsday":{
            "name":"Doomsday",
            "MC":"Doomsday",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[150],
            "element":"Element.DARK",
            "elementDegree":75,
            "accuracy":300,
            "statusEffect":"Status.SCORCHED",
            "statusChance":[100],
            "statusDegree":[5]
         },
         
         "spark":{
            "SID":"spark",
            "MC":"Spark",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50],
            "element":"Element.THUNDER"
         },
         
         "bigspark":{
            "SID":"bigspark",
            "MC":"BigSpark",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[100],
            "element":"Element.THUNDER"
         },
         
         "talisman":{
            "SID":"talisman",
            "MC":"Talisman",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[20],
            "element":"Element.HOLY",
            "elementDegree":50,
            "accuracy":80,
            "statusEffect":"Status.CURSE",
            "statusChance":[100],
            "statusDegree":[3],
            "buffEffect":"Stats.MAGIC_ATTACK",
            "buffChance":[100],
            "buffDegree":[-50]
         },
         
         "attackup":{
            "name":"Attack Up",
            "MC":"Temper",
            "type":"Stats.NONE",
            "target":"Target.ONE_ALLY",
            "buffDegree":[50],
            "buffEffect":"temper",
            "buffChance":[0],
            "statusOnly":true
         },
         
         "settarget":{
            "name":"",
            "MC":"SetTarget",
            "type":"Stats.NONE",
            "target":"Target.ONE_ENEMY",
            "statusEffect":"Status.TARGET",
            "statusChance":[200],
            "statusDegree":[3],
            "statusOnly":true,
            "accuracy":999
         },
         
         "electrongun":{
            "SID":"electrongun",
            "MC":"ElectronGun",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[50],
            "element":"Element.THUNDER",
            "elementDegree":25,
            "statusEffect":"Status.CONFUSE",
            "statusChance":[100],
            "statusDegree":[2]
         },
         
         "ember":{
            "SID":"ember",
            "MC":"Ember",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30],
            "element":"Element.FIRE",
            "elementDegree":100,
            "statusEffect":"Status.BURN",
            "statusChance":[30],
            "statusDegree":[1]
         },
         
         "fireblast":{
            "SID":"fireblast2",
            "MC":"FireBlast",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.CENTER_ENEMY",
            "damage":[38],
            "element":"Element.FIRE",
            "elementDegree":100,
            "statusEffect":"Status.BURN",
            "statusChance":[50],
            "statusDegree":[1]
         },
         
         "firecrystals":{
            "SID":"firecrystals",
            "MC":"FireCrystals",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.FIRE",
            "elementDegree":50,
            "statusEffect":"Status.BURN",
            "statusChance":[50],
            "statusDegree":[3],
            "buffEffect":"Stats.DEFENCE",
            "buffChance":[100],
            "buffDegree":[-25]
         },
         
         "lasercrystals":{
            "SID":"zephyrcrystals",
            "MC":"LaserCrystals",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.WIND",
            "elementDegree":50,
            "statusEffect":"Status.DISABLE",
            "statusChance":[90],
            "statusDegree":[1],
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[100],
            "buffDegree":[-25]
         },
         
         "frost":{
            "SID":"frost",
            "MC":"Frost",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[25],
            "element":"Element.ICE",
            "elementDegree":100,
            "statusEffect":"Status.CHILL",
            "statusChance":[100],
            "statusDegree":[2]
         },
         
         "rockfall":{
            "SID":"rockslide",
            "MC":"RockFall",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "randomness":60,
            "element":"Element.EARTH",
            "elementDegree":100,
            "statusEffect":"Status.HEAVY",
            "statusChance":[50],
            "statusDegree":[2],
            "accuracy":80
         },
         
         "icefall":{
            "SID":"avalanche",
            "MC":"IceFall",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "randomness":60,
            "element":"Element.ICE",
            "elementDegree":100,
            "statusEffect":"Status.WEAKEN",
            "statusChance":[33],
            "statusDegree":[3],
            "accuracy":80
         },
         
         "bubbleblast":{
            "name":"Bubble Blast",
            "MC":"BubbleBlast",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[30],
            "element":"Element.WATER",
            "statusEffect":"Status.WET",
            "statusChance":[100],
            "statusDegree":[2],
            "buffEffect":"Stats.EVADE",
            "buffChance":[100],
            "buffDegree":[-15]
         },
         
         "blackspikes":{
            "SID":"blackspikes",
            "MC":"BlackSpikes",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80],
            "element":"Element.DARK",
            "elementDegree":50
         },
         
         "stonefist":{
            "SID":"stonefist",
            "MC":"StoneFist",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40],
            "element":"Element.EARTH",
            "elementDegree":75,
            "statusEffect":"Status.STAGGER",
            "statusChance":[20],
            "statusDegree":[1]
         },
         
         "darkswoop":{
            "name":"",
            "MC":"DarkSwoop",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40],
            "element":"Element.DARK",
            "elementDegree":100,
            "statusEffect":"Status.DOOM",
            "statusChance":[50],
            "statusDegree":[6]
         },
         
         "ritual":{
            "name":"Satanic Ritual",
            "MC":"Ritual",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[95],
            "element":"Element.DARK",
            "elementDegree":100,
            "statusEffect":"Status.CURSE",
            "statusChance":[100],
            "statusDegree":[6],
            "buffEffect":"Stats.HP",
            "buffChance":[100],
            "buffDegree":[-25]
         },
         
         "sharpen":{
            "name":"Sharpen",
            "MC":"Sharpen",
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "buffDegree":[30],
            "statusOnly":true
         },
         
         "fishmissile":{
            "name":"",
            "MC":"FishMissile",
            "type":"Stats.NONE",
            "target":"Target.ONE_ENEMY",
            "element":"Element.NONE"
         },
         
         "spiderweb":{
            "SID":"spiderweb",
            "MC":"SpiderWeb",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[10],
            "element":"Element.NONE",
            "statusEffect":"Status.BAD_LUCK",
            "statusChance":[100],
            "statusDegree":[3],
            "buffEffect":"Stats.EVADE",
            "buffChance":[100],
            "buffDegree":[-50],
            "accuracy":150
         },
         
         "spiderweb2":{
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "damage":[0],
            "element":"Element.NONE",
            "statusEffect":"Status.BAD_LUCK",
            "statusChance":[100],
            "statusDegree":[3],
            "buffEffect":"Stats.EVADE",
            "buffChance":[100],
            "buffDegree":[-30],
            "accuracy":200,
            "statusOnly":true
         },
         
         "spiders":{
            "SID":"spiders",
            "MC":"Spiders",
            "type":"Stats.NONE",
            "target":"Target.ALL_ENEMY",
            "element":"Element.NONE",
            "statusEffect":"Status.VIRUS",
            "statusChance":[50],
            "statusDegree":[2],
            "statusOnly":true
         },
         
         "seeds":{
            "name":"",
            "MC":"Seeds",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.RANDOM_ENEMY",
            "damage":[260],
            "element":"Element.HOLY",
            "elementDegree":100,
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[100],
            "buffDegree":[-50]
         },
         
         "musicalblast":{
            "name":"",
            "MC":"MusicalBlast",
            "type":"Stats.NONE",
            "target":"Target.ALL_ALLY",
            "statusEffect":"Status.LIGHT",
            "statusChance":[100],
            "statusDegree":[3],
            "buffEffect":"Stats.MAGIC_ATTACK",
            "buffChance":[100],
            "buffDegree":[30]
         },
         
         "geometry":{
            "SID":"geometry",
            "MC":"Geometry",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[70],
            "element":"Element.NONE",
            "accuracy":100,
            "randomness":80
         },
         
         "geometry2":{
            "SID":"geometry2",
            "MC":"Geometry2",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80],
            "element":"Element.DARK",
            "elementDegree":50,
            "statusEffect":"Status.INVISIBLE",
            "statusChance":[40],
            "statusDegree":[3],
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[100],
            "buffDegree":[-30]
         },
         
         "geometry3":{
            "SID":"geometry3",
            "MC":"Geometry3",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[40],
            "element":"Element.DARK",
            "elementDegree":50,
            "statusEffect":"Status.INVISIBLE",
            "statusChance":[25],
            "statusDegree":[3],
            "buffEffect":"Stats.MAGIC_DEFENCE",
            "buffChance":[100],
            "buffDegree":[-20]
         },
         
         "sacrifice":{
            "SID":"sacrifice",
            "MC":"Sacrifice",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30],
            "element":"Element.DARK",
            "elementDegree":100,
            "buffEffect":"Stats.HP",
            "buffChance":[100],
            "buffDegree":[-20],
            "statusEffect":"Status.DOOM",
            "statusChance":[50],
            "statusDegree":[3],
            "accuracy":150
         },
         
         "razorleaf3":{
            "name":"",
            "MC":"RazorLeaf3",
            "type":"Stats.ATTACK",
            "target":"Target.ALL_ENEMY",
            "damage":[75],
            "element":"Element.BIO",
            "elementDegree":100
         },
         
         "razorfeathers":{
            "name":"",
            "MC":"RazorFeathers",
            "critical":10,
            "type":"Stats.ATTACK",
            "target":"Target.RANDOM_ENEMY",
            "damage":[220],
            "element":"Element.WIND",
            "elementDegree":50
         },
         
         "bigroot":{
            "SID":"bigroot",
            "MC":"BigRoot",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.EARTH",
            "elementDegree":50,
            "statusEffect":"Status.POISON",
            "statusChance":[50],
            "statusDegree":[3]
         },
         
         "bigroot2":{
            "SID":"bigroot",
            "MC":"BigRoot2",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[80],
            "element":"Element.EARTH",
            "elementDegree":50,
            "statusEffect":"Status.POISON",
            "statusChance":[50],
            "statusDegree":[3]
         },
         
         "death":{
            "SID":"death",
            "MC":"Death",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[120],
            "element":"Element.DARK",
            "elementDegree":100,
            "statusEffect":"Status.DEATH",
            "statusChance":[100],
            "statusDegree":[1],
            "accuracy":25
         },
         
         "seabomb":{
            "SID":"seabomb",
            "MC":"BoulderBomb2",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[130],
            "element":"Element.BOMB",
            "elementDegree":100,
            "statusEffect":"Status.DISPEL",
            "statusChance":[50],
            "statusDegree":[1],
            "accuracy":100
         },
         
         "lasershot":{
            "name":"",
            "MC":"LaserShot",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[36],
            "element":"Element.THUNDER",
            "elementDegree":50,
            "statusEffect":"Status.DISABLE",
            "statusChance":[50],
            "statusDegree":[1],
            "accuracy":100
         },
         
         "bubbleball":{
            "name":"",
            "MC":"BubbleBall",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[10],
            "element":"Element.WATER",
            "elementDegree":100,
            "statusEffect":"Status.WET",
            "statusChance":[50],
            "statusDegree":[1],
            "accuracy":100
         },
         
         "fairybomb":{
            "SID":"fairy",
            "MC":"FairyBomb",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[40],
            "element":"Element.HOLY",
            "elementDegree":100,
            "statusEffect":"Status.SYPHON",
            "statusChance":[33],
            "statusDegree":[1],
            "accuracy":100
         },
         
         "flybomb":{
            "SID":"fly",
            "MC":"FlyBomb",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[35],
            "element":"Element.BIO",
            "elementDegree":50,
            "statusEffect":"Status.VIRUS",
            "statusChance":[10],
            "statusDegree":[2],
            "accuracy":100
         },
         
         "flybomb2":{
            "name":"",
            "MC":"FlyBomb2",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[45],
            "element":"Element.BOMB",
            "elementDegree":100,
            "statusEffect":"Status.POISON",
            "statusChance":[33],
            "statusDegree":[2],
            "accuracy":100
         },
         
         "plasmaball":{
            "name":"",
            "MC":"PlasmaBall",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30],
            "element":"Element.THUNDER",
            "elementDegree":100,
            "statusEffect":"Status.CONFUSE",
            "statusChance":[10],
            "statusDegree":[1],
            "accuracy":100
         },
         
         "starpow":{
            "SID":"starpunch",
            "MC":"EffectStar",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[75],
            "element":"Element.NONE",
            "statusEffect":"Status.STUN",
            "statusChance":[33],
            "statusDegree":[1],
            "accuracy":100
         },
         
         "foesnipe":{
            "name":"Snipe",
            "MC":"Snipe",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[30],
            "element":"Element.BOMB",
            "statusEffect":"Status.DEATH",
            "statusChance":[0],
            "statusDegree":[1],
            "accuracy":66
         },
         
         "evilsnipe":{
            "MC":"Snipe",
            "type":"Stats.ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[180],
            "element":"Element.BOMB",
            "statusEffect":"Status.DEATH",
            "statusChance":[100],
            "statusDegree":[1],
            "accuracy":150
         },
         
         "foespectrum":{
            "MC":"Spectrum",
            "type":"Stats.MAGIC_ATTACK",
            "target":"Target.ONE_ENEMY",
            "damage":[60],
            "element":"Element.NONE",
            "elementDegree":100
         }
      };
      resolve();
   });
}