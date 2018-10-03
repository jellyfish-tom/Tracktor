import * as React from 'react'

interface IProps {
    label: string,
}

export class Button extends React.PureComponent<IProps, {}> {
    render() {
        return <button>
            { this.props.label }
        </button>
    }
}