import Ember from 'ember';

localStorage.removeItem('keys');

export default Ember.Route.extend({

     actions: {
        acessar(model) {
            localStorage.setItem('keys', JSON.stringify(model));
            this.transitionTo('lists', 1);
        }
    },
    model(){
        return {};
    }
});
