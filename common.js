// ===== 公共数据 =====
const rawPool=[
// 白50% 40人
["土地公",1],["城隍",1],["灶神",1],["门神",1],["井神",1],["厕神",1],["路神",1],["桥神",1],["船神",1],["车神",1],
["山神",1],["河神",1],["花神",1],["树神",1],["石神",1],["夜游神",1],["日巡游",1],["夜巡游",1],["功曹",1],["土地奶奶",1],
["灶王奶奶",1],["井龙王",1],["船官",1],["车官",1],["路官",1],["桥官",1],["花仙子",1],["草仙",1],["竹仙",1],["松仙",1],
["柳仙",1],["狐仙",1],["黄仙",1],["白仙",1],["灰仙",1],["蛇仙",1],["狸仙",1],["龟仙",1],["鹤仙",1],["蛙仙",1],
// 绿30% 30人
["嫦娥",3],["月老",3],["雷公",3],["电母",3],["风伯",3],["雨师",3],["龙王",3],["河伯",3],["洛神",3],["妈祖",3],
["钟馗",3],["二郎神",4],["哪吒",4],["托塔天王",4],["太白金星",3],["文曲星",3],["武曲星",3],["寿星",3],["福星",3],["禄星",3],
["财神",3],["药王",3],["鲁班",3],["关羽",4],["秦琼",3],["尉迟恭",3],["黑白无常",3],["牛头",3],["马面",3],["孟婆",3],
// 蓝12% 28人
["铁拐李",5],["汉钟离",5],["张果老",5],["吕洞宾",5],["何仙姑",5],["蓝采和",5],["韩湘子",5],["曹国舅",5],
["七仙女",5],["织女",5],["董永",5],["沉香",5],["后羿",5],["夸父",5],["精卫",5],["共工",5],["祝融",5],["刑天",5],
["蚩尤",5],["九天玄女",5],["瑶姬",5],["麻姑",5],["彭祖",5],["鬼谷子",5],["左慈",5],["于吉",5],["葛洪",5],["孙思邈",5],
// 黄5% 26人
["齐天大圣",8],["天蓬元帅",7],["卷帘大将",7],["金蝉子",7],["托塔李天王",7],["增长天王",7],["持国天王",7],["广目天王",7],["多闻天王",7],
["二十八宿",7],["角木蛟",6],["亢金龙",6],["奎木狼",6],["三十六天罡",7],["七十二地煞",7],["十殿阎罗",7],["秦广王",6],["楚江王",6],["宋帝王",6],
["五方五老",7],["东华帝君",7],["西王母",7],["九天应元雷声普化天尊",7],["南极长生大帝",7],["北极紫微大帝",7],
// 橙2.5% 30人
["玉皇大帝",12],["王母娘娘",11],["太上老君",12],["元始天尊",12],["灵宝天尊",12],["如来佛祖",12],["观音菩萨",11],["地藏菩萨",11],["文殊菩萨",11],["普贤菩萨",11],
["弥勒佛",11],["燃灯古佛",11],["阿弥陀佛",11],["药师佛",11],["孔雀大明王",10],["金灵圣母",10],["无当圣母",10],["龟灵圣母",10],["赵公明",10],["云霄",10],
["琼霄",9],["碧霄",9],["广成子",9],["赤精子",9],["太乙真人",9],["黄龙真人",9],["文殊广法天尊",9],["普贤真人",9],["慈航道人",9],["道行天尊",9],
// 红0.5% 20人
["盘古",20],["女娲",18],["伏羲",18],["神农",17],["黄帝",17],["炎帝",17],["蚩尤",16],["东皇太一",19],["帝俊",19],["羲和",17],
["常羲",17],["望舒",17],["夸父",16],["刑天",16],["共工",16],["祝融",16],["后土",18],["玄冥",17],["蓐收",17],["句芒",17]
];
const pool=[]; rawPool.forEach(([n,h])=>pool.push({name:n,hp:h}));
function getColor(c){const h=c.hp;return h<=2?"white":h<=4?"green":h<=6?"blue":h<=8?"gold":h<=12?"orange":"red";}

