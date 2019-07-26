import * as React from 'react';
import BucketViewModel from './BucketViewModel';
import BucketViews from './BucketViews';
import { Bucket } from '../models/domain/TypeDef';

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
  
  handleClick =(event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log(event);
  }


  render() {
    const buckets = this.props.viewModel.getBuckets();

    return (
      <div>
      < BucketViews 
        buckets={buckets}
        handleClick={this.handleClick}
        />
      </div>
    );
  }
}
