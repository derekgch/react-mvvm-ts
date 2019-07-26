import { observable, action } from 'mobx';

class BucketModel {
    @observable buckets: Object[] = [];

    @action addBuckets(bucket:any):void {
        this.buckets.push({
            ...bucket
        })
    }

    @action removePokemon(bucket:any):void {
        // this.buckets.remove(pokemon)
    }

    getBuckets():Object[] {
        return this.buckets
    }
}

export default BucketModel
