import { EditorSection } from "@/components/editor";
import { ColorSection } from "./components/ColorSection";
import { ColorField } from "./components/ColorField/ColorField";

export function ThemeEditorSidebar() {
  return (
    <>
      <EditorSection collapsible title="Brand Colors">
        <ColorField name={"primary"} label={"primary"} />
        <ColorField name={"secondary"} label={"secondary"} />
        <ColorField name={"accent"} label={"primary"} />
      </EditorSection>
      <EditorSection collapsible title="Neutral Colors">
        <ColorField name={"neutral"} label={"neutral"} />
      </EditorSection>
      <EditorSection collapsible title="Status Colors">
        <ColorField name={"success"} label={"success"} />
        <ColorField name={"warning"} label={"warning"} />
        <ColorField name={"danger"} label={"danger"} />
        <ColorField name={"info"} label={"info"} />
      </EditorSection>
    </>
  );
}
