import React from 'react'
import Chart from 'react-apexcharts'
import useDarkMode from '@/hooks/useDarkMode'
import { ApexOptions } from 'apexcharts'


interface DonutChart2Props {
  height?: number
  colors?: string[]
}

const DonutChart2: React.FC<DonutChart2Props> = ({ height = 200, colors = ['#0CE7FA', '#E2F6FD'] }) => {
  const [isDark] = useDarkMode()

  const series: number[] = [70, 30]

  const options: ApexOptions = {
    labels: ['Complete', 'Left'],
    dataLabels: {
      enabled: false
    },

    colors: [...colors],
    legend: {
      position: 'bottom',
      fontSize: '12px',
      fontFamily: 'Outfit',
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
              fontFamily: 'Inter'
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Outfit',
              color: isDark ? '#cbd5e1' : '#0f172a',
              formatter(val: any) {
                return `${parseInt(val)}%`
              }
            },
            total: {
              show: true,
              fontSize: '10px',
              label: '',
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
      <Chart options={options} series={series} type='donut' height={height} />
    </div>
  )
}

export default DonutChart2
