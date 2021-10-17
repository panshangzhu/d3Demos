import React, { useEffect, useState, useRef, Fragment } from "react";
import "./Demo.css";
import * as d3 from "d3";

export default function Demo2() {
  const [data, setData] = useState([
    20,
    25,
    30,
    45,
    60,
    20,
    68,
    75,
    90,
    150,
    175,
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const svgHeight = 300;
    const svgWidth = 300;

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, svgWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([svgHeight, 0]);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    const yAxis = d3.axisRight(yScale);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${svgHeight}px)`)
      .call(xAxis);
    svg
      .select(".y-axis")
      .style("transform", `translateX(${svgWidth}px)`)
      .call(yAxis);

    const myLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(d3.curveCardinal);

    svg
      .selectAll(".line")
      // need to pass [] array as data to create a line
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  return (
    <Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </Fragment>
  );
}
