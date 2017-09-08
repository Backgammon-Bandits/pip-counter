import React, { PureComponent } from 'react';

import Checker from './checkers/Checker';

class Field extends PureComponent {

    render() {
        const {
            ordinal,
        } = this.props;

        let checkers = [];
        if (this.props.player || this.props.opponent) {
            const playerType = this.props.player ? 'player' : 'opponent';
            for (var index = 0; index <this.props[playerType];  index++ ) {
                checkers.push(<Checker key={index} playerType={playerType} />);
            }
        }

        return (
            <div className={`field-wrapper field-wrapper__${ordinal%2 === 0 ? 'white' : 'red'}`}>
                <div>{ordinal}</div>
                <div>
                    {checkers}
                </div>
            </div>
        );
    }
}

export default Field;
