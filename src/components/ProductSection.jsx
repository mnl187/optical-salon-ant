import React from 'react';
import {Card, Col, Row} from 'antd';

const { Meta } = Card;

const products = [
    // Przykładowe dane produktów
    { id: 1, title: 'Okulary 1', description: 'Opis produktu 1', image: 'link-do-obrazka-1' },
    { id: 2, title: 'Okulary 2', description: 'Opis produktu 2', image: 'link-do-obrazka-2' },
    { id: 3, title: 'Okulary 3', description: 'Opis produktu 3', image: 'link-do-obrazka-3' },
];

export const ProductSection = () => {
    return (
        <div className="product-section">
            <h2>Nasze produkty</h2>
            <Row gutter={[16, 16]}>
                {products.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={<img alt={product.title} src={product.image} />}
                        >
                            <Meta title={product.title} description={product.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
