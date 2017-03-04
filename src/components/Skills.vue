<template>
  <section id="skills">
    <h2>skills</h2>
    <p>This represents my skills that the bigger icons are better.</p>
    <div class="graph">
      <div id="skill"></div>
    </div>

  </section>

</template>

<script>
export default {
  name: 'Skills',
  methods: {
    init: function () {
      const logo = "M27.08,43c0.34-1.57,1.23-3.45,2.76-3.33a2.72,2.72,0,0,1,1.73,1.07C35,44.7,33.09,51,34.28,56.25a3.23,3.23,0,0,0,1,1.89,3.35,3.35,0,0,0,2.06.49L64.4,59a41.52,41.52,0,0,1,1.18-14.73,5.13,5.13,0,0,1,1-2.18c1.17-1.29,3.36-1,4.59.26A8,8,0,0,1,73,47.22a22.06,22.06,0,0,1-2.46,12.65,39.8,39.8,0,0,1,23,18.22,43.25,43.25,0,0,1,4.87,29.82A73.81,73.81,0,0,1,93,123.54c-1.26,2.8-2.63,5.66-4.93,7.6s-5.12,2.7-7.92,3.38c-19.66,4.79-40.77,5.78-59.63-1.76-3.88-1.55-7.74-3.53-10.56-6.73a27.53,27.53,0,0,1-4.56-7.92A64.26,64.26,0,0,1,.66,94.75c-0.08-6.77,1-13.81,4.7-19.36a43.65,43.65,0,0,1,6.32-7c3.84-3.69,7.93-7.55,13.08-9,1.64-.46,1.87,0,2.06-1.67,0.16-1.41-.48-3.31-0.56-4.76A37.41,37.41,0,0,1,27.08,43Z";

      // set the dimensions and margins of the graph
      const margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 960 - margin.top - margin.bottom,
            aspect = width / height;

      const svg = d3.select("#skill").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("viewBox", "0 0 " + (height + margin.top + margin.bottom) + " " + (height + margin.top + margin.bottom))
          .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
      
      const color = ["#1a1a1a","#247ba0", "#b2dbbf","#ff83a9","#ff1654"];

      const pack = d3.pack()
          .size([width, width])
          .padding(20);

      d3.csv("static/data/data.csv", function(d) {
        d.value = +d.value;
        if (d.value) return d;
      }, function(error, skills) {
        if (error) throw error;

        const root = d3.hierarchy({children: skills})
            .sum(function(d) { return d.value; })
            .each(function(d) {
              if (id = d.data.id) {
                var id;
                d.id = id;
                d.package = Math.ceil(d.value/2) - 1;
                d.class = id;
              }
            });

        let node = svg.selectAll(".node")
          .data(pack(root).leaves())
          .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

        let cnode = node.append("svg")
            .attr("width", function(d) { return d.r*2; })
            .attr("height", function(d) { return d.r*2; })
            .attr("viewBox", "0 0 98.62 98.62")
            .attr("x", function(d) { return d.r*(-1); })
            .attr("y", function(d) { return d.r*(-1); });

        cnode.append("path")
            .attr("id", function(d) { return d.id; })
            .attr("d", logo)
            .attr("transform", function(d) { return "translate(-0.66 -39.65)"; })
            .style("fill", function(d) { return color[d.package]; });

        cnode.append("clipPath")
            .attr("id", function(d) { return "clip-" + d.id; })
            .append("use")
            .attr("xlink:href", function(d) { return "#" + d.id; });

        cnode.append("text")
            .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
            .selectAll("tspan")
            .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
            .enter().append("tspan")
            .attr("x", "50%")
            .attr("y", "60%")
            .text(function(d) { return d; });

        cnode.append("title")
            .text(function(d) { return d.id; });
      });

      //resize
      d3.select(window)
        .on("resize", function() {
          const targetWidth = svg.node().getBoundingClientRect().width;
          svg.attr("width", targetWidth)
            .attr("height", targetWidth / aspect);
      });
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.init()
    })
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables';

#skills {
  #skill {
    max-width: $max-sm-width;
    width: 100%;
    margin: 0 auto;
  }
  svg {
    display: block;
    width: 100%;
    height: auto;
    text {
      font-size: 1.0rem;
      text-anchor: middle;
      fill: $body-color;
    }
  }
}
.graph {
  width: 100%;
  height: auto;
}
.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}

</style>
