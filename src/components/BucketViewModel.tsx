 
export interface IBucketViewModelProps {
}
class BucketViewModel {
  store:any;
  constructor(props:IBucketViewModelProps) {
    this.store = props;
  }
  getBuckets(){
    return this.store.getBuckets();
  }
}

export default BucketViewModel;