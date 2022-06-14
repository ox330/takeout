import Http from "./request";
import {ShopInfo,Menu} from "../model/model";

let http = new Http({
    baseURL: "/",
    timeout: 30000
});




class API {
    shop_list = async ()=> {
        return (await http.get<ShopInfo[]>("/shop"))
    }

    menu_by_shop_id = async (id:number) => {
        return (await http.get<Menu[]>("/menu?shop_id="+id))
    }
    shop_info = async (id:number) => {
        return (await http.get<ShopInfo>("/shop/"+id))
    }
}


export default new API();
