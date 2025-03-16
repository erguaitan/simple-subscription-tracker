import SingleItem from "./SingleItem";

const DisplayItems = ({ subs, eliminarItem, editItem }) => {
    return (
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item => (
                    <SingleItem 
                        key={item.id}
                        price={item.price} 
                        type={item.type}
                        id={item.id}
                        eliminarItem={eliminarItem}
                        editItem={editItem}
                    />
                ))
            }
        </>
    );
}

export default DisplayItems;