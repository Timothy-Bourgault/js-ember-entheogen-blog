import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updatePostForm: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(entheogen, params) {
      this.sendAction('update', entheogen, params);
    },
    delete(entheogen) {
      if (confirm('Are you sure you want to delete this Post?')) {
        this.sendAction('destroyPost', entheogen);
      }
    }
  }
});
