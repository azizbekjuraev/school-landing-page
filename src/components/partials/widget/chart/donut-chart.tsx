import React from 'react'
import Chart from 'react-apexcharts'
import useDarkMode from '@/hooks/useDarkMode'
import { colors } from '@/constant/data'
import { ApexOptions } from 'apexcharts'

interface DonutChartProps {
  height?: number
}

const DonutChart: React.FC<DonutChartProps> = ({ height = 113 }) => {
  const [isDark] = useDarkMode()

  function colorOpacity(color: string, opacity: number): string {
    // coerce values so it is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
    return color + _opacity.toString(16).toUpperCase()
  }

  const series: number[] = [70, 30]

  const options: ApexOptions = {
    labels: ['Complete', 'Left'],
    dataLabels: {
      enabled: false
    },

    colors: [colors.info, colorOpacity(colors.info, 0.16)],
    legend: {
      position: 'bottom',
      fontSize: '12px',
      fontFamily: 'Inter',
      fontWeight: 400,
      show: false
    },

    plotOptions: {
      pie: {
        donut: {
          size: '40%',
          labels: {
            show: true,
            name: {
              show: false,
              fontSize: '14px',
              fontWeight: 'bold',
              fontFamily: 'Inter',
              color: isDark ? '#cbd5e1' : '#475569'
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Inter',
              color: isDark ? '#cbd5e1' : '#475569',
              formatter(val: any) {
                // eslint-disable-next-line radix
                return `${parseInt(val)}%`
              }
            },
            total: {
              show: true,
              fontSize: '10px',
              label: '',
              color: isDark ? '#cbd5e1' : '#475569',
              formatter() {
                return '70'
              }
            }
          }
        }
      }
    }
  }

  return (
    <div>
      <Chart options={options} series={series} type='pie' height={height} />
    </div>
  )
}

export default DonutChart
