import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      this.set('addNewComment', false);
      var params = {
        user: this.get('user'),
        content: this.get('content'),
        car: this.get('car')
      };
      this.set('addNewContent', false);
      this.sendAction('saveComment', params);
    }
  }
});
