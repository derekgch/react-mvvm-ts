
import BucketModel from './domain/BucketModels';

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

export default RootStore;