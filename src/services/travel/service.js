import api from './api';

const service = {
  listAllTravels(offset, limit) {
    return api.listAllTravels(offset, limit);
  },
  searchTravels(origin, destination, offset, limit) {
    return api.searchTravels(origin, destination, offset, limit);
  },
  searchTravelsFromDate(origin, destination, fromDate, offset, limit) {
    console.log(fromDate);
    return api.searchTravelsFromDate(
      origin,
      destination,
      fromDate,
      offset,
      limit,
    );
  },
  searchTravelsToDate(origin, destination, toDate, offset, limit) {
    return api.searchTravelsToDate(origin, destination, toDate, offset, limit);
  },
  searchTravelsBetweenDates(
    origin,
    destination,
    fromDate,
    toDate,
    offset,
    limit,
  ) {
    return api.searchTravelsBetweenDates(
      origin,
      destination,
      fromDate,
      toDate,
      offset,
      limit,
    );
  },
};

export default service;
