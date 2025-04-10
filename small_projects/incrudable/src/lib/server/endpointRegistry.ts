export type EndpointType = 'create' | 'getAll' | 'getById' | 'update' | 'delete';

export const endpointRegistry: Record<string, Partial<Record<EndpointType, boolean>>> = {};
