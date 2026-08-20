import { EditorSection } from "@/components/editor";
import { Button } from "@/components/ui/Button";
import { IoIosAddCircle } from "react-icons/io";
import { ColorField } from "../ColorField/ColorField";

export function ColorSection() {
  return (
    <EditorSection collapsible title="Brand Colors">
      <ColorField name={"primary"} label={"primary"} />
      <ColorField name={"accent"} label={"primary"} />
    </EditorSection>
  );
}
