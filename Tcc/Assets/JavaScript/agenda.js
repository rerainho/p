document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const cliente = document.getElementById('cliente').value;
  const pet = document.getElementById('pet').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;

  if (cliente && pet && servico && data) {
      const table = document.getElementById('agendaTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();

      newRow.insertCell(0).textContent = new Date(data).toLocaleString();
      newRow.insertCell(1).textContent = cliente;
      newRow.insertCell(2).textContent = pet;
      newRow.insertCell(3).textContent = servico;
      newRow.insertCell(4).textContent = '';

      document.getElementById('appointmentForm').reset();
  }
});