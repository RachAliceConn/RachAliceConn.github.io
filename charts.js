Highcharts.chart('container', {
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


Highcharts.chart('test', {
  chart: {
    type: 'column'
  },
  title: {
    text: '20 UK companies with highest spend on EU lobbying'
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
      text: 'Lobbying spend'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'Lobbying Spend: <b>{point.y:.1f}</b>'
  },
  series: [{
    name: 'Big Spends',
    borderWidth: 1,

    data: [
      ['BP p.l.c. (BP)', 2750000],
      ['G Plus Ltd (GPLUS)', 2500000],
      ['British American Tobacco (BAT)', 2250000],
      ['Brunswick Group LLP', 2000000],
      ['Samsung Electronics Europe', 2000000],
      ['GlaxoSmithKline (GSK)', 1500000],
      ['FIPRA International Limited (FIPRA)', 1500000],
      ['HSBC Holdings PLC (HSBC)', 1500000],
      ['Diageo', 1500000],
      ['Barclays PLC', 1257307],
      ['Bank of America Merrill Lynch (BofAML)', 1250000],
      ['BT Group plc (BT)', 1000000],
      ['Landmark Public Policy Advisers Europe Ltd (Landmark Public Affa)', 1000000],
      ['INOVYN ChlorVinyls', 1000000],
      ['Instinctif Partners', 900000],
      ['Universal Music Group International (UMGI)', 900000],
      ['Rolls-Royce plc', 900000],
      ['Morgan Stanley (MS)', 800000],
      ['Standard Chartered Bank', 700000],
      ['The Royal Bank of Scotland (RBS)', 700000],
    ],

    dataLabels: {
      enabled: false,
      rotation: -90,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y:.1f}', // one decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
});

Highcharts.chart('grants', {
    chart: {
        type: 'column'
    },
    title: {
        text: '20 companies recieving highest EU grants'
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
            text: 'Total grants awarded'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Amount of grants recieved: <b>{point.y:.1f}</b>'
    },
    series: [{
        name: 'Grants',
        data: [
['NATS Ltd (NATS)', 100000000],
['Rolls-Royce plc', 13259688],
['Fiat Chrysler Automobiles (FCA)', 12649851],
['CNH Industrial', 6988681],
['NEC Europe (NEC)', 2787885],
['BT Group plc (BT)', 2015000],
['Arm Holdings', 2000000],
['GlaxoSmithKline (GSK)', 1672856],
['Tata Steel Europe (Tata Steel Europe)', 1568000],
['Samsung Electronics Europe', 1302155],
['Jaguar Land Rover Limited (JLR)', 1093000],
['M-Squared Lasers', 1025000],
['Granta Design Ltd', 768712],
['IQE plc (IQE)', 750000],
['BAE Systems', 610000],
['INTERNATIONAL SYNERGIES LIMITED (ISL)', 575000],
['Lloyds Register (LR)', 543787],
['Jisc', 513000],
['R U Robots Limited (RUR)', 465699],
['Sparta Technologies Ltd (Sparta)', 400000],
        ],
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});

Highcharts.chart('FTSE', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'FTSE-100 Lobbying Spend'
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
            text: 'Total EU Lobbying Spend'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Lobbying Spend: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'FTSE-100',
        data: [
            ['BP p.l.c. (BP)', 2750000],
['British American Tobacco (BAT)', 2250000],
['Diageo', 1500000],
['GlaxoSmithKline (GSK)', 1500000],
['HSBC Holdings PLC (HSBC)', 1500000],
['Barclays PLC', 1257307],
['BT Group plc (BT)', 1000000],
['Rolls-Royce plc', 900000],
['Standard Chartered Bank', 700000],
['AstraZeneca (AZ)', 600000],
['Aviva Plc (Aviva)', 500000],
['Prudential plc (Prudential)', 500000],
['Imperial Brands PLC (IMB)', 400000],
['Legal & General Group Plc (L&G)', 400000],
['London Stock Exchange Group (LSEG)', 400000],
['RELX Group', 400000],
['Standard Life Aberdeen plc (SLA)', 400000],
['Centrica plc', 300000],
['Coca-Cola European Partners (CCEP)', 300000],
['Lloyds Banking Group', 300000],
['Royal Mail Group (RMG)', 300000],
['Schroders plc', 300000],
['Sky plc (SKY)', 300000],
['Carnival Plc (none)', 200000],
['Smiths Group plc', 200000],
['BAE Systems', 100000],
['easyJet', 100000],
['GKN', 100000],
['Independent Television PLC (ITV)', 100000],
['InterContinental Hotels Group (IHG)', 100000],
['SSE plc (SSE)', 100000],
['Tesco plc (TESCO)', 100000],
['BHP Billiton (BHP Billiton)', 50000],
['International Airlines Group (IAG)', 50000],
['Kingfisher plc', 50000],
['Rio Tinto', 25000],
['Severn Trent Water (STW)', 25000],
['G4S plc (G4S)', 0]
        ],
        dataLabels: {
            enabled: false,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
