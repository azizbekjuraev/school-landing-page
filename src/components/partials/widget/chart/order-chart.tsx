import React from 'react'
import Chart from 'react-apexcharts'
import { colors } from '@/constant/data'

interface OrderChartProps {
  className?: string
  barColor?: string
}

const OrderChart: React.FC<OrderChartProps> = ({
  className = 'bg-slate-50 dark:bg-slate-900 rounded pt-3 px-4',
  barColor = colors.warning
}) => {
  const series = [
    {
      name: 'Revenue',
      data: [40, 70, 45, 100, 75, 40, 80, 90]
    }
  ]
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '60px',
        barHeight: '100%'
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth', // Change to a valid option: "smooth", "straight", or "stepline"
      width: 2
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return '$ ' + val + 'k'
        }
      }
    },
    yaxis: {
      show: false
    },
    xaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    colors: [barColor], // Convert barColor to an array
    grid: {
      show: false
    }
  }
  return (
    <div className={className}>
      <div className='mb-[6px] text-sm text-slate-600 dark:text-slate-300'>Orders</div>
      <div className='mb-[6px] text-lg font-medium text-slate-900 dark:text-white'>123k</div>
      <div className='text-xs font-normal text-slate-600 dark:text-slate-300'>
        <span className='text-warning-500'>-60% </span>
        From last Week
      </div>
      <div className='mt-4'>
        <Chart type='bar' height={44} options={options} series={series} />
      </div>
    </div>
  )
}

export default OrderChart
