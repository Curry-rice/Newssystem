import React from 'react'
import SideMenu from '../../components/sand-box/side-menu'
import TopHeader from '../../components/sand-box/top-header'
import './style.css'
import { Layout, Menu } from 'antd';
const { Content } = Layout;
export default function SandBox() {
  return (
    <Layout>
      <SideMenu/>
      <Layout className="site-layout">
        <TopHeader/>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
