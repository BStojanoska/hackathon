import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart(){
    const data = {
      labels: ['Вработени', 'Невработени', 'Ученици', 'Инвалиди'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5,],
          backgroundColor: [
            'rgba(36, 40, 171, 0.2)',
            'rgba(255, 125, 0, 0.2)',
            'rgba(199, 199, 195, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(36, 40, 171, 1)',
            'rgba(255, 125, 0, 1)',
            'rgba(199, 199, 195, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

  return(
    <TitleCard title={"Работен статус"}>
      <div style={{height:"25vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
        <Pie data={data} width={"50px"} height={"50px"} options={{ maintainAspectRatio: false }} />
      </div>
    </TitleCard>

  )
}

export default PieChart
