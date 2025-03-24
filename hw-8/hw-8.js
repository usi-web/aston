const orders = [
  { id: 1, item: "Laptop", paid: true },
  { id: 2, item: "Phone", paid: false },
  { id: 3, item: "Tablet", paid: true },
];

const deliveryData = {
  1: "Delivered in 3 days",
  3: "Delivered in 5 days",
};

function fetchOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(orders);
      } else {
        reject(new Error("Server error: Unable to fetch orders"));
      }
    }, 2000);
  });
}

function fetchDeliveryInfo(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
    }, 1000);
  });
}

async function processOrder() {
  try {
    const orders = await fetchOrders();
    const paidOrders = orders.filter((order) => order.paid);

    const deliveryPromises = paidOrders.map((order) =>
      fetchDeliveryInfo(order.id)
    );
    const deliveries = await Promise.all(deliveryPromises);

    const finalOrders = paidOrders.map((order) => {
      const deliveryInfo = deliveries.find(
        (delivery) => delivery.orderId === order.id
      );
      return { ...order, deliveryTime: deliveryInfo.deliveryTime };
    });

    console.log("Финальный список заказов с доставкой:", finalOrders);
  } catch (error) {
    console.error("Ошибка при обработке заказа:", error.message);
  }
}

processOrder();
