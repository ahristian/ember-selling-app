import { Factory, trait, association } from 'ember-cli-mirage';
import faker from 'faker'

export default Factory.extend({
    name() {
        return faker.commerce.department();
     },
     image: association(),
    withChildren: trait({
        afterCreate(category, server){
            category.children = server.createList('category', 3);
            category.save();
        }
    }),
    afterCreate(category){
        category.createImage({ url: faker.image.image(250, 250)});
        category.save();
    }
});