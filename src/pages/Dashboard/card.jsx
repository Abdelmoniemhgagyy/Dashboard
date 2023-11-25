import React from 'react'
import { Paper, Stack,Typography , Box} from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import { useTheme } from '@mui/material/styles';
function Card({icon,count,title,increase,data,scheme}) {
  const theme = useTheme();
  return (
    <Paper sx={{minWidth:"300px",display:"flex",justifyContent:"space-between",padding:"4px 5px",flexGrow: 1}} >
          <Stack direction={"column"} sx={{lineHeight:"1.8", textAlign:"center",padding:"5px"}}>
          <Box>{icon} </Box>  
            <Typography  variant="p" >
               {count}
            </Typography>
            <Typography variant="p" >
                {title}
            </Typography>

          </Stack>
          <Stack direction={"column"} alignItems={"Center"} gap={.5}>
           <Box height={"80px"} width={"80px"} >
           <ResponsivePie
              data={data}
              margin={{ top: 30, right: 80, bottom: 30, left: 80 }}
              innerRadius={0.6}
              padAngle={0.7}
              cornerRadius={3}
              enableArcLabels={false}
              enableArcLinkLabels={false}
              colors={{ scheme: scheme }}
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
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
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
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
       
    />
           </Box>
            
            <Typography variant="p" >
               {increase}
            </Typography>
          </Stack>

         </Paper>
  )
}

export default Card