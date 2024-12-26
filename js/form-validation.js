let userInfo = {};

function validateRegistration() {
    const login = document.getElementById("login").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    let isValid = true;

    if (!/^(?=.*[А-Яа-я])(?=.*\d)[А-Яа-я0-9]{4,10}$/.test(login)) {
        document.getElementById("loginError").textContent = "Логин должен состоять из 4-10 символов (русские буквы и цифры), содержать хотя бы одну русскую букву и хотя бы одну цифру";
        isValid = false;
    } else {
        document.getElementById("loginError").textContent = "";
    }

    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const minDate = new Date(1950, 1, 1);
    if (!birthDate || birthDateObj < minDate || birthDateObj > today) {
        document.getElementById("birthDateError").textContent = "Дата рождения должна быть между 1950 годом и текущей датой";
        isValid = false;
    } else {
        document.getElementById("birthDateError").textContent = "";
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Выберите пол";
        isValid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    if (isValid) {
        userInfo = {
            login,
            birthDate,
            gender
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        window.location.href = "description.html";
    }
}

document.getElementById("next1").addEventListener("click", validateRegistration);