import React from 'react';

const baseballField = (props) => {

    const xOrigin = 0;

    const height = props.height;
    const widthToHeightRatio = 1.1325;
    const width = height * widthToHeightRatio;

    const outfieldToHeightRatio = 0.46;

    const leftFieldCorner = height * outfieldToHeightRatio;

    // path for outfield
    const outfieldStartingPoint = ["M", xOrigin, leftFieldCorner];
    const outfieldArc = ["A", width, width * 2, 0, 0, 1, width, leftFieldCorner];
    const rightFieldLine = ["L", ((width / 2) + (height * 0.37625)), (width - (height * 0.37625))];
    const infieldArc = ["A", width, width * 2, 0, 0, 0, (width / 2) - (height * 0.37625), (width - (height * 0.37625))]
    const leftFieldLine = ["L", xOrigin, leftFieldCorner]

    // outfield 
    const outfield = outfieldStartingPoint.concat(outfieldArc, rightFieldLine, infieldArc, leftFieldLine);

    // path for infield
    const infieldStartingPoint = ["M", (width / 2) - (height * 0.37625), (width - (height * 0.37625))];
    const leftInfieldLine = ["L", (width/2)-63.63961, height-63.63961]

    const reverseInfieldArc = ["A",  width, width * 2, 0, 0, 1, ((width / 2) + (height * 0.37625)), (width - (height * 0.37625))]
    const rightInfieldLine = ["L", (width/2) + 63.63961, height + 90]
    const secondBase = ["L", width/2, height-121]
 
    //infield
    const infield = infieldStartingPoint.concat(leftInfieldLine );
    return (
        <svg width={width + 100} height={height + 100}>
            <svg width={width} height={height}>
                <path d={outfield.join(" ")} stroke="black" fill="green" />
                <path d={infield.join(" ")} stroke="black" />
            </svg>
            <circle cx={200} cy={100} r={15} fill={"red"} />
        </svg>
    );
}

export default baseballField;