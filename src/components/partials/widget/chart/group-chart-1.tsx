import React from 'react';
import Chart from 'react-apexcharts';

interface ShapeLine {
  series: {
    data: number[];
  }[];
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan" | "zoom" | "selection";
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
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: ApexStroke['curve'];
      width: number;
    };
    colors: string[];
    tooltip: {
      theme: 'light' | 'dark';
    };
    grid: {
      show: boolean;
      padding: {
        left: number;
        right: number;
      };
    };
    yaxis: {
      show: boolean;
    };
    fill: {
      type: 'solid';
      opacity: number[];
    };
    legend: {
      show: boolean;
    };
    xaxis: {
      low: number;
      offsetX: number;
      offsetY: number;
      show: boolean;
      labels: {
        low: number;
        offsetX: number;
        show: boolean;
      };
      axisBorder: {
        low: number;
        offsetX: number;
        show: boolean;
      };
    };
  };
}

const shapeLine1: ShapeLine = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00EBFF"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine2: ShapeLine = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FB8F65"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine3: ShapeLine = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900]
    }
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: 'pan',
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
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    colors: ['#5743BE'],
    tooltip: {
      theme: 'light'
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      type: 'solid',
      opacity: [0.1]
    },
    legend: {
      show: false
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false
      }
    }
  }
}

const LineCharts: React.FC = () => {
  return (
    <div>
      <Chart options={shapeLine1.options} series={shapeLine1.series} type='line' height={100} />
      <Chart options={shapeLine2.options} series={shapeLine2.series} type='line' height={100} />
      <Chart options={shapeLine3.options} series={shapeLine3.series} type='line' height={100} />
    </div>
  )
}

export default LineCharts