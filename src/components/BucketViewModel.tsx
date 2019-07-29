 
import BucketModel from '../models/domain/BucketModels';
import { Bucket, Fruit } from '../models/domain/TypeDef';

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
  
  getFruits():Fruit[]{
    return this.store.getFruits();
  }

  storeBuckets(buckets: Bucket[]):void {
    this.store.storeBuckets(buckets);
  }
  findFruits(id:string):Fruit[]{
    console.log('bucketid:',id);
    return this.store.findFruits(id);
  }
  findOneFruit(id:string):Fruit{
    return this.store.findOneFruit(id);
  }
  saveFruit(_id:string, description:string):void{
    console.log("saving id:", _id, description);
    this.store.saveFruit(_id, description);
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