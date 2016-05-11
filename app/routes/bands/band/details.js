import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.modelFor('bands.band');
  },

  actions: {
    didTransition: function(){
      var band = this.modelFor('bands.band');
      document.title = `${band.get('name')} description - Rock & Roll`;
    },

    willTransition: function(transition){
      var controller = this.get('controller'),
        leave;
      
      if(controller.get('isEditing')){
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
        if(leave){
          controller.set('isEditing', false);
        }else{
          transition.abort();
        }
      }
    },
  },
});
