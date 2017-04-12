import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Game } from './components/Game';

ReactDOM.render(
    <Game />,
    document.getElementById('container')
);

function calculateWinner(squares: number[]): number | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    lines.forEach(line => {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    });
    return null;
}
