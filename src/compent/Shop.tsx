import {Component} from "react";
import {Menu, ShopInfo} from "../model/model";
import Api from "../utils/api"
import {AutoCenter, Avatar, Card, Divider, Grid, List, SearchBar} from "_antd-mobile@5.14.3@antd-mobile";
import {Button, Dialog, Modal} from "antd-mobile";

interface ShopSTate {
    menu_list:Menu[]
    show_list:Menu[]

    shop:ShopInfo

    shopping_cart:Menu[]

    count_price:number
}

interface ShopProps {
    shop_id:number
}

export class Shop extends Component<ShopProps, ShopSTate>{

    constructor(props:ShopProps) {
        super(props);

        this.state = {
            menu_list: [],
            show_list: [],
            // @ts-ignore
            shop: {},
            shopping_cart:[],

            count_price:0

        }
    }

    componentDidMount() {
        console.log(this.props.shop_id)
        Api.menu_by_shop_id(this.props.shop_id).then(r => {
            this.setState({
                menu_list:r.data,
                show_list:r.data
            })
            console.log(r)
        })
        Api.shop_info(this.props.shop_id).then(r => {
            this.setState({
                shop:r.data
            })
        })
    }

    searchChange = (data:string) => {
        let search_list = this.state.menu_list.filter((value => {
            return value.name.includes(data);
        }))
        this.setState({
            show_list:search_list
        })
    }



    add_cart = (menu:Menu)=>{

        let temp:Menu[] = this.state.shopping_cart
        temp.push(menu)
        this.setState({
            shopping_cart:temp,
            count_price:this.state.count_price+menu.price
        })
        Dialog.show({content:"加入成功",closeOnMaskClick:true})
    }

    result = async ()=>{
        if (this.state.count_price === 0){
            Modal.alert({content:"请先选择商品吧！"})
            return
        }
        const  result = await Modal.confirm({
            content: <>
                <ul>
                    {this.state.shopping_cart.map((menu)=>{
                        return (
                            <>
                            <li>{menu.name}:{menu.price}</li>
                            </>
                        )
                    })}
                </ul>
                <h3>合计：{this.state.count_price}元</h3>
            </>
        })
        if (result){
            Modal.show({content:"支付成功",closeOnMaskClick:true})
            this.setState({
                shopping_cart:[],
                count_price:0
            })
        }

    }

    render() {
        return <>
            <SearchBar
                placeholder={"请输入菜名"}
                style={{
                    marginTop:window.innerHeight*0.03,
                    '--height': '50px',
                    '--border-radius': '100px',
                }}
                onChange={this.searchChange}
            />

            <h1>{this.state.shop.name}</h1>
            <h3>公告：</h3>
            <p style={{marginRight:10,marginLeft:5}}>{this.state.shop.placard}</p>

            <Button onClick={this.result} block={true} style={{background:"#75d375"}} type={"button"} >结算</Button>
            <List header={"菜单列表"}>

            {this.state.show_list.map((menu) => {
                return (
                    <List.Item>


                    <div key={menu.id}>
                        <Card>
                            <Grid columns={5}>
                                <Grid.Item
                                    style={{
                                        // borderRightWidth:1,
                                        // borderRightStyle:"solid",
                                        // borderRightColor:"orange",
                                    }}
                                    span={2}>
                                    <AutoCenter>
                                        <Avatar style={{"--size": "140px"}} src={menu.img}/>
                                    </AutoCenter>
                                </Grid.Item>
                                <Grid.Item span={3}>
                                    <h2>{menu.name}</h2>
                                    <span style={{color: "red"}}>{menu.good}分</span>&nbsp;&nbsp;
                                    <span style={{}}>月售{menu.sold}</span><br/>
                                    <span>价格：{menu.price}元</span>
                                    <br/>
                                    <Button onClick={this.add_cart.bind(this,menu)} color={"success"}>加入购物车</Button>
                                </Grid.Item>
                            </Grid>
                        </Card>
                        <Divider/>
                    </div>
                    </List.Item>
                )
            })}
            </List>
        </>
    }
}
