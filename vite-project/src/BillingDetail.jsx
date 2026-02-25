import React from "react";
import { data } from "react-router-dom";

const BillingDetail = () => {
    if(!data) {
        return null;
    }

    const totalPrice = data.quantity * data.unitPrice;

    return (
        <div>
            <h1>Billing Detail</h1>
            <p>Product Name: {data.Name}</p>
            <p>Quantity: {data.quantity}</p>
            <p>Unit Price: {data.unitPrice}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
}