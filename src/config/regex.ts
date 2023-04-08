export const FORM_REGEX = {
  CIFREGEX: '^([ABCDEFGHJKLMNPQRSUVW])(\\d{7})([0-9A-J])$',
  NIFREGEX: '^(?:[XYZ]\\d{7}|[0-9]{8})[TRWAGMYFPDXBNJZSQVHLCKE]$',
  LETTERSREGEX: '^[a-zA-Z\\s]+$',
  PASSWORD: '^.{6,}$',
  ZIP_CODE: '^(?:0[1-9]|[1-4]\\d|5[0-2])\\d{3}$',
  MOBILE_PHONE_NUMBER: '^(?:(?:\\+|00)34)?[67]\\d{8}$',
  CREATION_YEAR: '^(19\\d{2}|20\\d{2}|2100)$',
  EMAIL: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
};
