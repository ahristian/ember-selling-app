import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    name() {
        return faker.commerce.productName();
    },
    price(){
        return faker.commerce.price();
    },
    traits() {
        return [faker.commerce.productAdjective(),
        faker.commerce.productAdjective(),
        faker.commerce.productAdjective(),
        faker.commerce.productAdjective(),
        faker.commerce.productAdjective(), 
        faker.commerce.productAdjective(), 
        faker.commerce.productAdjective()];
    },
    image: association(),
    afterCreate(product) {
        product.createImage({ url: faker.image.image(250, 250) });
        product.save();
    }
});