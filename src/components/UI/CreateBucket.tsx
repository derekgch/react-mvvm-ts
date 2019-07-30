import React from 'react'
import EditForm from './EditForm';

interface CreateBucketProps {
  open:boolean,
  onClose:()=>void,
  handleBucketSave:(id:string, description:string)=>void
}

const CreateBucket: React.FC<CreateBucketProps> = (props) => {
  return (
    <EditForm
      open={props.open}
      onClose={props.onClose}
      editID={"Creating Bucket"}
      editDescription={"Bucket Description"} 
      handleSave={props.handleBucketSave}
    />
  )
}

export default CreateBucket
