const App = () => {
    // if the user is not logged in, they will be directed to the login page
    // fetch whether the user is logged in or not from the local storage
    var loggedIn = localStorage.getItem("loggedIn");
    console.log(loggedIn)
    if (loggedIn === "true") {
        document.location.href = "/Landing";
    } else {
        document.location.href = "/Login";
    }

}

export default App;