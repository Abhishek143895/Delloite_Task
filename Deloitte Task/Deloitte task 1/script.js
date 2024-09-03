document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.response-checkbox');
    const submitBtn = document.getElementById('submitBtn');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
          
            const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
         
            submitBtn.disabled = !isAnyChecked;
        });
    });
});