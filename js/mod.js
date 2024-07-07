let modInfo = {
	name:"音乐游戏树",
	id: "rhythmgametree_loader",
	author: "QqQe308, loader3229",
	pointsName: "Notes",
	modFiles: ["loader3229.js", "layers.js", "layers2.js", "tree.js"],
	discordName: "B站一只新手Up",
	discordLink: "https://b23.tv/Hlg9D5u",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}
// Set your version in num and name
let VERSION = {
	num: "0.36",
	name: "Judgmental",
}

let winText = `恭喜通关！你已经完成了你的音游之旅…吗？请期待下一个更新！<br>当前结局：3e3333333 Notes，下一个更新:新层级！`

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte('3e3333333')
}

// Display extra things at the top of the page
var displayThings = [
  function() {
	  if(player.lo.evolution.lte(0)){
		  return "Note获取速度上限："+format(Decimal.pow(10,player.lo.evolution.mul(1e6).add(3e6+1)));
	  }
	  
if(inChallenge('r',12)&&player._devSpeed.eq(0)) return "v0.36游戏结局: 3e3333333 Notes！<br>你需要在Rot升级树里选择升级，并且点击升级12确定以开始挑战！"
   else return "v0.36游戏结局: 3e3333333 Notes！"
  }
]

let changelog = `<h1>更新日志</h1><br>
<h2>v0.36 Judgement 2024/4/1-2024/4/22<br>
<h3>- 添加1个层级：判定，添加判定区间挑战<br>
- 添加5个里程碑，7个升级，Rot升级树中的1个“升级”<br>
- 游戏结局：3e3333333 Notes<br><br>
<h2>v⓪.⑶❺ Milk Rhythm 2024愚人节版本 2024/4/1<br>
<h3>-<br>
<h2>v0.35 Rhythm Milthm 2024/2/3-2024/3/9<br>
<h3>- 添加1个层级：Milthm<br>
- 添加Rot升级树中的11个“升级”<br>
- 添加9个Milthm维度，添加计数频率<br>
- 添加7个里程碑，2+2+7+14=25个升级，1个挑战<br>
- 游戏结局：1e3000000 Notes，120 Rot点数<br><br>
<h2>v0.3 Rotative Rotating Rotation 2024/1/17-2024/2/2<br>
<h3>- 添加1个层级：Rotaeno<br>
- 添加Rot升级树，包括24个“升级”<br>
- 添加7个里程碑，2+2=4个可购买，14+21=35个升级，2个挑战<br>
- 修复了一堆bug以及修改了游戏一些内容<br>
- 降低了谱面、曲包、Rotaeno层级的一些时间墙的时间<br>
- 添加了6个隐藏成就和一些彩蛋<br>
- 终于可以导出、导入存档了<br>
- 游戏结局：1e2600000 Notes，68 Rot点数，1e16旋律（硬上限）<br><br>
<h2>v0.25 Song Packed 2023/11/27~2023/12/31<br>
<h3>- 添加1个层级：曲包<br>
- 添加4+2=6个可购买，6个可点击，5个里程碑，添加课题力量<br>
- 添加Arcaea中的蛇和龙，添加了10个蛇和龙的效果<br>
- 添加14+14=28个升级<br>
- 游戏结局：1e955000 Notes<br><br>
<h2>v0.2 Chart Design 2023/11/11~2023/11/27<br>
<h3>- 添加1个层级：Chart<br>
- 添加物量和定数，添加Phigros-Notes和特殊Notes，添加课题模式，添加课题能量<br>
- 添加2个里程碑，4个挑战，8个可购买<br>
- 添加2+21=23个升级<br>
- 修复了一堆bug<br>
- 游戏结局：1e376000 Notes<br><br>
<h2>v0.15 Cytusser 2023/10/28~2023/11/5<br>
<h3>- 添加1个层级：Cytus，添加Cytus力量<br>
- 添加9个里程碑，8个可购买，1个挑战<br>
- 添加5+5+2+2+7=21个升级<br>
- 重新平衡游戏，更改部分显示文本<br>
- 游戏结局：1e100000 Notes（1e32 Cytus力量）<br><br>
<h2>v0.1 REBALANCE 2023/10/18~2023/10/26<br>
<h3>- 添加2个层级：Lanota，魔王曲<br>
- 添加“PTT”，包括3个可点击<br>
- 添加“RKS”，包括2个可点击<br>
- 添加7+4+5+1=17个升级，3+1+2=6个里程碑<br>
- 重新制作了游戏（修改很多升级，重新平衡，修复了一堆bug）<br>
- 添加了“炸档测试”层级<br>
- 添加了剧情<br>
- 游戏结局：1e33000 Notes（1e20 Phidata，1e240源点）<br><br>
<h2>v0.05 Early Game 2023/10/06-2023/10/16<br>
<h3>- 添加3个层级：歌曲，Arcaea，Phigros<br>
- 添加14+14+16=44个升级<br>
- 添加8个挑战，3个可购买，7个里程碑<br>
- 游戏结局：1e20000 Notes（1e14 Phidata）`//changelog

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	if(inChallenge('r',12)&&getClickableState('r',12)!==1)return false;
 //return !player.points.gte('3e3333333')
