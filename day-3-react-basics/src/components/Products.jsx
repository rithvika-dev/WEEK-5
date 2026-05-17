function Products(props) {
    const {productObj}=props;
    console.log(productObj)
    //state
    // return react component 
    return(
        <div className="border-2">
            <h2 className="text-2xl text-amber-200">{productObj.title}</h2>
            <p className="text-2xl">${productObj.price}</p>
            <p className="text-xl">{productObj.description}</p>
        </div>
    );
}
export default Products;