function next(){
    const seatSection = document.getElementById('seat-area');
    // console.log(seatSection.classList)
    seatSection.classList.add('hidden');
    const successMessageSection = document.getElementById('success-message');
    // console.log(successMessageSection.classList)
    successMessageSection.classList.remove('hidden');
}
function closeMsg(){
    const successMessageSection = document.getElementById('success-message');
    // console.log(successMessageSection.classList)
    successMessageSection.classList.add('hidden');
    const seatSection = document.getElementById('seat-area');
    // console.log(seatSection.classList)
    seatSection.classList.remove('hidden');
    
}