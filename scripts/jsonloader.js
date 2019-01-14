
var equips = {};
var equipList = [];
var swords = [];
var guns = [];
var staffs = [];
var toys = [];
var bows = [];
var malearmor = [];
var malehats = [];
var femalearmor = [];
var femalehats = [];
var flair = [];

var summons = {};

var skills = {};
//public static var ALL_TACTICS:Array = [defend,swap,standby1,standby2,scan,flee,skip,capture];
//public static var ALL_MATT_SPELLS:Array = [earthedge,quakespikes,cataclysmiccut,geysergush,pouringpike,surgingskewer,frostfragment,glacialglaive,slicingcyclone,stealitem,firespire,lavalance,nettleknife,shreddingshrub,legend,lightblade,holysword,unleash,quickslash,temper,revenge];
//public static var ALL_NATALIE_SPELLS:Array = [cleanse,luckystar,starshower,starpower,toxic,fire,fireball,firestorm,thunder,thunderbolt,thunderstorm,ice,iceshard,icestorm,pulse,pulsar,spectrum,spectrum2,shine,judgement,syphon,syphon2];
//public static var ALL_LANCE_SPELLS:Array = [snipe,doubleshot,unloadd,flameshot,flameburst,bullethell,plasma,plasmawave,plasmacross,poisongas,airstrike1,airstrike2,airstrike3,medipack,medipack2,tankgun,crush,hyperbeam,darkblast,gravitysurge,antimatter];
//public static var ALL_ANNA_SPELLS:Array = [bowwhack,gust,whirlwind,hurricane,log,lumber,razorleaf,razorleaf2,soularrow,soularrow2,frostarrow,frostarrow2,nitroarrow,nitroarrow2,aquaarrow,aquaarrow2,sparkarrow,sparkarrow2,piercingshot,comboshot,arrowrain,renew,remedy];
//public static var ALL_NOLEGS_SPELLS:Array = [rapidslash,rapidslash2,swiftslash,ninelives,starblast,sworddance,sworddance2,sworddance3,darkslash,darkslash2,holyslash,holyslash2,lightningslash,lightningslash2,windslash,windslash2,waterslash,waterslash2,sushicat,sushicat2,berserk,berserk2,charm,charm2];
//public static var FOE_SPELLS:Array = [bones,bonestar,groundblade,luckystar2,firerock,stalactite,stalactite2,fume,eruption,scald,rain,sandstorm,hail,nitro,acid,acid2,bamboo,bamboo2,bluebolt,bubblering,deepfreeze,wafer,present,cactus,cacti,plasmacage,tankcannon,candycane,candycane2,pixelfish,pixelriceball,sand,sanddune,mushroom,lifedrain,puff,puff2,slimify,ink,chocolate,tentacles,slowdown,speedup,rootspike,rootspike2,rootspike3,blast,bigblast,spark,bigspark,talisman,electrongun,ember,fireblast,firecrystals,lasercrystals,frost,rockfall,icefall,blackspikes,stonefist,spiderweb,spiders,geometry,geometry2,geometry3,sacrifice,bigroot,bigroot2,death,seabomb,fairybomb,flybomb,starpow,darken,lighten];    
//public static var BONUS_SKILLS:Array = [laserblade,lasersword,bullet,bigbullet,energy,energybomb,energybarrage,bubbles,whirlpool,vortex,ivy,vines,snowbunny,snowcat,partytime,powermetal,air,airwave,shockwave,sawblade,sawblades,gaiaglow,gaiabloom,gaiablossom,firespin,holyfire,screamer,heal,healmore,revive,purify,protect,barrier,debilitate,enfeeble,dispel,bind,flare,teradrill,lockon,annihilate,ion,supernova,abzero,tsunami,blackhole,rapture,deathmetal];
//public static var BASE_BONUS_SKILLS:Array = [ivy,gale,laserblade,bullet,holyfire,teradrill,gaiaglow,bubbles,air,energy,sawblade,snowbunny,firespin,partytime,powermetal,screamer,lockon,guardian,protect,barrier,reflex,debilitate,enfeeble,dispel,bind,flare,heal,revive,purify];    
//public static var BONUS_LIMITS:Array = [annihilate,ion,supernova,abzero,tsunami,blackhole,deathmetal,rapture];




var bestiary = {};

function checkArray(arr, maxLevels){
    if (!exists(arr)) arr = [0];
    var v = arr[0];
    while (arr.length != maxLevels) {
        arr.push(v);
    }
    return arr;
}

