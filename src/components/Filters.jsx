// Import ShadcnUI components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

// End of ShadcnUI components

import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";
import { useState } from "react";
import { useEffect } from "react";
import { getCategories } from "@/services/products";
import { translateCategory } from "@/lib/utils";

export function Filters() {
  const minPriceId = useId();
  const categoryId = useId();
  const [categories, setCategories] = useState([]);

  const { filters, changeFilter } = useFilters();

  const { minPrice } = filters;

  const handleChangeMinPrice = (value) => {
    changeFilter("minPrice", value);
  };

  const handleChangeCategory = (value) => {
    changeFilter("category", value);
  };

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="filters">
      <div>
        <label htmlFor={minPriceId}>Precio mínimo</label>

        <Slider
          className="w-[180px]"
          defaultValue={[0]}
          max={1000}
          step={10}
          value={[minPrice]}
          onValueChange={handleChangeMinPrice}
          id={minPriceId}
        />

        <span>{minPrice}</span>
      </div>
      <div>
        <Select onValueChange={handleChangeCategory}>
          <SelectTrigger id={categoryId} className="w-[180px]" aria-label="categoría">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todo</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {translateCategory(category)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
