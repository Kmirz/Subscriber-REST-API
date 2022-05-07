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
    li.id = element._id;
    li.appendChild(
      document.createTextNode(element.name)
    );
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

const deleteSubscriber = async () => {
  console.log("clicked");
  let subscriberName = document.querySelector("#SubscriberName").value;

  let subscriberID = subscriberListFull.find(element => element.name === subscriberName)._id;

  console.log('subscriberID')

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
  .querySelector("#deleteSubscriber")
  .addEventListener("click", deleteSubscriber);
