import { component$, useContext, useStore } from "@builder.io/qwik";
import { GLOBAL_CONTEXT } from "./layout";
import { InputControlBase } from "~/components/input";

export default component$(() => {
  console.log("component renders");
  const global = useContext(GLOBAL_CONTEXT);
  const store = useStore({
    count: global.count,
  });

  return (
    <>
      <div>
        <p>{global.count}</p>
        <h3>Dashlane Extension</h3>
        <p>reload page, if using Dashlane, click "click me"</p>
        <button
          style="margin-bottom: 10px"
          onClick$={() => {
            global.count = global.count + 1;
          }}
        >
          click me
        </button>
        <div>
          <span style="margin-right: 5px">(This will disappear)</span>
          <InputControlBase autoComplete="postal-code" />
        </div>
      </div>
      <hr style="margin: 35px 0" />
      <div>
        <h3>Mimic Dashlane extension</h3>
        <p>reload page, click "prepend element", then click "click me"</p>
        <button
          style="margin-bottom: 10px; margin-right: 10px"
          onClick$={() => {
            const container = document.getElementById('pcontainer')!;
            const elem = document.createElement("span");
            elem.innerHTML = '(mimic chrome extension)';
            container.insertBefore(elem, container.firstChild);
          }}
        >
          prepend element
        </button>
        <button
          style="margin-bottom: 10px"
          onClick$={() => {
            global.count = global.count + 1;
          }}
        >
          click me
        </button>
        <div id="pcontainer">
          <span style="margin-right: 5px">(This will disappear)</span>
          <InputControlBase autoComplete="off" />
        </div>
      </div>
    </>
  );
});
