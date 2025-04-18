function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;

      db.collection("roles").doc(uid).get().then((doc) => {
        if (doc.exists) {
          const role = doc.data().role;

          if (role === "admin") {
            window.location.href = "admin.html";
          } else {
            window.location.href = "dashboard.html";
          }
        } else {
          alert("No role assigned.");
        }
      });
    })
    .catch((error) => {
      alert(error.message);
    });
}
