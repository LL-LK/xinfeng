import { EnvelopeData, StrategyConfig } from './types';

export const envelopeData: EnvelopeData[] = [
  {
    id: 1,
    title: '呐喊者',
    subtitle: '在信息封锁中撕开缺口',
    strategy: 'shouter',
    coverImage: '/assets/呐喊者/封面/d74541a4a7701c8f4f4e52618592cd1c_720.png',
    pages: [
      '/assets/呐喊者/第一页/产品信件_00.jpg',
      '/assets/呐喊者/第二页/产品信件_01.jpg',
      '/assets/呐喊者/第三页/产品信件_02.jpg',
      '/assets/呐喊者/第四页/d42aa525b8f81679b1edc06cf9b95cf8_720.png'
    ]
  },
  {
    id: 2,
    title: '燃灯者',
    subtitle: '在秩序动荡中坚守阵地',
    strategy: 'lighter',
    coverImage: '/assets/燃灯者/封面/c01bc64a836526742442f68577572148.png',
    pages: [
      '/assets/燃灯者/第一页/产品信件_03.jpg',
      '/assets/燃灯者/第二页/产品信件_04.jpg',
      '/assets/燃灯者/第三页/产品信件_05.jpg',
      '/assets/燃灯者/第四页/88a9250797f340e20dd5035e7da20b2a_720.png'
    ]
  },
  {
    id: 3,
    title: '织网者',
    subtitle: '在分散隔阂中凝聚力量',
    strategy: 'weaver',
    coverImage: '/assets/织网者/封面/619517eed9d0e11b2f82cf159e455985.jpg',
    pages: [
      '/assets/织网者/第一页/产品信件_06.jpg',
      '/assets/织网者/第二页/产品信件_07.jpg',
      '/assets/织网者/第三页/产品信件_08.jpg',
      '/assets/织网者/第四页/9ef377fc39a7edbd40044689e81d1f62_720.png'
    ]
  },
  {
    id: 4,
    title: '摆渡者',
    subtitle: '在道路受阻时另寻新途',
    strategy: 'crosser',
    coverImage: '/assets/摆渡者/封面/5912e55c4100c3cce4adee0a5886d1d1_720.png',
    pages: [
      '/assets/摆渡者/第一页/产品信件_09.jpg',
      '/assets/摆渡者/第二页/产品信件_10.jpg',
      '/assets/摆渡者/第三页/产品信件_11.jpg',
      '/assets/摆渡者/第四页/6b3ac317794ffac7dd39da9c1abd8ff5_720.png'
    ]
  },
  {
    id: 5,
    title: '潜火者',
    subtitle: '在严峻环境下保存火种',
    strategy: 'hider',
    coverImage: '/assets/潜火者/封面/87d22e6476750a4f12e762b5b926d8b2_720.png',
    pages: [
      '/assets/潜火者/第一页/产品信件_12.jpg',
      '/assets/潜火者/第二页/产品信件_13.jpg',
      '/assets/潜火者/第三页/产品信件_14.jpg',
      '/assets/潜火者/第四页/65f9ee12b2d39790b34189da0cf02980_720.png'
    ]
  }
];

export const strategyConfig: Record<string, StrategyConfig> = {
  shouter: {
    name: '呐喊者',
    landscape: '独秀峰',
    coreGraphic: '声波刺破云层',
    color: '#1E3A5F',
    animation: '刺破',
    description: '在信息封锁中撕开缺口'
  },
  lighter: {
    name: '燃灯者',
    landscape: '象鼻山',
    coreGraphic: '时钟 + 幕布交织',
    color: '#8B2500',
    animation: '维持',
    description: '在秩序动荡中坚守阵地'
  },
  weaver: {
    name: '织网者',
    landscape: '两江四湖',
    coreGraphic: '节点连线成网',
    color: '#2E8B57',
    animation: '编织',
    description: '在分散隔阂中凝聚力量'
  },
  crosser: {
    name: '摆渡者',
    landscape: '漓江断桥',
    coreGraphic: '报纸折成纸船',
    color: '#FFC107',
    animation: '转移',
    description: '在道路受阻时另寻新途'
  },
  hider: {
    name: '潜火者',
    landscape: '七星岩',
    coreGraphic: '冻土下藏光点',
    color: '#1A1A1A',
    animation: '隐匿',
    description: '在严峻环境下保存火种'
  }
};
