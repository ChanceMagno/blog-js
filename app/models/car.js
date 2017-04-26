import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  subtitle: DS.attr(),
  title: DS.attr()
});
