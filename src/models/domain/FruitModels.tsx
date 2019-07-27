import { observable, action, decorate } from 'mobx';

import { Fruit } from './TypeDef';

class FruitModel {
    @observable fruits: Fruit[] = [];

    @action addfruits(fruit:Fruit):void {
      this.fruits.push({
          ...fruit
      })
    }

    @action removeFruit(fruit:Fruit):void {
      this.fruits = this.fruits.filter(each => each._id !== fruit._id)
    }

    getFruits():Fruit[] {
        return this.fruits;
    }
}



export default FruitModel