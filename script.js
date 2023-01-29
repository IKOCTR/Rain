// let drop_width = 2;
// let drop_height = 8;
let drop_r = 5;
let timer;
let canvas = document.querySelector('.rain');
let rain = canvas.getContext("2d");

let drops_x = []; // массив координат капель по оси х
let drops_y = []; // массив координат капель по оси у
let drops_speed = []; // массив скоростей капель

function create_drops() { // заполняем массивы значениями
    for (i = 0; i < 800; i++) { // сделаем 800 разных капель
        let x = Math.random() * canvas.width; // вычисляем случайное значение координаты х
        let y = Math.random() * canvas.height * -1; // вычисляем случайное значение координаты у
        let speed = Math.random() * 3.6 - 3; // вычисляем случайную скорость капли
        drops_x.push(x); // добавляем вычисленную координату х в массив
        drops_y.push(y); // добавляем вычисленную координату у в массив
        drops_speed.push(speed); // добавляем вычисленную скорость в массив
    }
}

function move_drops() { // меняем значения координат так, чтобы капли "стекали"
    for (i = 0; i < 800; i++) {
        drops_y[i] += drops_speed[i];
        if (drops_y[i] >= canvas.height) {
            drops_x[i] = Math.random() * canvas.width;
            drops_y[i] = 0;
        }
    }
}

function draw_scene() { // рисуем капли в форме маленьких прямоугольников
    for (i = 0; i < 800; i++) {
        rain.beginPath();
        rain.arc(drops_x[i], drops_y[i], drop_r, 0, 2*Math.PI, false);
        rain.closePath();
        rain.fillStyle = "white";
        rain.fill();
        rain.strokeStyle = "#8cd3ff";
        rain.stroke();
    }
}

function engine() { // функция, очищающая экран и рисующая и двигающая капли
    rain.clearRect(0, 0, canvas.width, canvas.height, false);
    move_drops();
    draw_scene();
}

create_drops(); // запускаем функцию, заполняющую массивы
timer = setInterval(engine, 5); // запускаем функцию, очищающую экран и рисующую и двигающую капли