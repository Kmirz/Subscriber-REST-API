let subscriberListFull = [];

const queryAll = async () => {
  let subscriberList = document.querySelector("#subscriberList");
  subscriberList.innerHTML = "";
  const request = await fetch("http://localhost:3000/subscribers")
    .then((res) => res.json())
    .then((res) => listSubscribers(res));
};

const listSubscribers = (res) => {
  console.log(res);

  res.forEach((element) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.value = element._id;
    btn.classList.add("deleteSubscriber");
    li.appendChild(document.createTextNode(element.name));
    li.appendChild(btn);
    subscriberList.appendChild(li);
    subscriberListFull = res;
  });
};

const addSubscriber = async () => {
  console.log("clicked");
  let subscriberName = document.querySelector("#SubscriberName").value;

  let userInput = {
    name: subscriberName,
    subscribedToChannel: "test",
  };

  console.log(JSON.stringify(userInput));

  let subscriberInfo = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  };

  const request = await fetch(
    "http://localhost:3000/subscribers",
    subscriberInfo
  ).catch((err) => console.log(err));

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

  let fetchURL = "http://localhost:3000/subscribers/" + String(subscriberID);

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
