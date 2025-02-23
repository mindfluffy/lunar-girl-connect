
import { useState, useEffect } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Moon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/AuthContext";
import AddCycleDialog from "@/components/AddCycleDialog";
import { getMoonPhase, getMoonIcon } from "@/utils/moonPhases";
import { toast } from "@/components/ui/use-toast";

interface CycleDate {
  start_date: string;
}

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [cycleDates, setCycleDates] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useAuth();

  const fetchCycleDates = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("cycle_data")
        .select("start_date")
        .order("start_date", { ascending: false });

      if (error) throw error;

      setCycleDates((data as CycleDate[]).map((d) => d.start_date));
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger vos dates de cycle.",
      });
    }
  };

  useEffect(() => {
    fetchCycleDates();
  }, [user]);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setDate(date);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-3xl font-bold text-moonIndigo-50">
            Calendrier Lunaire
          </h1>
          <p className="mt-2 text-moonIndigo-200">
            Suivez vos cycles en harmonie avec la lune
          </p>
        </div>

        <div className="bg-moonIndigo-800/30 backdrop-blur-lg rounded-2xl p-8 border border-moonIndigo-700/50 animate-fade-up">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-moonIndigo-700/50 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-semibold">
              {format(currentMonth, "MMMM yyyy", { locale: fr })}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-moonIndigo-700/50 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="relative">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              locale={fr}
              className="rounded-lg border-moonIndigo-700/50"
              classNames={{
                months: "space-y-4",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium hidden",
                nav: "space-x-1 flex items-center hidden",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-moonIndigo-400 rounded-md w-9 font-normal text-[0.8rem] uppercase",
                row: "flex w-full mt-2",
                cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-moonIndigo-700/30",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-moonIndigo-700/50 rounded-full transition-colors cursor-pointer",
                day_today: "bg-moonIndigo-600/50 text-moonIndigo-50",
                day_outside: "text-moonIndigo-500 opacity-50",
                day_disabled: "text-moonIndigo-500",
                day_range_middle: "aria-selected:bg-moonIndigo-700/30",
                day_selected: "bg-moonIndigo-500 text-moonIndigo-50 hover:bg-moonIndigo-600 hover:text-moonIndigo-50 focus:bg-moonIndigo-500 focus:text-moonIndigo-50",
              }}
              components={{
                DayContent: (props) => {
                  const date = props.date;
                  const formattedDate = format(date, "yyyy-MM-dd");
                  const isCycleStart = cycleDates.includes(formattedDate);
                  const moonPhase = getMoonPhase(date);
                  const moonSize = isCycleStart ? "w-4 h-4" : "w-3 h-3";
                  
                  return (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <span>{props.date.getDate()}</span>
                      <Moon 
                        className={`${moonSize} ${isCycleStart ? "text-moonIndigo-400" : "text-moonIndigo-300"} absolute bottom-0`} 
                      />
                      {isCycleStart && (
                        <div className="absolute top-0 right-0 w-2 h-2 bg-moonIndigo-400 rounded-full" />
                      )}
                    </div>
                  );
                },
              }}
            />
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2 text-moonIndigo-300">
              <div className="h-3 w-3 rounded-full bg-moonIndigo-500" />
              <span>Phase lunaire</span>
            </div>
            <div className="flex items-center space-x-2 text-moonIndigo-300">
              <div className="h-3 w-3 rounded-full bg-moonIndigo-400" />
              <span>Début de cycle</span>
            </div>
          </div>
        </div>
      </div>

      {date && (
        <AddCycleDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          selectedDate={date}
          onSuccess={fetchCycleDates}
        />
      )}
    </div>
  );
};

export default Calendar;
