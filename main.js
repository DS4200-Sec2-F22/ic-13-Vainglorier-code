VIS_HEIGHT = 500;
VIS_WIDTH = 500;

const left_scg = d3.select("#left")
                    .append("svg")
                        .attr("height", VIS_HEIGHT)
                        .attr("width", VIS_WIDTH)
                        .attr("class", "frame");

d3.csv("data/city-hall.csv").then((data) => {
    data.array.forEach(element => {
        
    });
});