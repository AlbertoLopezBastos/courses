// OBSERVER PATTERN ES6
// sirve para suscribirse a funciones y utilizarlas desde el momento en que estas suscripto

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You Are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassings the list of observers.
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
// Click Handler
const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
