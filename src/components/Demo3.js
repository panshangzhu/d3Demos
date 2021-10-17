import React, { useEffect, useState, useRef, Fragment } from "react";
import "./Demo.css";
import * as d3 from "d3";

export default function Demo3() {
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
      .scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, svgWidth])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)+5])
      .range([svgHeight, 0]).nice();

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    const yAxis = d3.axisRight(yScale);

    const colorScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range(["green", "red"]);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${svgWidth}px)`)
      .call(xAxis);
    svg
      .select(".y-axis")
      .style("transform", `translateX(${svgHeight}px)`)
      .call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -300)
      .attr("transform", "scale(1, -1)")
      .attr("width", xScale.bandwidth())
      .attr("height", (value) => svgHeight - yScale(value))
      .attr("fill", colorScale);
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
