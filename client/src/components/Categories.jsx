import '../styles/Categories.css'
import Category from "./Category";

const Categories = () => {
    return (
        <div className="categories">
            <h1 className="categories__title">{ "Categorías" }</h1>
            <div className='categories__wrapper'>
                <div className=''> {' < '}</div>
                <div className="categories__items">
                    <Category name="Abarrotes" image="https://supercompras.pe/wp-content/uploads/2020/11/abarrotes.png"></Category>             
                    <Category name="Abarrotes" image="https://supercompras.pe/wp-content/uploads/2020/11/abarrotes.png"></Category>              
                    <Category name="Abarrotes" image="https://supercompras.pe/wp-content/uploads/2020/11/abarrotes.png"></Category> 
                </div>                          
                <div className=''> {' > '}</div>
            </div>                                          
        </div>
    )
};


export default Categories;
