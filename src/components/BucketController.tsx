import * as React from 'react';
import BucketViewModel from './BucketViewModel';
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
    return (
      <div>
        
      </div>
    );
  }
}
