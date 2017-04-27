import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('car', params.car_id);
  },
  actions: {
    update(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          model.set(key,params[key]);
        }
      });
      model.save();
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var car = params.car;
      car.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return car.save();
      });
    },
    destroyCar(model) {
          model.destroyRecord();
          this.transitionTo('index');
    }
  }
});
