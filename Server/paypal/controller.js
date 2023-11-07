const { createOrderProvider,captureOrderProvider } = require("./utils");

//STEP 1 -> creare order + ID-> trimitem id la client
const createOrder = async (req, res) => {
  try {
    const { product } = req.body;
    const response = await createOrderProvider(product);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
};

const captureOrder = async (req, res) => {
  try {
    console.log("req:", req.params);
    const { orderID } = req.params;
    const response = await captureOrderProvider(
      orderID
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
};

module.exports = {
  createOrder,
  captureOrder,
};
