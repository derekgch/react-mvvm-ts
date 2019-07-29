export type Bucket ={
  _id:string,
  description:string,
  fruits?:Fruit[]
}


export type Fruit ={
  _id:string,
  bucketID:string,
  description:string
}