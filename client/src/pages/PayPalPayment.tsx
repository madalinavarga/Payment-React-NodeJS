import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createOrder } from "../services/paypal.api.service";
import { useMutation } from "@tanstack/react-query";
import { CreateOrderData, CreateOrderActions } from "@paypal/paypal-js";
import { useNavigate } from "react-router-dom";

function PayPalPayment({amount}:{amount:string}) {
  const navigator = useNavigate();

  const createOrderMutation = useMutation({
    mutationFn: createOrder,
  });

  const handleCreateOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions
  ) => {
    const respone = await createOrderMutation.mutateAsync(data);
    return respone.id;
  };

  const onApprove = async (payload: any) => {
    // Order is captured on the server
    const url = `http://localhost:8888/orders/${payload.orderID}/capture`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.status == "COMPLETED") {
      navigator("/Dummy");
    }
  };

  const initialOptions = {
    clientId:"",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-xl font-bold mb-4">Your Order</h1>
        <p className="mb-4">Amount: {amount} $</p>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={(data, actions) => handleCreateOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data)}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default PayPalPayment;
