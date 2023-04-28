import { component$ } from "@builder.io/qwik";

export const InputControlBase = component$(() => {
  return (
    <>
      <input class="border" autoComplete="postal-code" />
    </>
  );
});
