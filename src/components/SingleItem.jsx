import { moneyFormat } from "../helpers"

const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {

    const handleDelete = e => {
        e.preventDefault();
        const answer = window.confirm(`Borrar suscripción a ${type}`);
        if (answer) {
            eliminarItem(id);
        }
    }

    const handleEdit = e => {
        e.preventDefault();
        editItem(id);
    }

    const urlImage = `/public/${type}.png`
    const altImage = `${type}-logo`

    return (
        <div className="single-item">
            <img src={urlImage} alt={altImage} />
            <h3>Price: {moneyFormat(Number(price))}</h3>
            <a href="" onClick={handleDelete}>Borrar</a>
            <a href="" onClick={handleEdit}>Editar</a>
        </div>
    );
}

export default SingleItem;