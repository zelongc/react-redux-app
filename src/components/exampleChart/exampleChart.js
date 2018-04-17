import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeToBlackColor, changeToRedColor} from '../../actions/homePage'
import * as d3 from 'd3';
// const d3 = require('d3');
const map = d3.scaleLinear;
const scaleLinear = d3.scaleLinear;
const select = d3.select;

class ExampleChart extends Component {
    constructor (props) {
        super(props);
        this.state = {
            geoData: {}
        }
    }

    // createBarChart() {
    //     const node = this.node; // D3 get the actual dom.
    //     const dataMax = 5;
    //
    //     select(node)
    //         .selectAll('rect')    //  D3 does the DOM rendering
    //         .data([1,2,3,4,5])  // React lifecycle will manage component change here
    //         .enter()
    //         .append('rect')
    //
    //     select(node)
    //         .selectAll('rect')
    //         .data([1,2,3,4,5])
    //         .exit()
    //         .remove()
    //
    //     select(node)
    //         .selectAll('rect')
    //         .data([1,2,3,4,5])
    //         .style('fill', this.props.color)
    //         .attr('x', 35)
    //         .attr('y',5)
    //         .attr('height', '100%')
    //         .attr('width', '100%')
    //         .on('click', () => {
    //             this.props.dispatch(changeToBlackColor());
    //         })
    // }
    /**
     * # projection.fitExtent(extent, object) <>
     Sets the projection’s scale and translate to fit the specified GeoJSON object in the center of the given extent. The extent is specified as an array [[x₀, y₀], [x₁, y₁]], where x₀ is the left side of the bounding box, y₀ is the top, x₁ is the right and y₁ is the bottom. Returns the projection.
     */
    createMap () {
        const node = this.node;
        const width = 1600;
        const height = 800;
        const {geoData} = this.state;

        const projection = d3.geoMercator().translate([-1900,-50]).scale(1000);
            // .center([133, -25.5]);
            // .precision(0.5);
        const svg = d3.select(node)
            .attr("width", width)
            .attr("height", height);

        const path = d3.geoPath()
            .projection(projection);

        const g = svg.append("g");
            // .attr('height','100%')
            // .attr('width','100%');

        g.selectAll("path")
            .data(geoData.features)
            .enter()
            .append("path")
            .attr('fill','#09F')
            .attr('stroke', this.props.color)
            .attr("d", path)

    }
    componentDidMount () {
        // fetch geoJson object in the beginning.
        d3.json("http://127.0.0.1:8080/mock/aus_lga.json")
            .then((geoData) => this.setState({geoData}, () => this.createMap()));
    }

    componentDidUpdate () {
        this.createMap();
    }

    render() {
        console.warn('this.state', this.state);
        return <svg ref= {node => this.node = node}>
            {this.props.color}
        </svg>;
    }
}
const mapStateToProps = (state) => {
    const {homepage} = state;
    return Object.assign({}, homepage);
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleChart);
