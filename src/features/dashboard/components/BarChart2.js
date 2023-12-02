import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = ['Завршени', 'Во прогрес', 'Откажани'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'случаи',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: ['rgba(35, 181, 211)', 'rgba(255, 125, 0)', 'rgba(199, 199, 195)'],
          },
        ],
      };

    return(
      <TitleCard title={"Интеграциски процеси"}>
            <Bar options={options} data={data} />
      </TitleCard>

    )
}


export default BarChart