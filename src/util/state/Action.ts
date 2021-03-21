export const ACTION = {
    ADD_TO_CART: 'basket.product.add',
    SAVE_TO_STORAGE: 'basket.persist',
};

export const addArticle = (payload) => {
  return { type: ACTION.ADD_TO_CART, payload }
};
