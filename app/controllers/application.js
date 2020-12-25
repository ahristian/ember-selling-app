import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend( {
    shoppingCart: service(),
rootCategories: Ember.computed('model', function(){
    return this.get('model').rejectBy('parent.id');
})
});
