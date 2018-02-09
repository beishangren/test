import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Hobby from './Hobby.jsx';


class Greeter extends Component{
  constructor(props){
    super(props);
    this.state={
        // one :props.one,
        // two :props.two,
        // three :props.three,
        images:props.images,
        image:""
        // hobbies:["音乐","游戏","电影"]
    };
  }
  
  changePicture(num){
      this.setState({image :num});
  }
  // componentDidMount(){
  //   setTimeout(()=>{this.setState({change :two})},2000);
  //   setTimeout(()=>{this.setState({change :three})},4000);
  //   setTimeout(()=>{this.setState({change :one})},6000);
  // }
  // changeColor(){
    // var myh1=document.getElementById('h1');
    // ReactDOM.findDOMNode(myh1).style.color='red';
  //   this.refs.h1.style.color="blue";
  // }
  // addHobby(){
  //   let hobbyInput =this.refs.add;
  //   let val=hobbyInput.value;
  //   if(val){
  //       let hobbies=this.stste.hobbies;

  //       hobbies=[...hobbies,val];

  //       this.setState({
  //         hobbies
  //       });
  //   }
  // }
   componentDidMount(){
    this.setState({
      image:this.state.images[0].src
    })
  }
  render(){   
    return(
      <div>
        {/* <h1 ref="h1" onClick={this.changeColor.bind(this)}>姓名：{this.props.username}</h1>
        <h2>我的爱好：</h2>
          <ul>
          {/* 遍历传参 */}
              {/* {this.state.hobbies.map((hobby,i)=><Hobby key={i} hobby={hobby} />)}     */}
         {/* </ul> */}
        {/* <input type="text" ref="add"/><button onClick={this.addHobby.bind(this)}>添加爱好</button> */}
        <div ><img src={this.state.image}/></div>
        {this.state.images.map((item,i)=><button  onClick={this.changePicture.bind(this,item.src)} key={i}>{item.name}</button>)}
        {/* <button onClick={this.changePicture.bind(this,0)}>1</button>
        <button onClick={this.changePicture.bind(this,1)}>2</button>
        <button onClick={this.changePicture.bind(this,2)}>3</button> */}
      </div>
    );
  }
}

export default Greeter