import { EditorSection } from "@/components/editor";
import { Button } from "@/components/ui/Button";
import { IoIosAddCircle } from "react-icons/io";

export function ColorSection() {
  return (
    <EditorSection
      action={
        <Button variant="ghost" leftIcon={<IoIosAddCircle />}>
          Ajouter
        </Button>
      }
      title="Couleurs principales"
    >
      test
    </EditorSection>
  );
}
