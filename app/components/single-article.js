import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(model) {
      if (confirm('Are you sure you want to delete this Article?')) {
        this.sendAction('destroyCar', model);
      }
    }
  }
});
