import * as React from 'react';
import BucketViewModel from './BucketViewModel';
import BucketViews from './BucketViews';
import EditForm from './UI/EditForm';
import { Bucket, Fruit } from '../models/domain/TypeDef';
import { observer } from 'mobx-react';
import CreateBucket from './UI/CreateBucket';

export interface IBucketControllerProps {
  viewModel:BucketViewModel
}

export interface IBucketControllerState {
  openEdit:boolean,
  openCreate:boolean,
  inEdit:Fruit
}
@observer
export default class BucketController extends React.Component<IBucketControllerProps, IBucketControllerState> {
  constructor(props: IBucketControllerProps) {
    super(props);
    this.state = {
      openEdit:false,
      openCreate:false,
      inEdit:{_id:"", description:""} as Fruit,
    }
  }

  openEdit = () => this.setState({openEdit:true});
  closeEdit = () => this.setState({openEdit:false, inEdit:{_id:"", description:""} as Fruit});
  closeCreate= () => this.setState({openCreate:false});

  handleEditChange = (event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log(event.target)
  }
  
  handleClick =(event:React.MouseEvent<HTMLButtonElement>) =>{
    this.props.viewModel.fetchBuckets();
  }

  handleCreate=(event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log("create bucket!")
    this.setState({openCreate:true})
  }

  handleFruitClick=(event:React.MouseEvent<HTMLButtonElement>, id:string) =>{
    const result = this.props.viewModel.findFruits(id);
    console.log("fruits:", result)
  }

  handleEditFruit=(event:React.MouseEvent<HTMLButtonElement>, id:string):void =>{
    console.log(id)
    const foundFruit = this.props.viewModel.findOneFruit(id);
    this.setState({inEdit: foundFruit, openEdit:true});
  }

  handleSave=( id:string, description:string ):void =>{
    this.props.viewModel.saveFruit(id, description)
    this.closeEdit();
  }
  handleBucketSave = (id:string, description:string):void =>{
    console.log("save buckets!")
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
          handleCreate={this.handleCreate}
          handleFruitClick={this.handleFruitClick}
          handleEditFruit={this.handleEditFruit}
        />
        <EditForm 
          open={this.state.openEdit}
          onClose={this.closeEdit}
          handleSave={this.handleSave}
          editID={this.state.inEdit._id}
          editDescription={this.state.inEdit.description}
        />
        <CreateBucket 
          open={this.state.openCreate}
          onClose={this.closeCreate}
          handleBucketSave={this.handleBucketSave}
        />

      </div>
    );
  }
}
