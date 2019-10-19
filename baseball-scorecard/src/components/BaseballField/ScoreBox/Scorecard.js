import React, { Component } from 'react';
import BaseballField from '../SimpleBaseballField';

class ScoreBox extends Component {


    render() {
        const widthToHeight = 1.13137;
        const paddingToHeight = 0.08;
        const paddingToWidth = .07071;

        const height = this.props.height;
        const width =  height * widthToHeight;
        
        const paddingWidth = width * paddingToWidth;
        const paddingHeight = height * paddingToHeight;

        const origin = { x: 0, y: 0 }
        const viewBoxHeight = height + paddingHeight;
        const viewBoxWidth = width + paddingWidth;

        console.log("height: " + height);
        console.log("width: " + width);

        return (
            <svg viewBox={[origin.x, origin.y, viewBoxWidth, viewBoxHeight].join(" ")}>
                <BaseballField 
                    height={this.props.height} 
                    width={this.props.height * widthToHeight} 
                    paddingWidth={paddingWidth}
                    paddingHeight={paddingHeight} 
                />
            </svg>
        );

    }
}

export default ScoreBox;