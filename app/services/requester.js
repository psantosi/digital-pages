import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    host: 'http://gateway.marvel.com/v1/public/characters',
    getMethod: function (path) {
        return this.get('ajax').request(this.host + path);
    },
});
