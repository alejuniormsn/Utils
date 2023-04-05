import moment from "moment";

export default function intervalDates(startDate, endDate, days) {
  const intervalDate = moment(endDate).diff(moment(startDate));
  if (intervalDate / (1000 * 60 * 24) > days) return false; else return true;

}

//startDate, endDate, days (interval of days)