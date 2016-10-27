import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('entheogen', params.entheogen_id);
  },
  actions: {
    update(entheogen, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          entheogen.set(key,params[key]);
        }
      });
      entheogen.save();
      this.transitionTo('index');
    },
    destroyPost(entheogen) {
      entheogen.destroyPost();
      this.transitionTo('index');
    }
  }
});
