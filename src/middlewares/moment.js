import moment from "moment"

export const getDiff = (timestamp, deadline) => {
    if (!deadline) return
    const a = moment(timestamp);
    const b = moment(deadline);
    return b.diff(a);
}

const small_date_time = 'DD MMM YY, h:mm a'
const long_date_time = 'dddd, MMMM Do YYYY, h:mm:ss a'

export const formatDateTime = (timestamp) => {
    if (!timestamp) return "Timestamp not Found";
    return moment(timestamp).utcOffset("+05:30").format(long_date_time);
}

export const formatDateTimeSmall = (timestamp) => {
    if (!timestamp) return "Timestamp not Found";
    return moment(timestamp).utcOffset("+05:30").format(small_date_time);
}

export const formatUnixDateTime = (timestamp) => {
    if (!timestamp) return "Timestamp not Found";
    return moment.unix(timestamp).utcOffset("+05:30").format(long_date_time);
}

export const formatUnixDateTimeSmall = (timestamp) => {
    if (!timestamp) return "Timestamp not Found";
    return moment.unix(timestamp).utcOffset("+05:30").format(small_date_time);
}

export const getHourDiff = (timestamp, deadline) => {
    if (!deadline) return
    const a = moment.unix(timestamp);
    const b = moment(deadline);
    return b.diff(a, 'hour');
}

export const fromNow = (time) => {
    if (!time) return
    return moment(time).utcOffset("+05:30").fromNow();
}

export const fromNowUnix = (time) => {
    if (!time) return
    return moment.unix(time).utcOffset("+05:30").fromNow();
}
