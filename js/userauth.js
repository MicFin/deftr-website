  // userApp
  UserApp.initialize({ appId: "577bfed9d3c7e" });

  function signup() {
  UserApp.User.save({
    login: document.getElementById("email").value,
    first_name: document.getElementById("firstname").value,
    last_name: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  }, function(error, user) {
    if (error) {
      alert("Error: " + error.message);
    } else {
      window.location.assign("app.html");
    }
  });
  
  return false;
}

  UserApp.initialize({ appId: "577bfed9d3c7e" });

  function login() {
  UserApp.User.login({
    login: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value
  }, function(error, result) {
    if (error) {
      alert("Error: " + error.message);
    } else {
      // The user is logged in. Now get the user...
      UserApp.User.get({ user_id: "self" }, function(error, user) {
        if (error) {
          alert("Error: " + error.message);
        } else {
          window.location.assign("app.html");
        }
      });
    }
  });
}