console.log("JS Loaded")

document.getElementById("validateBtn").addEventListener("click", validateCard);

function validateCard() {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardHolder = document.getElementById("cardHolder").value.trim();
    const month = document.getElementById("month").value.trim();
    const year = document.getElementById("year").value.trim();
    const cv = document.getElementById("cv").value.trim();
    const message = document.getElementById("message");

    message.className = "message";

    // Must be exactly 16 digits
    if (!/^\d{16}$/.test(cardNumber)) {
        message.textContent = "Card number must be exactly 16 digits.";
        message.classList.add("error");
        return;
    }

    // Must match expected value exactly
    if (cardNumber !== "1234123412341234") {
        message.textContent = "Invalid card number.";
        message.classList.add("error");
        return;
    }

    // Validate month and year format
    if (!/^\d{2}$/.test(month) || !/^\d{2}$/.test(year)) {
        message.textContent = "Expiration must be in MM / YY format.";
        message.classList.add("error");
        return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // last 2 digits
    const currentMonth = currentDate.getMonth() + 1;

    const expMonth = parseInt(month);
    const expYear = parseInt(year);

    if (
        expMonth < 1 || 
        expMonth > 12 || 
        expYear < currentYear || 
        (expYear === currentYear && expMonth < currentMonth)
    ) {
        message.textContent = "Card is expired.";
        message.classList.add("error");
        return;
    }

    // CV must be exactly 3 digits
    if (!/^\d{3}$/.test(cv)) {
        message.textContent = "CV must be exactly 3 digits.";
        message.classList.add("error");
        return;
    }

    if (cardHolder.length === 0) {
        message.textContent = "Card holder name required.";
        message.classList.add("error");
        return;
    }

    message.textContent = "Card validated successfully!";
    message.classList.add("success");
}