//Initiating the mod i guess
hasGodL=Game.hasGod;
getPlantDescL=Game.Objects['Farm'].minigame.getPlantDesc;
capniL=0;
//Handling all the mod stuff (base cookieclysm.js
function shadowSave(type){Game.toSave=false; Game.lastDate=parseInt(Game.time); var str=''; if (type==3) str+='\nGame version\n'; str+=Game.version+'|'; str+='|'; if (type==3) str+='\n\nRun details'; str+= (type==3?'\n	run start date : ':'')+parseInt(Game.startDate)+';'+ (type==3?'\n	legacy start date : ':'')+parseInt(Game.fullDate)+';'+ (type==3?'\n	date when we last opened the game : ':'')+parseInt(Game.lastDate)+';'+ (type==3?'\n	bakery name : ':'')+(Game.bakeryName)+';'+ (type==3?'\n	seed : ':'')+(Game.seed)+';'+ (type==3?'\n	appearance : ':'')+(Game.YouCustomizer.save())+ '|'; if (type==3) str+='\n\nPacked preferences bitfield\n	'; var str2= (Game.prefs.particles?'1':'0')+ (Game.prefs.numbers?'1':'0')+ (Game.prefs.autosave?'1':'0')+ (Game.prefs.autoupdate?'1':'0')+ (Game.prefs.milk?'1':'0')+ (Game.prefs.fancy?'1':'0')+ (Game.prefs.warn?'1':'0')+ (Game.prefs.cursors?'1':'0')+ (Game.prefs.focus?'1':'0')+ (Game.prefs.format?'1':'0')+ (Game.prefs.notifs?'1':'0')+ (Game.prefs.wobbly?'1':'0')+ (Game.prefs.monospace?'1':'0')+ (Game.prefs.filters?'1':'0')+ (Game.prefs.cookiesound?'1':'0')+ (Game.prefs.crates?'1':'0')+ (Game.prefs.showBackupWarning?'1':'0')+ (Game.prefs.extraButtons?'1':'0')+ (Game.prefs.askLumps?'1':'0')+ (Game.prefs.customGrandmas?'1':'0')+ (Game.prefs.timeout?'1':'0')+ (Game.prefs.cloudSave?'1':'0')+ (Game.prefs.bgMusic?'1':'0')+ (Game.prefs.notScary?'1':'0')+ (Game.prefs.fullscreen?'1':'0')+ (Game.prefs.screenreader?'1':'0')+ (Game.prefs.discordPresence?'1':'0')+ ''; str2=pack3(str2); str+=str2+'|'; if (type==3) str+='\n\nMisc game data'; str+= (type==3?'\n	cookies : ':'')+parseFloat(Game.cookies).toString()+';'+ (type==3?'\n	total cookies earned : ':'')+parseFloat(Game.cookiesEarned).toString()+';'+ (type==3?'\n	cookie clicks : ':'')+parseInt(Math.floor(Game.cookieClicks))+';'+ (type==3?'\n	golden cookie clicks : ':'')+parseInt(Math.floor(Game.goldenClicks))+';'+ (type==3?'\n	cookies made by clicking : ':'')+parseFloat(Game.handmadeCookies).toString()+';'+ (type==3?'\n	golden cookies missed : ':'')+parseInt(Math.floor(Game.missedGoldenClicks))+';'+ (type==3?'\n	background type : ':'')+parseInt(Math.floor(Game.bgType))+';'+ (type==3?'\n	milk type : ':'')+parseInt(Math.floor(Game.milkType))+';'+ (type==3?'\n	cookies from past runs : ':'')+parseFloat(Game.cookiesReset).toString()+';'+ (type==3?'\n	elder wrath : ':'')+parseInt(Math.floor(Game.elderWrath))+';'+ (type==3?'\n	pledges : ':'')+parseInt(Math.floor(Game.pledges))+';'+ (type==3?'\n	pledge time left : ':'')+parseInt(Math.floor(Game.pledgeT))+';'+ (type==3?'\n	currently researching : ':'')+parseInt(Math.floor(Game.nextResearch))+';'+ (type==3?'\n	research time left : ':'')+parseInt(Math.floor(Game.researchT))+';'+ (type==3?'\n	ascensions : ':'')+parseInt(Math.floor(Game.resets))+';'+ (type==3?'\n	golden cookie clicks (this run) : ':'')+parseInt(Math.floor(Game.goldenClicksLocal))+';'+ (type==3?'\n	cookies sucked by wrinklers : ':'')+parseFloat(Game.cookiesSucked).toString()+';'+ (type==3?'\n	wrinkles popped : ':'')+parseInt(Math.floor(Game.wrinklersPopped))+';'+ (type==3?'\n	santa level : ':'')+parseInt(Math.floor(Game.santaLevel))+';'+ (type==3?'\n	reindeer clicked : ':'')+parseInt(Math.floor(Game.reindeerClicked))+';'+ (type==3?'\n	season time left : ':'')+parseInt(Math.floor(Game.seasonT))+';'+ (type==3?'\n	season switcher uses : ':'')+parseInt(Math.floor(Game.seasonUses))+';'+ (type==3?'\n	current season : ':'')+(Game.season?Game.season:'')+';'; var wrinklers=Game.SaveWrinklers(); str+= (type==3?'\n	amount of cookies contained in wrinklers : ':'')+parseFloat(Math.floor(wrinklers.amount))+';'+ (type==3?'\n	number of wrinklers : ':'')+parseInt(Math.floor(wrinklers.number))+';'+ (type==3?'\n	prestige level : ':'')+parseFloat(Game.prestige).toString()+';'+ (type==3?'\n	heavenly chips : ':'')+parseFloat(Game.heavenlyChips).toString()+';'+ (type==3?'\n	heavenly chips spent : ':'')+parseFloat(Game.heavenlyChipsSpent).toString()+';'+ (type==3?'\n	heavenly cookies : ':'')+parseFloat(Game.heavenlyCookies).toString()+';'+ (type==3?'\n	ascension mode : ':'')+parseInt(Math.floor(Game.ascensionMode))+';'+ (type==3?'\n	permanent upgrades : ':'')+parseInt(Math.floor(Game.permanentUpgrades[0]))+';'+parseInt(Math.floor(Game.permanentUpgrades[1]))+';'+parseInt(Math.floor(Game.permanentUpgrades[2]))+';'+parseInt(Math.floor(Game.permanentUpgrades[3]))+';'+parseInt(Math.floor(Game.permanentUpgrades[4]))+';'+ (type==3?'\n	dragon level : ':'')+parseInt(Math.floor(Game.dragonLevel))+';'+ (type==3?'\n	dragon aura : ':'')+parseInt(Math.floor(Game.dragonAura))+';'+ (type==3?'\n	dragon aura 2 : ':'')+parseInt(Math.floor(Game.dragonAura2))+';'+ (type==3?'\n	chime type : ':'')+parseInt(Math.floor(Game.chimeType))+';'+ (type==3?'\n	volume : ':'')+parseInt(Math.floor(Game.volume))+';'+ (type==3?'\n	number of shiny wrinklers : ':'')+parseInt(Math.floor(wrinklers.shinies))+';'+ (type==3?'\n	amount of cookies contained in shiny wrinklers : ':'')+parseFloat(Math.floor(wrinklers.amountShinies))+';'+ (type==3?'\n	current amount of sugar lumps : ':'')+parseFloat(Math.floor(Game.lumps))+';'+ (type==3?'\n	total amount of sugar lumps made : ':'')+parseFloat(Math.floor(Game.lumpsTotal))+';'+ (type==3?'\n	time when current sugar lump started : ':'')+parseFloat(Math.floor(Game.lumpT))+';'+ (type==3?'\n	time when last refilled a minigame with a sugar lump : ':'')+parseFloat(Math.floor(Game.lumpRefill))+';'+ (type==3?'\n	sugar lump type : ':'')+parseInt(Math.floor(Game.lumpCurrentType))+';'+ (type==3?'\n	vault : ':'')+Game.vault.join(',')+';'+ (type==3?'\n	heralds : ':'')+parseInt(Game.heralds)+';'+ (type==3?'\n	golden cookie fortune : ':'')+parseInt(Game.fortuneGC)+';'+ (type==3?'\n	CpS fortune : ':'')+parseInt(Game.fortuneCPS)+';'+ (type==3?'\n	highest raw CpS : ':'')+parseFloat(Game.cookiesPsRawHighest)+';'+ (type==3?'\n	music volume : ':'')+parseInt(Math.floor(Game.volumeMusic))+';'+ (type==3?'\n	cookies sent : ':'')+parseInt(Math.floor(Game.cookiesSent))+';'+ (type==3?'\n	cookies received : ':'')+parseInt(Math.floor(Game.cookiesReceived))+';'+ '|'; if (type==3) str+='\n\nBuildings : amount, bought, cookies produced, level, minigame data'; for (var i in Game.Objects) { var me=Game.Objects[i]; if (type==3) str+='\n	'+me.name+' : '; if (me.vanilla) { str+=me.amount+','+me.bought+','+parseFloat(Math.floor(me.totalCookies))+','+parseInt(me.level); if (Game.isMinigameReady(me)) str+=','+me.minigame.save(); else str+=','+(me.minigameSave||''); str+=','+(me.muted?'1':'0'); str+=','+me.highest; str+=';'; } } str+='|'; if (type==3) str+='\n\nPacked upgrades bitfield (unlocked and bought)\n	'; var toCompress=[]; for (var i in Game.UpgradesById) { var me=Game.UpgradesById[i]; if (me.vanilla) toCompress.push(Math.min(me.unlocked,1),Math.min(me.bought,1)); }; toCompress=pack3(toCompress.join('')); str+=toCompress; str+='|'; if (type==3) str+='\n\nPacked achievements bitfield (won)\n	'; var toCompress=[]; for (var i in Game.AchievementsById) { var me=Game.AchievementsById[i]; if (me.vanilla) toCompress.push(Math.min(me.won)); } toCompress=pack3(toCompress.join('')); str+=toCompress; str+='|'; if (type==3) str+='\n\nBuffs : type, maxTime, time, arg1, arg2, arg3'; for (var i in Game.buffs) { var me=Game.buffs[i]; if (me.type) { if (type==3) str+='\n	'+me.type.name+' : '; if (me.type.vanilla) { str+=me.type.id+','+me.maxTime+','+me.time; if (typeof me.arg1!=='undefined') str+=','+parseFloat(me.arg1); if (typeof me.arg2!=='undefined') str+=','+parseFloat(me.arg2); if (typeof me.arg3!=='undefined') str+=','+parseFloat(me.arg3); str+=';'; } } } if (type==3) str+='\n\nCustom :\n'; str+='|'; str+=Game.saveModData(); Game.lastSaveData=str; if (type==2 || type==3) { return str; } else if (type==1) { str=escape(utf8_to_b64(str)+'!END!'); return str; } else { if (Game.useLocalStorage) { str=utf8_to_b64(str)+'!END!'; if (str.length<10) { } else { str=escape(str); localStorageSet(Game.SaveTo,str); if (App) App.save(str); if (!localStorageGet(Game.SaveTo)) { } else if (document.hasFocus()) { } } } else { var now=new Date(); now.setFullYear(now.getFullYear()+5); str=utf8_to_b64(str)+'!END!'; Game.saveData=escape(str); str=Game.SaveTo+'='+escape(str)+'; expires='+now.toUTCString()+';'; document.cookie=str; if (App) App.save(str); if (document.cookie.indexOf(Game.SaveTo)<0) { } else if (document.hasFocus()) { } } }}
var cookieTracker, cpsTracker, shimmerTracker, lumpTracker;
Game.registerHook('logic',function(){
	if(cookieTracker>Game.cookies || cpsTracker!=Game.cookiesPs || lumpTracker!=Game.lumps){
		shadowSave();
	}
	cookieCount=Game.cookies;
	cpsTracker=Game.cookiesPs;
	lumpTracker=Game.lumps;
	
	if (Game.hasBuff('Spirits sniped')) {
		Game.hasGod=function(){};
	} else {
		Game.hasGod=hasGodL;
	}
	
	if (Game.hasBuff('Famine')){
		//Game.Popup('Do not use the garden. You have been warned.',window.innerWidth/2,window.innerHeight/2);
		/*for (var i=19;i--;i<0){
			if (Game.objectsById[2].amount>(0+(i==19))) {
				while (Game.objectsById[2].amount>0) Game.objectsById[i].sacrifice(1);
			}
		}*/
		/*
		for (var i in Game.Objects) {
			setTimeout(function(){Game.Objects[i].sacrifice(1)},1000);
		} */
		/*
		for (i in Game.Objects) {
			console.log(i);
			//console.log(i);
			//console.log(Game.Objects[i]);
			for (var j;j<Game.Objects[i].amount;j++){
				console.log(j);
			}
		}*/
		if ((Game.T%(Game.fps/20)==0)) {
			if (Game.ObjectsById[capniL].amount!=0){
				if (capniL!=19){
					Game.ObjectsById[capniL].sacrifice(1);
				} else {
					Game.killBuff('Famine');
					Game.Objects['Farm'].minigame.getPlantDesc=getPlantDescL;
					capniL=0;
				}
			}
			else {
				if (capniL<19) {
					capniL++;
				} else {
					capniL=0;
					Game.killBuff('Famine');
				}
			}
		}
	}
});

var cookieclysmCss=document.createElement('style');
cookieclysmCss.type='text/css';
cookieclysmCss.innerHTML='.devIcon{background-image:url(https://raw.githubusercontent.com/yeetdragon24/cookieclysm/main/img/iconSheet-v3.png);}';
document.head.appendChild(cookieclysmCss);



new Game.buffType('spirit sniped', function(time,power) {
	return {
		name:'Spirits sniped',
		desc:'Your god Stream Sniper is angry at your worship of the Pantheon spirits! The Pantheon is not providing any effects!',
		icon:[1,0,'https://raw.githubusercontent.com/yeetdragon24/cookieclysm/main/img/iconSheet-v3.png'],
		time:time*Game.fps,
		power:power,
		add:true
	}
});
new Game.buffType('famine', function(time,power) {
	return {
		name:'Famine',
		desc:'Your god Captain Crozier is angry at your usage of the Garden! You will soon receive punishment!',
		icon:[2,0,'https://raw.githubusercontent.com/yeetdragon24/cookieclysm/main/img/iconSheet-v3.png'],
		time:time*Game.fps,
		power:power,
		add:true,
		aura:2
	}
});
