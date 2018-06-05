var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function($scope) {
  $scope.optionOne = {
    chart: {
      type: 'parallelCoordinates',
      height: 450,
      // width: 800,
      margin: {
        top: 30,
        right: 10,
        bottom: 10,
        left: 10
      },
      dimensions: [
        'Total Downstream Usage',
        'Total Upstream Usage',
        'Calibrated SNR',
        'Latency',
        'Altitude'
      ],
      dimensionNames: [
        'Total Downstream Usage',
        'Total Upstream Usage',
        'Calibrated SNR',
        'Latency',
        'Altitude'
      ]
    },
    title: {
      enable: true,
      text: 'Parallel Coordinates for Five Metrics'
    }
  };

  $scope.optionOneData = data();

  function data() {
    return [
      {
        'Total Downstream Usage': '13',
        'Total Upstream Usage': '8',
        'Calibrated SNR': '360',
        Latency: '175',
        Altitude: '3821'
      },
      {
        'Total Downstream Usage': '15',
        'Total Upstream Usage': '8',
        'Calibrated SNR': '390',
        Latency: '190',
        Altitude: '3850'
      },
      {
        'Total Downstream Usage': '17',
        'Total Upstream Usage': '8',
        'Calibrated SNR': '304',
        Latency: '150',
        Altitude: '3672'
      },
      {
        'Total Downstream Usage': '20.2',
        'Total Upstream Usage': '6',
        'Calibrated SNR': '232',
        Latency: '90',
        Altitude: '3265'
      },
      {
        'Total Downstream Usage': '18.1',
        'Total Upstream Usage': '6',
        'Calibrated SNR': '258',
        Latency: '120',
        Altitude: '3410'
      }
    ];
  }

  $scope.optionsTwo = {
    chart: {
      type: 'multiChart',
      height: 450,
      margin: { top: 30, right: 60, bottom: 50, left: 70 },
      color: d3.scale.category10().range(),
      duration: 500,
      xAxis: {
        dispatch: {},
        axisLabelDistance: 0,
        staggerLabels: false,
        rotateLabels: 0,
        rotateYLabel: true,
        showMaxMin: true,
        axisLabel: null,
        height: 60,
        ticks: null,
        width: 75,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        duration: 250,
        orient: 'bottom',
        tickValues: null,
        tickSubdivide: 0,
        tickSize: 6,
        tickPadding: 5,
        domain: [0, 1],
        range: [0, 1],
        tickFormat: function(d) {
          return d3.format(',f')(d);
        }
      },
      yAxis1: {
        dispatch: {},
        axisLabelDistance: 0,
        staggerLabels: false,
        rotateLabels: 0,
        rotateYLabel: true,
        showMaxMin: true,
        axisLabel: null,
        height: 60,
        ticks: null,
        width: 75,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        duration: 250,
        orient: 'left',
        tickValues: null,
        tickSubdivide: 0,
        tickSize: 6,
        tickPadding: 3,
        domain: [0, 1],
        range: [0, 1],
        tickFormat: function(d) {
          return d3.format(',f')(d);
        }
      },
      yAxis2: {
        dispatch: {},
        axisLabelDistance: 0,
        staggerLabels: false,
        rotateLabels: 0,
        rotateYLabel: true,
        showMaxMin: true,
        axisLabel: null,
        height: 60,
        ticks: null,
        width: 75,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        duration: 250,
        orient: 'right',
        tickValues: null,
        tickSubdivide: 0,
        tickSize: 6,
        tickPadding: 3,
        domain: [0, 1],
        range: [0, 1],
        tickFormat: function(d) {
          return d3.format(',f')(d);
        }
      },
      lines1: {
        dispatch: {},
        width: 960,
        height: 500,
        xDomain: null,
        yDomain: null,
        pointDomain: [0, 100],
        xRange: null,
        yRange: null,
        pointRange: null,
        forceX: [],
        forceY: [],
        forcePoint: [],
        interactive: true,
        padDataOuter: 0.1,
        padData: false,
        clipEdge: false,
        clipVoronoi: true,
        showVoronoi: false,
        id: 35732,
        interactiveUpdateDelay: 300,
        showLabels: false,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        duration: 250,
        useVoronoi: true,
        interpolate: 'linear'
      },
      lines2: {
        dispatch: {},
        width: 960,
        height: 500,
        xDomain: null,
        yDomain: null,
        pointDomain: [0, 100],
        xRange: null,
        yRange: null,
        pointRange: null,
        forceX: [],
        forceY: [],
        forcePoint: [],
        interactive: true,
        padDataOuter: 0.1,
        padData: false,
        clipEdge: false,
        clipVoronoi: true,
        showVoronoi: false,
        id: 35732,
        interactiveUpdateDelay: 300,
        showLabels: false,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        duration: 250,
        useVoronoi: true,
        interpolate: 'linear'
      }
    },
    title: {
      enable: true,
      text: 'Multi Chart with Two Y-Axis'
    }
  };

  $scope.dataTwo = generateData();

  function generateData() {
    var testdata = stream_layers(2, 10 + Math.random() * 100, 0.1).map(function(
      data,
      i
    ) {
      return {
        key: 'Series' + i,
        values: data.map(function(a) {
          // a.y = a.y * (i <= 1 ? -1 : 1);
          return a;
        })
      };
    });

    testdata[0].type = 'line';
    testdata[0].yAxis = 1;
    testdata[1].type = 'line';
    testdata[1].yAxis = 2;

    return testdata;
  }

  /* Inspired by Lee Byron's test data generator. */
  function stream_layers(n, m, o) {
    if (arguments.length < 3) o = 0;
    function bump(a) {
      var x = 1 / (0.1 + Math.random()),
        y = 2 * Math.random() - 0.5,
        z = 10 / (0.1 + Math.random());
      for (var i = 0; i < m; i++) {
        var w = (i / m - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    }
    return d3.range(n).map(function() {
      var a = [],
        i;
      for (i = 0; i < m; i++) a[i] = o + o * Math.random();
      for (i = 0; i < 5; i++) bump(a);
      return a.map(stream_index);
    });
  }

  function stream_index(d, i) {
    return { x: i, y: Math.max(0, d) };
  }

  $scope.optionsThree = {
    chart: {
      type: 'lineChart',
      height: 450,
      margin: {
        top: 20,
        right: 20,
        bottom: 40,
        left: 55
      },
      x: function(d) {
        return d.x;
      },
      y: function(d) {
        return d.y;
      },
      useInteractiveGuideline: true,
      dispatch: {
        stateChange: function(e) {
          console.log('stateChange');
        },
        changeState: function(e) {
          console.log('changeState');
        },
        tooltipShow: function(e) {
          console.log('tooltipShow');
        },
        tooltipHide: function(e) {
          console.log('tooltipHide');
        }
      },
      xAxis: {
        axisLabel: 'Time (ms)'
      },
      yAxis: {
        axisLabel: 'Usage (kbps)',
        tickFormat: function(d) {
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      },
      callback: function(chart) {
        console.log('!!! lineChart callback !!!');
      }
    },
    title: {
      enable: true,
      text: 'Multiple Line Chart for Same Metrics'
    }
  };

  $scope.dataThree = usageGen();

  /*Random Data Generator */
  function usageGen() {
    var maxDownUsage = [],
      maxUpUsage = [],
      avgDownUsage = [],
      avgUpUsage = [],
      minDownUsage = [],
      minUpUsage = [];

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
      maxDownUsage.push({ x: i, y: Math.sin(i / 10) });
      avgDownUsage.push({
        x: i,
        y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5
      });
      minDownUsage.push({
        x: i,
        y: 0.5 * Math.cos(i / 10 + 2) + Math.random() / 10
      });
      maxUpUsage.push({ x: i, y: Math.sin(i / 10) });
      avgUpUsage.push({
        x: i,
        y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5
      });
      minUpUsage.push({
        x: i,
        y: 0.5 * Math.cos(i / 10 + 2) + Math.random() / 10
      });
    }

    //Line chart data should be sent as an array of series objects.
    return [
      {
        values: maxDownUsage,
        key: 'Max Down Usage',
        color: '#ff7f0e',
        strokeWidth: 2,
        classed: 'dashed'
      },
      { values: avgDownUsage, key: 'Avg Down Usage', color: '#2ca02c' },
      {
        values: minDownUsage,
        key: 'Min Down Usage',
        color: '#7777ff',
        area: true
      },
      {
        values: maxUpUsage,
        key: 'Max Up Usage',
        color: '#ff7f0e',
        strokeWidth: 2,
        classed: 'dashed'
      },
      { values: avgUpUsage, key: 'Avg Up Usage', color: '#2ca02c' },
      {
        values: minUpUsage,
        key: 'Min Up Usage',
        color: '#7777ff',
        area: true
      }
    ];
  }
});
