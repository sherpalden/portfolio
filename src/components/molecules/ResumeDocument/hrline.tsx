import { View } from "@react-pdf/renderer";

const HrLine = ({ width, color, height }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: width,
        height: height,
      }}
    ></View>
  );
};

export default HrLine;
