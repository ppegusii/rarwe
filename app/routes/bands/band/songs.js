import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.modelFor('bands.band');
  },

  resetController: function(controller){
    controller.set('songCreationStarted', false);
  },

  actions: {
    createSong: function(){
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var title = controller.get('title');

      var song = this.store.createRecord('song',{
        band: band,
        title: title,
      });
      song.save().then(function(){
        controller.set('title', '');
      });
    },

    didTransition: function(){
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
  },
});
