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
              grid:{
                color:(context)=>{
                  if(index==="y"){
                  if(context.tick.value=== 70){
                    return "#6500D3"
                  }
                  if(context.tick.value=== 30){
                    return "#FF3C00"
                  }
                }
                },
                lineWidth:2,
              },
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