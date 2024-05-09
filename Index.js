document.querySelector(".add").addEventListener("click", () => {
  document.querySelector(".form-wrapper").classList.add("active");
});

document.querySelector(".cancel").addEventListener("click", () => {
  document.querySelector(".form-wrapper").classList.remove("active");
});

let OurData;
let TargetData;

async function GetData() {
  try {
    let FetchData = await fetch(`http://localhost:3000/posts`);
    let Data = await FetchData.json();
    OurData = Data;
    // console.log(OurData);
    DisplayDataInDOM(OurData);
  } catch (error) {
    console.log("Error:" + error);
  }
}
GetData();

function DisplayDataInDOM(OurData) {
  document.getElementById("Output").innerHTML = "";
  OurData.forEach((value) => {
    let TableRow = document.createElement("tr");
    TableRow.id = value.id;

    let TD1 = document.createElement("td");
    TD1.innerText = value.Mobile;

    let TD2 = document.createElement("td");
    TD2.innerText = value.Price;

    let TD3 = document.createElement("td");
    TD3.innerText = value.RAM;

    let TD4 = document.createElement("td");
    TD4.innerText = value.Storage;

    let Edit = document.createElement("i");
    Edit.className = "ri-file-edit-line";

    let Delete = document.createElement("i");
    Delete.className = "ri-delete-bin-6-line";

    let TD5 = document.createElement("td");
    TD5.append(Edit);
    TD5.addEventListener("click", () => {
      document.querySelector(".form-wrapper").classList.add("active");
      console.log(event.target.parentElement.parentElement.id);
      TargetData = event.target.parentElement.parentElement.id;
    });

    let TD6 = document.createElement("td");
    TD6.append(Delete);
    TD6.addEventListener("click", () => {
      TargetData = event.target.parentElement.parentElement.id;
      DeleteData();
    });

    TableRow.append(TD1, TD2, TD3, TD4, TD5, TD6);
    document.getElementById("Output").append(TableRow);
  });
}

document.querySelector(".save").addEventListener("click", PostData);
async function PostData() {
  try {
    event.preventDefault();
    let object = {
      Mobile: document.getElementById("mobile").value,
      Price: document.getElementById("price").value,
      RAM: document.getElementById("ram").value,
      Storage: document.getElementById("storage").value,
    };
    let FetchData = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-type": "application/json",
      },
    });
    let Data = await FetchData.json();
    console.log(Data);
  } catch (error) {
    console.log(error);
  }
}

document.querySelector(".update").addEventListener("click", UpdateData);
async function UpdateData() {
  try {
    event.preventDefault();
    let ID = TargetData;
    console.log(ID);
    let object = {
      Mobile: document.getElementById("mobile").value,
      Price: document.getElementById("price").value,
      RAM: document.getElementById("ram").value,
      Storage: document.getElementById("storage").value,
    };
    let FetchData = await fetch(`http://localhost:3000/posts/${ID}`, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let Data = await FetchData.json();
    console.log(Data);
  } catch (error) {
    console.log(error);
  }
}

async function DeleteData() {
  try {
    event.preventDefault();
    let ID = TargetData;
    console.log(ID);
    let FetchData = await fetch(`http://localhost:3000/posts/${ID}`, {
      method: "DELETE",
    });
    window.location.reload;
  } catch (error) {
    console.log(error);
  }
}
