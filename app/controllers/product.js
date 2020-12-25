import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend( {
    cart: service('shoppingCart'),
    actions: {
            addToCart() {
                this.get('cart').add(this.get('model'));
                  }
    }
});
