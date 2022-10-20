import React from 'react';
import { Layout, Menu } from 'antd';
import './style.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
export default function SideMenu() {

  const menuItem=[{}]
  return (
    <Sider trigger={null} collapsible >
        <div className="logo" >全球新闻发布管理系统</div>
        {/* <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']} >
            {
              
            }
        </Menu> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          // items={[
          //   {
          //     key: '1',
          //     icon: <UserOutlined />,
          //     label: 'nav 1',
          //   },
          //   {
          //     key: '2',
          //     icon: <VideoCameraOutlined />,
          //     label: 'nav 2',
          //   },
          //   {
          //     key: '3',
          //     icon: <UploadOutlined />,
          //     label: 'nav 3',
          //   },
          // ]}
          items={menuItem}
        />
      </Sider>
  )
}
