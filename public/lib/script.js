 if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        }

        document.addEventListener('DOMContentLoaded', function () {
            var DEFAULT_CHARACTER_SET = "ABCDFGHIJKLMNOPQRSTUVWXYZabdfghijklmnopqrstuvwxyz1234567890";

            var UPDATED_CHARACTER_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890*!#$&_@%";
            var DEFAULT_LENGTH = 32;

            const masterPassword = document.getElementById('masterPassword');
            const servicePassword = document.getElementById('servicePassword');
            const result = document.getElementById('result');

            function hash() {
                let generatedPassword = "";
                var value1 = masterPassword.value;
                var value2 = servicePassword.value;
                var hashValue = sha3_512(value1 + sha3_512(value2));
                var rng = new Math.seedrandom(hashValue);
                for (var i = 0; i < DEFAULT_LENGTH; i++) {
                    generatedPassword += UPDATED_CHARACTER_SET[Math.floor(rng() * UPDATED_CHARACTER_SET.length)];
                }
                result.textContent = generatedPassword;
            }

            masterPassword.addEventListener('keyup', hash);
            servicePassword.addEventListener('keyup', hash);
        });