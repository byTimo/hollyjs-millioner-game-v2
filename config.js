const config = {
    level: "general",
    time: 50000,
    lives: 3
};

//Контур

const levels = {
    "general": [
        {
            "name": "Алексей Кирпичников",
            "description": "",
            "answers": [
                "img/content/kontur/kirpich.jpg",
                "img/content/kontur/kokovin.jpg",
                "img/content/kontur/martyinov.png",
                "img/content/kontur/lukanin.jpeg",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Александр Голубев",
            "description": "",
            "answers": [
                "img/content/kontur/kazakov.png",
                "img/content/kontur/golubev.jpg",
                "img/content/kontur/kirpich.jpg",
                "img/content/kontur/yakin.jpg",
            ],
            "right": 1,
            "factor": 1
        },  {
            "name": "Александр Голубев",
            "description": "",
            "answers": [
                "img/content/kontur/kokovin.jpg",
                "img/content/kontur/rumak.png",
                "img/content/kontur/golubevjr.png",
                "img/content/kontur/burmistrov.jpg",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Павел Егоров",
            "description": "",
            "answers": [
                "img/content/kontur/volkov.png",
                "img/content/kontur/rumak.png",
                "img/content/kontur/egorov.jpg",
                "img/content/kontur/kirpich.jpg",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Иван Дашкевич",
            "description": "",
            "answers": [
                "img/content/kontur/burmistrov.jpg",
                "img/content/kontur/golubev.jpg",
                "img/content/kontur/martyinov.png",
                "img/content/kontur/dashkevich.jpg",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Сергей Соловьёв",
            "description": "",
            "answers": [
                "img/content/kontur/soloviev.jpg",
                "img/content/kontur/golubev.jpg",
                "img/content/kontur/yakin.jpg",
                "img/content/kontur/hazamov.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Максим Захаров",
            "description": "",
            "answers": [
                "img/content/kontur/gein.png",
                "img/content/kontur/zaharov.png",
                "img/content/kontur/rumak.png",
                "img/content/kontur/egorov.jpg",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Михаил Волканин",
            "description": "",
            "answers": [
                "img/content/kontur/mamai.png",
                "img/content/kontur/egorov.jpg",
                "img/content/kontur/volkanin.jpg",
                "img/content/kontur/kutovoi.png",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Ирина Спицына",
            "description": "",
            "answers": [
                "img/content/kontur/samohina.png",
                "img/content/kontur/vlasyuk.png",
                "img/content/kontur/ratner.jpg",
                "img/content/kontur/spicina.jpg",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Юлия Закс",
            "description": "",
            "answers": [
                "img/content/kontur/zaks.jpg",
                "img/content/kontur/spicina.jpg",
                "img/content/kontur/okunzeva.jpg",
                "img/content/kontur/ilinyh.jpg",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Игорь Устюжанин",
            "description": "",
            "answers": [
                "img/content/kontur/dashkevich.jpg",
                "img/content/kontur/ustujanin.jpeg",
                "img/content/kontur/kutovoi.png",
                "img/content/kontur/kaz.png",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Светлана Ратнер",
            "description": "",
            "answers": [
                "img/content/kontur/spicina.jpg",
                "img/content/kontur/mokhova.jpg",
                "img/content/kontur/ratner.jpg",
                "img/content/kontur/zaks.jpg",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Эдуард Шифман",
            "description": "",
            "answers": [
                "img/content/kontur/ilin.png",
                "img/content/kontur/dashkevich.jpg",
                "img/content/kontur/shifmanjr.jpg",
                "img/content/kontur/shifman.jpeg",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Павел Шкарин",
            "description": "",
            "answers": [
                "img/content/kontur/shkarin.jpeg",
                "img/content/kontur/kuzmin.jpg",
                "img/content/kontur/soloviev.jpg",
                "img/content/kontur/titarenko.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Максим Васючков",
            "description": "",
            "answers": [
                "img/content/kontur/stebnev.png",
                "img/content/kontur/vasuchkov.jpg",
                "img/content/kontur/shishkin.png",
                "img/content/kontur/soloviev.jpg",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Игорь Борисихин",
            "description": "",
            "answers": [
                "img/content/kontur/shishkin.png",
                "img/content/kontur/mokhov.jpg",
                "img/content/kontur/borisihin.jpg",
                "img/content/kontur/zaharov.png",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Григорий Кошелев",
            "description": "",
            "answers": [
                "img/content/kontur/loktionov.png",
                "img/content/kontur/zaharov.png",
                "img/content/kontur/sychev.jpg",
                "img/content/kontur/koshelev.jpg",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Никита Тарасов",
            "description": "",
            "answers": [
                "img/content/kontur/tarasov.png",
                "img/content/kontur/volkanin.jpg",
                "img/content/kontur/kokovin.jpg",
                "img/content/kontur/loktionov.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Андрей Костоусов",
            "description": "",
            "answers": [
                "img/content/kontur/volkanin.jpg",
                "img/content/kontur/kostousov.jpeg",
                "img/content/kontur/konovalov.jpg",
                "img/content/kontur/kazakov.png",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Юрий Плинер",
            "description": "",
            "answers": [
                "img/content/kontur/volkov.png",
                "img/content/kontur/konovalov.jpg",
                "img/content/kontur/pliner.png",
                "img/content/kontur/plinerold.png",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Андрей Соколов",
            "description": "",
            "answers": [
                "img/content/kontur/peshkov.jpg",
                "img/content/kontur/ustujanin.jpeg",
                "img/content/kontur/bortnikov.png",
                "img/content/kontur/sokolov.png",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Алексей Хворост",
            "description": "",
            "answers": [
                "img/content/kontur/khvorost.png",
                "img/content/kontur/burmistrov.jpg",
                "img/content/kontur/bortnikov.png",
                "img/content/kontur/shifman.jpeg",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Вадим Мартынов",
            "description": "",
            "answers": [
                "img/content/kontur/hazamov.png",
                "img/content/kontur/martyinov.png",
                "img/content/kontur/shkarin.jpeg",
                "img/content/kontur/ipatov.png",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Игорь Луканин",
            "description": "",
            "answers": [
                "img/content/kontur/shifman.jpeg",
                "img/content/kontur/ipatov.png",
                "img/content/kontur/lukanin.jpeg",
                "img/content/kontur/gein.png",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Дмитрий Якин",
            "description": "",
            "answers": [
                "img/content/kontur/shkarin.jpeg",
                "img/content/kontur/mamai.png",
                "img/content/kontur/preskaryan.png",
                "img/content/kontur/yakin.jpg",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Иван Румак",
            "description": "",
            "answers": [
                "img/content/kontur/rumak.png",
                "img/content/kontur/vasuchkov.jpg",
                "img/content/kontur/kaz.png",
                "img/content/kontur/preskaryan.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Владимир Кутовой",
            "description": "",
            "answers": [
                "img/content/kontur/vasuchkov.jpg",
                "img/content/kontur/kutovoi.png",
                "img/content/kontur/ilin.png",
                "img/content/kontur/stepanov.jpg",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Дмитрий Титаренко",
            "description": "",
            "answers": [
                "img/content/kontur/kuprin.png",
                "img/content/kontur/kuzmin.jpg",
                "img/content/kontur/titarenko.png",
                "img/content/kontur/borisihin.jpg",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Евгений Шишкин",
            "description": "",
            "answers": [
                "img/content/kontur/stepanov.jpg",
                "img/content/kontur/borisihin.jpg",
                "img/content/kontur/mokhov.jpg",
                "img/content/kontur/shishkin.png",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Илья Локтионов",
            "description": "",
            "answers": [
                "img/content/kontur/loktionov.png",
                "img/content/kontur/stebnev.png",
                "img/content/kontur/kuprin.png",
                "img/content/kontur/koshelev.jpg",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Ксения Ильиных",
            "description": "",
            "answers": [
                "img/content/kontur/ratner.jpg",
                "img/content/kontur/ilinyh.jpg",
                "img/content/kontur/konovalova.jpg",
                "img/content/kontur/okunzeva.jpg",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Никита Коновалов",
            "description": "",
            "answers": [
                "img/content/kontur/tarasov.png",
                "img/content/kontur/sychev.jpg",
                "img/content/kontur/konovalov.jpg",
                "img/content/kontur/filatov.png",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Ольга Коновалова",
            "description": "",
            "answers": [
                "img/content/kontur/ilinyh.jpg",
                "img/content/kontur/mokhova.jpg",
                "img/content/kontur/vlasyuk.png",
                "img/content/kontur/konovalova.jpg",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Михаил Бортников",
            "description": "",
            "answers": [
                "img/content/kontur/bortnikov.png",
                "img/content/kontur/peshkov.jpg",
                "img/content/kontur/filatov.png",
                "img/content/kontur/tarasov.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Любовь Вдовиченко",
            "description": "",
            "answers": [
                "img/content/kontur/ratner.jpg",
                "img/content/kontur/vdovichenko.jpg",
                "img/content/kontur/okunzeva.jpg",
                "img/content/kontur/ilinyh.jpg",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Полина Зонова",
            "description": "",
            "answers": [
                "img/content/kontur/konovalova.jpg",
                "img/content/kontur/mokhova.jpg",
                "img/content/kontur/zonova.png",
                "img/content/kontur/vdovichenko.jpg",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Александр Ипатов",
            "description": "",
            "answers": [
                "img/content/kontur/kostousov.jpeg",
                "img/content/kontur/mramorov.jpg",
                "img/content/kontur/kokovin.jpg",
                "img/content/kontur/ipatov.png",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Валерия Достовалова",
            "description": "",
            "answers": [
                "img/content/kontur/dostovalova.jpg",
                "img/content/kontur/konovalova.jpg",
                "img/content/kontur/vdovichenko.jpg",
                "img/content/kontur/zonova.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Дарья Свалова",
            "description": "",
            "answers": [
                "img/content/kontur/zonova.png",
                "img/content/kontur/svalova.png",
                "img/content/kontur/dostovalova.jpg",
                "img/content/kontur/kataeva.png",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Артем Прекскарьян",
            "description": "",
            "answers": [
                "img/content/kontur/kostousov.jpeg",
                "img/content/kontur/kazakov.png",
                "img/content/kontur/preskaryan.png",
                "img/content/kontur/mramorov.jpg",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Алексей Романовский",
            "description": "",
            "answers": [
                "img/content/kontur/pliner.png",
                "img/content/kontur/volkov.png",
                "img/content/kontur/romanovskiye.png",
                "img/content/kontur/romanovskiya.png",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Евгений Романовский",
            "description": "",
            "answers": [
                "img/content/kontur/romanovskiye2.png",
                "img/content/kontur/romanovskiya2.png",
                "img/content/kontur/burmistrov.jpg",
                "img/content/kontur/sokolov.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Вера Вейн",
            "description": "",
            "answers": [
                "img/content/kontur/dostovalova.jpg",
                "img/content/kontur/vein.jpg",
                "img/content/kontur/svalova.png",
                "img/content/kontur/samohina.png",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Виктор Степанов",
            "description": "",
            "answers": [
                "img/content/kontur/pliner.png",
                "img/content/kontur/hazamov.png",
                "img/content/kontur/stepanov.jpg",
                "img/content/kontur/konev.png",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Вероника Самохина",
            "description": "",
            "answers": [
                "img/content/kontur/samohina.png",
                "img/content/kontur/vein.jpg",
                "img/content/kontur/kiskachi.png",
                "img/content/kontur/kataeva.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Евгений Филатов",
            "description": "",
            "answers": [
                "img/content/kontur/khvorost.png",
                "img/content/kontur/filatov.png",
                "img/content/kontur/mamai.png",
                "img/content/kontur/mramorov.jpg",
            ],
            "right": 1,
            "factor": 1
        }, {
            "name": "Дмитрий Мраморов",
            "description": "",
            "answers": [
                "img/content/kontur/lukanin.jpeg",
                "img/content/kontur/kaz.png",
                "img/content/kontur/mramorov.jpg",
                "img/content/kontur/filatov.png",
            ],
            "right": 2,
            "factor": 1
        }, {
            "name": "Василий Конев",
            "description": "",
            "answers": [
                "img/content/kontur/ilin.png",
                "img/content/kontur/khvorost.png",
                "img/content/kontur/kirpich.jpg",
                "img/content/kontur/konev.png",
            ],
            "right": 3,
            "factor": 1
        }, {
            "name": "Екатерина Власюк",
            "description": "",
            "answers": [
                "img/content/kontur/vlasyuk.png",
                "img/content/kontur/kiskachi.png",
                "img/content/kontur/vein.jpg",
                "img/content/kontur/kataeva.png",
            ],
            "right": 0,
            "factor": 1
        }, {
            "name": "Анастасия Катаева",
            "description": "",
            "answers": [
                "img/content/kontur/zaks.jpg",
                "img/content/kontur/kataeva.png",
                "img/content/kontur/svalova.png",
                "img/content/kontur/vlasyuk.png",
            ],
            "right": 1,
            "factor": 1
        },
    ]
};

//Фронтенд
// const levels = {
//     "general": [
//     {
//         "name": "Линус Торвальдс",
//         "description": "Создатель ядра Linux",
//         "answers": [
//             "img/content/torvalds.jpg",
//             "img/content/tomplinson.jpg",
//             "img/content/eich.jpg",
//             "img/content/voznyak.jpg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Илон Маск",
//         "description": "Is there life on Mars?",
//         "answers": [
//             "img/content/bezos.jpg",
//             "img/content/mask.jpg",
//             "img/content/brin.jpg",
//             "img/content/page.jpg",
//         ],
//         "right": 1,
//         "factor": 1
//     }, {
//         "name": "Джефф Безос",
//         "description": "Глава и основатель Amazon",
//         "answers": [
//             "img/content/bezos.jpg",
//             "img/content/brin.jpg",
//             "img/content/karmak.jpg",
//             "img/content/mitnik.jpg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Марк Цукерберг",
//         "description": "Глава и основатель Facebook",
//         "answers": [
//             "img/content/wales.jpg",
//             "img/content/mask.jpg",
//             "img/content/zukerberg.jpg",
//             "img/content/zukerberg-alt.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Джек Ма",
//         "description": "Основатель компании Alibaba",
//         "answers": [
//             "img/content/nadella.jpg",
//             "img/content/miyamoto.jpg",
//             "img/content/ma.jpg",
//             "img/content/knoot.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Тим Кук",
//         "description": "Глава Apple с 2011 года",
//         "answers": [
//             "img/content/bezos.jpg",
//             "img/content/jobs.jpg",
//             "img/content/cook.jpg",
//             "img/content/cook-alt.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Сатья Наделла",
//         "description": "Глава Microsoft с 2014 года",
//         "answers": [
//             "img/content/miyamoto.jpg",
//             "img/content/nadella.jpg",
//             "img/content/ma.jpg",
//             "img/content/lavleys.jpg",
//         ],
//         "right": 1,
//         "factor": 1
//     }, {
//         "name": "Брендан Айк",
//         "description": "Автор языка JavaScript",
//         "answers": [
//             "img/content/eich.jpg",
//             "img/content/balmer.jpg",
//             "img/content/berners-li.jpg",
//             "img/content/bezos.jpg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Дональд Кнут",
//         "description": "Учёный, профессор, автор серии книг «Искусство программирования»",
//         "answers": [
//             "img/content/pazhitnov.jpg",
//             "img/content/ritchi.jpg",
//             "img/content/stollman.jpg",
//             "img/content/knoot.jpg",
//         ],
//         "right": 3,
//         "factor": 1
//     }, {
//         "name": "Билл Гейтс",
//         "description": "Создатель компании Microsoft",
//         "answers": [
//             "img/content/jobs.jpg",
//             "img/content/cook.jpg",
//             "img/content/gates.jpeg",
//             "img/content/allen.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Павел Дуров",
//         "description": "Создатель ВКонтакте и Telegram",
//         "answers": [
//             "img/content/zukerberg.jpg",
//             "img/content/abramov.jpg",
//             "img/content/durov.jpg",
//             "img/content/durov-alt.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Стив Джобс",
//         "description": "Основатель компании Apple",
//         "answers": [
//             "img/content/voznyak.jpg",
//             "img/content/gates.jpeg",
//             "img/content/cook.jpg",
//             "img/content/jobs.jpg",
//         ],
//         "right": 3,
//         "factor": 1
//     }, {
//         "name": "Сергей Брин",
//         "description": "Разработчик и основатель Google",
//         "answers": [
//             "img/content/page.jpg",
//             "img/content/brin.jpg",
//             "img/content/wales.jpg",
//             "img/content/pazhitnov.jpg",
//         ],
//         "right": 1,
//         "factor": 1
//     }, {
//         "name": "Стив Балмер",
//         "description": "Глава Microsoft в 2000-2014 гг.",
//         "answers": [
//             "img/content/gates.jpeg",
//             "img/content/balmer.jpg",
//             "img/content/balmer-alt.jpg",
//             "img/content/balmer-alt2.png",
//         ],
//         "right": 1,
//         "factor": 1
//     }, {
//         "name": "Ларри Пейдж",
//         "description": "Разработчик и основатель Google",
//         "answers": [
//             "img/content/brin.jpg",
//             "img/content/mitnik.jpg",
//             "img/content/page.jpg",
//             "img/content/allen.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Алан Тьюринг",
//         "description": "Математик, логик и криптограф",
//         "answers": [
//             "img/content/turing.jpg",
//             "img/content/turing-alt3.jpg",
//             "img/content/turing-alt2.jpg",
//             "img/content/turing-alt.jpg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Тим Бернерс-Ли",
//         "description": "Создатель Всемирной паутины, глава W3C",
//         "answers": [
//             "img/content/bezos.jpg",
//             "img/content/berners-li.jpg",
//             "img/content/page.jpg",
//             "img/content/gates.jpeg",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Алексей Пажитнов",
//         "description": "Создатель игры «Тетрис»",
//         "answers": [
//             "img/content/pazhitnov.jpg",
//             "img/content/berners-li.jpg",
//             "img/content/kasperski.jpg",
//             "img/content/straustrup.jpg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Стив Возняк",
//         "description": "Соучредитель компании Apple, разработчик компьютеров Apple I и Apple II",
//         "answers": [
//             "img/content/jobs.jpg",
//             "img/content/torvalds.jpg",
//             "img/content/voznyak.jpg",
//             "img/content/allen.jpg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Евгений Касперский",
//         "description": "Глава Лаборатории Касперского",
//         "answers": [
//             "img/content/kasperski.jpg",
//             "img/content/voznyak.jpg",
//             "img/content/pazhitnov.jpg",
//             "img/content/tomplinson.jpg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Сигэру Миямото",
//         "description": "",
//         "answers": [
//             "img/content/ma.jpg",
//             "img/content/nadella.jpg",
//             "img/content/miyamoto.jpg",
//             "img/content/kojima.jpg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Джимми Уэйлс",
//         "description": "",
//         "answers": [
//             "img/content/straustrup.jpg",
//             "img/content/berners-li.jpg",
//             "img/content/wales.jpg",
//             "img/content/ritchi.jpg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Деннис Ритчи",
//         "description": "",
//         "answers": [
//             "img/content/knoot.jpg",
//             "img/content/tomplinson.jpg",
//             "img/content/stollman.jpg",
//             "img/content/ritchi.jpg",
//         ],
//         "right": 3,
//         "factor": 2
//     }, {
//         "name": "Ада Лавлейс",
//         "description": "",
//         "answers": [
//             "img/content/lavleys.jpg",
//             "img/content/lammar.jpg",
//             "img/content/woods.jpg",
//             "img/content/goldberg.jpg",
//         ],
//         "right": 0,
//         "factor": 3
//     }, {
//         "name": "Джон Кармак",
//         "description": "",
//         "answers": [
//             "img/content/page.jpg",
//             "img/content/berners-li.jpg",
//             "img/content/romero.jpg",
//             "img/content/karmak.jpg",
//         ],
//         "right": 3,
//         "factor": 3
//     }, {
//         "name": "Рэй Томлинсон",
//         "description": "",
//         "answers": [
//             "img/content/tomplinson.jpg",
//             "img/content/straustrup.jpg",
//             "img/content/kasperski.jpg",
//             "img/content/mitnik.jpg",
//         ],
//         "right": 0,
//         "factor": 3
//     }, {
//         "name": "Ричард Столлман",
//         "description": "",
//         "answers": [
//             "img/content/tomplinson.jpg",
//             "img/content/torvalds.jpg",
//             "img/content/stollman.jpg",
//             "img/content/romero.jpg",
//         ],
//         "right": 2,
//         "factor": 3
//     }, {
//         "name": "Бьёрн Страуструп",
//         "description": "",
//         "answers": [
//             "img/content/tomplinson.jpg",
//             "img/content/allen.jpg",
//             "img/content/straustrup.jpg",
//             "img/content/eich.jpg",
//         ],
//         "right": 2,
//         "factor": 3
//     }, {
//         "name": "Кевин Митник",
//         "description": "",
//         "answers": [
//             "img/content/page.jpg",
//             "img/content/pazhitnov.jpg",
//             "img/content/brin.jpg",
//             "img/content/mitnik.jpg",
//         ],
//         "right": 3,
//         "factor": 3
//     },
//
//     //holyjs
//
//     {
//         "name": "Андрей Ситник",
//         "description": "",
//         "answers": [
//             "img/content/makeev.jpg",
//             "img/content/kot.jpg",
//             "img/content/sitnik.jpg",
//             "img/content/sitnik-alt.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Вадим Макеев",
//         "description": "",
//         "answers": [
//             "img/content/romero.jpg",
//             "img/content/makeev.jpg",
//             "img/content/simanenko.jpg",
//             "img/content/nagikh.jpg",
//         ],
//         "right": 1,
//         "factor": 1
//     }, {
//         "name": "Дэн Абрамов",
//         "description": "",
//         "answers": [
//             "img/content/klimov.jpg",
//             "img/content/durov.jpg",
//             "img/content/abramov-alt.jpg",
//             "img/content/dvornov.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Витайлий Фридман",
//         "description": "",
//         "answers": [
//             "img/content/fedorov.jpg",
//             "img/content/whittaker.jpg",
//             "img/content/nadella.jpg",
//             "img/content/fridman.jpg",
//         ],
//         "right": 3,
//         "factor": 1
//     }, {
//         "name": "Игорь Алексеенко",
//         "description": "",
//         "answers": [
//             "img/content/alexeenko.png",
//             "img/content/simanenko.jpg",
//             "img/content/makeev.jpg",
//             "img/content/popov.jpg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Алексей Симоненко",
//         "description": "",
//         "answers": [
//             "img/content/simanenko.jpg",
//             "img/content/alexeenko.png",
//             "img/content/kot.jpg",
//             "img/content/popov.jpg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Евгений Кот",
//         "description": "",
//         "answers": [
//             "img/content/simanenko.jpg",
//             "img/content/kot.jpg",
//             "img/content/melihov.jpeg",
//             "img/content/cat.jpg",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Александр Коротаев",
//         "description": "",
//         "answers": [
//             "img/content/prokopov.jpeg",
//             "img/content/korotaev.jpg",
//             "img/content/vinogradov.jpg",
//             "img/content/nagikh.jpg",
//         ],
//         "right": 1,
//         "factor": 1
//     }, {
//         "name": "Лия Веру",
//         "description": "",
//         "answers": [
//             "img/content/verou.jpg",
//             "img/content/kravetz.jpg",
//             "img/content/seleznerva.jpg",
//             "img/content/shinkevitch.jpg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Дуглас Крокфорд",
//         "description": "",
//         "answers": [
//             "img/content/crockford.jpg",
//             "img/content/knoot.jpg",
//             "img/content/ritchi.jpg",
//             "img/content/tomplinson.jpg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Роман Дворнов",
//         "description": "",
//         "answers": [
//             "img/content/ivanov.jpg",
//             "img/content/melihov.jpeg",
//             "img/content/klimov.jpg",
//             "img/content/dvornov.jpg",
//         ],
//         "right": 3,
//         "factor": 1
//     }, {
//         "name": "Уна Кравец",
//         "description": "",
//         "answers": [
//             "img/content/goldberg.jpg",
//             "img/content/verou.jpg",
//             "img/content/kravetz.jpg",
//             "img/content/muzafarova.jpg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Алексей Золотых",
//         "description": "",
//         "answers": [
//             "img/content/melihov.jpeg",
//             "img/content/zolotykh.jpg",
//             "img/content/dorofeev.jpg",
//             "img/content/alexeenko.png",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Маттиас Петтер Йохансон (mpj)",
//         "description": "",
//         "answers": [
//             "img/content/mpj.png",
//             "img/content/karmak.jpg",
//             "img/content/bezos.jpg",
//             "img/content/split.jpg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Илья Климов",
//         "description": "",
//         "answers": [
//             "img/content/klimov.jpg",
//             "img/content/dvornov.jpg",
//             "img/content/dubko.png",
//             "img/content/prokopov.jpeg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Виктор Грищенко",
//         "description": "",
//         "answers": [
//             "img/content/caner.jpg",
//             "img/content/arbon.jpeg",
//             "img/content/grishenko.jpg",
//             "img/content/stollman.jpg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Андрей Нагих",
//         "description": "",
//         "answers": [
//             "img/content/zolotykh.jpg",
//             "img/content/nagikh.jpg",
//             "img/content/pazhitnov.jpg",
//             "img/content/kot.jpg",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Алексей Охрименко",
//         "description": "",
//         "answers": [
//             "img/content/bolton.jpg",
//             "img/content/kasperski.jpg",
//             "img/content/ohrimenko.jpg",
//             "img/content/straustrup.jpg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Мартин Сплитт",
//         "description": "",
//         "answers": [
//             "img/content/tomplinson.jpg",
//             "img/content/fridman.jpg",
//             "img/content/split.jpg",
//             "img/content/page.jpg",
//         ],
//         "right": 2,
//         "factor": 1
//     }, {
//         "name": "Мария Просвирнина",
//         "description": "",
//         "answers": [
//             "img/content/seleznerva.jpg",
//             "img/content/alexashenko.png",
//             "img/content/lammar.jpg",
//             "img/content/prosvirnina.jpg",
//         ],
//         "right": 3,
//         "factor": 2
//     }, {
//         "name": "Андрей Смирнов",
//         "description": "",
//         "answers": [
//             "img/content/yamanov.png",
//             "img/content/smirnov.jpg",
//             "img/content/prokopov.jpeg",
//             "img/content/ivanov.jpg",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Джон Резиг",
//         "description": "",
//         "answers": [
//             "img/content/rezig.jpg",
//             "img/content/klimov.jpg",
//             "img/content/split.jpg",
//             "img/content/semenchenko.jpg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Эван Ю",
//         "description": "",
//         "answers": [
//             "img/content/u.jpeg",
//             "img/content/nadella.jpg",
//             "img/content/ma.jpg",
//             "img/content/miyamoto.jpg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Джордан Валке",
//         "description": "",
//         "answers": [
//             "img/content/abramov.jpg",
//             "img/content/walke.jpg",
//             "img/content/brin.jpg",
//             "img/content/mitnik.jpg",
//         ],
//         "right": 1,
//         "factor": 3
//     }, {
//         "name": "Кайл Симпсон",
//         "description": "",
//         "answers": [
//             "img/content/crockford.jpg",
//             "img/content/eich.jpg",
//             "img/content/simpson.jpeg",
//             "img/content/simpson-alt.jpg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Анна Селезнёва",
//         "description": "",
//         "answers": [
//             "img/content/anikeeva.jpeg",
//             "img/content/prosvirnina.jpg",
//             "img/content/shinkevitch.jpg",
//             "img/content/seleznerva.jpg",
//         ],
//         "right": 3,
//         "factor": 2
//     }, {
//         "name": "Григорий Бакунов",
//         "description": "",
//         "answers": [
//             "img/content/bakunov.jpg",
//             "img/content/kasperski.jpg",
//             "img/content/grishenko.jpg",
//             "img/content/fedorov.jpg",
//         ],
//         "right": 0,
//         "factor": 1
//     }, {
//         "name": "Никита Прокопов",
//         "description": "",
//         "answers": [
//             "img/content/kot.jpg",
//             "img/content/prokopov.jpeg",
//             "img/content/korotaev.jpg",
//             "img/content/popov.jpg",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Владислав Козуля",
//         "description": "",
//         "answers": [
//             "img/content/dvornov.jpg",
//             "img/content/kozulya.jpeg",
//             "img/content/mpj.png",
//             "img/content/kozulya-alt.jpg",
//         ],
//         "right": 1,
//         "factor": 1
//     }, {
//         "name": "Саша Шинкевич",
//         "description": "",
//         "answers": [
//             "img/content/verou.jpg",
//             "img/content/shinkevitch.jpg",
//             "img/content/kravetz.jpg",
//             "img/content/prosvirnina.jpg",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Райан Дал",
//         "description": "",
//         "answers": [
//             "img/content/smirnov.jpg",
//             "img/content/whittaker.jpg",
//             "img/content/dal.jpg",
//             "img/content/u.jpeg",
//         ],
//         "right": 2,
//         "factor": 2
//     }, {
//         "name": "Сергей Рубанов",
//         "description": "",
//         "answers": [
//             "img/content/rubanov.jpg",
//             "img/content/mpj.png",
//             "img/content/nagikh.jpg",
//             "img/content/clapp.jpeg",
//         ],
//         "right": 0,
//         "factor": 2
//     }, {
//         "name": "Мартин Клэпп",
//         "description": "",
//         "answers": [
//             "img/content/rubanov.jpg",
//             "img/content/dal.jpg",
//             "img/content/walke.jpg",
//             "img/content/clapp.jpeg",
//         ],
//         "right": 3,
//         "factor": 3
//     }, {
//         "name": "Джереми Кит",
//         "description": "",
//         "answers": [
//             "img/content/wales.jpg",
//             "img/content/ivanov.jpg",
//             "img/content/makeev.jpg",
//             "img/content/kith.jpg",
//         ],
//         "right": 3,
//         "factor": 2
//     }, {
//         "name": "Владимир Кузнецов",
//         "description": "",
//         "answers": [
//             "img/content/copland.jpg",
//             "img/content/kuznetsov.jpg",
//             "img/content/grinenko.jpeg",
//             "img/content/pazhitnov.jpg",
//         ],
//         "right": 1,
//         "factor": 2
//     }, {
//         "name": "Райан Флоренс",
//         "description": "",
//         "answers": [
//             "img/content/florens.jpeg",
//             "img/content/page.jpg",
//             "img/content/grishenko.jpg",
//             "img/content/dal.jpg",
//         ],
//         "right": 0,
//         "factor": 3
//     }, {
//         "name": "Джейк Арчибальд",
//         "description": "",
//         "answers": [
//             "img/content/alexeenko.png",
//             "img/content/archibald.png",
//             "img/content/bakunov.jpg",
//             "img/content/karmak.jpg",
//         ],
//         "right": 1,
//         "factor": 3
//     }, {
//         "name": "Андерс Хейлсберг",
//         "description": "",
//         "answers": [
//             "img/content/knoot.jpg",
//             "img/content/heilsberg.jpg",
//             "img/content/straustrup.jpg",
//             "img/content/ritchi.jpg",
//         ],
//         "right": 1,
//         "factor": 3
//     },
//
//     //wsd
//
//     {
//         "name": "Юлия Музафарова",
//         "description": "",
//         "answers": [
//             "img/content/seleznerva.jpg",
//             "img/content/muzafarova.jpg",
//             "img/content/shinkevitch.jpg",
//             "img/content/kravetz.jpg",
//         ],
//         "right": 1,
//         "factor": 3
//     }, {
//         "name": "Владимир Гриненко",
//         "description": "",
//         "answers": [
//             "img/content/dorofeev.jpg",
//             "img/content/grishenko.jpg",
//             "img/content/grinenko.jpeg",
//             "img/content/klimov.jpg",
//         ],
//         "right": 2,
//         "factor": 3
//     }, {
//         "name": "Ольга Алексашенко",
//         "description": "",
//         "answers": [
//             "img/content/muzafarova.jpg",
//             "img/content/shinkevitch.jpg",
//             "img/content/prosvirnina.jpg",
//             "img/content/alexashenko.png",
//         ],
//         "right": 3,
//         "factor": 3
//     }, {
//         "name": "Мария Аникеева",
//         "description": "",
//         "answers": [
//             "img/content/anikeeva.jpeg",
//             "img/content/alexashenko.png",
//             "img/content/verou.jpg",
//             "img/content/muzafarova.jpg",
//         ],
//         "right": 0,
//         "factor": 3
//     }, {
//         "name": "Андрей Мелихов",
//         "description": "",
//         "answers": [
//             "img/content/melihov.jpeg",
//             "img/content/kot.jpg",
//             "img/content/prokopov.jpeg",
//             "img/content/smirnov.jpg",
//         ],
//         "right": 0,
//         "factor": 3
//     }, {
//         "name": "Никита Дубко",
//         "description": "",
//         "answers": [
//             "img/content/klimov.jpg",
//             "img/content/dubko.png",
//             "img/content/grinenko.jpeg",
//             "img/content/yamanov.png",
//         ],
//         "right": 1,
//         "factor": 3
//     }]
// };
