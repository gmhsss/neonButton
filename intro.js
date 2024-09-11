document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents default anchor behavior
        window.location.href = 'https://bentofolio-five.vercel.app';
    });
});
