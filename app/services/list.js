import Ember from 'ember';



export default Ember.Service.extend({
    requester: Ember.inject.service(),
    all: function (page) {
        var offset = (page - 1) * 10;
        var retrievedObject = localStorage.getItem('keys');
        var key = JSON.parse(retrievedObject);
        const apiKey = key.public;
        const ts = new Date().valueOf();
        const privKey = key.private;
        const hash = md5(ts + privKey + apiKey);
        return this.get('requester').getMethod(`?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=10&offset=${offset}`);
    },
    one: function (id) {
        var retrievedObject = localStorage.getItem('keys');
        var key = JSON.parse(retrievedObject);
        const apiKey = key.public;
        const ts = new Date().valueOf();
        const privKey = key.private;
        const hash = md5(ts + privKey + apiKey);
        return this.get('requester').getMethod(`/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`);
    },

    comics: function (id) {
        var retrievedObject = localStorage.getItem('keys');
        var key = JSON.parse(retrievedObject);
        const apiKey = key.public;
        const ts = new Date().valueOf();
        const privKey = key.private;
        const hash = md5(ts + privKey + apiKey);
        return this.get('requester').getMethod(`/${id}/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=3`);
    }
});
