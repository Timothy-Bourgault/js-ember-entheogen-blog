import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('entheogen');
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('entheogen', params);
      newPost.save();
      this.transtionTo('index');
    },

    update(entheogen, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          entheogen.set(key,params[key]);
        }
      });
      entheogen.save();
      this.trasitionTo('index');
    },

    destroyPost(entheogen) {
      entheogen.destroyRecord();
      this.transitionTo('index');
    }
  }
});
