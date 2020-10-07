import "./styles.css";
import { info, success } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

function click() {
  success({
    title: "Button Clicked",
    text:
      "You have clicked the button. You may now complete the process of reading the notice.",
    modules: new Map([
      [
        Confirm,
        {
          confirm: true,
          buttons: [
            {
              text: "Ok",
              primary: true,
              click: notice => {
                notice.close();
              }
            }
          ]
        }
      ]
    ])
  });
  info({
    title: "Button Clicked",
    text:
      "You have clicked the button. You may now complete the process of reading the notice.",
    modules: new Map([
      [
        Confirm,
        {
          confirm: true,
          buttons: [
            {
              text: "Ok",
              primary: true,
              click: notice => {
                notice.close();
              }
            }
          ]
        }
      ]
    ])
  });
}

const App = document.getElementById("app");

App.innerHTML = `
<div class="container">
  <h1>PNotify 5 in Vanilla ES6!</h1>
  <button>Notify me!</button>
</div>
`;

App.querySelector("button").addEventListener("click", click);
