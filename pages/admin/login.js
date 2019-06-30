import { Component } from 'react'
import qs from 'querystring'
import jsCookie from 'js-cookie';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    
    loginClick = () => {
        console.log(this.state);
        let inst = this;
        (
            async function(){
                try {
                  const response = await window.fetch('/admin', {
                    method: 'post',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                    body: qs.stringify(inst.state)
                  })

                  if (response.ok) {
                    const { output } = await response.json()
                    if(output.status){
                        jsCookie.set('action', 'news_list');
                        window.location.href = '/admin';
                    }else{
                        console.log('Login failed.')
                    }
                  } else {
                    console.log('Login failed.')
                  }
                } catch (error) {
                  console.log('Implementation or Network error.')
                }
            }
        )(this);
    }
    
    render () {
      return (
            <div className="content_box">
                <form onSubmit={e => {
                        e.preventDefault()
                      }}>
                    <table border="0" align="center" cellPadding="8" cellSpacing="0">
                      <tbody>
                      <tr>
                        <td align="center" valign="top">
                            <input 
                                id="user" 
                                name="user" 
                                type="text" 
                                className="login_tf" 
                                maxLength="16"
                                value={this.state.name}
                                onChange={e => this.handleChange(e)}
                            /></td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                            <input 
                                id="pass" 
                                name="pass" 
                                type="password" 
                                className="login_tf" 
                                maxLength="16"
                                value={this.state.name}
                                onChange={e => this.handleChange(e)}
                            /></td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                            <a onClick={this.loginClick} className="login_button">Login</a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
              </form>
        <style jsx>{`
            .content_box{
                height:calc(100% - 60px);
                padding:8px;
            }
            .login_button{
                padding:4px 12px 4px 12px;
                background-color:#006; 
                color:#FFF;
                border-radius:8px;
                cursor:pointer;
            }
            .login_tf{
                font-size:15px;
                padding:4px 12px 4px 12px;
                text-align:center;
                border-radius:8px;
            }
        `}</style>
            </div>
      );
    }
}

export default Login