import moment from 'moment';

export enum DateFormat {
  default = 'MMM, DD YYYY',
}
export const getFormattedDate = (
  raw: string | undefined,
  format: string = DateFormat.default,
) => {
  if (!raw) {
    return undefined;
  }
  const date: Date = new Date(raw);
  return moment(date).format(format);
};
