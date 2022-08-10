import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                {items.map((item) => (
                    <div key={item.id} className="col-3 m-3">
                        <Item item={item}/>
                    </div>
                ))}
            </div>
        </div>
           
    );
};
export default ItemList