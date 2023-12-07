const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: '# of Votes',
            data: [205, 130, 145, 117, 183, 220],
            borderWidth: 1,


        }, {
            label: 'faturamento',
            data: [12253, 10495, 14739, 9184, 11596, 13831],
            borderWidth: 1
        }, {
           
            label: 'Hospedagens',
            data: [1, 2, 45, 7, 92, 2],
            borderWidth: 1,
        }]
    },
    options: {
        backgroundColor: '#7c2424',



    }
});
