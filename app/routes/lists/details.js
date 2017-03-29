import Ember from 'ember';

export default Ember.Route.extend({
    list: Ember.inject.service(),
    model: function(params) {
        return Ember.RSVP.hash({
            char: this.get('list').one(params.id),
            comics: this.get('list').comics(params.id)
        });
    }

});
