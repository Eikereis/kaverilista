const kaverit2 = []
function Kaverilista_V1() {
    let i = 0;
    const kaverit = [];
    while (i < 10) {
        let kaveri = prompt("Lisää kaveri");
        if (kaveri !== null && kaveri !== "") {
            kaverit.push(`${i + 1}. ${kaveri}`);
            i++;
            console.log(kaveri)
            console.log(kaverit)
        }
    }
    document.getElementById("demo").innerHTML = kaverit.join("<br>");
    
}

  function Kaverilista_V2() {
  document.getElementById("V2_list").innerHTML = kaverit2.join("<br>");
}

function v2_add() {
  let kaveri = document.getElementById("V2_input").value;
  if (kaveri !== "") {
      kaverit2.push(kaveri);
      document.getElementById("V2_input").value = "";
      Kaverilista_V2();
  }
}
    
function v2_delete() {
    let poista_nimi = document.getElementById("V2_input").value;
    let index = kaverit2.indexOf(poista_nimi);
    if (index !== -1) {
      kaverit2.splice(index, 1);
      document.getElementById("V2_input").value = "";
      Kaverilista_V2();
    }
}
function v2_sort() {
  kaverit2.sort();
  Kaverilista_V2();
}



  function v1() {
      var x = document.getElementById("Version1");
      var y = document.getElementById("Version2");
      if (x.style.display === "none") {
          x.style.display = "block";
      }
      y.style.display = "none";
  }

  function v2() {
      var x = document.getElementById("Version1");
      var y = document.getElementById("Version2");
      if (y.style.display === "none") {
          y.style.display = "block";
          x.style.display = "none";
      }
  }

  var y = document.getElementById("Version2");
  y.style.display = "none";
