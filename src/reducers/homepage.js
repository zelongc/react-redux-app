const homepage = (state = {
    show: 'd3map'
}, action) => {
  switch (action.type) {
      case 'CHANGE_TO_D3MAP':
          return Object.assign({}, state, {show: action.payload});
      case 'CHANGE_TO_REACTMAPGL':
          return Object.assign({}, state, {show: action.payload});
      default:
          return state;
  }
};

export default homepage;