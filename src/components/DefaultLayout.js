import {NavLink, Outlet} from "react-router";
import {Layout, Menu} from 'antd';
import {
    HomeOutlined,
    CheckCircleOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';

const {Header, Content} = Layout;

export function DefaultLayout() {
    const menuItems = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: <NavLink to="/">Home</NavLink>,
        },
        {
            key: '/donelist',
            icon: <CheckCircleOutlined />,
            label: <NavLink to="/donelist">Done List</NavLink>,
        },

        {
            key: '/about',
            icon: <InfoCircleOutlined />,
            label: <NavLink to="/about">About</NavLink>,
        },
    ];

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{padding: 0}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px',
                    color: 'white'
                }}>
                    <h2 style={{color: 'white', margin: 0, marginRight: '32px'}}>
                        📝 Todo App
                    </h2>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        items={menuItems}
                        style={{flex: 1, minWidth: 0}}
                    />
                </div>
            </Header>

            <Content style={{padding: '24px'}}>
                <Outlet/>
            </Content>
        </Layout>
    );
}