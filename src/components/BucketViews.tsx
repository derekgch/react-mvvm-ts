import * as React from 'react';
import { Bucket } from '../models/domain/TypeDef';
import Button from './UI/Button';


export interface IBucketViewsProps {
  buckets: Bucket[]
}

export default class BucketViews extends React.Component<IBucketViewsProps> {
  render() {
    console.log(this.props.buckets)

    return (
      <div>
        {this.props.buckets.map( e => <Button key={e._id} _id={e._id} description={e.description}/>)}
      </div>
    );
  }
}
