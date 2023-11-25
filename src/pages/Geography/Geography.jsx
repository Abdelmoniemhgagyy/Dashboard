import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import data from "./data"
import {geography} from "./geodata"
import HeaderTitle from "../HeaderTitle"

function Geography({isDashboard=false}) {
  const theme = useTheme()
  return (
    <>
    {isDashboard?"":< HeaderTitle title="Geography"/>}
     
     <Box  sx={{height:isDashboard ? "280px":"75vh",
    mt:2 , border:isDashboard?"":` 1px solid ${theme.palette.mode ==="dark" ? "#fff":"#000"}` , borderRadius:2,pb:1}}>
         
        

<ResponsiveChoropleth
theme={{
  "text": {
      "fontSize": 11,
      "fill": theme.palette.mode ==="dark" ? "#fff":"#000",
      "outlineWidth": 0,
      "outlineColor": "transparent"
  },
  "axis": {
      "domain": {
          "line": {
              "stroke": "#777777",
              "strokeWidth": 1
          }
      },
      "legend": {
          "text": {
              "fontSize": 12,
              "fill": theme.palette.mode ==="dark" ? "#fff":"#000",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "ticks": {
          "line": {
              "stroke": theme.palette.mode ==="dark" ? "#fff":"#000",
              "strokeWidth": 1
          },
          "text": {
              "fontSize": 11,
              "fill": theme.palette.mode ==="dark" ? "#f50057":"#000", //x and y axis
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "grid": {
      "line": {
          "stroke": "#dddddd",
          "strokeWidth": 1
      }
  },
  "legends": {
      "title": {
          "text": {
              "fontSize": 11,
              "fill": theme.palette.mode ==="dark" ? "#fff":"#000",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "text": {
          "fontSize": 11,
          "fill": theme.palette.mode ==="dark" ? "#18ffff":"#000",
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "ticks": {
          "line": {},
          "text": {
              "fontSize": 10,
              "fill": theme.palette.mode ==="dark" ? "#f50057":"#000",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "annotations": {
      "text": {
          "fontSize": 13,
          "fill": theme.palette.mode ==="dark" ? "#f50057":"#000",
          "outlineWidth": 2,
          "outlineColor": theme.palette.mode ==="dark" ? "#fff":"#000",
          "outlineOpacity": 1
      },
      "link": {
          "stroke":theme.palette.mode ==="dark" ? "#f50057":"#000",
          "strokeWidth": 1,
          "outlineWidth": 2,
          "outlineColor": theme.palette.mode ==="dark" ? "#fff":"#000",
          "outlineOpacity": 1
      },
      "outline": {
          "stroke": theme.palette.mode ==="dark" ? "#f50057":"#000",
          "strokeWidth": 2,
          "outlineWidth": 2,
          "outlineColor": theme.palette.mode ==="dark" ? "#fff":"#000",
          "outlineOpacity": 1
      },
      "symbol": {
          "fill": theme.palette.mode ==="dark" ? "#f50057":"#000",
          "outlineWidth": 2,
          "outlineColor": theme.palette.mode ==="dark" ? "#fff":"#000",
          "outlineOpacity": 1
      }
  },
  "tooltip": {
      "container": {
          "background":theme.palette.mode ==="dark" ? "#000":"#fff",
          "fontSize": 12
      },
      "basic": {},
      "chip": {},
      "table": {},
      "tableCell": {},
      "tableCellValue": {}
  }
}}
projectionScale={142}
        data={data}
        features={geography.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, .6 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={false}
        // graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={isDashboard?[]:[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: 0,
                itemsSpacing: 0,
                itemWidth:  94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                // itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: theme.palette.mode ==="dark" ? "#fff":"#000",
                            itemOpacity:1
                        }
                    }
                ]
            }
        ]}
    />




    </Box>
    </>
  
  )
}

export default Geography