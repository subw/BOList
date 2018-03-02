import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const activities = [
      { id: 1, name: 'Party' },
      { id: 2, name: 'Käsefondue' },
      { id: 3, name: 'Tierpark Hagenbeck' },
      { id: 4, name: 'Inder Marani' },
      { id: 5, name: 'Anderer Inder' },
      { id: 6, name: 'NDR Show' },
      { id: 7, name: 'Tagebuch Club-Kinder' }
    ];
    return {activities};
  }
}