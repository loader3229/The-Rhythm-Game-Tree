//Other Rows
addLayer("A", {
  infoboxes: {
 introBox: {
  title: "成就",
  body(){return "成就页面可以帮助你查看当前的进度！标🏆的成就还有奖励哦！注：隐藏成就不会计入累计成就数量，也不会影响游戏发展，但是可以作为一个挑战目标，建议在现版本通关以后再做隐藏成就"},
        },
},
  name:"Achievements",
  symbol:"🏆",
    startData() { return {
        unlocked: true,
        ach: n(0),
    }},
     color: "#ffe125",
    resource: "成就", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    update(diff) {
		player.A.ach=new Decimal(player.A.achievements.filter(function(a){return a<666;}).length);
     player._devSpeed=layers.A.devSpeedCal()
     if(player._devSpeed.neq(0)) {
     if(player.r.rot.lt(0)) {
      confirm("你触发了一个bug！Rot点数现在是负数了！这大概是因为你点升级树点得太快了！将强制重置Rot升级树")
      layers.r.clickables['11'].onClick()
}
player.QqQ=0;player.banana=0;player.Liu=0;player.fufu=0;player.Loader=0;player.yszqzls=0;player.yyyxs=0;player.Genshin=0;player.Phigros=0;player.long2024=0;player.QqQe308=0;//过去的彩蛋变量，现在留着太占存档空间了，修改一下
     if(hasAchievement('A',1003)) {
		QqQ="QqQe308";
		banana="3.8642180e38642180";
		Liu="6.666666666666666666666666e308";
		fufu=['cutefu~','c','u','t','e','f','u','~'];
		yszqzls="催更PEIT，元素周期增量树，@Bana3864[]，@Liu e308" 
		yyyxs="音乐游戏树，鱼鱼永相随，游泳一小时，原原原x神" 
		Genshin="启动！" 
		Phigros="2月2号，音乐游戏树和Phigros一起更新"
		long2024="龙年马上要到了！祝大家新年龙腾虎跃，龙飞凤舞，龙批一个，事业有成，学业顺利，身体健康，财源滚滚，音游全AP，考试全满分，工作全加薪，玩树全通关，再次献上音乐游戏树全体作者（共1人）的真挚祝福！！！！！！！！！！"
		QqQe308="我是QqQe308，v我50更新音乐游戏树" 
	}
}
	},
	   devSpeedCal() {//我也不知道为什么放这里
	    let dev=n(1)
	    if(inChallenge('r',12)&&gcs('r',12)!==1) return n(0)
	    if(gcs('t',21)==1) return n(0)
	    if(inChallenge('r',14)) return n(1)
	    return dev
	   },
    achievementPopups: true,
    achievements: {
        11: {
     name: "音游之始",
     done() {return player.s.points.gte(1)}, 
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得你的第一首歌曲！", 
     textStyle: {'color': '#ABCDEF'},
        },
        12: {
     name: "进展很快",
     done() {return player.points.gte(1.79e308)}, 
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得1.79e308Notes！", 
     textStyle: {'color': '#ABABAB'},
        },
        13: {
     name: "制作音游<br>🏆",
     done() {return player.a.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个源点！<br>奖励：Note*成就数量",
     textStyle: {'color': '#DDBBDD'},
        },
        14: {
     name: "进展快吗",
     done() {return player.points.gte('1e400')},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到1e400Notes！",
     textStyle: {'color': '#DDAAAA'},
        },
        15: {
     name: "进入挑战",
     done() {return hasUpgrade('a',15)},
    onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "解锁Arcaea挑战！",
     textStyle: {'color': '#DDCCCC'},
        },
        18: {
            name: "共同进步",
            done() {return player.lo.points.gte(1)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "解锁这个mod的开发者，loader3229，并且获取1个Loaded Point",
            textStyle: {'color': '#FFFFFF'},
        },
        21: {
     name: "音游之盛<br>🏆",
     done() {return player.s.points.gte(1e15)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到1e15歌曲！<br>奖励：源点获取*2",
     textStyle: {'color': '#ABBBBB'},
        },
        22: {
     name: "韵律源点<br>🏆",
     done() {return player.a.points.gte(1e10)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到1e10源点！<br>奖励：歌曲基本指数+0.00616",
     textStyle: {'color': '#DD66AA'},
        },
        23: {
     name: "调律诗篇<br>🏆",
     done() {return player.l.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个诗篇<br>奖励：第一个loader3229的可购买项基于成就数量变得更好",
     textStyle: {'color': '#44DDDD'},
        },
        24: {
     name: "一古戈尔",
     done() {return player.s.points.gte(1e100)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得1e100(1 Googol)歌曲",
     textStyle: {'color': '#5244ff'},
        },
        25: {
     name: "有必要吗",
     done() {return player.a.ptt.gte(2.886499075)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得2.886499075PTT",
     textStyle: {'color': '#ff5eee'},
        },
        28: {
            name: "音游萌新",
            done() {return player.lo.points.gte(5)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获取5个Loaded Points",
            textStyle: {'color': '#FFFFFF'},
        },
        31: {
     name: "下一进展<br>🏆",
     done() {return player.p.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个Phidata！<br>奖励：解锁剧情",
     textStyle: {'color': '#CC11AA'},
     
        },
        32: {
     name: "再次挑战",
     done() {return hasUpgrade('p',13)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "解锁Phigros挑战！",
     textStyle: {'color': '#CCBBAA'},
     
        },
        33: {
     name: "遗忘的层<br>🏆",
     done() {return player.l.points.gte(8)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得8个诗篇！<br>奖励：被动获得100%Phidata每秒",
     textStyle: {'color': '#98f8f2'},
     
        },
        34: {
     name: "从未遗忘<br>🏆",
     done() {return player.l.points.gte(15)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得15个诗篇！<br>奖励：解锁更多Phidata升级",
     textStyle: {'color': '#BBCCDD'},
     
        },
        35: {
     name: "DABCABCD<br>ABCADBAA<br>BABCABCD<br>BAAADBAB",
     done() {return hasUpgrade('a',32)},
    onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "购买升级“Cyaegha”<br>梗来源：人声部分的空耳",
     textStyle: {'color': '#DABCABCD'},
     
        },
        38: {
            name: "正在进步",
            done() {return player.lo.points.gte(10)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获取10个Loaded Points",
            textStyle: {'color': '#FFFFFF'},
        },
        41: {
     name: "困难魔王<br>🏆",
     done() {return hasUpgrade('p',27)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "解锁第五个层级：魔王曲<br>奖励：Phidata^1.01",
     textStyle: {'color': '#55BB11'},
     
        },
        42: {
     name: "人如其名",
     done() {return hasUpgrade('a',35)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "购买升级“#1f1e33”",
     textStyle: {'color': '#1f1e33'},
     
        },
        43: {
     name: "韵律源神<br>🏆",
     done() {return player.a.points.gte(1e100)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到1e100源点！<br>奖励：歌曲、源点和Phidata*成就数量",
     textStyle: {'color': '#e381caf7'},
        },
        44: {
     name: "韵律源神<br>II",
     onComplete(){player.A.ach=player.A.ach.add(1)},
     done() {return player.a.points.gte(1e175)},
     tooltip: "达到1e175源点！",
     textStyle: {'color': '#e989d1e7'},
        },
        45: {
     name: "韵律源神<br>III",
     onComplete(){player.A.ach=player.A.ach.add(1)},
     done() {return player.a.points.gte(1e240)},
     tooltip: "达到1e240源点！<br>你无不无聊……",
     textStyle: {'color': '#d47ac9d6'},
        },
        48: {
            name: "终于全连了",
            done() {return player.lo.maxcombo.gte(44)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "使loader3229的最高连击数达到44。PS：Arcaea里面物量最低的谱面（dropdead PAST 1）的物量是44",
            textStyle: {'color': '#FFFFFF'},
        },
        51: {
     name: "创新纪元",
     onComplete(){player.A.ach=player.A.ach.add(1)},
     done() {return player.c.points.gt(0)},
     tooltip: "获得一个Cyten（第四行重置资源）！",
     textStyle: {'color': '#a3a3a3'},
        },
        52: {
     name: "韵律能源",
     onComplete(){player.A.ach=player.A.ach.add(1)},
     done() {return player.c.power.gte(100000)},
     tooltip: "得到100000个Cytus力量！",
     textStyle: {'color': '#666666'},
        },
        53: {
     name: "红框大神<br>🏆",
     done() {return player.a.ptt.gte(11)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得11PTT<br>奖励：基于PTT增益RKS上限<br>在游戏Arcaea中，PTT达到11时外框会变成红色",
     textStyle: {'color': '#ff5eee'},
        },
        54: {
     name: "混沌之初",
     done() {return hasChallenge('c',11)
     },
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "完成一个Cytus挑战",
     textStyle: {'color': '#362f29'},
        },
        55: {
     name: "追光之梦",
     done() {return hasUpgrade('a',43)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得升级“Aegleseeker”",
     textStyle: {'color': '#ec38eee5'},
        },
        58: {
            name: "再次进步",
            done() {return player.lo.points.gte(15)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获取15个Loaded Points",
            textStyle: {'color': '#FFFFFF'},
        },
        61: {
     name: "Chart Designer",
     done() {return player.ch.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个谱面（第七层级）",
     textStyle: {'color': '#ffe000'},
        },
        62: {
     name: "混沌之间",
     done() {return hasChallenge('c',12)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "完成第二个Cytus挑战",
     textStyle: {'color': '#404040'},
        },
        63: {
     name: "韵律源神<br>IV",
     onComplete(){player.A.ach=player.A.ach.add(1)},
     done() {return player.a.points.gte('1e1500')},
     tooltip: "达到1e1500源点！",
     textStyle: {'color': '#fa89f1e9'},
        },
       64: {
     name: "Not A Note",
     onComplete(){player.A.ach=player.A.ach.add(1)},
     done() {return player.points.gte('1e210000')},
     tooltip: "达到1e210000 Notes！<br>真的有一个音游叫NotaNote哦！可以支持一下！",
     textStyle: {'color': '#e9a7a7e9'},
        },
       65: {
     name: "混沌之终",
     done() {return hasChallenge('c',14)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "完成第四个Cytus挑战",
     textStyle: {'color': '#2d2d2d'},
        },
        68: {
            name: "自制谱师",
            done() {return hasUpgrade('lo',35)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "解锁loader3229的制谱功能",
            textStyle: {'color': '#FFFFFF'},
        },
       71: {
     name: "异曲同工<br>🏆",
     done() {return hasMilestone('sp',0)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个曲包（第八层重置资源）<br>奖励：歌曲获得指数+0.01（所有效果后）",
     textStyle: {'color': '#6090ff'},
        },
       72: {
     name: "如此课题",
     done() {return player.p.rks.gte(7)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到7RKS！",
     textStyle: {'color': '#ff6d3e'},
        },
       73: {
     name: "歌曲之峰",
     done() {return player.s.points.gte('1e41888')},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得1e41888歌曲！",
     textStyle: {'color': '#7398ed'},
        },
       74: {
     name: "技惊四座<br>🏆",
     done() {return tmp.ch.enp.gte(10000)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得10000课题力量每秒！<br>奖励：解锁第二个蛇的效果",
     textStyle: {'color': '#ffc14d'},
        },
       75: {
     name: "蛇如飞龙",
     done() {return player.a.sn.gte(1e5)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "让蛇的长度超过100000物量！",
     textStyle: {'color': '#e630dc'},
        },
        78: {
            name: "暂时不用担心断触了！",
            done() {return buyableEffect('lo',13).lt(0.01)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "使loader3229的设备断触率小于1%",
            textStyle: {'color': '#FFFFFF'},
        },
       81: {
     name: "无尽之雨❌<br>无尽之树✅",
     done() {return player.r.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个旋律（第九层Rotaeno重置资源）",
     textStyle: {'color': '#00ddff'},
        },
       82: {
     name: "您AP了",
     done() {return player.points.gte("1e1000000")},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     textStyle: {'color': '#776bc4'},
     tooltip: "达到1e1000000（ee6）Notes！",
        },
       83: {
     name: "千篇一律",
     done() {return player.r.points.gte(1000)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得1000个旋律！",
     textStyle: {'color': '#0df0df'},
        },
       84: {
     name: "旋转古神<br>🏆",
     done() {return layers.r.inChal()},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "进入一个Rotaeno挑战！<br>奖励：提升Rot升级43的效果<br>梗来源：在B站视频BV1rG411Y7ju结尾，“旋转音律”酷似“旋转古神”，让人忍俊不禁。",
     textStyle: {'color': '#4cc4cc'},
        },
       85: {
     name: "支线三呢",
     done() {return hasUpgrade('sp',36)&&hasUpgrade('sp',37)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得Phigros曲包升级“支线一-忘忧宫”和“支线二-弭刻日”",
     textStyle: {'color': '#ffaa1d'},
       },
        88: {
            name: "终于全连断手器EX了！",
            done() {return player.lo.maxcombo.gte(933)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "使loader3229的最高连击数达到933。PS：“断手器”指BanG Dream!里面的ハッピーシンセサイザ EX，里面只有tap和flick，物量为933。loader3229真的全连过断手器EX！ ",
            textStyle: {'color': '#FFFFFF'},
		},
       91: {
     name: "我是雨丝",
     done() {return player.mi.unlocked()},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip:"解锁第十层，Milthm",
     textStyle: {'color': '#bcf2ff'},
        },
       92: {
        name: "进展真快",
        done() {return player.c.points.gte("1.8e308")},
        onComplete(){player.A.ach=player.A.ach.add(1)},
        tooltip:"获得1.8e308 Cyten",
        textStyle: {'color': '#18e308'},//很奇怪的颜色啊
       },
       93: {
        name: "AD之怒",
        done() {return hasMilestone('mi',6)},
        onComplete(){player.A.ach=player.A.ach.add(1)},
        tooltip:"解锁Milthm维度9<br>成就名称原因：AD，即反物质维度，游戏中只有八个维度，并且多次以第九个维度为“不应该存在的”",
        textStyle: {'color': '#ff999999'},
       },
       94: {
        name: "无尽之雨 II",
        done() {return inChallenge('r',13)},
        onComplete(){player.A.ach=player.A.ach.add(1)},
        tooltip:"进入第三个Rotaeno挑战",
        textStyle: {'color': '#64b3f6b3'},
       },
       95: {
        name: "升级大师",
        done() {return gcs('r',101)==1&&gcs('r',102)==1&&gcs('r',103)==1},
        onComplete(){player.A.ach=player.A.ach.add(1)},
        tooltip:"同时获得Rot升级101、102、103",
        textStyle: {'color': '#a9c3e7c4'},
       },
        98: {
            name: "我进化了！",
            done() {return player.lo.evolution.gte(1)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "让loader3229开始进化！",
            textStyle: {'color': '#FFFFFF'},
		},
  101: {
   name: "宽判与严判",
   done() {return player.j.unlocked()},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"解锁第11层，判定<br>Judgment和Judgement有什么区别啊…",
   textStyle: {'color': '#e786f0'},
   },
  102: {
   name: "缓慢的进展",
   done() {return player.j.pdqja.lte(470)},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"通过470ms判定区间挑战",
   textStyle: {'color': '#e948c3'},
   },
  103: {
   name: "专业曲包家",
   done() {return gba('sp',15).gte(1)},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"获得一个Rotaeno曲包",
   textStyle: {'color': '#53c6fa'},
   },
  104: {
   name: "痛苦的进展",
   done() {return player.j.pdqja.lte(445)},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"通过445ms判定区间挑战",
   textStyle: {'color': '#b20f8c'},
   },
  105: {
   name: "真升级大师",
   done() {return gcs('r',51)==1&&gcs('r',52)==1&&gcs('r',53)==1&&gcs('r',101)==1&&gcs('r',102)==1&&gcs('r',103)==1&&gcs('r',111)==1&&gcs('r',112)==1&&gcs('r',151)==1&&gcs('r',152)==1&&gcs('r',153)==1},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"同时获得所有（前17行）Rot升级<br>奖励：解锁最后一个Rot升级",
   textStyle: {'color': '#054fb0'},
   },
        108: {
            name: "再次进化！",
            done() {return player.lo.evolution.gte(2)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "让loader3229再次开始进化！",
            textStyle: {'color': '#FFFFFF'},
		},
  111: {
   name: "绿豆的诡计<br>🏆",
   done() {return hasUpgrade('j',31)},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"解锁第12个层级，Rizline<br>奖励：永久解锁并显示所有层级<br>名称原因：律动轨迹（Rizline）的谐音",
   textStyle: {'color': '#57ee00'},
   },
  112: {
   name: "可能的联动",
   done() {return gba('ri',11).gt(0)},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"和Phigros联动一次",
   textStyle: {'color': '#30f80e'},
   },
  113: {
   name: "沉默-_-微笑",
   done() {return player.p.rks.gte(18.5)},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"让RKS超过18.5？！？！<br>沉默微笑魅力时刻，笑点解析忍俊不禁",
   textStyle: {'color': '#185185'},
   },
  114: {
   name: "真课题模式",
   done() {return player.j.pdqj0.lte(40)&&gcs('j',11)==1},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"进入40ms或更严的判定区间挑战<br>好好想一想，怎么做到呢",
   textStyle: {'color': '#c9364b'},
   },
  115: {
   name: "频繁的联动",
   done() {return gba('ri',11).add(gba('ri',12).add(gba('ri',13))).gte(15)},
   onComplete(){player.A.ach=player.A.ach.add(1)},
   tooltip:"与其他音游联动15次及以上！",
   textStyle: {'color': '#3b4f7c'},
   },
       
        118: {
            name: "loader3229 居然全连了 Testify？",
            done() {return player.lo.maxcombo.gte(2221)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "使loader3229的最高连击数达到2221。PS：Testify是Arcaea的魔王曲，其Beyond难度物量为2221。 ",
            textStyle: {'color': '#FFFFFF'},
		},
       1001: {
     name: "隐藏成就1",
     done() {return player.t.points.gte(100)},
     tooltip() {
      if(hasAchievement('A',1001)) return "QqQe308~，真的是杂鱼~捏，炸档了那么多次~<br>获得100个测试<br>奖励：提升测试升级的效果，解锁一个测试可点击"
      else return "QqQe308~，真的是杂鱼~捏，炸档了那么多次~"
     },
style() { return { 'background-color': hasAchievement('A',1001)?"#308308":"#ff4848"}},
        },
       1002: {
     name: "隐藏成就2",
     done() {return QqQ!=="QqQe308"
     },
     tooltip() {
      if(hasAchievement('A',1002)) return "呜哇！我的QqQe308没了！<br>修改变量QqQ的值<br>奖励：解锁另一个彩蛋变量“QqQe308”"
      else return "呜哇！我的QqQe308没了！（提示：你需要找到彩蛋并且修改一个变量）"
     },
style() { return { 'background-color': hasAchievement('A',1002)?"#308308":"#ff4848"}},
        },
       1003: {
     name: "隐藏成就3",
     done() {
  return QqQ!=="QqQe308"&&banana!=="3.8642180e38642180"&&Liu!=="6.666666666666666666666666e308"&&fufu!==['cutefu~','c','u','t','e','f','u','~']&&Loader!=="loader3229现在正在做他的第168个BanG Dream! 自制谱，看一下吧！"&&
 yszqzls!=="催更PEIT，元素周期增量树，@Bana3864[]，@Liu e308" &&
 yyyxs!=="音乐游戏树，鱼鱼永相随，游泳一小时，原原原x神" &&
 Genshin!=="启动！" &&
 Phigros!=="2月2号，音乐游戏树和Phigros一起更新"&&
 long2024!=="龙年马上要到了！祝大家新年龙腾虎跃，龙飞凤舞，龙批一个，事业有成，学业顺利，身体健康，财源滚滚，音游全AP，考试全满分，工作全加薪，玩树全通关，再次献上音乐游戏树全体作者（共1人）的真挚祝福！！！！！！！！！！"&&
 QqQe308!=="我是QqQe308，v我50更新音乐游戏树"},
     tooltip() {
      if(hasAchievement('A',1003)) return "你和作者一样闲得慌。。。<br>修改所有彩蛋变量的值<br>奖励：所有彩蛋变量不再能被修改，除Loader"
      else return "你和作者一样闲得慌。。。（提示：上一个成就的超级加强版）"
     },
style() { return { 'background-color': hasAchievement('A',1003)?"#308308":"#ff4848"}},
        },
       1004: {
     name: "隐藏成就4",
     done() {return inChallenge('a',11)&&inChallenge('p',11)&&inChallenge('c',11)&&inChallenge('r',11)},
     tooltip() {
      if(hasAchievement('A',1004)) return "Cccchhhhaaaalllllllleeeennnnggggeeeessss No.1!!!!<br>同时进入4个层级的第一个挑战<br>奖励：解锁某一个层级的挑战"
      else return "Cccchhhhaaaalllllllleeeennnnggggeeeessss No.1!!!!"
     },
style() { return { 'background-color': hasAchievement('A',1004)?"#308308":"#ff4848"}},
        },
       1005: {
     name: "隐藏成就5",
     done() {return player.ch.dif1.add(player.ch.dif2).add(player.ch.dif3).eq(3)&&player.ch.sco.eq(3000000)},
     tooltip() {
      if(hasAchievement('A',1005)) return "耐心挑战<br>在谱面的课题模式中，把三个歌曲的定数调到1级并且取得3000000分<br>奖励：解锁某一个层级的可购买"
      else return "耐心挑战（提示：Phigros课题模式）"
     },
style() { return { 'background-color': hasAchievement('A',1005)?"#308308":"#ff4848"}},
        },
       1008: {
            name: "隐藏成就L1",
            done() {return (Loader+"")==('Kasumi Toyama')||(Loader+"")==('Toyama Kasumi')||(Loader+"")==('户山香澄')||(Loader+"")==('戸山香澄')||(Loader+"")==('戸山　香澄');},
            tooltip() {
             if(hasAchievement('A',1008)) return "loader3229最喜欢户山香澄了！看一下 https://loader3229.github.io/ksm 吧<br>奖励：可以在T层级禁用一个loader3229升级"
			else return "将loader3229最喜欢的音游角色的名字赋值给变量player.Loader"
            },
style() { return { 'background-color': hasAchievement('A',1008)?"#308308":"#ff4848"}},
        },
       1011: {
     name: "隐藏成就6",
     done() {return hasUpgrade('t',11)&&n(challengeCompletions('t',11)).gte(10)&&n(gba('t',11)).gte(250)},
     tooltip() {
      if(hasAchievement('A',1011)) return "TestGameMaster<br>获得测试升级11，完成测试挑战10次，并且购买测试可购买250次<br>奖励：获得测试里程碑"
      else return "TestGameMaster"
     },
style() { return { 'background-color': hasAchievement('A',1011)?"#308308":"#ff4848"}},
        },
       1012: {
     name: "2024愚人节成就",
     done() {return false},
     tooltip:"嘘…这可是个秘密哦，只有玩过2024愚人节版本（⓪.⑶❺版本）才能获得这个成就哦！",
     style() { return { 'background-color': hasAchievement('A',1012)?"#308308":"#ff4848"}},
        },
    },
    tabFormat: {
   "Achievements": {
        content: [ ["infobox","introBox"],
    ["display-text",
      function() {return '你有 ' + player.A.ach + ' 成就!'},
     {"color": "#ffe125", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
    "achievements",
],
  unlocked(){return true},
},
},
},
)//Achievements
addLayer("t", {
  infoboxes: {
 introBox: {
  title: "测试层级",
  body(){return "如果你存档出了问题（比如Note无止尽的增长），请重置本层级！（本层级保留所有层级的升级、挑战、可购买等，只会重置Note和每层的资源）<br>目前版本无炸档bug，故此层级什么也不重置，作为测试层级使用"},
        },
},
    name: "test",
    symbol: "T",
    position: 0,
    startData() { return {
        unlocked() { return true},
		points: n(0),
    }},
     color: "#ffffff",
    requires: n(0), 
    resource: "测试",
    baseResource: "Notes", 
    baseAmount() {return player.points}, 
    type: "static", 
    exponent: 1, 
    effect(){
      return {Notes: 1}
    },
    effectDescription() { 
    },
    gainMult() { 
        mult = n(1)
        return mult
    },
    gainExp() { 
      exp= n(0.5)
       return exp
    },
    directMult() { 
        mult = n(1)
        return mult
    },
    row: 6, 
    hotkeys: [
        {key: "t", description: "T: Reset for tests", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return true},
    resetsNothing() {return true},
    upgrades: {
    11:{ title: "测试",
      description: "提升Notes获取量（假的）",
       cost(){
        cost= n("1.8e308")
        cost=cost.div(buyableEffect('t',11))
        return cost
       },
      effect() {
       eff = n(1)
        if(hasAchievement('A',1001)) eff=n("1.80e308")
       eff=eff.pow(challengeEffect('t',11))
       return eff
      },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "手机版Qol",
      description: "获得隐藏成就2、3",
     cost:n(1000),
     onPurchase() {
QqQ="a";banana="b";Liu="c";fufu=['d'];Loader="e";yszqzls="f";yyyxs="g";Genshin="h";Phigros="i";long2024="j";QqQe308="k"
     },
    },
    },
    milestones: {
    0: {
        requirementDescription: "测试里程碑",
        effectDescription() {
  if(hasAchievement('A',1011)) return "需要1.80e308测试或完成隐藏成就6"
  else return "需要1.80e308测试"
        },
        done() { return player.t.points.gte(1.80e308)||hasAchievement('A',1011) }
    },
      
    },
    challenges: {
      11: {
        name: "测试",
        challengeDescription(){
   return "Notes获取量^1<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/10"},
        goalDescription(){return n(10).add(n(challengeCompletions(this.layer,this.id)).mul(0))+" Notes"},
        rewardDescription(){return "增加测试升级的效果<br>效果：^"+format(challengeEffect(this.layer,this.id))},
        rewardEffect() {eff=n(challengeCompletions(this.layer,this.id)).pow(114514)
   return eff
        },
        unlocked(){return hasAchievement('A',1004)},
        completionLimit(){
   return n(10)},
        canComplete: function() {
   return player.points.gte(n(10).add(n(0).mul(n(challengeCompletions(this.layer,this.id)))))},
        },
       },
    buyables:{ 
    11: {
				title: "测试",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.0001, x.mul(1.0001).pow(1.0001))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {eff=n(2).pow(x.pow(1.255))
				  return eff
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " 测试")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"/250<br>测试升级1的价格÷" + format(data.effect))
         },
      unlocked() { return hasAchievement('A',1005)}, 
      canAfford() {
      return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
      purchaseLimit() {return n(250)},
       buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
     player[this.layer].points = player[this.layer].points.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(1.5).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
   },
    clickables:{       
    11: {
    title(){return "手机版Qol"},
    display: "按住以自动重置获得测试",
   canClick() {return true},
    onClick() { doReset('t') },
    onHold() { doReset('t') },
     unlocked(){return hasAchievement('A',1001)},
        },     
    18: {
    title(){if(gcs('t',18)==1)return "启用loader3229升级105：让loader3229再次帮你打课题模式";return "禁用loader3229升级105：让loader3229再次帮你打课题模式"},
    display(){if(gcs('t',18)==1)return "启用loader3229升级105：让loader3229再次帮你打课题模式";return "禁用loader3229升级105：让loader3229再次帮你打课题模式"},
   canClick() {return true},
    onClick() {
    if(gcs('t',18)==1) setClickableState('t',18,0)
    else setClickableState('t',18,1)
    },
     unlocked(){return hasAchievement('A',1008)},
        },
    21: {
    title(){return "暂停游戏"},
    display: "将游戏速度设定为0，再次点击重置",
    onClick() {
    if(gcs('t',21)==1) setClickableState('t',21,0)
    else setClickableState('t',21,1)
    },
    canClick() {return true},
    unlocked() {return true},
        },
    31: {
    title(){return "显示存档长度"},
    display() {
     let a="没有"
     if(gcs('t',31)==1) a="正在"
     return "现在"+a+"显示存档长度！"
    },
    onClick() {
    if(gcs('t',31)==1) setClickableState('t',31,0)
    else setClickableState('t',31,1)
    },
    canClick() {return true},
    unlocked() {return true},
        },
    41: {
    title(){return "强制切换Shift"},
    display() { let a="没有"
    if(player.shiftDown) a="正在"
    return "手机版Qol，目前"+a+"按下shift<br>冷知识：按下Shift再点击层级可以锁定显示层级资源（测试层级除外）！（需要开启设置相关功能）"},
    onClick() {
    player.shiftDown=!player.shiftDown
    },
    canClick() {return true},
    unlocked() {return true},
    style: {'height':'200px','width':'200px'},
        },
   },
})//Test
addLayer("S", {
  infoboxes: {
 introBox: {
  title: "统计层级",
  body(){return "本层级统计部分游戏内数据，会随着游戏进度增加"},
        },
 displayBox: {
  title: "统计层级",
  body(){return "此处你可以在游戏主界面和标题显示重要的游戏资源，会随着游戏进度增加"},
        },
},
    name: "Statistics",
    symbol: "St",
     color: "#ffffff",
    resource: "-", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("统计")
    },
    tabFormat: {
   "Statistics": {
       content: [ ["infobox","introBox"],
       ["display-text",
      function() {if(player.s.unlocked)
        {return '你有 ' + format(player.s.points) + ' 歌曲<br>歌曲基本获得量：' + format(tmp.s.gainMult) + '<br>歌曲获得指数：' + format(tmp.s.gainExp.mul(tmp.s.exponent)) + '<br>歌曲额外增益：' + format(tmp.s.directMult) }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//s
     "blank",
     "blank",
     ["display-text",
      function() {if(player.a.unlocked)
        {return '你有 ' + format(player.a.points) + ' 源点<br>源点基本获得量：' + format(tmp.a.gainMult) + '<br>源点获得指数：' + format(tmp.a.gainExp.mul(tmp.a.exponent)) }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//a
     ["display-text",
      function() {if(player.a.ptt.gt(0))
        {return '你有 ' + format(player.a.ptt) + ' PTT<br>PTT上限1：' + format(player.a.pttMax.mul(player.a.pttMax2)) + '<br>PTT上限2：' + format(player.a.pttMax) }},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"},],//ptt
     ["display-text",
      function() {if(hasUpgrade('sp',11)) return '当前蛇的长度：' +format(player.a.sn)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//sn
     ["display-text",
      function() {if(hasUpgrade('sp',11)) return '当前龙的长度：' +format(player.a.dr)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//dr
     "blank",
     "blank",
     ["display-text",
      function() {if(player.l.unlocked)
        {return '你有 ' + format(player.l.points) + ' 诗篇<br>诗篇基本获得量：' + format(tmp.l.gainMult) + '<br>诗篇获得指数：' + format(tmp.l.gainExp.mul(tmp.l.exponent)) + '<br>诗篇额外增益：' + format(tmp.l.directMult) }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//l
     "blank",
     "blank",
     ["display-text",
      function() { if(player.p.unlocked)
        {return '你有 ' + format(player.p.points) + ' Phidata<br>Phidata基本获得量：' + format(tmp.p.gainMult) + '<br>Phidata获得指数：' + format(tmp.p.gainExp.mul(tmp.p.exponent)) + '<br>Phidata额外增益：' + format(tmp.p.directMult) } },
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//p
      ["display-text",
      function() {if(player.p.rks.gt(0))
        {return '你有 ' + format(player.p.rks) + ' RKS<br>RKS上限1：' + format(player.p.rksMax.mul(player.p.rksMax2)) + '<br>RKS上限2：' + format(player.p.rksMax) }},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"},],//rks
     "blank",
     "blank",
     ["display-text",
      function() {if(player.m.unlocked)
        {return '你有 ' + format(player.m.points) + ' 魔王曲<br>魔王曲基本获得量：' + format(tmp.m.gainMult) + '<br>魔王曲获得指数：' + format(tmp.m.gainExp.mul(tmp.m.exponent)) + '<br>魔王曲额外增益：' + format(tmp.m.directMult)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//m
     "blank",
     "blank",
     ["display-text",
      function() {if(player.c.unlocked())
        {return '你有 ' + format(player.c.points) + ' Cyten<br>Cyten基本获得量：' + format(tmp.c.gainMult) + '<br>Cyten获得指数：' + format(tmp.c.gainExp.mul(tmp.c.exponent))+ '<br>Cyten额外增益：' + format(tmp.c.directMult)+"<br>当前Cytus力量："+format(player.c.power)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//c
     "blank",
     "blank",
     ["display-text",
      function() {if(player.ch.unlocked())
        {return '你有 ' + format(player.ch.points) + ' 谱面<br>谱面基本获得量：' + format(tmp.ch.gainMult) + '<br>谱面获得指数：' + format(tmp.ch.gainExp.mul(tmp.ch.exponent))+ '<br>谱面额外增益：' + format(tmp.ch.directMult)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//ch
    ["display-text",
      function() {if(hasMilestone('ch',1)) return '当前物量: ' + format(player.ch.note) + '<br>物量对应定数：'+format(player.ch.dif)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//note&dif
    ["display-text",
      function() {if(hasUpgrade('ch',21)) return '当前P-Note: ' + format(player.ch.pnote) + '<br>当前蓝键：'+format(player.ch.tap)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//p-note&tap
    ["display-text",
      function() {if(hasUpgrade('ch',23)) return '当前黄键：'+format(player.ch.drag)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//drag
    ["display-text",
      function() {if(hasUpgrade('ch',25)) return '当前红键：'+format(player.ch.flick)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//flick
    ["display-text",
      function() {if(hasUpgrade('ch',27)) return '当前长条：'+format(player.ch.hold)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//hold
    ["display-text",
      function() {if(hasUpgrade('ch',27)) return '当前课题能量：'+format(player.ch.en)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//en
    ["display-text",
      function() {if(hasUpgrade('ch',41)) return '当前课题力量：' +format(player.ch.enp)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//enp
     "blank",
     "blank",
      ["display-text",
      function() {if(player.sp.unlocked())
        {return '你有 ' + format(player.sp.points) + ' 曲包<br>曲包基本获得量：' + format(tmp.sp.gainMult) + '<br>曲包获得指数：' + format(tmp.sp.gainExp.mul(tmp.sp.exponent))+ '<br>曲包额外增益：' + format(tmp.sp.directMult)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//sp
     "blank",
     "blank",
      ["display-text",
      function() {if(layers.r.layerShown())
        {return '你有 ' + format(player.r.points) + ' 旋律<br>旋律基本获得量：' + format(tmp.r.gainMult) + '<br>旋律获得指数：' + format(tmp.r.gainExp.mul(tmp.r.exponent))+ '<br>旋律额外增益：' + format(tmp.r.directMult)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//r
    ["display-text",
      function() {if(hasMilestone('r',0)) return '累计Rot点数：'+format(player.r.rota)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//rota
     "blank",
     "blank",
      ["display-text",
      function() {if(layers.mi.layerShown())
        {return '你有 ' + format(player.mi.points) + ' Milthm' }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//mi
    ["display-text",
      function() {if(hasMilestone('mi',0)) return 'Milthm维度1: ' +format(player.mi.dim1)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md1
    ["display-text",
      function() {if(hasMilestone('mi',0)) return 'Milthm维度2: ' +format(player.mi.dim2)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md2
    ["display-text",
      function() {if(hasMilestone('mi',0)) return 'Milthm维度3: ' +format(player.mi.dim3)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md3
    ["display-text",
      function() {if(hasMilestone('mi',1)) return 'Milthm维度4: ' +format(player.mi.dim4)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md4
    ["display-text",
      function() {if(hasMilestone('mi',2)) return 'Milthm维度5: ' +format(player.mi.dim5)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md5
    ["display-text",
      function() {if(hasMilestone('mi',3)) return 'Milthm维度6: ' +format(player.mi.dim6)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md6
    ["display-text",
      function() {if(hasMilestone('mi',4)) return 'Milthm维度7: ' +format(player.mi.dim7)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md7
    ["display-text",
      function() {if(hasMilestone('mi',5)) return 'Milthm维度8: ' +format(player.mi.dim8)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//md8
    ["display-text",
      function() {if(hasMilestone('mi',6)) return 'Milthm维度9: ' +format(player.mi.dim9)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],"blank","blank",//md9
     ["display-text",
      function() {if(tmp.j.layerShown)
        {return '你有 ' + format(player.j.points) + ' 判定线<br>判定线基本获得量：' + format(tmp.j.gainMult) + '<br>判定线获得指数：' + format(tmp.j.gainExp.mul(tmp.j.exponent))+ '<br>判定线额外增益：' + format(tmp.j.directMult)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//j
     ["display-text",
      function() {if(hasMilestone('j',0)) return '你的最佳判定区间是' +format(player.j.pdqja) +'ms！'},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],"blank","blank",//pdqj
     ["display-text",
      function() {if(player.ri.unlocked())
        {return '你有 ' + format(player.ri.points) + '  Dot<br>Dot基本获得量：' + format(tmp.ri.gainMult) + '<br>Dot获得指数：' + format(tmp.ri.gainExp.mul(tmp.ri.exponent))+ '<br>Dot额外增益：' + format(tmp.ri.directMult)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//ri

     "blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank","blank",//绷不住了吧
      ["display-text","恭喜发现彩蛋！你可以在控制台输入“QqQ”，“banana”，“Liu”，“fufu”，“Loader”，“yszqzls”，“yyyxs”，“Genshin”，“Phigros”获取隐藏彩蛋哦！同时，也可以输入“long2024”获取音乐游戏树全体作者（共1人）的真挚祝福！！！！！！！！！！当然，你也可以选择不获取隐藏彩蛋，毕竟比较无聊"],//???
],
    },
   "Displays": {
    content: [ ["infobox","displayBox"],"blank",
    "clickables",
    ]
   },
    },
    clickables:{       
    11: {
    title(){return "PTT"},
    display() {
     let a="没有"
     if(gcs('S',11)==1) a="正在"
     return "现在"+a+"在主界面显示PTT！"
    },
    onClick() {
    if(gcs('S',11)==1) setClickableState('S',11,0)
    else setClickableState('S',11,1)
    },
    canClick() {return true},
    unlocked() {return player.a.ptt.gt(0)},
        },
    12: {
    title(){return "RKS"},
    display() {
     let a="没有"
     if(gcs('S',12)==1) a="正在"
     return "现在"+a+"在主界面显示RKS！"
    },
    onClick() {
    if(gcs('S',12)==1) setClickableState('S',12,0)
    else setClickableState('S',12,1)
    },
    canClick() {return true},
    unlocked() {return player.p.rks.gt(0)},
        },
    13: {
    title(){return "Cytus力量"},
    display() {
     let a="没有"
     if(gcs('S',13)==1) a="正在"
     return "现在"+a+"在主界面显示Cytus力量！"
    },
    onClick() {
    if(gcs('S',13)==1) setClickableState('S',13,0)
    else setClickableState('S',13,1)
    },
    canClick() {return true},
    unlocked() {return player.c.power.gt(0)},
        },
    14: {
    title(){return "课题力量"},
    display() {
     let a="没有"
     if(gcs('S',14)==1) a="正在"
     return "现在"+a+"在主界面显示课题力量！"
    },
    onClick() {
    if(gcs('S',14)==1) setClickableState('S',14,0)
    else setClickableState('S',14,1)
    },
    canClick() {return true},
    unlocked() {return player.ch.enp.gt(0)},
        },
    15: {
    title(){return "填充Notes"},
    display() {
     let a="没有"
     if(gcs('S',15)==1) a="正在"
     return "现在"+a+"在主界面显示填充Notes！"
    },
    onClick() {
    if(gcs('S',15)==1) setClickableState('S',15,0)
    else setClickableState('S',15,1)
    },
    canClick() {return true},
    unlocked() {return player.r.notes.gt(0)},
        },
    21: {
    title(){return "无"},
    display() {
     let a="正在在标题显示一些东西"
     if(gcs('S',21)==1) a="没有在标题显示任何东西"
     return "现在"+a
    },
    onClick() {
    if(gcs('S',21)==0) {
     setClickableState('S',21,1)
     setClickableState('S',22,0)
     setClickableState('S',23,0)
     setClickableState('S',24,0)
     setClickableState('S',25,0)
     setClickableState('S',26,0)
     setClickableState('S',27,0)
    }
    },
    canClick() {return true},
    unlocked() {return true},
        },
    22: {
    title(){return "Notes"},
    display() {
     let a="没有"
     if(gcs('S',22)==1) a="正在"
     return "现在"+a+"在标题显示Notes"
    },
    onClick() {
    if(gcs('S',22)==1) {
     setClickableState('S',22,0)
     setClickableState('S',21,1)}
    else {
     setClickableState('S',21,0)
     setClickableState('S',22,1)
     setClickableState('S',23,0)
     setClickableState('S',24,0)
     setClickableState('S',25,0)
     setClickableState('S',26,0)
     setClickableState('S',27,0)
    }
    },
    canClick() {return true},
    unlocked() {return true},
        },
    23: {
    title(){return "PTT"},
    display() {
     let a="没有"
     if(gcs('S',23)==1) a="正在"
     return "现在"+a+"在标题显示PTT"
    },
    onClick() {
    if(gcs('S',23)==1) {
     setClickableState('S',23,0)
     setClickableState('S',21,1)}
    else {
     setClickableState('S',21,0)
     setClickableState('S',22,0)
     setClickableState('S',23,1)
     setClickableState('S',24,0)
     setClickableState('S',25,0)
     setClickableState('S',26,0)
     setClickableState('S',27,0)
    }
    },
    canClick() {return true},
    unlocked() {return player.a.ptt.gt(0)},
        },
    24: {
    title(){return "RKS"},
    display() {
     let a="没有"
     if(gcs('S',24)==1) a="正在"
     return "现在"+a+"在标题显示RKS"
    },
    onClick() {
    if(gcs('S',24)==1) {
     setClickableState('S',24,0)
     setClickableState('S',21,1)}
    else {
     setClickableState('S',21,0)
     setClickableState('S',22,0)
     setClickableState('S',23,0)
     setClickableState('S',24,1)
     setClickableState('S',25,0)
     setClickableState('S',26,0)
     setClickableState('S',27,0)
    }
    },
    canClick() {return true},
    unlocked() {return player.p.rks.gt(0)},
        },
    25: {
    title(){return "Cytus力量"},
    display() {
     let a="没有"
     if(gcs('S',25)==1) a="正在"
     return "现在"+a+"在标题显示Cytus力量"
    },
    onClick() {
    if(gcs('S',25)==1) {
     setClickableState('S',25,0)
     setClickableState('S',21,1)}
    else {
     setClickableState('S',21,0)
     setClickableState('S',22,0)
     setClickableState('S',23,0)
     setClickableState('S',24,0)
     setClickableState('S',25,1)
     setClickableState('S',26,0)
     setClickableState('S',27,0)
    }
    },
    canClick() {return true},
    unlocked() {return player.c.power.gt(0)},
        },
    26: {
    title(){return "课题力量"},
    display() {
     let a="没有"
     if(gcs('S',26)==1) a="正在"
     return "现在"+a+"在标题显示课题力量"
    },
    onClick() {
    if(gcs('S',26)==1) {
     setClickableState('S',26,0)
     setClickableState('S',21,1)}
    else {
     setClickableState('S',21,0)
     setClickableState('S',22,0)
     setClickableState('S',23,0)
     setClickableState('S',24,0)
     setClickableState('S',25,0)
     setClickableState('S',26,1)
     setClickableState('S',27,0)
    }
    },
    canClick() {return true},
    unlocked() {return player.r.notes.gt(0)},
        },
    27: {
    title(){return "填充Notes"},
    display() {
     let a="没有"
     if(gcs('S',27)==1) a="正在"
     return "现在"+a+"在标题显示填充Notes"
    },
    onClick() {
    if(gcs('S',27)==1) {
     setClickableState('S',27,0)
     setClickableState('S',21,1)}
    else {
     setClickableState('S',21,0)
     setClickableState('S',22,0)
     setClickableState('S',23,0)
     setClickableState('S',24,0)
     setClickableState('S',25,0)
     setClickableState('S',26,0)
     setClickableState('S',27,1)
    }
    },
    canClick() {return true},
    unlocked() {return player.r.notes.gt(0)},
        },
    },
})//Statistcs
//Row 0
addLayer("s", {
  infoboxes: {
 introBox: {
  title: "层级1--歌曲",
  body(){return "欢迎您来到本游戏！本游戏的玩法是模组树，主题是音乐游戏！<br>作者：QqQe308（B站一只新手Up），MOD作者：loader3229<br>目前你玩到的版本是loader3229从2023/12/1开始重新平衡的NGL！"},
        },
},
    name: "songs", // This is optional, only used in a few places, If absent it just uses the layer main-display
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: n(0),
		sc: n(15000),
		sce:n(0.5),
    }},
     color: "#abcdef",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "歌曲", // Name of prestige currency
    baseResource: "Notes", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){
		return new Decimal(0.2).sub(player.lo.evolution.mul(0.005)).mul(Decimal.pow(0.95,player.lo.evolution));
	},
    // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
    //sgainmult//
        mult = n(1)
        sc = player.s.sc
        sce=player.s.sce
        mult = mult.times(player['a'].points).add(1)
        if (hasUpgrade('a', 11)) mult = mult.times(upgradeEffect('a', 11))
        if (hasUpgrade('a', 12)) mult = mult.times(upgradeEffect('a', 12))
        if (hasUpgrade('lo', 14)) mult = mult.times(upgradeEffect('lo', 14))
	if (hasUpgrade('lo', 22)) mult = mult.times(buyableEffect('lo',11))
        mult=mult.times(buyableEffect('s',11))
       mult = mult.times(layers.p.getEffective().add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(layers.p.getEffective().add(1).pow(0.5).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(layers.p.getEffective().add(1).pow(0.3).pow(player.m.points.add(1).pow(0.5)))
	if (hasAchievement('A', 43)) mult = mult.times(player.A.ach)
         if(buyableEffect('c',13).gt(1)) mult = mult.times(buyableEffect('c',13))
			 
      if(hasUpgrade('ch',45)) mult = mult.times(upgradeEffect('ch',45))
         
         
        if(inChallenge('c',11))mult=mult.pow(0.25)
			
        if(inChallenge('c',13))mult = mult.pow(new Decimal(0.9).pow(player.c.challengeTime))
        
        if(inChallenge('r',14)) mult=mult.max(10).log10()
        return mult
    },
    gainExp() { //sgainexp 
      exp= new Decimal(1)
      if(hasUpgrade('a',21)){exp= exp.add(0.01)}
      if(hasUpgrade('s',23)){exp= exp.add(0.01)}
      if(hasAchievement('A',22)){exp= exp.add(0.00616)}
      if (hasUpgrade('c', 12)) exp = exp.add(upgradeEffect('c', 12))
      if(hasUpgrade('ch',46)){exp= exp.add(0.01)}
	  
      if(inChallenge('a',11)){exp= exp.times(0.6)}
      if(hasChallenge('a',11)){exp= exp.times(1.01)}
      if(inChallenge('a',13)){exp= exp.times(0.35)}
      if(hasUpgrade('a',22)){exp= exp.times(1.01)}
      if(hasUpgrade('a',24)){exp= exp.times(1.01)}
      if(inChallenge('a',14)){exp= exp.times(0.15)}
      if(hasChallenge('a',14)){exp= exp.times(1.01)}
      if(hasUpgrade('p',24)){exp= exp.times(1.01)}
      if(inChallenge('p',11)){exp= exp.times(0.5)}
      if(inChallenge('p',12)){exp= exp.times(0.1)}
      if(hasUpgrade('s',26)){exp= exp.times(1.01)}
      if(inChallenge('p',13)){exp= exp.times(0.1)}
     if(hasChallenge('p',14)){exp = exp.times(challengeEffect('p',14))}
     if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
     if (hasUpgrade('p', 33)) exp = exp.times(upgradeEffect('p', 33))
     if(hasUpgrade('l',15)){exp= exp.times(1.001)}
     if(tmp.ch.holdEff.gte(1)) exp = exp.times(tmp.ch.holdEff)
     if(buyableEffect('c',33).gte(1)) exp = exp.times(buyableEffect('c',33))
     
     

//if(!hasChallenge('c',12)) exp=exp.min(12.5)

if(hasAchievement('A',71)) exp=exp.add(0.01)
      return exp
    },
    directMult() { //sdirectmult
        mult = n(1)
        return mult
    },
    scCal() {
      sc=n(15000)
      if(hasMilestone('sp',0)) sc=n(16000)
      if(hasMilestone('sp',1)) sc=n(17000)
      if(hasMilestone('sp',3)) sc=n(18000)
      if(hasMilestone('sp',3)) sc=n(18000)
      if(hasUpgrade('ch',45)) sc=sc.add(upgradeEffect('ch',45).log(10))
      if(hasAchievement('A',73)) sc=sc.add(4000)
      
      return sc
    },
    sceCal() {
      sce=n(0.5)
      if(hasUpgrade('ch',46)) sce=n(0.75)
      
      return sce
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for songs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    deactivated(){de = false
      if(inChallenge('p',13))de = true
      return de
    },
    layerShown(){return true},
    tabFormat: {
   "General": {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
        ["display-text",
      function() {return '你有 ' + format(player.points) + ' Notes<br>你正在获得 ' + format(new Decimal(tmp.s.resetGain).mul(tmp.a.passiveGeneration))+' 歌曲每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
     "blank",
        ["display-text",
      function() {
        //if(tmp.s.gainMult.gte('1e15000')&&!hasChallenge('c',13)) return "由于歌曲获取量超过1e10，歌曲获得量减少！//1<br>由于歌曲获取量超过1e15000，歌曲获得量已被上限！//2"
        //if(tmp.s.gainMult.gte(1e10)) return "由于歌曲获取量超过1e10，歌曲获得量减少！//1"
      },
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
        ["display-text",
      function() {
        //if(hasChallenge('c',13)&&tmp.s.gainMult.log10().gte(player.s.sc)) return "由于歌曲获取量超过"+format(new Decimal(10).pow(player.s.sc))+"，歌曲获得量超出部分指数^"+format(player.s.sce)+"！//2"
      },
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "buyables",
    "upgrades",

],
    }},
 passiveGeneration()
  {mult = n(0)
  if(hasUpgrade('a',13))
  mult = n(1);
  if(hasUpgrade('s',17))
  mult = n(2);
  if(hasMilestone('p',0))
  mult = mult.add(5);
  if(hasUpgrade('p',13))
  mult = mult.times(5);
  if(hasMilestone('r',0))
  mult = mult.add(10);
  return mult},
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
  autoUpgrade() {upg=false
 if(hasMilestone('l',0)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
  resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "a") {
         if (hasUpgrade("a", 12)&&!player.a.activeChallenge) {kept.push("upgrades")}
     }
     if (resettingLayer == "p") {
         if (hasMilestone("p", 5)) {kept.push("buyables")}
     }
     if (resettingLayer == "m") {
         if (hasMilestone("m", 1)) {kept.push("buyables")}
     }
     if (resettingLayer == "c") {
         if (hasMilestone("c", 3)) {kept.push("upgrades")}
     }
     if (resettingLayer == "ch") {
         if (hasMilestone("ch", 0)) {kept.push("upgrades")}
     }
     
         if (hasMilestone("sp", 0)) {kept.push("upgrades")}
     
     if (resettingLayer == "t") {
         kept.push()
     }
     
     if (hasMilestone("r", 0)) {kept.push("upgrades","buyables")}
     layerDataReset(this.layer, kept)
        }
    },
    update(diff) {
     if(player._devSpeed.neq(0)) {
			player.s.sc=tmp.s.scCal
			player.s.sce=tmp.s.sceCal
			if (tmp.s.buyables['11'].canAfford&&hasUpgrade('s',24)) {
    setBuyableAmount('s',11, gba('s',11).add((player.s.points.div(tmp.s.buyables['11'].cost.add(1)).max(1)).log(3).div(2)))}
    if(tmp.s.buyables['12'].canAfford&&hasUpgrade('s',24)) 
    {setBuyableAmount('s',12, gba('s',12).add((player.s.points.div(tmp.s.buyables['12'].cost.add(1)).max(1)).log(3).div(2)))}
   if(tmp.s.buyables['13'].canAfford&&hasMilestone('p',3))  
   {setBuyableAmount('s',13, gba('s',13).add((player.s.points.div(tmp.s.buyables['13'].cost.add(1)).max(1)).log(5).div(5)))}
     }
	},
      upgrades: {
    11:{ title: "重新开始",
                description: "欢迎您来到本游戏！解锁loader3229（Lo）层级！",
                cost: new Decimal(1),
                effect() { return 1 },
			},
    12:{ title: "游戏可真<困难>",
			description:"增加Note获取量，效果为歌曲^1.5，软上限10,000歌曲开始",
                cost: new Decimal(25),
                unlocked() { return (hasUpgrade('s', 11))},
                effect() {
					if(player.s.points.gte(1e4))return Decimal.pow(10,player.s.points.log10().pow(0.5).mul(3))
             return player.s.points.add(1).pow(1.5)
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "这游戏不要太“简单”？？",
                description:"Note获取量*10",
                cost: new Decimal(60),
                unlocked() { return (hasUpgrade('s', 12))},
			},
    14:{ title: "不需要的升级",
                description:"增加Note获取量，效果为歌曲^0.5，软上限1e100歌曲开始",
                cost: new Decimal(1000),
                unlocked() { return (hasUpgrade('s', 13))},
                effect() {
					if(player.s.points.gte(1e100))return Decimal.pow(10,player.s.points.log10().pow(0.5).mul(5))
        return player.s.points.add(1).pow(0.5)
        },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    15:{ title: "这游戏就这点内容吗？",
                description:"解锁下一个层级，Arcaea。",
                cost: new Decimal(1500),
                unlocked() { return (hasUpgrade('s', 14))},
              },
    16:{title:"我讨厌挂机",
    description:"源点增益乘以2倍",
    cost: new Decimal(1e10),
    unlocked() { return (hasUpgrade('a', 14))}, },
    17:{ title: "讨厌的时间墙",
                description:"解锁一个Arcaea升级，每秒获得200%歌曲和源点",
                unlocked() { return (hasUpgrade('s', 16))},
                cost: new Decimal(1e11),},
    21:{title:"为何不多点升级？",
    description:"增加Note获取量，效果为源点^1.5",
    cost: new Decimal(1e20),
    unlocked() { return (hasChallenge('a', 11))},
      effect() {
        return player.a.points.add(1).pow(1.5)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    22:{title:"终于结束挂机",
    description:"源点获取量变为原来的10倍",
    cost: new Decimal(1e30),
    unlocked() { return (hasChallenge('a', 11))},
      effect() {
        return new Decimal(10) }, },
    23:{title:"单曲精选集",
    description:"歌曲基本指数增加0.01，源点获取量*5",
    cost: new Decimal(1e40),
    unlocked() { return (hasUpgrade('a', 17))},},
    24:{title:"歌曲太多了…",
    description:"解锁两个歌曲可购买，源点获取指数+0.01（软上限前）",
    cost: new Decimal(1e70),
    unlocked() { return (hasUpgrade('a', 21))},},
    25:{title:"极限数值",
    description:"根据歌曲数量增益源点获取量",
    cost: n(1e96),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
        return player.s.points.add(10).log(10).pow(1.2).add(1) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    },
    26:{title:"无限歌曲",
    description:"歌曲指数乘以1.01",
    cost: new Decimal('1.80e308'),
    unlocked() { return (hasUpgrade('s', 25))}, },
    27:{title:"10^2^9=1e512",
    description:"源点指数乘以1.01",
    cost: new Decimal('1e512'),
    unlocked() { return (hasUpgrade('s', 26))}, },
    31:{title:"Songs.mp3",
    description:"再次根据歌曲数量提升Notes<br>想不出升级名字，如有好的会替换",
    cost: new Decimal('8.76e5432'),
    unlocked() { return hasChallenge('c',11)},
	effect() {
					//if(player.s.points.gte(1e100))return Decimal.pow(10,player.s.points.log10().pow(0.5).mul(5))
        return player.s.points.add(1).pow(0.03)
        },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    },
    32:{title:"Songs.wav",
    description:"降低Phidata对源点的需求(1e28--1e10)",
    cost: new Decimal('1e5890'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('a',41)},
    },
    33:{title:"Songs.mpeg",
    description() {return "Cyten获取指数*1.2"},
    cost: new Decimal('1e6420'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('c',16)},
    },
    34:{title:"Songs.wma",
    description() {return "基于Notes提升Notes"},
    cost: new Decimal('1e7820'),
    effect() {
        return new Decimal(2).pow(player.points.add(1e10).log(1000).pow(0.75)).pow(5)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('l',16)},
    },
    35:{title:"Songs.midi",
    description() {return "自动获得RKS，解锁下一个Cytus可购买"},
    cost: new Decimal('1e8420'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('a',44)},
    },
    36:{title:"Songs.songs",
    description() {return "基于超过1e200000的歌曲指数提升Rot升级83的效果"},
    cost: n('1e1725000'),
    effect() {
     let a=player.s.points.max(10).log(10).div(10000).sub(19).max(0).pow(0.5).max(1)
        return a.min(10)},
 effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    unlocked() { return hasUpgrade('r',42)},
    },
    37:{title:"Songs.sgnoS",
    description() {return "基于歌曲指数提升Cytus力量"},
    cost: n("1e1960000"),
    tooltip:"在RC3中加强",
    effect() {
     let a=player.s.points.max(10).log(10).div(100000).add(1).pow(0.4)
     eff=(a.pow(-1).add(1)).pow(a)
     if(inChallenge('r',13)) eff=eff.pow(1.08)
     return eff.div(2).min(2)
    },
    unlocked() { return player.lo.evolution.gte(1)},
}
},
    buyables: {
    11: {
        cost(){return Decimal.pow(1.1,getBuyableAmount(this.layer,this.id).add(1)).sub(1)},
        display() { return "基于购买次数增加歌曲的乘数（软上限前）<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名曲师",
        effect() {return Decimal.pow(2,getBuyableAmount(this.layer,this.id).pow(0.5))},
        unlocked(){unlock= false
        if(hasChallenge('a',13)) unlock=true
        if(hasMilestone('p',1)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {},
	},
    12: {
        cost(){return Decimal.pow(1.2,getBuyableAmount(this.layer,this.id).add(1)).sub(1)},
        display() { return "基于购买次数增加Note乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名谱师",
        effect() {return Decimal.pow(2,getBuyableAmount(this.layer,this.id).pow(0.5))},
        unlocked(){unlock= false
        if(hasUpgrade('s',24)) unlock=true
        if(hasMilestone('p',1)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {},
	},
    13: {
        cost(){return Decimal.pow(1.3,getBuyableAmount(this.layer,this.id).add(1)).sub(1)},
        display() { return "基于购买次数增加源点乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名画师",
        effect() {return Decimal.pow(1.1,getBuyableAmount(this.layer,this.id).pow(0.5))},
        unlocked(){unlock= false
        if(hasUpgrade('s',24)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {},
	},
},

update(diff){
	if(hasChallenge('a',13)||hasMilestone('p',1)){
		setBuyableAmount("s",11,player.s.points.add(1).log(1.1).floor().max(getBuyableAmount("s",11)).max(0))
	}
	if(hasUpgrade('s',24)||hasMilestone('p',1)){
		setBuyableAmount("s",12,player.s.points.add(1).log(1.2).floor().max(getBuyableAmount("s",12)).max(0))
	}
	if(hasUpgrade('s',24)||hasMilestone('p',1)){
		setBuyableAmount("s",13,player.s.points.add(1).log(1.3).floor().max(getBuyableAmount("s",13)).max(0))
	}
},
})//Songs




//Row 1
addLayer("a", {
  infoboxes: {
    introBox: {
    title: "层级2--Arcaea",
    body(){ return "欢迎来到第二层！本层级会重置之前的内容，但是会有更多的增益，在本层级也能解锁很多独特的功能<br>资源名称由来：Arcaea中文名：韵律源点"
         },
        },
    chalBox: {
    title: "Arcaea挑战",
    body(){ return "欢迎来到挑战！你可以进入挑战让游戏变得更困难，但是完成挑战会有更多提升，也能解锁后面的游戏内容！"
    },
        },
    pttBox: {
    title: "PTT",
    body(){ return "PTT是Arcaea中的游戏实力衡量标准，有了越多的PTT，就会给其他资源一些增益，不过PTT是有上限的，接下来可以解锁更多和PTT相关的内容"
    },
        },
    snakeBox: {
    title: "蛇",
    body(){ return "蛇是Arcaea中比较特殊的一种音符，类似于长条，你需要按住蛇，并且不能松手或换手。与长条不同的是，蛇的位置会改变：往上往下，左右摇晃，甚至几条蛇一起移动，这就有了Arcaea中著名的“反手蛇”等经典。在这里你需要点击底下的可点击来增加蛇的长度，注意的是它们不一定随时都可点击。你会根据蛇的长度来获得增益效果，并且随着游戏进度的推进，你还会获得更多的增益效果！"
    },
        },
},
    name: "Arcaea",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: false,
		points: n(0),
		sc:n(4000),
		sce:n(0.5),
		ptt: n(0),
		pttMax: n(1),
		pttMax2: n(1),
		sn:n(0),//蛇
		sna:n(1),//蛇每次增加
		sns:n(2),//蛇可点击数量
		snRandom:n(1),
		dr:n(0),//龙
		dra:n(0)//龙增加
    }},
     color: "#DDBBDD",
    requires: n(2000), 
    resource: "源点",
    baseResource: "歌曲", 
    baseAmount() {return player['s'].points}, 
    type: "normal", 
    exponent(){
		return new Decimal(0.1).mul(Decimal.pow(0.95,player.lo.evolution));
	},
    effect(){
      return {Notes: player['a'].points.add(1)}
    },
    effectDescription() { 
            return "Note和歌曲增益乘以"+format(player['a'].points.add(1))},
    gainMult() { //againmult//
        mult = new Decimal(1)
	if (hasAchievement('A', 43)) mult = mult.times(player.A.ach)
        if (hasAchievement('A', 21)) mult = mult.times(2)
        if (hasUpgrade('s', 16)) mult = mult.times(2)
        if (hasChallenge('a', 12)) mult = mult.times(15)
        if (hasUpgrade('s', 22)) mult = mult.times(10)
        if(hasUpgrade('s',23)){mult = mult.times(5)}
        mult=mult.times(buyableEffect('s',13))
        if(hasUpgrade('s',25)){mult = mult.times(upgradeEffect('s',25))}
        if(hasUpgrade('a',26)){mult = mult.times(upgradeEffect('a',26))}
        if (hasUpgrade('lo', 15)) mult = mult.times(upgradeEffect('lo', 15))
       mult = mult.times(layers.p.getEffective().add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(layers.p.getEffective().add(1).pow(0.5).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(layers.p.getEffective().add(1).pow(0.3).pow(player.m.points.add(1).pow(0.5)))
        if (hasChallenge('p',11)) mult = mult.times(challengeEffect('p',11))
        if(buyableEffect('c',21).gte(1)) mult = mult.times(buyableEffect('c',21))
	if (hasUpgrade('lo', 41)) mult = mult.times(buyableEffect('lo',11))
	if (hasUpgrade('lo', 61)) mult = mult.times(buyableEffect('lo',21))
     if(tmp.a.snEff2.gte(1)) mult = mult.times(tmp.a.snEff2)
		 
        if (hasUpgrade('a', 45)) mult = mult.pow(1.2)
        
        if(inChallenge('c',11))mult = mult.pow(0.25)
        if(inChallenge('c',13))mult = mult.pow(new Decimal(0.9).pow(player.c.challengeTime))
        
        if(inChallenge('r',14)) mult=mult.max(10).log10()
        return mult
    },
    gainExp() { //againexp
      exp= new Decimal(1)
      if(hasUpgrade('a',23)){exp= exp.add(0.01)}
      if(hasUpgrade('s',24)){exp= exp.add(0.01)}
      if(hasUpgrade('ch',51)){exp= exp.add(0.001)}
      if(hasChallenge('a',14)){exp= exp.times(1.01)}
      if(inChallenge('p',11)){exp= exp.times(0.5)}
      if(inChallenge('p',12)){exp= exp.times(0.1)}
      if(hasUpgrade('a',25)){exp= exp.times(1.01)}
      if(hasUpgrade('p',21)){exp= exp.times(upgradeEffect('p',21))}
      if(hasUpgrade('s',27)){exp= exp.times(1.01)}
      if(inChallenge('p',13)){exp= exp.times(0.1)}
     if(hasChallenge('p',14)){exp = exp.times(challengeEffect('p',14))}
     if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
      if(hasUpgrade('p',34)){exp= exp.times(upgradeEffect('p',34))}
      if(hasUpgrade('a',36)){exp= exp.times(1.005)}
      if(tmp.ch.holdEff.gte(1)) exp = exp.times(tmp.ch.holdEff)
      if(buyableEffect('c',34).gte(1)) exp = exp.times(buyableEffect('c',34))
      if(hasMilestone('sp', 4)) exp= exp.times(1.001)
      if(getClickableState("r",81)==1) exp = exp.times(clickableEffect("r", 81))
      
     
     if(tmp.a.snEff5.gte(1)) exp=exp.times(tmp.a.snEff5)
     //if(!hasChallenge('c',12)) exp=exp.min(4.5)
      return exp
    },
    directMult() { //adirectmult
        mult = n(1)
        if(gcs("r",71)==1) mult = mult.times(clickableEffect("r", 71))
        if(gcs("r",101)==1) mult = mult.times(clickableEffect("r", 101))
        if(n(gba('sp',21)).gt(0)) mult=mult.times(buyableEffect('sp',21))
        return mult
    },
    row: 1, 
    branches() {return ['s']},
    deactivated(){
      return inChallenge('p',13)
    },
    scCal() {
      sc=n(4000)
      
      return sc
    },
    sceCal() {
      sce=n(0.5)
      if(hasUpgrade('ch',51)) sce=n(0.6)
      
      return sce
    },
    hotkeys: [
        {key: "a", description: "A: Reset for Arcaea", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    snaCal() {
sna=n(1)
if(buyableEffect('c',44).gte(1)) sna=sna.times(buyableEffect('c',44))
if(tmp.a.snEff3.gte(1)) sna=sna.times(tmp.a.snEff3)
if(hasUpgrade('sp',14)) sna=sna.times(2)
if(hasUpgrade('sp',15)) sna=sna.times(upgradeEffect('sp',15))
if(hasUpgrade('sp',16)) sna=sna.times(upgradeEffect('sp',16))
if(tmp.a.drEff1.gte(1)) sna=sna.times(tmp.a.drEff1)
if(hasUpgrade('sp',23)) sna=sna.times(upgradeEffect('sp',23))
if(hasUpgrade('sp',26)) sna=sna.times(2)
if(hasMilestone('r',0)) sna=sna.times(2)
return sna
    },
    snsCal() {
      sns=n(2)
      if(hasUpgrade('sp',14)) sns=sns.add(2)
      if(hasUpgrade('ch',53)) sns=sns.add(1)
      if(hasUpgrade('ch',55)) sns=sns.add(1)
      return sns
    },
    snEff1() {
  sn=player.a.sn.max(1)
eff=sn.log(10).pow(2).add(1)
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
//if(eff>25) eff = eff.sub(24).pow(0.5).add(24)//sc
return eff
    },
    snEff2() {
    sn=player.a.sn.max(1)
eff=n(1e4).pow(sn.pow(0.5).sub(1))
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff.log10().gte(1000)) eff = n(10).pow(eff.log10().sub(1000).pow(0.8).add(1000))//sc
if(eff.log10().gte(5000)) eff = n(10).pow(eff.log10().sub(5000).pow(0.5).add(5000))//sc2
if(!hasAchievement('A',74)) return n(1)
return eff},
    snEff3() {
  sn=player.a.sn.max(1)
eff=sn.log(100).pow(2.5).add(1)
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff>10) eff = eff.sub(9).pow(0.5).add(9)//sc
if(!hasUpgrade('sp',13)) return n(1)
return eff
    },
    snEff4() {
    sn=player.a.sn.max(1)
eff=n('1e1000').pow(sn.pow(0.4).div(10))
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff.log10().gte(10000)) eff = n(10).pow(eff.log10().sub(10000).pow(0.8).add(10000))//sc
if(eff.log10().gte(100000)) eff = n(10).pow(eff.log10().sub(100000).pow(0.5).add(100000))//sc2
if(!hasUpgrade('ch',54)) return n(1)
return eff},
    snEff5() {
  sn=player.a.sn.max(1)
eff=sn.log(100).div(3).pow(0.5).sub(0.75).div(100).add(1).max(1)
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff>1) eff = eff.pow(0.5)//sc
if(!hasUpgrade('sp',22)) return n(1)
return eff
    },
    draCal() {
      sn=player.a.sn
      dr=sn.div(1e5).pow(0.2)
      if(hasUpgrade('sp',24)) dr=dr.times(upgradeEffect('sp',24))
      if(hasUpgrade('sp',26)) dr=dr.times(2)
      return dr
    },
    drEff1() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(10).add(1).pow(2)
if(eff.gte(10)) eff = eff.sub(9).pow(0.5).add(9)//sc
if(!hasUpgrade('ch',57)) return n(1)
return eff
    },
    drEff2() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(10).add(1).pow(0.5).sub(1).div(10).add(1)
if(gcs("r",91)==1) eff = eff.pow(clickableEffect("r", 91))
if(!hasUpgrade('sp',21)) return n(1)
return eff
    },
    drEff3() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(10).add(1).pow(0.4).sub(1).div(10).add(1)
if(!hasUpgrade('sp',22)) return n(1)
return eff
    },
    drEff4() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(15).add(1).pow(0.4).sub(1).div(100).add(1)
if(!hasUpgrade('sp',25)) return n(1)
return eff
    },
    drEff5() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(18).add(1).pow(0.4).sub(1).div(10).add(1)
if(!hasUpgrade('sp',27)) return n(1)
return eff
    },
    update(diff) {
     if(player._devSpeed.neq(0)) {
			if (hasMilestone('c',8)) layers.a.clickables[11].onClick()
			if (hasMilestone('c',8)) layers.a.clickables[12].onClick()
			if (hasMilestone('c',8)) layers.a.clickables[13].onClick()
			if(hasUpgrade('sp',11)) player.a.ptt=player.a.pttMax
			if(hasUpgrade('sp',17)) player.a.sn=player.a.sn.add(player.a.sna.mul(diff))
			if(hasUpgrade('sp',25)) player.a.dr=player.a.dr.add(player.a.dra.mul(diff).mul(0.1))
			if(hasUpgrade('sp',27)) player.a.dr=player.a.dr.add(player.a.dra.mul(diff).mul(0.9))
			player.a.sna=tmp.a.snaCal
			player.a.sc=tmp.a.scCal
			player.a.sce=tmp.a.sceCal
			player.a.sns=tmp.a.snsCal
			player.a.dra=tmp.a.draCal
		}
		},
    layerShown(){shown= player.a.unlocked
    if(hasUpgrade('s',15)){shown=true}
    if(hasUpgrade('a',11)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
 passiveGeneration(){
   mult = n(0)
  if(hasUpgrade('s',17))
  mult = n(2)
  if(hasMilestone('p',0))
  mult = mult.add(5)
  if(hasUpgrade('p',13))
  mult = mult.times(5)
  if(hasMilestone('r',0))
  mult = mult.add(10);
  return mult },
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
  autoUpgrade() {upg=false
 if(hasMilestone('p',2)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
  resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "t") {
         kept.push("challenges")
     }
     if (resettingLayer == "p") {
       if (hasMilestone("p", 0)||hasMilestone("c", 0)) {kept.push("ptt","pttMax","pttMax2")}
         if (hasMilestone("p", 4)||hasMilestone("c", 0)) {kept.push("challenges")}
     }
     if (resettingLayer == "m") {
         if (hasMilestone("m", 1)||hasMilestone("c", 0)) {kept.push("challenges","ptt","pttMax","pttMax2")}
     }
     if (resettingLayer == "c") {
         if (hasMilestone("c", 0)) {kept.push("challenges")}
         if (hasMilestone("c", 3)) {kept.push("challenges","upgrades")}
     if (hasMilestone("c", 5)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2")}
     }
     if (resettingLayer == "ch") {
     if (hasMilestone("ch", 0)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2")}}
    if (hasMilestone("sp", 0)) {kept.push("upgrades","challenges")}
    if(hasUpgrade('ch',55)) kept.push("sn","dr")
    if (hasMilestone("r", 1)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2","sn","dr")}
     layerDataReset(this.layer, kept)
        }
        
    },
  challenges: {
    11: {
        name: "Past",
        challengeDescription: "歌曲获取量变为原来的0.6次方",
        goalDescription:"1e33 Notes",
        rewardDescription:"歌曲获取量^1.01",
        unlocked(){unlock= false
        if(hasUpgrade('a',15)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1e33')||hasMilestone('p',0)},
    },
    12: {
        name: "Present",
        challengeDescription:"Note获取量变为原来的1e-40倍",
        goalDescription:"1e20 Notes",
        rewardDescription:"源点获取量变为原来的15倍",
        unlocked(){unlock= false
        if(hasChallenge('a',11)) unlock=true
   return unlock
        },
        canComplete: function() {return player.points.gt(1e20)||hasMilestone('p',0)},
    },
    13: {
        name: "Future",
        challengeDescription:"歌曲获取量^0.35，且Note获取量*1e-45",
        goalDescription:"1e20 Notes",
        rewardDescription:"解锁一个歌曲可购买，并自动购买",
        unlocked(){unlock= false
        if(hasChallenge('a',12)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gt(1e20)||hasMilestone('p',0)},
    },
    14: {
        name: "Beyond",
        challengeDescription:"歌曲获取量^0.15，且Note获取量*1e-60",
        goalDescription:"114514 Notes",
        rewardDescription:"解锁下一个层级，歌曲和源点的指数*1.01（软上限前）",
        unlocked(){unlock= false
        if(hasUpgrade('a',24)) unlock=true
   return unlock
        },
        canComplete: function() {return player.points.gt(114514)||hasMilestone('p',0)},
    },
},
  upgrades: {
    11:{ title: "我们音游玩家是这样的",
		description:"根据源点乘以歌曲的获取量，效果是源点^1.5，软上限10,000源点开始",
    cost: new Decimal(1),
    effect() {
					if(player.a.points.gte(1e4))return Decimal.pow(10,player.a.points.log10().pow(0.5).mul(3))
    return player.a.points.add(1).pow(1.5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "韵律的力量",
    description:"根据源点乘以歌曲的获取量，效果是源点^0.5，软上限1e100源点开始；源点不重置歌曲升级",
    cost: new Decimal(5),
    unlocked() { return (hasUpgrade('a', 11))},
    effect() {
					if(player.a.points.gte(1e100))return Decimal.pow(10,player.a.points.log10().pow(0.5).mul(5))
   return player.a.points.add(1).pow(0.5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "我知道，这很痛苦",
    description:"每秒获得100%重置时获得的歌曲",
   cost: new Decimal(20),
    unlocked() { return (hasUpgrade('a', 12))},
     },
    14:{ title: "优质曲库",
   description:"解锁更多歌曲升级",
    cost: new Decimal(50),
    unlocked() { return (hasUpgrade('a', 13))},},
    15:{title:"PoTenTial",
    description:"解锁挑战",
    cost: n(500),
    unlocked() { return (hasUpgrade('s', 17))},},
    16:{title:"有那么快吗？",
    description:"Notes*1e10（挑战中可能有效！）",
    cost: new Decimal(50000),
    unlocked() { return (hasChallenge('a', 11))},},
    17:{title:"高质量曲库",
    description:"再次解锁更多歌曲升级",
    cost: new Decimal(199999),
    unlocked() { return (hasChallenge('a', 12))},},
    18:{title:"红与蓝的力量",
    description:"诗篇增加Note获取",
    cost: new Decimal('1e17000'),
      effect() {return new Decimal(10).pow(player.l.points).pow(hasUpgrade('a',28)?10:1)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() { return (hasChallenge('c', 14))},},
     21:{title:"挑战3的额外奖励？？",
    description:"歌曲基本指数增加0.01",
    cost: new Decimal(3e8),
    unlocked() { return (hasChallenge('a', 13))},},
    22:{title:"购买歌曲",
    description:"歌曲指数乘以1.01",
    cost: new Decimal(1e11),
    unlocked() { return (hasUpgrade('a', 21))},},
    23:{title:"真的有软上限吗？",
    description:"源点指数+0.01",
    cost: new Decimal(1e12),
    unlocked() { return (hasUpgrade('a', 22))},},
    24:{title:"未来的挑战",
    description:"解锁第四个挑战“Beyond”，歌曲指数*1.01",
    cost: new Decimal(1e13),
    unlocked() { return (hasUpgrade('a', 23))},},
    25:{ title: "韵律之光",
    description:"源点指数乘以1.01（软上限前）",
    cost: new Decimal(5e14),
    unlocked() { return (hasMilestone('l', 0))}, },
    26:{ title: "韵律的力量 II",
    description:"根据PTT增益源点，效果是10^(PTT+1)（软上限前）",
    cost: new Decimal(1.5e15),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
   return new Decimal(10).pow(player.a.ptt.add(1))
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    27:{ title: "韵律之神",
    description: "解锁下一个层级，Phigros",
    cost: new Decimal(1e17),
    unlocked() { return (hasMilestone('l', 2))}, },
    28:{title:"Arcaea 5.0",
    description:"红与蓝的力量变得更好",
    cost: new Decimal('1e42000'),
    unlocked() { return (hasChallenge('c', 14))},},
    31:{ 
      fullDisplay() {return "Singularity<br>加强PTT对Phidata的增益效果<br>当前效果："+format(this.effect())+"×<br>需要：8.4 PTT"},
    canAfford() {return player.a.ptt.gte(8.4)},
    unlocked() { return (hasUpgrade('p', 23))},
    effect() {
   a= n(2).pow(player.a.ptt.div(3))
   if(hasUpgrade('j',24)) a=a.pow(100)
   return a
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    32:{ 
      fullDisplay() {return "Cyaegha<br>基于歌曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.6 PTT"},
    canAfford() {return player.a.ptt.gte(8.6)},
    unlocked() { return (hasUpgrade('a', 31))},
    effect() {
   a=player.s.points.add(10).log(3).pow(0.25)
     if(hasUpgrade('j',24)) a=a.pow(100)
   return a
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    33:{ 
      fullDisplay() {return "烈華RESONANCE<br>基于源点增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.9 PTT"},
    canAfford() {return player.a.ptt.gte(8.9)},
    unlocked() { return (hasUpgrade('a', 32))},
    effect() {
    a=player.a.points.add(10).log(2).pow(0.4)
     if(hasUpgrade('j',24)) a=a.pow(100)
   return a
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    34:{ 
      fullDisplay() {return "Halcyon<br>基于魔王曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：9.5 PTT"},
    canAfford() {return player.a.ptt.gte(9.5)},
    unlocked() { return (hasMilestone('m',0))},
    effect() {
   return player.m.points.mul(3).add(1).pow(4)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    35:{ 
      fullDisplay() {return "#1f1e33<br>基于Phidata增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：10 PTT"},
    canAfford() {return player.a.ptt.gte(10)},
    unlocked() { return (hasMilestone('m',1))},
    effect() {
   return player.p.points.add(10).log(10).pow(1.2)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    36:{ 
      fullDisplay() {return "Dantalion<br>源点^1.005（软上限后）<br>当前效果：^1.005<br>需要：11 PTT"},
    canAfford() {return player.a.ptt.gte(11)},
    unlocked() { return (hasUpgrade('p',35))},},
    37:{ 
      fullDisplay() {return "CHAOS<br>是时候了<br>...<br>解锁下一个层级，Cytus<br>需要：12 PTT"},
    canAfford() {return player.a.ptt.gte(12)},
    unlocked() { return hasUpgrade('p',37)},},
    38:{ 
      fullDisplay() {return "双星人的力量<br>基于PTT增益Notes<br>当前效果:"+format(this.effect())+"×<br>需要：12.5 PTT"},
    canAfford() {return player.a.ptt.gte(12.5)},
      effect() {return new Decimal(10).pow(player.a.ptt.max(12.5).sub(12.5).mul(13500))},
    unlocked() { return player.ch.unlocked()},},
    41:{ 
      fullDisplay() {return "最强STRONGER<br>基于PTT增益Notes<br>当前效果:"+format(this.effect())+"×<br>需要：12.44 PTT"},
    canAfford() {return player.a.ptt.gte(12.44)},
      effect() {return new Decimal(10).pow(player.a.ptt.pow(2.5).min(2000))},
    unlocked() { return hasChallenge('c',11)},},
    42:{ 
      fullDisplay() {return "Abstruse Dilemma<br>基于RKS增益Notes<br>当前效果:"+format(this.effect())+"×<br>需要：12.45 PTT"},
    canAfford() {return player.a.ptt.gte(12.45)},
      effect() {return new Decimal(10).pow(player.p.rks.mul(20).pow(1.5).min(hasUpgrade('lo',96)?new Decimal("1e100000"):2000))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',32)},},
    43:{ 
      fullDisplay() {return "Aegleseeker<br>基于源点降低诗篇的基本需求<br>当前效果:^"+format(this.effect())+"<br>需要：12.46 PTT"},
    canAfford() {return player.a.ptt.gte(12.46)},
      effect() {return new Decimal(1).div(player.a.points.add(15).log(10000).pow(0.3).min(10).max(1))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',33)},},
    44:{ 
      fullDisplay() {return "Grievous Lady<br>基于源点降低魔王曲的基本需求<br>当前效果:^"+format(this.effect())+"<br>需要：12.48 PTT"},
    canAfford() {return player.a.ptt.gte(12.48)},
      effect() {return new Decimal(1).div(player.a.points.add(15).log(150).pow(0.2).min(8).max(1))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',34)},},
    45:{ 
      fullDisplay() {return "Tempetissimo<br>根据累计前八个Cytus可购买数量增益Note<br>当前效果:×"+format(this.effect())+"<br>需要：12.49 PTT"},
    canAfford() {return player.a.ptt.gte(12.49)},
      effect() {return new Decimal(1e5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',14)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22)).add(getBuyableAmount('c',23)).add(getBuyableAmount('c',24)))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('l',17)},},
    46:{ 
      fullDisplay() {return "Testify<br>上一个升级效果提升，并且对所有Cytus可购买都生效<br>当前效果:×"+format(this.effect())+"<br>需要：12.72 PTT"},
    canAfford() {return player.a.ptt.gte(12.72)},
      effect() {return new Decimal(1e5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',14)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22)).add(getBuyableAmount('c',23)).add(getBuyableAmount('c',24)).add(getBuyableAmount('c',31)).add(getBuyableAmount('c',32)).add(getBuyableAmount('c',33)).add(getBuyableAmount('c',34)).add(getBuyableAmount('c',41)).add(getBuyableAmount('c',42)).add(getBuyableAmount('c',43)).add(getBuyableAmount('c',44)))
      },
    unlocked() { return hasChallenge('c',14)},},
    47:{ 
      fullDisplay() {return "Arcaea Forever<br>点数获取量乘以源点数量^0.2<br>当前效果:×"+format(this.effect())+"<br>需要：12.74 PTT"},
    canAfford() {return player.a.ptt.gte(12.74)},
      effect() {eff= player.a.points.pow(0.2)
        return eff.max(1)},
    unlocked() { return hasUpgrade('ch',35)},},
},
  clickables: {
    11: {
      title() {return "增加PTT"},
      display() {return "点击或按住以增加PTT！"},
      canClick() {return true},
      onClick() {player.a.ptt = player.a.ptt.add(new Decimal(10).pow(player.a.pttMax.add(1)).log(2).div(new Decimal(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0));if(player.a.ptt.gte(13.1124999999999))player.a.ptt=new Decimal(13.1125)},
      onHold() {player.a.ptt = player.a.ptt.add(new Decimal(10).pow(player.a.pttMax.add(1)).log(2).div(new Decimal(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0));if(player.a.ptt.gte(13.1124999999999))player.a.ptt=new Decimal(13.1125)},
    },
    12: {
      title() {return "增加PTT上限"},
      display() {return "点击或按住以增加PTT上限<br>（基于诗篇数量，最大35）"},
      canClick() {return true},
      onClick() {
       let pttMax=player.l.points.min(35).add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0)
       if(true) player.a.pttMax = player.a.pttMax.add(pttMax).min(13)
       else player.a.pttMax = player.a.pttMax.add(pttMax)
      },
      onHold() {
       let pttMax=player.l.points.min(35).add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0)
       if(true) player.a.pttMax = player.a.pttMax.add(pttMax).min(13)
       else player.a.pttMax = player.a.pttMax.add(pttMax)
      },
      unlocked() {return hasMilestone('l',2)||hasMilestone('p',1)}
    },
    13: {
      title() {return "增加PTT上限2"},
      display() {return "增加上一个可点击效果的上限（基于Phidata数量）<br>上限×"+format(new Decimal(1).div(player.a.pttMax2))+"<br>确切来说，×"+new Decimal(1).div(player.a.pttMax2)},
      canClick() {return true},
      onClick() {player.a.pttMax2 = player.a.pttMax2.sub(layers.p.getEffective2().add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1))).max(0.4983551935503592)},
      onHold() {player.a.pttMax2 = player.a.pttMax2.sub(layers.p.getEffective2().add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1))).max(0.4983551935503592)},
      unlocked() {return hasUpgrade('l',13)}
    },
    21: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==1},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',11)}
    },
    22: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==2},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',11)}
    },
    23: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==3},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',14)}
    },
    24: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==4},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',14)}
    },
    31: {
      title() {return "蛇长度++"},
      display() {return "将蛇的长度增加"+format(player.a.sna.times(2))},
      canClick() {return player.a.snRandom==5},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna.times(2))
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('ch',53)}
    },
    32: {
      title() {return "蛇长度++"},
      display() {return "将蛇的长度增加"+format(player.a.sna.times(2))},
      canClick() {return player.a.snRandom==6},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna.times(2))
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('ch',55)}
    },
    41: {
      title() {return "强制重置"},
      display() {return "当所有蛇可点击都不能点击时，点此重置可点击（这八成是因为你漏了某些升级）"},
      canClick() {return true},
      onClick() {
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return true}
    },
    51: {
      title() {return "龙重置"},
      display() {return "重置蛇使龙的长度增加"+format(player.a.dra)},
      canClick() {return player.a.dra.gte(1)&&player.a.sn.gte(1e5)},
      onClick() {player.a.dr=player.a.dr.add(player.a.dra)
        player.a.sn=n(0)
      },
      unlocked() {return hasUpgrade('ch',57)}
    },
},
tabFormat: {
   "Upgrades": {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
        ["display-text",
      function() {return '你有 ' + format(player.s.points) + ' 歌曲<br>你正在获得 ' + format(n(tmp.a.resetGain).mul(tmp.a.passiveGeneration))+' 源点每秒'},
      function() {
        if(tmp.a.gainMult.log10().gte(player.a.sc)) return "由于源点获取量超过"+format(n(10).pow(player.a.sc))+"，源点获得量超出部分指数^"+format(player.a.sce)+"！//2"
      },
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "upgrades",
],
    },
   "Challenges": {
        content: [ ["infobox","chalBox"],
   "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('a',15)}
},
   "PTT": {
        content: [ ["infobox","pttBox"],
   "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.a.ptt) + ' PTT!'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '当前PTT上限： ' + format(player.a.pttMax) + ' PTT'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '确切来说，你有 ' + player.a.ptt + ' PTT'+'<br>当前的PTT上限为 ' + player.a.pttMax},
     {"color": "#ffffff", "font-size": "9px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {if(player.a.pttMax.gte(13)) return 'PTT在13时达到硬上限！'},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     "blank",
        ['row',[['clickable',11],['clickable',12],['clickable',13]]],
    ['row',[['upgrade',31],['upgrade',32],['upgrade',33],['upgrade',34],['upgrade',35],['upgrade',36],['upgrade',37]]],
      ['row',[['upgrade',41],['upgrade',42],['upgrade',43],['upgrade',44],['upgrade',45],['upgrade',46],['upgrade',47]]],
],
  unlocked(){return hasUpgrade('l',11)||hasMilestone('p',1)}
},
   "Snake": {
        content: [ ["infobox","snakeBox"],
   "main-display",
    "prestige-button",
    ["display-text",
      function() {return '当前蛇的长度：' + format(player.a.sn) + ' 物量!'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '每次点击增加蛇的长度：' + format(player.a.sna) + ' 物量!'},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {return '1.使课题力量获取量×' + format(tmp.a.snEff1)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasAchievement('A',74)) return '2.源点获取量×' + format(tmp.a.snEff2)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',13)) return '3.蛇每次点击获取量×' + format(tmp.a.snEff3)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('ch',54)) return '4.Notes获取量×' + format(tmp.a.snEff4)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',22)) return '5.源点获取指数×' + format(tmp.a.snEff5,5)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     "blank",
    ['row',[['clickable',21],['clickable',22],['clickable',23],['clickable',24]]],
    ['row',[['clickable',31],['clickable',32],['clickable',33],['clickable',34]]],
    ['row',[['clickable',41]]],
    ["display-text",
      function() {if(hasUpgrade('ch',57)) return '当前龙的长度：' + format(player.a.dr) + ' 物量!'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {if(hasUpgrade('ch',57)) return '现在重置增加龙的长度：' + format(player.a.dra) + ' 物量!'},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('ch',57)) return '1.蛇每次点击获取量×' + format(tmp.a.drEff1)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',21)) return '2.软上限前蛇的所有效果^' + format(tmp.a.drEff2)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',22)) return '3.课题力量^' + format(tmp.a.drEff3)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',25)) return '4.Notes获取量^' + format(tmp.a.drEff4)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',27)) return '5.课题模式总分×' + format(tmp.a.drEff5)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
    ['row',[['clickable',51],['clickable',52],['clickable',53],['clickable',54]]],
],
  unlocked(){return hasUpgrade('sp',11)}
},
},
})//Arcaea
addLayer("l", {
  infoboxes: {
    introBox: {
    title: "层级3--Lanota",
    body(){ return "欢迎来到第三层！本层级和上一层一样，会重置歌曲的升级和其他一些东西，但是这个层级是“静态”的，所以你不可以像源点一样获得很多很多。不过，这个层级会有更多的增益，继续加油！<br>资源名称由来：Lanota中文名：调律诗篇"
         },
        },
},
    name: "调律诗篇",
    symbol: "L",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#44DDDD",
    requires() {req=new Decimal(1e85)
    if(hasUpgrade('a',43))req=req.pow(upgradeEffect('a',43))
	if (hasUpgrade('lo', 16)) req=req.pow(buyableEffect('lo',23))
	req=req.pow(tmp.j.pdqja2)
req = req.pow(buyableEffect('sp',22))
req = req.pow(tmp.ri.la1);
        if(hasUpgrade('lo',23)){req=req.times(1e-60)}
        if(buyableEffect('c',24).gt(1)) req = req.div(buyableEffect('c',24))
    return req},
    resource: "诗篇",
    baseResource: "歌曲", 
    baseAmount() {return player['s'].points}, 
    type: "static",
	base(){
		mult = new Decimal('1000')
		
	if (hasUpgrade('lo', 16)) mult = mult.pow(buyableEffect('lo',23))
	mult = mult.pow(tmp.j.pdqja2)
mult = mult.pow(buyableEffect('sp',22))
mult = mult.pow(tmp.ri.la1);
		
	
		return mult;
	}, 
    exponent: 2, 
	gainMult() { //lgainmult
		mult = n(1)
		return mult
	},
    gainExp() { //lgainexp
		exp = n(1)
		return exp
	},
	directMult() { //ldirectmult
		mult = n(1)
		return mult
	},
    row: 1, 
    branches(){return ['s']},
    canBuyMax(){return hasChallenge('c',11)},
    hotkeys: [
        {key: "l", description: "L: Reset for Lanota", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown= player.l.unlocked
    if(hasChallenge('a',14)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
    autoPrestige() {return hasUpgrade('p',12)},
    resetsNothing() {return hasUpgrade('p',12)},
    autoUpgrade() {upg=false
 if(hasMilestone('p',2)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "p") {
         if (hasMilestone("p", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
     }
     if (resettingLayer == "m") {
         if (hasMilestone("m", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
     }
     if (resettingLayer == "c") {
         if (hasMilestone("c", 1)) {kept.push("milestones")}
         if (hasMilestone("c", 3)) {kept.push("milestones","upgrades")}
     }
     if (resettingLayer == "ch") {
         if (hasMilestone("ch", 0)) {kept.push("milestones","upgrades")}
     }
     
     if (hasMilestone("sp", 0)) {kept.push("upgrades")}
     if (hasMilestone("sp", 2)) {kept.push("milestones")}
     if(hasMilestone('r',2)) kept.push("upgrades","milestones")
     layerDataReset(this.layer, kept)
        }
    },
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
    upgrades: {
    11:{ title: "本源之点",
    description:"在源点层级解锁“PTT”界面",
    cost: n(2),
    unlocked() {return hasMilestone('l',1)}, },
    12:{ title: "潜能无限",
    description() {return "解锁下一个PTT可点击，PTT对Note也有提升效果"},
    effect() {return player.a.ptt.add(10).log(10).pow(0.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    cost: n(3),
    unlocked() {return hasMilestone('l',2)}, },
    13:{ title: "小潜力股",
    description() {return "再解锁下一个PTT可点击，PTT对Phidata也有提升效果"},
    effect() {
     let a=n(2)
     if(gba('ri',12).gte(3)) a=tmp.ri.la2
     return a.pow(player.a.ptt.div(3).add(1))},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: n(11),
    unlocked() {return hasUpgrade('p',22)}, },
    14:{ title: "潜能无限 II",
    description() {return "让RKS也生效于“潜能无限”的效果（基于RKS指数提升Note）"},
    effect() {return player.p.rks.add(10).log(10).pow(0.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    cost: n(25),
    unlocked() {return hasUpgrade('p',37)}, },
    15:{ title: "歌曲串烧",
    description() {return "歌曲^1.001（软上限后）"},
    cost: n(28),
    unlocked() {return hasUpgrade('p',37)}, },
    16:{ title: "诗笺之理",
    description() {return "基于诗篇提升Notes"},
    effect() {return player.l.points.max(1).pow(player.l.points.max(1)).pow(10)//.min('1e5000')
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: new Decimal(50),
    unlocked() {return hasChallenge('c',11)&&hasUpgrade('a',43)}, },
    17:{ title: "空笺之理",
    description() {return "基于魔王曲提升Notes<br>升级谐音反物质维度：时间之理、空间之理"},
    effect() {return player.m.points.add(1).pow(player.m.points.mul(3).max(100)).pow(4)//.min('1e1200')
		},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: new Decimal(56),
    unlocked() {return hasUpgrade('s',35)}, },
   },
    milestones: {
    0: {
        requirementDescription: "获得1个诗篇",
        effectDescription: "自动购买歌曲升级，解锁一个Arcaea升级",
        done() { return player.l.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个诗篇",
        effectDescription: "解锁一个歌曲升级和一个Arcaea升级，解锁Lanota升级",
        unlocked() {return hasMilestone('l',0)},
        done() { return player.l.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个诗篇",
        effectDescription: "解锁更多升级",
        unlocked() {return hasMilestone('l',1)},
        done() { return player.l.points.gte(3) }
    },
},
tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
        ["display-text",function() {if(!hasChallenge('c',11)) return 'loader3229移除了这个层级的软上限！'},
        {"color": "#ffffff", "font-size": "px", "font-family": "Comic Sans MS"}],
    "milestones",],},
    "Upgrades": {
        content: [ 
     "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('l',1)}
    },
},
})//Lanota

//Row 2
addLayer("p", {
    infoboxes: {
    introBox: {
    title: "层级4--Phigros",
    body(){
      return "欢迎来到第四层！恭喜你，已经来到了第三行！本层级不仅会重置“歌曲”层级，还会重置“Arcaea”层级和“Lanota”层级。不过，你可以通过获得里程碑来给予一些重置时的补助！<br>资源名称由来：Phigros中的“Phi”和Phigros中的机制“data”结合：Phidata"},
    },
    upgBox: {
    title: "Phigros升级",
    body(){ return "和前面的升级类似，Phigros升级也需要Phidata购买，不同的是，大部分升级不是购买上一个就解锁了，而是需要别的解锁条件"
         },
        },
    chalBox: {
    title: "Phigros挑战",
    body(){ return "和前面的挑战不同的是，Phigros挑战可以完成多次，后续还可以提升挑战次数，根据你的完成次数，挑战的奖励会变得更强"
         },
        },
    RKSBox: {
    title: "RKS",
    body(){ return "和PTT类似，RKS是Phigros中的游戏实力衡量标准，有了越多的RKS，就会给其他资源一些增益，不过RKS是有上限的，接下来可以解锁更多和RKS相关的内容。不同点是，RKS可点击并非随时可以点击"
         },
        },
    p1: {
    title: "Phigros•冰封世界",
    body(){ return "本层级所有剧情来自Phigros官方！接下来会根据你的游戏进度解锁更多剧情<br>楔子<br>曾有流浪人，未受洗礼，未信神。<br>攀似绿箩藤，圣石登宵，持剑诰。<br>我要这，穹顶降镐，地霜共冰消，渊无饥骨，路非遥。<br>垂髫闻，沉思莞尔，教后生：何不，振臂筑塔，通云霄。——2089.10.27"},
    unlocked() {return hasMilestone('p',0)},
        },
    p2: {
    title: "诗笺#1",
    body(){ return "诗笺#1  收集时间770/03/27  保管单位：deathMark  等级：main  逃吧。   事到如今  转瞬即逝的虹  还能逃到哪里去  哪里容得  醉人的花香，  故去的残想，  清醒的思想，  虚构的梦乡。  哪里就是  我的故乡。  "},
    unlocked() {return hasUpgrade('p',13)},
        },
    p3: {
    title: "诗笺#2",
    body(){ return "诗笺#2  收集时间770/02/29  保管单位：deathMark  等级：main  冰封世界，融化中。    五神鸟拙追旭日，光携风行列成诗。  春照唤鸠归，剑已出鞘，难再回。  峰上两相遇，针芒相对，淋绦絮。  三寸巧舌嚼不烂，五丈坚岩立俩人。  云开雾散仰苍穹，古韵幽弹檄终曲。  萨里巅，悉听风，风何言，言何语，皆被小儿闲涂。  常言道，东海吞象无尸骨，覆水浇地亦难收。  且叫豪侠驾车迎，连营下榻待新机。  "},
    unlocked() {return hasUpgrade('p',22)},
        },
    p4: {
    title: "诗笺#3",
    body(){ return "诗笺#3  收集时间770/03/01  保管单位：deathMark  等级：main  咕。咕。咕。咕。  溲泡泛。   细鳞片鲴炖白𬞟，馍汤灌口魄神还。  乐府兴来调琴瑟，秦人似获蛊中音。  驰行冰原二十载，唯闻笛笙青河沿。  求留小憩痴人苑，细问客从何处来。  "},
    unlocked() {return hasUpgrade('p',25)},
        },
    p5: {
    title: "诗笺#4",
    body(){ return "诗笺#4  收集时间770/03/06  保管单位：deathMark  等级：main  人类的身份这么重要吗……  活物需要名字，  死物也需要名字。  活物为了  厚土埋身  亦存生机。  死物无欲，  只求活着。"},
    unlocked() {return hasUpgrade('p',27)},
        },
    p6: {
    title: "诗笺#5",
    body(){ return "诗笺#5  收集时间770/03/03  保管单位：deathMark  等级：main  学不会写诗……   春天，  万物复苏的季节。  "},
    unlocked() {return hasUpgrade('p',33)},
        },
    p7: {
    title: "诗笺#6",
    body(){ return "诗笺#6  收集时间770/03/32  保管单位：deathMark  等级：main  光。   流亡时代，  鸢尾将开出花来，  万丈光芒，  穿透阴霭，  拨见云开。  "},
    unlocked() {return hasUpgrade('p',37)},
        },
},
    name: "Phigros",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
		rks: new Decimal(0),
		rksMax: new Decimal(1),
		rksMax2:new Decimal(1),
    }},
    color: "#CC11AA",
    requires() {req=new Decimal(1e28)
    if(hasUpgrade('s',32)) req=new Decimal(1e10)
    return req},
    resource: "Phidata",
    baseResource: "源点", 
    baseAmount() {return player['a'].points}, 
    type: "normal", 
    exponent(){
		return new Decimal(0.05).mul(Decimal.pow(0.95,player.lo.evolution));
	},
	getEffective(){
		if(player.p.points.gte(1e100))return Decimal.pow(10,player.p.points.log10().sqrt().mul(10));
		return player.p.points;
	},
	getEffective2(){
		if(player.p.points.gte(1e100))return Decimal.pow(10,player.p.points.log10().log10().mul(50));
		return player.p.points;
	},
	getEffective3(){
		if(player.p.points.add(10).log10().gte(5000))return Decimal.pow(10,player.p.points.pow(2).log10().log10().mul(1250));
		return player.p.points;
	},
    effect(){
        if(!hasUpgrade('p',11)){return layers.p.getEffective().add(1).pow(player.m.points.add(1).pow(0.5))}
      if(hasUpgrade('p',11)&&!hasUpgrade('p',31)){return layers.p.getEffective().add(1).pow(1.5).pow(player.m.points.add(1).pow(0.5))}
      if(hasUpgrade('p',31)){return layers.p.getEffective().add(1).pow(1.8).pow(player.m.points.add(1).pow(0.5))}
    },
    effectDescription() { 
   return "歌曲和源点增益乘以"+format(tmp.p.effect)+"（软上限1e100Phidata开始）"},
    gainMult() { //pgainmult
        mult = new Decimal(1)
	if (hasAchievement('A', 43)) mult = mult.times(player.A.ach)
        if(hasChallenge('p',12)){mult = mult.times(challengeEffect('p',12))}
        if(hasUpgrade('lo',24)){mult = mult.times(upgradeEffect('lo',24))}
	if (hasUpgrade('lo', 32)) mult = mult.times(buyableEffect('lo',11))
        if(hasUpgrade('p',15)){mult = mult.times(upgradeEffect('p',15))}
        if(hasUpgrade('p',16)){mult = mult.times(upgradeEffect('p',16))}
        if(hasUpgrade('p',17)){mult = mult.times(upgradeEffect('p',17))}
        if(hasUpgrade('l',13)){mult = mult.times(upgradeEffect('l',13))}
        if(hasUpgrade('a',31)){mult = mult.times(upgradeEffect('a',31))}
        if(hasUpgrade('a',32)){mult = mult.times(upgradeEffect('a',32))}
        if(hasUpgrade('a',33)){mult = mult.times(upgradeEffect('a',33))}
        if(hasUpgrade('a',34)){mult = mult.times(upgradeEffect('a',34))}
        if(hasUpgrade('a',35)){mult = mult.times(upgradeEffect('a',35))}
        if(hasUpgrade('m',11)){mult = mult.times(100000)}
        if(buyableEffect('c',12).gt(1)) mult = mult.times(buyableEffect('c',12))
        if(hasUpgrade('ch',15)){mult = mult.times(upgradeEffect('ch',15))}
	if (hasUpgrade('lo', 72)) mult = mult.times(buyableEffect('lo',31))
  if(gcs("r",92)==1) mult = mult.times(clickableEffect("r", 92))
			 
        if(hasUpgrade('p',36)){mult = mult.pow(upgradeEffect('p',36))}
        if(inChallenge('c',11))mult=mult.pow(0.5)
        if(inChallenge('c',13))mult = mult.pow(new Decimal(0.9).pow(player.c.challengeTime))
        if(gcs('j',11)==1) mult=mult.pow(tmp.j.pdqj3)
        
        if(inChallenge('r',14)) mult=mult.max(10).log10()
        return mult
    },
    gainExp() { //pgainexp
      exp= new Decimal(1)
      if(hasUpgrade('p',26)){exp = exp.times(1.01)}
     if(hasChallenge('p',14)){exp = exp.times(challengeEffect('p',14))}
     if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
      if(hasAchievement('A',41)){exp = exp.times(1.01)}
      if(tmp.ch.holdEff>1) exp = exp.times(tmp.ch.holdEff)
       if(hasUpgrade('ch',32))exp= exp.div(upgradeEffect('ch',32))
       if(hasMilestone('sp',1))exp=exp.times(1.1)
       if(hasUpgrade('ch',47))exp= exp.times(1.01)
       return exp
    },
    directMult() { //pdirectmult
        mult = n(1)
        if(gcs("r",72)==1) mult = mult.times(clickableEffect("r", 72))
        if(hasUpgrade('sp',36)) mult=mult.times(100)
        if(gcs("r",102)==1) mult = mult.times(clickableEffect("r", 102))
        if(n(gba('sp',23)).gt(0)) mult=mult.times(buyableEffect('sp',23))
        mult=mult.times(tmp.ri.phi3)
        return mult
    },
    row: 2, 
    branches(){return ['l','a']},
    update(diff) {
     if(player._devSpeed.neq(0)) {
			if (hasUpgrade('s',35)) layers.p.clickables[11].onClick()
			if (hasUpgrade('s',35)) layers.p.clickables[12].onClick()
			if (hasUpgrade('s',35)) layers.p.clickables[13].onClick()
     }
	},
    hotkeys: [
        {key: "p", description: "P: Reset for Phigros", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown=  player.p.unlocked
    if(hasUpgrade('a',27)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "t") {
        kept.push("challenges")
     }
     if (resettingLayer == "c") {
     if(hasMilestone('c',1))kept.push("milestones")
     if(hasMilestone('c',2))kept.push("milestones","rks","rksMax","rksMax2")
     if(hasMilestone('c',4))kept.push("milestones","rks","rksMax","rksMax2","challenges")
     }
     if (resettingLayer == "ch") {
     if(hasMilestone('ch',0))kept.push("milestones","rks","rksMax","rksMax2","challenges")
     }
     if (hasMilestone("sp", 0)) {kept.push("upgrades","challenges")}
     if (hasMilestone("sp", 2)) {kept.push("milestones")}
     if (hasMilestone("r", 1)) {kept.push("challenges")}
     if(hasMilestone('r',2)) kept.push("upgrades","milestones","challenges","rks","rksMax","rksMax2")
     layerDataReset(this.layer, kept)
        }
    },
 passiveGeneration()
  { mult = n(0)
  if(hasAchievement('A',33)) mult = n(1)
  if(hasUpgrade('p',25)) mult = n(5)
    if(hasMilestone('r',0))
  mult = mult.add(10);
  return mult},
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
  autoUpgrade() {upg=false
 if(hasMilestone('c',3))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
  challenges: {
      11: {
        name: "EZ",
        challengeDescription(){
			return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+(hasUpgrade('lo',121)?"":"/"+formatWhole(this.completionLimit()));
			
			},
        goalDescription(){return "1e"+new Decimal(8).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(4))+"源点"},
        rewardDescription(){return "根据挑战完成次数增益源点（软上限前）<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
		rewardEffect() {eff= new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(hasUpgrade('lo',42)?15:10).pow(hasUpgrade('lo',121)?10:1)
          if(hasMilestone('sp',1)) eff=eff.pow(2)
          return eff
        },
        unlocked(){unlock= false
        if(hasUpgrade('p',13)) unlock=true
          return unlock },
        completionLimit(){
			if(hasUpgrade('lo',121))return Decimal.dInf;
          return new Decimal(hasUpgrade('p',21)?10:2).add(hasUpgrade('lo',42)?990:0).add(hasMilestone('sp',1)?4000:0).add(hasUpgrade('lo',101)?15000:0).add(hasUpgrade('lo',121)?180000:0).toNumber();
		  },
        canComplete: function() {
   return player.a.points.gte(n(10).pow(8).mul(n(10).pow(n(challengeCompletions(this.layer,this.id)).mul(4))))},
        },
      12: {
        name: "HD",
       challengeDescription(){
          return "Note、歌曲和源点获取^0.1<br>完成次数:"+challengeCompletions(this.layer,this.id)+(hasUpgrade('lo',121)?"":"/"+formatWhole(this.completionLimit()));
		  
		  },
        goalDescription(){return "1e"+new Decimal(10).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(20))+" Notes"},
        rewardDescription(){return "根据挑战完成次数增益Phidata<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
		rewardEffect() {eff= new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(hasUpgrade('lo',42)?3:2).pow(hasUpgrade('lo',121)?10:1)
          if(hasMilestone('sp',1)) eff=eff.pow(2)
          if(gcs("r",82)==1) eff = eff.pow(clickableEffect("r", 82))
          return eff
        },
        unlocked(){unlock= false
        if(hasUpgrade('p',14)) unlock=true
          return unlock },
        completionLimit(){
			if(hasUpgrade('lo',121))return Decimal.dInf;
          return new Decimal(hasUpgrade('p',21)?10:2).add(hasUpgrade('lo',42)?990:0).add(hasMilestone('sp',1)?4000:0).add(hasUpgrade('lo',101)?15000:0).add(hasUpgrade('lo',121)?180000:0).toNumber();
		},
        canComplete: function() { return player.points.gte(new Decimal(10).pow(10).mul(new Decimal(10).pow(20).pow(challengeCompletions(this.layer,this.id))))}
        },
      13: {
        name: "IN",
       challengeDescription(){
          return "歌曲和源点层级被禁用，歌曲和源点^0.1，Note×1e-10<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/"+formatWhole(this.completionLimit());
			  },
        goalDescription(){return "1e"+new Decimal(200).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(100))+" Notes"},
        rewardDescription(){return "根据挑战完成次数指数提升Notes<br>效果：^"+format(challengeEffect(this.layer,this.id),4)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.2).div(5.2).add(0.8077)},
        unlocked(){unlock= false
        if(hasMilestone('p',6)) unlock=true
          return unlock },
        completionLimit(){
          return new Decimal(hasUpgrade('p',21)?5:2).add(hasUpgrade('lo',45)?5:0).add(hasUpgrade('lo',63)?2:0).add(hasUpgrade('lo',104)?3:0);
		},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(200).mul(new Decimal(10).pow(100).pow(challengeCompletions(this.layer,this.id))))}
        },
      14: {
        name: "AT",
       challengeDescription(){return "同时进入前三个挑战<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/"+formatWhole(this.completionLimit());},
        goalDescription(){return "1e"+new Decimal(180).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(50))+" Notes"},
        rewardDescription(){return "根据挑战完成次数提升歌曲，源点，Phidata获取指数<br>效果：×"+format(challengeEffect(this.layer,this.id),4)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.25).div(10).add(0.9)},
        countsAs: [11, 12, 13],
        unlocked(){unlock= false
        if(hasUpgrade('p',32)) unlock=true
          return unlock },
        completionLimit(){
          return new Decimal(hasUpgrade('p',21)?5:2).add(hasUpgrade('lo',45)?5:0).add(hasUpgrade('lo',63)?2:0).add(hasUpgrade('lo',104)?3:0);
		},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(180).mul(new Decimal(10).pow(50).pow(challengeCompletions(this.layer,this.id))))}
        },
      15: {
        name: "SP",
       challengeDescription(){return "同时进入前三个挑战，Note再次^0.3<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/"+formatWhole(this.completionLimit())},
        goalDescription(){return "1e"+new Decimal(90).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(15))+" Notes"},
        rewardDescription(){return "根据挑战完成次数提升歌曲，源点，Phidata获取指数<br>效果：×"+format(challengeEffect(this.layer,this.id),4)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.1).div(10).add(0.9)},
        countsAs: [11, 12, 13],
        unlocked(){unlock= false
        if(hasUpgrade('p',32)) unlock=true
          return unlock },
        completionLimit(){
          return new Decimal(10).add(hasUpgrade('lo',63)?2:0).add(hasUpgrade('lo',104)?3:0)},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(90).mul(new Decimal(10).pow(15).pow(challengeCompletions(this.layer,this.id))))}
        },
    },
    upgrades: {
    11:{ title: "增强data I",
    description:"data对歌曲和源点的增益变为原来的1.5次方",
    cost: new Decimal(1),
    unlocked() {return hasMilestone('p',4)},

	},
    12:{ title: "Qol为什么不在里程碑里面？",
    description:"自动购买诗篇，诗篇不重置任何东西",
    cost: n(2),
    unlocked() {return hasUpgrade('p',11)},
    },
    13:{ title: "别搞时间墙了",
    description:"解锁Phigros挑战和剧情，被动获取歌曲和源点速度×5",
    cost: n(3),
    unlocked() {return hasUpgrade('p',12)},
    },
    14:{ title: "增强data II",
    description:"根据Phidata增加Note获取（Phidata^30，软上限1e100Phidata开始），解锁下一个挑战",
    cost: new Decimal(15),
    unlocked() {return hasChallenge('p',11)},
    effect() {
    return layers.p.getEffective().add(1).pow(30)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    15:{ title: "韵律的力量 III",
    description:"源点增益Phidata获取量，效果为源点^0.02",
    cost: n(50),
    unlocked() {return hasChallenge('p',12)},
    effect() {
    return player.a.points.add(1).pow(0.02)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    16:{ title: "Phigros的力量",
    description:"诗篇增益Phidata获取量，效果为诗篇^0.6",
    cost: new Decimal(1000),
    unlocked() {return hasChallenge('p',13)},
    effect() {
    return player.l.points.add(1).pow(0.6)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    17:{ title: "高物量歌曲",
    description:"Notes增益Phidata获取量，效果为log(Notes)^0.2",
    cost: n(10000),
    unlocked() {return hasUpgrade('p',16)},
    effect() {
    return player.points.add(10).log(10).pow(0.2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    21:{ title: "Phigros大神",
    description:"基于Phidata数量指数提升源点，增加前几个挑战的上限",
    cost: n(100000),
    unlocked() {return challengeCompletions('p',13)>0},
    effect() {
    return player.p.points.add(10).log(10).add(10).log(10).pow(0.1).div(100).add(1)
    },
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))}, },
    22:{ title: "RKS11.00",
    description:"解锁更多Lanota升级",
    cost: new Decimal(200000),
    unlocked() {return challengeCompletions('p',13)>0},},
    23:{ title: "RKS12.00",
    description:"解锁PTT升级",
    cost: n(1e7),
    unlocked() {return hasAchievement('A',34)},},
    24:{ title: "RKS13.00",
    description:"歌曲^1.01",
    cost: new Decimal(1e17),
    unlocked() {return hasUpgrade('p',23)},},
    25:{ title: "RKS14.00??",
    description:"Notes获取量*1e308，500%Phidata每秒",
    cost: new Decimal(1e18),
    unlocked() {return hasUpgrade('p',24)},},
    26:{ title: "RKS15.00??!!",
    description:"Phidata获取量^1.01",
    cost: new Decimal(1e20),
    unlocked() {return hasUpgrade('a',32)},},
    27:{ title: "RKS16.00之力",
    description:"解锁下一个层级：魔王曲",
    cost: new Decimal(1e23),
    unlocked() {return hasUpgrade('p',26)},},
    31:{ title: "Painful",
    description:"增加Phidata公式的效果<br>(^1.5~^1.8)",
    cost: new Decimal(1e26),
    unlocked() {return hasMilestone('m',0)},},
    32:{ title: "Horrible",
    description:"解锁两个Phidata挑战：AT、SP",
    cost: new Decimal(1e40),
    unlocked() {return hasUpgrade('p',31)},},
    33:{ title: "Impossible",
    description:"PTT对歌曲也有提升效果（软上限后）",
    cost: new Decimal(1e46),
    unlocked() {return hasMilestone('m',1)},
    effect() {return player.a.ptt.add(10).log(10).pow(0.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    34:{ title: "Difficult",
    description:"PTT对源点提升增加（软上限后）",
    cost: new Decimal(1e47),
    unlocked() {return hasMilestone('m',1)},
    effect() {return player.a.ptt.add(10).log(10).pow(0.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    35:{ title: "Anxious",
    description:"解锁更多PTT升级，解锁魔王曲升级",
    cost: new Decimal(1e55),
    unlocked() {return hasUpgrade('p',34)},
    },
    36:{ title: "Terrible",
    description:"RKS指数提升Phidata,源点,歌曲获取量（软上限前）",
    cost: new Decimal(1e70),
    unlocked() {return hasUpgrade('p',35)},
    effect() {return player.p.rks.add(10).log(10).pow(0.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    37:{ title: "Anguished",
    description:"解锁更多升级，解锁下一个RKS可点击<br>有没有发现这一行升级的首字母是Phidata",
    cost: new Decimal(1e73),
    unlocked() {return hasUpgrade('p',36)},
    },
   },
    milestones: {
    0: {
        requirementDescription: "获得1个Phidata",
        effectDescription: "源点挑战要求为0，被动获取歌曲和源点增加500%每秒（PTT永远不重置），解锁剧情",
        done() { return player.p.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个Phidata",
        effectDescription: "保留Lanota里程碑",
        done() { return player.p.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个Phidata",
        effectDescription: "自动购买Arcaea升级和Lanota升级",
        done() { return player.p.points.gte(3) }
    },
    3: {
        requirementDescription: "获得4个Phidata",
        effectDescription: "歌曲和源点层级不重置任何东西",
        done() { return player.p.points.gte(4) }
    },
    4: {
        requirementDescription: "获得5个Phidata",
        effectDescription: "保留源点挑战，解锁Phidata升级",
        done() { return player.p.points.gte(5) }
    },
    5: {
        requirementDescription: "获得300个Phidata",
        effectDescription: "保留歌曲可购买数量（挑战中仍然生效哦！）",
        unlocked() {return hasChallenge('p',12)},
        done() { return player.p.points.gte(300) }
    },
    6: {
        requirementDescription: "获得100000个Phidata",
        effectDescription: "解锁下一个Phigros挑战",
        unlocked() {return hasChallenge('p',12)},
        done() { return player.p.points.gte(100000) }
    },
},
    clickables:{
      11: {
      title() {return "增加RKS"},
      display() {return "这是有规律的哦！点击增加RKS"},
      canClick() {return rksRandom()<0.3||hasUpgrade('c',11)},
      onClick() {player.p.rks=player.p.rks.add(player.p.rksMax.sub(player.p.rks).div(5));
		if(hasUpgrade('lo',62))player.p.rks=player.p.rks.max(tmp.lo.rks);},
      onHold() {if(hasUpgrade('c',11)) player.p.rks=player.p.rks.add(player.p.rksMax.sub(player.p.rks).div(5));
		if(hasUpgrade('lo',62))player.p.rks=player.p.rks.max(tmp.lo.rks);},
    },
      12: {
      title() {return "增加RKS上限"},
      display() {d="基于Phidata增加RKS上限"
      if(hasAchievement('A',53))d="基于Phidata和PTT增加RKS上限"
      return d},
      canClick() {return rksRandom()>0.7||hasUpgrade('c',11)},
      onClick() {player.p.rksMax = player.p.rksMax.add(layers.p.getEffective3().add(1).log(20).add(1).log(10).sub(player.p.rksMax.mul(player.p.rksMax2).mul(new Decimal(1).div(player.a.ptt.add(10).log(10).pow(0.1).max(1.25)))).div(2).max(0.001).sub(0.001))},
      onHold() {if(hasUpgrade('c',11)) player.p.rksMax = player.p.rksMax.add(layers.p.getEffective3().add(1).log(20).add(1).log(10).sub(player.p.rksMax.mul(player.p.rksMax2).mul(new Decimal(1).div(player.a.ptt.add(10).log(10).pow(0.1).max(1.25)))).div(2).max(0.001).sub(0.001))},
      unlocked() {return hasUpgrade('p',37)}
    },
      13: {
      title() {return "增加RKS上限2"},
      display() {return "基于Cytus力量增加上一个可点击效果的上限<br>上限×"+format(n(1).div(player.p.rksMax2))+"<br>确切来说，×"+ n(1).div(player.p.rksMax2)},
      canClick() {return true},
      onClick() {
		  let tempPower=player.c.power;
		  if(tempPower.add(10).log(10).gte(800))tempPower=tempPower.add(10).log(10).div(8).pow(400);
        if(hasUpgrade('c',11)) player.p.rksMax2 = player.p.rksMax2.sub(tempPower.add(1).log(10).add(1).div(5).pow(0.5).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
        if(hasUpgrade('ch',23)) player.p.rksMax2 = player.p.rksMax2.sub(tempPower.add(1).log(2).add(1).div(2).pow(0.8).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
      },
      onHold() {
		  let tempPower=player.c.power;
		  if(tempPower.add(10).log(10).gte(800))tempPower=tempPower.add(10).log(10).div(8).pow(400);
		  player.p.rksMax2 = player.p.rksMax2.sub(tempPower.add(1).log(10).add(1).div(5).pow(0.5).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
        if(hasUpgrade('ch',23)) player.p.rksMax2 = player.p.rksMax2.sub(tempPower.add(1).log(2).add(1).div(2).pow(0.8).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
      },
      unlocked() {return hasUpgrade('c',11)}
    },
    },
tabFormat: {
    "Milestones": {
        content: [    ["infobox","introBox"],
        "main-display",
    "prestige-button",
     ["display-text",
      function() {return '你有 ' + format(player.a.points) + ' 源点<br>你正在获得 ' + format(n(tmp.p.resetGain).mul(tmp.p.passiveGeneration))+' Phidata每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "milestones",],},
    "Upgrades": {
        content: [ ["infobox","upgBox"],
   "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('p',4)}
    },
    "Challenges": {
        content: [["infobox","chalBox"],
   "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('p',13)}
},
    "RKS": {
     content: [["infobox","RKSBox"],
   "main-display",
    "prestige-button",
       ["display-text",
      function() {return '你有 ' + format(player.p.rks)+ ' RKS!'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '当前RKS上限： ' + format(player.p.rksMax) + ' RKS'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '确切来说，你有 ' + player.p.rks + ' RKS'+'<br>当前的RKS上限为 ' + player.p.rksMax},
     {"color": "#ffffff", "font-size": "9px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(player.p.rksMax.gte(tmp.r.phi1)) return 'RKS在'+format(tmp.ri.phi1)+'时达到硬上限！'},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],"blank",
    "clickables",
],
  unlocked(){return hasUpgrade('m',11)}
},
    "Texts": {
        content: [ 
        ["infobox","p1"],
        ["infobox","p2"],
        ["infobox","p3"],
        ["infobox","p4"],
        ["infobox","p5"],
        ["infobox","p6"],
        ["infobox","p7"],
],
  unlocked(){return hasMilestone('p',0)}
},
},
})//Phigros
addLayer("m", {
  infoboxes: {
    introBox: {
    title: "层级5--魔王曲",
    body(){
      return "欢迎来到第五层！本层级也会重置“歌曲”层级，“Arcaea”层级和“Lanota”层级。而且，本层级和Lanota类似，也是静态层级。你可以通过里程碑获得更多增益！<br>"},
    },
    upgBox: {
    title: "魔王曲升级",
    body(){return "相比其他的升级，魔王曲的升级比较特殊，一般来说，每个和音乐游戏相关的层级只会对应一个升级，在后面的层级中会解锁更多魔王曲升级"},
        },
},
    name: "魔王曲",
    symbol: "M",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#55BB11",
    requires() {req=new Decimal(1e166)
    if(hasUpgrade('a',44))req=req.pow(upgradeEffect('a',44))
		req=req.pow(tmp.j.pdqja3)
        if(buyableEffect('c',23).gt(1)) req = req.div(buyableEffect('c',23))
    return req}, 
    resource: "魔王曲",
    baseResource: "源点", 
    baseAmount() {return player['a'].points}, 
    type: "static", 
	base(){
		return n(1e60).pow(tmp.j.pdqja3);
	},
    exponent: 2, 
    effect(){
      return {Notes: player.m.points.add(1).pow(0.5)}
    },
    effectDescription() { 
      if(!hasUpgrade('m',21)){
     return "Phidata效果变成原来的"+format(player.m.points.add(1).pow(0.5))+"次方"}
    },
	gainMult() { //mgainmult//
		mult = n(1)
		return mult
	},
    gainExp() { //mgainexp
		exp = n(1)
		return exp
	},
	directMult() { //mdirectmult
		mult = n(1)
		return mult
	},
    row: 2, 
    branches(){return ['a','l']},
    hotkeys: [
        {key: "m", description: "M: Reset for Monster Songs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing() {return hasMilestone('c',8)},
    canBuyMax(){return hasMilestone('c',8)},
    autoPrestige() {return hasMilestone('c',6)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "t") {
        kept.push("upgrades")
     }
     if (resettingLayer == "c") {
        if(hasMilestone("c", 1))kept.push("milestones")
        if(hasMilestone("c", 3))kept.push("milestones","upgrades")
     }
     if (resettingLayer == "ch") {
        if(hasMilestone("ch", 0))kept.push("milestones","upgrades")
     }
     if (hasMilestone("sp", 0)) {kept.push("upgrades")}
     if (hasMilestone("sp", 2)) {kept.push("milestones")}
     if(hasMilestone('r',2)) kept.push("upgrades","milestones")
     layerDataReset(this.layer, kept)
        }
    },
    layerShown(){shown= hasAchievement('A',111)
    if(hasUpgrade('p',27)){shown=true}
    if(hasMilestone('m',0)){shown=true}
    return shown},
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
    upgrades: {
    11:{ title: "Phigros: Rrhar'il",
    description:"解锁RKS（在Phidata界面），Phidata×1e5（软上限前）",
    cost: n(0),
    unlocked() {return hasUpgrade('p',35)}, },
    12:{ title: "Arcaea:Testify",
    description:"基于RKS和PTT增益Cytus力量获得量",
    cost: n(6),
    effect() {
        a= player.p.rks.pow(5).mul(player.a.ptt).max(1)
        if(hasUpgrade('j',22)) a=a.pow(100)
     return a
    },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasMilestone('c',7)}, },
    13:{ title: "Lanota:黄道、知希朋友と紡ぎありく",
    description:"基于魔王曲增益Cytus力量获取量",
    cost: new Decimal(9),
    effect() {
        return new Decimal(2).pow(player.m.points)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasUpgrade('c',13)}, },
    14:{ title: "Cytus II:L10(里谱)",
    description:"基于谱面增益Cytus力量",
    cost: new Decimal(25),
    effect() {
        return n(2).pow(player.ch.points)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasMilestone('sp',0)}, },
    18:{ title: "如果让loader3229打魔王曲的话……",
    description:"基于魔王曲增益Note获取量",
    cost: new Decimal(10),
    effect() {
        return new Decimal(1e13).pow(player.m.points.pow(2))},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasUpgrade('c',17)}, },
    19:{ title: "……loader3229就可以灵活运用魔王曲配置制作自制谱了！",
    description:"基于魔王曲增益Loaded Note获取量",
    cost: new Decimal(11),
    effect() {
        return player.m.points.add(1)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasUpgrade('m',18)}, },
    15:{ 
     title: "Rotaeno: Galactic Warzone",
    description:"基于魔王曲增益旋律和Milthm维度",
    cost: n(77),
    effect() {
        return player.m.points.max(1).log(2).pow(0.5).max(1)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasUpgrade('r',43)}, },
    16:{ 
     title: "Milthm: 命日",
    description:"基于超过1e500的Milthm增益Cytus力量",
    cost: n(80),
    tooltip:"在RC3中削弱",
    effect() {
        let eff =player.mi.points.pow(0.5).div('1e250').max(1).pow(2)
        if(eff.log10().gte(200)) eff = n(10).pow(eff.log10().sub(200).pow(0.8).add(200))//sc
     if(!inChallenge('r',13)) eff=eff.pow(3)
     return eff
    },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasUpgrade('m',15)}, },
   },
    milestones: {
    0: {
        requirementDescription: "获得1首魔王曲",
        effectDescription: "解锁更多Phidata升级和PTT升级",
        done() { return player.m.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2首魔王曲",
        effectDescription: "再次解锁更多升级，Phidata里程碑对魔王曲也生效",
        done() { return player.m.points.gte(2) }
    },
},
tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button",
    "milestones",],},
    "Upgrades": {
        content: [ ["infobox","upgBox"],
     "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasUpgrade('p',35)}
    },
},
})//Monster Songs

//Row 3
addLayer("c", {
  infoboxes: {
 introBox: {
    title: "层级6--Cytus",
    body(){
      return "欢迎来到第六层！恭喜你，已经来到了第四行！本层级会重置前三行，也就是所有之前的进度！不用担心，接下来会解锁更多、更好、更有趣的内容，继续前行吧！<br>资源名称由来：自己想的"},
    },
    upgBox: {title: "Cytus升级",
    body(){
      return "与前面的升级并无两样，继续购买吧！"},},
      buyBox: {title: "Cytus可购买",
    body(){
      return "这些是Cytus可购买，你可以消耗Cytus力量（基于Cyten数量和一些升级）购买，这些可购买拥有不同的效果，随着进度还会解锁更多可购买"},},
      chalBox: {title: "Cytus挑战",
    body(){
      return "完成Cytus挑战获得奖励！如果无法完成，再刷刷别的资源吧"},},},
    name: "Cytus",
    symbol: "C",
    position: 1,
    startData() { return {
        unlocked() { return hasUpgrade('a',37)||hasMilestone('c',0)||hasAchievement('A',111)   },
		points: n(0),
		power: n(0),
		challengeTime: n(0),
    }},
    color: "#a3a3a3",
    branches(){return ['p','m']},
    requires: new Decimal(1e100), 
    resource: "Cyten",
    baseResource: "Phidata", 
    baseAmount() {return player.p.points}, 
    type: "normal", 
    exponent(){
		return new Decimal(0.01).mul(Decimal.pow(0.95,player.lo.evolution));
	},
    effect(){
      eff=player.c.points.add(1).pow(2).sub(1)
      return eff
    },
    effectDescription() { return "生成"+format(tmp.c.powerCal)+" Cytus力量每秒"
    },
    gainMult() { //cgainmult//
        mult = new Decimal(1)
        if(buyableEffect('c',22).gte(1)) mult = mult.times(buyableEffect('c',22))
        if(hasUpgrade('ch',11)) mult = mult.times(upgradeEffect('ch',11))
        if (getClickableState("r",31)==1) mult = mult.times(clickableEffect("r", 31))
        if (getClickableState("r",32)==1) mult = mult.times(clickableEffect("r", 32))
        if(hasUpgrade('mi',12)) mult = mult.times(upgradeEffect('mi',12))
			
      if(hasUpgrade('lo',34)) mult = mult.times(upgradeEffect('lo',34))
      if(hasUpgrade('lo',86)) mult = mult.times(buyableEffect('lo',33))
	if (hasUpgrade('lo', 92)) mult = mult.times(buyableEffect('lo',11))
        if(inChallenge('r',14)) mult=mult.max(10).log10()
        return mult
    },
    gainExp() { //cgainexp
      exp= new Decimal(1)
      if(hasUpgrade('s',33))exp= exp.times(1.2)
      if(hasUpgrade('ch',32))exp= exp.div(upgradeEffect('ch',32))
      if(buyableEffect('c',42).gte(1)) exp = exp.times(buyableEffect('c',42))
        exp = exp.times(tmp.ch.flickEff)
      return exp
    },
    directMult() { //cdirectmult
        mult = n(1)
        if(gcs("r",73)==1) mult = mult.times(clickableEffect("r", 73))
        if(hasUpgrade('r',22)) {if (gcs("r",31)==1) mult = mult.times(clickableEffect("r", 31))
        if (gcs("r",32)==1) mult = mult.times(clickableEffect("r", 32))}
        if(gcs("r",103)==1) mult = mult.times(clickableEffect("r", 103))
        if(n(gba('sp',24)).gt(0)) mult=mult.times(buyableEffect('sp',24))
        return mult
    },
    powerCal(){
      mult = player.c.points.add(1).pow(2).sub(1).max(0)
      if(hasUpgrade('ch',17)) mult = player.c.points.add(1).pow(3).sub(1)
      if(buyableEffect('c',14).gte(1)) mult = mult.times(buyableEffect('c',14))
      if(tmp.ch.tapEff>1) mult = mult.times(tmp.ch.tapEff)
      if(hasUpgrade('m',12)) mult = mult.times(upgradeEffect('m',12))
      if(hasUpgrade('c',13)) mult = mult.times(upgradeEffect('c',13))
      if(hasUpgrade('m',13)) mult = mult.times(upgradeEffect('m',13))
      if(hasUpgrade('c',15)) mult = mult.times(10)
      if(hasUpgrade('lo',31)) mult = mult.times(upgradeEffect('lo',31))
	if (hasUpgrade('lo', 33)) mult = mult.times(buyableEffect('lo',11))
      if(hasUpgrade('m',14)) mult = mult.times(upgradeEffect('m',14))
      if(hasUpgrade('m',16)) mult = mult.times(upgradeEffect('m',16))
      if(hasUpgrade('j',25)) mult = mult.times(upgradeEffect('j',25))
      if(hasUpgrade('j',36)) mult = mult.times(upgradeEffect('j',36))
      if(hasUpgrade('r',46)) mult = mult.times(1e60)
      if(tmp.ch.enpEff.gte(1)) mult=mult.times(tmp.ch.enpEff)
      if(hasMilestone('r',0)) mult=mult.times(100)
       if (gcs("r",41)==1) mult = mult.times(clickableEffect("r", 41))
        if (gcs("r",43)==1) mult = mult.times(clickableEffect("r", 43))
        if (gcs("r",51)==1) mult = mult.times(clickableEffect("r", 51))
        if (gcs("r",181)==1) mult = mult.times(clickableEffect("r", 181))
      
      if(hasUpgrade('c',14)) mult = mult.pow(1.1)
      if(buyableEffect('c',43)>1) mult = mult.pow(buyableEffect('c',43))
      if(inChallenge('r',12)&&getClickableState('r',12)==1) mult=mult.pow(tmp.r.chal2Cal)
      if (getClickableState("r",93)==1) mult = mult.pow(clickableEffect("r", 93))
      if(hasUpgrade('s',37)) mult=mult.pow(upgradeEffect('s',37))
      return mult
},
    row: 3, 
    passiveGeneration()
  {mult = n(0)
  if(hasUpgrade('c',16))
  mult = n(1)
    if(hasMilestone('r',0))
  mult = mult.add(10);
    return mult
  },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "t") {
        kept.push("upgrades","challenges")
     }
     if(hasMilestone('r',1)) kept.push("challenges")
     if(hasMilestone('r',3)) kept.push("upgrades")
     if(hasMilestone('r',5)) kept.push("milestones")
     layerDataReset(this.layer, kept)
        }
    },
    hotkeys: [
        {key: "c", description: "C： Reset for Cytus",onPress(){if (canReset(this.layer)) doReset(this.layer)} },
    ],
    layerShown(){ return hasUpgrade('a',37)||hasMilestone('c',0)||hasAchievement('A',111)
    },
    update(diff) {
     if(player._devSpeed.neq(0)) {
			if (player.c.unlocked()) player.c.power = player.c.power.add(tmp.c.powerCal.mul(diff));
			if (inChallenge('c',13)) player.c.challengeTime=player.c.challengeTime.add(1)
			if (hasUpgrade('ch',24)&&layers.c.buyables[11].canAfford()) layers.c.buyables[11].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[12].canAfford()) layers.c.buyables[12].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[13].canAfford()) layers.c.buyables[13].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[14].canAfford()) layers.c.buyables[14].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[21].canAfford()) layers.c.buyables[21].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[22].canAfford()) layers.c.buyables[22].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[23].canAfford()) layers.c.buyables[23].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[24].canAfford()) layers.c.buyables[24].buy();
			if (hasMilestone('sp',3)&&layers.c.buyables[31].canAfford()&&layers.c.buyables[31].unlocked()) layers.c.buyables[31].buy();
    	if (hasMilestone('sp',3)&&layers.c.buyables[32].canAfford()&&layers.c.buyables[32].unlocked()) layers.c.buyables[32].buy();	
    	if (hasMilestone('sp',3)&&layers.c.buyables[33].canAfford()&&layers.c.buyables[33].unlocked()) layers.c.buyables[33].buy();
    	if (hasMilestone('sp',3)&&layers.c.buyables[34].canAfford()&&layers.c.buyables[34].unlocked()) layers.c.buyables[34].buy();
    	if (hasMilestone('sp',3)&&layers.c.buyables[41].canAfford()&&layers.c.buyables[41].unlocked()) layers.c.buyables[41].buy();
    	if (hasMilestone('sp',3)&&layers.c.buyables[42].canAfford()&&layers.c.buyables[42].unlocked()) layers.c.buyables[42].buy();	
    	if (hasMilestone('sp',3)&&layers.c.buyables[43].canAfford()&&layers.c.buyables[43].unlocked()) layers.c.buyables[43].buy();		
    	if (hasMilestone('sp',3)&&layers.c.buyables[44].canAfford()&&layers.c.buyables[44].unlocked()) layers.c.buyables[44].buy();	
    	if (hasMilestone('r',5)&&layers.c.buyables[11].canAfford()) layers.c.buyables[11].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[12].canAfford()) layers.c.buyables[12].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[13].canAfford()) layers.c.buyables[13].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[14].canAfford()) layers.c.buyables[14].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[21].canAfford()) layers.c.buyables[21].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[22].canAfford()) layers.c.buyables[22].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[23].canAfford()) layers.c.buyables[23].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[24].canAfford()) layers.c.buyables[24].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[31].canAfford()) layers.c.buyables[31].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[32].canAfford()) layers.c.buyables[32].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[33].canAfford()) layers.c.buyables[33].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[34].canAfford()) layers.c.buyables[34].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[41].canAfford()) layers.c.buyables[41].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[42].canAfford()) layers.c.buyables[42].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[43].canAfford()) layers.c.buyables[43].buyMax();
    	if (hasMilestone('r',5)&&layers.c.buyables[44].canAfford()) layers.c.buyables[44].buyMax();
     }
		},
		upgrades: {
    11:{ title: "Cytus I",
    description:"解锁第三个RKS可点击，RKS可点击随时都可以点击",
    cost: n(5),
    unlocked() {return hasMilestone('c',7)}, },
    12:{ title: "Cytus II",
    description:"基于Cytus力量增益歌曲基本获得指数",
    cost: new Decimal(25),
    effect() {return player.c.power.add(100).log(100).add(10).log(10).sub(1).div(10)},
    effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasMilestone('c',8)}, },
    13:{ title: "Cytoid",
    description:"解锁第六个Cytus可购买和一个魔王曲升级，基于游玩时间增益Cytus力量",
    cost: n(30),
    effect() {return n(player.timePlayed).add(10000)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id),5)+"×"},
    unlocked() {return hasUpgrade('c',12)}, },
    14:{ title: "扫线，不是下落",
    description:"Cytus力量^1.1，解锁第七个Cytus可购买",
    cost: n(50),
    unlocked() {return hasUpgrade('c',13)}, },
    15:{ title: "时代既去",
    description:"解锁Cytus挑战，Cytus力量×10",
    cost: n(100),
    unlocked() {return hasUpgrade('c',14)}, },
    16:{ title: "长夜将尽",
    description:"每秒获得100%重置时获得的Cyten",
    cost: n(300),
    unlocked() {return hasUpgrade('a',42)}, },
    17:{ title: "黎明已至",
    description:"解锁下一个层级(Chart)，强化Cytus可购买7",
    cost: new Decimal(10000),
    unlocked() {return hasUpgrade('a',45)||hasUpgrade('c',17)}, },
   },
		milestones: {
    0: {
        requirementDescription: "获得一个Cyten",
        effectDescription: "永久自动购买歌曲、Arcaea、Lanota升级，保留Arcaea挑战",
        done() { return player.c.points.gt(0) }
    },
    1: {
        requirementDescription: "1500 Cytus力量",
        effectDescription: "保留Lanota里程碑，Phidata里程碑和魔王曲里程碑",
        unlocked() {return true},
        done() { return player.c.power.gte(1500) }
    },
    2: {
        requirementDescription: "2 Cytens && 5000 Cytus力量",
        effectDescription: "保留RKS，解锁Cytus可购买",
        unlocked() {return hasMilestone('c',0)},
        done() { return player.c.points.gte(2)&&player.c.power.gte(5000) }
    },
    3: {
        requirementDescription: "3 Cytens",
        effectDescription: "保留歌曲、Arcaea、Lanota、魔王曲升级，自动购买Phidata升级",
        unlocked() {return hasMilestone('c',1)},
        done() { return player.c.points.gte(3) }
    },
    4: {
        requirementDescription: "4 Cytens",
        effectDescription: "保留Phigros挑战，解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',2)},
        done() { return player.c.points.gte(4) }
    },
    5: {
        requirementDescription: "5 Cytens",
        effectDescription: "保留PTT，再次解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',3)},
        done() { return player.c.points.gte(5) }
    },
    6: {
        requirementDescription: "6 Cytens",
        effectDescription: "自动购买魔王曲，再次解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',4)},
        done() { return player.c.points.gte(6) }
    },
    7: {
        requirementDescription: "10 Cytens",
        effectDescription: "解锁Cytus升级和更多魔王曲升级",
        unlocked() {return hasMilestone('c',5)},
        done() { return player.c.points.gte(10) }
    },
    8: {
        requirementDescription: "20 Cytens",
        effectDescription: "魔王曲什么也不重置，你可以购买最大魔王曲，自动获得PTT，解锁更多Cytus升级和可购买",
        unlocked() {return hasMilestone('c',6)},
        done() { return player.c.points.gte(20) }
    },
},
    buyables: {
			rows: 4,
			cols: 4,
			11: {
				title: "音乐世界",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.5))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e5).pow(x.pow(2))},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Notes获取量×" + format(data.effect))
         },
      unlocked() { return hasMilestone('c',2)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
    if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(1.5).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			12: {
				title: "音乐星球",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.6))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(2).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Phidata获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',4)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(1.6).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			13: {
				title: "音乐恒星",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.5))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e10).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>歌曲获取量×" + format(data.effect)+"（软上限后）" )
      },
      unlocked() { return hasMilestone('c',5)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(1.5).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			14: {
				title: "音乐星云",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(1.6).pow(1.5))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {
			let a=n(2)
     if(gcs("r",83)==1) a = a.mul(clickableEffect("r", 83))
				return a.pow(x)
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Cytus力量获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',6)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(1.5).div(1.6)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			21: {
				title: "音乐星团",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.8, x.mul(1.8).pow(1.8))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return n(1e5).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>源点获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',8)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.8).root(1.8).div(1.8)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			22: {
				title: "音乐星系",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(1.5).pow(2))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1.1).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Cyten获取量×" + format(data.effect))
      +" (软上限前)"},
      unlocked() { return hasUpgrade('c',13)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
  cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(2).div(1.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			23: {
				title: "音乐系群",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.5, x.add(-1).mul(1.6).pow(2))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(hasUpgrade('c',17)?1e10:100).pow(x.pow(hasUpgrade('lo',53)?1.2:1))},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>魔王曲获取需求/" + format(data.effect))},
      unlocked() { return hasUpgrade('c',14)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
    if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.5).root(2).div(1.6).sub(1)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			24: {
				title: "音乐宇宙",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.5, x.mul(2).pow(2))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e100).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>诗篇获取需求/" + format(data.effect))},
      unlocked() { return hasUpgrade('s',35)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.5).root(2).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
         style: {'height':'200px'},
			},
			31: {
				title: "音乐次元",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(2))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(18).log(18).mul(0.75).add(0.25).pow(0.5)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>物量获取量×" + format(data.effect))},
      unlocked() { return hasUpgrade('ch',33)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(2).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
			32: {
				title: "音乐维度",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.8, x.mul(2).pow(2))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e100).pow(x.mul(10))},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>谱面获取需求/" + format(data.effect))},
      unlocked() { return hasUpgrade('ch',34)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.8).root(2).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
			33: {
				title: "音乐空间",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.6, x.mul(2).pow(2.5))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(20).log(20).mul(0.75).add(0.25).pow(0.4)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>歌曲获取指数×" + format(data.effect))},
      unlocked() { return hasUpgrade('ch',35)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.6).root(2.5).div(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
			34: {
				title: "音乐领域",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.75, x.mul(2.25).pow(2.25))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(20).log(20).mul(0.6).add(0.4).pow(0.5)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>源点获取指数×" + format(data.effect))},
      unlocked() { return hasUpgrade('ch',36)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.75).root(2.25).div(2.25)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
			41: {
				title: "音乐无限",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(3).div(625)
     let cost = Decimal.pow(1.8, x.mul(2.4).pow(2))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e100).pow(x.mul(10))},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>曲包获取需求/" + format(data.effect))},
      unlocked() { return hasUpgrade('ch',42)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.8).root(2).div(2.4)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(625).cbrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
	    42: {
				title: "音乐永恒",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(3).div(625)
     let cost = Decimal.pow(1.5, x.mul(2.5).pow(2.5))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(10).log(10).mul(0.5).add(0.5).pow(0.25)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Cyten获取指数×" + format(data.effect))},
      unlocked() { return hasUpgrade('ch',43)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
         buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(1.5).root(2.5).div(2.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(625).cbrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
			43: {
				title: "音乐量子",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(3).div(625)
     let cost = Decimal.pow(2, x.mul(2.5).pow(2.5))
    return cost
                },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(10).log(10).mul(0.4).add(0.6).pow(0.25)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Cytus力量获取指数×" + format(data.effect))},
      unlocked() { return hasUpgrade('ch',44)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2).root(2.5).div(2.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(625).cbrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
			44: {
				title: "音乐现实",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(3).div(625)
     let cost = Decimal.pow(2.5, x.mul(2.5).pow(2.5))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x.div(10).add(1).pow(3).max(1)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>蛇每次点击获取量×" + format(data.effect))},
      unlocked() { return hasUpgrade('sp',12)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
         buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
       buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.power.max(1).log(2.5).root(2).div(2.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(625).cbrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

         style: {'height':'200px'},
			},
		},
		challenges: {
    11: {
        name: "“EASY”",
        challengeDescription: "歌曲、源点、Phidata获取量被极大削弱",
        goalDescription:"1e111 Notes",
        rewardDescription:"自动购买最大诗篇，解锁更多升级",
        style: {'height':'300px'},
        unlocked(){unlock= false
        if(hasUpgrade('c',14)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1e111')},
    },
    12: {
        name: "HARD²",
        challengeDescription: "进入上一个挑战的同时，Note获取量被极大削弱",
        countsas:[11],
        goalDescription:"2e367 Notes",
        rewardDescription:"解锁一些谱面升级",
        style: {'height':'300px'},
        unlocked(){unlock= false
        if(hasUpgrade('ch',17)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('2e367')},
    },
    13: {
        name: "CHAOS∞",
        challengeDescription() {return "进入上一个挑战的同时，Note,歌曲,源点,Phidata获取量每tick变成原来的0.9次方<br>当前效果：^"+format(n(0.9).pow(player.c.challengeTime))},
        countsas:[12],
        onEnter() {player.c.challengeTime=new Decimal(0)},
        onExit() {player.c.challengeTime=new Decimal(0)},
        goalDescription:"1e11111 Notes",
        rewardDescription:"解锁更多升级",
        style: {'height':'350px'},
        unlocked(){unlock= false
        if(hasUpgrade('ch',24)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1e11111')},
    },
    14: {
        name: "“CHAOS∞²”",
        challengeDescription() {return "Note获取量变为原来的log1.0001，并且^0.05"},
        goalDescription:"300 Notes",
        rewardDescription:"解锁两个Arcaea升级和更多谱面升级",
        style: {'height':'350px'},
        unlocked(){unlock= false
        if(hasUpgrade('ch',34)) unlock=true
   return unlock
        },
        canComplete: function() {return player.points.gte(300)},
    },
},
    tabFormat: {
    "Milestones": {
        content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.p.points) + ' Phidata<br>你正在获得 ' + format(n(tmp.c.resetGain).mul(tmp.c.passiveGeneration))+' Cyten每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '你有 ' + format(player.c.power)+' Cytus力量'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "milestones",
     ],},
    "Buyables": {
        content: [ ["infobox","buyBox"],
    "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.c.power)+' Cytus力量'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    "buyables",
     ],
     unlocked(){return hasMilestone('c',2)}
   },
    "Upgrades": {
        content: [ ["infobox","upgBox"],
        "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('c',7)}
    },
    "Challenges": {
        content: [ ["infobox","chalBox"],
   "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('c',15)}
},

},
})//Cytus
addLayer("ch", {
  infoboxes: {
 introBox: {
    title: "层级7--Chart",
    body(){
      return "欢迎来到第七层！本层级也是静态层级，在本层级，你可以解锁相当有趣的功能！<br>资源名称由来：音乐游戏中“Chart”翻译为谱面"},
    },
    chartBox: {title: "谱面",
    body(){
      return "欢迎来到谱面！在这里，你需要通过Note来换取物量和谱面，购买升级，增长谱面的定数"},},
      phiBox: {title: "Phigros",
    body(){
      return "当你解锁了这一部分之后，有趣的地方开始了！首先，基于当前的物量，你将会获得一些Phigros-Note(PN)，你需要根据当前的PN购买特殊Note，这些特殊note会给一些东西增益，同时，定数会提升特殊note的效果"},},
      ketiBox: {title: "课题模式",
    body(){
      return "欢迎来到课题模式！和Phigros中的课题模式类似，你会解锁六个可点击，点击它可以增加或者减少对应歌曲的定数，接着会根据你的当前rks和选择歌的定数来决定你最后的分数，基于分数和总难度，你可以获得课题能量，用来购买升级和提供加成。当然，你选的歌曲的定数越高，对应的不确定性就越大，所以最后的分数波动可能会很大，要多次尝试才能取得较高的分数哦！注意：谱面定数最高为16，最低为1！"},},},
    name: "Chart",
    symbol: "Ch",
    position: 2,
    startData() { return {
        unlocked() { return hasUpgrade('c',17)||hasAchievement('A',111)},
		points: n(0),
		note: n(0),//物量
		dif: n(1),//difficulty
		pnote: n(0),//Phigros-Note
		tap: n(0),//蓝键
		drag: n(0),//黄键
		flick: n(0),//红键
		hold: n(0),//长条
		dif1: n(1),//课题模式定数1
		dif2: n(1),//课题模式定数2
		dif3: n(1),//课题模式定数3
		difmax:n(16),//最大谱面难度
		sco: n(0),//课题模式总分
		difa: n(0),//课题模式总定数
		en: n(0),//课题能量
		ennow: n(0),//当前课题能量
		enp: n(0),//课题力量
    }},
    color: "#ffe000",
    requires(){
		mult = new Decimal('1e20000')
		
	if (hasUpgrade('lo', 61)) mult = mult.pow(buyableEffect('lo',22))
	if (hasUpgrade('j', 23)) mult = mult.pow(0.95)
	if (hasUpgrade('j',26)) mult = mult.pow(upgradeEffect('j',26))
	mult = mult.pow(tmp.j.pdqja6)
		
if (hasUpgrade('lo', 35))mult =mult.div(tmp.lo.noteEffect2)
        if(buyableEffect('c',32).gt(1))mult =mult.div(buyableEffect('c',32))
		return mult;
	},  
    resource: "谱面",
    baseResource: " Notes", 
    baseAmount() {return player.points}, 
    type: "static", 
    branches(){return ['p']},
	base(){
		mult = new Decimal('1e2000')
		
	if (hasUpgrade('lo', 61)) mult = mult.pow(buyableEffect('lo',22))
	if (hasUpgrade('j', 23)) mult = mult.pow(0.95)
	if (hasUpgrade('j',26)) mult = mult.pow(upgradeEffect('j',26))
	mult = mult.pow(tmp.j.pdqja6)
		
	
		return mult;
	}, 
    exponent: 1.5, 
	gainMult() { //chgainmult
		mult = n(1)
		return mult
	},
    gainExp() { //chgainexp
		exp = n(1)
		return exp
	},
	directMult() { //chdirectmult
		mult = n(1)
		return mult
	},
    note() {
      mult= player.points.add(10).log(4).max(1).pow(0.5).div(4).max(0)
		if(mult.gte(125))mult=mult.pow(1/3).mul(25);
		if(mult.gte(175))mult=mult.mul(175).pow(1/2);
      if(hasUpgrade('ch',14)) mult=mult.times(upgradeEffect('ch',14))
    if(hasUpgrade('ch',12)) mult=mult.times(upgradeEffect('ch',12))
    if(hasUpgrade('ch',16)) mult=mult.times(upgradeEffect('ch',16))
    if(hasUpgrade('ch',31)) mult=mult.times(upgradeEffect('ch',31))
    if(hasUpgrade('ch',33)) mult=mult.times(1.1)
    if(buyableEffect('c',31).gte(1)) mult=mult.times(buyableEffect('c',31))
      return mult
    },
    dif() {
      dif = player.ch.note.div(50).pow(0.8).max(1)
	if(dif.gte(10))dif = dif.pow(2).mul(1000).pow(1/5)
      return dif
    },
    pnote() {
     pnote = player.ch.note.div(10).pow(0.8).max(0)
      return pnote.floor()
    },
    tapEff() {
      tap = n(2).pow(player.ch.tap.max(0))
    tap=tap.pow(player.ch.dif)
      return tap},
    dragEff() {
      drag = player.ch.drag.add(1).log(10).div(30).add(1).min(1.5)
    drag=drag.pow(player.ch.dif.max(1).log(10).add(1)).min(2)
      return drag},
    flickEff() {
      flick = player.ch.flick.add(1).log(5).div(5).add(1).min(2)
    flick=flick.pow(player.ch.dif.max(1).log(10).add(1)).min(3)
      return flick},
    holdEff() {
      hold = player.ch.hold.add(1).log(100).div(25).add(1).min(1.2)
    hold = hold.pow(player.ch.dif.max(1).log(20).add(1)).min(1.44)
      return hold},
    keti() {
      rks=player.p.rks
    dif1=player.ch.dif1
    dif2=player.ch.dif2
    dif3=player.ch.dif3
    a1=n(Math.random()).add(0.1).pow(0.05)
    a2=n(Math.random()).add(0.1).pow(0.05)
    a3=n(Math.random()).add(0.1).pow(0.05)
    if(hasUpgrade('ch',42)){
     a1=n(Math.random()).pow(0.5).add(0.1).pow(0.05)
     a2=n(Math.random()).pow(0.5).add(0.1).pow(0.05)
     a3=n(Math.random()).pow(0.5).add(0.1).pow(0.05)
    }
    if(hasUpgrade('ch',44)){
     a1=n(Math.random()).pow(0.2).add(0.1).pow(0.1)
     a2=n(Math.random()).pow(0.2).add(0.1).pow(0.1)
     a3=n(Math.random()).pow(0.2).add(0.1).pow(0.1)
    }
    if(hasUpgrade('ch',52)){
      a1=n(Math.random()).pow(0.05).add(0.2).pow(0.2)
     a2=n(Math.random()).pow(0.05).add(0.2).pow(0.2)
     a3=n(Math.random()).pow(0.05).add(0.2).pow(0.2)
    }
    sco1=rks.div(dif1).sub(0.3).pow(0.3).mul(1000000).mul(a1).mul(tmp.a.drEff5)
    sco2=rks.div(dif2).sub(0.3).pow(0.3).mul(1000000).mul(a2).mul(tmp.a.drEff5)
    sco3=rks.div(dif3).sub(0.3).pow(0.3).mul(1000000).mul(a3).mul(tmp.a.drEff5)
    if(sco1.gte(960000)) sco1=sco1.sub(960000).pow(0.75).add(960000).min(1000000)
    if(sco2.gte(960000)) sco2=sco2.sub(960000).pow(0.75).add(960000).min(1000000)
    if(sco3.gte(960000)) sco3=sco3.sub(960000).pow(0.75).add(960000).min(1000000)
    return sco1.add(sco2).add(sco3)
    },
    enp() {//课题力量
      let en=player.ch.en
      let enp=n(10).pow(en)
     if(hasUpgrade('ch',47)) enp=enp.times(upgradeEffect('ch',47))
     if(tmp.a.snEff1.gte(1)) enp=enp.times(tmp.a.snEff1)
     if(hasUpgrade('ch',56)) enp=enp.times(upgradeEffect('ch',56))
     if(hasUpgrade('ri',22)) enp=enp.times(upgradeEffect('ri',22))
     if(gcs("r",151)==1) enp = enp.times(clickableEffect("r", 151))
     if(gcs("r",152)==1) enp = enp.times(clickableEffect("r", 152))
     if(hasMilestone('r',0)) enp=enp.times(10)
      enp=enp.times(tmp.j.pdqja4)
      if(gcs('j',11)==1&&player.j.pdqj0.lt(325)&&hasUpgrade('ri',26)) enp=enp.times(upgradeEffect('ri',26))
      if(hasUpgrade('ri',27)) enp=enp.times(upgradeEffect('ri',27))
      
     if(tmp.a.drEff3.gte(1)) enp=enp.pow(tmp.a.drEff3)
     if(gcs('j',11)==1) enp=enp.pow(tmp.j.pdqj2)
      return enp
    },
    enpEff() {//课题力量效果
      enp=player.ch.enp
      eff=enp.pow(2)
      if(hasUpgrade('ch',54)) eff=enp.pow(3)
      if(hasUpgrade('j',16)) eff=eff.pow(1.5)
      return eff.max(1)
},
    row: 3, 
    autoPrestige() {return hasUpgrade('ch',23)},
    resetsNothing() {return hasUpgrade('ch',23)},
    hotkeys: [
        {key: "h", description: "H: Reset for charts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return hasUpgrade('c',17)||hasAchievement('A',111)},
    update(diff) {
     if(player._devSpeed.neq(0)) {
			player.ch.note = tmp.ch.note.max(player.ch.note)
			if(!hasUpgrade('ch',37)) player.ch.dif = tmp.ch.dif.max(player.ch.dif).min(player.p.rks)
			if(hasUpgrade('ch',37)) player.ch.dif = tmp.ch.dif.max(player.ch.dif)
			player.ch.pnote = tmp.ch.pnote.max(player.ch.pnote)
			player.ch.tap =gba('ch',11)
	player.ch.drag =gba('ch',12)
		player.ch.flick =gba('ch',21)
	player.ch.hold =gba('ch',22)
	if(hasUpgrade('j',11)) player.ch.difmax=n(20)
	else player.ch.difmax=n(16)
	if(hasUpgrade('ch',48)) player.ch.difmax = player.ch.difmax.add(4)
	if (hasUpgrade('ch',41)) player.ch.enp = player.ch.enp.add(tmp.ch.enp.mul(diff));
			if (hasUpgrade('ch',41)&&layers.ch.buyables[11].canAfford()) layers.ch.buyables[11].buy()
			if (hasUpgrade('ch',41)&&layers.ch.buyables[12].canAfford()) layers.ch.buyables[12].buy()
			if (hasUpgrade('ch',41)&&layers.ch.buyables[21].canAfford()) layers.ch.buyables[21].buy()
			if (hasUpgrade('ch',41)&&layers.ch.buyables[22].canAfford()) layers.ch.buyables[22].buy()
		if (hasUpgrade('sp',26)) layers.ch.clickables[31].onClick()
     }
		},
		canBuyMax(){return hasUpgrade('ch',16)},
		doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "t") {
        kept.push("milestones","upgrades","en","enp")
     }
     if(hasMilestone('r',3)) kept.push("upgrades")
     if(hasMilestone('r',4)) kept.push("buyables","tap","drag","flick","hold","dif1","dif2","dif3","sco","difa")
     if(hasMilestone('r',5)) kept.push("milestones")
     if(hasUpgrade('j',12)) kept.push("en")
     layerDataReset(this.layer, kept)
        }
    },
    tabFormat: {
   "Milestones": {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
     "blank",
    "milestones",
],
    },
   "Chart&&Upgrades": {
        content: [
   ["infobox","chartBox"],
   "main-display",
    "prestige-button",
     "blank",
        ["display-text",
      function() {return '当前物量: ' + format(player.ch.note) + '<br>物量对应定数：'+format(player.ch.dif)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
       ["display-text",
      function() {if(!hasUpgrade('ch',37)) return '定数上限为当前RKS: ' + format(player.p.rks)+ '<br>确切来说，'+player.p.rks},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"}],
        ["display-text",
      function() {return '确切来说，当前物量: ' + player.ch.note + '<br>物量对应定数：'+player.ch.dif},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],
"upgrades",
],
unlocked(){return hasMilestone('ch',1)}
    },
   "Phigros": {
        content: [ ["infobox","phiBox"],
   "main-display",
    "prestige-button",
     "blank",
    ["display-text",
      function() { return '你有 ' + format(player.ch.pnote) + ' 个Phigros-Note(PN)<br>下一个需要 '+format(player.ch.pnote.add(1).pow(1.25).mul(10))+' 物量<br>当前物量：'+format(player.ch.note)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
     "blank",
    ["display-text",
      function() {if(hasUpgrade('ch',21)) return '你有 ' + format(player.ch.tap) + ' 个蓝键<br>蓝键对应效果：Cytus力量×'+format(tmp.ch.tapEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
      ["display-text",
      function() {if(hasUpgrade('ch',22)) return '你有 ' + format(player.ch.drag) + ' 个黄键<br>黄键对应效果：Note^'+format(tmp.ch.dragEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
       ["display-text",
      function() {if(hasUpgrade('ch',25)) return '你有 ' + format(player.ch.flick) + ' 个红键<br>红键对应效果：Cyten获取量^'+format(tmp.ch.flickEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
        ["display-text",
      function() {if(hasUpgrade('ch',27)) return '你有 ' + format(player.ch.hold) + ' 个长条<br>长条对应效果：歌曲,源点,Phidata获取指数×'+format(tmp.ch.holdEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
"buyables",
],
unlocked(){return hasUpgrade('ch',21)}
    },
   "Challenge Mode": {
    content: [ ["infobox","ketiBox"],
    "main-display",
    "prestige-button",
     "blank",
     ["display-text",
      function() {if(hasUpgrade('ch',27)) return '谱面1定数：' + format(player.ch.dif1)+'<br>谱面2定数：' + format(player.ch.dif2)+'<br>谱面3定数：' + format(player.ch.dif3)},
      
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     "blank",
     ["display-text",
      function() {if(hasUpgrade('ch',27)) return '课题模式总分：' + format(player.ch.sco)+'<br>总难度：'+format(player.ch.difa)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
     ["display-text",
      function() {if(hasUpgrade('ch',27)) return '最佳课题能量：' + format(player.ch.en)+'<br>本次课题能量：'+ format(player.ch.ennow)},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('ch',27)) return '确切来说，最佳课题能量：' +player.ch.en+'<br>本次课题能量：'+player.ch.ennow},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],
     "blank",
     ["display-text",
      function() {if(hasUpgrade('ch',41)) return '你有' +format(player.ch.enp)+'课题力量'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('ch',41)) return '你每秒获得' +format(tmp.ch.enp)+'课题力量(基于课题能量)<br>课题力量使Cytus力量变为原来的'+format(tmp.ch.enpEff)+'倍'},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"}],
     "clickables",
     ['row',[['upgrade',31],['upgrade',32],['upgrade',33],['upgrade',34],['upgrade',35],['upgrade',36],['upgrade',37],['upgrade',38]]],
     ['row',[['upgrade',41],['upgrade',42],['upgrade',43],['upgrade',44],['upgrade',45],['upgrade',46],['upgrade',47],['upgrade',48]]],
     ['row',[['upgrade',51],['upgrade',52],['upgrade',53],['upgrade',54],['upgrade',55],['upgrade',56],['upgrade',57]]],
],
unlocked(){return hasUpgrade('ch',27)}
    },
    },
    milestones: {
    0: {
        requirementDescription: "获得1谱面",
        effectDescription: "Cytus里程碑对谱面也生效，Notes ×1e960",
        done() { return player.ch.points.gt(0) }
    },
    1: {
        requirementDescription: "获得2谱面",
        effectDescription: "解锁标签页“谱面”，Notes×1e1145",
        done() { return player.ch.points.gt(1) }
    },
},
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
   upgrades:{
  11:{ 
    fullDisplay() {return "Introduction<br>基于物量的Cyten乘数<br>当前效果："+format(this.effect())+"×<br>需要：50物量 && 2谱面"},
    canAfford() {return player.ch.note.gte(50)},
    cost() {return n(2)},
      effect() { return player.ch.note.add(1).pow(3)},
  },
  12:{ 
    fullDisplay() {return "Glaciaxion EZ 1.0<br>基于谱面提升物量获取量<br>当前效果："+format(this.effect())+"×<br>需要：52.6物量 && 4谱面"},
    unlocked(){return hasUpgrade('ch',11)},
    canAfford() {return player.ch.note.gte(52.6)},
    cost() {return n(4)},
      effect() { eff= player.ch.points.add(10).log(10)
        if(eff.gte(2)) eff= eff.mul(8).pow(0.25)
        return eff
      },
  },
  13:{ 
    fullDisplay() {return "Initialize EZ 2.5<br>基于谱面和物量增加Note乘数<br>当前效果："+format(this.effect())+"×<br>需要：60.34物量 && 5谱面"},
    unlocked(){return hasUpgrade('ch',12)},
    canAfford() {return player.ch.note.gte(60.34)},
    cost() {return n(5)},
      effect() { eff= n(1e100).pow(player.ch.points.add(1).mul(2))
        eff= eff.mul(n(1e10).pow(player.ch.note))
        if(eff.gte('1e10000')) eff= eff.mul('1e30000').pow(0.25)
        return eff
      },
  },
  14:{ 
	  fullDisplay() {return "dBdoll HD 3.5<br>Loaded Notes提升物量获取<br>当前效果："+format(this.effect())+"×<br>需要：72.85物量 && 6谱面"},
    unlocked(){return hasUpgrade('ch',13)},
    canAfford() {return player.ch.note.gte(72.85)},
    cost() {return new Decimal(6)},
      effect() { eff= player.lo.note.add(10).log(10).root(3)
        if(eff.gte(2.2)) eff= eff.mul(23.4256).pow(0.2)
        if(eff.gte(2.3)) eff= eff.mul(27.9841).pow(0.2)
        return eff
      },
  },
  15:{ 
    fullDisplay() {return "SIGMA EZ 5.0<br>打破Phidata获取量上限并基于定数提升它<br>当前效果："+format(this.effect())+"×<br>需要：137.82物量 && 7谱面"},
    unlocked(){return hasUpgrade('ch',14)},
    canAfford() {return player.ch.note.gte(137.82)},
    cost() {return n(7)},
      effect() { eff= n(100).pow(player.ch.dif.mul(100).pow(0.3).max(0))
        return eff
      },
  },
  16:{ 
    fullDisplay() {return "Chronostasis EZ 6.5<br>你可以购买最大谱面，基于Cyten提升物量<br>当前效果："+format(this.effect())+"×<br>需要：137.95物量 && 8谱面"},
    unlocked(){return hasUpgrade('ch',15)},
    canAfford() {return player.ch.note.gte(137.95)},
    cost() {return new Decimal(8)},
      effect() { eff= player.c.points.add(1).log(10).pow(0.2).max(1)
        if(eff.gte(2.3)) eff= eff.mul(27.9841).pow(0.2)
        if(eff.gte(2.6)) eff= eff.mul(45.6976).pow(0.2)
        return eff
      },
  },
  17:{ 
    fullDisplay() {return "DESTRUCTION 3,2,1 EZ 7.0<br>改善Cyten对Cytus力量公式(^2--^3)，解锁下一个Cytus挑战<br>需要：214物量 && 8谱面"},
    unlocked(){return hasUpgrade('ch',16)},
    canAfford() {return player.ch.note.gte(214)},
    cost() {return n(8)},
  },
  21:{ 
    fullDisplay() {return "GOODRAGE HD 7.5<br>解锁Phigros页面，Note^1.01<br>需要：375物量 && 8谱面"},
    unlocked(){return hasChallenge('c',12)},
    canAfford() {return player.ch.note.gte(375)},
    cost() {return new Decimal(8)},
  },
  22:{ 
    fullDisplay() {return "Diamond Eyes HD 8.2<br>解锁特殊note中的黄键<br>需要：456物量 && 11谱面"},
    unlocked(){return hasUpgrade('ch',21)},
    canAfford() {return player.ch.note.gte(456)},
    cost() {return new Decimal(11)},
  },
  23:{ 
    fullDisplay() {return "Aphasia HD 8.8<br>自动获得谱面并且它们不重置任何东西，更改RKS计算公式<br>需要：500物量 && 15谱面"},
    unlocked(){return hasUpgrade('ch',22)},
    canAfford() {return player.ch.note.gte(500)},
    cost() {return new Decimal(15)},
  },
  24:{ 
    fullDisplay() {return "Another Me HD 9.2<br>解锁第三个Cytus挑战，自动购买Cytus可购买<br>你知道吗，两个AM HD定数一样！<br>需要：530物量 && 15谱面"},
    unlocked(){return hasUpgrade('ch',23)},
    canAfford() {return player.ch.note.gte(530)},
    cost() {return new Decimal(15)},
  },
  25:{ 
    fullDisplay() {return "XING HD 9.9<br>Cytus可购买不消耗任何东西，解锁特殊note中的红键<br>需要：535物量 && 16谱面"},
    unlocked(){return hasChallenge('c',13)},
    canAfford() {return player.ch.note.gte(535)},
    cost() {return new Decimal(16)},
  },
  26:{ 
    fullDisplay() {return "Secret Illumination HD 10.5<br>Notes获取量^1.02<br>作者更新这里时，Phigros 3.3.0（Rotaeno联动）更新！<br>需要：610物量 && 17谱面"},
    unlocked(){return hasUpgrade('ch',25)},
    canAfford() {return player.ch.note.gte(610)},
    cost() {return new Decimal(17)},
  },
  27:{ 
    fullDisplay() {return "Fractured Angel HD 10.9<br>Notes获取量^1.05，解锁特殊note中的长条，解锁课题模式<br>需要：750物量 && 27谱面"},
    unlocked(){return hasUpgrade('ch',26)},
  canAfford() {return player.ch.note.gte(750)},
    cost() {return new Decimal(27)},
  },
  31:{ 
    fullDisplay() {return "もペもペ IN 11.1<br>课题能量增益物量获取<br>当前效果：×"+format(this.effect())+"<br>需要：850物量 && 31谱面"},
    unlocked(){return hasUpgrade('ch',27)},
  canAfford() {return player.ch.note.gte(850)},
    cost() {return new Decimal(31)},
    effect() { eff= player.ch.en.max(1).pow(0.2)
        return eff
      },
  },
  32:{ 
    fullDisplay() {return "Inverted World HD 11.2<br>倒打之力！根据课题能量的倒数反向增益Cyten和Phidata获取量指数<br>当前效果：÷"+format(this.effect())+"<br>需要：1200物量 && 34谱面"},
    unlocked(){return hasUpgrade('ch',31)},
  canAfford() {return player.ch.note.gte(1200)},
    cost() {return new Decimal(34)},
    effect() { eff= new Decimal(1).div(player.ch.en.max(1)).pow(0.05).max(0.6)
        return eff.min(1)
      },
  },
  33:{ 
    fullDisplay() {return "Temporal Shifting HD 11.5<br>解锁第九个Cytus可购买（没有自动购买），物量*1.1<br>需要：1275物量 && 35谱面"},
    unlocked(){return hasUpgrade('ch',32)},
  canAfford() {return player.ch.note.gte(1275)},
    cost() {return new Decimal(35)},
  },
  34:{ 
    fullDisplay() {return "Dead Soul HD 11.7<br>解锁第十个Cytus可购买，解锁第四个Cytus挑战<br>需要：1666物量 && 36谱面"},
    unlocked(){return hasUpgrade('ch',33)},
  canAfford() {return player.ch.note.gte(1666)},
    cost() {return new Decimal(36)},
  },
  35:{ 
    fullDisplay() {return "volcanic HD 11.9<br>解锁第11个Cytus可购买，谱面数量增益Notes<br>当前效果：×"+format(this.effect())+"<br>需要：1800物量 && 44谱面"},
    unlocked(){return hasUpgrade('a',46)},
  canAfford() {return player.ch.note.gte(1800)},
    cost() {return new Decimal(44)},
    effect() { eff= new Decimal(1e100).pow(player.ch.points)
    if(eff.gte('1e10000')) eff=new Decimal(10).pow(eff.log(10).sub(10000).pow(0.9).add(10000))
        return eff.max(1)
      },
  },
  36:{ 
    fullDisplay() {return "Ad Astra Per Aspera HD 12.1<br>解锁第12个Cytus可购买，基于RKS增益Notes<br>当前效果：×"+format(this.effect())+"<br>需要：2222物量 && 70谱面"},
    unlocked(){return hasUpgrade('a',47)},
  canAfford() {return player.ch.note.gte(2222)},
    cost() {return new Decimal(70)},
    effect() { eff= new Decimal('1e1000').pow(player.p.rks)
    if(eff.gte('1e8000')) eff=new Decimal(10).pow(eff.log(10).sub(8000).pow(0.85).add(8000))
        return eff.max(1)
      },
  },
  37:{ 
    fullDisplay() {return "今年も「雪降り、メリクリ」目指して頑張り “IN Ⅰ2”<br>基于课题能量增益Notes，谱面定数不再有上限，解锁下一个层级，曲包<br>当前效果：×"+format(this.effect())+"<br>需要：2500物量 && 100谱面"},
    unlocked(){return hasUpgrade('ch',36)},
  canAfford() {return player.ch.note.gte(2500)},
  tooltip: "这首歌是Phigros 2023年的愚人节曲，当你玩的时候，他会告诉你难度是”IN Ⅰ2”，但是当你打到一半的时候，他的难度就会变成SP Lv.?", 
    cost() {return new Decimal(100)},
    effect() { eff= new Decimal('1e1200').pow(player.ch.en)
    if(eff.gte('1e5000')&&!hasUpgrade('lo',71)) eff=new Decimal(10).pow(eff.log(10).sub(5000).pow(0.95).add(5000))
        return eff.max(1)
      },
  },
  41:{ 
    fullDisplay() {return "Kerberos HD 12.4<br>基于课题能量产生课题力量，自动购买Phigros-Note<br>需要：2.8课题能量 && 135谱面"},
    unlocked(){return hasMilestone('sp',2)},
  canAfford() {return player.ch.en.gte(2.8)},
    cost() {return n(135)},
  },
  42:{ 
    fullDisplay() {return "Leave All Behind IN 12.7<br>解锁第13个Cytus可购买，课题模式中“运气分”的计算改变（更容易获得高分）<br>需要：50000课题力量 && 142谱面"},
    unlocked(){return hasUpgrade('ch',41)},
    onPurchase() {player.ch.enp=player.ch.enp.sub(5e4)},
  canAfford() {return player.ch.enp.gte(5e4)},
    cost() {return n(142)},
  },
  43:{ 
    fullDisplay() {return "NYA!!! IN 12.9<br>解锁第14个Cytus可购买，基于课题力量增益Notes获取量<br>当前效果：×"+format(this.effect())+"<br>需要：75000课题力量 && 143谱面"},
    unlocked(){return hasUpgrade('ch',42)},
onPurchase() {player.ch.enp=player.ch.enp.sub(7.5e4)},
  canAfford() {return player.ch.enp.gte(7.5e4)},
    cost() {return new Decimal(143)},
    effect() { eff= player.ch.enp.pow(1000)
    if(eff.gte('1e10000')) eff=new Decimal(10).pow(eff.log(10).sub(10000).pow(0.8).add(10000))
        return eff.max(1)
      },
  },
  44:{ 
    fullDisplay() {return "Aphasia IN 13.1<br>解锁第15个Cytus可购买，课题模式中“运气分”的计算再次改变（更容易获得高分）<br>需要：80000课题力量 && 164谱面"},
    unlocked(){return hasUpgrade('ch',43)},
onPurchase() {player.ch.enp=player.ch.enp.sub(8e4)},
  canAfford() {return player.ch.enp.gte(8e4)},
    cost() {return n(164)},
  },
  45:{ 
    fullDisplay() {return "Snow Desert IN 13.3<br>基于曲包增加歌曲获得量<br>当前效果：×"+format(this.effect())+"<br>需要：90000课题力量 && 170谱面"},
    unlocked(){return hasUpgrade('ch',44)},
onPurchase() {player.ch.enp=player.ch.enp.sub(9e4)},
  canAfford() {return player.ch.enp.gte(9e4)},
    cost() {return n(170)},
    effect() { eff= n('1e100').pow(player.sp.points)
    if(eff.gte('1e1000')) eff=n(10).pow(eff.log(10).sub(1000).pow(0.8).add(1000))
        return eff.max(1)
      },
  },
  46:{ 
    fullDisplay() {return "I Must Say No IN 13.5<br>歌曲获取指数+0.01<br>需要：100000课题力量 && 171谱面"},
    unlocked(){return hasUpgrade('ch',45)},
onPurchase() {player.ch.enp=player.ch.enp.sub(1e5)},
  canAfford() {return player.ch.enp.gte(1e5)},
    cost() {return n(171)},
  },
  47:{ 
    fullDisplay() {return "Journey with You IN 13.8<br>Phidata的获取指数变成原来的1.01倍，基于超过3的课题能量增益课题力量<br>当前效果：×"+format(this.effect())+"<br>需要：100000课题力量 && 173谱面"},
    unlocked(){return hasUpgrade('ch',46)},
onPurchase() {player.ch.enp=player.ch.enp.sub(1e5)},
  canAfford() {return player.ch.enp.gte(1e5)},
    cost() {return n(173)},
    effect() { eff= n(1000).pow(player.ch.en.sub(3))
    if(eff.gte(1e10)) eff=n(10).pow(eff.log(10).sub(10).pow(0.9).add(10))
        return eff.max(1)
      },
  },
  51:{ 
    fullDisplay() {return "Unorthodox Thoughts IN 13.9<br>源点获取指数+0.001<br>需要：3000物量 && 200谱面"},
    unlocked(){return hasUpgrade('sp',13)},
  canAfford() {return player.ch.note.gte(3000)},
    cost() {return new Decimal(200)},
  },
  52:{ 
    fullDisplay() {return "Realms IN 14.1<br>课题模式中“运气分”的计算最后一次改变（最容易获得高分）<br>需要：1e18课题力量 && 230谱面"},
    unlocked(){return hasUpgrade('ch',51)},
onPurchase() {player.ch.enp=player.ch.enp.sub(1e18)},
  canAfford() {return player.ch.enp.gte(1e18)},
    cost() {return new Decimal(230)},
  },
  53:{ 
    fullDisplay() {return "Bonus Time IN 14.2<br>解锁一个蛇可点击，可以提供双倍的蛇增加量<br>需要：1e20 课题力量 && 240谱面"},
    unlocked(){return hasUpgrade('ch',52)},
onPurchase() {player.ch.enp=player.ch.enp.sub(1e20)},
  canAfford() {return player.ch.enp.gte(1e20)},
    cost() {return new Decimal(240)},
  },
  54:{ 
    fullDisplay() {return "Speed Up! IN 14.3<br>解锁第四个蛇的效果，课题力量对Cytus力量的增益变为^3<br>需要：3100物量 && 250谱面"},
    unlocked(){return hasUpgrade('ch',53)},
  canAfford() {return player.ch.note.gte(3100)},
    cost() {return new Decimal(250)},
  },
  55:{ 
    fullDisplay() {return "Eltaw IN 14.4<br>解锁下一个可以提供双倍的蛇增加量的可点击，谱面升级不再消耗课题力量，蛇长度不再重置<br>需要：3200物量 && 260谱面"},
    unlocked(){return hasUpgrade('ch',54)},
  canAfford() {return player.ch.note.gte(3200)},
    cost() {return new Decimal(260)},
  },
  56:{ 
    fullDisplay() {return "狂喜蘭舞 IN 14.5<br>基于课题力量增益课题力量<br>当前效果：×"+format(this.effect())+"<br>需要：1e21 课题力量 && 270谱面"},
    unlocked(){return hasUpgrade('ch',55)},
  canAfford() {return player.ch.enp.gte(1e21)},
    cost() {return new Decimal(270)},
    effect() {
      eff=player.ch.enp.add(10).log(10).pow(0.8)
      return eff
    },
  },
  57:{ 
    fullDisplay() {return "Future Mind IN 14.6<br>在“蛇”页面解锁“龙”，解锁第一个龙的效果<br>需要：3250物量 && 280谱面" },
    unlocked(){return hasUpgrade('ch',56)},
  canAfford() {return player.ch.note.gte(3250)},
    cost() {return new Decimal(280)},
  },
  
  
  
  
  38:{ 
    fullDisplay() {return "loader3229的认可<br>课题能量增加Loaded Notes获取<br>当前效果：×"+format(this.effect())+"<br>需要：6.01课题能量"},
    unlocked(){return hasMilestone('sp',2)},
  canAfford() {return player.ch.en.gte(6.01)},
    cost() {return new Decimal(0)},
    effect() { eff= player.ch.en
        return eff.max(1)
      },
  },
  48:{ 
    fullDisplay() {return "SIGMA(Haocore Mix) ~ Regrets of The Yellow Tulip ~ SP ?<br>增加最大课题模式谱面定数<br>需要：4000物量"},
    unlocked(){return hasMilestone('sp',2)},
  canAfford() {return player.ch.note.gte(4000)},
    cost() {return new Decimal(0)},
  },
},
   buyables:{
  11: {
				title: "获得一个蓝键",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.pow(2)
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('ch',21)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.ch.pnote.max(1).root(2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				sellOne() {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].sub(1).max(0)},
				sellAll() {player[this.layer].buyables[this.id] = n(0)},
     style: {'height':'100px'},
			},
  12: {
				title: "获得一个黄键",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.mul(3).pow(hasUpgrade('lo',116)?2:2.5).div(3)
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('ch',22)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.ch.pnote.max(1).mul(3).root(hasUpgrade('lo',116)?2:2.5).div(3)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				sellOne() {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].sub(1).max(0)},
				sellAll() {player[this.layer].buyables[this.id] = n(0)},
     style: {'height':'100px'},
			},
	21: {
				title: "获得一个红键",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.mul(2.5).pow(hasUpgrade('lo',116)?2:2.5).div(2.5)
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('ch',25)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.ch.pnote.max(1).mul(2.5).root(hasUpgrade('lo',116)?2:2.5).div(2.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				sellOne() {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].sub(1).max(0)},
				sellAll() {player[this.layer].buyables[this.id] = n(0)},
     style: {'height':'100px'},
			},
	22: {
				title: "获得一个长条",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.mul(hasUpgrade('lo',116)?2:3).pow(2).div(2)
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('ch',27)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.ch.pnote.max(1).mul(2).root(2).div(hasUpgrade('lo',116)?2:3)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
				sellOne() {player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].sub(1).max(0)},
				sellAll() {player[this.layer].buyables[this.id] = n(0)},
     style: {'height':'100px'},
			},
},
   clickables:{
    11: {
      title() {return "+1"},
      display() {return "将谱面1定数+1"},
      onClick() {player.ch.dif1=player.ch.dif1.add(1).min(player.ch.difmax)},
      onHold() {player.ch.dif1=player.ch.dif1.add(1).min(player.ch.difmax)},
      canClick() {return true},
    },
    12: {
      title() {return "+1"},
      display() {return "将谱面2定数+1"},
      onClick() {player.ch.dif2=player.ch.dif2.add(1).min(player.ch.difmax)},
      onHold() {player.ch.dif2=player.ch.dif2.add(1).min(player.ch.difmax)},
      canClick() {return true},
    },
    13: {
      title() {return "+1"},
      display() {return "将谱面3定数+1"},
      onClick() {player.ch.dif3=player.ch.dif3.add(1).min(player.ch.difmax)},
      onHold() {player.ch.dif3=player.ch.dif3.add(1).min(player.ch.difmax)},
      canClick() {return true},
    },
    21: {
      title() {return "-1"},
      display() {return "将谱面1定数-1"},
      onClick() {player.ch.dif1=player.ch.dif1.sub(1).max(1)},
      onHold() {player.ch.dif1=player.ch.dif1.sub(1).max(1)},
      canClick() {return true},
    },
    22: {
      title() {return "-1"},
      display() {return "将谱面2定数-1"},
      onClick() {player.ch.dif2=player.ch.dif2.sub(1).max(1)},
      onHold() {player.ch.dif2=player.ch.dif2.sub(1).max(1)},
      canClick() {return true},
    },
    23: {
      title() {return "-1"},
      display() {return "将谱面3定数-1"},
      onClick() {player.ch.dif3=player.ch.dif3.sub(1).max(1)},
      onHold() {player.ch.dif3=player.ch.dif3.sub(1).max(1)},
      canClick() {return true},
    },
    31: {
      title() {return "开始！"},
      display() {return "点击或长按以进行课题模式！你将根据你的RKS和谱面定数获得相应分数和评级"},
      canClick() {return true},
      onClick() {player.ch.sco=tmp.ch.keti
        player.ch.difa=player.ch.dif1.add(player.ch.dif2).add(player.ch.dif3)
        player.ch.en=player.ch.sco.div(3000000).pow(5).mul(player.ch.difa).div(5).mul(hasUpgrade('lo',134)?upgradeEffect('lo',134):1).max(player.ch.en)
        player.ch.ennow=player.ch.sco.div(3000000).pow(5).mul(player.ch.difa).div(5).mul(hasUpgrade('lo',134)?upgradeEffect('lo',134):1)
      },
      onHold() {player.ch.sco=tmp.ch.keti
        player.ch.difa=player.ch.dif1.add(player.ch.dif2).add(player.ch.dif3)
        player.ch.en=player.ch.sco.div(3000000).pow(5).mul(player.ch.difa).div(5).mul(hasUpgrade('lo',134)?upgradeEffect('lo',134):1).max(player.ch.en)
        player.ch.ennow=player.ch.sco.div(3000000).pow(5).mul(player.ch.difa).div(5).mul(hasUpgrade('lo',134)?upgradeEffect('lo',134):1)
      },
      style: {'height':'100px','width':'180px'},
    },
    },
})//Chart
addLayer("sp", {
  infoboxes: {
introBox: {
  title: "层级8--曲包",
  body(){return "欢迎来到第八层！本层级也是静态层级，在本层级，你也可以解锁相当有趣的功能<br>资源名称由来：音乐游戏中“Song Pack”翻译为曲包"},
        },
buyBox: {
  title: "曲包",
  body(){return "欢迎来到曲包！在这里，你需要使用对应层的对应资源来购买曲包（不消耗资源），在获得了一定数量的曲包以后，就可以解锁对应的升级，接下来还会解锁更多种类的曲包。注意，在购买升级以后，对应曲包的数量也会减少"},
        },
},
    name: "Song Pack",
    symbol: "SP",
    position: 1,
    startData() { return {
        unlocked() { return hasUpgrade('ch',37)||hasAchievement('A',111)},
points: n(0),
    }},
    color: "#6090ff",
    requires(){
		req =new Decimal('1e160000')
	
	if (hasUpgrade('lo', 73)) req = req.pow(buyableEffect('lo',32))
	req = req.pow(tmp.j.pdqja5)
		
        if(buyableEffect('c',41).gt(1)) req = req.div(buyableEffect('c',41))
			return req;
	}, 
	base(){
		mult = new Decimal('1e5000')
		
	if (hasUpgrade('lo', 73)) mult = mult.pow(buyableEffect('lo',32))
	mult = mult.pow(tmp.j.pdqja5)
		
	
		return mult;
	}, 
    exponent: 2, 
    resource: "曲包",
    baseResource: "songs", 
    baseAmount() {return player.s.points}, 
    type: "static",  
    effect(){ eff = new Decimal(1)
      return eff
    },
    effectDescription() { 
    },
	gainMult() { //spgainmult
		mult = n(1)
		return mult
	},
    gainExp() { //spgainexp
		exp = n(1)
		return exp
	},
	directMult() { //spdirectmult
		mult = n(1)
		return mult
	},
    row: 3,
    branches(){return ['m']},
    hotkeys: [
        {key: "o", description: "O： Reset for Song Pack", onPress(){if(canReset(this.layer)&&hasMilestone('sp',0)) doReset(this.layer)}},
    ],
    layerShown(){ return hasUpgrade('ch',37)||hasAchievement('A',111)},
    resetsNothing() {return hasMilestone('r',4)},
    canBuyMax(){return hasMilestone('r',5)},
    autoPrestige() {return hasMilestone('r',4)},
    update(diff) {
     if(player._devSpeed.neq(0)) {
			if (hasMilestone('r',3)&&layers.sp.buyables[11].canAfford()&&layers.sp.buyables[11].unlocked()&&!hasUpgrade('r',32)) layers.sp.buyables[11].buy();
			if (hasMilestone('r',3)&&layers.sp.buyables[12].canAfford()&&layers.sp.buyables[12].unlocked()&&!hasUpgrade('r',32)) layers.sp.buyables[12].buy();
			if (hasUpgrade('r',31)&&layers.sp.buyables[13].canAfford()&&layers.sp.buyables[13].unlocked()&&!hasUpgrade('r',32)) layers.sp.buyables[13].buy();
			if (hasUpgrade('r',31)&&layers.sp.buyables[14].canAfford()&&layers.sp.buyables[14].unlocked()&&!hasUpgrade('r',32)) layers.sp.buyables[14].buy();
			if (hasUpgrade('r',32)&&layers.sp.buyables[11].canAfford()&&layers.sp.buyables[11].unlocked()) layers.sp.buyables[11].buyMax();
			if (hasUpgrade('r',32)&&layers.sp.buyables[12].canAfford()&&layers.sp.buyables[12].unlocked()) layers.sp.buyables[12].buyMax();
			if (hasUpgrade('r',32)&&layers.sp.buyables[13].canAfford()&&layers.sp.buyables[13].unlocked()) layers.sp.buyables[13].buyMax();
			if (hasUpgrade('r',32)&&layers.sp.buyables[14].canAfford()&&layers.sp.buyables[14].unlocked()) layers.sp.buyables[14].buyMax();
			if (hasUpgrade('j',27)&&layers.sp.buyables[15].canAfford()&&layers.sp.buyables[15].unlocked()) layers.sp.buyables[15].buyMax();
			if (hasUpgrade('j',31)&&layers.sp.buyables[21].canAfford()&&layers.sp.buyables[21].unlocked()) layers.sp.buyables[21].buy();
			if (hasUpgrade('j',31)&&layers.sp.buyables[22].canAfford()&&layers.sp.buyables[22].unlocked()) layers.sp.buyables[22].buy();
			if (hasUpgrade('j',31)&&layers.sp.buyables[23].canAfford()&&layers.sp.buyables[23].unlocked()) layers.sp.buyables[23].buy();
			if (hasUpgrade('j',31)&&layers.sp.buyables[24].canAfford()&&layers.sp.buyables[24].unlocked()) layers.sp.buyables[24].buy();
			if (hasUpgrade('j',31)&&layers.sp.buyables[25].canAfford()&&layers.sp.buyables[25].unlocked()) layers.sp.buyables[25].buy();
     }
	},
    tabFormat: {
   "Milestones": {
        content: [ ["infobox","introBox"],
     "main-display",
    "prestige-button",
     "blank",
    "milestones",
],
  unlocked(){return true}
},
   "Song Packs": {
        content: [  ["infobox","buyBox"],
     "main-display",
    "prestige-button",
    "blank",
    "buyables",
      ["display-text",
      function() {if(hasMilestone('sp',4)) return '你有 ' + format(player.a.points)+ ' 源点'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('sp',17)) return '你有 ' + format(player.l.points)+ ' 诗篇'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('r',21)) return '你有 ' + format(player.p.points)+ ' Phidata'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('r',27)) return '你有 ' + format(player.c.points)+ ' Cyten'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
      ["display-text",
      function() {if(hasUpgrade('j',17)) return '你有 ' + format(player.r.points)+ ' 旋律'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     "blank",
      ["display-text",
      function() {if(hasMilestone('sp',4)) return 'Arcaea曲包：'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ['row',[['upgrade',11],['upgrade',12],['upgrade',13],['upgrade',14],['upgrade',15],['upgrade',16],['upgrade',17]]],
     ["display-text",
      function() {if(hasUpgrade('sp',17)) return 'Lanota曲包：'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ['row',[['upgrade',21],['upgrade',22],['upgrade',23],['upgrade',24],['upgrade',25],['upgrade',26],['upgrade',27]]],
     ["display-text",
      function() {if(hasUpgrade('r',21)) return 'Phigros曲包：'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ['row',[['upgrade',31],['upgrade',32],['upgrade',33],['upgrade',34],['upgrade',35],['upgrade',36],['upgrade',37]]],
      ["display-text",
      function() {if(hasUpgrade('r',27)) return 'Cytus曲包：'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ['row',[['upgrade',41],['upgrade',42],['upgrade',43],['upgrade',44],['upgrade',45],['upgrade',46],['upgrade',47]]],
      ["display-text",
      function() {if(hasUpgrade('j',17)) return 'Rotaeno曲包：'},
     {"color": "ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ['row',[['upgrade',51],['upgrade',52],['upgrade',53],['upgrade',54],['upgrade',55],['upgrade',56],['upgrade',57]]],
],
unlocked(){return hasMilestone('sp',4)}
    },
},
doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "t") {
        kept.push("milestones","upgrades","points","buyables")
     }
     if(hasMilestone('r',3)) kept.push("upgrades")
     if(hasMilestone('r',5)) kept.push("milestones")
     if(hasUpgrade('r',32)) kept.push("buyables")
     layerDataReset(this.layer, kept)
        }
    },
milestones: {
    0: {
        requirementDescription: "获得1个曲包",
        effectDescription: "永久保留歌曲、Arcaea、Lanota、Phigros、魔王曲升级，Arcaea、Phigros挑战，解锁一个魔王曲升级",
        done() { return player.sp.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个曲包",
        effectDescription: "提升前两个Phigros挑战（EZ，HD）的效果和上限，Phidata获取指数*1.1，解锁更多升级",
        done() { return player.sp.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个曲包",
        effectDescription: "永久保留Lanota、Phigros、魔王曲里程碑，解锁更多升级",
        done() { return player.sp.points.gte(3) }
    },
    3: {
        requirementDescription: "获得4个曲包",
        effectDescription: "自动购买所有Cytus可购买，解锁更多升级",
        done() { return player.sp.points.gte(4) }
    },
    4: {
        requirementDescription: "获得8个曲包",
        effectDescription: "解锁曲包，解锁Arcaea曲包（基于源点获得），源点指数乘以1.001", 
        done() { return player.sp.points.gte(8) }
    },
},
buyables:{
 11: {
				title: "获得一个Arcaea曲包",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = new Decimal(player.lo.evolution.gte(1)?'1e50000':'1e54500')
     cost=cost.times(new Decimal(1e100).pow(x.pow(1.2)))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 源点")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasMilestone('sp',4)}, 
      canAfford() {
      return player.a.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.a.points.div(player.lo.evolution.gte(1)?'1e50000':"1e54500").log(1e100).root(1.2)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
	12: {
				title: "获得一个Lanota曲包",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
		if(hasUpgrade('lo',76))x = x.div(2);if(hasUpgrade('lo',82))x = x.div(2)
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.pow(1.5).mul(0.1).add(10).pow(3)
    return cost.floor()
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 诗篇")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('sp',17)}, 
      canAfford() {
      return player.l.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.l.points.max(1).root(3).sub(10).div(0.1).root(1.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).mul(hasUpgrade('lo',76)?2:1).mul(hasUpgrade('lo',82)?2:1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
 13: {
				title: "获得一个Phigros曲包",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(5)) x = x.pow(2).div(5)
     let cost = new Decimal(1e50).pow(x.pow(1.2)).mul("1e18000")
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " Phidata")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('r',21)}, 
      canAfford() {
      return player.p.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.p.points.max(1).div("1e18000").root(1.2).log(1e50)
					if (tempBuy.gte(5)) tempBuy = tempBuy.times(5).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
	14: {
				title: "获得一个Cytus曲包",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = new Decimal(1e5).pow(x.pow(1.2)).mul(player.lo.evolution.gte(1)?'1e600':"1e750")
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " Cyten")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('r',27)}, 
      canAfford() {
      return player.c.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.points.max(1).div(player.lo.evolution.gte(1)?'1e600':"1e750").root(1.2).log(1e5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
},
	15: {
				title: "获得一个Rotaeno曲包",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = n(2).pow(x.pow(0.8)).mul(1e40*(player.lo.evolution.lt(1)?5:1))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 旋律")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
         },
      unlocked() { return hasUpgrade('j',17)}, 
      canAfford() {
      return player.r.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.r.points.max(10).div(1e40*(player.lo.evolution.lt(1)?5:1)).log(2).root(0.8)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
},
 21: {
				title: "Arcaea曲包专精",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = n('1e360000')
     cost=cost.times(n('1e1000').pow(x.pow(1.5)))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {
				 let eff=n(2).pow(gba('sp',11)).pow(x).max(1).pow(tmp.j.pdqja7)
				 if(eff.log10().gte(2250)) eff = n(10).pow(eff.log10().sub(2250).pow(0.5).add(2250))//sc
				 return eff
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 源点")+"<br>数量: " + format(player[this.layer].buyables[this.id]) + "<br>Arcaea曲包以×" +format(this.effect()) + "的增益提升源点获取量")
         },
      unlocked() { return hasUpgrade('j',27)}, 
      canAfford() {
      return player.a.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.a.points.div("1e360000").log('1e1000').root(1.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
 22: {
				title: "Lanota曲包专精",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = n(4).add(n(x).div(10)).pow(6)
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return n(gba('sp',12).mul(x)).pow(0.2).max(1).sub(1).div(10).add(1).pow(-0.5).pow(tmp.j.pdqja7)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 诗篇")+"<br>数量: " + format(player[this.layer].buyables[this.id]) + "<br>Lanota曲包以^" +format(this.effect(),3) + "的增益提升诗篇获取量")
                },
      unlocked() { return hasUpgrade('j',27)}, 
      canAfford() {
      return player.l.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.l.points.root(6).sub(4).mul(10);
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
 23: {
				title: "Phigros曲包专精",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = n('1e38000')
     cost=cost.times(n('1e900').pow(x.pow(1.25)))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {
				 let eff=n(1.6).pow(gba('sp',13)).pow(x).max(1).pow(tmp.j.pdqja7)
				 if(eff.log10().gte(600)) eff = n(10).pow(eff.log10().sub(600).pow(0.5).add(600))//sc
				 return eff
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " Phidata")+"<br>数量: " + format(player[this.layer].buyables[this.id]) + "<br>Phigros曲包以×" +format(this.effect()) + "的增益提升Phidata获取量")
         },
      unlocked() { return hasUpgrade('j',27)}, 
      canAfford() {
      return player.p.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.p.points.div("1e38000").log('1e900').root(1.25)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
 24: {
				title: "Cytus曲包专精",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = n('1e4250')
     cost=cost.times(n(1e75).pow(x.pow(1.25)))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {
				 let eff=n(1.5).pow(gba('sp',14)).pow(x).max(1).pow(tmp.j.pdqja7)
				 if(eff.log10().gte(400)) eff = n(10).pow(eff.log10().sub(400).pow(0.5).add(400))//sc
				 return eff
				},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " Cyten")+"<br>数量: " + format(player[this.layer].buyables[this.id]) + "<br>Cytus曲包以×" +format(this.effect()) + "的增益提升Cyten获取量")
         },
      unlocked() { return hasUpgrade('j',27)}, 
      canAfford() {
      return player.c.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.points.div("1e4250").log(1e75).root(1.25)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
 25: {
				title: "Rotaeno曲包专精",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = n('1e50')
     cost=cost.times(n(10).pow(x.pow(1.5)))
    return cost
         },
				effect(x=player[this.layer].buyables[this.id]) {return n(1.01).pow(gba('sp',14)).pow(x).max(1).pow(tmp.j.pdqja7)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 旋律")+"<br>数量: " + format(player[this.layer].buyables[this.id]) + "<br>Rotaeno曲包以×" +format(this.effect()) + "的增益提升旋律获取量")
         },
      unlocked() { return hasUpgrade('j',27)}, 
      canAfford() {
      return player.r.points.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
         },
     buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.c.points.div("1e50").log(10).root(1.5)
					if (tempBuy.gte(25)) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'150px'},
			},
},
  softcap:new Decimal ("10^^1000"),
  softcapPower:new Decimal(1),
upgrades:{
11:{ 
    fullDisplay() {return "Arcaea<br>在Arcaea层级解锁“蛇”，PTT永远处于最大值<br>需要：2 Arcaea曲包"},
    unlocked(){return hasUpgrade('sp',11)||gba('sp',11).gte(1)},
onPurchase() {setBuyableAmount('sp',11,gba('sp',11).sub(2))},
  canAfford() {return gba('sp',11).gte(2)},
  },
12:{ 
    fullDisplay() {return "World Extend<br>解锁第16个Cytus可购买<br>需要：4 Arcaea曲包，100 蛇物量"},
    unlocked(){return hasUpgrade('sp',12)||gba('sp',11).gte(3)},
onPurchase() {setBuyableAmount('sp',11,gba('sp',11).sub(4))
  player.a.sn=player.a.sn.sub(100)},
  canAfford() {return gba('sp',11).gte(4)&&player.a.sn.gte(100)},
  },
13:{ 
    fullDisplay() {return "Eternal Core<br>解锁第三个蛇的效果，解锁下一行课题模式升级<br>需要：5 Arcaea曲包，300 蛇物量"},
    unlocked(){return hasUpgrade('sp',13)||gba('sp',11).gte(4)},
onPurchase() {setBuyableAmount('sp',11,gba('sp',11).sub(5))
  player.a.sn=player.a.sn.sub(300)},
  canAfford() {return gba('sp',11).gte(5)&&player.a.sn.gte(300)},
  },
14:{ 
    fullDisplay() {return "Vicious Labyrinth<br>蛇的增加量（每次点击的获得量）翻倍，但是多两个蛇可点击<br>需要：7 Arcaea曲包，500 蛇物量"},
    unlocked(){return hasUpgrade('sp',14)||gba('sp',11).gte(6)},
onPurchase() {setBuyableAmount('sp',11,gba('sp',11).sub(7))
  player.a.sn=player.a.sn.sub(500)},
  canAfford() {return gba('sp',11).gte(7)&&player.a.sn.gte(500)},
  },
15:{ 
    fullDisplay() {return "Luminous Sky<br>基于PTT增益每次点击蛇的获取量<br>当前效果：×"+format(this.effect())+"<br>需要：9 Arcaea曲包，1000 蛇物量"},
    unlocked(){return hasUpgrade('sp',15)||gba('sp',11).gte(8)},
onPurchase() {setBuyableAmount('sp',11,gba('sp',11).sub(9))
  player.a.sn=player.a.sn.sub(1000)},
  canAfford() {return gba('sp',11).gte(9)&&player.a.sn.gte(1000)},
  effect() { eff= player.a.ptt.sub(12).max(0).div(10).add(1).pow(12)
        return eff.max(1)
      },
  },
16:{ 
    fullDisplay() {return "Adverse Prelude<br>基于RKS增益每次点击蛇的获取量<br>当前效果：×"+format(this.effect())+"<br>需要：30 Arcaea曲包，10000 蛇物量"},
    unlocked(){return hasUpgrade('sp',16)||getBuyableAmount('sp',11).gte(14)},
onPurchase() {setBuyableAmount('sp',11,getBuyableAmount('sp',11).sub(30))
  player.a.sn=player.a.sn.sub(10000)},
  canAfford() {return getBuyableAmount('sp',11).gte(30)&&player.a.sn.gte(10000)},
  effect() { eff= player.p.rks.max(5).div(10).add(0.5).pow(5)
        return eff.max(1)
      },
  },
17:{ 
    fullDisplay() {return "Black Fate<br>每秒获得100%的蛇增加量，解锁Lanota曲包<br>需要：48 Arcaea曲包，1 龙"},
    unlocked(){return hasUpgrade('sp',17)||getBuyableAmount('sp',11).gte(22)},
onPurchase() {setBuyableAmount('sp',11,getBuyableAmount('sp',11).sub(48))
  player.a.dr=player.a.dr.sub(1)},
  canAfford() {return getBuyableAmount('sp',11).gte(48)&&player.a.dr.gte(1)},
  },
21:{ 
    fullDisplay() {return "21<br>解锁龙的第二个效果，基于诗篇增益Notes获取量<br>当前效果：×"+format(this.effect())+"<br>需要：4 Lanota曲包，2 龙"},
    unlocked(){return hasUpgrade('sp',21)||gba('sp',12).gte(2)},
onPurchase() {setBuyableAmount('sp',12,gba('sp',12).sub(4))
  player.a.dr=player.a.dr.sub(2)},
  canAfford() {return gba('sp',12).gte(4)&&player.a.dr.gte(2)},
  effect() { eff= n(10).pow(player.l.points)
  if(eff.log10().gte(10000)) eff = n(10).pow(eff.log10().sub(10000).pow(0.8).add(10000))//sc
        return eff.max(1)
      },
  },
22:{ 
    fullDisplay() {return "22<br>解锁第五个蛇的效果，解锁第三个龙的效果<br>需要：9 Lanota曲包，3 龙"},
    unlocked(){return hasUpgrade('sp',22)||gba('sp',12).gte(8)},
onPurchase() {setBuyableAmount('sp',12,gba('sp',12).sub(9))
  player.a.dr=player.a.dr.sub(3)},
  canAfford() {return gba('sp',12).gte(9)&&player.a.dr.gte(3)},
  },
23:{ 
    fullDisplay() {return "23<br>基于Arcaea曲包增益蛇的增加量<br>当前效果：×"+format(this.effect())+"<br>需要：10 Lanota曲包，4 龙"},
    unlocked(){return hasUpgrade('sp',23)||gba('sp',12).gte(9)},
onPurchase() {setBuyableAmount('sp',12,gba('sp',12).sub(10))
  player.a.dr=player.a.dr.sub(4)},
  canAfford() {return gba('sp',12).gte(10)&&player.a.dr.gte(4)},
  effect() { eff= gba('sp',11).pow(0.4).max(1)
  if(eff>5) eff = eff.sub(5).pow(0.5).add(5)//sc
        return eff.max(1)
      },
  },
24:{ 
    fullDisplay() {return "24<br>基于Lanota曲包增益龙的增加量<br>当前效果：×"+format(this.effect())+"<br>需要：11 Lanota曲包，5 龙"},
    unlocked(){return hasUpgrade('sp',24)||gba('sp',12).gte(10)},
onPurchase() {setBuyableAmount('sp',12,gba('sp',12).sub(11))
  player.a.dr=player.a.dr.sub(5)},
  canAfford() {return gba('sp',12).gte(11)&&player.a.dr.gte(5)},
  effect() { eff= gba('sp',12).pow(0.2).max(1)
  if(eff>5) eff = eff.sub(5).pow(0.5).add(5)//sc
        return eff.max(1)
      },
  },
25:{ 
    fullDisplay() {return "25<br>解锁第四个龙的效果，每秒获得10%的龙增加量<br>需要：13 Lanota曲包，10 龙"},
    unlocked(){return hasUpgrade('sp',25)||gba('sp',12).gte(12)},
onPurchase() {setBuyableAmount('sp',12,gba('sp',12).sub(13))
  player.a.dr=player.a.dr.sub(10)},
  canAfford() {return gba('sp',12).gte(13)&&player.a.dr.gte(10)},
  },
26:{ 
    fullDisplay() {return "26<br>自动进行课题模式，Cyten基本获取指数+0.015，蛇和龙获取量×2<br>需要：20 Lanota曲包，25 龙"},
    unlocked(){return hasUpgrade('sp',26)||gba('sp',12).gte(18)},
onPurchase() {setBuyableAmount('sp',12,gba('sp',12).sub(20))
  player.a.dr=player.a.dr.sub(25)},
  canAfford() {return gba('sp',12).gte(20)&&player.a.dr.gte(25)},
  },
27:{ 
    fullDisplay() {return "27<br>解锁第五个龙的效果，每秒获得100%的龙增加量，解锁下一个层级，Rotaeno<br>需要：25 Lanota曲包，100 龙"},
    unlocked(){return hasUpgrade('sp',27)||gba('sp',12).gte(22)},
onPurchase() {setBuyableAmount('sp',12,gba('sp',12).sub(25))
  player.a.dr=player.a.dr.sub(10)},
  canAfford() {return gba('sp',12).gte(25)&&player.a.dr.gte(100)},
  },
31:{ 
    fullDisplay() {return "过去的章节<br>基于Phidata增益旋律获取量<br>当前效果：×"+format(this.effect())+"<br>需要：2 Phigros曲包"},
    unlocked(){return hasUpgrade('sp',31)||gba('sp',13).gte(1)},
onPurchase() {setBuyableAmount('sp',13,gba('sp',13).sub(2))},
  canAfford() {return gba('sp',13).gte(2)},
  effect() { eff= player.p.points.max(1).log(10).pow(2).max(1).log(10).div(3)
        return eff.max(1)
      },
  },
32:{ 
    fullDisplay() {return "第五章-霓虹灯牌<br>基于Arcaea曲包增益旋律获取量<br>当前效果：×"+format(this.effect())+"<br>需要：6 Phigros曲包"},
    unlocked(){return hasUpgrade('sp',32)||gba('sp',13).gte(5)},
onPurchase() {setBuyableAmount('sp',13,gba('sp',13).sub(6))},
  canAfford() {return gba('sp',13).gte(6)},
  effect() { eff= gba('sp',11).max(1).pow(5).max(1).log(10).div(5)
        return eff.max(1)
      },
  },
33:{ 
    fullDisplay() {return "第六章-方舟蜃景<br>基于Lanota曲包增益旋律获取量<br>当前效果：×"+format(this.effect())+"<br>需要：8 Phigros曲包"},
    unlocked(){return hasUpgrade('sp',33)||gba('sp',13).gte(7)},
onPurchase() {setBuyableAmount('sp',13,gba('sp',13).sub(8))},
  canAfford() {return gba('sp',13).gte(8)},
  effect() { eff= gba('sp',12).max(1).pow(5).max(1).log(10).div(4)
        return eff.max(1)
      },
  },
34:{ 
    fullDisplay() {return "第七章-时钟链接<br>基于Phigros曲包增益旋律获取量<br>当前效果：×"+format(this.effect())+"<br>需要：10 Phigros曲包"},
    unlocked(){return hasUpgrade('sp',34)||gba('sp',13).gte(9)},
onPurchase() {setBuyableAmount('sp',13,gba('sp',13).sub(10))},
 canAfford() {return gba('sp',13).gte(10)},
  effect() { eff= gba('sp',13).max(1).pow(3).max(1).log(3).div(3)
        return eff.max(1)
      },
  },
35:{ 
    fullDisplay() {return "第八章-凌日潮汐<br>基于累计旋律增益旋律获取量<br>当前效果：×"+format(this.effect())+"<br>需要：12 Phigros曲包"},
    unlocked(){return hasUpgrade('sp',35)||gba('sp',13).gte(11)},
onPurchase() {setBuyableAmount('sp',13,gba('sp',13).sub(12))},
 canAfford() {return gba('sp',13).gte(12)},
  effect() { eff= player.r.total.max(1).pow(2).max(1).log(15).div(3)
        return eff.max(1)
      },
  },
36:{ 
    fullDisplay() {return "支线一-忘忧宫<br>基于Cytus力量增益旋律获取量，Phidata额外乘数增加100倍<br>当前效果：×"+format(this.effect())+"<br>需要：17 Phigros曲包"},
    unlocked(){return hasUpgrade('sp',36)||gba('sp',13).gte(16)},
onPurchase() {setBuyableAmount('sp',13,gba('sp',13).sub(17))},
 canAfford() {return gba('sp',13).gte(17)},
  effect() { eff= player.c.power.max(1).pow(0.15).max(1).log(10).pow(0.15)
        return eff.max(1)
      },
},
37:{ 
    fullDisplay() {return "支线二-弭刻日<br>基于累计Rot点数增益旋律获取量<br>当前效果：×"+format(this.effect())+"<br>需要：18 Phigros曲包"},
    unlocked(){return hasUpgrade('sp',37)||gba('sp',13).gte(17)},
onPurchase() {setBuyableAmount('sp',13,gba('sp',13).sub(18))},
 canAfford() {return gba('sp',13).gte(18)},
  effect() { eff= player.r.rota.max(1).pow(5).max(1).log(3).pow(0.3)
        return eff.max(1)
      },
},
41:{ 
    fullDisplay() {return "41<br>基于累计Rot点数增益Loaded Notes<br>当前效果：×"+format(this.effect())+"<br>需要：1 Cytus曲包"},
    unlocked(){return hasUpgrade('sp',41)||gba('sp',14).gte(1)},
onPurchase() {setBuyableAmount('sp',14,gba('sp',14).sub(1))},
 canAfford() {return gba('sp',14).gte(1)},
  effect() { eff= player.r.rota.max(1).pow(3).max(1).log(10).pow(0.3)
        return eff.max(1)
      },
},
42:{ 
    fullDisplay() {return "42<br>基于Cytus力量增益Loaded Notes<br>当前效果：×"+format(this.effect())+"<br>需要：3 Cytus曲包"},
    unlocked(){return hasUpgrade('sp',42)||gba('sp',14).gte(2)},
onPurchase() {setBuyableAmount('sp',14,gba('sp',14).sub(3))},
 canAfford() {return gba('sp',14).gte(3)},
  effect() { eff= player.c.power.max(1).pow(0.1).max(1).log(10).pow(0.1)
        return eff.max(1)
      },
},
43:{ 
    fullDisplay() {return "43<br>基于Notes增益Loaded Notes<br>当前效果：×"+format(this.effect())+"<br>需要：4 Cytus曲包"},
    unlocked(){return hasUpgrade('sp',43)||gba('sp',14).gte(3)},
onPurchase() {setBuyableAmount('sp',14,gba('sp',14).sub(4))},
 canAfford() {return gba('sp',14).gte(4)},
  effect() { eff= player.points.max(1).pow(0.1).max(1).log(10).pow(0.1).div(2)
        return eff.max(1)
      },
},
44:{ 
    fullDisplay() {return "44<br>基于Loaded Notes增益Loaded Notes<br>当前效果：×"+format(this.effect())+"<br>需要：9 Cytus曲包"},
    unlocked(){return hasUpgrade('sp',44)||gba('sp',14).gte(8)},
onPurchase() {setBuyableAmount('sp',14,gba('sp',14).sub(9))},
 canAfford() {return gba('sp',14).gte(9)},
  effect() { eff= player.lo.note.max(1).log(10).pow(0.5)
        return eff.max(1)
      },
},
45:{ 
    fullDisplay() {return "45<br>基于Arcaea曲包增益Loaded Notes<br>当前效果：×"+format(this.effect())+"<br>需要：10 Cytus曲包"},
    unlocked(){return hasUpgrade('sp',45)||gba('sp',14).gte(9)},
onPurchase() {setBuyableAmount('sp',14,gba('sp',14).sub(10))},
 canAfford() {return gba('sp',14).gte(10)},
  effect() { eff= gba('sp',11).max(1).pow(0.3).log(2)
        return eff.max(1)
      },
},
46:{ 
    fullDisplay() {return "46<br>基于Lanota曲包增益Loaded Notes<br>当前效果：×"+format(this.effect())+"<br>需要：11 Cytus曲包"},
    unlocked(){return hasUpgrade('sp',46)||gba('sp',14).gte(10)},
onPurchase() {setBuyableAmount('sp',14,gba('sp',14).sub(11))},
 canAfford() {return gba('sp',14).gte(11)},
  effect() { eff= gba('sp',12).max(1).pow(0.4).log(3)
        return eff.max(1)
      },
},
47:{ 
    fullDisplay() {return "47<br>基于Phigros曲包和Cytus曲包增益Loaded Notes<br>当前效果：×"+format(this.effect())+"<br>需要：12 Cytus曲包"},
    unlocked(){return hasUpgrade('sp',47)||gba('sp',14).gte(11)},
onPurchase() {setBuyableAmount('sp',14,gba('sp',14).sub(12))},
 canAfford() {return gba('sp',14).gte(12)},
  effect() { eff= gba('sp',13).mul(gba('sp',14)).max(1).pow(0.6).log(4)
        return eff.max(1)
      },
},
51:{ 
    fullDisplay() {return "51<br>降低用旋律购买的Rot点数的价格底数（2→1.95）<br>需要：1 Rotaeno曲包"},
    unlocked(){return hasUpgrade('sp',51)||challengeCompletions('r',14)>0},
onPurchase() {setBuyableAmount('sp',15,gba('sp',15).sub(1))},
 canAfford() {return gba('sp',15).gte(1)},
},
52:{ 
    fullDisplay() {return "52<br>减少用Notes购买的Rot点数的基本价格(1e1200000→1e800000)<br>需要：3 Rotaeno曲包"},
    unlocked(){return (hasUpgrade('sp',52)||gba('sp',15).gte(2))&&challengeCompletions('r',14)>0},
onPurchase() {setBuyableAmount('sp',15,gba('sp',15).sub(3))},
 canAfford() {return gba('sp',15).gte(3)},
},
53:{ 
    fullDisplay() {return "53<br>减少用Milthm购买的Rot点数的价格指数（1/2→1/3）<br>需要：8 Rotaeno曲包"},
    unlocked(){return (hasUpgrade('sp',53)||gba('sp',15).gte(6))&&challengeCompletions('r',14)>0},
onPurchase() {setBuyableAmount('sp',15,gba('sp',15).sub(8))},
 canAfford() {return gba('sp',15).gte(8)},
},
54:{ 
    fullDisplay() {return "54<br>增加可用的Rot点数数量（×1.1→×1.155）<br>需要：11 Rotaeno曲包"},
    unlocked(){return hasUpgrade('sp',54)||challengeCompletions('r',14)>1},
onPurchase() {setBuyableAmount('sp',15,gba('sp',15).sub(11))},
 canAfford() {return gba('sp',15).gte(11)},
},
55:{ 
    fullDisplay() {return "55<br>超过180的Rot点数×2，并且Rot点数向上取整<br>需要：14 Rotaeno曲包"},
    unlocked(){return (hasUpgrade('sp',55)||gba('sp',15).gte(13))&&challengeCompletions('r',14)>1},
onPurchase() {setBuyableAmount('sp',15,gba('sp',15).sub(14))},
 canAfford() {return gba('sp',15).gte(14)},
 tooltip:"此升级效果在Rot点数计算公式中最后生效"
},
56:{ 
    fullDisplay() {return "56<br>基于超过15的RKS增益旋律获取量<br>当前效果：×"+format(this.effect())+"<br>需要：25 Rotaeno曲包"},
    unlocked(){return (hasUpgrade('sp',56)||gba('sp',15).gte(20))&&challengeCompletions('r',14)>1},
onPurchase() {setBuyableAmount('sp',15,gba('sp',15).sub(25))},
 canAfford() {return gba('sp',15).gte(25)},
  effect() { eff=player.p.rks.mul(10).sub(150)
        return eff.max(1)
      },
},
57:{ 
    fullDisplay() {return "57<br>基于Rotaeno曲包增益旋律获取量，Notes^1.001<br>当前效果：×"+format(this.effect())+"<br>需要：41 Rotaeno曲包"},
    unlocked(){return hasUpgrade('j',26)||gba('sp',15).gte(40)},
onPurchase() {setBuyableAmount('sp',15,gba('sp',15).sub(41))},
 canAfford() {return gba('sp',15).gte(41)},
  effect() { eff=gba('sp',15).max(1).log(3)
        return eff.max(1)
      },
},
},
})//Song Pack