// ===== 妖精卡牌数据 =====
const monsterPool = [
  // 六道轮回 - 畜生道怪物（HP 1-10）
  ["小妖鼠", 1], ["野狗精", 2], ["山猫怪", 2], ["野猪妖", 3], ["豺狼精", 3], ["虎先锋", 4],
  ["熊罴怪", 5], ["狮驼兵", 5], ["象鼻怪", 6], ["犀牛精", 7], ["鳄鱼妖", 8], ["巨蟒精", 9],
  
  // 饿鬼道怪物（HP 10-30）
  ["饿死鬼", 10], ["吊死鬼", 12], ["水鬼", 14], ["火鬼", 16], ["山魈鬼", 18], ["夜叉鬼", 20],
  ["罗刹鬼", 22], ["恶鬼王", 25], ["食尸鬼", 28], ["吸血鬼", 30],
  
  // 地狱道怪物（HP 30-80）
  ["拔舌鬼", 35], ["剪刀鬼", 40], ["铁树鬼", 45], ["孽镜鬼", 50], ["蒸笼鬼", 55], ["铜柱鬼", 60],
  ["刀山鬼", 65], ["冰山鬼", 70], ["油锅鬼", 75], ["牛坑鬼", 80],
  
  // 修罗道怪物（HP 80-150）
  ["修罗兵", 85], ["修罗将", 95], ["修罗王", 110], ["阿修罗", 130], ["修罗尊者", 150],
  
  // 人间道怪物（HP 150-300）
  ["土匪头子", 160], ["山贼首领", 180], ["江湖高手", 200], ["武林盟主", 230], ["人间帝王", 260], ["人间至强", 300],
  
  // 天道怪物（HP 300-600）
  ["天兵", 320], ["天将", 360], ["天王", 420], ["天神", 480], ["天尊", 550], ["天道使者", 600]
];

const monsters = [];
monsterPool.forEach(([n,h]) => monsters.push({name:n,hp:h}));

// ===== 全局状态 =====
window.G = {
  owned: [],       // 已拥有卡名（去重）
  lastDraw: [],    // 最近抽卡记录
  countMap: {}     // 同名卡抽到次数
};

// 静音版：只读写，不弹窗
function saveSilent(){
  localStorage.setItem("myth_save", JSON.stringify(G));
}

function loadSilent(){
  const s = localStorage.getItem("myth_save");
  if(!s) {
    // 如果是首次使用，初始化空状态
    G.owned = [];
    G.lastDraw = [];
    G.countMap = {};
    return false;
  }
  const d = JSON.parse(s);
  G.owned = d.owned || [];
  G.lastDraw = d.lastDraw || [];
  G.countMap = d.countMap || {};
  return true;
}

// 一键重置（完整重置所有数据）
function reset(){
  G.owned = [];
  G.lastDraw = [];
  G.countMap = {};
  saveSilent();
  
  // 重置突破系统
  BreakthroughSystem.resetAll();
  
  // 重置境界战斗系统
  RealmBattleSystem.resetAll();
  
  // 重置仙缘（独立存储的）
  localStorage.removeItem("myth_xianyuan");
  
  // 重置首次游戏标记
  localStorage.removeItem("myth_first_time");
  
  // 重置所有其他相关数据
  localStorage.removeItem("myth_xianyuan_init");

  // 重置后自动刷新页面
  setTimeout(() => {
    window.location.reload();
  }, 500);
}

