const config = {
    level: "general",
    time: 50000,
    lives: 3
}

const levels = {
    "general": [
    {
        "name": "Линус Торвальдс",
        "description": "Создатель ядра Linux",
        "answers": [
            "img/content/torvalds.jpg",
            "img/content/tomplinson.jpg",
            "img/content/eich.jpg",
            "img/content/voznyak.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Илон Маск",
        "description": "Is there life on Mars?",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/mask.jpg",
            "img/content/brin.jpg",
            "img/content/page.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Джефф Безос",
        "description": "Глава и основатель Amazon",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/brin.jpg",
            "img/content/karmak.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Марк Цукерберг",
        "description": "Глава и основатель Facebook",
        "answers": [
            "img/content/wales.jpg",
            "img/content/mask.jpg",
            "img/content/zukerberg.jpg",
            "img/content/zukerberg-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Джек Ма",
        "description": "Основатель компании Alibaba",
        "answers": [
            "img/content/nadella.jpg",
            "img/content/miyamoto.jpg",
            "img/content/ma.jpg",
            "img/content/knoot.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Тим Кук",
        "description": "Глава Apple с 2011 года",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/jobs.jpg",
            "img/content/cook.jpg",
            "img/content/cook-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Сатья Наделла",
        "description": "Глава Microsoft с 2014 года",
        "answers": [
            "img/content/miyamoto.jpg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/lavleys.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Брендан Айк",
        "description": "Автор языка JavaScript",
        "answers": [
            "img/content/eich.jpg",
            "img/content/balmer.jpg",
            "img/content/berners-li.jpg",
            "img/content/bezos.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Дональд Кнут",
        "description": "Учёный, профессор, автор серии книг «Искусство программирования»",
        "answers": [
            "img/content/pazhitnov.jpg",
            "img/content/ritchi.jpg",
            "img/content/stollman.jpg",
            "img/content/knoot.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Билл Гейтс",
        "description": "Создатель компании Microsoft",
        "answers": [
            "img/content/jobs.jpg",
            "img/content/cook.jpg",
            "img/content/gates.jpeg",
            "img/content/allen.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Павел Дуров",
        "description": "Создатель ВКонтакте и Telegram",
        "answers": [
            "img/content/zukerberg.jpg",
            "img/content/abramov.jpg",
            "img/content/durov.jpg",
            "img/content/durov-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Стив Джобс",
        "description": "Основатель компании Apple",
        "answers": [
            "img/content/voznyak.jpg",
            "img/content/gates.jpeg",
            "img/content/cook.jpg",
            "img/content/jobs.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Сергей Брин",
        "description": "Разработчик и основатель Google",
        "answers": [
            "img/content/page.jpg",
            "img/content/brin.jpg",
            "img/content/wales.jpg",
            "img/content/pazhitnov.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Стив Балмер",
        "description": "Глава Microsoft в 2000-2014 гг.",
        "answers": [
            "img/content/gates.jpeg",
            "img/content/balmer.jpg",
            "img/content/balmer-alt.jpg",
            "img/content/balmer-alt2.png",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Ларри Пейдж",
        "description": "Разработчик и основатель Google",
        "answers": [
            "img/content/brin.jpg",
            "img/content/mitnik.jpg",
            "img/content/page.jpg",
            "img/content/allen.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Алан Тьюринг",
        "description": "Математик, логик и криптограф",
        "answers": [
            "img/content/turing.jpg",
            "img/content/turing-alt3.jpg",
            "img/content/turing-alt2.jpg",
            "img/content/turing-alt.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Тим Бернерс-Ли",
        "description": "Создатель Всемирной паутины, глава W3C",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/berners-li.jpg",
            "img/content/page.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Алексей Пажитнов",
        "description": "Создатель игры «Тетрис»",
        "answers": [
            "img/content/pazhitnov.jpg",
            "img/content/berners-li.jpg",
            "img/content/kasperski.jpg",
            "img/content/straustrup.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Стив Возняк",
        "description": "Соучредитель компании Apple, разработчик компьютеров Apple I и Apple II",
        "answers": [
            "img/content/jobs.jpg",
            "img/content/torvalds.jpg",
            "img/content/voznyak.jpg",
            "img/content/allen.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Евгений Касперский",
        "description": "Глава Лаборатории Касперского",
        "answers": [
            "img/content/kasperski.jpg",
            "img/content/voznyak.jpg",
            "img/content/pazhitnov.jpg",
            "img/content/tomplinson.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Сигэру Миямото",
        "description": "",
        "answers": [
            "img/content/ma.jpg",
            "img/content/nadella.jpg",
            "img/content/miyamoto.jpg",
            "img/content/kojima.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Джимми Уэйлс",
        "description": "",
        "answers": [
            "img/content/straustrup.jpg",
            "img/content/berners-li.jpg",
            "img/content/wales.jpg",
            "img/content/ritchi.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Деннис Ритчи",
        "description": "",
        "answers": [
            "img/content/knoot.jpg",
            "img/content/tomplinson.jpg",
            "img/content/stollman.jpg",
            "img/content/ritchi.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "name": "Ада Лавлейс",
        "description": "",
        "answers": [
            "img/content/lavleys.jpg",
            "img/content/lammar.jpg",
            "img/content/woods.jpg",
            "img/content/goldberg.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "name": "Джон Кармак",
        "description": "",
        "answers": [
            "img/content/page.jpg",
            "img/content/berners-li.jpg",
            "img/content/romero.jpg",
            "img/content/karmak.jpg",
        ],
        "right": 3,
        "factor": 3
    }, {
        "name": "Рэй Томлинсон",
        "description": "",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/straustrup.jpg",
            "img/content/kasperski.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "name": "Ричард Столлман",
        "description": "",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/torvalds.jpg",
            "img/content/stollman.jpg",
            "img/content/romero.jpg",
        ],
        "right": 2,
        "factor": 3
    }, {
        "name": "Бьёрн Страуструп",
        "description": "",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/allen.jpg",
            "img/content/straustrup.jpg",
            "img/content/eich.jpg",
        ],
        "right": 2,
        "factor": 3
    }, {
        "name": "Кевин Митник",
        "description": "",
        "answers": [
            "img/content/page.jpg",
            "img/content/pazhitnov.jpg",
            "img/content/brin.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 3,
        "factor": 3
    },

    //holyjs

    {
        "name": "Андрей Ситник",
        "description": "",
        "answers": [
            "img/content/makeev.jpg",
            "img/content/kot.jpg",
            "img/content/sitnik.jpg",
            "img/content/sitnik-alt.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Вадим Макеев",
        "description": "",
        "answers": [
            "img/content/romero.jpg",
            "img/content/makeev.jpg",
            "img/content/simanenko.jpg",
            "img/content/nagikh.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Дэн Абрамов",
        "description": "",
        "answers": [
            "img/content/klimov.jpg",
            "img/content/durov.jpg",
            "img/content/abramov-alt.jpg",
            "img/content/dvornov.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Витайлий Фридман",
        "description": "",
        "answers": [
            "img/content/fedorov.jpg",
            "img/content/whittaker.jpg",
            "img/content/nadella.jpg",
            "img/content/fridman.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Игорь Алексеенко",
        "description": "",
        "answers": [
            "img/content/alexeenko.png",
            "img/content/simanenko.jpg",
            "img/content/makeev.jpg",
            "img/content/popov.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Алексей Симоненко",
        "description": "",
        "answers": [
            "img/content/simanenko.jpg",
            "img/content/alexeenko.png",
            "img/content/kot.jpg",
            "img/content/popov.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Евгений Кот",
        "description": "",
        "answers": [
            "img/content/simanenko.jpg",
            "img/content/kot.jpg",
            "img/content/melihov.jpeg",
            "img/content/cat.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Александр Коротаев",
        "description": "",
        "answers": [
            "img/content/prokopov.jpeg",
            "img/content/korotaev.jpg",
            "img/content/vinogradov.jpg",
            "img/content/nagikh.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Лия Веру",
        "description": "",
        "answers": [
            "img/content/verou.jpg",
            "img/content/kravetz.jpg",
            "img/content/seleznerva.jpg",
            "img/content/shinkevitch.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Дуглас Крокфорд",
        "description": "",
        "answers": [
            "img/content/crockford.jpg",
            "img/content/knoot.jpg",
            "img/content/ritchi.jpg",
            "img/content/tomplinson.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Роман Дворнов",
        "description": "",
        "answers": [
            "img/content/ivanov.jpg",
            "img/content/melihov.jpeg",
            "img/content/klimov.jpg",
            "img/content/dvornov.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "name": "Уна Кравец",
        "description": "",
        "answers": [
            "img/content/goldberg.jpg",
            "img/content/verou.jpg",
            "img/content/kravetz.jpg",
            "img/content/muzafarova.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Алексей Золотых",
        "description": "",
        "answers": [
            "img/content/melihov.jpeg",
            "img/content/zolotykh.jpg",
            "img/content/dorofeev.jpg",
            "img/content/alexeenko.png",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Маттиас Петтер Йохансон (mpj)",
        "description": "",
        "answers": [
            "img/content/mpj.png",
            "img/content/karmak.jpg",
            "img/content/bezos.jpg",
            "img/content/split.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Илья Климов",
        "description": "",
        "answers": [
            "img/content/klimov.jpg",
            "img/content/dvornov.jpg",
            "img/content/dubko.png",
            "img/content/prokopov.jpeg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Виктор Грищенко",
        "description": "",
        "answers": [
            "img/content/caner.jpg",
            "img/content/arbon.jpeg",
            "img/content/grishenko.jpg",
            "img/content/stollman.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Андрей Нагих",
        "description": "",
        "answers": [
            "img/content/zolotykh.jpg",
            "img/content/nagikh.jpg",
            "img/content/pazhitnov.jpg",
            "img/content/kot.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Алексей Охрименко",
        "description": "",
        "answers": [
            "img/content/bolton.jpg",
            "img/content/kasperski.jpg",
            "img/content/ohrimenko.jpg",
            "img/content/straustrup.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Мартин Сплитт",
        "description": "",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/fridman.jpg",
            "img/content/split.jpg",
            "img/content/page.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "name": "Мария Просвирнина",
        "description": "",
        "answers": [
            "img/content/seleznerva.jpg",
            "img/content/alexashenko.png",
            "img/content/lammar.jpg",
            "img/content/prosvirnina.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "name": "Андрей Смирнов",
        "description": "",
        "answers": [
            "img/content/yamanov.png",
            "img/content/smirnov.jpg",
            "img/content/prokopov.jpeg",
            "img/content/ivanov.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Джон Резиг",
        "description": "",
        "answers": [
            "img/content/rezig.jpg",
            "img/content/klimov.jpg",
            "img/content/split.jpg",
            "img/content/semenchenko.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Эван Ю",
        "description": "",
        "answers": [
            "img/content/u.jpeg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/miyamoto.jpg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Джордан Валке",
        "description": "",
        "answers": [
            "img/content/abramov.jpg",
            "img/content/walke.jpg",
            "img/content/brin.jpg",
            "img/content/mitnik.jpg",
        ],
        "right": 1,
        "factor": 3
    }, {
        "name": "Кайл Симпсон",
        "description": "",
        "answers": [
            "img/content/crockford.jpg",
            "img/content/eich.jpg",
            "img/content/simpson.jpeg",
            "img/content/simpson-alt.jpg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Анна Селезнёва",
        "description": "",
        "answers": [
            "img/content/anikeeva.jpeg",
            "img/content/prosvirnina.jpg",
            "img/content/shinkevitch.jpg",
            "img/content/seleznerva.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "name": "Григорий Бакунов",
        "description": "",
        "answers": [
            "img/content/bakunov.jpg",
            "img/content/kasperski.jpg",
            "img/content/grishenko.jpg",
            "img/content/fedorov.jpg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "name": "Никита Прокопов",
        "description": "",
        "answers": [
            "img/content/kot.jpg",
            "img/content/prokopov.jpeg",
            "img/content/korotaev.jpg",
            "img/content/popov.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Владислав Козуля",
        "description": "",
        "answers": [
            "img/content/dvornov.jpg",
            "img/content/kozulya.jpeg",
            "img/content/mpj.png",
            "img/content/kozulya-alt.jpg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "name": "Саша Шинкевич",
        "description": "",
        "answers": [
            "img/content/verou.jpg",
            "img/content/shinkevitch.jpg",
            "img/content/kravetz.jpg",
            "img/content/prosvirnina.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Райан Дал",
        "description": "",
        "answers": [
            "img/content/smirnov.jpg",
            "img/content/whittaker.jpg",
            "img/content/dal.jpg",
            "img/content/u.jpeg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "name": "Сергей Рубанов",
        "description": "",
        "answers": [
            "img/content/rubanov.jpg",
            "img/content/mpj.png",
            "img/content/nagikh.jpg",
            "img/content/clapp.jpeg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "name": "Мартин Клэпп",
        "description": "",
        "answers": [
            "img/content/rubanov.jpg",
            "img/content/dal.jpg",
            "img/content/walke.jpg",
            "img/content/clapp.jpeg",
        ],
        "right": 3,
        "factor": 3
    }, {
        "name": "Джереми Кит",
        "description": "",
        "answers": [
            "img/content/wales.jpg",
            "img/content/ivanov.jpg",
            "img/content/makeev.jpg",
            "img/content/kith.jpg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "name": "Владимир Кузнецов",
        "description": "",
        "answers": [
            "img/content/copland.jpg",
            "img/content/kuznetsov.jpg",
            "img/content/grinenko.jpeg",
            "img/content/pazhitnov.jpg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "name": "Райан Флоренс",
        "description": "",
        "answers": [
            "img/content/florens.jpeg",
            "img/content/page.jpg",
            "img/content/grishenko.jpg",
            "img/content/dal.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "name": "Джейк Арчибальд",
        "description": "",
        "answers": [
            "img/content/alexeenko.png",
            "img/content/archibald.png",
            "img/content/bakunov.jpg",
            "img/content/karmak.jpg",
        ],
        "right": 1,
        "factor": 3
    }, {
        "name": "Андерс Хейлсберг",
        "description": "",
        "answers": [
            "img/content/knoot.jpg",
            "img/content/heilsberg.jpg",
            "img/content/straustrup.jpg",
            "img/content/ritchi.jpg",
        ],
        "right": 1,
        "factor": 3
    },

    //wsd

    {
        "name": "Юлия Музафарова",
        "description": "",
        "answers": [
            "img/content/seleznerva.jpg",
            "img/content/muzafarova.jpg",
            "img/content/shinkevitch.jpg",
            "img/content/kravetz.jpg",
        ],
        "right": 1,
        "factor": 3
    }, {
        "name": "Владимир Гриненко",
        "description": "",
        "answers": [
            "img/content/dorofeev.jpg",
            "img/content/grishenko.jpg",
            "img/content/grinenko.jpeg",
            "img/content/klimov.jpg",
        ],
        "right": 2,
        "factor": 3
    }, {
        "name": "Ольга Алексашенко",
        "description": "",
        "answers": [
            "img/content/muzafarova.jpg",
            "img/content/shinkevitch.jpg",
            "img/content/prosvirnina.jpg",
            "img/content/alexashenko.png",
        ],
        "right": 3,
        "factor": 3
    }, {
        "name": "Мария Аникеева",
        "description": "",
        "answers": [
            "img/content/anikeeva.jpeg",
            "img/content/alexashenko.png",
            "img/content/verou.jpg",
            "img/content/muzafarova.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "name": "Андрей Мелихов",
        "description": "",
        "answers": [
            "img/content/melihov.jpeg",
            "img/content/kot.jpg",
            "img/content/prokopov.jpeg",
            "img/content/smirnov.jpg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "name": "Никита Дубко",
        "description": "",
        "answers": [
            "img/content/klimov.jpg",
            "img/content/dubko.png",
            "img/content/grinenko.jpeg",
            "img/content/yamanov.png",
        ],
        "right": 1,
        "factor": 3
    }]
};
