import Service from '@ember/service';

export default Service.extend({
items: [],
add(item){
    this.get('items').pushObject(item);
}
});
