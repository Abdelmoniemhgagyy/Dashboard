import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import data from "./data"
import HeaderTitle from "../HeaderTitle"
export default function Bar({isDashboard=false}) {
    const theme = useTheme()
    
  return (
    <Box  sx={{height:isDashboard?"280px":"90vh"}}>
        {isDashboard ? "": < HeaderTitle title="Bar Chart"/>}
       <ResponsiveBar
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
                "fill": theme.palette.mode ==="dark" ? "#f50057":"#000",
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
      data={data}
      keys={[
          'France',
          'Spain',
          'Germany',
      ]}
      indexBy="year"
      margin={isDashboard?{ top: 40, right: 100, bottom: 30, left: 40 }:{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
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
          }
      ]}
      fill={[
          {
              match: {
                  id: 'fries'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'sandwich'
              },
              id: 'lines'
          }
      ]}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  1.6
              ]
          ]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? "" : 'Years',
          legendPosition: 'middle',
          legendOffset: 43,
          truncateTickAt: 0,
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDashboard ? "" :  'minimum Wage/month',
          legendPosition: 'middle',
          legendOffset: -55,
          truncateTickAt: 0
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  isDashboard?"opacity":'darker',
                  1.6
              ]
          ]
      }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection:'left-to-right',
              itemOpacity:  .85,
              symbolSize: 20,
          
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity:1,
                      
                      }
                  }
              ]
          }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
  />
    </Box>
  )
}
