import DS from 'ember-data';
import { computed, set } from '@ember/object';
import Imageable from './imageable'

export default Imageable.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  displayPrice: computed('price', function(){
    let price = parseFloat(this.get('price')),
    tax = price * 25/100;
    return price + tax;
  })
  
});