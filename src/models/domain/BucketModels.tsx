import { observable, action, decorate } from 'mobx';
import { Bucket } from './TypeDef';


const mockData:Bucket[] = [
    {_id:"1",description:"bucket1" },
    {_id:"2",description:"bucket2" },
    {_id:"3",description:"bucket3" },
]


const mockData2:Bucket[] = [
    {_id:"10",description:"bucket120" },
    {_id:"2",description:"bucket22" },
    {_id:"3",description:"bucket32" },
]

class BucketModel {
    buckets: Bucket[] = mockData;

    storeBuckets(buckets:Bucket[]):void{
        this.buckets.push(...buckets)
    }

    fetchBuckets():void{
        //TODO: fetch bucket from database and store in obserable bucketsf
        this.buckets.push(mockData2[0]);
        console.log(this.buckets);
        // console.log("data model fetch!");
    }

    getBuckets():Bucket[] {
        return this.buckets;
    }
}

decorate(BucketModel,{
    buckets:observable,
    storeBuckets:action,
    fetchBuckets:action
})

export default BucketModel
