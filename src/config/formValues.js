import { FORM_REGEX } from './regex';
import { INTERVENTION_SECTOR, TYPES } from './ong';
import { PROVINCES } from './provinces';
import { STUDY_FIELD } from './volunteer';

const {
  CIFREGEX,
  NIFREGEX,
  LETTERSREGEX,
  PASSWORD,
  ZIP_CODE,
  MOBILE_PHONE_NUMBER,
  CREATION_YEAR,
  EMAIL,
} = FORM_REGEX;

export const ONG_FORM_VALUES = {
  CIF: {
    type: 'text',
    name: 'cif',
    label: 'CIF',
    pattern: CIFREGEX,
  },
  PASSWORD: {
    type: 'password',
    name: 'password',
    label: 'Contraseña',
    pattern: PASSWORD,
  },
  NAME: {
    type: 'text',
    name: 'nombre',
    label: 'Nombre',
    pattern: LETTERSREGEX,
  },
  EMAIL: {
    type: 'email',
    name: 'correo_electronico',
    label: 'Correo Electrónico',
    pattern: EMAIL,
  },
  PHONE: {
    type: 'text',
    name: 'telefono',
    label: 'Telefono Móvil',
    pattern: MOBILE_PHONE_NUMBER,
  },
  TYPES: {
    type: 'select',
    name: 'tipo',
    label: 'Tipo',
    selectValues: TYPES,
  },
  INTERVENTION_SECTOR: {
    type: 'select',
    name: 'sector_intervencion',
    label: 'Sector de Intervención',
    selectValues: INTERVENTION_SECTOR,
  },
  DESCRIPTION: {
    type: 'textarea',
    name: 'descripcion',
    label: 'Descripción',
  },
  CREATION_YEAR: {
    type: 'number',
    name: 'ano_creacion',
    label: 'Año de creación',
    pattern: CREATION_YEAR,
  },
  ADDRESS: {
    type: 'text',
    name: 'calle',
    label: 'Dirección',
  },
  ZIP_CODE: {
    type: 'text',
    name: 'cp',
    label: 'Código Postal',
    pattern: ZIP_CODE,
  },
  LOCATION: {
    type: 'text',
    name: 'localidad',
    label: 'Localidad',
  },
  PROVINCE: {
    type: 'datalist',
    name: 'provincia',
    list: 'proncias',
    label: 'Provincia',
    datalistValues: PROVINCES,
  },
};

export const VOLUNTEER_FORM_VALUES = {
  NIF: {
    type: 'text',
    name: 'nif',
    label: 'NIF',
    pattern: NIFREGEX,
  },
  PASSWORD: {
    type: 'password',
    name: 'password',
    label: 'Contraseña',
  },
  NAME: {
    type: 'text',
    name: 'nombre',
    label: 'Nombre',
  },
  SURNAME: {
    type: 'text',
    name: 'apellidos',
    label: 'Apellidos',
  },
  PHONE: {
    type: 'number',
    name: 'telefono',
    label: 'Telefono',
    pattern: MOBILE_PHONE_NUMBER,
  },
  EMAIL: {
    type: 'email',
    name: 'correo_electronico',
    label: 'Correo Electrónico',
    pattern: EMAIL,
  },
  EDUCATION_BACKGROUND: {
    type: 'text',
    name: 'estudios',
    label: 'Estudios',
  },
  MOTIVATION: {
    type: 'textarea',
    name: 'motivacion_voluntariado',
    label: 'Motivación Voluntariado',
  },
  STUDY_FIELD: {
    type: 'select',
    name: 'campo_estudio',
    label: 'Campo de Estudio',
    selectValues: STUDY_FIELD,
  },
  LANGUAGES: {
    type: 'text',
    name: 'idiomas',
    label: 'Idiomas',
  },
};

export const ACTIVITIE_FORM_VALUES = {
  NAME: {
    type: 'text',
    name: 'nombre',
    label: 'Nombre',
  },
  INTERVENTION_SECTOR: {
    type: 'select',
    name: 'sector_intervencion',
    label: 'Sector de Intervención',
    selectValues: INTERVENTION_SECTOR,
  },
  VOLUNTEER_NUMBER: {
    type: 'text',
    name: 'numero_voluntarios',
    label: 'Número de Voluntarios',
  },
  ACTIVITIE_DESCRIPTION: {
    type: 'textarea',
    name: 'descripcion_actividad',
    label: 'Descripción Actividad',
  },
  ACTIVITIE_SCHEDULE: {
    type: 'textarea',
    name: 'descripcion_horarios',
    label: 'Descripción de horarios',
  },
  CALLE: {
    type: 'text',
    name: 'calle',
    label: 'Dirección',
  },
  ZIP_CODE: {
    type: 'text',
    name: 'cp',
    label: 'Código Postal',
    pattern: ZIP_CODE,
  },
  LOCATION: {
    type: 'text',
    name: 'localidad',
    label: 'Localidad',
  },
  PROVINCE: {
    type: 'datalist',
    name: 'provincia',
    list: 'proncias',
    label: 'Provincia',
    datalistValues: PROVINCES,
  },
};
