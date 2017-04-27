import Ember from 'ember';

export default Ember.Component.extend({
  actions: { 
    update(model, params) {
      this.sendAction('update', model, params);
    },
    delete(model) {
      if (confirm('Are you sure you want to delete this Article?')) {
        this.sendAction('destroyCar', model);
      }
    }
  }
});
