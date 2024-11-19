let form = document.getElementById("bookform");
let tbody = document.getElementById("tabledata");



form.addEventListener("submit", (elm) => {
    elm.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if (title  == '' && author == '') {
        alert("Moja kom loiya lekh")
        
    } else {

        let tr = document.createElement("tr");
        
        let td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.textContent = title;
        tbody.appendChild(tr);
        

        let td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.textContent = author;
        tbody.appendChild(tr);
    }
});