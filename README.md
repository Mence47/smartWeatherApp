# smartWeatherApp
Умный сервис прогноза погоды

[Умный сервис прогноза погоды]
  Уровень сложности: средний и задача со звездочкой.

[Проектирование сервиса]
  Серверная часть: Java, spring boot.
  Клиенская часть: HTML, CSS, Javascript.

[Интерфейс]
  Сайт.
 
[Формат данных]
 Сервер делай запрос погоды через API openWeather и отправляет полученные данные в формате JSON на клиент.
 
  пример:
  {"coord": { "lon": 139,"lat": 35},
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 281.52,
    "feels_like": 278.99,
    "temp_min": 280.15,
    "temp_max": 283.71,
    "pressure": 1016,
    "humidity": 93
  },
  "wind": {
    "speed": 0.47,
    "deg": 107.538
  },
  "clouds": {
    "all": 2
  },
  "dt": 1560350192,
  "sys": {
    "type": 3,
    "id": 2019346,
    "message": 0.0065,
    "country": "JP",
    "sunrise": 1560281377,
    "sunset": 1560333478
  },
  "timezone": 32400,
  "id": 1851632,
  "name": "Shuzenji",
  "cod": 200
}

[Описание работы программы]
  1) Пользователь вводит город в котором он хочет узнать погоду.
  2) Отправляется запрос в формате REST в котором передается параметр введенный пользоватетем.
  3) Сервер делает REST запрос передавая параметр пользователя.
  4) Сервер передает получанное сообщение в том же формате что и получил. В случае ошибка передается сообщение об ошибке.
  5) Клиенская часть разбирает получаенное сообщение и отображает полученные данные.
    В случае ошибки или пустого запроса появляется окно содержащее сообщение об ошибке, которое пропадает через 3 секунды.
    
[Как запустить программу]
1) Установить Java Runtime Environment (JRE)
https://www.oracle.com/java/technologies/javase-jre8-downloads.html
2) Установить mvn
https://maven.apache.org/
3) Собрать проект
  Зайти в папку с проектом и в командной строке ввести: mvn clean install
  в папке target должен появтся файл testTaskWeather-0.0.1-SNAPSHOT.jar
4) Запустить полученный файл командой: java -jar testTaskWeather-0.0.1-SNAPSHOT.jar
5) Открыть в браузере http://localhost:8080
6) Пользовать программой
 
