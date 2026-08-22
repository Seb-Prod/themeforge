import { EditorSection } from "@/components/editor";
import { ColorField } from "./components/ColorField/ColorField";

export function ThemeEditorSidebar() {
  return (
    <>
      <EditorSection collapsible title="Brand Colors">
        <ColorField name={"primary"} label={"primary"} />
        <ColorField name={"secondary"} label={"secondary"} />
        <ColorField name={"accent"} label={"primary"} />
      </EditorSection>
      <EditorSection collapsible title="Neutral Colors" defaultCollapsed>
        <ColorField name={"neutral"} label={"neutral"} />
      </EditorSection>
      <EditorSection collapsible title="Status Colors" defaultCollapsed>
        <ColorField name={"success"} label={"success"} />
        <ColorField name={"warning"} label={"warning"} />
        <ColorField name={"danger"} label={"danger"} />
        <ColorField name={"info"} label={"info"} />
      </EditorSection>
      <EditorSection collapsible title="Surfaces & Layout">
        <ColorField name={"canvas"} label={"canvas"} isSurface/>
        <ColorField name={"base"} label={"base"} isSurface/>
        <ColorField name={"raised"} label={"raised"} isSurface/>
        <ColorField name={"overlay"} label={"overlay"} isSurface/>
      </EditorSection>
    </>
  );
}
