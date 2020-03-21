const API_BASE = 'http://localhost:8080';

const api = {
  listAllTravels(offset, limit) {
    return fetch(`${API_BASE}/getAll?offset=${offset}&limit=${limit}`, {
      method: 'GET',
    }).then(res => res.json());
  },
  searchTravels(origin, destination, offset, limit) {
    console.log(`OFFSET: ${offset}`);
    return fetch(
      `${API_BASE}/search?origin=${origin}&destination=${destination}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      },
    ).then(res => res.json());
  },
  searchTravelsFromDate(origin, destination, fromDate, offset, limit) {
    console.log(
      `${API_BASE}/search?origin=${origin}&destination=${destination}&fromDate=${fromDate}&offset=${offset}&limit=${limit}`,
    );
    return fetch(
      `${API_BASE}/search?origin=${origin}&destination=${destination}&fromDate=${fromDate}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      },
    ).then(res => res.json());
  },
  searchTravelsToDate(origin, destination, toDate, offset, limit) {
    return fetch(
      `${API_BASE}/search?origin=${origin}&destination=${destination}&toDate=${toDate}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      },
    ).then(res => res.json());
  },
  searchTravelsBetweenDates(
    origin,
    destination,
    fromDate,
    toDate,
    offset,
    limit,
  ) {
    return fetch(
      `${API_BASE}/search?origin=${origin}&destination=${destination}&fromDate=${fromDate}&toDate=${toDate}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      },
    ).then(res => res.json());
  },
};

export default api;
