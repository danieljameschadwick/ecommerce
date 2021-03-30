export const ACTION = {
    ADD_TO_CART: 'basket.product.add',
};

export const addArticle = (payload) => {
    return { type: ACTION.ADD_TO_CART, payload }
};
