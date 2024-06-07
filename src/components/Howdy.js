

import HowdyHat from '../images/howdy.svg'

const exampleParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: -500,
        property: "translateY",
      },
    ],
  },
];

const plxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 40,
  color: "#fff",
  position: "relative",
  width: "100%",
  height:500,
  flexDirection: "column",
};

const wrapperStyles = {
  position: "relative",
  overflow: "hidden",
  endValue: 500,
  properties: [
    {
      startValue: 0,
      endValue: -450,
      property: "translateY",
    },
  ]
};




const Howdy = () => {
    return (
        <div>

        <div margin="30px" padding="40px" style={wrapperStyles}>
        <object className='hat' width="600px" margin="30px"  data={HowdyHat}/>
        </div>
        </div>
    )
}

export default Howdy