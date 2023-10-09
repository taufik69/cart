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
    return {
      ...state,
      product: state.product.filter((currentElement) => {
        let filterResult = currentElement.id !== action.payload;
        return filterResult;
      }),
    };
  }

  /**
   * todo this reducer function work for deccrements items
   */
  if (action.type === "clear_Cart") {
    return {
      ...state,
      product:[]
    }
  }
}
export default reducer;
