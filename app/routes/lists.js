import Ember from 'ember';

var pag = [];
for(var i = 1; i < 7; i++) {
    pag.push(i);
}

export default Ember.Route.extend({
    list: Ember.inject.service(),
    model: function(params) {
        return Ember.RSVP.hash({
            list: this.get('list').all(params.page),
            page: params.page,
            prev: parseInt(params.page) - 1,
            next: parseInt(params.page) + 1,
            paginacao: pag
        });
    }
});
