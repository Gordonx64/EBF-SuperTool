
/*Globals*/

var lookingGlass = {};
var sidebar = {};
var openGlass = '';
var oldGlass = '';

var maxLevelMutator = function(value, data, type, params, component){
    return value[data.maxLevels-1];
}

var maxLevelMutatorParams = function(value, data, type, component){
    return {maxLevels: data.maxLevels};
}



var equipsTableInitialized = false;
var equipsTable;
var equipsColumns = [
                //{title:'', field:'', sorter:'', mutator:maxLevelMutator},
                {title:'Name', field:'SID', sorter:'string'},
                {title:'Type', field:'type', sorter:'string'},
                {title:'Element', field:'element', sorter:'string'},
                {title:'Boosts', field:'boost', sorter:'string'},
                {title:'Inflicted Status', field:'inflictStatusEffect', sorter:'string'},
                {title:'Amount', field:'inflictStatusDegree', sorter:'number', mutator:maxLevelMutator},
                {title:'Chance', field:'inflictStatusChance', sorter:'number', mutator:maxLevelMutator},
                {title:'Debuff', field:'buffEffect', sorter:'string'},
                {title:'Amount', field:'buffDegree', sorter:'number', mutator:maxLevelMutator},
                {title:'Chance', field:'buffChance', sorter:'number', mutator:maxLevelMutator},
                {title:'Counters With', field:'counter', sorter:'string'},
                {title:'Casts', field:'cast', sorter:'string'},
                {title:'Chance', field:'castChance', sorter:'number'},
                {title:'Defend Buff', field:'defendBuff', sorter:'string'},
                {title:'Amount', field:'defendBuffAmt', sorter:'number'},
                {title:'Defend Status', field:'defendStatus', sorter:'string'},
                {title:'Amount', field:'defendStatusAmt', sorter:'number'},
                {title:'Boost Buffs', field:'boostBuffs', sorter:'string'},
                {title:'Boost Debuffs', field:'boostDebuffs', sorter:'string'},
                {title:'Boost Catch', field:'boostCatch', sorter:'string'},
                {title:'Boost Healing Spells', field:'boostHealing', sorter:'string'},
                {title:'Boost Status Infliction', field:'boostStatus', sorter:'string'},
                {title:'Boost Thrown Items', field:'boostThrows', sorter:'string'},
                {title:'Boost Food Items', field:'boostFood', sorter:'string'},
                {title:'Boost Item Stealing', field:'steal', sorter:'string'},
                {title:'Drains HP', field:'drainHP', sorter:'string'},
                {title:'Ignores Defensive Buffs', field:'ignoreBuffs', sorter:'string'},
                {title:'Surrender/Flee', field:'intimidate', sorter:'string'},
                {title:'Anger/Intimidate', field:'scare', sorter:'string'},
                {title:'Overrides Weapon Status', field:'noStack', sorter:'string'},
                {title:'Gives More SP', field:'moreSP', sorter:'string'},
                {title:'Low HP Boost', field:'randomBuffs', sorter:'string'}

];




function main(){
    console.log('Script loaded and working');
    
    lookingGlass['skills'] = document.getElementById('skillsPane');
    lookingGlass['summons'] = document.getElementById('summonsPane');
    lookingGlass['equips'] = document.getElementById('equipsPane');
    lookingGlass['bestiary'] = document.getElementById('bestiaryPane');

    sidebar['skills'] = document.getElementById('skillsSidebar');
    sidebar['summons'] = document.getElementById('summonsSidebar');
    sidebar['equips'] = document.getElementById('equipsSidebar');
    sidebar['bestiary'] = document.getElementById('bestiarySidebar');



    /*Event Listeners*/
    document.getElementById('skillsTab').addEventListener('click', function(event){
            if (openGlass){
                oldGlass = openGlass;
                hideOldGlass();
            }
            openGlass = 'skills';
            showGlass();
    });

    document.getElementById('summonsTab').addEventListener('click', function(event){
            if (openGlass){
                oldGlass = openGlass;
                hideOldGlass();
            }
            openGlass = 'summons';
            showGlass();
    });

    document.getElementById('bestiaryTab').addEventListener('click', function(event){
            if (openGlass){
                oldGlass = openGlass;
                hideOldGlass();
            }
            openGlass = 'bestiary';
            showGlass();
    });

    document.getElementById('equipsTab').addEventListener('click', function(event){
            if (openGlass){
                oldGlass = openGlass;
                hideOldGlass();
            }
            openGlass = 'equips';
            showGlass();
            if (!equipsTableInitialized){
                equipsTable.addData(equipList).then(function(){equipsTable.redraw(true);});
                equipsTableInitialized = true;
            }
            
    });

    initJSONData()
    .then(function(){
        equipsTable = new Tabulator('#equipsPane', {
            columns:equipsColumns,
            layoutColumnsOnNewData:true,
            layout:'fitData'
        });
    })
    .then(function(){
        equipsColumns.forEach(function(element, index, array){
            var sidebarOption = document.createElement('div');
            sidebarOption.addEventListener('click', sidebarClickHandler);
            sidebarOption.innerText = element.title;
            sidebarOption.classList.add('sidebarChecked');
            sidebarOption.classList.add('vCP');
            sidebarOption.dataset['table'] = 'equips';
            sidebarOption.dataset['field'] = element.field;
            sidebarOption.dataset['checked'] = true;
            sidebar['equips'].appendChild(sidebarOption);
        });
    })

}

function sidebarClickHandler(event){
    var element = event.target;
    switch(element.dataset.table){
        case 'equips':
            if (element.classList.contains('sidebarChecked')){
                equipsTable.hideColumn(element.dataset.field);
                element.classList.remove('sidebarChecked');
                element.classList.add('sidebarUnchecked');
            } else {
                equipsTable.showColumn(element.dataset.field);
                element.classList.add('sidebarChecked');
                element.classList.remove('sidebarUnchecked');
            }
            break;
    }
}

function hideOldGlass(){
    lookingGlass[oldGlass].style.zIndex = 0;
    sidebar[oldGlass].style.zIndex = 0;
    setTimeout(function(){
        console.log('Closing pane');
        lookingGlass[oldGlass].style.left = "100%";
        sidebar[oldGlass].style.right = "100%";
        setTimeout(function(){
            console.log('Close tranistion finished');
        },600);
    }, 600);
}

function showGlass(){
    console.log('Opening pane');
    lookingGlass[openGlass].style.zIndex = 999;
    lookingGlass[openGlass].style.left = "0";
    sidebar[openGlass].style.zIndex = 999;
    sidebar[openGlass].style.right = "0";
}

function exists(obj){
	return obj != null && obj != undefined && obj !== '';
}


/**
Function that takes in a string, and if delimitted, splits it into its seperate words and capitalizes them
    delim - optional - if omitted, defaults to '_'
*/
function toCamelCase(string, delim){
    if (!exists(delim)) delim = '_';
    var stringList = [string];
    if (string.indexOf(delim) > 0){
        stringList = string.split(delim);
    }
    for (var i = 0; i < stringList.length; i++){
        stringList[i] = stringList[i][0] + stringList[i].substr(1).toLowerCase();
    }
    return stringList.join(' ');
}

/* Page Ready Initializer */
window.addEventListener('DOMContentLoaded', main);