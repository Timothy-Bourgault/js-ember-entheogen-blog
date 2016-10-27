import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  classification: DS.attr(),
  form: DS.attr(),
  dosage: DS.attr(),
  locations: DS.attr(),
  image: DS.attr()
});
