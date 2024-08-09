import  { Fragment } from 'react'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import Comments from './Comments';
import ShopDetails from './ShopDetails';
import { getData } from '@/app/Data';

export default async function Product({productId}) {
    const products = await getData();
    const id = productId.split("%20");
     const foundProduct = products?.laptop?.find(
    (product) => product.id === id?.at(0)
    );
    
  return (
    <Fragment>
        <ProductImage productImage={foundProduct?.image}/>
        <ProductInfo productDetails={foundProduct}/>
        <Comments />
        <ShopDetails productDetails={foundProduct}/>
    </Fragment>
  )
}
