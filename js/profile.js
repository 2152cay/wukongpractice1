document.addEventListener('DOMContentLoaded', function () {
    const userLogin = document.getElementById('user-login');
    const userBirthdate = document.getElementById('user-birthdate');
    const userGender = document.getElementById('user-gender');
    const quizResult = document.getElementById('quiz-result');

    const userData = JSON.parse(localStorage.getItem('userInfo'));

    if (userData) {
        userLogin.textContent = userData.login || 'Не указано';
        userBirthdate.textContent = userData.birthDate || 'Не указано';
        userGender.textContent = userData.gender === 'М' ? 'Мужской' : 'Женский';
    } else {
        window.location.href = 'index.html';
    }

    const quizScore = localStorage.getItem('quizScore');
    quizResult.textContent = quizScore ? `${quizScore} баллов` : 'Тест не пройден';

    document.getElementById('logout').addEventListener('click', function () {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('quizScore');
        window.location.href = 'index.html';
    });
});