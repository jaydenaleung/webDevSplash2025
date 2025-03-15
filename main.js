function say_a_secret() {
    ans = prompt("YOU ARE ENTERING INTO THE PREMISES OF THE ENGINEERING DEPTHS. DO YOU WISH TO PROCEED??? (yes/no)");
    if (ans == "yes" || ans == "Yes") {
        alert("Ok. Don't say I didn't warn you.");
        window.location.href = "https://www.youtube.com/watch?v=x31tDT-4fQw";
    } else {
        alert("Good choice. You are not ready for the secrets.");
    }
}