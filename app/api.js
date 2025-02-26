import express from 'express'
import hotelRouter from './router/hotel.js';
import roomsRouter from './router/rooms.js';
import bookingRouter from './router/booking.js';
import collaboratorsRouter from './router/collaborators.js';
import optionsBookingRouter from './router/optionsBooking.js';
import roomOptionsRouter from './router/roomOptions.js';
import roomTypesRouter from './router/roomTypes.js';

const app = express()

// Config to get data from the http request
app.use(express.json());

const port = 3000

// Routes
app.use(hotelRouter);
app.use(roomsRouter);
app.use(bookingRouter);
app.use(collaboratorsRouter);
app.use(optionsBookingRouter);
app.use(roomOptionsRouter);
app.use(roomTypesRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
