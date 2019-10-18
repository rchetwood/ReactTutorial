import React from 'react';
import './SimpleBaseballField.css'

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

    const leftFieldStartToWidth = 0.31523;
    const leftFieldStartToHeight= rightFieldStartToHeight;

    const rightFieldEndToWidth = 1.00000;
    const rightFieldEndToHeight = 0.43431;

    // view box dimensions
    const origin = { x: 32, y: 16 }
    const height = props.height ;
    const width = height * widthToHeight;

    // key points
    const homePlate = { x: origin.x + (width/2), y: height};
    const pitchersMound = { x: origin.x + (width/2), y: (height*pitchersMoundToHeight)};
    const firstBase = { x: origin.x + (width*firstBaseToWidth), y: (height*firstBaseToHeight)};
    const secondBase = { x: origin.x + (width/2), y: (height*secondBaseToHeight)};
    const thirdBase = { x: origin.x + ((width*firstBaseToWidth)-(width*firstToThirdToWidth)), y: (height*firstBaseToHeight)};

    const leftFieldStart = { x: origin.x + (width*leftFieldStartToWidth), y: (height*leftFieldStartToHeight)};
    const leftFieldEnd = { x:origin.x, y: (height*rightFieldEndToHeight)};

    const centerField = { x: (width/2), y: origin.y};

    const rightFieldStart = { x: origin.x + (width*rightFieldStartToWidth), y: (height*rightFieldStartToHeight)};
    const rightFieldEnd = { x: origin.x + (width*rightFieldEndToWidth), y: (height*rightFieldEndToHeight)};

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

    const points = [origin.x + width/2, ",", height+origin.y, ];

    return (
        <div className='parent'top={10} left={10}>
            <svg className='child' viewBox={[0,0,width+64,height+32].join(" ")} >
                <path d={outfield.join(" ")} fill="green" />

                <line x1={leftFieldStart.x} y1={leftFieldStart.y} x2={leftFieldEnd.x} y2={leftFieldEnd.y} stroke="green" strokeWidth={5} />
                <line x1={rightFieldStart.x} y1={rightFieldStart.y} x2={rightFieldEnd.x} y2={rightFieldEnd.y} stroke="green" strokeWidth={5} />

                <path d={infieldDirt.join(" ")} fill="orange" />
                <path d={infield.join(" ")} fill="green" />

                <circle cx={pitchersMound.x} cy={pitchersMound.y} r={height*pitchersMoundRadiusToHeight} fill={"orange"}/>

                <circle cx={firstBase.x} cy={firstBase.y} r={2.5} fill={"red"} />
                <circle cx={firstBase.x} cy={firstBase.y} r={height*pitchersMoundRadiusToHeight} fill={"orange"} />
                <line x1={homePlate.x} y1={homePlate.y} x2={rightFieldStart.x} y2={rightFieldStart.y} stroke="orange" strokeWidth={5} /> 
                
                <circle cx={secondBase.x} cy={secondBase.y} r={2.5} fill={"red"} />
                <circle cx={secondBase.x} cy={secondBase.y} r={height*pitchersMoundRadiusToHeight} fill={"orange"} />
                <line x1={firstBase.x} y1={firstBase.y} x2={secondBase.x} y2={secondBase.y} stroke="orange" strokeWidth={5} /> 

                <circle cx={thirdBase.x} cy={thirdBase.y} r={2.5} fill={"red"} />
                <circle cx={thirdBase.x} cy={thirdBase.y} r={height*pitchersMoundRadiusToHeight} fill={"orange"} />
                <line x1={secondBase.x} y1={secondBase.y} x2={thirdBase.x} y2={thirdBase.y} stroke="orange" strokeWidth={5} /> 

                <polygon points="200,10 250,190 160,210" />
                <line x1={origin.x + width/2} y1={height+origin.y} x2={origin.x + width+8} y2={rightFieldEnd.y + origin.y - 8} stroke="green" strokeWidth={17.75} />
                <line x1={origin.x + width/2} y1={height+origin.y} x2={origin.x - 8} y2={leftFieldEnd.y + origin.y - 8} stroke="green" strokeWidth={17.75} />

                <circle cx={homePlate.x} cy={homePlate.y} r={2.5} fill={"red"} />
                <circle cx={homePlate.x} cy={homePlate.y} r={height*pitchersMoundRadiusToHeight} fill={"orange"} />
                <line x1={leftFieldStart.x} y1={leftFieldStart.y} x2={homePlate.x} y2={homePlate.y} stroke="orange" strokeWidth={5} /> 
                
                <line x1={leftFieldEnd.x} y1={leftFieldEnd.y} x2={homePlate.x} y2={homePlate.y} stroke="white" strokeWidth={1.5} />
                <line x1={rightFieldEnd.x} y1={rightFieldEnd.y} x2={homePlate.x} y2={homePlate.y} stroke="white" strokeWidth={1.5} />
                
            </svg>
        </div>
    );
}

export default simpleBaseballField;