var BM=function(c,co,con){
  return{
    contents:c,
    color:co,
    condition:con
  }
}

var data=[
    BM("water","white","used"),
    BM("tea","black","sparkly"),
    BM("coke","white","new")
];

var table =d3.select(".box").append("table");
var rows=table.selectAll("tr")
              .data(data)
              .enter()
              .append("tr");

rows.append("td")
    .text(function(d){
      return d.contents
    });
rows.append("td")
    .text(function(d){
      return d.color
    });
rows.append("td")
    .text(function(d){
        return d.condition
    });
