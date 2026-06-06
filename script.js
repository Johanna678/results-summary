
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const categoriesList = document.querySelector('.categories');
    categoriesList.innerHTML = '';

    data.forEach(item => {
      const li = document.createElement('li');
      li.className = item.category.toLowerCase();
      li.innerHTML = `
        <div class="category-label">
          <img src="${item.icon}" alt="${item.category} icon">
          <span>${item.category}</span>
        </div>
        <span>${item.score} / 100</span>
      `;
      categoriesList.appendChild(li);
    });

   
    const total = data.reduce((sum, item) => sum + item.score, 0);
    const average = Math.round(total / data.length);

    document.querySelector('.number').textContent = average;
  })
  .catch(error => console.error('Error loading data:', error));
