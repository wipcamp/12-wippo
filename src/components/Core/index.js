import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import Sider from './Sider'
import Header from './Header'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import Dashboard from '../Dashboard'
const { Content } = Layout;

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header />
        </Layout>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider />
          <Layout>
            <Content style={{ margin: '16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Content Here.
                {/* <Dashboard /> */}
                {/* <button className="btn btn-danger" >5555</button> */}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
