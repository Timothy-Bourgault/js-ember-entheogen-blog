import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        name: this.get('name'),
        classification: this.get('classification'),
        form: this.get('form'),
        dosage: this.get('dosage'),
        locations: this.get('locations'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
