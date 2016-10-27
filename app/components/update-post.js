import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(entheogen) {
      var params = {
        name: this.get('name'),
        classification: this.get('classification'),
        form: this.get('form'),
        dosage: this.get('dosage'),
        locations: this.get('locations'),
        image: this.get('image'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', entheogen, params);
    }
  }
});
