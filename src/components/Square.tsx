import * as React from 'react';

export interface SquareProps {
    value: string;
    onClick(): void;
}

export interface SquareState {
    value: string | null;
}

export class Square extends React.Component<SquareProps, SquareState> {
    constructor() {
        super();
        this.state = {
            value: null
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
