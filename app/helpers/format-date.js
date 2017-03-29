import Ember from 'ember';

export function formatDate(value) {
  return moment(value).format('DD/MM/YYYY');
}

export default Ember.Helper.helper(formatDate);
