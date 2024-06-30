 let scriptEnabled = true; // Global variable to control script enable/disable

  // Function to update numbers
  function updateStats() {
    if (!scriptEnabled) return; // Check if script is enabled

    let happyUsersElement = document.getElementById('happyUsers');
    let investedByUsersElement = document.getElementById('investedByUsers');
    let successfulOrdersElement = document.getElementById('successfulOrders');

    let happyUsersCount = parseInt(happyUsersElement.textContent);
    let investedByUsersCount = parseInt(investedByUsersElement.textContent.substr(1)); // Remove '₹' and parse
    let successfulOrdersCount = parseInt(successfulOrdersElement.textContent);

    // Update numbers
    happyUsersCount += 1;
    successfulOrdersCount += 9;
    investedByUsersCount += 8;

    // Update the DOM with new values
    happyUsersElement.textContent = happyUsersCount;
    successfulOrdersElement.textContent = successfulOrdersCount;
    investedByUsersElement.textContent = `₹${investedByUsersCount}`;

    // Store updated values in local storage to persist across page reloads
    localStorage.setItem('happyUsersCount', happyUsersCount);
    localStorage.setItem('investedByUsersCount', investedByUsersCount);
    localStorage.setItem('successfulOrdersCount', successfulOrdersCount);
  }

  // Function to initialize stats from local storage or default to 0
  function initializeStats() {
    let happyUsersElement = document.getElementById('happyUsers');
    let investedByUsersElement = document.getElementById('investedByUsers');
    let successfulOrdersElement = document.getElementById('successfulOrders');

    let happyUsersCount = parseInt(localStorage.getItem('happyUsersCount')) || 0;
    let investedByUsersCount = parseInt(localStorage.getItem('investedByUsersCount')) || 0;
    let successfulOrdersCount = parseInt(localStorage.getItem('successfulOrdersCount')) || 0;

    happyUsersElement.textContent = happyUsersCount;
    investedByUsersElement.textContent = `₹${investedByUsersCount}`;
    successfulOrdersElement.textContent = successfulOrdersCount;
  }

  // Function to reset stats to zero
  function restartStats() {
    let happyUsersElement = document.getElementById('happyUsers');
    let investedByUsersElement = document.getElementById('investedByUsers');
    let successfulOrdersElement = document.getElementById('successfulOrders');

    // Reset counts
    let happyUsersCount = 0;
    let investedByUsersCount = 0;
    let successfulOrdersCount = 0;

    // Update the DOM with new values
    happyUsersElement.textContent = happyUsersCount;
    investedByUsersElement.textContent = `₹${investedByUsersCount}`;
    successfulOrdersElement.textContent = successfulOrdersCount;

    // Update local storage
    localStorage.setItem('happyUsersCount', happyUsersCount);
    localStorage.setItem('investedByUsersCount', investedByUsersCount);
    localStorage.setItem('successfulOrdersCount', successfulOrdersCount);
  }

  // Initialize stats on page load
  document.addEventListener('DOMContentLoaded', function() {
    initializeStats();
    setInterval(updateStats, 1000); // Update every second
  });

  // Example of how to toggle script enable/disable
  function toggleScriptStatus() {
    scriptEnabled = !scriptEnabled;
    console.log(`Script is now ${scriptEnabled ? 'enabled' : 'disabled'}`);
  }