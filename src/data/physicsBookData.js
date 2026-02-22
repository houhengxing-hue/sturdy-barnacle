// 《什么是物理》—— 张虎岗 互动数据
export const bookMeta = {
  title: '什么是物理',
  author: '张虎岗',
  authorIntro: '25年教龄资深教师',
  style: {
    writing: '通俗口语化，幽默而不失严谨',
    feature: '揭示科学思维方法',
  },
}

export const modules = [
  {
    id: 'sound-light',
    title: '声与光',
    icon: '🔊',
    color: 'from-amber-500/20 to-orange-600/10',
    borderColor: 'border-amber-500/50',
    analogy: '《西游记》中的千里眼顺风耳',
    topics: [
      { id: 's1', title: '声学概念', content: '声音是怎么产生的？振动！就像孙悟空的金箍棒敲山震虎，物体的振动通过介质传播，我们的耳朵才能听到。记住：真空不传声，月球上喊破嗓子也没人听见。' },
      { id: 's2', title: '光的折射', content: '光从一种介质进入另一种介质时会发生偏折，就像悟空的金箍棒插进水里会「弯」一样。折射让筷子在水里看起来折了，也让鱼叉要往鱼的下方叉才能叉中。' },
      { id: 's3', title: '凸透镜成像', content: '凸透镜能把光线会聚，形成实像或虚像。放大镜、相机、眼睛，都是凸透镜的功劳。记住口诀：物近像远像变大，物远像近像变小。' },
    ],
    poetry: '「声波阵阵传千里，光影斑驳入眼眸」',
  },
  {
    id: 'heat',
    title: '热学',
    icon: '🔥',
    color: 'from-red-500/20 to-rose-600/10',
    borderColor: 'border-red-500/50',
    analogy: '火焰山的 thermodynamics',
    topics: [
      { id: 'h1', title: '物态变化', content: '固、液、气三态之间的相互转化。冰融化成水要吸热，水蒸发成气也要吸热。为什么夏天洒水会凉快？因为水蒸发吸热！' },
      { id: 'h2', title: '热传递', content: '热传递有三种方式：传导（接触传热）、对流（流体流动）、辐射（电磁波）。冬天把手放暖气片上是传导，烧水时水在壶里翻滚是对流，晒太阳取暖是辐射。' },
      { id: 'h3', title: '比热容', content: '不同物质升高相同温度需要的热量不同。水的比热容大，所以海边冬暖夏凉；沙漠的沙子比热容小，白天晒得滚烫，晚上迅速变凉。' },
    ],
    poetry: '「冰融水沸寻常事，热量往来有乾坤」',
  },
  {
    id: 'force-motion',
    title: '力与运动',
    icon: '⚙️',
    color: 'from-emerald-500/20 to-teal-600/10',
    borderColor: 'border-emerald-500/50',
    analogy: '悟空的金箍棒与筋斗云',
    topics: [
      { id: 'f1', title: '速度与匀速直线运动', content: '速度 = 路程 ÷ 时间。匀速直线运动最简单：速度不变， direction 不变。就像悟空的筋斗云，一个跟头十万八千里，匀速前进！' },
      { id: 'f2', title: '力的三要素与种类', content: '力有三要素：大小、方向、作用点。重力、弹力、摩擦力是初中常考三大力。摩擦力不一定是阻力，没有摩擦力我们走路都困难。' },
      { id: 'f3', title: '机械能与机械效率', content: '动能、势能可以相互转化。机械效率 = 有用功 ÷ 总功。没有100%效率的机器，就像没有完美的人——「短路尚如此，何况人乎」。' },
    ],
    poetry: '「力推万物行，能转乾坤动」',
  },
  {
    id: 'electric-magnetic',
    title: '电与磁',
    icon: '⚡',
    color: 'from-violet-500/20 to-indigo-600/10',
    borderColor: 'border-violet-500/50',
    analogy: '雷公电母的法术',
    topics: [
      { id: 'e1', title: '电路与欧姆定律', content: '电流、电压、电阻，欧姆定律 I = U/R 把它们串起来。串联分压，并联分流。记住：短路时电流很大，危险！' },
      { id: 'e2', title: '电磁现象', content: '电生磁（奥斯特实验），磁生电（法拉第电磁感应）。电动机和发电机就是这对「 twins 」。没有电磁，就没有现代文明。' },
    ],
    poetry: '「电闪雷鸣天地合，磁场无形万物牵」',
    insight: '短路尚如此，何况人乎 —— 实验感悟',
  },
]
