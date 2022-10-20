import React from 'react'
import { Menu } from 'antd';
export default function MenuComponents() {
  return (
    <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            超级管理员{}
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            退出
          </a>
        ),
        disabled: true,
      }
    ]}
  />
  )
}
