import * as React from 'react';
import { inject, observer } from 'mobx-react';
import BucketController from './BucketController';
import BucketViewModel from './BucketViewModel';
import RootStore from '../models/RootStore';
import BucketModel from '../models/domain/BucketModels';

export interface IBucketProviderProps {
  [key: string]: BucketModel
}
@observer
class BucketProvider extends React.Component<IBucketProviderProps> {
  viewModel: BucketViewModel;
  constructor(props: IBucketProviderProps) {
    super(props);
    const bucketModel = props[RootStore.type.BUCKET_MODEL];
    this.viewModel = new BucketViewModel(bucketModel);
  }

  public render() {
    console.log("BucketProvider",this.viewModel.getBuckets())
    return (
      <BucketController viewModel = {this.viewModel}/>
    );
  }
}
export default inject(RootStore.type.BUCKET_MODEL)(BucketProvider);
