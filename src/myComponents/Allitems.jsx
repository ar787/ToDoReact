import React from 'react';
import {Item} from "./Item";
import {Button, Icon} from "@material-ui/core" 
import ClearAllIcon from '@material-ui/icons/ClearAll';

export class AllItems extends React.Component {
    constructor(props) {
      super(props);
      this.state = {delete: false};
    }
    removeItem = (i) => {
      // this.props.arrayList.splice(i,1);
      delete this.props.arrayList[i];
      
      this.setState({
        delete:true,
      });
    }
    removeItemAll = () => {
      this.props.arrayList.splice(0,this.props.arrayList.length);
        this.setState({
            delete:!this.state.delete,
        });
    }
    render() {
      let arr = this.props.arrayList;
      return(
        <div className="AllItems">
          <ul style={{listStyleType:"decimal"}}>
            {arr.map((element, index) => <Item value={element.name} key={index} index={index} remove={this.removeItem} done={element.done} />)}
          </ul>
          <Button variant="contained" color="secondary" onClick={this.removeItemAll}>Clear all
             <Icon style={{padding:"0 7px",lineHeight:"0px"}}>
                <ClearAllIcon/>
              </Icon>
            </Button>
        </div>
      );
    }
  }