\c apartments_dev;

INSERT INTO apartments (typeof_place, image, price, location, phone_number, amenities, children_allow, pets_allow) VALUES
('Room','https://acehotel.com/new-york/wp-content/uploads/sites/9/2021/06/NYC-1096x722.jpg', 1000, '343 E 118st New York,NY 10035', 3474322110, 'Internet, Gym in the building and laundry', true, false),
('Apartment','https://images1.apartments.com/i2/8t5pitCqc_akYi1v0sgsGGWPex7l6cgw0Frlk7xhcmE/117/the-ritz-plaza-new-york-ny-building-photo.jpg', 2500, '472 W 115th st New York, NY 10029', 2494322918, 'Backyard, Laudry, Gym', true, true),
('Room', 'https://www.thebenjamin.com/content/uploads/2020/09/GuestroomBed-376x350.jpg', 1300 ,'510 E 100th st New York, NY 10010', 5462324034, 'Internet and private bathroom', false, true);

INSERT INTO appointments (apartment_id,full_name, phone_number, email, appointment_date, appointment_time)
VALUES
('1', 'Sabrina Escobar', '3488543256','sabrina_chavi2013@hotmail.com','September 15th 2022','3:00 pm'),
('1', 'Allison Rodriguez', '6464722310', 'allison23@gmail.com', 'October 10th 2022','5:00 pm'),
('2','Eduardo Villamil', '6465314324', 'eduardo425@icloud.com', 'September 20th 2022', '1:00 pm');