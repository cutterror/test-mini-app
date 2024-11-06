'use client';

import { Page } from '@/components/Page';
import { ControlHeader } from "@/components/Header/ControlHeader";
import { Link } from "@/components/Link/Link";
import { Cell, Section } from "@telegram-apps/telegram-ui";
import { useMemo } from "react";
import { initData, type User, useSignal } from "@telegram-apps/sdk-react";

function getInfo(user: User): any {
	return {
		first_name: user.firstName,
		last_name: user.lastName
	};
}

export default function InitDataPage() {
	const initDataState = useSignal(initData.state);

	const userInfo = useMemo<any>(() => {
		return initDataState && initDataState.user ? getInfo(initDataState.user) : undefined;
	}, [initDataState]);
	// console.log(userInfo);

	return (
		<Page>
			<ControlHeader title={'Мой профиль'}></ControlHeader>
			<Section>
				<Link href="#">
					<Cell subtitle={userInfo?.first_name}>
						Имя
					</Cell>
				</Link>
				<Link href="#">
					<Cell subtitle={userInfo?.last_name || 'Не указано'}>
						Фамилия
					</Cell>
				</Link>
				<Link href="#">
					<Cell subtitle="Не указано">
						Отчество
					</Cell>
				</Link>
			</Section>
			<Section>
				<Link href="#">
					<Cell subtitle="Не указано">
						Почта
					</Cell>
				</Link>
			</Section>
		</Page>
	);
};
