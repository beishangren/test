import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class Process2 extends Component{
    
    // constructor(){
    //     super();
    //     this.state={
    //         phone:"567",
    //         servicePerson:"",
    //         code:"",
    //         one:0
    //     };
    // }
    // handleChange(event){
    //     const target=event.target;
    //     const value=target.value;
    //     const name=target.name;
    //     this.setState({
    //         [name]:value
    //     });
    //     this.setState({one:1});
        
    // }

    render(){
        // const styleProcess={
        //     head:{
        //         backgroundColor:"#f2f2f2",
        //         lineHeight:"5rem",
        //         textAlign:"center",
        //         fontSize:"2rem",
        //         fontWeight:"800"
                
        //     },
        //     form:{
        //         textAlign:"center",
        //     },
        //     div1:{
        //         backgroundColor:"#f2f2f2",
        //         fontSize:"1.5rem",
        //         margin:"1rem",
                
        //     },
        //     input:{
        //         backgroundColor:"#f2f2f2",
        //         width:"80%",
        //         border:"0",
        //     }
        // };
        return(
            <div>
                <div >商家入驻-入驻类型</div>
                <form  >
                    {/* <div style={styleProcess.div1}>
                        <label>手机号</label><input type="text" name="phone" placeholder="请输入电话号码" value={this.state.phone} onChange={this.handleChange.bind(this)} style={styleProcess.input}/><br/>
                    </div>
                    <div style={styleProcess.div1}>
                        <label>服务人</label><input type="text" name="servicePerson" placeholder="请输入服务人名称" value={this.state.servicePerson} onChange={this.handleChange.bind(this)} style={styleProcess.input}/><br/>
                    </div>
                    <div style={styleProcess.div1}>
                        <label>验证码</label><input type="text" name="code" placeholder="请输入验证码" value={this.state.code} onChange={this.handleChange.bind(this)} style={styleProcess.input}/><br/>
                    </div> */}
                    <input type="button"  value="上一步" onClick={this.props.next.bind(this,0)}/>
                </form>
            </div>
        )  
    }
} 

export default Process2