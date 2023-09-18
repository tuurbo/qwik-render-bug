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
        <h4>Mimic chrome extensions that inject elements</h4>
        <p>Click "prepend element", then click "click me".</p>
        <p>The element with text "(This will disappear)" will disappear.</p>
        <button
          style="margin-bottom: 10px; margin-right: 10px"
          onClick$={() => {
            const container = document.getElementById('pcontainer2')!;
            const elem = document.createElement("span");
            elem.innerHTML = ` (injected element ${store.count}) `;
            container.insertBefore(elem, container.firstChild);
            store.count = store.count + 1;
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
        <div id="pcontainer2">
          <span style="margin-right: 5px">(This will disappear)</span>
          <InputControlBase autoComplete="off" />
        </div>
      </div>
    </>
  );
});
