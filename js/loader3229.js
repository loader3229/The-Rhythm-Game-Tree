addLayer("lo", {
  infoboxes: {
 introBox: {
  title: "层级Lo--loader3229",
	 body(){return "loader3229既是音游人，也是一名增量游戏开发者。loader3229将会重新平衡音游树，并且会帮助你游玩经过他重新平衡之后的音游树。本层级永远不会重置。"},
        },
 introBox2: {
  title: "打歌",
	 body(){return "你可以学习loader3229的打歌技巧，增加你的note获取量。loader3229的设备经常断触，并且如果loader3229连续打歌，他的设备断触率会一直增加（本游戏内最多到10%），他的Perfect率也会下降。"},
        },
 introBox3: {
  title: "制谱",
	 body(){return "loader3229制作了非常多的BanG Dream! 自制谱，所以他有一定的制作音游谱面的经验。你可以学习loader3229的制谱技巧，得到更多的note。"},
        },
 introBox5: {
  title: "判定维度",
	 body(){return "有了“判定区间”的概念，loader3229可以开始进一步提高自己的准度并且打出更高级的判定。每一个更高级的判定都会加成低级判定获取，就像反物质维度一样；更高级判定还会增加更高级Milthm维度获取！"},
        },
},
    name: "loader3229", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "Lo", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		perfect: new Decimal(0),
		great: new Decimal(0),
		miss: new Decimal(0),
		maxcombo: new Decimal(0),
		maxcombo_warn: new Decimal(0),
		stamina: new Decimal(2000),
		note: new Decimal(0),
		evolution: new Decimal(0),
		jdim1: new Decimal(0),
		jdim2: new Decimal(0),
		jdim3: new Decimal(0),
		jdim4: new Decimal(0),
		play: false,
    }},
    color: "#ffffff",
    requires(){
		if(player.lo.points.gte(100) || player.lo.evolution.gte(1))return new Decimal(1);
		return new Decimal(10)
	}, // Can be a function that takes requirement increases into account
    resource: "Loaded Points", // Name of prestige currency
    baseResource: "Notes", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	base(){
		if(player.lo.evolution.gte(4))return Decimal.pow(10,8000000/(104**3.4));
		if(player.lo.evolution.gte(3))return Decimal.pow(10,6000000/(103**3.3));
		if(player.lo.evolution.gte(2)&&player.lo.points.gte(100))return 73.84349121836063;
		if(player.lo.evolution.gte(2))return 84.75;
		if(player.lo.evolution.gte(1))return 280.006236628471;
		return 1000;
	},
    exponent(){
		if(player.lo.evolution.gte(4))return 3.4;
		if(player.lo.evolution.gte(3))return 3.3;
		if(player.lo.evolution.gte(2))return 3.2;
		if(player.lo.evolution.gte(1))return 3.1;
		return 3;
	},
    // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        return new Decimal(1);
    },
    gainMult2() {
        return this.jdimMult(0);
    },
    gainMult3() {
        mult = new Decimal(1)
		if(hasUpgrade('lo',56))mult = mult.mul(player.points.add(10).log10().pow(0.25));
		else mult = mult.mul(player.points.add(10).log10().add(10).log10());
		mult = mult.mul(Decimal.pow(player.lo.points.add(1),hasUpgrade('lo',114)?3:hasUpgrade('lo',52)?2:1));
		if(hasUpgrade('lo',51))mult = mult.mul(upgradeEffect('lo',51));
		if(hasUpgrade('m',19))mult = mult.mul(upgradeEffect('m',19));
		if(hasUpgrade('lo',66))mult = mult.mul(upgradeEffect('lo',66));
		if(hasUpgrade('lo',144))mult = mult.mul(upgradeEffect('lo',144));
		if(hasUpgrade('ch',38))mult = mult.mul(upgradeEffect('ch',38));
		if(hasUpgrade('sp',41))mult = mult.mul(upgradeEffect('sp',41));
		if(hasUpgrade('sp',42))mult = mult.mul(upgradeEffect('sp',42));
		if(hasUpgrade('sp',43))mult = mult.mul(upgradeEffect('sp',43));
		if(hasUpgrade('sp',44))mult = mult.mul(upgradeEffect('sp',44));
		if(hasUpgrade('sp',45))mult = mult.mul(upgradeEffect('sp',45));
		if(hasUpgrade('sp',46))mult = mult.mul(upgradeEffect('sp',46));
		if(hasUpgrade('sp',47))mult = mult.mul(upgradeEffect('sp',47));
		mult = mult.mul(challengeEffect('r',12))
	    if(getClickableState("r",112)==1) mult = mult.mul(clickableEffect("r", 112))
		if(player.lo.evolution.gte(1)) mult = mult.mul(10)
		if(player.lo.evolution.gte(2)) mult = mult.mul(10)
		if(player.lo.evolution.gte(3)) mult = mult.mul(10)
		if(player.lo.evolution.gte(4)) mult = mult.mul(10)
		if(hasUpgrade('j',18))mult = mult.mul(upgradeEffect('j',18));
		if(hasUpgrade('ri',25))mult = mult.mul(upgradeEffect('ri',25));
		return mult
    },
    jdimMult(n) {
        mult = new Decimal(1)
		if(n==0 || (player.lo.evolution.gte(2)&&n==1)||(player.lo.evolution.gte(3)&&n==2)||(player.lo.evolution.gte(4)&&n==3)) {
			mult = mult.mul(player.points.add(10).log10());
			mult = mult.mul(Decimal.pow(hasUpgrade('lo',43)?1.25:1.2,player.lo.points));
			mult = mult.mul(Decimal.pow(player.lo.points.add(1),hasUpgrade('lo',43)?2:0));
		}
		if(n==0 || (hasUpgrade('lo',123)&&n==1) || (hasUpgrade('lo',125)&&n==2) || (hasUpgrade('lo',143)&&n==3)){
			if(hasUpgrade('lo',44))mult = mult.mul(layers.ch.note().add(1));
			if(hasUpgrade('lo',51))mult = mult.mul(upgradeEffect('lo',51));
			if(hasUpgrade('lo',16))mult = mult.mul(upgradeEffect('lo',16));
			if(hasUpgrade('lo',66))mult = mult.mul(upgradeEffect('lo',66));
		}
		
		if(n==0)mult = mult.mul(challengeEffect('r',11));
		if(hasUpgrade('lo',103)&&n==1)mult = mult.mul(challengeEffect('r',11));
		if(hasUpgrade('lo',112)&&n==2)mult = mult.mul(challengeEffect('r',11));
		if(hasUpgrade('lo',131)&&n==3)mult = mult.mul(challengeEffect('r',11));
		if(hasUpgrade('lo',141)&&n==4)mult = mult.mul(challengeEffect('r',11));
		
		if(n==0)mult = mult.mul(player.lo.jdim1.add(1));
		if(n==1)mult = mult.mul(player.lo.jdim2.add(1));
		if(n==2)mult = mult.mul(player.lo.jdim3.add(1));
		if(n==3)mult = mult.mul(player.lo.jdim4.add(1));
		
		if(hasUpgrade('j',18)&&n==0)mult = mult.mul(upgradeEffect('j',18));
		if(hasUpgrade('j',18)&&n==1)mult = mult.mul(upgradeEffect('j',18));
		if(hasUpgrade('j',28)&&n==2)mult = mult.mul(upgradeEffect('j',18));
		if(hasUpgrade('j',38)&&n==3)mult = mult.mul(upgradeEffect('j',18));
		
		if(hasUpgrade('lo',135))mult = mult.mul(upgradeEffect('lo',135));
		if(hasUpgrade('ri',35))mult = mult.mul(upgradeEffect('ri',35));
		
		return mult
    },
    gainExp() { 
      exp= new Decimal(1)
		
      return exp
    },
    ptt() {
        mult = new Decimal(10.8).add(player.lo.points.sqrt().mul(0.02).min(0.11));
		return mult
    },
    rks() {
        mult = softcap(player.lo.points,new Decimal(36),new Decimal(0.25)).mul(3).add(40).sqrt().min(12.62);
		return mult
    },
    noteEffect() {
        mult = player.lo.note.add(1).pow(100);
		if(hasUpgrade('lo',51))mult = mult.pow(2)
		if(hasUpgrade('lo',54))mult = mult.pow(2)
		if(hasUpgrade('lo',83))mult = mult.pow(2.5)
		if(hasUpgrade('lo',85))mult = mult.pow(2.5)
		if(hasUpgrade('lo',95))mult = mult.pow(2)
		if(hasUpgrade('lo',111))mult = mult.pow(2)
		return mult
    },
    noteEffect2() {
        mult = player.lo.note.add(1).pow(400);
		if(hasUpgrade('lo',52))mult = mult.pow(2)
		if(hasUpgrade('lo',55))mult = mult.pow(2)
		if(hasUpgrade('lo',84))mult = mult.pow(6.25)
		return mult
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    ],
    branches(){return ['a']},
    layerShown(){return player.lo.unlocked || hasUpgrade('s',11)},
    tabFormat: {
   "主要": {
        content: [ ["infobox","introBox"],
          "main-display",
    "prestige-button",
        ["display-text",
      function() {return '你有 ' + format(player.points) + ' Notes'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    ["display-text",
	 function() {if(!player.l.unlocked)return '';return 'loader3229的PTT：' + format(tmp.lo.ptt) + '（31个Loaded Points时达到上限）'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
	 function() {if(!player.c.unlocked())return '';return 'loader3229的RKS：' + format(tmp.lo.rks) + '（54个Loaded Points时达到上限）'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    "upgrades",

],
    },
	
   "打歌": {
        content: [ ["infobox","introBox2"],
          "main-display",
    ["display-text",
      function() {if(player[this.layer].evolution.gte(3))return '';return 'loader3229的精力： ' + formatWhole(player.lo.stamina) + '/2,000'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
	 function() {return 'loader3229现在' + (player.lo.play?'正':'不') + '在打歌。'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {/*if(player[this.layer].evolution.gte(1))return 'loader3229打出了' + formatWhole(player.lo.perfect.floor()) + '个Perfect判定。';*/return 'loader3229打出了' + formatWhole(player.lo.perfect.floor()) + '个Perfect，' + formatWhole(player.lo.great.floor()) + '个Great和'+ formatWhole(player.lo.miss.floor()) + '个Miss判定。'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return 'note和Loaded Points数量越多，判定的获得速度会越快。当前：×' + format(tmp.lo.gainMult2)},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {if(!hasUpgrade('lo',12))return ''; 
		  let ret = 'loader3229打出过的最高连击数为：' + formatWhole(player.lo.maxcombo);
		  if(player.lo.maxcombo_warn.gte(1)){
			  let b=new Decimal(3).div(player.lo.maxcombo_warn.div(player.lo.maxcombo).mul(4).sub(1));
			  b=b.pow(3);
			  if(player.lo.maxcombo_warn.div(player.lo.maxcombo).gte(1/4))ret = ret + '(' + formatWhole(b.mul(player.lo.maxcombo_warn)) + ')';
			  else ret = ret + '(---)';
		  }
		  return ret;
		  },
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
	 function() {if(player.lo.maxcombo_warn.gte(1))return formatWhole(player.lo.maxcombo_warn)+'以上的最高连击数被软上限！提升物量可以延迟软上限的出现';return '';},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
     "blank",
    ["clickable",11],"buyables",
],
  unlocked(){return hasUpgrade('lo',11)}
},
   "制谱": {
        content: [ ["infobox","introBox3"],
          "main-display",
    ["display-text",
	   function() {return '当loader3229不在打歌时，loader3229将会制作自制谱，并且为你产生Loaded Notes。Loaded Notes对notes有加成。'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '你有' + formatWhole(player.lo.note.floor()) + '个Loaded Notes。(+' + format(tmp.lo.gainMult3.mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1).mul(hasUpgrade('lo',126)?15:1)) + '/s)'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
	 function() {return '你的Loaded Notes使note获取变为原来的' + format(tmp.lo.noteEffect) + '倍，并且使谱面需求除以' + format(tmp.lo.noteEffect2) + '。'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return 'note和Loaded Points数量越多，Loaded Notes的获得速度会越快。当前：×' + format(tmp.lo.gainMult3)},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
     "blank","buyables",
],
  unlocked(){return hasUpgrade('lo',35)}
},
   "进化": {
        content: [ ["infobox","introBox4"],
          "main-display",
    ["display-text",
	   function() {return '让loader3229进行进化将会重置Notes和所有的层级（除成就和里程碑），并且使loader3229的进化次数+1。每次进化都会对这个游戏产生一定的影响！'}],
     "blank",["clickable",12],"milestones",
],
  unlocked(){return hasUpgrade('lo',94) || player.lo.evolution.gte(1)}
},
   "判定维度": {
        content: [ ["infobox","introBox5"],
          "main-display",
    ["display-text",
	   function() {
		   if(player.j.pdqja.gt(479) && player.lo.evolution.lt(2))return '在进化次数1下完成J层级的479ms判定区间挑战以解锁下一个判定类型：Perfect+';
		   if(player.j.pdqja.gt(441) && player.lo.evolution.lt(3))return '在进化次数2下完成J层级的441ms判定区间挑战以解锁下一个判定类型：S-Perfect';
		   if(player.j.pdqja.gt(376) && player.lo.evolution.lt(4))return '在进化次数3下完成J层级的376ms判定区间挑战以解锁下一个判定类型：S-Perfect+';
		   if(player.j.pdqja.gt(375) && player.lo.evolution.lt(5))return '在进化次数4下完成J层级的375ms判定区间挑战以解锁下一个判定类型：Marvelous';
		   return '';
	}],"blank",
	["display-text",
      function() {if(player[this.layer].evolution.gte(3))return '';return 'loader3229的精力：' + formatWhole(player.lo.stamina) + '/2,000'}],
    ["display-text",
	   function() {return 'loader3229现在' + (player.lo.play?'正':'不') + '在打歌。'
	}],"blank",
	["row",
	[["column",[
	["display-text","判定类型"],
	["display-text",function(){if((player.j.pdqja.lte(375) && player.lo.evolution.gte(4)) || player.lo.evolution.gte(5))return 'Marvelous';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(376) && player.lo.evolution.gte(3)) || player.lo.evolution.gte(4))return 'S-Perfect+';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(441) && player.lo.evolution.gte(2)) || player.lo.evolution.gte(3))return 'S-Perfect';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479) || player.lo.evolution.gte(2))return 'Perfect+';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return 'Perfect';return '';}],
	]],
	["column",[
	["display-text","|"],
	["display-text",function(){if((player.j.pdqja.lte(375) && player.lo.evolution.gte(4)) || player.lo.evolution.gte(5))return '|';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(376) && player.lo.evolution.gte(3)) || player.lo.evolution.gte(4))return '|';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(441) && player.lo.evolution.gte(2)) || player.lo.evolution.gte(3))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479) || player.lo.evolution.gte(2))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return '|';return '';}],
	]],
	["column",[
	["display-text","打出次数"],
	["display-text",function(){if((player.j.pdqja.lte(375) && player.lo.evolution.gte(4)) || player.lo.evolution.gte(5))return formatWhole(player.lo.jdim4.floor())+'(+'+format(layers.lo.jdimMult(4).mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1).mul(hasUpgrade('lo',126)?15:1))+'/s)';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(376) && player.lo.evolution.gte(3)) || player.lo.evolution.gte(4))return formatWhole(player.lo.jdim3.floor())+'(+'+format(layers.lo.jdimMult(3).mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1).mul(hasUpgrade('lo',126)?15:1))+'/s)';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(441) && player.lo.evolution.gte(2)) || player.lo.evolution.gte(3))return formatWhole(player.lo.jdim2.floor())+'(+'+format(layers.lo.jdimMult(2).mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1).mul(hasUpgrade('lo',126)?15:1))+'/s)';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479) || player.lo.evolution.gte(2))return formatWhole(player.lo.jdim1.floor())+'(+'+format(layers.lo.jdimMult(1).mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1).mul(hasUpgrade('lo',126)?15:1))+'/s)';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return formatWhole(player.lo.perfect.floor())+'(+'+format(n(1).sub(buyableEffect('lo',12)).mul(tmp.lo.gainMult2).mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1).mul(hasUpgrade('lo',126)?15:1))+'/s)';return '';}],
	]],["blank"],
	["column",[
	["display-text","|"],
	["display-text",function(){if((player.j.pdqja.lte(375) && player.lo.evolution.gte(4)) || player.lo.evolution.gte(5))return '|';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(376) && player.lo.evolution.gte(3)) || player.lo.evolution.gte(4))return '|';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(441) && player.lo.evolution.gte(2)) || player.lo.evolution.gte(3))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479) || player.lo.evolution.gte(2))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return '|';return '';}],
	]],
	["column",[
	["display-text","加成"],
	["display-text",function(){if((player.j.pdqja.lte(375) && player.lo.evolution.gte(4)) || player.lo.evolution.gte(5))return '为S-Perfect+判定和Milthm维度5提供×' + formatWhole(player.lo.jdim4.floor().add(1)) + '加成';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(376) && player.lo.evolution.gte(3)) || player.lo.evolution.gte(4))return '为S-Perfect判定和Milthm维度4提供×' + formatWhole(player.lo.jdim3.floor().add(1)) + '加成';return '';}],
	["display-text",function(){if((player.j.pdqja.lte(441) && player.lo.evolution.gte(2)) || player.lo.evolution.gte(3))return '为Perfect+判定和Milthm维度3提供×' + formatWhole(player.lo.jdim2.floor().add(1)) + '加成';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479) || player.lo.evolution.gte(2))return '为Perfect及以下判定和Milthm维度2提供×' + formatWhole(player.lo.jdim1.floor().add(1)) + '加成';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return '为Milthm维度1提供×' + formatWhole(player.lo.perfect.floor().add(1)) + '加成';return '';}],
	]]],
	],
    ["clickable",11]],
  unlocked(){return hasUpgrade('lo',102)}
},
	
	},
	
      upgrades: {
    11:{ 
                description: "解锁loader3229的打歌功能",
                cost: new Decimal(1),
			},
    12:{ 
                description: "在打歌中解锁连击",
                cost: new Decimal(2),
			},
    13:{ 
                description: "最高连击数增加Note获取",
                cost: new Decimal(3),
    unlocked() { return (hasUpgrade('lo', 12))},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    14:{ 
                description: "最高连击数增加歌曲获取",
                cost: new Decimal(4),
    unlocked() { return (hasUpgrade('lo', 12))},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    15:{ 
                description: "最高连击数增加源点获取",
                cost: new Decimal(5),
    unlocked() { return player.a.unlocked},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    21:{ 
                description: "每个Loaded Point额外提供一个免费的第1行loader3229可购买项等级",
                cost: new Decimal(6),
    unlocked() { return player.a.unlocked},
                effect() {
             return player.lo.points
                },
     effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id)) },
			},
    22:{ 
                description: "第一个loader3229可购买项对歌曲也有效",
                cost: new Decimal(7),
    unlocked() { return player.a.unlocked},
			},
    23:{ 
                description: "诗篇需求/1e60",
                cost: new Decimal(8),
    unlocked() { return player.l.unlocked},
			},
    24:{ 
                description: "最高连击数增加Phidata获取",
                cost(){return new Decimal(player[this.layer].evolution.gte(1)?9:8)},
    unlocked() { return player.p.unlocked},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    25:{ 
		description: "如果你的PTT小于loader3229的PTT，loader3229可以让你的PTT变为他的PTT。",
                cost(){return new Decimal(player[this.layer].evolution.gte(2)?10:11)},
    unlocked() { return player.p.unlocked},
			},
    31:{ 
                description: "最高连击数增加Cytus力量获取",
                cost(){return new Decimal(player[this.layer].evolution.gte(3)?11:15)},
    unlocked() { return player.c.unlocked()},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    32:{ 
                description: "第一个loader3229可购买项对Phidata也有效",
                cost(){return new Decimal(player[this.layer].evolution.gte(3)?12:28)},
    unlocked() { return player.ch.unlocked()},
			},
    33:{ 
                description: "第一个loader3229可购买项对Cytus力量也有效",
                cost(){return new Decimal(player[this.layer].evolution.gte(3)?13:32)},
    unlocked() { return player.ch.unlocked()},
			},
    34:{ 
                description: "最高连击数增加Cyten获取",
                cost(){return new Decimal(player[this.layer].evolution.gte(3)?14:player[this.layer].evolution.gte(1)?21:22)},
    unlocked() { return player.c.unlocked()},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    35:{ 
                description: "解锁loader3229的制谱功能",
                cost(){return new Decimal(player[this.layer].evolution.gte(3)?15:player[this.layer].evolution.gte(1)?20:22)},
    unlocked() { return player.ch.unlocked()},
			},
    41:{ 
                description: "第一个loader3229可购买项对源点也有效",
                cost: new Decimal(16),
    unlocked() { return player.a.unlocked},
			},
    42:{ 
		description: "再次增加Phigros挑战“EZ”、“HD”的上限，增强Phigros挑战“EZ”、“HD”的奖励，并且批量完成Phigros挑战“EZ”、“HD”",
                cost: new Decimal(17),
    unlocked() { return player.c.unlocked()},
			},
    43:{ 
		description: "Loaded Points对判定的获取速度加成变得更好",
                cost: new Decimal(18),
    unlocked() { return player.c.unlocked()},
			},
    44:{ 
		description: "物量加成判定的获取速度",
                cost(){return new Decimal(player[this.layer].evolution.gte(1)?19:21)},
    unlocked() { return player.ch.unlocked()},
                effect() {
             return layers.ch.note().add(1)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    45:{ 
		description: "增加Phigros挑战“IN”和“AT”的上限",
                cost(){return new Decimal(player[this.layer].evolution.gte(3)?20:22)},
    unlocked() { return player.ch.unlocked()},
			},
    51:{ 
                description: "最高连击数增加判定和Loaded Notes获取，Loaded Notes效果1变为原来的平方",
                cost(){return new Decimal(player[this.layer].evolution.gte(4)?21:24)},
    unlocked() { return (hasUpgrade('lo', 35))},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    52:{ 
                description: "Loaded Points对Loaded Notes的获取速度加成变得更好，Loaded Notes效果2变为原来的平方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?22:player[this.layer].evolution.gte(1)?23:25);
				},
    unlocked() { return (hasUpgrade('lo', 35))},
			},
			
    53:{ 
                description: "Cytus可购买项7的效果变得更好",
                cost(){return new Decimal(player[this.layer].evolution.gte(4)?23:25)},
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    54:{ 
                description: "Loaded Notes效果1变为原来的平方",
                cost(){return new Decimal(player[this.layer].evolution.gte(4)?24:26)},
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    55:{ 
                description: "Loaded Notes效果2变为原来的平方",
                cost(){return new Decimal(player[this.layer].evolution.gte(4)?25:player[this.layer].evolution.gte(3)?28:29)},
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    61:{ 
                description: "解锁Loaded Notes可购买项",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?26:player[this.layer].evolution.gte(1)?29:30);
				},
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    62:{ 
		description: "如果你的RKS小于loader3229的RKS，loader3229可以让你的RKS变为他的RKS。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?27:player[this.layer].evolution.gte(1)?30:31);
				},
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    63:{ 
		description: "增加Phigros挑战“IN”、“AT”和“SP”的上限",
                cost(){return new Decimal(player[this.layer].evolution.gte(4)?28:31)},
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    64:{ 
		description: "Loaded Points增加loader3229层级的速度",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?29:player[this.layer].evolution.gte(1)?31:32);
				},
    unlocked() { return (hasUpgrade('lo', 35))},
                effect() {
             return player.lo.points.add(1)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    65:{ 
		description: "让loader3229帮你打课题模式。loader3229将会使你的最高课题能量不再低于6。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?30:player[this.layer].evolution.gte(1)?34:36);
				},
    unlocked() { return (hasUpgrade('ch', 27)) || player.lo.evolution.gte(4)},
			},
    16:{ 
		description: "诗篇增加判定获取，并且解锁一个可购买项",
                cost(){return new Decimal(player[this.layer].evolution.gte(4)?31:37)},
    unlocked() { return (hasChallenge('c', 14))},
                effect() {
             return player.l.points.add(1).pow(player[this.layer].evolution.gte(1)?1:0.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    26:{ 
		description: "本层级的速度变为原来的15倍",
                cost: new Decimal(38),
    unlocked() { return (hasChallenge('c', 14))},
			},
    36:{ 
		description: "“Arcaea自制谱”的效果变为原来的5次方",
                cost: new Decimal(40),
    unlocked() { return (hasChallenge('c', 14))},
			},
    46:{ 
                description: "最高连击数增加Note获取",
                cost: new Decimal(42),
    unlocked() { return (hasChallenge('c', 14))},
                effect() {
             return Decimal.pow(1e10,player.lo.maxcombo);
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    56:{ 
		description: "Note对Loaded Notes的获取速度加成变得更好",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?44:player[this.layer].evolution.gte(1)?45:46);
				},
    unlocked() { return (hasChallenge('c', 14))},
			},
    66:{ 
                description: "让loader3229打他自己的自制谱并提升他的自制谱的质量。Loaded Note增加判定和Loaded Note获取",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?46:player[this.layer].evolution.gte(1)?47:49);
				},
    unlocked() { return (hasChallenge('c', 14))},
                effect() {
             return player.lo.note.add(10).log10();
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    71:{ 
		description: "loader3229的增量游戏会尽量减少软上限。去除谱面升级 今年も「雪降り、メリクリ」目指して頑張り “IN Ⅰ2” 的软上限。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?45:player[this.layer].evolution.gte(1)?46:54);
				},
    unlocked() { return (hasMilestone('sp',3))},
			},
    72:{ 
		description: "解锁一个新的loader3229可购买项。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?47:player[this.layer].evolution.gte(1)?48:53);
				},
    unlocked() { return (hasMilestone('sp',3))},
			},
    73:{ 
		description: "解锁一个新的loader3229可购买项。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?48:player[this.layer].evolution.gte(1)?50:55);
				},
    unlocked() { return (hasMilestone('sp',3))},
			},
    74:{ 
		description: "loader3229会为你自动增加蛇的长度。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?53:56);
				},
    unlocked() { return (hasMilestone('sp',4))},
                effect() {
					if(hasUpgrade('lo',93))return tmp.a.snaCal;
					if(hasUpgrade('lo',75))return tmp.a.snaCal.div(500);
             return tmp.a.snaCal.pow(0.9).div(1000);
                },
     effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id))+"/tick" },
			},
    75:{ 
		description: "提升上一个升级的效果。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?56:player[this.layer].evolution.gte(1)?57:61);
				},
    unlocked() { return (hasUpgrade('sp',17))},
			},
    76:{ 
		description: "Lanota曲包获取量翻倍",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?57:player[this.layer].evolution.gte(1)?58:65);
				},
    unlocked() { return (hasUpgrade('sp',17))},
			},
    81:{ 
		description: "loader3229会为你自动增加龙的长度。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?58:player[this.layer].evolution.gte(1)?59:67);
				},
    unlocked() { return (hasUpgrade('sp',17))},
                effect() {
					if(hasUpgrade('lo',93))return tmp.a.draCal;
					if(hasUpgrade('lo',75))return tmp.a.draCal.div(500);
					return tmp.a.draCal.pow(0.5).div(1000);
                },
     effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id))+"/tick" },
			},
    82:{ 
		description: "提升上一个升级的效果，Lanota曲包获取量再次翻倍。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?59:player[this.layer].evolution.gte(1)?62:70);
				},
    unlocked() { return (player[this.layer].evolution.gte(1)?hasUpgrade('sp',17):hasUpgrade('sp',25))},
			},
    83:{ 
                description: "Loaded Notes效果1变为原来的2.5次方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?64:74);
				},
    unlocked() { return (hasMilestone('r', 0))},
			},
    84:{ 
                description: "Loaded Notes效果2变为原来的6.25次方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?66:86);
				},
    unlocked() { return (hasMilestone('r', 0))},
			},
    85:{ 
                description: "Loaded Notes效果1变为原来的2.5次方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?68:88);
				},
    unlocked() { return (hasMilestone('r', 0))},
			},
    86:{ 
                description: "解锁一个新的loader3229可购买项。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?55:player[this.layer].evolution.gte(1)?65:90);
				},
    unlocked() { return (hasMilestone('r', 0))},
			},
    91:{ 
		description: "Loaded Points提升Milthm获取",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?81:player[this.layer].evolution.gte(3)?82:player[this.layer].evolution.gte(2)?84:player[this.layer].evolution.gte(1)?85:93);
				},
    unlocked() { return (hasUpgrade('r',37))},
                effect() {
             return Decimal.pow(player.lo.evolution.div(10).add(1),player.lo.points).mul(player.lo.points.add(1));
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    92:{ 
		description: "第一个loader3229可购买项对Cyten也有效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?77:player[this.layer].evolution.gte(3)?80:player[this.layer].evolution.gte(2)?85:player[this.layer].evolution.gte(1)?88:95);
				},
    unlocked() { return (hasUpgrade('r',37))},
			},
    93:{ 
		description: "本层级自动增加蛇/龙长度的升级的效果变为500倍",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?60:player[this.layer].evolution.gte(1)?89:99);
				},
    unlocked() { return (hasUpgrade('r',37) || (player[this.layer].evolution.gte(2) && hasUpgrade('sp',17)))},
			},
    94:{ 
		description: "解锁loader3229的进化功能",
                cost(){
					return new Decimal(player[this.layer].evolution.add(101));
				},
    unlocked() { return (hasUpgrade('r',37))},
			},
    95:{ 
                description: "Loaded Notes效果1变为原来的平方",
                cost: new Decimal(35),
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    96:{ 
		description: "loader3229不仅想去除软上限，还想去除硬上限！去除Arcaea升级“Abstruse Dilemma”的硬上限。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?50:60);
				},
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    101:{ 
		description: "增加Rotaeno挑战RC1的上限，并再次增加Phigros挑战“EZ”、“HD”的上限",
                cost: new Decimal(75),
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    102:{ 
		description: "解锁判定维度",
                cost: new Decimal(90),
    unlocked() { return (player.lo.evolution.gte(1) && hasUpgrade('r',47))},
			},
    103:{ 
		description: "增加Rotaeno挑战RC1的上限，Rotaeno挑战RC1的效果也对Perfect+判定的获取生效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?79:player[this.layer].evolution.gte(3)?81:player[this.layer].evolution.gte(2)?91:95);
				},
    unlocked() { return (player.lo.evolution.gte(1) && player.j.pdqja.lte(479)) || player.lo.evolution.gte(3)},
			},
    104:{ 
		description: "增加Phigros挑战“IN”、“AT”和“SP”的上限",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?76:player[this.layer].evolution.gte(3)?83:player[this.layer].evolution.gte(2)?88:90);
				},
    unlocked() { return (player.lo.evolution.gte(1) && hasUpgrade('r',47)) || player.lo.evolution.gte(4)},
			},
    105:{ 
		description: "让loader3229再次帮你打课题模式。loader3229会帮你选择课题模式的谱面难度。",
                cost: new Decimal(96),
    unlocked() { return (player.lo.evolution.gte(1) && player.j.pdqja.lte(479))},
			},
    106:{ 
		description: "第一个loader3229可购买项对Milthm也有效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?81:player[this.layer].evolution.gte(3)?88:player[this.layer].evolution.gte(2)?94:97);
				},
    unlocked() { return (player.lo.evolution.gte(1) && player.j.pdqja.lte(479))},
			},
    111:{ 
                description: "Loaded Notes效果1变为原来的平方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(2)?49:101);
				},
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    112:{ 
		description: "增加Rotaeno挑战RC1的上限，批量完成Rotaeno挑战RC1，Rotaeno挑战RC1的效果也对S-Perfect判定的获取生效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?80:91);
				},
    unlocked() { return (player.lo.evolution.gte(2) && player.j.pdqja.lte(441)) || player.lo.evolution.gte(4)},
			},
    113:{ 
		description: "loader3229 又 要 去除软上限了！Rotaeno升级树升级21的效果软上限延迟到1e333333开始！",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?75:player[this.layer].evolution.gte(3)?86:95);
				},
    unlocked() { return (player.lo.evolution.gte(2) && hasUpgrade('j',28)) || player.lo.evolution.gte(3)},
			},
    114:{ 
		description: "Loaded Points对Loaded Notes的获取速度加成变得更好",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?81:player[this.layer].evolution.gte(3)?89:96);
				},
    unlocked() { return (player.lo.evolution.gte(2) && hasUpgrade('j',28))},
			},
    115:{ 
		description: "解锁新的loader3229可购买项",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?82:player[this.layer].evolution.gte(3)?90:97);
				},
    unlocked() { return (player.lo.evolution.gte(2) && hasUpgrade('j',28))},
			},
    116:{ 
		description: "黄键、红键和长条变得更便宜",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?84:player[this.layer].evolution.gte(3)?94:99);
				},
    unlocked() { return (player.lo.evolution.gte(2) && hasUpgrade('j',31))},
			},
    121:{ 
		description: "去除Phigros挑战“EZ”、“HD”的上限，并且自动完成Phigros挑战“EZ”、“HD”，Phigros挑战“EZ”、“HD”的效果变为原来的10次方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?76:84);
				},
    unlocked() { return (player.lo.evolution.gte(3))},
			},
    122:{ 
		description: "判定区间升级“loader3229”的效果在判定挑战外生效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?83:85);
				},
    unlocked() { return (player.lo.evolution.gte(3) && hasUpgrade('j',18))},
			},
    123:{ 
		description: "前10行里面增加loader3229判定获取的升级对Perfect+判定也有效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?86:87);
				},
    unlocked() { return (player.lo.evolution.gte(3))},
			},
    124:{ 
		description: "解锁新的loader3229可购买项",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?85:93);
				},
    unlocked() { return (player.lo.evolution.gte(3) && hasUpgrade('j',31))},
			},
    125:{ 
		description: "前10行里面增加loader3229判定获取的升级对S-Perfect判定也有效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?88:96);
				},
    unlocked() { return (player.lo.evolution.gte(3))},
			},
    126:{ 
		description: "本层级的速度变为原来的15倍",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?87:97);
				},
    unlocked() { return (player.lo.evolution.gte(3))},
			},
    131:{ 
		description: "增加Rotaeno挑战RC1的上限，Rotaeno挑战RC1的效果也对S-Perfect+判定的获取生效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?90:98);
				},
    unlocked() { return (player.lo.evolution.gte(3) && hasUpgrade('j',38))},
			},
    132:{ 
		description: "Rotaeno升级树升级161不再有限制",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?89:99);
				},
    unlocked() { return (player.lo.evolution.gte(3) && hasUpgrade('j',38))},
			},
    133:{ 
		description: "解锁新的loader3229可购买项",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?90:100);
				},
    unlocked() { return (player.lo.evolution.gte(3) && hasUpgrade('j',31))},
			},
    134:{ 
		description: "让loader3229第三次帮“您”打课题模式。Loaded Points增加课题能量获取。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?93:101);
				},
    unlocked() { return (player.lo.evolution.gte(3) && hasUpgrade('j',31))},
                effect() {
             return Decimal.pow(1.002,player.lo.points);
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    135:{ 
		description: "Loaded Notes增加所有判定获取。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?91:102);
				},
    unlocked() { return (player.lo.evolution.gte(3) && hasUpgrade('j',31))},
                effect() {
             return Decimal.pow(player.lo.note.add(1),hasUpgrade('lo',136)?0.25:0.1);
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    136:{ 
	description: "上一个升级效果变为原来的2.5次方。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?92:92);
				},
    unlocked() { return (player.lo.evolution.gte(4) && hasUpgrade('j',31))},
			},
    141:{ 
		description: "增加Rotaeno挑战RC1的上限，Rotaeno挑战RC1的效果也对Marvelous判定的获取生效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?95:95);
				},
    unlocked() { return (player.lo.evolution.gte(4))},
			},
    142:{ 
		description: "判定升级“末影人2004”不再判定挑战内削弱",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?96:96);
				},
    unlocked() { return (player.lo.evolution.gte(4))},
			},
    143:{ 
		description: "前10行里面增加loader3229判定获取的升级对S-Perfect+判定也有效",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?97:97);
				},
    unlocked() { return (player.lo.evolution.gte(4))},
			},
    144:{ 
		description: "第一个loader3229可购买项的购买次数增加Loaded Notes获取",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?99:99);
				},
    unlocked() { return player.lo.evolution.gte(4)},
                effect() {
             return player.lo.buyables[11].add(1).pow(0.25);
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    145:{ 
		description: "“Arcaea自制谱”的效果变为原来的1.5次方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(4)?102:102);
				},
    unlocked() { return player.lo.evolution.gte(4)},
			},
	},
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
  autoUpgrade() {upg=false
    return upg},
  resetsNothing() {return false},
  canBuyMax: true,
  doReset(resettingLayer) {
    },
