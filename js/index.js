document.querySelector("#github-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = e.target.search.value;
  console.log(`name: ${name}`);
  let data = await get(name);
  console.log(data);
  let li = document.createElement("li");
  li.innerText = data.login;
  console.log(li.innerText);
  document.querySelector("#user-list").appendChild(li);
});
//   response.json();
//   console.log(e.target.search.value);

async function get(query) {
  let response = await fetch(`https://api.github.com/users/${query}`, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  return await response.json();
}
