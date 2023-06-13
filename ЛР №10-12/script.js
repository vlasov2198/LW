// функция высчитывания формулы (задание 4)
function calculate(){
  var x = parseFloat(document.getElementById("xInput").value);
  var y = parseFloat(document.getElementById("yInput").value);
  var z = parseFloat(document.getElementById("zInput").value);
  var result = Math.log10(Math.abs(y - Math.sqrt(Math.abs(x)) * (x - y/(z + x * x - 4))));
  document.getElementById("result").innerHTML = "Результат: " + result.toFixed(3);
}

// задание 6
let newWindow = window.open('', '_blank', 'width=500, height=800, scrollbars=yes');
newWindow.document.title = "6 Колесник Александр";
newWindow.document.write("<h1>Информация о браузере:</h1>");
newWindow.document.write("<p>Название используемого браузера: " + navigator.userAgent + "</p>");
newWindow.document.close();