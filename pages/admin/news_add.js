import { Component } from 'react'
import qs from 'querystring'
import jsCookie from 'js-cookie';

class NewsAdd extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            images: [],
            description: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    
    async handleUpload (e) {
        const images = this.state.images;
        const filesUpload = e.target.files;
        const allImages = Object.keys(filesUpload).map(async key => {
          return new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.readAsDataURL(filesUpload[key])
            reader.onload = () => {
              let dataURI = reader.result
              let base64 = dataURI.replace(/^[^,]+,/, '')
              let byteCharacters = atob(base64)
              let byteNumbers = new Uint8Array(byteCharacters.length)

              for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i)
              }
              let blob = new Blob([byteNumbers], { type: 'image/jpeg' })
              let urlCreator = window.URL || window.webkitURL
              let imageUrl = urlCreator.createObjectURL(blob)
              let imageDetail = {
                url: imageUrl,
                fileUpload: filesUpload[key]
              }
              resolve(imageDetail)
            }
          })
        })
        const data = await Promise.all(allImages)
        this.setState({ images: images.concat(data) })
      }
      
      renderImages () {
        const { images } = this.state
        if (this.state.images.length > 0) {
          return this.state.images.map((image, index) => {
            return (
              <div key={image.url}>
                <img src={image.url} width={100} />
                <br/>
                <button onClick={() => {
                  images.splice(index, 1)
                  this.setState({images})
                }}>
                  Delete
                </button>
              </div>
            )
          })
        }else{
            return (
                <input
                    type='file'
                    name='uploadAwsS3' 
                    onChange={this.handleUpload.bind(this)}
                    accept='image/*'
                />
            )
        }
      }
    
    submitClick = () => {
        console.log(this.state);
        let inst = this;
        (
            async function(){
                try {
                    var input = {};
                    input.title = inst.state.title;
                    input.description = inst.state.description;
                    if(inst.state.images.length > 0){
                        const uploadAllImage = inst.state.images.map(async image => {
                          return new Promise((resolve, reject) => {
                            var formData = new FormData();
                            let file = image.fileUpload;
                            console.log(file);
                            formData.append('file', file);
                            formData.append('action', 'upload_pic');
                            formData.append('ref', new Date().getTime());
                            let xhr = new XMLHttpRequest();
                            xhr.onreadystatechange = function () {
                              if (xhr.readyState === 4) {
                                const response = JSON.parse(xhr.response);
                                  console.log(response);
                                if (response.success == true) {
                                  delete image.fileUpload;
                                  resolve({...image, url: response.pic_path});
                                }else{
                                  reject(image);
                                }
                              }
                            }
                            xhr.open('post', 'http://kaiapp.com/bitazza/upload_pic.php', true);
                            xhr.send(formData);
                          })
                        })
                        var res = await Promise.all(uploadAllImage);
                        input.cover_image = '';
                        if(res){
                            if(res.length == 1){
                                input.cover_image = res[0].url;
                            }
                        }
                    }
            
                  const response = await window.fetch('/admin/news', {
                    method: 'post',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                    body: qs.stringify(input)
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
                        <td align="left" valign="top">
                            <div className="fdesc">Title</div>
                            <input 
                                name="title" 
                                type="text" 
                                className="tf" 
                                maxLength="255"
                                onChange={e => this.handleChange(e)}
                            />
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top">
                            <div className="fdesc">Cover Image</div>
                            <div id='showPreviewUpload'>
                                {this.renderImages()}
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top">
                            <div className="fdesc">Description</div>
                            <textarea 
                                name="description" 
                                className="ta" 
                                cols="" rows="5" 
                                wrap="virtual"
                                onChange={e => this.handleChange(e)}
                            ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" valign="top">
                            <a onClick={this.submitClick} className="submit_button">Submit</a>
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
            .submit_button{
                padding:4px 12px 4px 12px;
                background-color:#006; 
                color:#FFF;
                border-radius:8px;
                cursor:pointer;
            }
            .tf{
                width:300px;
                font-size:15px;
                padding:4px 12px 4px 12px;
                border-radius:8px;
            }
            .ta{
                width:300px;
                font-size:15px;
                padding:4px 12px 4px 12px;
            }
            .fdesc{
                font-size:13px;
                color:#999999;
                margin:4px 0px 4px 0px;
            }
        `}</style>
            </div>
      );
    }
}

export default NewsAdd