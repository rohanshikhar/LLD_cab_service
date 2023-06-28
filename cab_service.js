class Driver {
  constructor() {
    this.driver_id = 0;
    this.driver_name = "";
    this.c = null;
    this.d = new Display();
  }

  display(currLocation, destLocation) {
    this.d.currLocation = currLocation;
    this.d.destLocation = destLocation;
  }

  acceptOrRejectRide(status) {
    this.c.isAvailable = status;
  }

  setStatus() {
  }
}

class Rider {
  constructor() {
    this.rider_id = 0;
    this.rider_name = "";
    this.currLocation = new Location();
    this.destLocation = new Location();
    this.h = [];
  }

  setCurrLocation() {
  }

  setDestLocation() {
  }

  pushToHistory() {
  }
}

class Display {
  constructor() {
    this.currLocation = new Location();
    this.destLocation = new Location();
  }
}

class Cab {
  constructor() {
    this.cab_plate_number = "";
    this.d = new Driver();
    this.r = new Rider();
    this.isAvailable = false;
  }

  getDriver() {
    return this.d;
  }

  setDriver(driver) {
    this.d = driver;
  }

  getStatus() {
    return this.isAvailable;
  }

  setRider(rider) {
    this.r = rider;
  }

  removeRider() {
  }
}

class CabService {
  constructor() {
    this.cs = [];
    this.riders = [];
  }

  registerRider(name) {
    const rider = new Rider();
    rider.rider_name = name;
    this.riders.push(rider);
    return rider;
  }

  registerDriver(driver_name, cab_plate_number) {
    const driver = new Driver();
    driver.driver_name = driver_name;
    const cab = new Cab();
    cab.cab_plate_number = cab_plate_number;
    cab.setDriver(driver);
    this.cs.push(cab);
    return cab;
  }

