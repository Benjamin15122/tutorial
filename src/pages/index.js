import styles from './index.css';
import {Button,Tag,Row,Col} from 'antd';
import React,{Component} from 'react';
import {connect} from 'dva';
import Link from 'umi/link';
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
    // click: ()=>dispatch({type:"typecount/click",payload:{photo:"clothes"}}),
    get: ()=>dispatch({type:"typecount/get"})
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
    {/* <Button type={this.state.type} onClick={()=>{
      let count = this.state.count+1;
      this.setState({
        type: typeMap[count%4],
        count: count
      })
    }}>Click Me</Button>
    <Tag color="lime">{this.state.count}</Tag> */}
      <Col>
        <Row><MyButton  type={this.props.mystate.type} typeChange={this.props.get}/></Row>
        <Row><Tag color="lime">{this.props.mystate.count}</Tag></Row>
        <Row><Link to="/list"><Button>Go to Lists</Button></Link></Row>
      </Col>
    </div>)
  }
}

export default MyPage;


// function dispatch(action){
//   bangdingdaodvamodel;
//   return action;
// }