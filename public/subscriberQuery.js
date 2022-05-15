let subscriberListFull = [];

const queryAll = async () => {
  let subscriberList = document.querySelector("#subscriberList");
  subscriberList.innerHTML = "";
  const request = await fetch("/subscribers")
    .then((res) => res.json())
    .then((res) => listSubscribers(res));
};

const listSubscribers = (res) => {
  console.log(res);

  res.forEach((element) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let icon = document.createElement("IMG");
    let innertext = document.createElement("div");

    //Subscriber Text
    innertext.classList.add(
      "col-md-6",
      "text-md-start",
      "text-center",
      "text-wrap"
    );

    innertext.innerHTML = `<p><strong>Username:</strong> ${
      element.name
    }</p><p><strong>Email: </strong>${
      element.email
    }</p><p><p><strong>Subscriber Since:</strong> ${element.subscribeDate.substring(
      0,
      10
    )}</p>`;

    //Delete Button
    btn.innerHTML = "Delete";
    btn.value = element._id;
    btn.style.maxWidth = "200px";
    btn.classList.add(
      "deleteSubscriber",
      "btn-danger",
      "btn",
      "btn-sm",
      "col-md",
      "col-3",
      "mx-auto"
    );

    //Picture
    icon.src = element.picture;
    icon.style.maxWidth = "200px";
    icon.classList.add(
      "img-thumbnail",
      "my-20",
      "col-md-3",
      "col-6",
      "mx-auto"
    );

    //List
    li.appendChild(icon);
    li.appendChild(innertext);
    li.appendChild(btn);
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "row"
    );

    subscriberList.appendChild(li);
    subscriberListFull = res;
  });
};

const addSubscriber = async () => {
  console.log("clicked");
  //Calling Random User API

  const userDataRequest = await fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((res) => {
      console.log(`the API result is:`, res.results[0]);
      return res.results[0];
    })
    .catch((err) => console.log(err));

  let subscriberName = document.querySelector("#SubscriberName").value;

  console.log(userDataRequest.email);

  let userInput = {
    name: subscriberName,
    subscribeDate: userDataRequest.registered.date,
    picture: userDataRequest.picture.large,
    email: userDataRequest.email,
  };

  console.log(JSON.stringify(userInput));

  let subscriberInfo = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  };

  const request = await fetch("/subscribers", subscriberInfo).catch((err) =>
    console.log(err)
  );

  document.querySelector("#SubscriberName").value = "";

  queryAll();
};

const deleteSubscriber = async (event) => {
  console.log("clicked");

  if (event.target.value == null || event.target.value == 0) {
    return console.log("Delete Button Not Clicked");
  }

  let subscriberID = event.target.value;

  console.log(subscriberID);

  let fetchURL = "/subscribers/" + String(subscriberID);

  let options = {
    method: "delete",
  };

  console.log(fetchURL);

  const request = await fetch(fetchURL, options).catch((err) =>
    console.log(err)
  );

  document.querySelector("#SubscriberName").value = "";

  queryAll();
};

queryAll();

document
  .querySelector("#addSubscriber")
  .addEventListener("click", addSubscriber);

document
  .querySelector("#subscriberList")
  .addEventListener("click", deleteSubscriber);
