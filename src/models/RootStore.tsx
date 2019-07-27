
import BucketModel from './domain/BucketModels';
import {action, observable, decorate} from 'mobx';

class RootStore {
  bucketModel:BucketModel;

  static type = {
    BUCKET_MODEL: 'bucketModel'
  }
  
  constructor() {
    this.bucketModel = new BucketModel();
  }

  getStores = () => ({
    [RootStore.type.BUCKET_MODEL]: this.bucketModel
  })
}

decorate(RootStore, {
  bucketModel:observable,
})


export default RootStore;