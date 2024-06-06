import scss from './News.module.scss';

const siliconValleyHistory = [
	{
		era: 'Ранние годы',
		description:
			'Всё началось в первой половине 20-го века, когда Силиконовая долина была всего лишь сельскохозяйственным районом в Калифорнии, известным как Santa Clara Valley. Здесь выращивали абрикосы, вишни и другие фрукты, и мало кто мог представить, что однажды этот регион станет мировым центром технологических инноваций.'
	},
	{
		era: 'Основатели и первопроходцы',
		description:
			'Поворотным моментом в истории долины стала деятельность Фредерика Термена, профессора Стэнфордского университета. Он считается отцом Силиконовой долины. Термен активно поощрял своих студентов к предпринимательству и созданию собственных компаний. Вдохновлённые его идеями, Уильям Хьюлетт и Дэвид Паккард основали компанию Hewlett-Packard (HP) в 1939 году, одну из первых технологических компаний в регионе.'
	},
	{
		era: 'Взрыв инноваций',
		description:
			"Настоящий взрыв инноваций в Силиконовой долине произошёл в 1950-60-х годах. Одной из ключевых фигур этого периода стал Уильям Шокли, один из изобретателей транзистора. В 1956 году он основал компанию Shockley Semiconductor Laboratory, которая привлекла талантливых инженеров и учёных. Однако, жёсткий стиль управления Шокли привёл к тому, что восемь его сотрудников, известные как 'Предатели Шокли', покинули компанию и основали Fairchild Semiconductor. Это событие стало катализатором для множества последующих стартапов и технологий."
	},
	{
		era: 'Рождение Кремниевого чипа',
		description:
			'Компания Fairchild Semiconductor сыграла ключевую роль в развитии Силиконовой долины. Её инженеры изобрели первый коммерчески успешный интегральный микросхемный чип, что стало основой для дальнейших технологических прорывов. Интегральные микросхемы позволили создавать более сложные и мощные электронные устройства, что стимулировало рост компьютерной индустрии.'
	},
	{
		era: 'Эра персональных компьютеров',
		description:
			'1970-е годы ознаменовали начало эры персональных компьютеров. Одной из ключевых компаний этого периода стала Apple, основанная Стивом Джобсом и Стивом Возняком в 1976 году. Их первый персональный компьютер, Apple I, был простым и доступным устройством, которое сделало компьютеры популярными среди широких масс. Вскоре за Apple последовали другие компании, такие как Microsoft и IBM, которые также внесли свой вклад в развитие индустрии.'
	},
	{
		era: 'Интернет и дотком-бум',
		description:
			'1990-е годы стали эпохой интернета. Силиконовая долина стала эпицентром интернет-революции, где возникали такие компании, как Netscape, Yahoo!, Google и Amazon. Эти компании не только изменили способы доступа к информации, но и создали новые бизнес-модели, которые навсегда изменили мировую экономику. Однако этот период был также отмечен дотком-бумом и последующим крахом, когда переоценённые интернет-компании начали рушиться одна за другой. Тем не менее, Силиконовая долина пережила этот кризис и продолжила развиваться.'
	},
	{
		era: 'Новая эра технологий',
		description:
			'В 2000-х и 2010-х годах Силиконовая долина стала домом для таких гигантов, как Facebook, Twitter, Uber и Tesla. Эти компании не только доминировали в своих областях, но и кардинально изменили множество аспектов нашей жизни, от общения и социальных сетей до транспорта и энергетики.'
	},
	{
		era: 'Настоящее и будущее',
		description:
			'Сегодня Силиконовая долина продолжает оставаться центром мировых технологических инноваций. Здесь работают такие компании, как Google, Apple, Facebook, и многие другие. Регион привлекает талантливых инженеров, программистов и предпринимателей со всего мира, стремящихся воплотить свои инновационные идеи в жизнь. Кроме того, Силиконовая долина активно инвестирует в такие перспективные области, как искусственный интеллект, биотехнологии, возобновляемая энергия и квантовые вычисления. Будущее обещает быть ещё более захватывающим и полным новыми открытиями и изобретениями.'
	},
	{
		era: 'Настоящее и будущее',
		description:
			'Сегодня Силиконовая долина продолжает оставаться центром мировых технологических инноваций. Здесь работают такие компании, как Google, Apple, Facebook, и многие другие. Регион привлекает талантливых инженеров, программистов и предпринимателей со всего мира, стремящихся воплотить свои инновационные идеи в жизнь. Кроме того, Силиконовая долина активно инвестирует в такие перспективные области, как искусственный интеллект, биотехнологии, возобновляемая энергия и квантовые вычисления. Будущее обещает быть ещё более захватывающим и полным новыми открытиями и изобретениями.'
	},
	{
		era: 'Настоящее и будущее',
		description:
			'Сегодня Силиконовая долина продолжает оставаться центром мировых технологических инноваций. Здесь работают такие компании, как Google, Apple, Facebook, и многие другие. Регион привлекает талантливых инженеров, программистов и предпринимателей со всего мира, стремящихся воплотить свои инновационные идеи в жизнь. Кроме того, Силиконовая долина активно инвестирует в такие перспективные области, как искусственный интеллект, биотехнологии, возобновляемая энергия и квантовые вычисления. Будущее обещает быть ещё более захватывающим и полным новыми открытиями и изобретениями.'
	},
	{
		era: 'Настоящее и будущее',
		description:
			'Сегодня Силиконовая долина продолжает оставаться центром мировых технологических инноваций. Здесь работают такие компании, как Google, Apple, Facebook, и многие другие. Регион привлекает талантливых инженеров, программистов и предпринимателей со всего мира, стремящихся воплотить свои инновационные идеи в жизнь. Кроме того, Силиконовая долина активно инвестирует в такие перспективные области, как искусственный интеллект, биотехнологии, возобновляемая энергия и квантовые вычисления. Будущее обещает быть ещё более захватывающим и полным новыми открытиями и изобретениями.'
	},
	{
		era: 'Настоящее и будущее',
		description:
			'Сегодня Силиконовая долина продолжает оставаться центром мировых технологических инноваций. Здесь работают такие компании, как Google, Apple, Facebook, и многие другие. Регион привлекает талантливых инженеров, программистов и предпринимателей со всего мира, стремящихся воплотить свои инновационные идеи в жизнь. Кроме того, Силиконовая долина активно инвестирует в такие перспективные области, как искусственный интеллект, биотехнологии, возобновляемая энергия и квантовые вычисления. Будущее обещает быть ещё более захватывающим и полным новыми открытиями и изобретениями.'
	},
	{
		era: 'Настоящее и будущее',
		description:
			'Сегодня Силиконовая долина продолжает оставаться центром мировых технологических инноваций. Здесь работают такие компании, как Google, Apple, Facebook, и многие другие. Регион привлекает талантливых инженеров, программистов и предпринимателей со всего мира, стремящихся воплотить свои инновационные идеи в жизнь. Кроме того, Силиконовая долина активно инвестирует в такие перспективные области, как искусственный интеллект, биотехнологии, возобновляемая энергия и квантовые вычисления. Будущее обещает быть ещё более захватывающим и полным новыми открытиями и изобретениями.'
	},
	{
		era: 'Настоящее и будущее',
		description:
			'Сегодня Силиконовая долина продолжает оставаться центром мировых технологических инноваций. Здесь работают такие компании, как Google, Apple, Facebook, и многие другие. Регион привлекает талантливых инженеров, программистов и предпринимателей со всего мира, стремящихся воплотить свои инновационные идеи в жизнь. Кроме того, Силиконовая долина активно инвестирует в такие перспективные области, как искусственный интеллект, биотехнологии, возобновляемая энергия и квантовые вычисления. Будущее обещает быть ещё более захватывающим и полным новыми открытиями и изобретениями.'
	},
	{
		era: 'Заключение',
		description:
			'История Силиконовой долины — это история людей, их идей и инноваций. От сельскохозяйственного региона до мировой столицы высоких технологий — этот путь был полон вызовов и триумфов. Силиконовая долина остаётся символом прогресса и местом, где будущее становится реальностью.'
	}
];

const News = () => {
	return (
		<>
			<section className={scss.News}>
				<div className={scss.container}>
					<div className={scss.content}>
						<h1>News:</h1>
						{siliconValleyHistory.map((item) => (
							<div>
								<h4>{item.era}</h4>
								<p>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
export default News;
