import { useState } from "react";

const FormAddSubs = ({
    setType,
    type,
    setPrice,
    price,
    setSubs,
    subs,
    editId,
    setEditId, 
    spent, 
    count }) => {

    const [error, setError] = useState(false);
    const [errorMoney, setErrorMoney] = useState(false);

    const handleSubs = e => {
        e.preventDefault();

        if (type !== "" && Number(price) > 0 && price !== "") {
            setError(false)

            if ((count-spent) < Number(price) && editId === "") {
                setErrorMoney(true);
                return;
            }

            setErrorMoney(false);

            if (editId !== "") {
                const newSubs = subs.map(item => {
                    if (item.id === editId) {
                        if (item.price == price || (count - spent + Number(item.price)) > Number(price)) {
                            item.type = type;
                            item.price = price;
                        } else {
                            setErrorMoney(true);
                        }
                    }
                    return item;
                })
                setEditId("");
                setSubs(newSubs);
            } else {
                const data = {
                    type: type,
                    price: price,
                    id: Date.now(),

                }
                setSubs([...subs, data])
            }

            setPrice("");
            setType("");
        } else {
            setError(true)
        }
    }

    return (
        <div className="add-subscription">
            <h3>Agregar Suscripciones</h3>
            <form onSubmit={handleSubs}>
                <p>Service</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value="">-- Elegir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="primeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appleTv">Apple TV</option>
                </select>
                <p>Cantidad</p>
                <input
                    type="number"
                    placeholder="20$"
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                />
                {editId !== "" ?
                    <input type="submit" value="Guardar" /> :
                    <input type="submit" value="Agregar" />
                }
            </form>
            {error ? <p className="error">Campos invalidos</p> : null}
            {errorMoney ? <p className="error">No tienes presupuesto</p> : null}
        </div>
    );
}

export default FormAddSubs;