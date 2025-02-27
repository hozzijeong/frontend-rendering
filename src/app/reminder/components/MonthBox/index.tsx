import { MonthReminderBox, MonthTitle } from './MonthBox.style';
import CardBox from '../CardBox';
import { ReminderExtendType } from '@/types/reminder';

interface MonthBoxProps {
	month: string;
	reminderDates: ReminderExtendType[];
}

const MonthBox = ({ month, reminderDates }: MonthBoxProps) => {
	const dayMap = new Map();

	const cardBoxes = reminderDates.map((info) => {
		const showDate = dayMap.has(info.date);
		if (!showDate) dayMap.set(info.date, true);

		const id = info.petPlantId.toString();

		return <CardBox key={id} showDate={showDate} data={info} />;
	});

	return (
		<MonthReminderBox
			role='feed'
			aria-label={`${Number(month)}월의 리마인더 정보`}
		>
			<MonthTitle>{Number(month)}월</MonthTitle>
			{cardBoxes}
		</MonthReminderBox>
	);
};

export default MonthBox;
