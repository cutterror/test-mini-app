'use client';

import { Page } from '@/components/Page';
import { ControlHeader } from "@/components/Header/ControlHeader";
import { Link } from "@/components/Link/Link";
import { Cell, Section } from "@telegram-apps/telegram-ui";

export default function InitDataPage() {
	const groups = [123, 434, 5455];

	return (
		<Page>
			<ControlHeader title={'Список ваших групп'}></ControlHeader>

			<Section>
				{
					groups.map((group) => (
						<Link href={'/group/' + group}>
							<Cell subtitle="Некоторое писание группы, 342 участников">
								Группа № {group}
							</Cell>
						</Link>
					))
				}
			</Section>
		</Page>
	);
};
