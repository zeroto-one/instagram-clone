async function getUsers() {
  let url = "https://dummyapi.io/data/v1/post?limit=30";
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "app-id": "61fd6240d2d8d10e874ad18e",
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let container = document.querySelector(".post-wrapper");
  let htmlData = "";
  console.log(users);

  //   For displaying users posts
  for (let i = 0; i < 10; i++) {
    let data = `
   <article class="post-container">
  <div class="post-header">
    <div class="userInfo flex">
      <img
        class="avatar"
        src="${users.data[i].owner.picture}"
        alt="user avatar"
      />
      <p class="username">${users.data[i].owner.firstName}</p>
    </div>
    <div class="post-options">
      <i class="fas fa-ellipsis-h"></i>
    </div>
  </div>
  <div class="post-img">
    <img src="${users.data[i].image}" alt="" />
  </div>
  <div class="post-body">
    <div class="post-stats">
      <i class="far fa-heart"></i>
      <i class="far fa-comment"></i>
      <i class="far fa-paper-plane"></i>
      <i class="far fa-bookmark"></i>
    </div>

    <div class="post-info">
      <p class="likes">${users.data[i].likes} likes</p>
      <p class="desc">
        <span class="username"> ${users.data[i].owner.firstName}</span>
        ${users.data[i].text}
      </p>
      <p class="comments">View all comments</p>
      <p class="time">${users.data[i].publishDate.split("T")[0]}</p>
    </div>
  </div>
  <div class="postComment">
    <p><i class="far fa-smile"></i></p>
    <input type="text" placeholder="Comment" />
    <input type="button" name="post" value="Post" />
  </div>
</article>`;

    htmlData += data;
  }
  container.innerHTML = htmlData;
}

renderUsers();
