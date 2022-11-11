document.getElementById("btn1").addEventListener("click", function() {
    

    var tr=document.createElement("tr");
    var name=document.createElement("td");
    name.innerText=document.getElementById("a1").value;
    var surname=document.createElement("td");
    surname.innerText=document.getElementById("a2").value;
    var id=document.createElement("td");
    id.innerText=document.getElementById("a3").value;
    tr.append(name);
    tr.append(surname);
    tr.append(id);

    document.querySelector("tbody").append(tr)

  });