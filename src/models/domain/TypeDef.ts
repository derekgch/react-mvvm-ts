export type Bucket ={
  _id:string,
  description:string,
  fruit?:[]
}


export type Fruit ={
  _id:string,
  bucketID:string,
  description:string
}