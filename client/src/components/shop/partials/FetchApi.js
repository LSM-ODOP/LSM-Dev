const transformObject = (array) => {
  return array.reduce((acc, curr) => {
    const { productId } = curr;
    if (acc[productId]) {
      acc[productId] += 1;
    } else {
      acc[productId] = 1;
    }
    return acc;
  }, {});
};


export const cartListProduct = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let productArray;
  if (carts) {
    productArray = transformObject(carts);
  }
  return productArray;
};
