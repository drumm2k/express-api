const eventsData = [
  {
    id: 1,
    name: 'Test',
    description: 'Test',
    starts: 'Feb 31 2020 05:00:00 GMT-0700',
    ends: 'Mar 2 2021 05:00:00 GMT-0700',
    img: '/img/img.png',
  },
  {
    id: 2,
    name: 'Test2',
    description: 'Test2',
    starts: 'Feb 31 2020 05:00:00 GMT-0700',
    ends: 'Mar 2 2021 05:00:00 GMT-0700',
    img: '/img/img2.png',
  },
];

export const events = (req, res) =>
  res.status(200).json({ events: eventsData });
