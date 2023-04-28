import { component$ } from "@builder.io/qwik";

export const InputControlBase = component$(
  (props: { autoComplete: string }) => {
    return (
      <>
        <input class="border" autoComplete={props.autoComplete} />
      </>
    );
  }
);
