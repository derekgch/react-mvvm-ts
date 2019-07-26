import * as React from 'react';
import { inject } from 'mobx-react'
import BucketController from './BucketController'
import BucketViewModel from './BucketViewModel'
import RootStore from '../../models/RootStore'

export interface IBucketProps {
}

export interface IBucketState {
}

export default class Bucket extends React.Component<IBucketProps, IBucketState> {
  constructor(props: IBucketProps) {
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
