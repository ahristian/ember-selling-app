import { Factory, trait } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    name() {
        return faker.commerce.department();
     },
    image() {
        return faker.random.image(250, 250); 
    },
    withChildren: trait({
        afterCreate(category, server){
            category.children = server.createList('category', 8);
            category.save();
        }
    })
});