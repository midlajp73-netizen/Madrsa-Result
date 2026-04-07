function getResult() {
  let roll = document.getElementById("roll").value;

  db.collection("results").doc(roll).get().then(doc => {
    if(doc.exists){
      let d = doc.data();
      document.getElementById("result").innerHTML =
        `<h3>${d.name}</h3>
         <p>Class: ${d.class}</p>
         <p>Mark: ${d.mark}</p>`;
    } else {
      document.getElementById("result").innerHTML = "Result Not Found";
    }
  });
}

function downloadPDF(){
  window.print(); // simple trick
}
