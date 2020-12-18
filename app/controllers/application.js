import Controller from '@ember/controller';

export default Controller.extend( {
rootCategories: Ember.computed('model', function(){
    return this.get('model').rejectBy('parent.id');
})
});
