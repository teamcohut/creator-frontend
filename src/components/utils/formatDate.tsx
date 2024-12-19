import { format } from "date-fns";

export function formatDate(date: string) {
    return format(date, "yyyy-M-dd");
}