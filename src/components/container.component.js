import React, {Component} from 'react';
import TopNav from './topNav.component';

export default class Container extends Component {
    render() {
        return (
            <div>
                <TopNav/> {this.props.children}
            </div>
        )
    }
}
