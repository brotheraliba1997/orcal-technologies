import { faker } from "@faker-js/faker";

function generateEvents(count = 500) {
 const attendees = Array.from({ length: 200 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      ticketType: faker.helpers.arrayElement(["VIP", "Regular", "Student"]),
      avatar: faker.image.avatar(),
    }));

      


  return Array.from({ length: count }, () => ({

    
    id: faker.string.uuid(),
    name: faker.company.catchPhrase(),
    type: faker.helpers.arrayElement([
      "Conference",
      "Workshop",
      "Meetup",
      "Webinar",
    ]),
    date: faker.date.future().toLocaleString(),
    location: faker.location.city(),
    attendeeCount: faker.number.int({ min: 50, max: 500 }),
    attendees
  }));
}

export default generateEvents;
