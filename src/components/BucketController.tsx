import * as React from 'react';
import BucketViewModel from './BucketViewModel';
import BucketViews from './BucketViews';
import { Bucket } from '../models/domain/TypeDef';
import { observer } from 'mobx-react';

export interface IBucketControllerProps {
  viewModel:BucketViewModel
}

export interface IBucketControllerState {
  bucketsFromDatabase:Bucket[]
}
@observer
export default class BucketController extends React.Component<IBucketControllerProps, IBucketControllerState> {
  constructor(props: IBucketControllerProps) {
    super(props);

    this.state = {
      bucketsFromDatabase:[]
    }
  }
  
  handleClick =(event:React.MouseEvent<HTMLButtonElement>) =>{
    this.props.viewModel.fetchBuckets();
    // console.log(event.target);
  }

  handleClickPrint=(event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log("BucketController",this.props.viewModel.getBuckets())
  }


  render() {
    const buckets = this.props.viewModel.getBuckets();
    console.log("BucketController",buckets)
    return (
      <div>
        < BucketViews 
          buckets={buckets}
          handleClick={this.handleClick}
          handleClickPrint={this.handleClickPrint}
        />
      </div>
    );
  }
}
