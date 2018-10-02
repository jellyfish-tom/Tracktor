import * as React from 'react';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}

export class Hello extends React.Component<IProps, {}> {
    render() {
        return <React.Fragment>
            <h1>This is Tracktor! A {this.props.framework} application using    {this.props.compiler} with {this.props.bundler}</h1>
            <footer>
                <div>Tractor icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </footer>
        </React.Fragment>
    }
}