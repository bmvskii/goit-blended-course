- JWT (JSON Web Tokens)
    - в заголоке или url
    - 3 составляющих
        - header - алгоритм шифрования
        - payload - полезная информация
        - signature - генерация на основе заголовка
    - хранится в localStorage
    - Header: "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODEzNTcwMzl9.E4FNMef6tkjIsf7paNrWZnB88c3WyIfjONzAeEd4wF0"

<!-- 
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODEzNTcwMzl9.
    E4FNMef6tkjIsf7paNrWZnB88c3WyIfjONzAeEd4wF0 -->

    заходит пользователь на сайт -> регистрация -> вход -> сервер генерирует token 
    -> мы его на клиенте сохраняем в localStorage -> при каждом запросе добавляем Header Authorization

- О-нотации
    - Big-O notation
    - Teta
    - Small-O notation

- Каррирование
 - Арность
 - Каррирование это процесс превращения функции с множественной арностью в функцию с меньшей арностью
  — Кристина Брэйнвэйв.
  - Каррирование работает для функций с числом аргументов больше двух
  - Каррирование преобразует функцию в последовательность других функций, каждая из которых берёт по одному аргументу каррированной функции.
 - Одни и те же аргументы

- Браузерный роутинг
    - Статический
    - Динамический

    history api
    location

- Patterns  
    - Структурные
        Adapter
        Bridge
        Composite
        Decorator
        Facade
        Flyweight
        Proxy

    - Поведенческие
        Chain of Resp.
        Command
        Interpreter
        Iterator
        Mediator
        Memento
        Observer
        State
        Strategy
        Template
        Visitor	

    - Порождающие
        Abstract Factory
        Builder
        Factory Method
        Prototype
        Singleton

    - Decorator 
    - Facade
    - Singletone - getInstance
    - Factory 
        - создание разных объектов с одинаковыми интерфейсами
        - создание объектов уже с предустановленными параметрами
    - Module


