import * as React from 'react';
import BucketViewModel from './BucketViewModel';
import BucketViews from './BucketViews';
import EditForm from './UI/EditForm';
import CreateBucket from './UI/CreateBucket';
import { Bucket, Fruit } from '../models/domain/TypeDef';
import { observer } from 'mobx-react';

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

  openEdit = () => this.setState({ openEdit:true });
  closeEdit = () => this.setState({ openEdit:false, inEdit:{_id:"", description:""} as Fruit });
  openCreate = () => this.setState({ openCreate:true });
  closeCreate= () => this.setState({ openCreate:false });

  handleClick =(event:React.MouseEvent<HTMLButtonElement>) =>{
    this.props.viewModel.fetchBuckets();
  }

  handleCreate=(event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log("create bucket!");
    this.openCreate();
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
    this.props.viewModel.createBucket(description);
    this.closeCreate();
  }

  render() {
    const buckets = this.props.viewModel.getBuckets();
    const fruits = this.props.viewModel.getFruits();
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
