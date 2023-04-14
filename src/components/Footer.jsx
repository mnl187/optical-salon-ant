import React from 'react';
import { Layout } from 'antd';

export const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Salon Optyczny M ©{new Date().getFullYear()} Wszelkie prawa zastrzeżone
        </Footer>
    );
};
