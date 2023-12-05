const checkin = document.getElementById('checkin');

checkin.addEventListener('change', (event) => {
  const selectedDate = event.target.value;
  console.log(`Data selecionada: ${selectedDate}`);
});
