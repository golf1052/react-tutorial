import * as React from 'react';
import { Board } from './Board';

export interface GameProps {

}

export class Game extends React.Component<GameProps, undefined> {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
