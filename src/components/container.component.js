import React, {Component} from 'react';
import TopNav from './topNav.component';
import SideNav from './sideNav.component';
import PageContent from './pageContent.component';

export default class Container extends Component {
    render() {
        return (
            <div>
                <TopNav/> {this.props.children}
                <SideNav/> {this.props.children}
                <PageContent/> {this.props.children}
            </div>
        )
    }
}
