const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email === "rider@habalgo.com" &&
        password === "HabalGo123!") {

        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("profileBox").classList.remove("hidden");

        document.getElementById("riderEmail").textContent = email;

    } else {
        message.textContent = "Invalid email or password!";
    }
});

function logout() {
    document.getElementById("profileBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");

    document.getElementById("loginForm").reset();
    document.getElementById("message").textContent = "";
}
