import Service from '@ember/service';

export default Service.extend({
items: [],
add(item){
    this.get('items').pushObject(item);
},
remove(item){
    this.get('items').removeObject(item);
}
});
