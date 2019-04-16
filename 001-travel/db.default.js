/*global db*/
/*eslint no-undef: 'error'*/

let data = {
    swiperList: [
        {
            id: "001",
            src:
                "https://img1.qunarzz.com/vc/5a/8f/69/16cbf52c43d04f6940a6786679.jpg",
            alt: "三峡踏青"
        },
        {
            id: "002",
            src:
                "https://img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg",
            alt: "五星级酒店"
        },
        {
            id: "003",
            src:
                "https://img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg",
            alt: "春游"
        },
        {
            id: "004",
            src:
                "https://img1.qunarzz.com/vc/d3/79/22/687da305c0ea0532a2c7d3cc23.jpg",
            alt: "春季踏青行"
        },
        {
            id: "005",
            src:
                "https://img1.qunarzz.com/vc/80/80/1a/72b8f423c33e581ca72fc136da.jpg",
            alt: "探春大会"
        }
    ],
    iconList: [
        {
            id: "0001",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
            alt: "景点门票"
        },
        {
            id: "0002",
            src:
                "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
            alt: "滑雪季"
        },
        {
            id: "0003",
            src:
                "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
            alt: "泡温泉"
        },
        {
            id: "0004",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
            alt: "动植园"
        },
        {
            id: "0005",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
            alt: "游乐园"
        },
        {
            id: "0006",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
            alt: "必游榜单"
        },
        {
            id: "0007",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
            alt: "演出"
        },
        {
            id: "0008",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
            alt: "城市观光"
        },
        {
            id: "0009",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
            alt: "一日游"
        },
        {
            id: "0010",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
            alt: "城市观光瓦大我的阿瓦打我"
        },
        {
            id: "0011",
            src:
                "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
            alt: "一日游达"
        }
    ],
    recommendList: [
        {
            id: "0001",
            src:
                "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
            title: "故宫",
            desc: "东方宫殿建筑代表，世界宫殿建筑典范",
            price: "￥30",
            address: "东城区"
        },
        {
            id: "0002",
            src:
                "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
            title: "南山滑雪场",
            desc: "北京专业级滑雪圣地",
            price: "￥120",
            address: "平谷区"
        },
        {
            id: "0003",
            src:
                "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
            title: "天安门广场",
            desc: "我爱北京天安门，天安门上太阳升",
            price: "￥10",
            address: "东城区"
        },
        {
            id: "0004",
            src:
                "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
            title: "水立方",
            desc: "中国的荣耀，阳光下的晶莹水滴",
            price: "￥120",
            address: "海淀区"
        },
        {
            id: "0005",
            src:
                "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
            title: "温都水城养生馆",
            desc: "各种亚热带植物掩映其间仿佛置身热带雨林",
            price: "￥60",
            address: "顺义区"
        }
    ],
    weekendList: [
        {
            id: "0001",
            src:
                "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
            title: "北京温泉排行榜",
            desc: "细数北京温泉，温暖你的冬天"
        },
        {
            id: "0002",
            src:
                "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
            title: "北京必游TOP10",
            desc: "来北京必去的景点非这些地方莫属"
        },
        {
            id: "0003",
            src:
                "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
            title: "寻找北京的皇城范儿",
            desc: "数百年的宫廷庙宇，至今依旧威严霸气"
        },
        {
            id: "0004",
            src:
                "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
            title: "学生最爱的博物馆",
            desc: "周末干嘛？北京很多博物馆已经免费开放啦"
        },
        {
            id: "0005",
            src:
                "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
            title: "儿童剧场，孩子的乐园",
            desc: "带宝贝观看演出，近距离体验艺术的无穷魅力"
        }
    ]
}



module.exports = data;