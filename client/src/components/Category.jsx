import "../styles/Category.css"

const Category = (props) => {

    return (
        <div className="category">
            <img className="category__image" src={props.image} alt="Category"></img>       
            <h3 className="category__name">{ props.name}</h3>
        </div>
    )
};

export default Category;
