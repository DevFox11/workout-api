export const API_MESSAGES = {
    ERRORS: {
        CONFLICT: 'Conflicto: el recurso ya existe',
        NOT_FOUND: 'Recurso no encontrado',
        INTERNAL_SERVER_ERROR: 'Error interno del servidor',
        UNAUTHORIZED: 'Acceso no autorizado',
        VALIDATION:{
            REQUIRED_FIELD: 'El campo es obligatorio: ',
            INVALID_FORMAT: 'El campo tiene un formato inválido: ',
        }   
    },
    SUCCESS:{
        OK: 'Operación exitosa',
        CREATED: 'Recurso creado exitosamente',
        UPDATED: 'Recurso actualizado exitosamente',
        DELETED: 'Recurso eliminado exitosamente',
        FETCHED: 'Recursos obtenidos exitosamente',
    }
}