import styles from './index.css';
import {Button,Tag} from 'antd';
import React,{Component} from 'react';
import {connect} from 'dva';
// const typeMap = ["dashed","normal","danger","primary"];

class MyButton extends Component{

  render(){
    return (
        <Button type={this.props.type} onClick={this.props.typeChange}>
          Click Me
        </Button>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    mystate: state.typecount
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    click: ()=>dispatch({type:"typecount/click",payload:{photo:"clothes"}}),
    // get: ()=>dispatch({type:"typecount/get"})
  }
}

@connect(mapStateToProps,mapDispatchToProps)
class MyPage extends Component{
  // state = {
  //   type: "dashed",
  //   count: 0,
  // }
  render(){
    // console.log(this.props.mystate);
    return(
    <div className={styles.normal}>
    <ul className={styles.list}>
      {/* <Button type={this.state.type} onClick={()=>{
        let count = this.state.count+1;
        this.setState({
          type: typeMap[count%4],
          count: count
        })
      }}>Click Me</Button>
      <Tag color="lime">{this.state.count}</Tag> */}
      <MyButton  type={this.props.mystate.type} typeChange={this.props.click}/>
      <Tag color="lime">{this.props.mystate.count}</Tag>
    </ul>
    </div>)
  }
}

export default MyPage;


// function dispatch(action){
//   bangdingdaodvamodel;
//   return action;
// }