import { Publisher, Subjects, TicketUpdatedEvent } from '@uratickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    readonly subject = Subjects.TicketUpdated;
}
