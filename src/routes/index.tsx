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
        <button
          style="margin-bottom: 10px"
          onClick$={() => {
            global.count = global.count + 1;
          }}
        >
          click me! {global.count}
        </button>
        <div>
          <span style="margin-right: 5px">(This will disappear)</span>
          <InputControlBase />
        </div>
      </div>
    </>
  );
});
