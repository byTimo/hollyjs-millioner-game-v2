const config = {
    level: "general",
    time: 500000
}

const levels = {
    "general": [{
        "text": "Линус Торвальдс",
        "answers": [
            "img/content/torvalds.jpg",
            "img/content/balmer.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Илон Маск",
        "answers": [
            "img/content/torvalds.jpg",
            "img/content/mask.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Джефф Безос",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/mask.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Марк Цукерберг",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/mask.jpg",
            "img/content/zukerberg.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Джек Ма",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/mask.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Тим Кук",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/mask.jpg",
            "img/content/cook.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Сатья Наделла",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Брендан Айк",
        "answers": [
            "img/content/eich.jpg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 0,
        "factor": 1
    }, {
        "text": "Дональд Кнут",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/knoot.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "text": "Билл Гейтс",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/nadella.jpg",
            "img/content/gates.jpeg",
            "img/content/torvalds.jpg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Павел Дуров",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/nadella.jpg",
            "img/content/durov.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Стив Джобс",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/nadella.jpg",
            "img/content/ma.jpg",
            "img/content/jobs.jpg",
        ],
        "right": 3,
        "factor": 1
    }, {
        "text": "Сергей Брин",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/brin.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Стив Балмер",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/balmer.jpg",
            "img/content/ma.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 1,
        "factor": 1
    }, {
        "text": "Ларри Пейдж",
        "answers": [
            "img/content/bezos.jpg",
            "img/content/nadella.jpg",
            "img/content/page.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 1
    }, {
        "text": "Алан Тьюринг",
        "answers": [
            "img/content/turing.jpg",
            "img/content/nadella.jpg",
            "img/content/page.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Тим Бернерс-Ли",
        "answers": [
            "img/content/turing.jpg",
            "img/content/berners-li.jpg",
            "img/content/page.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 1,
        "factor": 2
    }, {
        "text": "Алексей Пажитнов",
        "answers": [
            "img/content/turing.jpg",
            "img/content/berners-li.jpg",
            "img/content/pazhitnov.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Стив Возняк",
        "answers": [
            "img/content/turing.jpg",
            "img/content/berners-li.jpg",
            "img/content/voznyak.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Евгений Касперский",
        "answers": [
            "img/content/kasperski.jpg",
            "img/content/berners-li.jpg",
            "img/content/voznyak.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 0,
        "factor": 2
    }, {
        "text": "Сигэру Миямото",
        "answers": [
            "img/content/kasperski.jpg",
            "img/content/berners-li.jpg",
            "img/content/miyamoto.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Джимми Уэйлс",
        "answers": [
            "img/content/kasperski.jpg",
            "img/content/berners-li.jpg",
            "img/content/wales.jpg",
            "img/content/gates.jpeg",
        ],
        "right": 2,
        "factor": 2
    }, {
        "text": "Деннис Ритчи",
        "answers": [
            "img/content/kasperski.jpg",
            "img/content/berners-li.jpg",
            "img/content/wales.jpg",
            "img/content/ritchi.jpeg",
        ],
        "right": 3,
        "factor": 2
    }, {
        "text": "Ада Лавлейс",
        "answers": [
            "img/content/lavleys.jpg",
            "img/content/berners-li.jpg",
            "img/content/wales.jpg",
            "img/content/ritchi.jpeg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "text": "Джон Кармак",
        "answers": [
            "img/content/lavleys.jpg",
            "img/content/berners-li.jpg",
            "img/content/wales.jpg",
            "img/content/karmak.jpeg",
        ],
        "right": 3,
        "factor": 3
    }, {
        "text": "Рэй Томлинсон",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/berners-li.jpg",
            "img/content/wales.jpg",
            "img/content/karmak.jpeg",
        ],
        "right": 0,
        "factor": 3
    }, {
        "text": "Ричард Столлман",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/berners-li.jpg",
            "img/content/stollman.jpg",
            "img/content/karmak.jpeg",
        ],
        "right": 2,
        "factor": 3
    }, {
        "text": "Бьёрн Страуструп",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/berners-li.jpg",
            "img/content/straustrup.jpg",
            "img/content/karmak.jpeg",
        ],
        "right": 2,
        "factor": 3
    }, {
        "text": "Кевин Митник",
        "answers": [
            "img/content/tomplinson.jpg",
            "img/content/berners-li.jpg",
            "img/content/straustrup.jpg",
            "img/content/mitnik.jpeg",
        ],
        "right": 3,
        "factor": 3
    }]
};
