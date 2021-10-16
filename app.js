// listen for submit 
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';

    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results 
function calculateResults(e){
    console.log('calculating....');
    // UI Vars 
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    //const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100;
    const calculatePayments = parseFloat(years.value) * 365;

    // Compute monthly payment 
    // const x = Math.pow(1 + calculateInterest, calculatePayments);
    //  const monthly = (principal*x*calculateInterest)/(x-1);

    if(calculatePayments > 0){
        totalPayment.value = (((principal * calculateInterest * calculatePayments) / 365) + principal).toFixed(2);
        totalInterest.value =((principal * calculateInterest * calculatePayments) / 365).toFixed(2);

         // Show results
         document.getElementById('results').style.display = 'block';

         // Hide loader
         document.getElementById('loading').style.display = 'none';

    }else{
        showError('Please check your numbers');
    }

}

// Show Error 
function showError(error){

  // Hide results
  document.getElementById('results').style.display = 'none';

  // Hide loader
  document.getElementById('loading').style.display = 'none';

    // Create div
    const errorDiv = document.createElement('div');

    // Get Elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class 
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div 
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}