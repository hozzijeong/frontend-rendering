import type { DataResponse } from '@/types/api';
import type { Month } from '@/types/date';
import type {
	ArrangedReminderWithStatus,
	Reminder,
	ReminderExtendType,
	TodayStatus,
} from '@/types/reminder';
import { useQuery } from '@tanstack/react-query';
import StatusError from '@/models/statusError';
import ReminderAPI, { REMINDER_URL } from '@/apis/reminder';
import noRetryIfUnauthorized from '@/utils/noRetryIfUnauthorized';
import throwOnInvalidStatus from '@/utils/throwOnInvalidStatus';

export const convertReminderData = (
	result: DataResponse<Reminder[]>
): ArrangedReminderWithStatus => {
	const { data } = result;

	const convertedData: Array<[Month, ReminderExtendType[]]> = data.reduce(
		(acc, cur) => {
			const { dday, nextWaterDate } = cur;
			const [, month, date] = nextWaterDate.split('-') as [
				string,
				Month,
				string
			];
			const status: TodayStatus =
				dday === 0 ? 'today' : dday > 0 ? 'late' : 'future';

			const extendedReminder: ReminderExtendType = {
				...cur,
				status,
				date,
			};

			const hasSameMonthReminders =
				acc.length && acc[acc.length - 1][0] === month;

			if (hasSameMonthReminders) {
				const sameMonthReminders = acc[acc.length - 1][1];

				sameMonthReminders.push(extendedReminder);
			} else {
				acc.push([month, [extendedReminder]]);
			}

			return acc;
		},
		[] as Array<[Month, ReminderExtendType[]]>
	);

	const status = data.every(({ dday }) => dday < 0)
		? 'future'
		: data.find(({ dday }) => dday > 0)
		? 'late'
		: 'today';

	return {
		data: convertedData,
		status,
	};
};

export const getReminder = async (): Promise<DataResponse<Reminder[]>> => {
	const response = await ReminderAPI.getReminder();
	throwOnInvalidStatus(response);

	const results = await response.json();
	return results;
};

const useReminder = () => {
	return useQuery<
		DataResponse<Reminder[]>,
		Error | StatusError,
		ArrangedReminderWithStatus
	>({
		queryKey: ['reminder'],
		queryFn: getReminder,
		select: convertReminderData,
		retry: noRetryIfUnauthorized,
	});
};

export default useReminder;
