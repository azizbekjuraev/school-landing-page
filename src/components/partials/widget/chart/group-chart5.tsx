import React from 'react'
import Chart from 'react-apexcharts'
import { colors } from '@/constant/data'

interface ColumnChartHomeProps {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      toolbar: {
        show: boolean;
      };
      offsetX: number;
      offsetY: number;
      zoom: {
        enabled: boolean;
      };
      sparkline: {
        enabled: boolean;
      };
    };
    plotOptions: {
      bar: {
        columnWidth: string;
        barHeight: string;
      };
    };
    legend: {
      show: boolean;
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: 'smooth';
      width: string;
    };
    fill: {
      opacity: number;
    };
    tooltip: {
      y: {
        formatter(val: number): string {
          return `$ ${val}k`;
        };
      };
    },
    yaxis: {
      show: boolean;
    },
    xaxis: {
      show: boolean;
      labels: {
        show: boolean;
      },
      axisBorder: {
        show: boolean;
      };
      axisTicks: {
        show: boolean;
      };
    };
    colors: string[];
    grid: {
      show: boolean;
    };
  };
}

const columnCharthome2 = {
  series: [
    {
      name: 'Revenue',
      data: [40, 70, 45, 100, 75, 40, 80, 90]
    }
  ],
  options: {
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
      curve: 'smooth',
      width: 2
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: (val: number) => {
          return `$ ${val}k`
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
    colors: [colors.warning],
    grid: {
      show: false
    }
  }
}

const columnCharthome3 = {
  series: [
    {
      name: 'Revenue',
      data: [40, 70, 45, 100, 75, 40, 80, 90]
    }
  ],
  options: {
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
      curve: 'smooth',
      width: 2
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: (val: number) => {
          return `$ ${val}k`
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
    colors: [colors.info],
    grid: {
      show: false
    }
  }
}

const columnCharthome4 = {
  series: [
    {
      name: 'Revenue',
      data: [40, 70, 45, 100, 75, 40, 80, 90]
    }
  ],
  options: {
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
      curve: 'smooth',
      width: 2
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: (val: number) => {
          return `$ ${val}k`
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
    colors: [colors.warning],
    grid: {
      show: false
    }
  }
}

const ColumnCharts: React.FC = () => {
  return (
    <>
      <Chart type='bar' height={350} series={columnCharthome2.series} options={columnCharthome2.options} />
      <Chart type='bar' height={350} series={columnCharthome3.series} options={columnCharthome3.options} />
      <Chart type='bar' height={350} series={columnCharthome4.series} options={columnCharthome4.options} />
    </>
  )
}

export default ColumnCharts
