import React from 'react';
import {Layout, Menu} from "antd";
import 'antd/dist/antd.css';
import { UserOutlined, LaptopOutlined, FormOutlined } from '@ant-design/icons';
import ShowBible from "./ShowBible";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
    const menu = [
        {
            key: 'userInfo',
            icon: React.createElement(UserOutlined),
            label: '내 정보',
        },
        {
            key: 'QnA',
            icon: React.createElement(FormOutlined),
            label: '문의하기'
        },
        {
            key: 'typeBible',
            icon: React.createElement(LaptopOutlined),
            label: '성경쓰기'
        }
    ]

    return(
        <Layout>
            <Header className="header">
                <span style={{ color: 'white', fontSize: 30 }}>
                    Bible Typing
                </span>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={menu}
                    />
                </Sider>
                <Content style={{padding: '0 50px',}}>
                    <Layout className="site-layout-background" style={{padding: '24px 0',}}>
                        <Content style={{padding: '0 24px', minHeight: 280, backgroundColor: "white"}}>
                            <ShowBible/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer style={{textAlign: 'center',}}>
                This is Footer
            </Footer>
        </Layout>
    )
}