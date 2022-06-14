import {Component} from "react";
import {AutoCenter, Avatar, Card, Divider, Grid, SearchBar} from 'antd-mobile'
import Api from "../utils/api"
import {ShopInfo} from "../model/model";

interface HomeSTate {
    shop_list: ShopInfo[] //所有数据
    show_list: ShopInfo[] //显示的数据
}

export class Home extends Component<any, HomeSTate> {

    constructor(props: any) {
        super(props);
        this.state = {
            shop_list: [],
            show_list: []
        }
    }

    componentDidMount() {
        Api.shop_list().then(r => {
            this.setState({
                shop_list: r.data,
                show_list: r.data
            })
        })
    }

    searchChange = (data: string) => {
        let search_list = this.state.shop_list.filter((value => {
            return value.name.includes(data);
        }))
        this.setState({
            show_list: search_list
        })
    }

    cardOnClick = (id: number) => {
        this.props.set_shop_id(id)
        this.props.navigate("/shop")
    }

    render() {
        return <>
            <SearchBar
                placeholder={"请输入店铺名称"}
                style={{
                    marginTop: window.innerHeight * 0.03,
                    '--height': '50px',
                    '--border-radius': '100px',
                }}
                onChange={this.searchChange}
            />
            <Divider/>
            {this.state.show_list.map((shop) => {
                return (
                    <div key={shop.id}>
                        <Card onClick={this.cardOnClick.bind(this, shop.id)}>
                            <Grid columns={5}>
                                <Grid.Item
                                    style={{
                                        // borderRightWidth:1,
                                        // borderRightStyle:"solid",
                                        // borderRightColor:"orange",
                                    }}
                                    span={2}>
                                    <AutoCenter>
                                        <Avatar style={{"--size": "140px"}} src={shop.avatar}/>
                                    </AutoCenter>
                                </Grid.Item>
                                <Grid.Item span={3}>
                                    <h2>{shop.name}</h2>
                                    <span style={{color: "red"}}>{shop.score}分</span>&nbsp;&nbsp;
                                    <span style={{}}>月售{shop.sold}</span><br/>
                                    <span>距离{shop.location}km</span>


                                </Grid.Item>
                            </Grid>
                        </Card>
                        <Divider/>
                    </div>

                )
            })}
        </>
    }
}
