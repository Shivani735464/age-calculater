function calculateAge() {
    var dob = document.getElementById('dob').value;
    if (dob === '') {
        alert('Please enter your Date of Birth');
        return;
    }

    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    var result = document.getElementById('result');
    result.innerText = "Your age is: " + age + " years.";
}
