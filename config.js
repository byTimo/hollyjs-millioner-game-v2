const config = {
    level: "general",
    time: 20000,
    lives: 3
}

const levels = {
    "general": [
    {
        "text": "Линус Торвальдс",
        "answers": [
            "img/content/torvalds.jpg",
            "img/content/tomplinson.jpg",
            "img/content/eich.jpg",
            "img/content/voznyak.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Илон Маск",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/mask.jpg",
            "img/content/brin.jpg",
            "img/content/page.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Джефф Безос",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/brin.jpg",
            "img/content/karmak.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Марк Цукерберг",
        "answers": [
            "img/content/wales.jpg",
            "img/content/mask.jpg",
            "img/content/zukerberg.jpg",
            "img/content/zukerberg-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Джек Ма",
        "answers": [
            "img/content/nadella.jpg",
            "img/content/miyamoto.jpg",
            "img/content/ma.jpg",
            "img/content/knoot.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Тим Кук",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/jobs.jpg",
            "img/content/cook.jpg",
            "img/content/cook-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Сатья Наделла",
        "answers": [
            "img/content/miyamoto.jpg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/lavleys.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Брендан Айк",
        "answers": [
            "img/content/eich.jpg",
            "img/content/balmer.jpg",
            "img/content/berners-li.jpg",
            "img/content/bezos.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Дональд Кнут",
        "answers": [
            "img/content/pazhitnov.jpg",
            "img/content/ritchi.jpg",
            "img/content/stollman.jpg",
            "img/content/knoot.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "text": "Билл Гейтс",
        "answers": [
            "img/content/jobs.jpg",
            "img/content/cook.jpg",
            "img/content/gates.jpeg",
            "img/content/allen.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Павел Дуров",
        "answers": [
            "img/content/zukerberg.jpg",
            "img/content/abramov.jpg",
            "img/content/durov.jpg",
            "img/content/durov-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Стив Джобс",
        "answers": [
            "img/content/voznyak.jpg",
            "img/content/gates.jpeg",
            "img/content/cook.jpg",
            "img/content/jobs.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "text": "Сергей Брин",
        "answers": [
            "img/content/page.jpg",
            "img/content/brin.jpg",
            "img/content/wales.jpg",
            "img/content/pazhitnov.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Стив Балмер",
        "answers": [
            "img/content/gates.jpeg",
            "img/content/balmer.jpg",
            "img/content/balmer-alt.jpg",
            "img/content/balmer-alt2.png",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Ларри Пейдж",
        "answers": [
            "img/content/brin.jpg",
            "img/content/mitnik.jpg",
            "img/content/page.jpg",
            "img/content/allen.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Алан Тьюринг",
        "answers": [
            "img/content/turing.jpg",
            "img/content/turing-alt3.jpg",
            "img/content/turing-alt2.jpg",
            "img/content/turing-alt.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Тим Бернерс-Ли",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/berners-li.jpg",
            "img/content/page.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Алексей Пажитнов",
        "answers": [
            "img/content/pazhitnov.jpg",
            "img/content/berners-li.jpg",
            "img/content/kasperski.jpg",
            "img/content/straustrup.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Стив Возняк",
        "answers": [
            "img/content/jobs.jpg",
            "img/content/torvalds.jpg",
            "img/content/voznyak.jpg",
            "img/content/allen.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Евгений Касперский",
        "answers": [
            "img/content/kasperski.jpg",
            "img/content/voznyak.jpg",
            "img/content/pazhitnov.jpg",
            "img/content/tomplinson.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Сигэру Миямото",
        "answers": [
            "img/content/ma.jpg",
            "img/content/nadella.jpg",
            "img/content/miyamoto.jpg",
            "img/content/kojima.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Джимми Уэйлс",
        "answers": [
            "img/content/straustrup.jpg",
            "img/content/berners-li.jpg",
            "img/content/wales.jpg",
            "img/content/ritchi.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Деннис Ритчи",
        "answers": [
            "img/content/knoot.jpg",
            "img/content/tomplinson.jpg",
            "img/content/stollman.jpg",
            "img/content/ritchi.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "text": "Ада Лавлейс",
        "answers": [
            "img/content/lavleys.jpg",
            "img/content/lammar.jpg",
            "img/content/woods.jpg",
            "img/content/goldberg.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "text": "Джон Кармак",
        "answers": [
            "img/content/page.jpg",
            "img/content/berners-li.jpg",
            "img/content/romero.jpg",
            "img/content/karmak.jpg",
        ],
        "right": 3,
        "factor": 3
    }, {
        "text": "Рэй Томлинсон",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/straustrup.jpg",
            "img/content/kasperski.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "text": "Ричард Столлман",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/torvalds.jpg",
            "img/content/stollman.jpg",
            "img/content/romero.jpg",
        ],
        "right": 2,
        "factor": 3
    }, {
        "text": "Бьёрн Страуструп",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/allen.jpg",
            "img/content/straustrup.jpg",
            "img/content/eich.jpg",
        ],
        "right": 2,
        "factor": 3
    }, {
        "text": "Кевин Митник",
        "answers": [
            "img/content/page.jpg",
            "img/content/pazhitnov.jpg",
            "img/content/brin.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 3,
        "factor": 3
    },

    //heisenbug

    // {
    //     "text": "Алексей Баранцев",
    //     "answers": [
    //         "img/content/baranzev.jpeg",
    //         "img/content/mitnik.jpg",
    //         "img/content/allen.jpg",
    //         "img/content/pazhitnov.jpg",
    //     ],
    //     "right": 0,
    //     "factor": 1
    // }, {
    //     "text": "Сэм Канер",
    //     "answers": [
    //         "img/content/alexandrov.png",
    //         "img/content/pazhitnov.jpg",
    //         "img/content/caner.jpg",
    //         "img/content/bach.jpeg",
    //     ],
    //     "right": 2,
    //     "factor": 1
    // }, {
    //     "text": "Антон Семенченко",
    //     "answers": [
    //         "img/content/brin.jpg",
    //         "img/content/baranzev.jpeg",
    //         "img/content/semenchenko.jpg",
    //         "img/content/tomplinson.jpg",
    //     ],
    //     "right": 2,
    //     "factor": 1
    // }, {
    //     "text": "Наталья Руколь",
    //     "answers": [
    //         "img/content/nechaeva.jpg",
    //         "img/content/rukol.jpg",
    //         "img/content/goldberg.jpg",
    //         "img/content/lisacrispinphoto.jpg",
    //     ],
    //     "right": 1,
    //     "factor": 1
    // }, {
    //     "text": "Джеральд Вайнберг",
    //     "answers": [
    //         "img/content/vinogradov.jpg",
    //         "img/content/ritchi.jpg",
    //         "img/content/wineberg.jpg",
    //         "img/content/caner.jpg",
    //     ],
    //     "right": 2,
    //     "factor": 1
    // }, {
    //     "text": "Ли Копланд",
    //     "answers": [
    //         "img/content/bolton.jpg",
    //         "img/content/eich.jpg",
    //         "img/content/knoot.jpg",
    //         "img/content/copland.jpg",
    //     ],
    //     "right": 3,
    //     "factor": 1
    // }, {
    //     "text": "Джеймс Уиттакер",
    //     "answers": [
    //         "img/content/whittaker.jpg",
    //         "img/content/vinogradov.jpg",
    //         "img/content/allen.jpg",
    //         "img/content/copland.jpg",
    //     ],
    //     "right": 0,
    //     "factor": 1
    // }, {
    //     "text": "Джейсон Арбон",
    //     "answers": [
    //         "img/content/arbon.jpeg",
    //         "img/content/bolton.jpg",
    //         "img/content/pazhitnov.jpg",
    //         "img/content/romero.jpg",
    //     ],
    //     "right": 0,
    //     "factor": 1
    // }, {
    //     "text": "Джеймс Бах",
    //     "answers": [
    //         "img/content/bach.jpeg",
    //         "img/content/gerrad.jpg",
    //         "img/content/nadella.jpg",
    //         "img/content/whittaker.jpg",
    //     ],
    //     "right": 0,
    //     "factor": 1
    // }, {
    //     "text": "Алексей Лупан",
    //     "answers": [
    //         "img/content/nadella.jpg",
    //         "img/content/page.jpg",
    //         "img/content/savin.jpeg",
    //         "img/content/lupan.jpg",
    //     ],
    //     "right": 3,
    //     "factor": 1
    // }, {
    //     "text": "Александр Александров",
    //     "answers": [
    //         "img/content/arbon.jpeg",
    //         "img/content/berners-li.jpg",
    //         "img/content/alexandrov.png",
    //         "img/content/beizer.png",
    //     ],
    //     "right": 2,
    //     "factor": 1
    // }, {
    //     "text": "Арсений Батыров",
    //     "answers": [
    //         "img/content/batyrov.jpeg",
    //         "img/content/abramov.jpg",
    //         "img/content/gartner.jpg",
    //         "img/content/karmak.jpg",
    //     ],
    //     "right": 0,
    //     "factor": 1
    // }, {
    //     "text": "Алексей Виноградов",
    //     "answers": [
    //         "img/content/straustrup.jpg",
    //         "img/content/vinogradov.jpg",
    //         "img/content/knoot.jpg",
    //         "img/content/karmak.jpg",
    //     ],
    //     "right": 1,
    //     "factor": 1
    // }, {
    //     "text": "Джейсон Хаггинс",
    //     "answers": [
    //         "img/content/arbon.jpeg",
    //         "img/content/huggins.jpg",
    //         "img/content/berners-li.jpg",
    //         "img/content/wales.jpg",
    //     ],
    //     "right": 1,
    //     "factor": 1
    // }, {
    //     "text": "Майкл Болтон",
    //     "answers": [
    //         "img/content/eich.jpg",
    //         "img/content/caner.jpg",
    //         "img/content/bach.jpeg",
    //         "img/content/bolton.jpg",
    //     ],
    //     "right": 3,
    //     "factor": 1
    // }, {
    //     "text": "Маркус Гэртнер",
    //     "answers": [
    //         "img/content/page.jpg",
    //         "img/content/gartner.jpg",
    //         "img/content/mitnik.jpg",
    //         "img/content/abramov.jpg",
    //     ],
    //     "right": 1,
    //     "factor": 1
    // }, {
    //     "text": "Борис Бейзер",
    //     "answers": [
    //         "img/content/copland.jpg",
    //         "img/content/beizer.png",
    //         "img/content/wineberg.jpg",
    //         "img/content/kasperski.jpg",
    //     ],
    //     "right": 1,
    //     "factor": 1
    // }, {
    //     "text": "Роман Савин",
    //     "answers": [
    //         "img/content/savin.jpeg",
    //         "img/content/meriin.png",
    //         "img/content/gartner.jpg",
    //         "img/content/alexandrov.png",
    //     ],
    //     "right": 0,
    //     "factor": 1
    // }, {
    //     "text": "Лайза Криспин",
    //     "answers": [
    //         "img/content/goldberg.jpg",
    //         "img/content/lisacrispinphoto.jpg",
    //         "img/content/rukol.jpg",
    //         "img/content/woods.jpg",
    //     ],
    //     "right": 1,
    //     "factor": 1
    // }, {
    //     "text": "Пол Геррард",
    //     "answers": [
    //         "img/content/bolton.jpg",
    //         "img/content/copland.jpg",
    //         "img/content/caner.jpg",
    //         "img/content/gerrad.jpg",
    //     ],
    //     "right": 3,
    //     "factor": 1
    // }, {
    //     "text": "Михаил Мериин",
    //     "answers": [
    //         "img/content/straustrup.jpg",
    //         "img/content/meriin.png",
    //         "img/content/alexandrov.png",
    //         "img/content/caner.jpg",
    //     ],
    //     "right": 1,
    //     "factor": 1
    // }, {
    //     "text": "Макс Дорофеев",
    //     "answers": [
    //         "img/content/page.jpg",
    //         "img/content/semenchenko.jpg",
    //         "img/content/abramov.jpg",
    //         "img/content/dorofeev.jpg",
    //     ],
    //     "right": 3,
    //     "factor": 1
    // }, {
    //     "text": "Юлия Нечаева",
    //     "answers": [
    //         "img/content/goldberg.jpg",
    //         "img/content/woods.jpg",
    //         "img/content/rukol.jpg",
    //         "img/content/nechaeva.jpg",
    //     ],
    //     "right": 3,
    //     "factor": 1
    // }

    //holyjs

    {
        "text": "Андрей Ситник",
        "answers": [
            "img/content/makeev.jpg",
            "img/content/kot.jpg",
            "img/content/sitnik.jpg",
            "img/content/sitnik-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Вадим Макеев",
        "answers": [
            "img/content/romero.jpg",
            "img/content/makeev.jpg",
            "img/content/simanenko.jpg",
            "img/content/nagikh.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Дэн Абрамов",
        "answers": [
            "img/content/klimov.jpg",
            "img/content/durov.jpg",
            "img/content/abramov-alt.jpg",
            "img/content/dvornov.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Витайлий Фридман",
        "answers": [
            "img/content/fedorov.jpg",
            "img/content/whittaker.jpg",
            "img/content/nadella.jpg",
            "img/content/fridman.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "text": "Игорь Алексеенко",
        "answers": [
            "img/content/alexeenko.png",
            "img/content/simanenko.jpg",
            "img/content/makeev.jpg",
            "img/content/popov.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Алексей Симоненко",
        "answers": [
            "img/content/simanenko.jpg",
            "img/content/alexeenko.png",
            "img/content/kot.jpg",
            "img/content/popov.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Евгений Кот",
        "answers": [
            "img/content/simanenko.jpg",
            "img/content/kot.jpg",
            "img/content/korotaev.jpg",
            "img/content/cat.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Александр Коротаев",
        "answers": [
            "img/content/prokopov.jpeg",
            "img/content/korotaev.jpg",
            "img/content/vinogradov.jpg",
            "img/content/nagikh.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Лия Веру",
        "answers": [
            "img/content/verou.jpg",
            "img/content/kravetz.jpg",
            "img/content/seleznerva.jpg",
            "img/content/shinkevitch.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Дуглас Крокфорд",
        "answers": [
            "img/content/crockford.jpg",
            "img/content/knoot.jpg",
            "img/content/ritchi.jpg",
            "img/content/tomplinson.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Роман Дворнов",
        "answers": [
            "img/content/ivanov.jpg",
            "img/content/popov.jpg",
            "img/content/klimov.jpg",
            "img/content/dvornov.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "text": "Уна Кравец",
        "answers": [
            "img/content/goldberg.jpg",
            "img/content/verou.jpg",
            "img/content/kravetz.jpg",
            "img/content/woods.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Алексей Золотых",
        "answers": [
            "img/content/dvornov.jpg",
            "img/content/zolotykh.jpg",
            "img/content/dorofeev.jpg",
            "img/content/alexeenko.png",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Маттиас Петтер Йохансон (mpj)",
        "answers": [
            "img/content/mpj.png",
            "img/content/karmak.jpg",
            "img/content/bezos.jpg",
            "img/content/split.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Илья Климов",
        "answers": [
            "img/content/klimov.jpg",
            "img/content/dvornov.jpg",
            "img/content/makeev.jpg",
            "img/content/prokopov.jpeg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Виктор Грищенко",
        "answers": [
            "img/content/caner.jpg",
            "img/content/arbon.jpeg",
            "img/content/grishenko.jpg",
            "img/content/stollman.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Андрей Нагих",
        "answers": [
            "img/content/zolotykh.jpg",
            "img/content/nagikh.jpg",
            "img/content/pazhitnov.jpg",
            "img/content/kot.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Алексей Охрименко",
        "answers": [
            "img/content/bolton.jpg",
            "img/content/kasperski.jpg",
            "img/content/ohrimenko.jpg",
            "img/content/straustrup.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Мартин Сплитт",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/fridman.jpg",
            "img/content/split.jpg",
            "img/content/page.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Мария Просвирнина",
        "answers": [
            "img/content/seleznerva.jpg",
            "img/content/shinkevitch.jpg",
            "img/content/lammar.jpg",
            "img/content/prosvirnina.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "text": "Андрей Смирнов",
        "answers": [
            "img/content/yamanov.png",
            "img/content/smirnov.jpg",
            "img/content/prokopov.jpeg",
            "img/content/ivanov.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Джон Резиг",
        "answers": [
            "img/content/rezig.jpg",
            "img/content/klimov.jpg",
            "img/content/split.jpg",
            "img/content/semenchenko.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Эван Ю",
        "answers": [
            "img/content/u.jpeg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/miyamoto.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Джордан Валке",
        "answers": [
            "img/content/abramov.jpg",
            "img/content/walke.jpg",
            "img/content/brin.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 1,
        "factor": 3
    }, {
        "text": "Кайл Симпсон",
        "answers": [
            "img/content/crockford.jpg",
            "img/content/eich.jpg",
            "img/content/simpson.jpeg",
            "img/content/simpson-alt.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Анна Селезнёва",
        "answers": [
            "img/content/kravetz.jpg",
            "img/content/prosvirnina.jpg",
            "img/content/shinkevitch.jpg",
            "img/content/seleznerva.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "text": "Григорий Бакунов",
        "answers": [
            "img/content/bakunov.jpg",
            "img/content/kasperski.jpg",
            "img/content/grishenko.jpg",
            "img/content/fedorov.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Никита Прокопов",
        "answers": [
            "img/content/kot.jpg",
            "img/content/prokopov.jpeg",
            "img/content/korotaev.jpg",
            "img/content/popov.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Владислав Козуля",
        "answers": [
            "img/content/dvornov.jpg",
            "img/content/kozulya.jpeg",
            "img/content/mpj.png",
            "img/content/kozulya-alt.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Саша Шинкевич",
        "answers": [
            "img/content/verou.jpg",
            "img/content/shinkevitch.jpg",
            "img/content/kravetz.jpg",
            "img/content/prosvirnina.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Райан Дал",
        "answers": [
            "img/content/smirnov.jpg",
            "img/content/whittaker.jpg",
            "img/content/dal.jpg",
            "img/content/u.jpeg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Сергей Рубанов",
        "answers": [
            "img/content/rubanov.jpg",
            "img/content/mpj.png",
            "img/content/nagikh.jpg",
            "img/content/clapp.jpeg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Мартин Клэпп",
        "answers": [
            "img/content/rubanov.jpg",
            "img/content/dal.jpg",
            "img/content/walke.jpg",
            "img/content/clapp.jpeg",
        ],
        "right": 3,
        "factor": 3
    }, {
        "text": "Джереми Кит",
        "answers": [
            "img/content/wales.jpg",
            "img/content/ivanov.jpg",
            "img/content/makeev.jpg",
            "img/content/kith.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "text": "Владимир Кузнецов",
        "answers": [
            "img/content/copland.jpg",
            "img/content/kuznetsov.jpg",
            "img/content/grishenko.jpg",
            "img/content/pazhitnov.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Райан Флоренс",
        "answers": [
            "img/content/florens.jpeg",
            "img/content/page.jpg",
            "img/content/grishenko.jpg",
            "img/content/dal.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "text": "Джейк Арчибальд",
        "answers": [
            "img/content/alexeenko.png",
            "img/content/archibald.png",
            "img/content/bakunov.jpg",
            "img/content/karmak.jpg",
        ],
        "right": 1,
        "factor": 3
    }, {
        "text": "Андерс Хейлсберг",
        "answers": [
            "img/content/knoot.jpg",
            "img/content/heilsberg.jpg",
            "img/content/straustrup.jpg",
            "img/content/ritchi.jpg",
        ],
        "right": 1,
        "factor": 3
    }

    ]
};
