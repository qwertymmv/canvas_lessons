function circle(x, y, r) // класс задающий круг
{
  this.x = x; // координата х
  this.y = y; // координата у
  this.r = r; // радиус
  this.draw = function (color, globalAlpha) // метод рисующий круг
  {
    context.globalAlpha = globalAlpha; // "прозрачность"
    context.fillStyle = color; // цвет заливки
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    context.fill();
  };
}
function rect(x, y, width, height) // класс задающий прямоугольник
{
  this.x = x; // координата х
  this.y = y; // координата у
  this.width = width; // ширина
  this.height = height; // высота
  this.draw = function (color, globalAlpha) // функция рисует прямоугольник согласно заданным параметрам
  {
    context.globalAlpha = globalAlpha;
    context.fillStyle = color;
    context.fillRect(this.x, this.y, this.width, this.height);
  };
}
function update() // изменения координат которые нужно произвести
{
  $('html').keydown(function(e){
    if (e.which == 37) {
      vY = -5;
      vX= -3;
    }
    if (e.which == 39) {
      vY = -5;
      vX=3;
    }
  });
/*  if (ball.y - ball.r < 0 || ball.y + ball.r > 320) // соприкосновение с "полом" и "потолком" холста
  {
    vY = -vY;
  }
  if (ball.x - ball.r < 0 || ball.x + ball.r > 480) // соприкосновение с левой и правй "стенкой" холста
  {
    vX = -vX;
  }*/
  // приращение координат
  if (vY != 1) {
    vY+=0.5;
  }
  if (vX > 0) {
    vX--;
  }
  if (vX < 0) {
    vX++;
  }
  ball.x += vX;
  ball.y += vY;
}
function draw() // рисуем на холсте
{
  game.draw("#000", 0.1); // рисуем фон
  ball.draw("#f00", 1); // рисуем шар
  update(); // обновляем координаты
}
function init() // Инициализация переменных
{
  game = new rect(0, 0, 480, 320); // прямоугольник закрашивающий фон
  ball = new circle(game.width / 2, game.height / 2, 24); // шар
  vX = 0; // скорость шара по оси х
  vY = 1; // скорость шара по оси у
  var canvas = document.getElementById("example");
  canvas.width = game.width; // ширина холста
  canvas.height = game.height; // высота холста
  context = canvas.getContext("2d");
  setInterval(draw, 1000 / 50); //отрисовываем 50 раз за секунду
}