// ===== 突破系统 =====
window.BreakthroughSystem = {
  // 突破等级定义
  levels: [
    // 凡人境（1-9重）
    "凡人一重", "凡人二重", "凡人三重", "凡人四重", "凡人五重",
    "凡人六重", "凡人七重", "凡人八重", "凡人九重",
    // 炼气境（1-9重）
    "炼气一重", "炼气二重", "炼气三重", "炼气四重", "炼气五重",
    "炼气六重", "炼气七重", "炼气八重", "炼气九重",
    // 筑基境（1-9重）
    "筑基一重", "筑基二重", "筑基三重", "筑基四重", "筑基五重",
    "筑基六重", "筑基七重", "筑基八重", "筑基九重",
    // 金丹境（1-9重）
    "金丹一重", "金丹二重", "金丹三重", "金丹四重", "金丹五重",
    "金丹六重", "金丹七重", "金丹八重", "金丹九重",
    // 元婴境（1-9重）
    "元婴一重", "元婴二重", "元婴三重", "元婴四重", "元婴五重",
    "元婴六重", "元婴七重", "元婴八重", "元婴九重",
    // 化神境（1-9重）
    "化神一重", "化神二重", "化神三重", "化神四重", "化神五重",
    "化神六重", "化神七重", "化神八重", "化神九重",
    // 渡劫境（1-9重）
    "渡劫一重", "渡劫二重", "渡劫三重", "渡劫四重", "渡劫五重",
    "渡劫六重", "渡劫七重", "渡劫八重", "渡劫九重",
    // 大乘境（1-9重）
    "大乘一重", "大乘二重", "大乘三重", "大乘四重", "大乘五重",
    "大乘六重", "大乘七重", "大乘八重", "大乘九重",
    // 散仙境（1-9重）
    "散仙一重", "散仙二重", "散仙三重", "散仙四重", "散仙五重",
    "散仙六重", "散仙七重", "散仙八重", "散仙九重",
    // 真仙境（1-9重）
    "真仙一重", "真仙二重", "真仙三重", "真仙四重", "真仙五重",
    "真仙六重", "真仙七重", "真仙八重", "真仙九重",
    // 玄仙境（1-9重）
    "玄仙一重", "玄仙二重", "玄仙三重", "玄仙四重", "玄仙五重",
    "玄仙六重", "玄仙七重", "玄仙八重", "玄仙九重",
    // 金仙境（1-9重）
    "金仙一重", "金仙二重", "金仙三重", "金仙四重", "金仙五重",
    "金仙六重", "金仙七重", "金仙八重", "金仙九重",
    // 大罗金仙（1-9重）
    "大罗一重", "大罗二重", "大罗三重", "大罗四重", "大罗五重",
    "大罗六重", "大罗七重", "大罗八重", "大罗九重",
    // 准圣（1-9重）
    "准圣一重", "准圣二重", "准圣三重", "准圣四重", "准圣五重",
    "准圣六重", "准圣七重", "准圣八重", "准圣九重",
    // 圣人（1-9重）
    "圣人一重", "圣人二重", "圣人三重", "圣人四重", "圣人五重",
    "圣人六重", "圣人七重", "圣人八重", "圣人九重"
  ],
  
  // 存储突破数据
  breakthroughData: {},
  
  // 品质基础灵丹消耗系数
  qualityCoefficients: {
    white: 1.0,    // 白色：基础系数
    green: 1.5,    // 绿色：1.5倍
    blue: 2.0,     // 蓝色：2倍
    gold: 3.0,     // 黄色：3倍
    orange: 5.0,   // 橙色：5倍
    red: 10.0      // 红色：10倍
  },
  
  // 初始化
  init: function() {
    const saved = localStorage.getItem("myth_breakthrough_data");
    if (saved) {
      this.breakthroughData = JSON.parse(saved);
    }
  },
  
  // 保存数据
  save: function() {
    localStorage.setItem("myth_breakthrough_data", JSON.stringify(this.breakthroughData));
  },
  
  // 获取卡牌突破信息
  getBreakthroughInfo: function(cardName) {
    if (!this.breakthroughData[cardName]) {
      return { level: 0, baseHp: 0 };
    }
    return this.breakthroughData[cardName];
  },
  
  // 获取突破等级显示
  getBreakthroughDisplay: function(level) {
    if (level >= 0 && level < this.levels.length) {
      return {
        stage: this.levels[level],
        level: level,
        realm: this.getRealmFromLevel(level),
        hpMultiplier: this.getHPMultiplier(level)
      };
    }
    return { stage: "凡人一重", level: 0, realm: "凡人", hpMultiplier: 1 };
  },
  
  // 获取境界
  getRealmFromLevel: function(level) {
    const realmIndex = Math.floor(level / 9);
    const realms = [
      "凡人", "炼气", "筑基", "金丹", "元婴", "化神", 
      "渡劫", "大乘", "散仙", "真仙", "玄仙", "金仙",
      "大罗金仙", "准圣", "圣人"
    ];
    return realms[realmIndex] || "凡人";
  },
  
  // 计算HP倍率（改为翻倍机制）
  getHPMultiplier: function(level) {
    if (level === 0) return 1;
    // 每突破一级HP翻倍
    return Math.pow(2, level);
  },
  
  // 计算突破所需灵丹（根据品质）
  getRequiredLingdan: function(level, quality) {
    // 基础灵丹需求
    const baseLingdan = Math.floor(Math.pow(1.5, level) * 10);
    
    // 根据品质调整
    const coefficient = this.qualityCoefficients[quality] || 1.0;
    
    return Math.floor(baseLingdan * coefficient);
  },
  
  // 计算突破所需卡牌数量
  getRequiredCards: function(level) {
    // 每突破一级需要更多卡牌
    return Math.pow(2, level) * 2;
  },
  
  // 突破
  breakthrough: function(cardName, baseHp, quality) {
    if (!this.breakthroughData[cardName]) {
      this.breakthroughData[cardName] = {
        level: 0,
        baseHp: baseHp
      };
    }
    
    const info = this.breakthroughData[cardName];
    
    // 检查是否已达到最高境界
    if (info.level >= this.levels.length - 1) {
      return { success: false, message: '已达到最高境界（圣人九重）' };
    }
    
    // 计算所需资源
    const requiredCards = this.getRequiredCards(info.level);
    const requiredLingdan = this.getRequiredLingdan(info.level, quality);
    
    // 检查是否有足够的卡牌
    const availableCards = G.countMap[cardName] || 0;
    if (availableCards < requiredCards) {
      return { success: false, message: `需要${requiredCards}张${cardName}` };
    }
    
    // 检查是否有足够的灵丹
    if (RealmBattleSystem.resources.lingdan < requiredLingdan) {
      return { success: false, message: `需要${requiredLingdan}灵丹` };
    }
    
    // 消耗卡牌和灵丹
    G.countMap[cardName] -= requiredCards;
    if (G.countMap[cardName] === 0) {
      delete G.countMap[cardName];
      const index = G.owned.indexOf(cardName);
      if (index > -1) G.owned.splice(index, 1);
    }
    
    // 消耗灵丹
    RealmBattleSystem.resources.lingdan -= requiredLingdan;
    RealmBattleSystem.save();
    
    // 突破
    info.level += 1;
    
    // 保存数据
    this.save();
    saveSilent();
    
    const display = this.getBreakthroughDisplay(info.level);
    const newHp = baseHp * display.hpMultiplier;
    
    return {
      success: true,
      level: info.level,
      stage: display.stage,
      realm: display.realm,
      newHp: Math.floor(newHp),
      usedCards: requiredCards,
      usedLingdan: requiredLingdan,
      qualityMultiplier: this.qualityCoefficients[quality] || 1.0
    };
  },
  
  // 重置所有突破数据
  resetAll: function() {
    this.breakthroughData = {};
    this.save();
  }
};