function EquipProto(params) {
    this.SID = params.SID;
    this.type = toCamelCase(params.type.replace(/.*\./, ""), '_');
    if (this.type != 'Flair') { this.maxLevels = 5; } else { this.maxLevels = 3; }
    this.icon = params.icon;
    this.skin = params.skin;
    this.map = params.map;

    this.HP = checkArray(params.HP, this.maxLevels); /*changes with level*/
    this.attack = checkArray(params.attack, this.maxLevels); /*changes with level*/
    this.defence = checkArray(params.defence, this.maxLevels); /*changes with level*/
    this.magicAttack = checkArray(params.magicDefence, this.maxLevels); /*changes with level*/
    this.magicDefence = checkArray(params.magicAttack, this.maxLevels); /*changes with level*/
    this.accuracy = checkArray(params.accuracy, this.maxLevels); /*changes with level*/
    this.evade = checkArray(params.evade, this.maxLevels); /*changes with level*/

    this.resistance = null; /*changes with level*/

    if (!exists(params.resistance)) params.resistance = {};

    this.fireResistance = exists(params.resistance.fire) ? params.resistance.fire : checkArray([0], this.maxLevels);
    this.thunderResistance = exists(params.resistance.thunder) ? params.resistance.thunder : checkArray([0], this.maxLevels);
    this.iceResistance = exists(params.resistance.ice) ? params.resistance.ice : checkArray([0], this.maxLevels);
    this.earthResistance = exists(params.resistance.earth) ? params.resistance.earth : checkArray([0], this.maxLevels);
    this.bioResistance = exists(params.resistance.bio) ? params.resistance.bio : checkArray([0], this.maxLevels);
    this.bombResistance = exists(params.resistance.bomb) ? params.resistance.bomb : checkArray([0], this.maxLevels);
    this.waterResistance = exists(params.resistance.water) ? params.resistance.water : checkArray([0], this.maxLevels);
    this.windResistance = exists(params.resistance.wind) ? params.resistance.wind : checkArray([0], this.maxLevels);
    this.holyResistance = exists(params.resistance.holy) ? params.resistance.holy : checkArray([0], this.maxLevels);
    this.darkResistance = exists(params.resistance.dark) ? params.resistance.dark : checkArray([0], this.maxLevels);

    this.burnResistance = exists(params.resistance.burn) ? params.resistance.burn : checkArray([0], this.maxLevels);
    this.stunResistance = exists(params.resistance.stun) ? params.resistance.stun : checkArray([0], this.maxLevels);
    this.freezeResistance = exists(params.resistance.freeze) ? params.resistance.freeze : checkArray([0], this.maxLevels);
    this.poisonResistance = exists(params.resistance.poison) ? params.resistance.poison : checkArray([0], this.maxLevels);
    this.syphonResistance = exists(params.resistance.syphon) ? params.resistance.syphon : checkArray([0], this.maxLevels);
    this.curseResistance = exists(params.resistance.curse) ? params.resistance.curse : checkArray([0], this.maxLevels);
    this.staggerResistance = exists(params.resistance.stagger) ? params.resistance.stagger : checkArray([0], this.maxLevels);
    this.wetResistance = exists(params.resistance.wet) ? params.resistance.wet : checkArray([0], this.maxLevels);
    this.weightResistance = exists(params.resistance.weight) ? params.resistance.weight : checkArray([0], this.maxLevels);
    this.weakResistance = exists(params.resistance.weak) ? params.resistance.weak : checkArray([0], this.maxLevels);
    this.weakenResistance = exists(params.resistance.weaken) ? params.resistance.weaken : checkArray([0], this.maxLevels);
    this.tiredResistance = exists(params.resistance.tired) ? params.resistance.tired : checkArray([0], this.maxLevels);
    this.dispelResistance = exists(params.resistance.dispel) ? params.resistance.dispel : checkArray([0], this.maxLevels);
    this.deathResistance = exists(params.resistance.death) ? params.resistance.death : checkArray([0], this.maxLevels);

    var no = "No";
    var yes = "Yes";
    var none = "None";

    this.element = exists(params.element) ? (params.element == "Element.NONE" ? none : toCamelCase(params.element.replace("Element.", ""), '_')) : none;
    this.elementDegree = null; /*only used on oakstaff and eagleeye*/

    this.inflictStatusEffect = exists(params.statusEffect) ? (params.statusEffect == "Status.NONE" ? none : toCamelCase(params.statusEffect.replace("Status.", ""), '_')) : none;
    this.inflictStatusChance = checkArray(params.statusChance, this.maxLevels); /*changes with level*/
    this.inflictStatusDegree = checkArray(params.statusDegree, this.maxLevels); /*changes with level*/

    this.buffEffect = exists(params.buffEffect) ? (params.buffEffect == "Stats.NONE" ? none : toCamelCase(params.buffEffect.replace("Stats.", ""), '_')) : none;
    this.buffChance = checkArray(params.buffChance, this.maxLevels); /*changes with level*/
    this.buffDegree = checkArray(params.buffDegree, this.maxLevels); /*changes with level*/



    //this.specials = null;
    this.materials = params.materials; /*changes with level*/
    
    this.MP = null; /*unused?*/
    
    this.counter = none;

    this.cast = none;
    this.castChance = 0;

    this.summon = none;
    this.summonChance = 0;

    this.playerStatus = none;
    this.playerStatusAmt = 0;
    this.playerStatusChance = 0;

    this.defendBuff = none;
    this.defendBuffAmt = 0;

    this.defendStatus = none;
    this.defendStatusAmt = 0;

    this.boost = none;
    this.boostBuffs = no;
    this.boostCatch = no;
    this.boostDebuffs = no;
    this.boostFood = no;
    this.boostHealing = no;
    this.boostStatus = no;
    this.boostThrows = no;
    this.drainHP = no;
    this.ignoreBuffs = no;
    this.intimidate = no;
    this.moreSP = no;
    this.noStack = no;
    this.randomBuffs = no; /*only on the turtle gi; probably the low-HP effect*/
    this.scare = no; 
    this.steal = no;

    if (exists(params.specials)){
        for (var i = 0; i < params.specials.length; i++){
            if (params.specials[i] != null){
                switch(params.specials[i][0]){
                    case "Equip.SCARE":
                        this.scare = params.specials[i][1];
                        break;
                    case "Equip.BOOST":
                        this.boost = params.specials[i][1] == "Element.NONE" ? 'Non-Elemental' : toCamelCase(params.specials[i][1].replace("Element.", ""));
                        break;
                    case "Equip.BOOST_BUFFS":
                        this.boostBuffs = yes;
                        break;
                    case "Equip.BOOST_CATCH":
                        this.boostCatch = yes;
                        break;
                    case "Equip.BOOST_DEBUFFS":
                        this.boostDebuffs = yes;
                        break;
                    case "Equip.BOOST_FOOD":
                        this.boostFood = yes;
                        break;
                    case "Equip.BOOST_HEALING":
                        this.boostHealing = yes;
                        break;
                    case "Equip.BOOST_STATUS":
                        this.boostStatus = yes;
                        break;
                    case "Equip.BOOST_THROWS":
                        this.boostThrows = yes;
                        break;
                    case "Equip.CAST":
                        this.cast = params.specials[i][1];
                        this.castChance = params.specials[i][2];
                        break;
                    case "Equip.COUNTER":
                        this.counter = params.specials[i][1];
                        break;
                    case "Equip.DEFEND_BUFF":
                        this.defendBuff = toCamelCase(params.specials[i][1].replace("Stats.", ""));
                        this.defendBuffAmt = params.specials[i][2];
                        break;
                    case "Equip.DEFEND_STATUS":
                        this.defendStatus = toCamelCase(params.specials[i][1].replace("Status.", ""));
                        this.defendStatusAmt = params.specials[i][2];
                        break;
                    case "Equip.DRAIN_HP":
                        this.drainHP = yes;
                        break;
                    case "Equip.IGNORE_BUFFS":
                        this.ignoreBuffs = yes;
                        break;
                    case "Equip.INTIMIDATE":
                        this.intimidate = yes;
                        break;
                    case "Equip.MORE_SP":
                        this.moreSP = yes;
                        break;
                    case "Equip.NO_STACK":
                        this.noStack = yes;
                        break;
                    case "Equip.RANDOM_BUFFS":
                        this.randomBuffs = yes;
                        break;
                    case "Equip.STATUS":
                        this.playerStatus = toCamelCase(params.specials[i][1].replace("Status.", ""));
                        this.playerStatusAmt = params.specials[i][2];
                        this.playerStatusChance = params.specials[i][3];
                        break;
                    case "Equip.STEAL":
                        this.steal = yes;
                        break;
                    case "Equip.SUMMON":
                        this.summon = params.specials[i][1];
                        this.summonChance = params.specials[i][2];
                        break;
                    default:
                        if (params.specials[i][0] != null){
                            console.log("Equipment special not listed: " + params.specials[i][0]);
                        }
                        break;
                }
            }
        }
    }

    return this;
}


function initJSONData(){
    return new Promise(function(resolve, reject){
        loadEquips().then(assignEquips).then(function(){resolve()});
    });
}

function displayEquips(){

}

function assignEquips() {
    return new Promise(function(resolve, reject){
        equipKeys = Object.keys(equips);
        for (var i = 0; i < equipKeys.length; i++){
            var t = new EquipProto(equips[equipKeys[i]]);
            switch (equips[equipKeys[i]].type){
                case 'Equip.SWORD':
                    swords.push(t);
                    break;
                case 'Equip.STAFF':
                    staffs.push(t);
                    break;
                case 'Equip.GUN':
                    guns.push(t);
                    break;
                case 'Equip.BOW':
                    bows.push(t);
                    break;
                case 'Equip.MALE_HAT':
                    malehats.push(t);
                    break;
                case 'Equip.FEMALE_HAT':
                    femalehats.push(t);
                    break;
                case 'Equip.MALE_ARMOR':
                    malearmor.push(t);
                    break;
                case 'Equip.FEMALE_ARMOR':
                    femalearmor.push(t);
                    break;
                case 'Equip.FLAIR':
                    flair.push(t);
                    break;
            }
            equipList.push(t);
        }
        resolve();
    });
}

