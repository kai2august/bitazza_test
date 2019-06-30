import { Component } from 'react';
import Link from 'next/link';
import jsCookie from 'js-cookie';
import qs from 'querystring';

class UserNewsDetails extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id : 0,
            title : '',
            cover_image : '',
            description : '',
            publish_date : ''
        };
        let view_id = jsCookie.get('view_news_id');
        if(typeof(view_id) != 'undefined'){
            this.state.id = view_id;
        }
    };
        
    getNewsDetals = () => {
        var inst = this;
        (
            async function(){
                try {
                    var goid = 0;
                    if(typeof(inst.state.id) != 'undefined' && inst.state.id != 0){
                        goid = inst.state.id;
                        const response = await window.fetch('/news?id=' + goid , {
                            method: 'get',
                            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
                        })

                        if (response.ok) {
                            const { output } = await response.json();
                            if(output.status){
                                inst.setState({ 
                                    title : output.result.title, 
                                    cover_image : output.result.cover_image,
                                    description : output.result.description,
                                    publish_date : output.result.publish_date.toString().replace(/T/, ' ').replace(/\..+/, '')
                                });
                            }else{
                                console.log('Get News failed.');
                            }
                        } else {
                            console.log('Get News failed.');
                        }
                    } else {
                        console.log('No News ID.');
                    }
                } catch (error) {
                    console.log('Implementation or Network error.');
                }
            }
        )(this);
    }
        
    getImage = () => {
        if(this.state.cover_image != ''){
            return (
                <img src={this.state.cover_image} className="item_image"/>
            )     
        }else{
            return ''; 
        }
    }

    componentDidMount() {
        this.getNewsDetals();
    }
    
    render() {
      return (
            <div className="content_box">
                <div className="content_page">
                    <div className="item_title">{this.state.title}</div>
                    <div className="item_date">{this.state.publish_date}</div>
                    <div className="center_div">
                    {this.getImage()}
                    </div>
                    <div className="item_desc">{this.state.description}</div>
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
                    .item_image{
                        width:100%; 
                        height:auto;
                        display:block;
                    }
                    .item_title{
                        font-size:17px;
                        font-weight:bold; 
                        line-height:22px;
                        margin-top:12px;
                    }
                    .item_desc{
                        font-size:15px;
                        line-height:20px;
                        margin-top:16px;
                    }
                    .item_date{
                        height:16px;
                        font-size:12px;
                        line-height:16px;
                        color:#999999; 
                        margin-top:8px;
                    }
                    .center_div{
                        margin:8px;
                        text-align:center;
                    }
                `}</style>
            </div>
      );
    }
}

export default UserNewsDetails