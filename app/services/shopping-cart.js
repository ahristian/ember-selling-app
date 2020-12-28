import Service, {inject as service} from '@ember/service';

export default Service.extend({
    store: service(),
    items: {},
    token: null,
    itemsCount: Ember.computed('token', function () {
        return Object.keys(this.get('items')).length;
    }),
    init() {
        this._super(...arguments);
        this.get('store').createRecord('cart').save().then((cart) => {
            this.set('cart', cart);
        }
        );
        /*  if (localStorage.getItem('cartItems')) {
             console.log(this.set('items', JSON.parse(localStorage.getItem('cartItems'))));
             this.set('items', JSON.parse(localStorage.getItem('cartItems')))
         } */
    },
    add(item) {
        let items = this.get('items');
        let itemId = item.get('id');

        if (items[itemId]) {
            items[itemId].quantity += 1;
        }
        else {
            items[itemId] = { quantity: 1, item: item };
        }

        this.set('token', Math.random());
        this.set('items', items);
        console.log(item);
        localStorage.setItem('cartItems', JSON.stringify(items));
    },
    remove(item) {
        let items = this.get('items');
        let itemId = item.get('id');

        delete items[itemId];
        this.set('items', {});

        this.set('token', Math.random());
        this.set('items', items);
    }
});
