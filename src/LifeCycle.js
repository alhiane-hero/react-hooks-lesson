import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: ''
        };
    }

    componentDidMount() {
        console.log('mounted!');
        document.title = `You Clicked ${this.state.count} Times`;
    }

    componentDidUpdate() {
        console.log('updated!');
        document.title = this.state.title; // line 1;
        document.title = `You Clicked ${this.state.count} Times`; // line 2;
        // title doesn't changed because line 2 overide on line 1;
    }

    // works when view deleted bwcause error:
    componentWillUnmount() {
        console.log('View Deleted!');
    }

    handleCount = _ => {
        this.setState({count: this.state.count + 1});
    }

    handleTitle = _ => {
        this.setState({title: "React Hooks - useEffect!"});
    }
    
    render() {
        return (
            <div className='LifeCycle'>
                <p>You Clicked {this.state.count} Times</p>
                <button onClick={this.handleCount}>
                    Increase Count
                </button>
                <button onClick={this.handleTitle}>
                    Change Title
                </button>
            </div>
        );
    }
}

export default LifeCycle;