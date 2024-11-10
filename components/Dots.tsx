import React, { useState } from "react";
import { Canvas, Circle } from "@shopify/react-native-skia";
import { Dimensions, View, Button } from "react-native";

const { width, height } = Dimensions.get("window");
const dotSize = 4;
const spacing = 20;

const DotGrid = () => {
  const [zoomed, setZoomed] = useState(false);
  const scale = useValue(1);

  const toggleZoom = () => {
    setZoomed(!zoomed);
    runTiming(scale, zoomed ? 1 : 2, { duration: 300 }); // Scale up by 2 on zoom
  };

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        {Array.from({ length: Math.floor(width / spacing) }).map((_, x) =>
          Array.from({ length: Math.floor(height / spacing) }).map((_, y) => (
            <Circle
              key={`${x}-${y}`}
              cx={x * spacing}
              cy={y * spacing}
              r={dotSize / 2}
              color="#333"
              scale={scale} // Apply scale value for zoom
            />
          )),
        )}
      </Canvas>
      <Button title={zoomed ? "Zoom Out" : "Zoom In"} onPress={toggleZoom} />
    </View>
  );
};

export default DotGrid;
