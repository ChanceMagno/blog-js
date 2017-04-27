import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('car', params.car_id);
  },
  actions: {
    destroyCar(model) {
      model.destroyRecord();
      this.transitionTo('index');
    }
  }
});
