import React from 'react';
import { Typography } from 'antd';
import { ProductSection } from '../components/ProductSection';

const { Title } = Typography;

export const HomePage = () => {
    return (
        <div>
            <Title level={1} style={{ textAlign: 'center' }}>
                Witaj w Salonie Optycznym M
            </Title>
            <ProductSection />
        </div>
    );
};