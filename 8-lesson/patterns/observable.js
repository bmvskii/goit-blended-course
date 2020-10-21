class SomeService {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    // подписываемся на событие
    this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  off(event, callback) {
    // отписываемся от события
    this.listeners[event] = this.listeners[event].filter(function (listener) {
      return listener !== callback;
    });
  }

  emit(event, data) {
    // публикуем (диспатчим, эмитим) событие
    this.listeners[event].forEach(function (listener) {
      listener(data);
    });
  }
}

const service = new SomeService();

// функция-обработчик события
const onload = function (data) { console.log(data); }
const decoratedLog = function (data) { console.log(`--- ${data} ---`)};
 
// подписываемся на событие
service.on('loaded', onload);
service.on('loaded', decoratedLog);

service.emit('loaded', {data: 42});    // событие 1
service.emit('loaded', {foo: 'bar'});  // событие 2

// отписываемся от события
service.off('loaded', onload);
