const config = {
    level: "general",
    time: 20000,
    lives: 3
}

const levels = {
    "general": [{
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
    }]
};
