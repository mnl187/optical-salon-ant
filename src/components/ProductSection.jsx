import React from 'react';
import { Card } from 'antd';

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
        </div>
    );
};
