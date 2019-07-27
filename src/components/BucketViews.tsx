import * as React from 'react';
import { Bucket } from '../models/domain/TypeDef';
import Button from './UI/Button';

import { observer } from 'mobx-react';

export interface IBucketViewsProps {
  buckets: Bucket[],
  handleClick : (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleClickPrint: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
@observer
export default class BucketViews extends React.Component<IBucketViewsProps> {
  render() {
    console.log(this.props.buckets)

    return (
      <div>
        <button onClick ={ this.props.handleClick } >Get Buckets from database!</button>
        <button onClick ={ this.props.handleClickPrint } >Print Buckets to console!</button>
        {this.props.buckets.map( e => <Button key={e._id} _id={e._id} description={e.description}/>)}
      </div>
    );
  }
}
