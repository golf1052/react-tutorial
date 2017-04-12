import * as React from 'react';

export interface SquareProps {
    value: number;
}

export class Square extends React.Component<SquareProps, undefined> {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}
