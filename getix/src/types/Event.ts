export interface Event {
    id: number;
    title: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
    location: string | null;
    eventType: 'Concert' | 'SportsEvent' | 'TheaterEvent';
    organizerId: number | null;
  }