window.onload = function() {
    const params = new URLSearchParams(window.location.search);

    document.getElementById('name').textContent = params.get('name');
    document.getElementById('firstname').textContent = params.get('firstname');
    document.getElementById('birthday').textContent = params.get('birthday');
    document.getElementById('address').textContent = params.get('address');
    document.getElementById('address').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(params.get('address'))}`;
    document.getElementById('email').textContent = params.get('email');
    document.getElementById('email').href = `mailto:${params.get('email')}`;
};
