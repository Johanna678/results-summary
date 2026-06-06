fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.querySelector('.results-list');
    list.innerHTML = '';

    data.forEach(item => {
      const li = document.createElement('li');
      li.className = `result-item ${item.category.toLowerCase()}`;
      li.innerHTML = `
        <span class="result-label">
          <img src="${item.icon}" alt="${item.category} icon" width="20" height="20">
          ${item.category}
        </span>
        <span class="result-score"><strong>${item.score}</strong> / 100</span>
      `;
      list.appendChild(li);
    });

    const total = data.reduce((sum, item) => sum + item.score, 0);
    const average = Math.round(total / data.length);
    document.querySelector('.score-number').textContent = average;
  })
  .catch(error => console.error('Error loading data:', error));

document.querySelector('.continue-button').addEventListener('click', () => {
  alert('Thanks for viewing your results! You can now proceed to the next step.');
});
