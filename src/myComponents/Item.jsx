import React from 'react';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

export class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state = {done:this.props.done};
    }
    
    handelClickItem = () => {
      this.setState({
        done: !this.state.done,
      });
    }
  
    closeItem = (i) => {
      this.props.remove(i);
    }
    render() {
      
      let value = this.props.value
      let index = this.props.index;
      let style = {};        
      style.opacity = this.state.done ? "0.6" : "1";
    
      return (
          <div className="Item">
              <Icon  className="close" onClick={() => this.closeItem(index)}><DeleteIcon/></Icon>
            <li onClick={this.handelClickItem} style={style}>  {value} </li>
          </div> 
      );
    }
  }
  