import * as React from 'react';
import { Bucket } from '../models/domain/TypeDef';
import Button from '@material-ui/core/Button';
import BucketButton from './UI/BucketButton';
import { observer } from 'mobx-react';

export interface IBucketViewsProps {
  buckets: Bucket[],
  handleClick : (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleClickPrint: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleFruitClick: (event: React.MouseEvent<HTMLButtonElement>, id:string) => void,
}
@observer
export default class BucketViews extends React.Component<IBucketViewsProps> {
  render() {
    console.log(this.props.buckets)

    return (
      <div>
        <Button onClick ={ this.props.handleClick }  variant="contained" color="primary">Get Buckets from database!</Button>
        <Button onClick ={ this.props.handleClickPrint }  variant="contained" color="primary">Print Buckets to console!</Button>
        {this.props.buckets.map( e => <BucketButton 
                                        key={e._id} 
                                        _id={e._id} 
                                        description={e.description} 
                                        handleClick={ this.props.handleFruitClick }
                                      />)}
      </div>
    );
  }
}
