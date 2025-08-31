    const sendBtn = document.getElementById('sendBtn');
    const phoneInput = document.getElementById('phone');

    sendBtn.addEventListener('click', () => {
        const phone = phoneInput.value.trim();
        const phonePattern = /^09\d{9}$/;
        if(phonePattern.test(phone)) {
            phoneInput.classList.remove('invalid');
            alert('کد تایید ارسال شد!');
            // Replace with real API call
            window.location.href = `verification.html?phone=${phone}`;
        } else {
            phoneInput.classList.add('invalid');
        }
    });