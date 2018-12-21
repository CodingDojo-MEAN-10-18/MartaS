import { BikeService } from './bike.service';
import { AuthService } from './auth.service';

export const services: any[] = [BikeService, AuthService];

export * from './bike.service';
export * from './auth.service';
