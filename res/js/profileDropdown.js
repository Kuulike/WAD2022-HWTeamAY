const headerElement = document.getElementsByTagName("header")[0];
const userinfoContainer = document.createElement("ul");
userinfoContainer.id = "userInfoBox";
userinfoContainer.style.display = "none";

const userNameText = document.createElement("li");
const userEmailText = document.createElement("li");
const logoutContainer = document.createElement("li");
const logoutLink = document.createElement("a");
logoutContainer.className = "navoption";
logoutLink.textContent = "log out";
logoutLink.href = "login.html";

userNameText.innerText = "John Doe";
userEmailText.innerText = "john.doe@email.ee";

userinfoContainer.appendChild(userNameText);
userinfoContainer.appendChild(userEmailText);
userinfoContainer.appendChild(logoutContainer);
logoutContainer.appendChild(logoutLink);
headerElement.appendChild(userinfoContainer);

let logoPicture = document.getElementsByClassName("logo")[0].firstChild;

logoPicture.addEventListener('click', (MouseEvent) => {
    if (userinfoContainer.style.display != "none") {
        userinfoContainer.style.display = "none";
    } else {
        userinfoContainer.style.display = "block";
        userinfoContainer.style.top = headerElement.clientHeight + "px";
        userinfoContainer.style.left = headerElement.clientWidth - userinfoContainer.clientWidth - 5 + "px"
    };
});
