import React from 'react';
import {Header} from "./header";
import {AllItems} from "./Allitems";
export class ToDo extends React.Component {
    constructor(props) {
      super(props)
      this.state = {value:"",error:false,list:[]};
    }
    handelChangeToDo = (val) => {
      this.setState({
        value:val,
      });
    }
  
    handelClickToDo = () => {
      let listArr = this.state.list;
      if(this.state.value.trim() !==  "") {
        listArr.push({name:this.state.value,done:false});
        this.setState({error:false});
        
      }else {
        this.setState({error:true});
      }
  
      this.setState({
        value:"",
        list:listArr,
      });
      console.log(listArr);
    }
    render() {
      return(
        <div className="main">
        <Header value={this.state.value} Click={this.handelClickToDo} Change={this.handelChangeToDo} InputError={this.state.error} />
        <p>{`${this.state.value}`} <b>{`${this.state.value.length}`}</b> </p>
        <AllItems arrayList={this.state.list}/>
        </div>
      );
    }
  }