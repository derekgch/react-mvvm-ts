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
    private currentBucket:string = '';

    @action storeBuckets(buckets:Bucket[]):void{
        this.buckets.push(...buckets)
    }

    @action fetchBuckets():void{
        this.buckets.push({_id:uuid(), description:"bucket test1"});
    }

    @action clearBuckets():void{
        while(this.buckets.length > 0){
            this.buckets.pop();
        }
    }

    @action clearFruits():void{
        while(this.fruits.length > 0){
            this.fruits.pop();
        }
    }

    @action findOneFruit(id:string):Fruit{
        const found = this.fruits.find( (e:Fruit) => e._id ===id );
        const result = found ? found : {} as Fruit;
        return result;
    }

    @action saveFruit(_id:string, description:string):void{
        const newFruit:Fruit = {_id, description, bucketID:this.currentBucket};
        let bIndex:number = -1;
        let fIndex:number = -1;
        this.buckets.forEach( (eachBucket, indexBucket) => {
            if(eachBucket._id === this.currentBucket){
                bIndex = indexBucket;
                return;
            }
        })
        this.fruits.forEach((e, index) =>{
            if(e._id === _id){
                fIndex = index;
                return;
            }
        })

        if(bIndex!== -1 && fIndex!== -1){
            this.fruits.splice(fIndex,1,newFruit);
            if(this.buckets[bIndex].fruits!== undefined){
                this.buckets[bIndex].fruits!.splice(fIndex, 1, newFruit);
            }
        }
    }

    clearCurrentBucket():void{
        this.currentBucket = '';
    }

    getBuckets():Bucket[] {
        return this.buckets;
    }
    getFruits():Fruit[] {
        return this.fruits;
    }

    findFruits(id:string):Fruit[]{
        const found = this.buckets.find((e:Bucket) => e._id === id);
        const result = found!.fruits || [];
        this.currentBucket=id;
        this.clearFruits();
        this.fruits.push(...result);
        return this.getFruits();
    }
}
export default BucketModel
