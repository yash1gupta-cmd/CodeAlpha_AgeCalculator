function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    result.innerHTML = "";
    error.innerHTML = "";

    if (!dobInput) {
        error.innerHTML = "Please select your date of birth!";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        error.innerHTML = "Date of birth cannot be in the future!";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        You are <br><br>
        <strong>${years}</strong> Years 
        <strong>${months}</strong> Months 
        <strong>${days}</strong> Days old 🎉
    `;
}