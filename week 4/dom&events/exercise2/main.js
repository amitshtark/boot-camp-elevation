
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}


const resultBox = document.getElementById("resultBox");

const checkReservation = function(){
    const name = document.getElementById("nameInput").value;
    if(!reservations[name])
        resultBox.textContent = "You have no reservation";
    else{
        const claimed = reservations[name].claimed;
        if(!claimed)
            resultBox.textContent = `Welcome, ${name}`;
        else
            resultBox.textContent = "Hmm, someone already claimed this reservation";
    }
}