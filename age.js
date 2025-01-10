let Age=()=> {
    let dob = document.getElementById('dob').value;
    let dobDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    let monthDiff = today.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById('agee').innerText = `You are ${age} years ${monthDiff}  month old.`;
}
