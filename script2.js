   const form = document.getElementById('loginForm');
   const error = document.getElementById('error');

   form.addEventListener('submit', function (event) {
       event.preventDefault();          // ez állítja meg az újratöltést
       error.textContent = '';

       const email = form.email.value.trim();
       const password = form.password.value;

       if (password.length < 6 || password.length > 16 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+]/.test(password)) {
           error.textContent = 'A jelszónak 6-16 karakter hosszúnak kell lennie, és tartalmaznia kell betűket, számokat és speciális karaktereket.';
           return;
       }

       // itt jön a tényleges ellenőrzés (localStorage / szerver)
       // ha hibás: error.textContent = 'Hibás email vagy jelszó!'; return;

       window.location.href = 'index.html'; // siker esetén
   });