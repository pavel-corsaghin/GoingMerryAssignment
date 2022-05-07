export const isNotEmpty = (str?: string | null) => {
  return str != null && str !== undefined && str !== '';
};
