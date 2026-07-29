import {
  Bike,
  Dumbbell,
  Mountain,
  Package,
  Tent,
  Volleyball,
  Waves,
} from "lucide-react";

export const categoryIcons = {
  Fitness: Dumbbell,
  Cycling: Bike,
  Camping: Tent,
  "Water Sports": Waves,
  Volleyball: Volleyball,
  Hiking: Mountain,
};

export const getCategoryIcon = (name: string) => {
  return categoryIcons[name as keyof typeof categoryIcons] ?? Package;
};
