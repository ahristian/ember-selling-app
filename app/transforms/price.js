import Transform from '@ember-data/serializer/transform';

export default class PriceTransform extends Transform {
  deserialize(serialized) {
    return parseFloat(serialized).toFixed(2);
  }

  serialize(deserialized) {
    return parseFloat();
  }
}
