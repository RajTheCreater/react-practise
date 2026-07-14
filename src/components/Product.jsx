
const Product = ({ name, price, color, data }) => {

    return <>
        <div>
            <h1>Brand - {name}</h1>
            <h3>Price -  {price}</h3>
            <h3>Color -  {color}</h3>
            <p>RAM - {data.ram}</p>
            <p>ROM - {data.rom}</p>
            <p>PROCESSOR - {data.processor}</p>
        </div>
    </>
}
export default Product;