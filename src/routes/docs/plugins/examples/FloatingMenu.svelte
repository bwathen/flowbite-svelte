<script lang="ts">
  import { TextEditor, UndoRedoButtonGroup } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);

  const content = `<p>
        This is an example of a Medium-like editor. Enter a new line and some buttons will appear.
      </p>
      <p></p>`;
</script>

<TextEditor bind:editor={editorInstance} {content} floatingMenu contentprops={{ id: "floating-menu-ex" }}>
  <UndoRedoButtonGroup editor={editorInstance} />
</TextEditor>
