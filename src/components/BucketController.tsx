import * as React from 'react';
import BucketViewModel from './BucketViewModel';
import BucketViews from './BucketViews';

export interface IBucketControllerProps {
  viewModel:BucketViewModel
}

export interface IBucketControllerState {
}

export default class BucketController extends React.Component<IBucketControllerProps, IBucketControllerState> {
  constructor(props: IBucketControllerProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const buckets = this.props.viewModel.getBuckets();

    return (
      <div>
      < BucketViews buckets={buckets}/>
      </div>
    );
  }
}
