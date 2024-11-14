import "./index.css";

export function Productcard(props){
    const {img, category, name, price}= props.data;

    return(
        <div className='product-card'>
            <img width="200" src={img} alt="" />
            <div>{category}</div>
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
    )
}