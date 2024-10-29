"use client";

import { Page } from "@/components/Page";
import { Button } from "@telegram-apps/telegram-ui";
import { useState } from "react";

import './styles.css';

export default function TestPage() {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true); // Устанавливаем состояние загрузки в true
        try {
            const response = await fetch('/api/test', {
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
        }
    };

    return (
        <Page>
            <section className={"test-page"}>
                <div>
                    <h2>Тестовый запрос</h2>
                    <p>Отправим тестовый зарпос по клику</p>
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
