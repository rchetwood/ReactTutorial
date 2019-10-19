import React from 'react';

const simpleBaseballField = (props) => {

    // ratios calculated using a 1:1 baseball field 
    // used for scaling
    const widthToHeight = 1.13137;

    const pitchersMoundToHeight = 0.84875;
    const pitchersMoundRadiusToHeight = 0.045;

    const pitchersMoundBaseHeightToHeight = 0.004;
    const pitchersMoundBaseWidthToWidth = 0.01;

    const firstBaseToWidth = 0.64062
    const firstBaseToHeight = 0.84090;

    const secondBaseToHeight = 0.681875;

    const firstToThirdToWidth = 0.28119

    const rightFieldStartToWidth = 0.68476;
    const rightFieldStartToHeight = 0.79096;

    const leftFieldStartToWidth = 0.31523;
    const leftFieldStartToHeight = rightFieldStartToHeight;

    const rightFieldEndToWidth = 1.00000;
    const rightFieldEndToHeight = 0.43431;

    const baseSideToHeight = 0.0075;

    // 32 px of padding
    const paddingToHeight = 0.08;
    const paddingToWidth = .07071;

    // view box dimensions
    const origin = { x: 0, y: 0 }
    const height = props.height;
    const width = height * widthToHeight;

    const paddingWidth = width * paddingToWidth;
    const paddingHeight = height * paddingToHeight;
    const viewBoxOrigin = { x: paddingWidth / 2, y: paddingHeight  }
    const viewBoxHeight = height + paddingHeight ;
    const viewBoxWidth = width + paddingWidth ;

    // key points
    const homePlate = { x: viewBoxOrigin.x + (width / 2), y: height };
    const pitchersMound = { x: viewBoxOrigin.x + (width / 2), y: (height * pitchersMoundToHeight) };
    const firstBase = { x: viewBoxOrigin.x + (width * firstBaseToWidth), y: (height * firstBaseToHeight) };
    const secondBase = { x: viewBoxOrigin.x + (width / 2), y: (height * secondBaseToHeight) };
    const thirdBase = { x: viewBoxOrigin.x + ((width * firstBaseToWidth) - (width * firstToThirdToWidth)), y: (height * firstBaseToHeight) };

    const leftFieldStart = { x: viewBoxOrigin.x + (width * leftFieldStartToWidth), y: (height * leftFieldStartToHeight) };
    const leftFieldEnd = { x: viewBoxOrigin.x, y: (height * rightFieldEndToHeight) };

    const rightFieldStart = { x: viewBoxOrigin.x + (width * rightFieldStartToWidth), y: (height * rightFieldStartToHeight) };
    const rightFieldEnd = { x: viewBoxOrigin.x + (width * rightFieldEndToWidth), y: (height * rightFieldEndToHeight) };

    // path variables
    const outfieldMajorAxis = width;
    const outfieldMinorAxis = (leftFieldEnd.y * 2);
    const infieldRadius = firstBase.x - secondBase.x;

    // paths
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

    const diamond = ["M", leftFieldEnd.x, leftFieldEnd.y,
        "A", outfieldMinorAxis, outfieldMajorAxis, 0, 0, 1, rightFieldEnd.x, rightFieldEnd.y,
        "L", homePlate.x, homePlate.y,
        "L", leftFieldEnd.x, leftFieldEnd.y];

    const leftFieldFoul = ["M", leftFieldEnd.x, leftFieldEnd.y,
        "L", homePlate.x, homePlate.y,
        "L", homePlate.x, homePlate.y + (height * pitchersMoundRadiusToHeight * 1.5),
        "L", leftFieldEnd.x - (height * pitchersMoundRadiusToHeight * 1.5) + ((height * pitchersMoundRadiusToHeight * 1.5) / 2), leftFieldEnd.y + ((height * pitchersMoundRadiusToHeight * 1.5) / 1.8)];

    const rightFieldFoul = ["M", rightFieldEnd.x, rightFieldEnd.y,
        "L", homePlate.x, homePlate.y,
        "L", homePlate.x, homePlate.y + (height * pitchersMoundRadiusToHeight * 1.5),
        "L", rightFieldEnd.x + (height * pitchersMoundRadiusToHeight * 1.5) - ((height * pitchersMoundRadiusToHeight * 1.5) / 2), rightFieldEnd.y + ((height * pitchersMoundRadiusToHeight * 1.5) / 1.8)];

    return (
        <div style={{width:viewBoxWidth, height:viewBoxHeight}}>
            <svg viewBox={[origin.x, origin.y, viewBoxWidth, viewBoxHeight].join(" ")} >
                <line x1={homePlate.x} y1={homePlate.y} x2={homePlate.x} y2={homePlate.y + (height * pitchersMoundRadiusToHeight * 1.5)} stroke="green" strokeWidth={1}/>
                <path d={diamond.join(" ")} fill="green" strokeWidth={25} />
                <path d={infieldDirt.join(" ")} fill="orange" />
                <path d={infield.join(" ")} fill="green" />

                <circle cx={pitchersMound.x} cy={pitchersMound.y} r={height * pitchersMoundRadiusToHeight} fill={"orange"} />

                <circle cx={firstBase.x} cy={firstBase.y} r={height * pitchersMoundRadiusToHeight/1.5} fill={"orange"} />
                <path d={rightFieldFoul.join(" ")} fill="green" />
                <line x1={homePlate.x} y1={homePlate.y} x2={rightFieldStart.x} y2={rightFieldStart.y} stroke="orange" strokeWidth={height*baseSideToHeight*1.5} />

                <circle cx={secondBase.x} cy={secondBase.y} r={height * pitchersMoundRadiusToHeight/1.5} fill={"orange"} />

                <circle cx={thirdBase.x} cy={thirdBase.y} r={height * pitchersMoundRadiusToHeight/1.5} fill={"orange"} />
                <path d={leftFieldFoul.join(" ")} fill="green" />
                <line x1={leftFieldStart.x} y1={leftFieldStart.y} x2={homePlate.x} y2={homePlate.y} stroke="orange" strokeWidth={height*baseSideToHeight*1.5} />

        
                <circle cx={homePlate.x} cy={homePlate.y} r={height * pitchersMoundRadiusToHeight/1.5} fill={"orange"} />

                <line x1={leftFieldEnd.x} y1={leftFieldEnd.y} x2={homePlate.x} y2={homePlate.y} stroke="white" strokeWidth={1.5} />
                <line x1={rightFieldEnd.x} y1={rightFieldEnd.y} x2={homePlate.x} y2={homePlate.y} stroke="white" strokeWidth={1.5} />

                <polygon points={[firstBase.x, ",", firstBase.y - (height*baseSideToHeight), firstBase.x + (height*baseSideToHeight), ",", firstBase.y,
                                 firstBase.x, ",", firstBase.y + (height*baseSideToHeight), firstBase.x - (height*baseSideToHeight), ",", firstBase.y].join(" ")} 
                                 fill="white" />

                <polygon points={[secondBase.x, ",", secondBase.y - (height*baseSideToHeight), secondBase.x + (height*baseSideToHeight), ",", secondBase.y,
                                 secondBase.x, ",", secondBase.y + (height*baseSideToHeight), secondBase.x - (height*baseSideToHeight), ",", secondBase.y].join(" ")} 
                                 fill="white" />

                <polygon points={[thirdBase.x, ",",thirdBase.y - (height*baseSideToHeight), thirdBase.x + (height*baseSideToHeight), ",", thirdBase.y,
                                 thirdBase.x, ",",thirdBase.y + (height*baseSideToHeight), thirdBase.x - (height*baseSideToHeight), ",", thirdBase.y].join(" ")} 
                                 fill="white" />

                <polygon points={[pitchersMound.x+((width*pitchersMoundBaseWidthToWidth)/2), ",", pitchersMound.y-(height*pitchersMoundBaseHeightToHeight/2),
                                  pitchersMound.x+(width*pitchersMoundBaseWidthToWidth/2), ",", pitchersMound.y+(height*pitchersMoundBaseHeightToHeight/2),
                                  pitchersMound.x-(width*pitchersMoundBaseWidthToWidth/2), ",", pitchersMound.y+(height*pitchersMoundBaseHeightToHeight/2),
                                  pitchersMound.x-(width*pitchersMoundBaseWidthToWidth/2), ",", pitchersMound.y-(height*pitchersMoundBaseHeightToHeight/2)].join(" ")}
                                  fill="white" />
                
                 <polygon points={[homePlate.x - (height*baseSideToHeight), ",", homePlate.y - 2 * (height*baseSideToHeight),
                                   homePlate.x + (height*baseSideToHeight), ",", homePlate.y - 2 * (height*baseSideToHeight),
                                   homePlate.x + (height*baseSideToHeight), ",", homePlate.y - (height*baseSideToHeight),
                                   homePlate.x, ",", homePlate.y , 
                                   homePlate.x - (height*baseSideToHeight), ",", homePlate.y - (height*baseSideToHeight)].join(" ")} 
                                   fill="white" />

               
 
            </svg>
        </div>
    );
}

export default simpleBaseballField;