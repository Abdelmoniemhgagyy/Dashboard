import React from 'react'
// import data from "./data"
import { ResponsivePie } from '@nivo/pie'
import {Box,Typography}from '@mui/material';
import { useTheme } from '@emotion/react';


function Poe({isDashboard=false}) {
  const theme = useTheme()
  const data = [
    {
      "id": "sass",
      "label": "sass",
      "value": 160,
      "color": "hsl(67, 70%, 50%)"
    },
    {
      "id": "React",
      "label": "React",
      "value": 381,
      "color": "hsl(81, 70%, 50%)"
    },
    
    {
      "id": "goo",
      "label": "goo",
      "value": 150,
      "color": "hsl(254, 70%, 50%)"
    },
    
    {
      "id": "stylus",
      "label": "stylus",
      "value": 590,
      "color": "hsl(700, 70%, 50%)"
    },
    {
      "id": "rust",
      "label": "rust",
      "value": 451,
      "color": "hsl(357, 70%, 50%)"
    },
  
  ]
  
  return (
    <Box  sx={{height:isDashboard?"280px":"75vh"}}> 
       {isDashboard ? "" 
       :<Box margin={{left:"2px"}} mb="10px" >
       <Typography variant="h4" color={theme.palette.info.light}>Poe Chart</Typography>
     </Box>}
   <ResponsivePie
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
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor= {theme.palette.mode ==="dark" ? "#fff":"#000"}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: theme.palette.mode ==="dark" ? "#fff":"#000",
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: theme.palette.mode ==="dark" ? "#fff":"#000",
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            { 
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: isDashboard? 60 :100,
                itemHeight: 18,
                itemTextColor:theme.palette.mode ==="dark" ? "#fff":"#000",
                itemDirection: 'left-to-right',
                itemOpacity:1,
                symbolSize: isDashboard? 12 : 18 ,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: theme.palette.mode ==="dark" ? "#76ff03":"#2196f3",
                        }
                    }
                ]
            }
        ]}
    />
</Box>
  )
}

export default Poe