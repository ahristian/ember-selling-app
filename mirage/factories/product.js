import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    name() { return faker.commerce.productName(); },
    image() { return faker.random.image(250, 250); }
});