import React from 'react';
import { Layout, Menu } from 'antd';

export const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Header>
            <div className="logo">Salon Optyczny M</div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">Strona główna</Menu.Item>
                <Menu.Item key="2">Produkty</Menu.Item>
                <Menu.Item key="3">Kontakt</Menu.Item>
            </Menu>
        </Header>
    );
};