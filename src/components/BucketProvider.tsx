import * as React from 'react';
import { inject } from 'mobx-react';
import BucketController from './BucketController';
import BucketViewModel from './BucketViewModel';
import RootStore from '../models/RootStore';
import BucketModel from '../models/domain/BucketModels';

export interface IBucketProviderProps {
  [key: string]: BucketModel
}

@inject(RootStore.type.BUCKET_MODEL)
export default class BucketProvider extends React.Component<IBucketProviderProps> {
  viewModel: BucketViewModel;
  constructor(props: IBucketProviderProps) {
    super(props);
    const bucketModel = props[RootStore.type.BUCKET_MODEL];
    this.viewModel = new BucketViewModel(bucketModel);
  }

  public render() {
    return (
      <BucketController viewModel = {this.viewModel}/>
    );
  }
}
