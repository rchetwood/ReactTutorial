import React from 'react';

const baseballField = (props) => {

    const xOrigin = 0;
    const yOrigin = 0;

    const height = props.height;
    const widthToHeightRatio = 1.1325;
    const width = height * widthToHeightRatio;

    const outfieldToHeightRatio = 0.46;

    // line 1
    const outfieldX1L1 = xOrigin;
    const outfieldY1L1 = height * outfieldToHeightRatio;

    const outfieldX2L1 = width / 2;
    const outfieldY2L1 = height;

    const outfieldPoint1L1 = { x: outfieldX1L1, y: outfieldY1L1 };
    const outfieldPoint2L1 = { x: outfieldX2L1, y: outfieldY2L1 };

    // line 2
    const outfieldX1L2 = width;
    const outfieldY1L2 = outfieldY1L1;


    const outfieldPoint1L2 = { x: outfieldX1L2, y: outfieldY1L2 };
    const outfieldPoint2L2 = outfieldPoint2L1;

    // infield arc

    // outfield arc
    const outfieldArc = ["M", outfieldX1L1, outfieldY1L1,
        "A", width, width * 2, 0, 0, 1, width, outfieldY1L1,
        "L", , height+5-(height * 0.37625)] 

    console.log(widthToHeightRatio);
    console.log(height);
    console.log(width);
    console.log(outfieldPoint1L1);
    console.log(outfieldPoint2L1);

    return (
        <svg width={width+100} height={height+100}>
                <svg width={width} height={height}>
                    
                    <g stroke="black" fill="white">
                        <path d={outfieldArc.join(" ")}
                        />
                    </g>
                </svg>
            <circle cx={200} cy={100} r={15} fill={"red"} />
        </svg>
    );
}

export default baseballField;