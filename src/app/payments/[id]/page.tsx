"use client";

import { Page } from "@/components/Page";
import { useParams } from 'next/navigation';
import { Button } from "@telegram-apps/telegram-ui";
import { useState } from "react";

import './styles.css';

export default function PaymentPage() {
    const params = useParams(); // Получаем параметры маршрута
    const { id } = params; // Извлекаем id

    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true); // Устанавливаем состояние загрузки в true
        try {
            const response = await fetch('https://api.github.com/users/xiaotian/repos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: 'Тестовый запрос' }),
            });

            if (!response.ok) {
                throw new Error('Сеть не отвечает');
            }

            const data = await response.json();
            console.log('Ответ от сервера:', data);
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        } finally {
            setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
            setLoaded(true);
        }
    };

    return (
        <Page>
            <section className="paymentWithId">
                <div>
                    <h3>Ваш Payment ID: {id}</h3>
                    <p>Произвести оплату?</p>
                    <p className="payEnd">{loaded ? 'Оплата произведена успешно' : ''}</p>
                </div>
                <div>
                    <Button onClick={handleButtonClick} disabled={loading}>
                        {loading ? 'Загрузка...' : 'Отправить'}
                    </Button>
                </div>
            </section>
        </Page>
    );
}
