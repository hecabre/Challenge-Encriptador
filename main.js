let counter = 0;
const writeMessage = () => {
    let e = encrypt(),
      t = document.getElementById("messages");
    cleanMessages(".content-message"),
      changeTitleEncrypt(),
      cleanMessages(".deEncrypted");
    let a = document.createElement("p");
    (a.textContent = e), (a.className = "encrypted"), t.appendChild(a);
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
    for (let a = 0; a < e.length; a++) {
      let n = e[a];
      switch (n) {
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
          t += n;
      }
    }
    return (counter += 1), t.replace(/\s+/g, "");
  },
  deEncrypt = () => {
    let e = document.getElementById("messages"),
      t = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" },
      a = "",
      n = document.getElementsByClassName("encrypted");
    for (let s = 0; s < n.length; s++) {
      let l = n[s].textContent,
        r = RegExp(Object.keys(t).join("|"), "g");
      (n[s].textContent = r), (a += l.replace(r, (e) => t[e]));
    }
    cleanMessages(".encrypted");
    let c = document.createElement("p");
    (c.textContent = a), e.appendChild(c), (c.className = "deEncrypted");
  };
