import { Component } from 'react'
import Link from 'next/link'
import jsCookie from 'js-cookie';
import Login from '../pages/admin/login';
import NewsList from '../pages/admin/news_list';
import NewsAdd from '../pages/admin/news_add';

class Admin extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    };
        
    getContent = () => {
        var action = jsCookie.get('action');
        if(action == 'news_list'){
            return (<NewsList/>);
        }else if(action == 'add_news'){
            return (<NewsAdd/>);   
        }else if(action == ''){
            return (<Login/>);       
        }else{
            return ''; 
        }
    }
        
    getLogout = () => {
        var action = jsCookie.get('action');
        console.log('action = ' + action);
        if(action != ''){
            return (
                <a onClick={this.logoutClick} className="logout_but">Log out</a>
            );
        }else{
            return '';       
        }
    }
    
    logoutClick = (e) => {
         jsCookie.set('action', '');
         window.location.href = '/admin';
    }
    
    headerClick = (e) => {
         jsCookie.set('action', 'news_list');
         window.location.href = '/admin';
    }
    
    render() {
      return (
          <div className="container">
            <div className="header">
                <a className="header_but" onClick={this.headerClick}>Admin</a>
                {this.getLogout()}
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
                font-weight:bold;
            }
            .logout_but{
                float:right;
                padding:0px 12px 0px 12px;
                color:#FFF;
                cursor:pointer;
                font-weight:normal;
            }
        `}</style>
          </div>
      );
    }
}

export default Admin