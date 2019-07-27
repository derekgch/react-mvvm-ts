 
import BucketModel from '../models/domain/BucketModels';
import { Bucket } from '../models/domain/TypeDef';

class BucketViewModel {
  store:BucketModel;
  constructor(props:BucketModel) {
    this.store = props;
  }
  getBuckets():Bucket[] {
    const result = this.store.getBuckets();
    console.log("BucketViewModel",result);
    return result;
  }
  storeBuckets(buckets: Bucket[]):void {
    this.store.storeBuckets(buckets);
  }

  fetchBuckets():void {
    this.store.fetchBuckets();
  }
}

export default BucketViewModel;