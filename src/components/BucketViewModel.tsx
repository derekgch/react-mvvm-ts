 
import BucketModel from '../models/domain/BucketModels';
import { Bucket } from '../models/domain/TypeDef';

class BucketViewModel {
  store:BucketModel;
  constructor(props:BucketModel) {
    this.store = props;
  }
  getBuckets():Bucket[] {
    return this.store.getBuckets();
  }
  storeBuckets(buckets: Bucket[]):void {
    this.store.storeBuckets(buckets);
  }
}

export default BucketViewModel;