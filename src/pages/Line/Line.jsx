import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import data from "./data"
import HeaderTitle from "../HeaderTitle"
function Line({isDashboard=false}) {
  const theme = useTheme()
  return (
    <Box  sx={{height: isDashboard ? "280px" : "90vh"}}>

                {isDashboard ? "": < HeaderTitle title="Line Chart"/>}

                <ResponsiveLine
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
                curve="catmullRom"
                        data={data}
                        margin={isDashboard?{ top: 0, right: 110, bottom: 50, left: 60 }: { top: 50, right: 70, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: true,
                            reverse: false
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend:isDashboard ? null :  'Transportation',
                            legendOffset: 45,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: isDashboard ? null : 'Count',
                            legendOffset: -50,
                            legendPosition: 'middle'
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />

    </Box>
  )
}

export default Line