import React from "react";

import { ResponsiveChord } from "@nivo/chord";

const ChordChart = () => {
  const data = [
    [134, 154, 1698, 981, 622],
    [1731, 470, 430, 903, 1792],
    [371, 283, 1612, 237, 464],
    [689, 1831, 350, 67, 133],
    [299, 421, 337, 343, 409],
  ];

  return (
    <ResponsiveChord
      data={data}
      height={400}
      width={400}
      keys={["John", "Raoul", "Jane", "Marcel", "Ibrahim"]}
      margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
      valueFormat=".2f"
      padAngle={0.02}
      innerRadiusRatio={0.96}
      innerRadiusOffset={0.02}
      inactiveArcOpacity={0.25}
      arcBorderColor={{
        from: "color",
        modifiers: [["darker", 0.6]],
      }}
      activeRibbonOpacity={0.75}
      inactiveRibbonOpacity={0.25}
      ribbonBorderColor={{
        from: "color",
        modifiers: [["darker", 0.6]],
      }}
      labelRotation={-90}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
      colors={{ scheme: "nivo" }}
      motionConfig="stiff"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 70,
          itemWidth: 80,
          itemHeight: 14,
          itemsSpacing: 0,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default ChordChart;