// 初始化突破系统
BreakthroughSystem.init();

// ===== 六道轮回战斗系统 =====
window.RealmBattleSystem = {
  // 六道轮回境界
  realms: [
    // 六道轮回
    { name: "畜生道", level: 1, maxMonsterHp: 50, reward: { xianyuan: 10, lingdan: 2 } },
    { name: "饿鬼道", level: 2, maxMonsterHp: 100, reward: { xianyuan: 20, lingdan: 4 } },
    { name: "地狱道", level: 3, maxMonsterHp: 200, reward: { xianyuan: 30, lingdan: 6 } },
    { name: "修罗道", level: 4, maxMonsterHp: 400, reward: { xianyuan: 40, lingdan: 8 } },
    { name: "人间道", level: 5, maxMonsterHp: 800, reward: { xianyuan: 50, lingdan: 10 } },
    { name: "天道", level: 6, maxMonsterHp: 1600, reward: { xianyuan: 60, lingdan: 12 } },
    
    // 十八重地狱
    { name: "拔舌地狱", level: 7, maxMonsterHp: 3200, reward: { xianyuan: 70, lingdan: 14 } },
    { name: "剪刀地狱", level: 8, maxMonsterHp: 6400, reward: { xianyuan: 80, lingdan: 16 } },
    { name: "铁树地狱", level: 9, maxMonsterHp: 12800, reward: { xianyuan: 90, lingdan: 18 } },
    { name: "孽镜地狱", level: 10, maxMonsterHp: 25600, reward: { xianyuan: 100, lingdan: 20 } },
    { name: "蒸笼地狱", level: 11, maxMonsterHp: 51200, reward: { xianyuan: 110, lingdan: 22 } },
    { name: "铜柱地狱", level: 12, maxMonsterHp: 102400, reward: { xianyuan: 120, lingdan: 24 } },
    { name: "刀山地狱", level: 13, maxMonsterHp: 204800, reward: { xianyuan: 130, lingdan: 26 } },
    { name: "冰山地狱", level: 14, maxMonsterHp: 409600, reward: { xianyuan: 140, lingdan: 28 } },
    { name: "油锅地狱", level: 15, maxMonsterHp: 819200, reward: { xianyuan: 150, lingdan: 30 } },
    { name: "牛坑地狱", level: 16, maxMonsterHp: 1638400, reward: { xianyuan: 160, lingdan: 32 } },
    { name: "石压地狱", level: 17, maxMonsterHp: 3276800, reward: { xianyuan: 170, lingdan: 34 } },
    { name: "舂臼地狱", level: 18, maxMonsterHp: 6553600, reward: { xianyuan: 180, lingdan: 36 } },
    { name: "血池地狱", level: 19, maxMonsterHp: 13107200, reward: { xianyuan: 190, lingdan: 38 } },
    { name: "枉死地狱", level: 20, maxMonsterHp: 26214400, reward: { xianyuan: 200, lingdan: 40 } },
    { name: "磔刑地狱", level: 21, maxMonsterHp: 52428800, reward: { xianyuan: 210, lingdan: 42 } },
    { name: "火山地狱", level: 22, maxMonsterHp: 104857600, reward: { xianyuan: 220, lingdan: 44 } },
    { name: "石磨地狱", level: 23, maxMonsterHp: 209715200, reward: { xianyuan: 230, lingdan: 46 } },
    { name: "刀锯地狱", level: 24, maxMonsterHp: 419430400, reward: { xianyuan: 240, lingdan: 48 } },
    
    // 三十三重天
    { name: "太皇黄曾天", level: 25, maxMonsterHp: 838860800, reward: { xianyuan: 250, lingdan: 50 } },
    { name: "太明玉完天", level: 26, maxMonsterHp: 1677721600, reward: { xianyuan: 260, lingdan: 52 } },
    { name: "清明何童天", level: 27, maxMonsterHp: 3355443200, reward: { xianyuan: 270, lingdan: 54 } },
    { name: "玄胎平育天", level: 28, maxMonsterHp: 6710886400, reward: { xianyuan: 280, lingdan: 56 } },
    { name: "元明文举天", level: 29, maxMonsterHp: 13421772800, reward: { xianyuan: 290, lingdan: 58 } },
    { name: "七曜摩夷天", level: 30, maxMonsterHp: 26843545600, reward: { xianyuan: 300, lingdan: 60 } }
  ],
  
  // 当前境界
  currentRealm: 0,
  
  // 上阵卡牌
  battleCards: [],
  
  // 资源
  resources: {
    xianyuan: 0,
    lingdan: 0
  },
  
  // 战斗记录
  battleHistory: [],
  
  // 初始化
  init: function() {
    const saved = localStorage.getItem("myth_realm_battle_data");
    if (saved) {
      const data = JSON.parse(saved);
      this.currentRealm = data.currentRealm || 0;
      this.battleCards = data.battleCards || [];
      this.resources = data.resources || { xianyuan: 100, lingdan: 0 }; // 这里修改
      this.battleHistory = data.battleHistory || [];
    } else {
      // 第一次初始化时，设置默认仙缘为100
      this.resources = { xianyuan: 100, lingdan: 0 };
    }
  },
  
  // 保存数据
  save: function() {
    const data = {
      currentRealm: this.currentRealm,
      battleCards: this.battleCards,
      resources: this.resources,
      battleHistory: this.battleHistory
    };
    localStorage.setItem("myth_realm_battle_data", JSON.stringify(data));
  },
  
  // 获取当前境界信息
  getCurrentRealmInfo: function() {
    return this.realms[this.currentRealm] || this.realms[0];
  },
  
  // 前进到下一境界
  advanceRealm: function() {
    if (this.currentRealm < this.realms.length - 1) {
      this.currentRealm++;
      this.save();
      return { success: true, realm: this.getCurrentRealmInfo() };
    }
    return { success: false, message: '已到达最高境界' };
  },
  
  // 退回上一境界
  retreatRealm: function() {
    if (this.currentRealm > 0) {
      this.currentRealm--;
      this.save();
      return { success: true, realm: this.getCurrentRealmInfo() };
    }
    return { success: false, message: '已在最低境界' };
  },
  
  // 添加上阵卡牌
  addBattleCard: function(cardName) {
    if (this.battleCards.length >= 6) {
      return { success: false, message: '上阵卡牌已达上限（6张）' };
    }
    
    if (this.battleCards.includes(cardName)) {
      return { success: false, message: '该卡牌已上阵' };
    }
    
    this.battleCards.push(cardName);
    this.save();
    return { success: true, message: '上阵成功' };
  },
  
  // 移除上阵卡牌
  removeBattleCard: function(cardName) {
    const index = this.battleCards.indexOf(cardName);
    if (index > -1) {
      this.battleCards.splice(index, 1);
      this.save();
      return { success: true, message: '移除成功' };
    }
    return { success: false, message: '卡牌未上阵' };
  },
  
  // 添加上阵卡牌（批量）
  setBattleCards: function(cards) {
    this.battleCards = cards.slice(0, 6);
    this.save();
    return { success: true, message: '上阵成功' };
  },
  
  // 添加资源
  addResources: function(xianyuan = 0, lingdan = 0) {
    this.resources.xianyuan += xianyuan;
    this.resources.lingdan += lingdan;
    this.save();
    return { xianyuan: this.resources.xianyuan, lingdan: this.resources.lingdan };
  },
  
  // 逃跑判定
  tryEscape: function() {
    const escapeChance = 0.7; // 70%逃跑成功率
    const success = Math.random() < escapeChance;
    
    if (!success) {
      // 逃跑失败，重置所有数据
      reset();
      return { success: false, message: '逃跑失败！所有存档已重置！' };
    }
    
    return { success: true, message: '成功逃脱！' };
  },
  
  // 添加战斗记录
  addBattleHistory: function(result) {
    this.battleHistory.push({
      time: new Date().toLocaleString(),
      realm: this.getCurrentRealmInfo().name,
      result: result,
      resources: { ...this.resources }
    });
    
    if (this.battleHistory.length > 50) {
      this.battleHistory.shift();
    }
    
    this.save();
  },
  
  // 重置所有数据
  resetAll: function() {
    this.currentRealm = 0;
    this.battleCards = [];
    this.resources = { xianyuan: 100, lingdan: 0 };
    this.battleHistory = [];
    this.save();
  }
};

// 初始化境界战斗系统
RealmBattleSystem.init();