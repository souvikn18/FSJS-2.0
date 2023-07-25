const lang = document.getElementsByClassName("courses");
for (let i = 1; i <= lang.length; i++) {
    if (lang[i]%2!=0) {
        lang[i].remove();
    }
}
