import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { PopulationCount } from '../../types/main.types';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
);

interface PopulationChartProps {
  populationData: PopulationCount[];
}

export const PopulationChart: React.FC<PopulationChartProps> = ({
  populationData,
}) => {
  const chartData = {
    labels: populationData.map((data) => data.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map((data) => data.value),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <Box>
      <Typography variant="h6">Population Over Time</Typography>
      <Line data={chartData} />
    </Box>
  );
};
