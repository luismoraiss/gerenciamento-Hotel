const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Total Reservas',
            data: [205, 130, 145, 117, 183, 220],
            borderWidth: 1,


        }, {
            label: 'Faturamento',
            data: [12253, 10495, 14739, 9184, 11596, 13831],
            borderWidth: 1
        }, {
           
            label: 'Total P',
            data: [345, 210,196,150,248,562 ],
            borderWidth: 1,
        }]
    },
    options: {
        backgroundColor: '#7c2424',
       scales:{
        xAxes:[{
            gridLines:{
            display: false
            }
        }]
       }


    }
});
