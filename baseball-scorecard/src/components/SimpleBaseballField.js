import React from 'react';

const simpleBaseballField = (props) => {

    // ratios calculated using a 1:1 baseball field 
    // used for scaling
    const widthToHeight = 1.13137;

    const pitchersMoundToHeight = 0.84875;
    const pitchersMoundRadiusToHeight = 0.045;

    const firstBaseToWidth = 0.64062
    const firstBaseToHeight = 0.84090;

    const secondBaseToHeight = 0.681875;

    const firstToThirdToWidth = 0.28119

    const rightFieldStartToWidth = 0.68476;
    const rightFieldStartToHeight = 0.79096;

    const rightFieldEndToWidth = 1.00000;
    const rightFieldEndToHeight = 0.43431;

    const rightFieldStartToViewBoxRight = 0.31524 

    // view box dimensions
    const origin = { x: 0, y: 0 }
    const height = props.height;
    const width = height * widthToHeight;

    // key points
    const homePlate = { x: (width/2), y: height};
    const pitchersMound = { x: (width/2), y: (height*pitchersMoundToHeight)};
    const firstBase = { x: (width*firstBaseToWidth), y: (height*firstBaseToHeight)};
    const secondBase = { x: (width/2), y: (height*secondBaseToHeight)};
    const thirdBase = { x: ((width*firstBaseToWidth)-(width*firstToThirdToWidth)), y: (height*firstBaseToHeight)};
    const leftFieldStart= { x: (width*rightFieldStartToViewBoxRight), y: (height*rightFieldStartToHeight)};
    const leftFieldEnd = { x: origin.x, y:  (height*rightFieldEndToHeight)};
    const centerField = { x: (width/2), y: origin.y};
    const rightFieldStart = { x: (width*rightFieldStartToWidth), y: (height*rightFieldStartToHeight)};
    const rightFieldEnd = { x: (width*rightFieldEndToWidth), y: (height*rightFieldEndToHeight)};

    // path variables
    const outfieldMajorAxis = width;
    const outfieldMinorAxis = (leftFieldEnd.y*2);
    const infieldRadius = firstBase.x - secondBase.x;
    
    // paths
    const outfield = ["M", leftFieldEnd.x, leftFieldEnd.y,
                      "A", outfieldMinorAxis, outfieldMajorAxis, 0, 0, 1, rightFieldEnd.x, rightFieldEnd.y,
                      "L", rightFieldStart.x, rightFieldStart.y,
                      "A", (infieldRadius), (infieldRadius), 0, 0, 0, leftFieldStart.x, leftFieldStart.y,
                      "L", leftFieldEnd.x, leftFieldEnd.y];

    const infieldDirt = ["M", thirdBase.x, thirdBase.y,
                     "L", secondBase.x, secondBase.y,
                     "L", firstBase.x, firstBase.y,
                     "L", rightFieldStart.x, rightFieldStart.y,
                     "A", (infieldRadius), (infieldRadius), 0, 0, 0, leftFieldStart.x, leftFieldStart.y,
                     "L", thirdBase.x, thirdBase.y];
    
    const infield = ["M", homePlate.x, homePlate.y,
                     "L", firstBase.x, firstBase.y,
                     "L", secondBase.x, secondBase.y,
                     "L", thirdBase.x, thirdBase.y,
                     "L", homePlate.x, homePlate.y];

    return (
        <div>
            <svg width={width+10} height={height+10}>
                <path d={outfield.join(" ")} stroke="black" fill="green" />
                <path d={infieldDirt.join(" ")} stroke="black" fill="orange" />
                <path d={infield.join(" ")} stroke="black" fill="green" />
                <circle cx={homePlate.x} cy={homePlate.y} r={2.5} fill={"red"} />
                <circle cx={pitchersMound.x} cy={pitchersMound.y} r={height*pitchersMoundRadiusToHeight} fill={"orange"} />
                <circle cx={firstBase.x} cy={firstBase.y} r={2.5} fill={"red"} />
                <circle cx={secondBase.x} cy={secondBase.y} r={2.5} fill={"red"} />
                <circle cx={thirdBase.x} cy={thirdBase.y} r={2.5} fill={"red"} />
                <circle cx={leftFieldStart.x} cy={leftFieldStart.y} r={2.5} fill={"red"} />
                <circle cx={leftFieldEnd.x} cy={leftFieldEnd.y} r={2.5} fill={"red"} />
                <circle cx={centerField.x} cy={centerField.y} r={2.5} fill={"red"} />
                <circle cx={rightFieldStart.x} cy={rightFieldStart.y} r={2.5} fill={"red"} />
                <circle cx={rightFieldEnd.x} cy={rightFieldEnd.y} r={2.5} fill={"red"} />
            </svg>
        </div>
    );
}

export default simpleBaseballField;