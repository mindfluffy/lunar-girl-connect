
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/AuthContext";

interface AddCycleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
  onSuccess: () => void;
}

const AddCycleDialog = ({ isOpen, onClose, selectedDate, onSuccess }: AddCycleDialogProps) => {
  const { user } = useAuth();

  const handleSubmit = async () => {
    if (!user) return;

    try {
      const { error } = await supabase.from("cycle_data").insert({
        start_date: format(selectedDate, "yyyy-MM-dd"),
        user_id: user.id
      });

      if (error) throw error;

      toast({
        title: "Date ajoutée",
        description: "Votre date de cycle a été enregistrée avec succès.",
      });
      onSuccess();
      onClose();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible d'ajouter la date. Veuillez réessayer.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-moonIndigo-800/95 border-moonIndigo-700/50">
        <DialogHeader>
          <DialogTitle>Ajouter une date de cycle</DialogTitle>
          <DialogDescription className="text-moonIndigo-200">
            Confirmer l'ajout du {format(selectedDate, "d MMMM yyyy", { locale: fr })}
            comme date de début de cycle ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <Button onClick={handleSubmit}>Confirmer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCycleDialog;
