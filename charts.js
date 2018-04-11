$(function(){
  var myChart = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Popularity of lobbying areas'
    },
    subtitle: {
        text: 'Source: <a href="http://ec.europa.eu/transparencyregister/public/homePage.do">EU Transparency Register</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No of businesses which lobby in this area'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Total Companies Lobbying: <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'LobbyingTypes',
        data: [
['Internal Market', 182],
['Environment', 166],
['Research and Technology', 164],
['Competition', 155],
['Enterprise', 145],
['Climate Action', 136],
['Information Society', 135],
['Energy', 134],
['Taxation', 130],
['Transport', 126],
['Consumer Affairs', 124],
['Trade', 119],
['Economic and Financial Affairs', 108],
['Financial Services and Capital Markets Union', 90],
['Employment and Social Affairs', 89],
['Public Health', 89],
['Financial Stability', 88],
['General and Institutional Affairs', 85],
['Trans-European Networks', 82],
['Justice and Fundamental Rights', 75],
['External Relations', 73],
['Communication', 69],
['Customs', 66],
['Development', 63],
['Culture', 60],
['Regional Policy', 59],
['Food Safety', 55],
['Home Affairs', 52],
['Education', 51],
['Audiovisual and Media', 50],
['Foreign and Security Policy and Defence', 46],
['Agriculture and Rural Development', 45],
['Sport', 45],
['Budget', 41],
['Youth', 39],
['Enlargement', 36],
['Fisheries and Aquaculture', 32],
['Humanitarian Aid', 27],
],
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '8px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
