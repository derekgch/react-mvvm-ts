import * as React from 'react';
import BucketViewModel from './BucketViewModel';
import BucketViews from './BucketViews';
import FruitEdit from './UI/FruitEdit';
import { Bucket, Fruit } from '../models/domain/TypeDef';
import { observer } from 'mobx-react';

export interface IBucketControllerProps {
  viewModel:BucketViewModel
}

export interface IBucketControllerState {
  openEdit:boolean,
  inEdit:Fruit
}
@observer
export default class BucketController extends React.Component<IBucketControllerProps, IBucketControllerState> {
  constructor(props: IBucketControllerProps) {
    super(props);
    this.state = {
      openEdit:false,
      inEdit:{} as Fruit
    }
  }

  openEdit = () => this.setState({openEdit:true});
  closeEdit = () => this.setState({openEdit:false});
  handleEditChange = (event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log(event.target)
  }
  
  handleClick =(event:React.MouseEvent<HTMLButtonElement>) =>{
    this.props.viewModel.fetchBuckets();
  }

  handleClickPrint=(event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log("BucketController",this.props.viewModel.getBuckets())
  }

  handleFruitClick=(event:React.MouseEvent<HTMLButtonElement>, id:string) =>{
    const result = this.props.viewModel.findFruits(id);
    console.log("fruits:", result)
  }

  handleEditFruit=(event:React.MouseEvent<HTMLButtonElement>, id:string) =>{
    console.log(id)
    const foundFruit = this.props.viewModel.findOneFruit(id);
    this.setState({inEdit: foundFruit, openEdit:true});
  }
  

  render() {
    const buckets = this.props.viewModel.getBuckets();
    const fruits = this.props.viewModel.getFruits();
    console.log("BucketController",buckets)
    return (
      <div>
        < BucketViews 
          buckets={buckets}
          fruits={fruits}
          handleClick={this.handleClick}
          handleClickPrint={this.handleClickPrint}
          handleFruitClick={this.handleFruitClick}
          handleEditFruit={this.handleEditFruit}
        />
        <FruitEdit 
          open={this.state.openEdit}
          onClose={this.closeEdit}
          >

        </FruitEdit>
      </div>
    );
  }
}
