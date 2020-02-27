postToGoogle();

function postToGoogle() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeso1Pf1InsbCqTHM78hCftoAX5X_BoEePJCUSeUTuM-HvrxQ/formResponse?",
        data: { "entry.1801761018": name, "entry.1618506104": email, "entry.1573131062": message},
        type: "POST",
        dataType: "xml",
        success: function (res) {
            console.log(res);
        }
    });
    return false;
}
function downloadCV(){
    location.replace("https://drive.google.com/u/0/uc?id=1k3auWq_pfjwpQPTRI6qYQp5ZuwlLpGx7&export=download");
}