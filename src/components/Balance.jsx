import { useEffect, useState } from "react";
import { moneyFormat } from "../helpers"

const Balance = ({ count, subs, spent, setSpent }) => {
    const updateBalance = () => {
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() => {
        updateBalance();
    }, [subs]);

    return (
        <div className="balance">
            <h3>Presupuesto: {moneyFormat(Number(count))}</h3>
            <h3>Disponible: {moneyFormat(Number(count - spent))}</h3>
            <h3>Gastado: {moneyFormat(Number(spent))}</h3>
        </div>
    );
}

export default Balance;