  findCab(rider, currLocation, destLocation) {
     findclass Driver {
  constructor() {
    this.driver_id = 0;
    this.driver_name = "";
    this.c = null;
    this.d = new Display();
  }

  display(currLocation, destLocation) {
    this.d.currLocation = currLocation;
    this.d.destLocation = destLocation;
  }

  acceptOrRejectRide(status) {
    this.c.isAvailable = status;
  }

  setStatus() {
  }
}

class Rider {
  constructor() {
    this.rider_id = 0;
    this.rider_name = "";
    this.currLocation = new Location();
    this.destLocation = new Location();
    this.h = [];
  }

  setCurrLocation() {
  }

  setDestLocation() {
  }

  pushToHistory() {
  }
}

class Display {
  constructor() {
    this.currLocation = new Location();
    this.destLocation = new Location();
  }
}

class Cab {
  constructor() {
    this.cab_plate_number = "";
    this.d = new Driver();
    this.r = new Rider();
    this.isAvailable = false;
  }

  getDriver() {
    return this.d;
  }

  setDriver(driver) {
    this.d = driver;
  }

  getStatus() {
    return this.isAvailable;
  }

  setRider(rider) {
    this.r = rider;
  }

  removeRider() {
  }
}

class CabService {
  constructor() {
    this.cs = [];
    this.riders = [];
  }

  registerRider(name) {
    const rider = new Rider();
    rider.rider_name = name;
    this.riders.push(rider);
    return rider;
  }

  registerDriver(driver_name, cab_plate_number) {
    const driver = new Driver();
    driver.driver_name = driver_name;
    const cab = new Cab();
    cab.cab_plate_number = cab_plate_number;
    cab.setDriver(driver);
    this.cs.push(cab);
    return cab;
  }

  findCab(rider, currLocation, destLocation) {
  }
}

class Location {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  distanceTo(otherLocation) {
  }
}

class History {
  constructor() {
    this.r = new Rider();
    this.d = new Driver();
    this.start = new Location();
    this.end = new Location();
  }
}

const cabService = new CabService();
const rider = cabService.registerRider("Krishna");
const cab = cabService.registerDriver("Hariom", "xyz");
cabService.findCab(rider, new Location(), new Location());
class Driver {
  constructor() {
    this.driver_id = 0;
    this.driver_name = "";
    this.c = null;
    this.d = new Display();
  }

  display(currLocation, destLocation) {
    this.d.currLocation = currLocation;
    this.d.destLocation = destLocation;
  }

  acceptOrRejectRide(status) {
    this.c.isAvailable = status;
  }

  setStatus() {
  }
}

class Rider {
  constructor() {
    this.rider_id = 0;
    this.rider_name = "";
    this.currLocation = new Location();
    this.destLocation = new Location();
    this.h = [];
  }

  setCurrLocation() {
  }

  setDestLocation() {
  }

  pushToHistory() {
  }
}

class Display {
  constructor() {
    this.currLocation = new Location();
    this.destLocation = new Location();
  }
}

class Cab {
  constructor() {
    this.cab_plate_number = "";
    this.d = new Driver();
    this.r = new Rider();
    this.isAvailable = false;
  }

  getDriver() {
    return this.d;
  }

  setDriver(driver) {
    this.d = driver;
  }

  getStatus() {
    return this.isAvailable;
  }

  setRider(rider) {
    this.r = rider;
  }

  removeRider() {
  }
}

class CabService {
  constructor() {
    this.cs = [];
    this.riders = [];
  }

  registerRider(name) {
    const rider = new Rider();
    rider.rider_name = name;
    this.riders.push(rider);
    return rider;
  }

  registerDriver(driver_name, cab_plate_number) {
    const driver = new Driver();
    driver.driver_name = driver_name;
    const cab = new Cab();
    cab.cab_plate_number = cab_plate_number;
    cab.setDriver(driver);
    this.cs.push(cab);
    return cab;
  }

  findCab(rider, currLocation, destLocation) {
  }
}

class Location {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  distanceTo(otherLocation) {
  }
}

class History {
  constructor() {
    this.r = new Rider();
    this.d = new Driver();
    this.start = new Location();
    this.end = new Location();
  }
}

// Usage example:
const cabService = new CabService();
const rider = cabService.registerRider("Krishna");
const cab = cabService.registerDriver("Hariom", "xyz");
cabService.findCab(rider, new Location(), new Location());
class Driver {
  constructor() {
    this.driver_id = 0;
    this.driver_name = "";
    this.c = null;
    this.d = new Display();
  }

  display(currLocation, destLocation) {
    this.d.currLocation = currLocation;
    this.d.destLocation = destLocation;
  }

  acceptOrRejectRide(status) {
    this.c.isAvailable = status;
  }

  setStatus() {
  }
}

class Rider {
  constructor() {
    this.rider_id = 0;
    this.rider_name = "";
    this.currLocation = new Location();
    this.destLocation = new Location();
    this.h = [];
  }

  setCurrLocation() {
  }

  setDestLocation() {
  }

  pushToHistory() {
  }
}

class Display {
  constructor() {
    this.currLocation = new Location();
    this.destLocation = new Location();
  }
}

class Cab {
  constructor() {
    this.cab_plate_number = "";
    this.d = new Driver();
    this.r = new Rider();
    this.isAvailable = false;
  }

  getDriver() {
    return this.d;
  }

  setDriver(driver) {
    this.d = driver;
  }

  getStatus() {
    return this.isAvailable;
  }

  setRider(rider) {
    this.r = rider;
  }

  removeRider() {
  }
}

class CabService {
  constructor() {
    this.cs = [];
    this.riders = [];
  }

  registerRider(name) {
    const rider = new Rider();
    rider.rider_name = name;
    this.riders.push(rider);
    return rider;
  }

  registerDriver(driver_name, cab_plate_number) {
    const driver = new Driver();
    driver.driver_name = driver_name;
    const cab = new Cab();
    cab.cab_plate_number = cab_plate_number;
    cab.setDriver(driver);
    this.cs.push(cab);
    return cab;
  }

  findCab(rider, currLocation, destLocation) {
  }
}

class Location {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  distanceTo(otherLocation) {
  }
}

class History {
  constructor() {
    this.r = new Rider();
    this.d = new Driver();
    this.start = new Location();
    this.end = new Location();
  }
}

const cabService = new CabService();
const rider = cabService.registerRider("John");
const cab = cabService.registerDriver("Robert", "ABC123");
cabService.findCab(rider, new Location(), new Location());
  }
}

class Location {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  distanceTo(otherLocation) {
  }
}

class History {
  constructor() {
    this.r = new Rider();
    this.d = new Driver();
    this.start = new Location();
    this.end = new Location();
  }
}

const cabService = new CabService();
const rider = cabService.registerRider("Krishna");
const cab = cabService.registerDriver("Hariom", "xyz");
cabService.findCab(rider, new Location(), new Location());
