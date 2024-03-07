// *************************************
function toggleExpand() {
  document.querySelector(".footerExpand").classList.toggle("expand");
  let t = document.querySelector(".close").classList.toggle("pop");
  let model = document.querySelector(".model");
  let el = document.querySelector(".wrapper");
  model.classList.toggle("display");

  let delayFade = setTimeout(function () {
    el.classList.toggle("opacity");
  }, 500);

  if (!t) {
    clearTimeout(delayFade);
    el.classList.toggle("opacity");
  }
}

// *************************************
function toggleForm() {
  let box = document.querySelector(".wrapper");
  box.classList.toggle("active");
}

// *************************************
function loginSubmit(event) {
  event.preventDefault();
  let error = document.querySelector(".warning");
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  if (username.value === "gokunik" && password.value === "test123") {
    window.location.href = "homepage.html";
  } else {
    let error = document.querySelector(".warning");
    error.innerHTML = "Your credientials are wrong";
  }
}

// *****************************************
function registerSubmit(event) {
  event.preventDefault();

  let form = document.querySelector(".Rform");
  let error = document.querySelector("#error");
  let username = document.querySelector("#userN");
  let pass = document.querySelector("#pass");
  let cPass = document.querySelector("#cPass");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  while (error.firstChild) {
    error.removeChild(error.firstChild);
  }

  let usernameRegex = /^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

  if (!usernameRegex.test(username.value)) {
    p1.innerHTML = "Please enter a valid username";
    error.appendChild(p1);
  }
  if (pass.value !== cPass.value) {
    p2.innerHTML = "Your confirm password is not same";
    error.appendChild(p2);
    return;
  }

    window.location.href = "homepage.html";

}

/* *************************** */
tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "",
    },
  },
  fullScreen: {
    zIndex: 0,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 10,
          smooth: 50,
        },
      },
    },
    modes: {
      grab: {
        distance: 120,
      },
    },
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        h: {
          enable: true,
          speed: 20,
        },
      },
    },
    links: {
      color: {
        value: "#3B3B3B",
      },
      enable: true,
      opacity: 0.5,
    },
    move: {
      enable: true,
      path: {},
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      spin: {},
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
      animation: {},
    },
    size: {
      value: {
        min: 0.1,
        max: 2.5,
      },
      animation: {},
    },
  },
});
