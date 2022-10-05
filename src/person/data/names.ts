import { Gender } from "./gender";

const surnames = [
    'Bai',
    'Cai', 'Cao', 'Chang', 'Chen', 'Cheng', 'Cui',
    'Dai', 'Deng', 'Ding', 'Dong', 'Du', 'Duan',
    'Fan', 'Fang', 'Feng', 'Fu',
    'Gao', 'Gong', 'Gu', 'Guo',
    'Han', 'Hao', 'He', 'Hou', 'Hong', 'Hu', 'Huang',
    'Jia', 'Jian', 'Jiang', 'Jin',
    'Kang', 'Ke', 'Kong',
    'Lai', 'Lei', 'Li', 'Liang', 'Liao', 'Lin', 'Liu', 'Long', 'Lu', 'Luo', 
    'Ma', 'Mao', 'Meng', 'Mo',
    'Ou',
    'Pan', 'Peng',
    'Qian', 'Qiao', 'Qin', 'Qiu',
    'Ren',
    'Shao', 'Shen', 'Shi', 'Song', 'Su', 'Sun',
    'Tan', 'Tang', 'Tao', 'Tian',
    'Wan', 'Wang', 'Wei', 'Wen', 'Wu',
    'Xia', 'Xiang', 'Xiao', 'Xie', 'Xin', 'Xiong', 'Xu', 'Xue',
    'Yan', 'Yang', 'Yao', 'Ye', 'Yi', 'Yin', 'Yu', 'Yuan',
    'Zeng', 'Zhang', 'Zhao', 'Zheng', 'Zhong', 'Zhou', 'Zhu', 'Zhuang', 'Zou'
];

const boyFirstNames = [
    'Xiu',      'Zixuan',       'Zihan',        'Yuxuan',       'Yuze',
    'Xiang',    'Wei',          'Tao',          'Shi',          'Kai',
    'Hao-Yu',   'Haoran',       'Guo',          'Fu',           'Dong',
    'Da-Fu',    'Chih-Cheng',   'Chen',         'Chao',         'Bowen',
    'Aiguo',    'Tu',           'Syaoran',      'Taio',         'Shen',
    'Shan',     'Ming',         'Manchu',       'Longwei',      'Lim',
    'Lee',      'Kuo',          'Kong',         'Kang',         'Jing',
    'Jiao-Long','Hu',           'Hou',          'Hong',         'Fa',
    'Dingbang', 'Delun',        'Chung',        'Chaun',        'Chang',
    'Li Qiang', 'Li Jun',       'Bambang',      'Zhang Yong',   'Li Jie'
]

const girlFirstNames = [
    'Alix',     'Bethsheba',    'Hien',     'Gho',      'Diu',
    'Da Xia',   'Genji',        'Hop',      'Huan',     'Jia Li',
    'Jiao',     'Liling',       'Lin',      'Liu',      'Loi',
    'Luan',     'Meilin',       'Meiling',  'Niu',      'Nuo',
    'Qing',     'Nuwa',         'Qi',       'Na',       'Li Hua',
    'Lixue',    'Nuan',         'Ming Yue', 'Mey',      'Meiying',
    'Lien',     'Lian',         'Li Ming',  'Lai',      'Pangfua',
    'Qinyang',  'Ting',         'Ushi',     'Yun',      'Caihong',
    'Ju',       'Jilpa',        'Heng',     'Genji',    'Da Xia',
    'Chu',      'Bo',           'Bai',      'Wang Fang','Li Jing'
]

export const generateName = (gender : Gender) : string => {
    const s = Math.floor(Math.random() * surnames.length);
    const surname = surnames[s];

    if (gender === Gender.Male) {
        const f = Math.floor(Math.random() * boyFirstNames.length);
        const fname = boyFirstNames[f];
        return `${surname} ${fname}`;

    } else {
        const f = Math.floor(Math.random() * girlFirstNames.length);
        const fname = girlFirstNames[f];
        return `${surname} ${fname}`;
    }
    
}