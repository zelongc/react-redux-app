import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeToD3Map, changeToReactMapGL} from '../../actions/homePage';
import ExampleChart from '../../components/exampleChart/exampleChart';
import MapGl from '../../components/mapGlExample';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class MainContainer extends Component {
    handleHeaderMenuClick (item) {
        switch (item.key) {
            case 'D3Map':
                return this.props.changeToD3Map();
            case 'ReactMapGl':
                return this.props.changeToReactMapGL();
            default:
                return;
        }
    }
    render() {
        console.warn('this.props', this.props);
        return (
            <Layout className={'MainContainer'}>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['Map']}
                        style={{ lineHeight: '64px' }}
                        onClick={(item) => this.handleHeaderMenuClick(item) }
                    >
                        <Menu.Item key="D3Map">Map</Menu.Item>
                        <Menu.Item key="ReactMapGl">Light Pollution Map</Menu.Item>
                        <Menu.Item key="Other Map">Other Map</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={180} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                            {this.props.show === 'd3map' && <ExampleChart/>}
                            {this.props.show === 'REACT_MAP_GL' && <MapGl/>}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = (state) => {
    const {homepage} = state;
    return Object.assign({}, homepage);
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
		changeToD3Map: () => dispatch(changeToD3Map()),
		changeToReactMapGL: () => dispatch(changeToReactMapGL())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
