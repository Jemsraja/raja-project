
function toggleItems() {
    const moreItems = document.getElementById('moreItems');
    const toggleText = document.getElementById('toggleText');
  
    if (moreItems.style.display === 'flex') {
      moreItems.style.display = 'none';
      toggleText.textContent = 'Show more';
    } else {
      moreItems.style.display = 'flex';
      toggleText.textContent = 'Show less';
    }
  }
  
  
  
  
  
  