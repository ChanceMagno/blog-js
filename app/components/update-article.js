import Ember from 'ember';

export default Ember.Component.extend({
  updateCarForm: false,
  actions: {
    updateCarForm() {
      this.set('updateCarForm', true);
    },
    update(model) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        subtitle: this.get('subtitle'),
        title: this.get('title'),
      };
      this.set('updateCarForm', false);
      this.sendAction('update', model, params);
    }
  }
});
