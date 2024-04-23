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
		if(player.lo.evolution.gte(1))return Decimal.pow(10,5000000/(101**3.1));
		return new Decimal(1000)
	},
    exponent(){
		if(player.lo.evolution.gte(1))return new Decimal(3.1);
		return new Decimal(3)
	},
    // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		return mult
    },
    gainMult2() {
        mult = new Decimal(1)
		mult = mult.mul(player.points.add(10).log10());
		mult = mult.mul(Decimal.pow(hasUpgrade('lo',43)?1.25:1.2,player.lo.points));
		mult = mult.mul(Decimal.pow(player.lo.points.add(1),hasUpgrade('lo',43)?2:0));
		if(hasUpgrade('lo',44))mult = mult.mul(layers.ch.note().add(1));
		if(hasUpgrade('lo',51))mult = mult.mul(upgradeEffect('lo',51));
		if(hasUpgrade('lo',16))mult = mult.mul(upgradeEffect('lo',16));
		if(hasUpgrade('lo',66))mult = mult.mul(upgradeEffect('lo',66));
		mult = mult.mul(challengeEffect('r',11));
		mult = mult.mul(player.lo.jdim1.add(1));
		return mult
    },
    gainMult3() {
        mult = new Decimal(1)
		if(hasUpgrade('lo',56))mult = mult.mul(player.points.add(10).log10().pow(0.25));
		else mult = mult.mul(player.points.add(10).log10().add(10).log10());
		mult = mult.mul(Decimal.pow(player.lo.points.add(1),hasUpgrade('lo',52)?2:1));
		if(hasUpgrade('lo',51))mult = mult.mul(upgradeEffect('lo',51));
		if(hasUpgrade('m',19))mult = mult.mul(upgradeEffect('m',19));
		if(hasUpgrade('lo',66))mult = mult.mul(upgradeEffect('lo',66));
		if(hasUpgrade('ch',38))mult = mult.mul(upgradeEffect('ch',38));
		mult = mult.mul(challengeEffect('r',12))
	    if(getClickableState("r",112)==1) mult = mult.mul(clickableEffect("r", 112))
		if(player.lo.evolution.gte(1)) mult = mult.mul(10)
		return mult
    },
    jdimMult(n) {
        mult = new Decimal(1)
		if(hasUpgrade('lo',103)&&n==1)mult = mult.mul(challengeEffect('r',11));
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
      function() {return 'loader3229的精力： ' + formatWhole(player.lo.stamina) + '/2,000'},
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
		  if(player.lo.maxcombo_warn.gte(player.lo.evolution.gte(1)?80:800)){
			  let b=new Decimal(3).div(player.lo.maxcombo_warn.div(player.lo.maxcombo).mul(4).sub(1));
			  b=b.pow(3);
			  ret = ret + '(' + formatWhole(b.mul(player.lo.maxcombo_warn)) + ')';
		  }
		  return ret;
		  },
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
	 function() {if(player.lo.maxcombo_warn.gte(player.lo.evolution.gte(1)?80:800))return formatWhole(player.lo.maxcombo_warn)+'以上的最高连击数被软上限！提升物量可以延迟软上限的出现';return '';},
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
      function() {return '你有' + formatWhole(player.lo.note.floor()) + '个Loaded Notes。(+' + format(tmp.lo.gainMult3.mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1)) + '/s)'},
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
  unlocked(){return hasUpgrade('lo',35) || player.lo.evolution.gte(1)}
},
   "判定维度": {
        content: [ ["infobox","introBox5"],
          "main-display",
    ["display-text",
	   function() {
		   if(player.j.pdqja.gt(479))return '完成J层级的479ms判定区间挑战以解锁下一个判定类型：Perfect+';
		   return '完成J层级的???判定区间挑战以解锁下一个判定类型：S-Perfect';
	}],"blank",
	["display-text",
      function() {return 'loader3229的精力：' + formatWhole(player.lo.stamina) + '/2,000'}],
    ["display-text",
	   function() {return 'loader3229现在' + (player.lo.play?'正':'不') + '在打歌。'
	}],"blank",
	["row",
	[["column",[
	["display-text","判定类型"],
	["display-text",function(){if(player.j.pdqja.lte(-1))return 'S-Perfect+';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(-1))return 'S-Perfect';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479))return 'Perfect+';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return 'Perfect';return '';}],
	]],
	["column",[
	["display-text","|"],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return '|';return '';}],
	]],
	["column",[
	["display-text","打出次数"],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479))return formatWhole(player.lo.jdim1.floor())+'(+'+format(layers.lo.jdimMult(1).mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1))+'/s)';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return formatWhole(player.lo.perfect.floor())+'(+'+format(n(1).sub(buyableEffect('lo',12)).mul(tmp.lo.gainMult2).mul(hasUpgrade('lo',64)?upgradeEffect('lo',64):1).mul(hasUpgrade('lo',26)?15:1))+'/s)';return '';}],
	]],["blank"],
	["column",[
	["display-text","|"],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return '|';return '';}],
	]],
	["column",[
	["display-text","加成"],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(-1))return '|';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(479))return '为Perfect及以下判定和Milthm维度2提供×' + formatWhole(player.lo.jdim1.floor().add(1)) + '加成';return '';}],
	["display-text",function(){if(player.j.pdqja.lte(501))return '为Milthm维度1提供×' + formatWhole(player.lo.perfect.floor().add(1)) + '加成';return '';}],
	]]],
	],/*
    ["display-text",
	   function() {
		   if(player.j.pdqja.lte(479))return 'loader3229打出了' + formatWhole(player.lo.jdim1.floor()) + '次Perfect+判定，为Perfect及以下判定和Milthm维度2提供×' + formatWhole(player.lo.jdim1.floor().add(1)) + '加成';
		   return '';
	}],
    ["display-text",
	   function() {
		   if(player.j.pdqja.lte(501))return 'loader3229打出了' + formatWhole(player.lo.perfect.floor()) + '次Perfect判定，为Milthm维度1提供×' + formatWhole(player.lo.perfect.floor().add(1)) + '加成';
		   return '';
	}],*/
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
                cost: new Decimal(8),
    unlocked() { return player.p.unlocked},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    25:{ 
		description: "如果你的PTT小于loader3229的PTT，loader3229可以让你的PTT变为他的PTT。",
                cost: new Decimal(11),
    unlocked() { return player.p.unlocked},
			},
    31:{ 
                description: "最高连击数增加Cytus力量获取",
                cost: new Decimal(15),
    unlocked() { return player.c.unlocked()},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    32:{ 
                description: "第一个loader3229可购买项对Phidata也有效",
                cost: new Decimal(28),
    unlocked() { return player.ch.unlocked()},
			},
    33:{ 
                description: "第一个loader3229可购买项对Cytus力量也有效",
                cost: new Decimal(32),
    unlocked() { return player.ch.unlocked()},
			},
    34:{ 
                description: "最高连击数增加Cyten获取",
                cost: new Decimal(23),
    unlocked() { return player.c.unlocked()},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    35:{ 
                description: "解锁loader3229的制谱功能",
                cost: new Decimal(22),
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
                cost: new Decimal(21),
    unlocked() { return player.ch.unlocked()},
                effect() {
             return layers.ch.note().add(1)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    45:{ 
		description: "增加Phigros挑战“IN”和“AT”的上限",
                cost: new Decimal(22),
    unlocked() { return player.ch.unlocked()},
			},
    51:{ 
                description: "最高连击数增加判定和Loaded Notes获取，Loaded Notes效果1变为原来的平方",
                cost: new Decimal(24),
    unlocked() { return (hasUpgrade('lo', 35))},
                effect() {
             return player.lo.maxcombo.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    52:{ 
                description: "Loaded Points对Loaded Notes的获取速度加成变得更好，Loaded Notes效果2变为原来的平方",
                cost: new Decimal(25),
    unlocked() { return (hasUpgrade('lo', 35))},
			},
			
    53:{ 
                description: "Cytus可购买项7的效果变得更好",
                cost: new Decimal(25),
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    54:{ 
                description: "Loaded Notes效果1变为原来的平方",
                cost: new Decimal(26),
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    55:{ 
                description: "Loaded Notes效果2变为原来的平方",
                cost: new Decimal(29),
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    61:{ 
                description: "解锁Loaded Notes可购买项",
                cost: new Decimal(30),
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    62:{ 
		description: "如果你的RKS小于loader3229的RKS，loader3229可以让你的RKS变为他的RKS。",
                cost: new Decimal(31),
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    63:{ 
		description: "增加Phigros挑战“IN”、“AT”和“SP”的上限",
                cost: new Decimal(31),
    unlocked() { return (hasUpgrade('lo', 35))},
			},
    64:{ 
		description: "Loaded Points增加loader3229层级的速度",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?29:32);
				},
    unlocked() { return (hasUpgrade('lo', 35))},
                effect() {
             return player.lo.points.add(1)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
			},
    65:{ 
		description: "让loader3229帮你打课题模式。loader3229将会使你的最高课题能量不再低于6。",
                cost: new Decimal(36),
    unlocked() { return (hasUpgrade('ch', 27))},
			},
    16:{ 
		description: "诗篇增加判定获取，并且解锁一个可购买项",
                cost: new Decimal(37),
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
					return new Decimal(player[this.layer].evolution.gte(1)?44:46);
				},
    unlocked() { return (hasChallenge('c', 14))},
			},
    66:{ 
                description: "让loader3229打他自己的自制谱并提升他的自制谱的质量。Loaded Note增加判定和Loaded Note获取",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?47:49);
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
					return new Decimal(player[this.layer].evolution.gte(1)?45:54);
				},
    unlocked() { return (hasMilestone('sp',3))},
			},
    72:{ 
		description: "解锁一个新的loader3229可购买项。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?46:53);
				},
    unlocked() { return (hasMilestone('sp',3))},
			},
    73:{ 
		description: "解锁一个新的loader3229可购买项。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?48:55);
				},
    unlocked() { return (hasMilestone('sp',3))},
			},
    74:{ 
		description: "loader3229会为你自动增加蛇的长度。",
                cost: new Decimal(56),
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
                cost: new Decimal(61),
    unlocked() { return (hasUpgrade('sp',17))},
			},
    76:{ 
		description: "Lanota曲包获取量翻倍",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?58:65);
				},
    unlocked() { return (hasUpgrade('sp',17))},
			},
    81:{ 
		description: "loader3229会为你自动增加龙的长度。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?57:67);
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
					return new Decimal(player[this.layer].evolution.gte(1)?62:70);
				},
    unlocked() { return (hasUpgrade('sp',25))},
			},
    83:{ 
                description: "Loaded Notes效果1变为原来的2.5次方",
                cost: new Decimal(74),
    unlocked() { return (hasMilestone('r', 0))},
			},
    84:{ 
                description: "Loaded Notes效果2变为原来的6.25次方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?78:86);
				},
    unlocked() { return (hasMilestone('r', 0))},
			},
    85:{ 
                description: "Loaded Notes效果1变为原来的2.5次方",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?79:88);
				},
    unlocked() { return (hasMilestone('r', 0))},
			},
    86:{ 
                description: "解锁一个新的loader3229可购买项。",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?63:90);
				},
    unlocked() { return (hasMilestone('r', 0))},
			},
    91:{ 
		description: "Loaded Points提升Milthm获取",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?83:93);
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
					return new Decimal(player[this.layer].evolution.gte(1)?84:95);
				},
    unlocked() { return (hasUpgrade('r',37))},
			},
    93:{ 
		description: "本层级自动增加蛇/龙长度的升级的效果变为500倍",
                cost(){
					return new Decimal(player[this.layer].evolution.gte(1)?87:99);
				},
    unlocked() { return (hasUpgrade('r',37))},
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
                cost: new Decimal(27),
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    96:{ 
		description: "loader3229不仅想去除软上限，还想去除硬上限！去除Arcaea升级“Abstruse Dilemma”的硬上限。",
                cost: new Decimal(77),
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    101:{ 
		description: "增加Rotaeno挑战RC1的上限，并再次增加Phigros挑战“EZ”、“HD”的上限",
                cost: new Decimal(83),
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    102:{ 
		description: "解锁判定维度",
                cost: new Decimal(88),
    unlocked() { return (player.lo.evolution.gte(1))},
			},
    103:{ 
		description: "增加Rotaeno挑战RC1的上限，Rotaeno挑战RC1的效果也对Perfect+判定的获取生效",
                cost: new Decimal(89),
    unlocked() { return (player.j.pdqja.lte(479))},
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
    },
    12: {
      title() {return "让loader3229开始进化"},
      display() {return "需要"+formatWhole(player[this.layer].evolution.add(101))+" Loaded Points"},
      canClick() {return player.lo.points.gte(player[this.layer].evolution.add(101))},
      onClick() {
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
				layerDataReset('r',['milestones']);
				layerDataReset('mi',['milestones']);
				player.points=new Decimal(0);
				player.lo.evolution = player.lo.evolution.add(1);
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
				return "自动购买第一行loader3229可购买项且不消耗判定，第一行loader3229可购买基于Perfect判定而不是Great/Miss判定，Loaded Notes获取变为10倍，Perfect判定数量加成Milthm维度1";
			},
        },
	],
    buyables: {
    11: {
        cost(){return Decimal.pow(2,getBuyableAmount(this.layer,this.id))},
        display() { return "基于购买次数增加Note乘数<br>价格："+format(this.cost())+" Perfect<br>效果：×"+format(this.effect())},
        title: "技巧帮助",
        effect() {return Decimal.pow(new Decimal(3).add(hasAchievement('A',23)?player.A.ach:0),getBuyableAmount(this.layer,this.id).add(hasUpgrade('lo',21)?upgradeEffect('lo',21):0))},
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
        effect() {return Decimal.pow(0.996,getBuyableAmount(this.layer,this.id).add(hasUpgrade('lo',21)?upgradeEffect('lo',21):0)).mul(0.2)},
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
        effect() {return Decimal.pow(player[this.layer].evolution.gte(1)?0.984:0.98,getBuyableAmount(this.layer,this.id).add(hasUpgrade('lo',21)?upgradeEffect('lo',21):0)).mul(0.1)},
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
        effect() {return Decimal.pow(1e20,getBuyableAmount(this.layer,this.id)).pow(hasUpgrade('lo',36)?5:1)},
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
},


    update(diff) {
		if(hasUpgrade('lo',64))diff=upgradeEffect('lo',64).mul(diff).toNumber();
		if(hasUpgrade('lo',26))diff*=15;
		if(player.lo.play){
			var f=player.lo.stamina.min(diff);
			
			if(hasUpgrade('lo',102)){
				if(player.j.pdqja.lte(479)){
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
			player.lo.stamina=player.lo.stamina.sub(diff);
			if(player.lo.stamina.lte(0))player.lo.play=false;
			player.lo.stamina=player.lo.stamina.max(0);
			if(hasUpgrade('lo',12)){
				var c=player.points.add(1e10).log10().log10().pow(0.5).mul(player.lo.points.add(10).log10().pow(0.5)).div(Decimal.pow(0.1,new Decimal(1).sub(player.lo.stamina.div(2000))).mul(Decimal.pow(this.buyables[13].effect(),player.lo.stamina.div(2000))));
				
				var d=new Decimal(tmp.ch.note || 1).div(4).max(player.lo.evolution.gte(1)?80:800);

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
			if(hasUpgrade('lo',35)){
				player.lo.note=player.lo.note.add(tmp.lo.gainMult3.mul(diff)).min(5e23);
			}
			if(hasUpgrade('lo',74)){
				player.a.sn=player.a.sn.add(this.upgrades[74].effect().mul(diff)).min(3e15);
			}
			if(hasUpgrade('lo',81)){
				player.a.dr=player.a.dr.add(this.upgrades[81].effect().mul(diff)).min(6e9);
			}
		}
		if(hasUpgrade('lo',25))player.a.ptt=player.a.ptt.max(tmp.lo.ptt);
		if(hasUpgrade('lo',62))player.p.rks=player.p.rks.max(tmp.lo.rks);
		if(hasUpgrade('lo',65))player.ch.en=player.ch.en.max(6);
		if(hasUpgrade('lo',42)&&player.p.activeChallenge==11)player.p.challenges[11]=new Decimal(player.p.challenges[11]).max(player.a.points.add(1).log10().div(4).sub(1).floor()).min(layers.p.challenges[11].completionLimit()).toNumber();
		if(hasUpgrade('lo',42)&&player.p.activeChallenge==12)player.p.challenges[12]=new Decimal(player.p.challenges[12]).max(player.points.add(1).log10().div(20).add(0.5).floor()).min(layers.p.challenges[12].completionLimit()).toNumber();
		if(player.lo.evolution.gte(1)){
			player.lo.buyables[11]=player.lo.buyables[11].max(player.lo.perfect.max(1).log2().floor().add(1));
			player.lo.buyables[12]=player.lo.buyables[12].max(player.lo.perfect.max(1).log2().floor().add(1));
			player.lo.buyables[13]=player.lo.buyables[13].max(player.lo.perfect.max(1).log2().floor().add(1));
		}
	},
})//Loader3229
