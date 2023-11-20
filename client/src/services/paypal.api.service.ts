import { CreateOrderData,CreateOrderActions } from "@paypal/paypal-js";

export const createOrder = async (data: CreateOrderData) => {
    const url = 'http://localhost:8888/orders'
    // Order is created on the server and the order id is returned
    const response = await  fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        body: JSON.stringify({
            product: {
                "description": "description",
                "cost": "1.00"
            }
        }),
    })
        .then((response) => response.json())
       return response;
}
