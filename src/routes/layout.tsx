import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./styles.css?inline";

export const GLOBAL_CONTEXT = createContextId<{
  count: number;
}>("global");

export default component$(() => {
  useStyles$(styles);

  const state = useStore({
    count: 1,
  });
  useContextProvider(GLOBAL_CONTEXT, state);

  return (
    <>
      <main style="padding: 50px">
        <Slot />
      </main>
    </>
  );
});
