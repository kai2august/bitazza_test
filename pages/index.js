import { Component } from 'react'
import Link from 'next/link'
import jsCookie from 'js-cookie';
import UserNewsList from '../pages/news';
import UserNewsDetails from '../pages/news_details';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
        let action = jsCookie.get('user_action');
        if(typeof(action) != 'undefined'){
            this.state.action = action;
        }else{
            this.state.action = 'home';
        }
    };
        
    getTitle = () => {
        if(this.state.action == 'home'){
            return '';
        }else if(this.state.action == 'news_details'){
            return (
                <a className="header_but" onClick={this.headerClick}>&lt; Back</a>
            );     
        }else{
            return ''; 
        }
    }
        
    getContent = () => {
        if(this.state.action == 'home'){
            return (
                <UserNewsList/>
            )
        }else if(this.state.action == 'news_details'){
            return (
                <UserNewsDetails/>
            )    
        }else{
            return ''; 
        }
    }
    
    headerClick = (e) => {
        jsCookie.set('view_news_id', 0);
        jsCookie.set('user_action', 'home');
        this.setState({ action : 'home' });
    }
    
    render() {
      return (
          <div className="container">
            <div className="header">
                {this.getTitle()}News
                <div className="clear"></div>
            </div>
          {this.getContent()}
        <style jsx global>{`
            html {
                height: 100%;
                font-family:Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size:15px;
                line-height:17px;
                color:#333;
            }
            body{
                margin:0px;
                padding:0px;
                width:100%; 
                height:100%;
            }
            .container{
                height:100%;
            }
            #__next{
                height:100%;
            }
            .header{
                height:28px;
                padding:8px;
                background-color:#006; 
                color:#FFF;
                line-height:28px;
                font-weight:bold;
            }
            .header_but{
                float:left;
                padding:0px 12px 0px 12px;
                color:#FFF;
                cursor:pointer;
                font-weight:normal;
                margin-right:16px;
            }
        `}</style>
          </div>
      );
    }
}

export default Home