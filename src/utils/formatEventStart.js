import { format } from "date-fns";

export const formatEventStart = start => {
    return format(new Date(start), 'dd MMMM yyyy, HH:mm');
};