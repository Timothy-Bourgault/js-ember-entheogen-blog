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
    }
  }
});
