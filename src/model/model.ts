export interface ShopInfo {
    id:number //id
    name:string //店铺名
    location:number //距离
    score:number //评分
    sold:number //月售出
    avatar:string // 头像链接
    placard:string
}

export interface Menu {
    id:number
    name:string
    price:number
    sold:number
    good:number
    img:string
}
