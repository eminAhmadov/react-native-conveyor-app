const API_BASE = 'http://192.168.1.102:8080';

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
  createTravel(
    userId,
    name,
    gender,
    origin,
    destination,
    date,
    comment,
    facebook,
    instagram,
    phone,
  ) {
    const body = {
      userId: userId,
      name: name,
      gender: gender,
      origin: origin,
      destination: destination,
      date: date,
    };
    if (comment) {
      body.comment = comment;
    }
    if (facebook) {
      body.facebook = facebook;
    }
    if (instagram) {
      body.instagram = instagram;
    }
    if (phone) {
      body.mobile = phone;
    }
    console.log(body);
    return fetch(`${API_BASE}/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 409) {
        throw new Error('Such travel already exists!');
      }
      throw new Error('Could not post a travel!');
    });
  },
};

export default api;
