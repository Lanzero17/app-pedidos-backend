import {Model, model, property} from '@loopback/repository';

@model()
export class CambiarClave extends Model {
  @property({
    type: 'string',
    required: true,
  })
  id_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave_actual: string;

  @property({
    type: 'string',
    required: true,
  })
  nueva_clave: string;


  constructor(data?: Partial<CambiarClave>) {
    super(data);
  }
}

export interface CambiarClaveRelations {
  // describe navigational properties here
}

export type CambiarClaveWithRelations = CambiarClave & CambiarClaveRelations;