clickables: {
    11: {
      title() {return "开始/停止打歌"},
      display() {return "点击以让loader3229开始或停止打歌"},
      canClick() {return true},
      onClick() {player.lo.play=!player.lo.play;},
	  unlocked(){return player.lo.evolution.lt(3);}
    },
    12: {
      title() {return "让loader3229开始进化"},
      display() {return "需要"+formatWhole(player[this.layer].evolution.add(101))+" Loaded Points"},
      canClick() {return player.lo.points.gte(player[this.layer].evolution.add(101))},
      onClick() {
		  if(player.lo.evolution.gte(4))return alert('loader3229暂时不能进行第5次进化。');
		if(player.lo.points.gte(player[this.layer].evolution.add(101))){
			if(confirm("确实要让loader3229开始进化吗？")){
				layerDataReset('s',['milestones']);
				layerDataReset('a',['milestones']);
				layerDataReset('l',['milestones']);
				layerDataReset('lo',['evolution','milestones']);
				layerDataReset('p',['milestones']);
				layerDataReset('m',['milestones']);
				layerDataReset('c',['milestones']);
				layerDataReset('ch',['milestones']);
				layerDataReset('sp',['milestones']);
				if(player.lo.evolution.gte(2)){
					layerDataReset('r',['milestones']);
					layerDataReset('mi',['milestones']);
					layerDataReset('j',['milestones']);
				}else{
					layerDataReset('r',[]);
					layerDataReset('mi',[]);
					layerDataReset('j',[]);
				}
				layerDataReset('ri',[]);
				player.points=new Decimal(0);
				player.lo.evolution = player.lo.evolution.add(1);
				if(player.lo.evolution.gte(2)){
					player.lo.upgrades=[11,12,13,14,15,16,21,22,23,24,25,42,61,62,65,102,105];
				}
				if(player.lo.evolution.gte(3)){
					player.lo.upgrades=[11,12,13,14,15,16,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,61,62,65,102,105];
				}
				if(player.lo.evolution.gte(4)){
					player.lo.upgrades=[11,12,13,14,15,16,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55,61,62,63,64,65,72,73,86,102,105];
				}
			}
		}
	  },
    },
},milestones: [
		{
			requirementDescription: "第1次进化",
            unlocked() {return player[this.layer].evolution.gte(1)},
            done() {return player[this.layer].evolution.gte(1)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "保留前4行里程碑和前6个Rotaeno里程碑，自动购买第一行loader3229可购买项且不消耗判定，第一行loader3229可购买基于Perfect判定而不是Great/Miss判定，Loaded Notes获取变为10倍，Perfect判定数量加成Milthm维度1";
			},
        },
		{
			requirementDescription: "第2次进化",
            unlocked() {return player[this.layer].evolution.gte(2)},
            done() {return player[this.layer].evolution.gte(2)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "自动购买第二行loader3229可购买项且不消耗Loaded Notes，Loaded Notes获取变为10倍，进化时保留一些升级，开始时即解锁Perfect+判定并且Notes和Loaded Points对判定的加成对Perfect+判定生效，loader3229开始制作自制谱时直接获得第二行loader3229可购买项各1个，打歌时也可以获得Loaded Notes";
			},
        },
		{
			requirementDescription: "第3次进化",
            unlocked() {return player[this.layer].evolution.gte(3)},
            done() {return player[this.layer].evolution.gte(3)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "保留前5行里程碑和前3个Rizline里程碑，Loaded Notes获取变为10倍，进化时保留更多升级，进化时直接完成所有Arcaea挑战和5次所有Phigros挑战，开始时即解锁S-Perfect判定并且Notes和Loaded Points对判定的加成对S-Perfect判定生效，loader3229将会自动进行打歌且不再消耗精力，开始时即有1.79e308 Milthm";
			},
        },
		{
			requirementDescription: "第4次进化",
            unlocked() {return player[this.layer].evolution.gte(4)},
            done() {return player[this.layer].evolution.gte(4)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "自动购买第三行loader3229可购买项且不消耗Loaded Notes，直接获得第三行loader3229可购买项各1个，保留Rot升级树和前6个Rizline里程碑，Loaded Notes获取变为10倍，进化时保留更多升级，进化时直接完成所有Cytus挑战和5次所有Rotaeno挑战，开始时即解锁S-Perfect+判定并且Notes和Loaded Points对判定的加成对S-Perfect+判定生效，开始时即有1e500 Milthm";
			},
        },
	],
    buyables: {
    11: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id))},
        display() { return "基于购买次数增加Note乘数<br>价格："+format(this.cost())+" Perfect<br>效果：×"+format(this.effect())},
        title: "技巧帮助",
        effect() {return Decimal.pow(new Decimal(3).add(hasAchievement('A',23)?player.A.ach:0),softcap(getBuyableAmount(this.layer,this.id),new Decimal(625),0.5).add(hasUpgrade('lo',21)?upgradeEffect('lo',21):0))},
        unlocked(){unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].perfect.gte(this.cost()) },
        buy() {
            player[this.layer].perfect = player[this.layer].perfect.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    12: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id))},
        display() { return "基于购买次数增加loader3229的基础Perfect率<br>价格："+format(this.cost())+" "+((player[this.layer].evolution.gte(1))?"Perfect":"Great")+"<br>loader3229的基础Perfect率："+format(new Decimal(1).sub(this.effect()).mul(100))+"%"},
        title: "提高准度",
        effect() {return Decimal.pow(player.lo.evolution.gte(4)?0.997:0.996,getBuyableAmount(this.layer,this.id).add(hasUpgrade('lo',21)?upgradeEffect('lo',21):0)).mul(0.2)},
        unlocked(){unlock=true
          return unlock
        },
        canAfford() { return player[this.layer][player[this.layer].evolution.gte(1)?"perfect":"great"].gte(this.cost()) },
        buy() {
            player[this.layer][player[this.layer].evolution.gte(1)?"perfect":"great"] = player[this.layer][player[this.layer].evolution.gte(1)?"perfect":"great"].sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    13: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id))},
        display() { return "基于购买次数减少loader3229的设备断触率<br>价格："+format(this.cost())+" "+((player[this.layer].evolution.gte(1))?"Perfect":"Miss")+"<br>loader3229的设备基础断触率："+format(this.effect().mul(100))+"%"},
        title: "升级设备",
        effect() {return Decimal.pow(player.lo.evolution.gte(4)?0.994:player.lo.evolution.gte(3)?0.992:player.lo.evolution.gte(2)?0.988:player.lo.evolution.gte(1)?0.984:0.98,getBuyableAmount(this.layer,this.id).add(hasUpgrade('lo',21)?upgradeEffect('lo',21):0)).mul(0.1)},
        unlocked(){unlock=true
          return unlock
        },
        canAfford() { return player[this.layer][player[this.layer].evolution.gte(1)?"perfect":"miss"].gte(this.cost()) },
        buy() {
            player[this.layer][player[this.layer].evolution.gte(1)?"perfect":"miss"] = player[this.layer][player[this.layer].evolution.gte(1)?"perfect":"miss"].sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    21: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e10)},
        display() { return "基于购买次数增加源点获取<br>价格："+format(this.cost())+" Loaded Notes<br>效果：×"+format(this.effect())},
        title: "Arcaea自制谱",
        effect() {return Decimal.pow(1e20,getBuyableAmount(this.layer,this.id)).pow(hasUpgrade('lo',36)?5:1).pow(hasUpgrade('lo',145)?1.5:1)},
        unlocked(){unlock=hasUpgrade('lo',61);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    22: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e10)},
        display() { return "基于购买次数减少谱面需求<br>价格："+format(this.cost())+" Loaded Notes<br>效果：^"+format(this.effect())},
        title: "制谱技巧",
        effect() {if(getBuyableAmount(this.layer,this.id).gte(24))return new Decimal(2).div(getBuyableAmount(this.layer,this.id));return Decimal.pow(0.9,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',61);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    23: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e12)},
        display() { return "基于购买次数减少诗篇需求<br>价格："+format(this.cost())+" Loaded Notes<br>效果：^"+format(this.effect())},
        title: "Lanota自制谱",
        effect() {if(getBuyableAmount(this.layer,this.id).gte(24))return new Decimal(2).div(getBuyableAmount(this.layer,this.id));return Decimal.pow(0.9,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',16);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    31: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e15)},
        display() { return "基于购买次数增加Phidata获取<br>价格："+format(this.cost())+" Loaded Notes<br>效果：×"+format(this.effect())},
        title: "Phigros自制谱",
        effect() {return Decimal.pow(1e80,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',72);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    32: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e16)},
        display() { return "基于购买次数减少曲包需求<br>价格："+format(this.cost())+" Loaded Notes<br>效果：^"+format(this.effect())},
        title: "自制谱曲包",
        effect() {if(getBuyableAmount(this.layer,this.id).gte(24))return new Decimal(2).div(getBuyableAmount(this.layer,this.id));return Decimal.pow(0.9,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',73);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    33: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e20)},
        display() { return "基于购买次数增加Cyten获取<br>价格："+format(this.cost())+" Loaded Notes<br>效果：×"+format(this.effect())},
        title: "Cytus自制谱",
        effect() {return Decimal.pow(1e10,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',86);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    41: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e30)},
        display() { return "基于购买次数增加旋律获取<br>价格："+format(this.cost())+" Loaded Notes<br>效果：×"+format(this.effect())},
        title: "Rotaeno自制谱",
        effect() {return Decimal.pow(3,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',115);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    42: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e32)},
        display() { return "基于购买次数提升所有Milthm维度<br>价格："+format(this.cost())+" Loaded Notes<br>效果：×"+format(this.effect())},
        title: "Milthm自制谱",
        effect() {return Decimal.pow(10,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',124);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
    43: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id)).mul(1e35)},
        display() { return "基于购买次数提升Dot获取<br>价格："+format(this.cost())+" Loaded Notes<br>效果：×"+format(this.effect())},
        title: "Rizline自制谱",
        effect() {return Decimal.pow(1.25,getBuyableAmount(this.layer,this.id))},
        unlocked(){unlock=hasUpgrade('lo',133);
          return unlock
        },
        canAfford() { return player[this.layer].note.gte(this.cost()) },
        buy() {
            player[this.layer].note = player[this.layer].note.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
    },
},


    update(diff) {
		// options.theme bug fix
		if(gcs('j',11)==1){
			options.theme='judgment';
			changeTheme();
			resizeCanvas();
		}else if(options.theme=='judgment'){
			options.theme='default';
			changeTheme();
			resizeCanvas();
		}
		
		if(hasUpgrade('lo',64))diff=upgradeEffect('lo',64).mul(diff).toNumber();
		if(hasUpgrade('lo',26))diff*=15;
		if(hasUpgrade('lo',126))diff*=15;
		if(player.lo.play){
			var f=player.lo.stamina.min(diff);
			if(player[this.layer].evolution.gte(3))f=new Decimal(diff);
			
			if(hasUpgrade('lo',102)){
				if((player.j.pdqja.lte(375) && player.lo.evolution.gte(4)) || player.lo.evolution.gte(5)){
					player.lo.jdim4=player.lo.jdim4.add(f.mul(this.jdimMult(4)));
				}
				if((player.j.pdqja.lte(376) && player.lo.evolution.gte(3)) || player.lo.evolution.gte(4)){
					player.lo.jdim3=player.lo.jdim3.add(f.mul(this.jdimMult(3)));
				}
				if((player.j.pdqja.lte(441) && player.lo.evolution.gte(2)) || player.lo.evolution.gte(3)){
					player.lo.jdim2=player.lo.jdim2.add(f.mul(this.jdimMult(2)));
				}
				if(player.j.pdqja.lte(479) || player.lo.evolution.gte(2)){
					player.lo.jdim1=player.lo.jdim1.add(f.mul(this.jdimMult(1)));
				}
			}
			
			var m=f.mul(Decimal.pow(0.1,new Decimal(1).sub(player.lo.stamina.div(2000))).mul(Decimal.pow(this.buyables[13].effect(),player.lo.stamina.div(2000))));
			player.lo.miss=player.lo.miss.add(m.mul(this.gainMult2()));
			f=f.sub(m);
			var g=f.mul(Decimal.pow(0.25,new Decimal(1).sub(player.lo.stamina.div(2000))).mul(Decimal.pow(this.buyables[12].effect(),player.lo.stamina.div(2000))));
			player.lo.great=player.lo.great.add(g.mul(this.gainMult2()));
			f=f.sub(g);
			player.lo.perfect=player.lo.perfect.add(f.mul(this.gainMult2()));
			if(player[this.layer].evolution.lt(3))player.lo.stamina=player.lo.stamina.sub(diff);
			if(player.lo.stamina.lte(0))player.lo.play=false;
			player.lo.stamina=player.lo.stamina.max(0);
			if(hasUpgrade('lo',12)){
				var c=player.points.add(1e10).log10().log10().pow(0.5).mul(player.lo.points.add(10).log10().pow(0.5)).div(Decimal.pow(0.1,new Decimal(1).sub(player.lo.stamina.div(2000))).mul(Decimal.pow(this.buyables[13].effect(),player.lo.stamina.div(2000))));
				
				var d=new Decimal(tmp.ch.note || 1).max(0).div(5).add(100);
				if(d.gte(500))d = new Decimal(tmp.ch.note || 1).max(0).div(4);
				if(c.gte(d)){
					c = c.mul(d).mul(d).cbrt();
					c = c.div(c.add(d.mul(3))).mul(4).mul(d);
				}
				
				//c = c.min(1234);
				player.lo.maxcombo=player.lo.maxcombo.max(c);
				if(player.lo.maxcombo.gte(d)){
					player.lo.maxcombo_warn=d;
				}else player.lo.maxcombo_warn=new Decimal(0);
			}
		}else{
			player.lo.maxcombo_warn=new Decimal(0);
			player.lo.stamina=player.lo.stamina.add(diff*1.5).min(2000);
			if(hasUpgrade('lo',35) && player[this.layer].evolution.lt(2)){
				player.lo.note=player.lo.note.add(tmp.lo.gainMult3.mul(diff));
				if(player.lo.evolution.lte(0))player.lo.note=player.lo.note.min(1e24);
				if(player.lo.evolution.lte(1))player.lo.note=player.lo.note.min(1e28);
			}
			if(hasUpgrade('lo',74) && player[this.layer].evolution.lt(3)){
				player.a.sn=player.a.sn.add(this.upgrades[74].effect().mul(diff));
				if(player.lo.evolution.lte(0))player.a.sn=player.a.sn.min(1e15);
				if(player.lo.evolution.lte(2))player.a.sn=player.a.sn.min(1e16);
			}
			if(hasUpgrade('lo',81) && player[this.layer].evolution.lt(3)){
				player.a.dr=player.a.dr.add(this.upgrades[81].effect().mul(diff));
				if(player.lo.evolution.lte(0))player.a.dr=player.a.dr.min(1e10);
				if(player.lo.evolution.lte(2))player.a.dr=player.a.dr.min(2e10);
			}
		}
		if(hasUpgrade('lo',35) && player[this.layer].evolution.gte(2)){
			player.lo.note=player.lo.note.add(tmp.lo.gainMult3.mul(diff));
			if(player.lo.evolution.lte(2))player.lo.note=player.lo.note.min(2e32);
			if(player.lo.evolution.lte(3))player.lo.note=player.lo.note.min(5e36);
			if(player.lo.evolution.lte(4))player.lo.note=player.lo.note.min(1e40);
		}
		if(hasUpgrade('lo',74) && player[this.layer].evolution.gte(3)){
			player.a.sn=player.a.sn.add(this.upgrades[74].effect().mul(diff));
			player.a.sn=player.a.sn.min(1e17);
		}
		if(hasUpgrade('lo',81) && player[this.layer].evolution.gte(3)){
			player.a.dr=player.a.dr.add(this.upgrades[81].effect().mul(diff));
			player.a.dr=player.a.dr.min(1e11);
		}
		if(player[this.layer].evolution.gte(3))player.lo.play=true;
		if(player[this.layer].evolution.gte(3))player.mi.points=player.mi.points.max(Number.MAX_VALUE);
		if(player[this.layer].evolution.gte(4))player.mi.points=player.mi.points.max("1e500");
		if(hasUpgrade('lo',25))player.a.ptt=player.a.ptt.max(tmp.lo.ptt);
		if(hasUpgrade('lo',62))player.p.rks=player.p.rks.max(tmp.lo.rks);
		if(hasUpgrade('lo',65))player.ch.en=player.ch.en.max(6);
		if((hasUpgrade('lo',42)&&player.p.activeChallenge==11) || hasUpgrade('lo',121))player.p.challenges[11]=new Decimal(player.p.challenges[11]).max(player.a.points.add(1).log10().div(4).sub(1).floor()).min(layers.p.challenges[11].completionLimit()).toNumber();
		if((hasUpgrade('lo',42)&&player.p.activeChallenge==12) || hasUpgrade('lo',121))player.p.challenges[12]=new Decimal(player.p.challenges[12]).max(player.points.add(1).log10().div(20).add(0.5).floor()).min(layers.p.challenges[12].completionLimit()).toNumber();
		if(hasUpgrade('lo',112)&&player.r.activeChallenge==11)player.r.challenges[11]=new Decimal(player.r.challenges[11]).max(player.c.power.add(1).log10().div(50).sub(23).floor()).min(layers.r.challenges[11].completionLimit()).toNumber();
		if(player.lo.evolution.gte(1)){
			player.lo.buyables[11]=player.lo.buyables[11].max(player.lo.perfect.max(1).log2().floor().add(1));
			player.lo.buyables[12]=player.lo.buyables[12].max(player.lo.perfect.max(1).log2().floor().add(1));
			player.lo.buyables[13]=player.lo.buyables[13].max(player.lo.perfect.max(1).log2().floor().add(1));
		}
		if(player.lo.evolution.gte(2)&&hasUpgrade('lo',35)){
			player.lo.buyables[21]=player.lo.buyables[21].max(player.lo.note.div(1e10).max(1).log2().floor().add(1));
			player.lo.buyables[22]=player.lo.buyables[22].max(player.lo.note.div(1e10).max(1).log2().floor().add(1));
			player.lo.buyables[23]=player.lo.buyables[23].max(player.lo.note.div(1e12).max(1).log2().floor().add(1));
		}
		if(player.lo.evolution.gte(3)){
			player.a.challenges[11]=Math.max(player.a.challenges[11],1);
			player.a.challenges[12]=Math.max(player.a.challenges[12],1);
			player.a.challenges[13]=Math.max(player.a.challenges[13],1);
			player.a.challenges[14]=Math.max(player.a.challenges[14],1);
			player.p.challenges[11]=Math.max(player.p.challenges[11],5);
			player.p.challenges[12]=Math.max(player.p.challenges[12],5);
			player.p.challenges[13]=Math.max(player.p.challenges[13],5);
			player.p.challenges[14]=Math.max(player.p.challenges[14],5);
			player.p.challenges[15]=Math.max(player.p.challenges[15],5);
		}
		if(player.lo.evolution.gte(4)){
			player.lo.buyables[31]=player.lo.buyables[31].max(player.lo.note.div(1e15).max(1).log2().floor().add(1));
			player.lo.buyables[32]=player.lo.buyables[32].max(player.lo.note.div(1e16).max(1).log2().floor().add(1));
			player.lo.buyables[33]=player.lo.buyables[33].max(player.lo.note.div(1e20).max(1).log2().floor().add(1));
			player.c.challenges[11]=Math.max(player.c.challenges[11],1);
			player.c.challenges[12]=Math.max(player.c.challenges[12],1);
			player.c.challenges[13]=Math.max(player.c.challenges[13],1);
			player.c.challenges[14]=Math.max(player.c.challenges[14],1);
			player.r.challenges[11]=Math.max(player.r.challenges[11],5);
			player.r.challenges[12]=Math.max(player.r.challenges[12],5);
			player.r.challenges[13]=Math.max(player.r.challenges[13],5);
			player.r.challenges[14]=Math.max(player.r.challenges[14],5);
            setClickableState("r",21,1)
            setClickableState("r",31,1)
            setClickableState("r",32,1)
            setClickableState("r",41,1)
            setClickableState("r",42,1)
            setClickableState("r",43,1)
            setClickableState("r",51,1)
            setClickableState("r",52,1)
            setClickableState("r",53,1)
            setClickableState("r",61,1)
            setClickableState("r",71,1)
            setClickableState("r",72,1)
            setClickableState("r",73,1)
            setClickableState("r",81,1)
            setClickableState("r",82,1)
            setClickableState("r",83,1)
            setClickableState("r",91,1)
            setClickableState("r",92,1)
            setClickableState("r",93,1)
            setClickableState("r",101,1)
            setClickableState("r",102,1)
            setClickableState("r",103,1)
            setClickableState("r",111,1)
            setClickableState("r",112,1)
            setClickableState("r",121,1)
            setClickableState("r",131,1)
            setClickableState("r",132,1)
            setClickableState("r",133,1)
            setClickableState("r",141,1)
            setClickableState("r",142,1)
            setClickableState("r",143,1)
            setClickableState("r",151,1)
            setClickableState("r",152,1)
            setClickableState("r",153,1)
            setClickableState("r",161,1)
            setClickableState("r",171,1)
            setClickableState("r",181,1)
		}
		if(hasUpgrade('lo',105) && gcs('t',18)!=1){
			function calc(rks,dif){
				dif = dif.max(1);
				let a=1.1**0.05;
				if(hasUpgrade('ch',44))a=1.1**0.1;
				if(hasUpgrade('ch',52))a=1.2**0.2;
				let sco=rks.div(dif).max(0).sub(0.3).pow(0.3).mul(a).mul(1000000).mul(tmp.a.drEff5)
				if(sco.gte(960000)) sco=sco.sub(960000).pow(0.75).add(960000).min(1000000)
				let en=sco.div(1000000).pow(5).mul(dif).mul(3).div(5)
				return en;
			}
			rks1=player.p.rks;
			dif1=player.ch.dif1;
			
			if(calc(rks1,dif1.add(1)).gte(calc(rks1,dif1))){
				layers.ch.clickables[11].onClick();
			}
			
			rks1=player.p.rks;
			dif1=player.ch.dif1;
			
			if(calc(rks1,dif1.sub(1)).gte(calc(rks1,dif1))){
				layers.ch.clickables[21].onClick();
			}
			
			player.ch.dif2=player.ch.dif1;
			player.ch.dif3=player.ch.dif1;
		}
	},
})//Loader3229
