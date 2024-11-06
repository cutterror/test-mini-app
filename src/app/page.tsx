'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';

import tonSvg from './_assets/ton.svg';

export default function Home() {
	const t = useTranslations('i18n');

	return (
		<Page back={false}>
			<List>
				<Section>
					<Link href="/ton-connect">
						<Cell
							before={
								<Image
									src={tonSvg.src}
									style={{backgroundColor: '#007AFF'}}
								/>
							}
							subtitle="Приложение для ваших сборов"
						>
							Assembly
						</Cell>
					</Link>
				</Section>
				<Section
					header="Доступные разделы"
				>
					<Link href="/group">
						<Cell subtitle="Группы пользователя, где проводятся сборы">
							Группы
						</Cell>
					</Link>
					<Link href="/profile">
						<Cell subtitle="Данные о профиле с переопределением ">
							Профиль
						</Cell>
					</Link>
					<Link href="/settings">
						<Cell subtitle="Настройки уведомлений и пр.">
							Настройки
						</Cell>
					</Link>
					<Link href="/about">
						<Cell subtitle="О нашем приложении">
							Информация
						</Cell>
					</Link>
				</Section>
				{/*<Section header={t('header')} footer={t('footer')}>*/}
				{/*	<LocaleSwitcher/>*/}
				{/*</Section>*/}
			</List>
		</Page>
	);
}
