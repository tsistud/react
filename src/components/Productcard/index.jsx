import "./index.css";

export function Productcard(props){
    const {image, category, title, price}= props.data;

    return(
        <div className='product-card'>
            <img width="200" src={image} alt="" />
            <div>{category}</div>
            <h4>{title}</h4>
            <div>{price}</div>
        </div>
    )
}