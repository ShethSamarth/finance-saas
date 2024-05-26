import { DateFilter } from "@/components/date-filter"
import { AccountFilter } from "@/components/account-filter"

export const Filters = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 md:gap-x-2">
      <AccountFilter />
      <DateFilter />
    </div>
  )
}
