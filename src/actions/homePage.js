
const changeToD3Map = () => {
    return ({type: 'CHANGE_TO_D3MAP', payload: 'd3map'});
};
const changeToReactMapGL = () => {
    return ({type: 'CHANGE_TO_REACTMAPGL', payload: 'REACT_MAP_GL'});
};

module.exports = {
	changeToD3Map: changeToD3Map,
	changeToReactMapGL: changeToReactMapGL
};