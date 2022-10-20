import React, { useState } from 'react';
import { Layout, Avatar, Dropdown  } from 'antd';
import Menu from './menu';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
const { Header } = Layout;
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const changeCollaosed = ()=>{ setCollapsed(!collapsed) }
  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
          {
          //最基本的react渲染方法，创建组件--------不会看尚硅谷前几个视频
          //React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            //className: 'trigger',
            //onClick: () => setCollapsed(!collapsed),
          //})
          //第二种方法
          collapsed ? <MenuUnfoldOutlined onClick={changeCollaosed}/> : <MenuFoldOutlined onClick={changeCollaosed}/>
        }
        <div style={{float:"right"}}>
          <span>欢迎{}回来</span>
          <Dropdown overlay={<Menu/>}>
            <a onClick={e => e.preventDefault()}>
              <Avatar size={40} icon={<UserOutlined />} />
            </a>
          </Dropdown>
        </div>
    </Header>
    
  )
}
