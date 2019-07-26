import * as React from 'react';
import BucketViewModel from './BucketViewModel';
import BucketViews from './BucketViews';
import { Bucket } from '../models/domain/TypeDef';

export interface IBucketControllerProps {
  viewModel:BucketViewModel
}

export interface IBucketControllerState {
  bucketsFromDatabase:Bucket[]
}

export default class BucketController extends React.Component<IBucketControllerProps, IBucketControllerState> {
  constructor(props: IBucketControllerProps) {
    super(props);

    this.state = {
      bucketsFromDatabase:[]
    }
  }
  
  handleClick =(event:React.MouseEvent<HTMLButtonElement>) =>{
    //todo: fetch data from backend and store in state and in the viewModel!
    // fetch()

    // this.props.viewModel.storeBuckets(data);

    console.log(event.target);
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
