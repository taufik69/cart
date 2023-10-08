function reducer(state, action) {
  /**
   * todo : state gives me a initalState value 
   * 
   * * const initialState = {
    ** total_amount: 0,
    ** total_item: 0,
    ** };


    *todo :  action perameter gives you a  this object 
    **  dispatch({
    **  type: "REMOVE",
    **  payload: itemId,
    **  });

   **/

  if (action.type === "REMOVE") {
    const test = {
      ...state,
      product: state.product.filter((currentElement) => {
        return currentElement !== action.payload;
      }),
    };
    console.log(test.product);
  }
}
export default reducer;
