 
import BucketModel from '../models/domain/BucketModels';

class BucketViewModel {
  store:BucketModel;
  constructor(props:BucketModel) {
    this.store = props;
  }
  getBuckets(){
    return this.store.getBuckets();
  }
}

export default BucketViewModel;