return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(1)
	gain = gain.times(player['a'].points).add(1)
	if (hasUpgrade('lo', 11)) gain = gain.times(buyableEffect('lo',11))
	if (hasUpgrade('s', 12)) gain = gain.times(upgradeEffect('s', 12))
	if (hasUpgrade('s', 13)) gain = gain.times(10)
	if (hasUpgrade('s', 14)) gain = gain.times(upgradeEffect('s', 14))
	if (hasAchievement('A', 13)) gain = gain.times(player.A.ach)
	if (hasUpgrade('lo', 13)) gain = gain.times(upgradeEffect('lo',13))
	if (hasUpgrade('s', 21)) gain = gain.times(upgradeEffect('s', 21))
	if (hasUpgrade('a', 16)) gain = gain.times(1e10)
	if (inChallenge('a', 12)) gain = gain.times(1e-40)
	if (inChallenge('a', 13)) gain = gain.times(1e-45)
	if(buyableEffect('s',12).gte(1)) gain = gain.times(buyableEffect('s',12))
	if (inChallenge('a', 14)) gain = gain.times(1e-60)
	if (hasUpgrade('p', 14)) gain = gain.times(upgradeEffect('p', 14))
	if (inChallenge('p', 13)) gain = gain.times(1e-10)
	if (hasUpgrade('p', 25)) gain = gain.times(1e308)
	if(buyableEffect('c',11).gt(1)) gain = gain.times(buyableEffect('c',11))
	if (hasUpgrade('s', 31)) gain = gain.times(upgradeEffect('s', 31))
	if (hasUpgrade('a', 41)) gain = gain.times(upgradeEffect('a',41))
if (hasUpgrade('a', 42)) gain = gain.times(upgradeEffect('a',42))
if (hasUpgrade('s', 34)) gain = gain.times(upgradeEffect('s', 34))
if (hasUpgrade('l', 16)) gain = gain.times(upgradeEffect('l', 16))
if (hasUpgrade('l', 17)) gain = gain.times(upgradeEffect('l', 17))
if (hasUpgrade('a', 45)) gain = gain.times(upgradeEffect('a', 45))
if (hasMilestone('ch', 0)) gain = gain.times('1e960')
if (hasMilestone('ch', 1)) gain = gain.times('1e1145')
	if (hasUpgrade('ch', 13)) gain = gain.times(upgradeEffect('ch', 13))
	if (hasUpgrade('a', 46)) gain = gain.times(upgradeEffect('a',46))
	if (hasUpgrade('ch', 35)) gain = gain.times(upgradeEffect('ch', 35))
	if (hasUpgrade('a', 47)) gain = gain.times(upgradeEffect('a',47))
	if (hasUpgrade('ch', 36)) gain = gain.times(upgradeEffect('ch', 36))
	if (hasUpgrade('ch', 37)) gain = gain.times(upgradeEffect('ch', 37))
	if (hasUpgrade('ch', 43)) gain = gain.times(upgradeEffect('ch', 43))
	if(tmp.a.snEff4.gte(1)) gain=gain.times(tmp.a.snEff4)
if (hasUpgrade('sp', 21)) gain = gain.times(upgradeEffect('sp', 21))
if (gcs("r",21)==1) gain = gain.times(clickableEffect("r", 21))

if (hasUpgrade('a', 18)) gain = gain.times(upgradeEffect('a', 18))
if (hasUpgrade('a', 38)) gain = gain.times(upgradeEffect('a', 38))
if (hasUpgrade('lo', 35)) gain = gain.times(tmp.lo.noteEffect)
if (hasUpgrade('m', 18)) gain = gain.times(upgradeEffect('m', 18))
	if (hasUpgrade('lo', 46)) gain = gain.times(upgradeEffect('lo',46))
	

	if (hasUpgrade('l', 12)) gain = gain.pow(upgradeEffect('l', 12))
	if (hasUpgrade('l', 14)) gain = gain.pow(upgradeEffect('l', 14))
	if (hasUpgrade('ch', 21)) gain = gain.pow(1.01)
 if(tmp.ch.dragEff>1) gain = gain.pow(tmp.ch.dragEff)
 if (hasUpgrade('ch', 26)) gain = gain.pow(1.02)
if (hasUpgrade('ch', 27)) gain = gain.pow(1.05)
if (hasAchievement('A', 65)) gain = gain.pow(1.0101)
if(tmp.a.drEff4.gte(1)) gain=gain.pow(tmp.a.drEff4)

if(inChallenge('p',12)){gain= gain.pow(0.1)}
	if(hasChallenge('p',13)){gain = gain.pow(challengeEffect('p',13))}
	if(inChallenge('p',15)){gain= gain.pow(0.3)}
	if(inChallenge('c',11))gain= gain.pow(0.1)
	if(inChallenge('c',12))gain= gain.pow(0.01)
	if(inChallenge('c',12))gain= gain.div(5e7)
	if(inChallenge('c',13))gain= gain.pow(new Decimal(0.9).pow(player.c.challengeTime))

	
	
	if(inChallenge('c',14))gain= gain.max(10).log(1.0001)
