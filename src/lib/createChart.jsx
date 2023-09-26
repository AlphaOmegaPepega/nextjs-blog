import Chart from 'chart.js/auto'
export default async function createChart(type,labels,data,colors,id,index){
new Chart(
    document.getElementById(id),
    {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Score',
            data: data,
            backgroundColor:colors,
            borderRadius:40,
       
            
          }
        ],
        
        
      }
      ,
      options: {
        maintainAspectRatio:false,
        responsive:true,
        indexAxis:index,
        aspectRation:0.2,
        scales: {
          
         
          
        
          x: {
          
           
              suggestedMin: 0,
              suggestedMax: 100,
          },
        
        },
        plugins: {
            legend: {
              display:false,
          
            }
        }
    }
    
    }
  );
}