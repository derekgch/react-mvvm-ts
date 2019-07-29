import { observable, action, decorate } from 'mobx';
import { Bucket, Fruit } from './TypeDef';
import uuid from 'uuid/v4';

const mockData:Bucket[] = [
    {_id:"1",description:"bucket1" },
    {_id:"2",description:"bucket2" },
    {_id:"3",description:"bucket3" },
]

class BucketModel {
    @observable buckets: Bucket[] = [];
    @observable fruits: Fruit[] = [];

    @action storeBuckets(buckets:Bucket[]):void{
        this.buckets.push(...buckets)
    }

    @action fetchBuckets():void{
        //TODO: fetch bucket from database and store in obserable bucketsf
        this.buckets.push({_id:uuid(), description:"bucket test1"});
        
        console.log(this.buckets);
        // console.log("data model fetch!");
    }

    @action clearBuckets():void{
        while(this.buckets.length > 0){
            this.buckets.pop();
        }
    }

    getBuckets():Bucket[] {
        return this.buckets;
    }
    getFruits():Fruit[] {
        return this.fruits;
    }

    findFruits(id:string):Fruit[]{
        const found = this.buckets.find((e:Bucket) => e._id === id);
        this.fruits =  found!.fruits || [];
        return this.getFruits();
    }
}

export default BucketModel
