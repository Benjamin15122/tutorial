import styles from './index.css';
import bone from '../assets/bone.png';
import paw from '../assets/paw.png';
import puppy from '../assets/puppy.png';
import { Layout,Avatar,Menu } from 'antd';
const { Header, Content, Sider, Footer } = Layout;

function BasicLayout(props) {
  return (
    <Layout>
      <Sider
        width={80}
        style={{ background: '#bbb' }}
      >
        <Menu>
          <Menu.Item><Avatar src={bone}/></Menu.Item>
          <Menu.Item><Avatar src={paw}/></Menu.Item>
          <Menu.Item><Avatar src={puppy}/></Menu.Item>
          <Menu.Item><Avatar src={bone}/></Menu.Item>
          <Menu.Item><Avatar src={paw}/></Menu.Item>
          <Menu.Item><Avatar src={puppy}/></Menu.Item>
          <Menu.Item><Avatar src={bone}/></Menu.Item>
          <Menu.Item><Avatar src={paw}/></Menu.Item>
          <Menu.Item><Avatar src={puppy}/></Menu.Item>
          <Menu.Item><Avatar src={bone}/></Menu.Item>
          <Menu.Item><Avatar src={paw}/></Menu.Item>
          <Menu.Item><Avatar src={puppy}/></Menu.Item>
          <Menu.Item><Avatar src={bone}/></Menu.Item>
          <Menu.Item><Avatar src={paw}/></Menu.Item>
          <Menu.Item><Avatar src={puppy}/></Menu.Item>
          <Menu.Item><Avatar src={bone}/></Menu.Item>
          <Menu.Item><Avatar src={paw}/></Menu.Item>
          <Menu.Item><Avatar src={puppy}/></Menu.Item>
          <Menu.Item><Avatar src={bone}/></Menu.Item>
          <Menu.Item><Avatar src={paw}/></Menu.Item>
          <Menu.Item><Avatar src={puppy}/></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
          <Avatar src={bone}/>
          <Avatar src={paw}/>
          <Avatar src={puppy}/>
        </Header>
        <Content>{props.children}</Content>
        <Footer/>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