if(inChallenge('c',14)&&!hasMilestone('r',0))gain= gain.pow(0.05)
if(inChallenge('r',11))gain= gain.pow(0.1)
if(gcs('j',11)==1) gain=gain.pow(tmp.j.pdqj1)

	//if(player._devSpeed.neq(0)) gain=gain.min(n('3e3333333').div(player._devSpeed))
if(inChallenge('r',13))gain= gain.min(player.mi.points)
	
	gain=gain.min(Decimal.pow(10,player.lo.evolution.mul(1e6).add(3e6+1)))

	return gain
}
// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
 timePlayed:new Decimal(0),
 
  QqQ:"QqQe308",
  banana:"3.8642180e38642180",
  Liu:"6.666666666666666666666666e308",
  fufu:['cutefu~','c','u','t','e','f','u','~'],
  Loader:"loader3229祝您龙年快乐！",
  yszqzls:"催更PEIT，元素周期增量树，@Bana3864[]，@Liu e308",
  yyyxs:"音乐游戏树，鱼鱼永相随，游泳一小时，原原原x神",
  Genshin:"启动！",
  Phigros:"2月2号，音乐游戏树和Phigros一起更新",
  long2024:"龙年马上要到了！祝大家新年龙腾虎跃，龙飞凤舞，龙批一个，事业有成，学业顺利，身体健康，财源滚滚，音游全AP，考试全满分，工作全加薪，玩树全通关，再次献上音乐游戏树全体作者（共1人）的真挚祝福！！！！！！！！！！",
  QqQe308:"我是QqQe308，v我50更新音乐游戏树",
	_devSpeed: new Decimal(1),
}}
//彩蛋区



 
// Less important things beyond this point!



// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function rksRandom() {return new Decimal(player.A.resetTime).sub(new Decimal(player.A.resetTime).floor())}

function gba(a,b){return getBuyableAmount(a,b)}

function gcs(a,b){return getClickableState(a,b)}


//以下来自someUsefulFunctions_QwQe308.js
//快捷调用+提高运算速度
var zero = new Decimal(0)
var one = new Decimal(1)
var two = new Decimal(2)
var three = new Decimal(3)
var four = new Decimal(4)
var five = new Decimal(5)
var six = new Decimal(6)
var seven = new Decimal(7)
var eight = new Decimal(8)
var nine = new Decimal(9)
var ten = new Decimal(10)
//快捷定义
function n(num){
    return new Decimal(num)
}
//检测旁边的升级是否被购买
function checkAroundUpg(UPGlayer,place){
    place = Number(place)
    return hasUpgrade(UPGlayer,place-1)||hasUpgrade(UPGlayer,place+1)||hasUpgrade(UPGlayer,place-10)||hasUpgrade(UPGlayer,place+10)
}
//指数软上限
function powsoftcap(num,start,power){
	if(num.gt(start)){
		num = num.root(power).mul(start.pow(one.sub(one.div(power))))
	}
    return num
}
//e后数字开根
function expRoot(num,root){
    return ten.pow(num.log10().root(root))
}
//e后数字乘方
function expPow(num,pow){
    return ten.pow(num.log10().pow(pow))
}
//e后数字指数软上限
function expRootSoftcap(num,start,power){
    if(num.lte(start)) return num;
    num = num.log10();start = start.log10()
    return ten.pow(num.root(power).mul(start.pow(one.sub(one.div(power)))))
}
//修改class属性
function setClass(id,toClass = []){
    var classes = ""
    for(i in toClass) classes += " "+toClass[i]
    if(classes != "") classes = classes.substr(1)
    document.getElementById(id).className = classes
}
//快速创建sub元素
function quickSUB(str){
    return `<sub>${str}</sub>`
}
//快速创建sup元素
function quickSUP(str){
    return `<sup>${str}</sup>`
}
//快速给文字上色
function quickColor(str,color){
    return `<text style='color:${color}'>${str}</text>`
}



function convertToB16(n){
          let codes = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F",
              }
            let x = n % 16
            return codes[(n-x)/16] + codes[x]
          }
          
    function getUndulatingColor(period = Math.sqrt(760)){
	let t = new Date().getTime()
	let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0) 
	let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
	let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
	a = convertToB16(Math.floor(a*128) + 128)
	b = convertToB16(Math.floor(b*128) + 128)
	c = convertToB16(Math.floor(c*128) + 128)
	return "#"+String(a) + String(b) + String(c)
}
        function colorText(elem, color, text) {
	return "<" + elem + " style='color:" + color + ";text-shadow:0px 0px 10px;'>" + text + "</" + elem + ">"
}//你不认为这是愚人节彩蛋吗？感谢@010000000000000000a7 大神提供代码！ 