 
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
  storeFruits(id:string){
    console.log('bucketid:',id);
  }

  fetchBuckets():void {
    this.store.fetchBuckets();

    const query = `{ 
      buckets { 
        _id 
        title 
        description 
        fruits { 
          _id 
          description
        } 
      } 
    }`
    const config = {
      method: "POST",
      headers:{
        'Content-Type': 'application/JSON',
        'Data-Type': 'application/JSON'
      },
      body: JSON.stringify({query: query})
    }
    
    fetch('http://localhost:3001/graphql', config)
    .then( r => r.json() )
    .then( data => {
      this.store.clearBuckets();
      this.store.storeBuckets(data.data.buckets);
    } )
  }
}

export default BucketViewModel;