
const albums = [
    {
        title: "Abbey Road",
        artist: "The Beatles",
        year: 1969,
    },
    {
        title: "Thriller",
        artist: "Michael Jackson",
        year: 1982,
    },
    {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: 1973,
    },
];


const musicCollection = {
    albums: albums,
    [Symbol.iterator]: function* () {
        for (let album of this.albums) {
            yield album;
        }
    },
};


for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}


let dishes = new Map();

// Добавляем блюда и их поваров в коллекцию
dishes.set("Пицца", "Антонио");
dishes.set("Салат", "Мария");
dishes.set("Суп", "Иван");
dishes.set("Стейк", "Джон");
dishes.set("Десерт", "Анна");

// Создаем коллекцию Map для хранения заказов каждого клиента
let orders = new Map();

// Создаем объекты для представления клиентов
let client1 = { name: "Алексей", table: 1 };
let client2 = { name: "Ольга", table: 2 };
let client3 = { name: "Сергей", table: 3 };

// Добавляем заказы клиентов в коллекцию
orders.set(client1, ["Пицца", "Десерт"]);
orders.set(client2, ["Салат", "Стейк"]);
orders.set(client3, ["Суп", "Салат", "Десерт"]);

// Отслеживаем, какой повар готовит какое блюдо
for (let [dish, cook] of dishes) {
    console.log(`${dish} готовит ${cook}`);
}

// Записываем, какие блюда заказал каждый клиент
for (let [client, order] of orders) {
    console.log(`${client.name} за столиком ${client.table} заказал ${order.join(", ")}`);
}