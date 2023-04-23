let counter = 0;
const writeMessage = () => {
    let e = encrypt(),
      t = document.getElementById("messages");
    cleanMessages(".content-message"),
      changeTitleEncrypt(),
      cleanMessages(".deEncrypted");
    let n = document.createElement("p");
    (n.textContent = e), (n.className = "encrypted"), t.appendChild(n);
  },
  changeTitleEncrypt = () => {
    document.getElementsByClassName(
      "message-header"
    )[0].textContent = `Mensajes encriptados: ${counter}`;
  },
  cleanMessages = (e) => {
    document.querySelectorAll(e).forEach((e) => {
      e.remove();
    });
  },
  encrypt = () => {
    let e = document.getElementById("text-encrypt").value,
      t = "";
    for (let n = 0; n < e.length; n++) {
      let a = e[n];
      switch (a) {
        case "a":
          t += "ai";
          break;
        case "e":
          t += "enter";
          break;
        case "i":
          t += "imes";
          break;
        case "o":
          t += "ober";
          break;
        case "u":
          t += "ufat";
          break;
        default:
          t += a;
      }
    }
    return (counter += 1), t.replace(/\s+/g, "");
  },
  deEncrypt = () => {
    debugger;
    let e = document.getElementById("messages"),
      t = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" },
      n = "",
      a = document.getElementsByClassName("encrypted");
    for (let s = 0; s < a.length; s++) {
      let r = a[s].textContent,
        l = RegExp(Object.keys(t).join("|"), "g");
        a[s].textContent = l
      n += r.replace(l, (e) => t[e]);
    }
    cleanMessages(".encrypted");
    let o = document.createElement("p");
    (o.textContent = n), e.appendChild(o), (o.className = "deEncrypted");
  };
