import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  saveCar() {
    var params = {
      author: this.get('author'),
      content: this.get('content'),
      image: this.get('image'),
      subtitle: this.get('subtitle'),
      title: this.get('title')
    };

    this.sendAction('saveCar', params);

  }
}
});
