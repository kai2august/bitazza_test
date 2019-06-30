import { Component } from 'react';
import Link from 'next/link';
import jsCookie from 'js-cookie';
import qs from 'querystring';

class NewsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            dates : ['All']
        };
        jsCookie.set('date_filter', '0');
    };
        
    getList = () => {
        var inst = this;
        (
            async function(){
                try {
                    var date_filter = jsCookie.get('date_filter');
                    if(typeof(date_filter) == 'undefined'){
                        date_filter = 0;
                        jsCookie.set('date_filter', '0');
                    }
                    const response = await window.fetch('/newslist?date_filter=' + date_filter, {
                        method: 'get',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
                    })

                    if (response.ok) {
                        const { output } = await response.json();
                        if(output.status){
                            inst.setState({ items : output.result });
                            var ndates = ['All'];
                            console.log(output.result);
                            if(date_filter == '0' && inst.state.items.length > 0){
                                for(var i = 0; i < inst.state.items.length; i++){
                                    var item = inst.state.items[i];
                                    var item_dt = item.publish_date.replace(/T/, ' ').replace(/\..+/, '').split(' ');
                                    if(ndates.indexOf(item_dt[0]) == -1){
                                        ndates.push(item_dt[0]);
                                    }
                                }
                                inst.setState({ dates : ndates });
                            }
                        }else{
                            console.log('List News failed.');
                        }
                    } else {
                        console.log('List News failed.');
                    }
                } catch (error) {
                    console.log('Implementation or Network error.');
                }
            }
        )(this);
    }

    handleChange = (e) => {
        if(e.target.name == 'date_filter'){
            jsCookie.set('date_filter', e.target.value);
            this.getList();
            //window.location.href = '/admin';
        }
    };
    
    addNewsClick = () => {
        jsCookie.set('action', 'add_news');
        window.location.href = '/admin';
    };

    componentDidMount() {
        this.getList();
    }
    
    render() {
      return (
            <div className="content_box">
                <div className="content_page">
                    <div className="table_header">
                        <div className="filter_box">
                          <select className="myselect" name="date_filter" onChange={e => this.handleChange(e)}>
                            {this.state.dates && this.state.dates.length > 0 && this.state.dates.map((k, v) => {
                                if(k != 'All'){
                                    return <option key={v} value={k}>{k}</option>
                                }else{
                                    return <option key={v} value="0">All</option>
                                }
                            })}
                          </select>
                        </div>
                        <div onClick={this.addNewsClick} className="add_but">+ Add News</div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                    <div className="item_group">
                        {this.state.items && this.state.items.length > 0 && this.state.items.map((k, v) => {
                            return <div key={k.id} className="item_box"><div className="item_image" style={{backgroundImage:`url(${k.cover_image})`}}></div><div className="item_content"><div className="item_title">{k.title}</div><div className="item_desc">{k.description}</div><div className="item_date">{k.publish_date.replace(/T/, ' ').replace(/\..+/, '')}</div></div><div className="clear"></div></div>
                        })}
                    </div>
                </div>
                <style jsx>{`
                    .content_box{
                        height:calc(100% - 44px);
                        overflow-x:hidden;
                        overflow-y:auto;
                    }
                    .content_page{
                        padding:8px;
                    }
                    .add_but{
                        float:right;
                        padding:4px 12px 4px 12px;
                        background-color:#006; 
                        color:#FFF;
                        border-radius:8px;
                        cursor:pointer;
                        margin-left:12px;
                    }
                    .table_header{
                        float:left;
                    }
                    .filter_box{
                        float:left;
                    }
                    .myselect{
                        font-size:15px;
                        border:2px solid #d3d3d5;
                        background-color:#f3f3f5; 
                        border-radius:0px; 
                        -webkit-border-radius:0px; 
                        appearance:none; 
                        -webkit-appearance: none; 
                        outline:none;
                        position: relative;
                        text-align:left;
                        z-index: 99;
                        line-height:20px;
                        padding:0px 36px 0px 8px;
                        background:url(/static/images/select_arrow.png) no-repeat right #fff;
                    }
                    .clear{
                        clear:both;
                    }
                    .item_group{
                        margin-top:16px;
                    }
                    .item_box{
                        margin:0px 8px 8px 8px;
                        padding:8px;
                        border-radius:8px; 
                        background-color:#f3f3f5; 
                    }
                    .item_image{
                        float:left; 
                        width:100px; 
                        height:100px; 
                        background-position:top center; 
                        background-repeat:no-repeat; 
                        background-size:contain; 
                        margin-right:8px; 
                        display:block; 
                    }
                    .item_content{
                        float:left; 
                        width:calc(100% - 124px); 
                    }
                    .item_title{
                        display: -webkit-box;
                        height:42px;
                        font-size:16px;
                        font-weight:bold; 
                        line-height:21px;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .item_desc{
                        display: -webkit-box;
                        height:54px;
                        font-size:14px;
                        line-height:18px;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .item_date{
                        height:16px;
                        font-size:12px;
                        line-height:16px;
                        color:#999999; 
                        margin-top:8px;
                    }
                `}</style>
            </div>
      );
    }
}

export default NewsList