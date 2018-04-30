import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class MapGl extends Component {

	state = {
		viewport: {
			width: 1600,
			height: 800,
			latitude: -37.782579523965694,
			longitude: 145.1089824073587,
			zoom: 9,
			maxZoom:15,
			minZoom:1
		}
	};

    //
	// ss = {
     //    altitude:
     //        1.5
     //    bearing:
     //        0
     //    height:
     //        800
     //    latitude:
     //        -37.782579523965694
     //    longitude:
     //        145.1089824073587
     //    maxPitch:
     //        60
     //    maxZoom:
     //        20
     //    minPitch:
     //        0
     //    minZoom:
     //        0
     //    pitch:
     //        0
     //    transitionDuration:
     //        0
     //    width:
     //        1600
     //    zoom:
     //        10.237358840513831
	// };

	render() {
		return (
			<ReactMapGL
				mapboxApiAccessToken={'pk.eyJ1IjoibmljazM1NiIsImEiOiJjamcyNzlvaHQxYm1mMnpvNmQycDloMmRtIn0.kAhRreWyEE-3oIRGCuN9-Q'}
				{...this.state.viewport}
				onViewportChange={(viewport) => this.setState({viewport})}
			/>
		);
	}
}

export default MapGl;
