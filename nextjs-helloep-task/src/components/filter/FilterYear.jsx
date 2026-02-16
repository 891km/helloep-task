"use client";
import FilterDropdown from "@/components/filter/FilterDropdown";

export default function FilterYear({ years }) {
  return (
    <FilterDropdown
      paramsKey={"workYear"}
      optionValues={years}
      defaultLabel={"Year"}
    />
  );
}
