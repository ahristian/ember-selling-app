import Route from '@ember/routing/route';

export default class ProductRoute extends Route {
model(product_id){
    return this.get('store').findRecord('product', product_id)
}
}
