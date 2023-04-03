import { INTERVENTION_SECTOR, TYPES } from './ong';

export interface FormControlValues {
  customStyle?: 'marginTopBottom';
  type: 'text' | 'number' | 'password' | 'select' | 'textarea';
  name?: string;
  label: string;
  values?: string[];
}

interface ONGFormValues {
  [key: string]: FormControlValues,
}

export const ONG_FORM_VALUES: ONGFormValues = {
  CIF: {
    type: 'text',
    name: 'cif',
    label: 'CIF:',
  },
  NAME: {
    type: 'text',
    name: 'nombre',
    label: 'Nombre',
  },
  PASSWORD: {
    type: 'password',
    name: 'password',
    label: 'Contraseña',
  },
  TYPES: {
    type: 'select',
    name: 'tipo',
    label: 'Tipo',
    values: TYPES,
  },
  DESCRIPTION: {
    type: 'textarea',
    name: 'descripcion',
    label: 'Descripción',
  },
  INTERVENTION_SECTOR: {
    type: 'select',
    name: 'sector_intervencion',
    label: 'Sector de Intervención',
    values: INTERVENTION_SECTOR,
  },
  ADDRESS: {
    type: 'text',
    name: 'calle',
    label: 'Calle',
  },
  ZIP_CODE: {
    type: 'number',
    name: 'cp',
    label: 'Código Postal',
  },
};
