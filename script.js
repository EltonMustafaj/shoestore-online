
const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'bar', 
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'], 
    datasets: [{
      label: 'Monthly Sales', 
      data: [1200, 1900, 3000, 5000, 2400], 
      backgroundColor: [
        '#2980b9', '#3498db', '#1abc9c', '#2ecc71', '#f1c40f' 
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
          font: { size: 16 }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Sales ($)',
          font: { size: 16 }
        },
        beginAtZero: true
      }
    }
  }
});


const logoutLink = document.getElementById('logout-link');

logoutLink.addEventListener('click', function (event) {
  event.preventDefault(); 
  alert('Kini dalur me sukses'); 
 
   window.location.href = 'login.html'; 
});
