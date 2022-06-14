// mock.js
// 使用 Mock
const Mock = require('mockjs');
const data = Mock.mock("/shop", {
    //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。

    "code": 200,
    "msg": "获取成功",
    "data": [
        {
            "id": 1,
            "name": "粉螺堂-柳州螺狮粉",
            "location": 1.5,
            "score": 4.8,
            "sold": 3561,
            "avatar": "https://img.88tph.com/tphc.1/production/20180109/12444847.jpg"
        },
        {
            "id": 2,
            "name": "肯德基-宅急送",
            "location": 1.8,
            "score": 4.6,
            "sold": 2000,
            "avatar": "https://img-bsy.txrpic.com/preview/Element/00/00/22/55/E-225547-1D86E81C8.png?imageMogr2/quality/90/thumbnail/!800x%3E"
        },
        {
            "id": 3,
            "name": "容城传奇新派冒菜",
            "location": 0.29,
            "score": 4.7,
            "sold": 2381,
            "avatar": "https://img95.699pic.com/element/40186/0099.png_860.png"
        },
        {
            "id": 4,
            "name": "巴西烤肉黄焖鸡瓦香鸡",
            "location": 0.29,
            "score": 4.7,
            "sold": 2381,
            "avatar": "https://img95.699pic.com/element/40186/0099.png_860.png"
        }
    ]
});
// 输出结果

export let data1;
data1 = Mock.mock("/menu?shop_id=1",{

    "code": 200,
    "msg": "获取成功",
    "data": [
        {
            "id": 1,
            "name": "粉螺堂-柳州螺狮粉",
            "price": 1.5,
            "good": 4.8,
            "sold": 3561,
            "img": "https://img.88tph.com/tphc.1/production/20180109/12444847.jpg"
        },
        {
            "id": 2,
            "name": "肯德基-宅急送",
            "price": 1.8,
            "good": 4.6,
            "sold": 2000,
            "img": "https://img-bsy.txrpic.com/preview/Element/00/00/22/55/E-225547-1D86E81C8.png?imageMogr2/quality/90/thumbnail/!800x%3E"
        },
        {
            "id": 3,
            "name": "容城传奇新派冒菜",
            "price": 0.29,
            "good": 4.7,
            "sold": 2381,
            "img": "https://img95.699pic.com/element/40186/0099.png_860.png"
        },
        {
            "id": 4,
            "name": "巴西烤肉黄焖鸡瓦香鸡",
            "price": 0.29,
            "good": 4.7,
            "sold": 2381,
            "img": "https://img95.699pic.com/element/40186/0099.png_860.png"
        }
    ]
})

export let data2;

data2 = Mock.mock("/shop?id=1",{
    "code": 200,
    "msg": "获取成功",
    "data":
        {
            "id": 1,
            "name": "粉螺堂-柳州螺狮粉",
            "location": 1.5,
            "score": 4.8,
            "sold": 3561,
            "avatar": "https://img.88tph.com/tphc.1/production/20180109/12444847.jpg",
            "placard":"React Hot Loader 对项目有比较大的侵入性， 而 antd-mobile 中的很多组件（例如 Swiper Tabs Form TabBar SideBar Dropdown Space Steps）并不能和它兼容，而且 React Hot Loader 本身也在 README 中写了推荐大家不要再使用，所以请考虑移除 React Hot Loader 或将其替换为 React Fast Refresh。"
        }
})

export default data


