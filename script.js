const all_users_section = document.getElementById("all_users_section");

const url = "https://dummyjson.com/users";

axios.get(url).then(({ data: { users } }) => {
  for (const user of users) {
    const section = document.createElement("section");
    section.classList.add(
      "user-section",
      "flex",
      "flex-column",
      "j-c-c",
      "a-i-c"
    );

    const image = document.createElement("img");
    image.src = user.image;
    image.alt = "img";
    image.title = "user";

    const h2 = document.createElement("h2");
    h2.innerHTML = `${user.firstName} ${user.lastName}`;

    const h3 = document.createElement("h3");
    h3.innerHTML = user.email;

    const h4 = document.createElement("h4");
    h4.innerHTML = user.address.address;

    const h5 = document.createElement("h5");
    h5.innerHTML = `${user.age} ${user.age > 1 ? "years" : "year"} old`;

    const button = document.createElement("button");
    button.classList.add("btn-delete");

    button.innerHTML = "Delete";

    button.addEventListener("click", () => {
      all_users_section.removeChild(section);
    });

    section.appendChild(image);
    section.appendChild(h2);
    section.appendChild(h3);
    section.appendChild(h4);
    section.appendChild(h5);
    section.appendChild(button);

    all_users_section.appendChild(section);
  }
});

//   .catch((err) => {
//     console.log(err);
//   });

// <!-- <section class="user-section flex flex-column j-c-c a-i-c">
//     <img src="https://dummyjson.com/icon/emilys/128" alt="img" title="user">
//     <h2>Name</h2>
//     <h3>email</h3>
//     <h4>address</h4>
//     <h5>28 years old</h5>
// </section>
