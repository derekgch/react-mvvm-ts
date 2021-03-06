 
import BucketModel from '../models/domain/BucketModels';
import { Bucket, Fruit } from '../models/domain/TypeDef';

const genConfig=(query:string):Object => ( {
  method: "POST",
  headers:{
    'Content-Type': 'application/JSON',
    'Data-Type': 'application/JSON'
  },
  body: JSON.stringify({query: query})
})
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

  createBucket(description:string):void{
    const query =`mutation{
      createBucket(title:\"Test title\", description:\"${description}\"){
        _id
        title
        description
      }
    }`
    fetch('http://localhost:3001/graphql', genConfig(query))
    .then( r => r.json() )
    .then( data => {
      const newBucket:Bucket = data.data.createBucket;
      this.store.saveBucket(newBucket);

    } )
  }

  saveFruit(_id:string, description:string):void{
    const query = `mutation{ 
      updateFruit(_id:\"${_id}\", description:\"${description}\") {
        _id
      }
    }`
    fetch('http://localhost:3001/graphql', genConfig(query))
    .then( r => r.json() )
    .then( data => {
      this.store.saveFruit(_id, description);
    } )
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

    fetch('http://localhost:3001/graphql', genConfig(query))
    .then( r => r.json() )
    .then( data => {
      this.store.clearBuckets();
      this.store.storeBuckets(data.data.buckets);
    } )
  }
}

export default BucketViewModel;