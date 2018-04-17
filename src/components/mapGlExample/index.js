import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class MapGl extends Component {

	state = {
		viewport: {
			width: 1600,
			height: 800,
			latitude: -33.7577,
			longitude: 130.4376,
			zoom: 8
		}
	};

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