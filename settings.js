document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profile-form');
    const passwordForm = document.getElementById('password-form');
    const notificationsForm = document.getElementById('notifications-form');

    // Load settings from localStorage on page load
    loadSettings();

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Save profile settings to localStorage
        localStorage.setItem('profileName', name);
        localStorage.setItem('profileEmail', email);
        localStorage.setItem('profilePhone', phone);

        console.log('Profile updated:', { name, email, phone });

        alert('Profile updated successfully!');
    });

    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('New passwords do not match!');
            return;
        }

        // For demonstration purposes, password is not actually saved to localStorage.
        console.log('Password change requested:', { currentPassword, newPassword });

        alert('Password changed successfully!');
        passwordForm.reset();
    });

    notificationsForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailNotifications = document.getElementById('email-notifications').checked;
        const smsNotifications = document.getElementById('sms-notifications').checked;

        // Save notification preferences to localStorage
        localStorage.setItem('emailNotifications', emailNotifications);
        localStorage.setItem('smsNotifications', smsNotifications);

        console.log('Notification preferences updated:', { emailNotifications, smsNotifications });

        alert('Notification preferences updated successfully!');
    });

    function loadSettings() {
        const name = localStorage.getItem('profileName') || 'Michael';
        const email = localStorage.getItem('profileEmail') || 'michael@example.com';
        const phone = localStorage.getItem('profilePhone') || '+1234567890';
        const emailNotifications = JSON.parse(localStorage.getItem('emailNotifications')) ?? true;
        const smsNotifications = JSON.parse(localStorage.getItem('smsNotifications')) ?? false;

        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('phone').value = phone;
        document.getElementById('email-notifications').checked = emailNotifications;
        document.getElementById('sms-notifications').checked = smsNotifications;
    }
});
