import { observable, action, decorate } from 'mobx';
import { Bucket } from './TypeDef';
import uuid from 'uuid/v4';

const mockData:Bucket[] = [
    {_id:"1",description:"bucket1" },
    {_id:"2",description:"bucket2" },
    {_id:"3",description:"bucket3" },
]

class BucketModel {
    @observable buckets: Bucket[] = mockData;
    private count:number =0 ;

    storeBuckets(buckets:Bucket[]):void{
        this.buckets.push(...buckets)
    }

    @action fetchBuckets():void{
        //TODO: fetch bucket from database and store in obserable bucketsf
        this.buckets.push({_id:uuid(), description:"bucket test1"});

        console.log(this.buckets);
        // console.log("data model fetch!");
    }

    getBuckets():Bucket[] {
        return this.buckets;
    }
}

export default BucketModel
