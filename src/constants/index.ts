export const BASE_URL = process.env.NEXT_PUBLIC_HOST;
export const STATIC_BASE_URL = 'https://static.pium.life';

export const URL_PATH = {
	main: '/',
	dictSearch: '/dict',
	dictDetail: '/dict/:id',
	petList: '/pet',
	petDetail: '/pet/:id',
	timeline: '/pet/:id/timeline',
	petEdit: '/pet/:id/edit',
	petRegisterSearch: '/pet/register',
	petRegisterForm: '/pet/register/:id',
	reminder: '/reminder',
	garden: '/garden',
	gardenRegisterPick: '/garden/register',
	gardenRegisterForm: '/garden/register/:id',
	login: '/login',
	authorization: '/authorization',
	myPage: '/myPage',
	newDictionaryPlantRequest: '/dict/new-plant-request',
} as const;

export const MESSAGE = {
	noSearchResult: '아직 사전에 등록된 식물이 없어요 😅',
} as const;

export const ERROR = {
	radioContext: '컴포넌트가 RadioProvider의 자손이 아닙니다!',
	stackContext: '컴포넌트가 StackProvider의 자손이 아닙니다!',
	dateFormat: '주어진 값은 DateFormat 타입으로 변환할 수 없습니다.',
	yearFormat: '주어진 연도는 20세기 또는 21세기가 아닙니다.',
	invalidDate: '올바른 날짜 형식이 아닙니다.',
	simultaneousConfirm:
		'confirm은 동시에 열 수 없습니다. 연속적인 confirm일 경우 await을 사용했는지 확인해 주세요.',
} as const;

export const GUIDE = {
	search: '피움에 등록된 식물을 검색해 보세요!',
	login: '로그인 후 이용 가능한 서비스입니다.',
	sessionExpire: '세션이 만료됐습니다. 다시 로그인해주세요.',
} as const;

export const OPTIONS = {
	flowerPot: [
		'플라스틱/유리/캔',
		'물에 젖는 토분',
		'수경 재배',
		'행잉/목부작',
		'유약/고화도 토분',
	],
	location: ['거실', '사무실', '욕실', '베란다', '방/원룸', '주방', '기타'],
	light: [
		'창문 밖에서 해를 받아요',
		'창문 안쪽에서 해를 받아요',
		'일반 조명 빛을 받아요',
		'식물용 조명 빛을 받아요',
		'해를 못 받아요',
	],
	wind: [
		'5m 내 창문이 있어요',
		'5m 보다 멀리 창문이 있어요',
		'창문이 없지만 바람이 통해요',
		'바람이 안 통해요',
	],
};

export const NUMBER = {
	maxCycleDate: 365,
	minCycleDate: 1,
	maxNicknameLength: 30,
	maxGardenContentLength: 1000,
} as const;

export const STATUS_CODE = {
	unauthorize: 401,
	notFound: 404,
	internalServerError: 500,
};

export const DAYS_OF_THE_WEEK = [
	'일',
	'월',
	'화',
	'수',
	'목',
	'금',
	'토',
] as const;

export const NO_PREVIOUS_VALUE = 'EMPTY';

export const NO_INFORMATION = '정보없음';

export const ALLOWED_IMAGE_EXTENSIONS = [
	'image/jpg',
	'image/jpeg',
	'image/png',
	'image/heic',
];
