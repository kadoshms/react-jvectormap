import { MapContainer } from "./MapContainer";
import React from "react";
import { VectorMap } from "@react-jvectormap/core";

const codeBlockStyle = {
  background: "#000",
  color: "#fff",
  padding: "8px",
  width: 500,
  borderRadius: 4,
};

export const MapTemplate = (args) => {
  const { fileName, country, ...rest } = args;
  return (
    <div>
      <pre style={codeBlockStyle}>
        import {"{ "}
        {fileName}
        {" }"} from '{`@react-jvectormap/${country}`}';
      </pre>
      <MapContainer description={args.description}>
        <VectorMap {...rest} />
      </MapContainer>
    </div>
  );
};
