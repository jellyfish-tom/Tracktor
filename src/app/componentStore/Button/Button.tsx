import * as React from 'react'

interface IProps {
    label: string,
}

export class Button extends React.PureComponent<IProps, {}> {
    render() {
        return <React.Fragment>
            <button>
                { this.props.label }
            </button>
        </React.Fragment>
    }
}