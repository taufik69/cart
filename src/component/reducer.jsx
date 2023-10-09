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
      product: [],
    };
  }

  /**
   * todo : this reducer funtion is work for increment item in state
   *
   */

  if (action.type === "INCREMENT") {
    let producttotal = state.product.map((currentEle) => {
      if (currentEle.id === action.payload) {
        console.log("from reducer function", currentEle);
      }
    });
    console.log(producttotal);
  }

  /**
   * todo : decrement reducer function takes a type of action and decrements the total items
   */

  if (action.type === "DECREMENT") {
    return {
      ...state,
      total_item: state.total_item >= 0 ? state.total_item-- : 0,
    };
  }
}
export default reducer;
