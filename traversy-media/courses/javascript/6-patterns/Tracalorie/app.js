// Storage Controller
const StorageCtrl = (function() {})();
// Item Controller
const ItemCtrl = (function() {
  // Item Contructor
  const item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure - State
  const data = {
    items: [{ id: 0, name: 'Steak Dinner', calories: 1200 }],
    items: [{ id: 1, name: 'Cookie', calories: 400 }],
    items: [{ id: 2, name: 'Eggs', calories: 300 }],
    currentItem: null,
    totalCalories: 0
  };

  return {
    logData: function() {
      return data;
    }
  };
})();

// UI Controller
const UICtrl = (function() {})();
// App Controller
const App = (function(ItemCtrl, UICtrl, StorageCtrl) {
  console.log(ItemCtrl.logData());
})(ItemCtrl, UICtrl, StorageCtrl);
