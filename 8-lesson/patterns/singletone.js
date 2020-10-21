var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function run() {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  alert("Same instance? " + (instance1 === instance2));
}

var counterModule = (function () {
  var instance,
    counter = 0;

  var getCounter = function () {
    return counter;
  };

  var increaseCounter = function () {
    counter++;
  };

  var createInstance = function () {
    return {
      getCounter: getCounter,
      increaseCounter: increaseCounter,
    };
  };

  return {
    getInstance: function () {
      return instance || (instance = createInstance());
    },
  };
})();

counterModule.getInstance().getCounter()
counterModule.getInstance().increaseCounter()
counterModule.getInstance().getCounter()
