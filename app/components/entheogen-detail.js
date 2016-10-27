import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(entheogen) {
      if (confirm('Are you sure you want to delete this Post?')) {
        this.sendAction('destroyPost', entheogen);
      }
    },
    goBack() {
      this.transitionTo('index');
    }
  }
});
