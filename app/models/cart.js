
import Model, { hasMany } from '@ember-data/model';

export default class CartModel extends Model {
  @hasMany('cart-item') cartItem;
}
