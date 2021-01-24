import { Publisher, Subjects, TicketCreatedEvent } from '@uratickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
}
