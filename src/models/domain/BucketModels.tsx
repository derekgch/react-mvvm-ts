import { observable, action } from 'mobx';
import { Bucket } from './TypeDef';


const mockData:Bucket[] = [
    {_id:"1",description:"bucket1" },
    {_id:"2",description:"bucket2" },
    {_id:"3",description:"bucket3" },
]

class BucketModel {
    @observable buckets: Bucket[] = mockData;

    // @action addBuckets(bucket:any):void {
    //     this.buckets.push({
    //         ...bucket
    //     })
    // }

    // @action removePokemon(bucket:any):void {
    //     // this.buckets.remove(pokemon)
    // }
    @action storeBuckets(buckets:Bucket[]):void{
        this.buckets.push(...buckets)
    }

    getBuckets():Bucket[] {
        return this.buckets;
    }
}

export default BucketModel
