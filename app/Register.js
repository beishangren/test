var React = require('react');
var ReactDOM = require('react-dom');
import Process1 from './register/Process1'
import Process2 from './register/Process2'
class Register extends React.Component{
    constructor (){
        super();
        this.state={
            phone:"",
            servicePerson:"",
            code:"",
            one:"",
            ind:<Process1 next={this.next.bind(this)}/>
        }
    }
    next(event){
        this.setState({
            phone:event[0],
            servicePerson:event[1],
            code:event[2],
            one:event[3],
        });
    };

    next1(event1){
        this.setState({
            one:event1,
        });
    };

    

    render(){
        var stateOne=this.state.one;
        if(stateOne==1){
            this.setState({
                ind:<Process2 next={this.next1.bind(this)}/>
            });
        }
        return(
            <div>
                {/* <h1>{this.state.phone}{this.state.servicePerson}{this.state.code}{this.state.one}</h1> */}
            {this.state.ind}
            </div>
        );
    }
}

ReactDOM.render(<Register/>,document.getElementById('register'));