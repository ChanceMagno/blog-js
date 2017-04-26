import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveCar(params) {
      var newCar = this.store.createRecord('car', params);
      newCar.save();
      this.transitionTo('index');
    }
  }
});
