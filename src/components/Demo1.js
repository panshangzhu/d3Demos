import React, { useEffect, useState, useRef, Fragment } from "react";
import "./Demo.css";
import * as d3 from "d3";

export default function Demo1() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join((enter) => enter.append("circle"))
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("fill", "blue");
  }, [data]);

  return (
    <Fragment>
      <svg ref={svgRef}></svg>
    </Fragment>
  );
}
