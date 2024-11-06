'use client';

import { Page } from '@/components/Page';
import { ControlHeader } from "@/components/Header/ControlHeader";
import { useParams } from "next/navigation";
import { Link } from "@/components/Link/Link";
import { Cell, Section } from "@telegram-apps/telegram-ui";

export default function InitDataPage() {
	const params = useParams();
    const { id } = params; // Извлекаем id

	const payments = [12243424, 243432324, 4535346, 2635435, 325325]

	return (
		<Page>
			<ControlHeader title={'Группа № ' + id}></ControlHeader>
			<Section
				header="Здесь будет список участников и сборов"
				footer="На данный момент моковые ссылки на сборы"
			>
				{
					payments.map((payment) => (
						<Link href={'/payments/' + payment}>
							<Cell subtitle="Описание сбора, процент собранного">
								Сбор группы № {payment}
							</Cell>
						</Link>
					))
				}
			</Section>
		</Page>
	);
};
