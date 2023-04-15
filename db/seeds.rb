# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "aws-sdk-s3"
require "open-uri"
# ApplicationRecord.transaction do
puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
# Review.destroy_all
Business.destroy_all
User.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!("users")
ApplicationRecord.connection.reset_pk_sequence!("businesses")
ApplicationRecord.connection.reset_pk_sequence!("reviews")

puts "Creating users..."
# Create one user with an easy to remember username, email, and password:
demo = User.create!(
  email: "demo@demo.com",
  password: "123456",
  first_name: "John",
  last_name: "Doh",
  zip_code: "12345",
  birthday: "1995-05-15",
)

owner = User.create!(
  email: "owner@gmail.com",
  password: "123456",
  first_name: "Biz",
  last_name: "Hustler",
  zip_code: "12345",
  birthday: "1993-02-20",

)
kirito = User.create!(
  email: "kirito@gmail.com",
  password: "123456",
  first_name: "Kirito",
  last_name: "Kirigaya",
  zip_code: "12345",
  birthday: "1995-05-15",
)

kirito.avatar.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/1.jpg"), filename: "kirito.jpg")

asuna = User.create!(
  email: "asuna@gmail.com",
  password: "123456",
  first_name: "Asuna",
  last_name: "Yuuki",
  zip_code: "12345",
  birthday: "1993-02-20",
)

asuna.avatar.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/2.jpg"), filename: "asuna.jpg")

saber = User.create!(
  email: "saber@gmail.com",
  password: "123456",
  first_name: "Saber",
  last_name: "Arthur",
  zip_code: "12345",
  birthday: "1993-02-20",
)

saber.avatar.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/saber.jpg"), filename: "saber.jpg")
naruto = User.create!(
  email: "naruto@gmail.com",
  password: "123456",
  first_name: "Naruto",
  last_name: "Uzumaki",
  zip_code: "12345",
  birthday: "1993-02-20",
)
naruto.avatar.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/naruto.jpg"), filename: "naruto.jpg")

sasuke = User.create!(
  email: "sasuke@gmail.com",
  password: "123456",
  first_name: "Sasuke",
  last_name: "Uchiha",
  zip_code: "12345",
  birthday: "1993-02-20",
)
sasuke.avatar.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/sasuke.jpg"), filename: "sasuke.jpg")
archer = User.create!(
  email: "archer@gmail.com",
  password: "123456",
  first_name: "Lancer",
  last_name: "Rip",
  zip_code: "12345",
  birthday: "1993-02-20",
)

archer.avatar.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/arch.png"), filename: "archer.jpg")

#pizza1
championPizza = Business.create!(
  user_id: owner.id,
  name: "Champion Pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 40.735952813151535,
  lng: -73.99388339736383,

)
#pizza2
championPizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza_1.png"), filename: "pizza.jpg")

pizzaHut = Business.create!(
  user_id: owner.id,
  name: "Pizza Hut",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 40.73553908126735,
  lng: -73.9928508308702,
)

pizzaHut.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza.jpg"), filename: "pizza1.jpg")

#pizza3
unionSquarePizza = Business.create!(
  user_id: owner.id,
  name: "Tres Pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 40.73480799991037,
  lng: -73.98978685625228,
)

unionSquarePizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizzareview_.jpeg"), filename: "pizza_prev.jpg")

#pizza4
bravoPizza = Business.create!(
  user_id: owner.id,
  name: "Bravo Pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 28.76026620843044,
  lng: -53.82781998446661,
)

bravoPizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizz3.jpg"), filename: "pizza-3.jpg")
#pizza5

littleItalyPizza = Business.create!(
  user_id: owner.id,
  name: "Fresh Pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 40.73491667466883,
  lng: -73.99239449421444,
)
littleItalyPizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizz4.jpg"), filename: "pizza-4.jpg")
#pizza6

unregularPizza = Business.create!(
  user_id: owner.id,
  name: "Unregular pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 40.73388919707709,
  lng: -73.98961735977352,
)
unregularPizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizz5.jpg"), filename: "pizza-5.jpg")
#pizza 7
ribalta = Business.create!(
  user_id: owner.id,
  name: "Ribalta",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 40.733484129434885,
  lng: -73.99154701187331,
)
ribalta.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza6.jpg"), filename: "pizza-6.jpg")
#pizza 8

kidBrotherPizza = Business.create!(
  user_id: owner.id,
  name: "Kid Brother Pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 40.73383979871616,
  lng: -73.988522151825,
)

kidBrotherPizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza7.jpg"), filename: "pizza-7.jpg")

joesPizza = Business.create!(
  user_id: owner.id,
  name: "Joes Pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 25,
  category: "Pizza",
  lat: 40.733414971298274,
  lng: -73.98758340215483,
)
joesPizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza.jpg"), filename: "pizza-8.jpg")

simoPizza = Business.create!(
  user_id: owner.id,
  name: "Simo Pizza",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Pizza",
  lat: 40.73336557258524,
  lng: -73.99320286198598,
)
simoPizza.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza7.jpg"), filename: "simoPizza.jpg")

willCoffee = Business.create!(
  user_id: owner.id,
  name: "Will's FabuLatte☕",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 100,
  category: "Coffee",
  lat: 40.73686844088479,
  lng: -73.99115711090815,
)
willCoffee.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/will.jpg"), filename: "coffee.jpg")

thinkCoffee = Business.create!(
  user_id: owner.id,
  name: "Think Coffee",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Coffee",
  lat: 40.73337270907325,
  lng: -73.98976236220693,
)
thinkCoffee.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee9.jpg"), filename: "coffee1.jpg")

starbucks = Business.create!(
  user_id: owner.id,
  name: "Starbucks",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Coffee",
  lat: 40.73542139277628,
  lng: -73.98971944686215,
)
starbucks.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee11.jpg"), filename: "coffee1.jpg")

blankStreetCoffee = Business.create!(
  user_id: owner.id,
  name: "Blank Street Coffee",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Coffee",
  lat: 40.730884936910336,
  lng: -73.98952632781062,
)
blankStreetCoffee.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee6.jpg"), filename: "coffee1.jpg")

baratie = Business.create!(
  user_id: owner.id,
  name: "Baratie",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 100,
  category: "Steak",
  lat: 40.731283,
  lng: -74.017168,
)
baratie.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/barati_.jpg"), filename: "barati.jpg")

ramenIchiraku = Business.create!(
  user_id: owner.id,
  name: "Ramen Ichiraku",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.73347110007457,
  lng: -73.98696969844327,
)

ramenIchiraku.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/naruto.jpg"), filename: "ramen.jpeg")

gorinRamen = Business.create!(
  user_id: owner.id,
  name: "Gorin Ramen",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.73236543667624,
  lng: -73.98293565608375,
)

gorinRamen.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen2.jpg"), filename: "ramen.jpeg")

tabeTomo = Business.create!(
  user_id: owner.id,
  name: "Tabe Tomo",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.73236543667624,
  lng: -73.98293565608375,
)
tabeTomo.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen3.jpg"), filename: "ramen2.jpeg")

minca = Business.create!(
  user_id: owner.id,
  name: "Minca",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.72436508940808,
  lng: -73.98284982539526,
)
minca.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen7.jpg"), filename: "ramen2.jpeg")

marufucuRamen = Business.create!(
  user_id: owner.id,
  name: "Marufucu Ramen",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.72726399788581,
  lng: -73.98850300827591,
)
marufucuRamen.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen3.jpg"), filename: "ramen2.jpeg")

ramenMisoya = Business.create!(
  user_id: owner.id,
  name: "Ramen Misoya",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.72893570148416,
  lng: -73.98795151982499,
)
ramenMisoya.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen7.jpg"), filename: "ramen2.jpeg")

ippudo = Business.create!(
  user_id: owner.id,
  name: "Ippudo",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.73107757749061,
  lng: -73.99032319862148,
)
ippudo.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen3.jpg"), filename: "ramen2.jpeg")

oramen = Business.create!(
  user_id: owner.id,
  name: "Oramen",
  city: "NYC",
  state: "NY",
  zip_code: "10011",
  phone_number: "1234567890",
  price_range: 20,
  category: "Ramen",
  lat: 40.7390934070547,
  lng: -73.99588012271917,
)
oramen.photo.attach(io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen2.jpg"), filename: "ramen2.jpeg")

wills_1 = Review.create!(
  rating: 5,
  business_id: 11,
  user_id: 3,
  body: "Kirito, the protagonist of Sword Art Online, is a character who understands the power of prayer. Through his trials and tribulations, he has learned that sometimes the only thing that can sustain us is the strength we draw from a higher power. He has learned to trust in the universe, in God, and in the power of his own faith. And so he prays, not just for himself, but for those he loves and for the world he hopes to save. Kirito knows that prayer is not a magic solution to his problems, but rather a means of finding peace, of centering himself, and of tapping into a greater source of strength. For Kirito, prayer is a reminder that he is never truly alone, and that there is always hope in the darkest of moments.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee9.jpg"), filename: "image1.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee2.jpg"), filename: "image2.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee3.jpg"), filename: "image3.jpg" },
  ],
)

Business.find(wills_1.business_id).update_average_rating

wills_2 = Review.create!(
  rating: 5,
  business_id: 11,
  user_id: 4,
  body: "Dear God, I come to you today to offer up a prayer for Asuna, a brave and kindhearted warrior from the world of Sword Art Online. Please watch over her and keep her safe as she faces the challenges and dangers of this virtual world. Grant her strength and courage as she fights to protect herself and those she loves. Help her to find peace in the midst of chaos and to hold onto hope even in the darkest of moments. May she know that she is never alone, and that you are always with her, guiding and supporting her along the way. Thank you for blessing us with such a wonderful character, and for reminding us of the power of faith and determination. Amen.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee3.jpg"), filename: "image4.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee4.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee5.jpg"), filename: "image6.jpg" },
  ],
)
Business.find(wills_2.business_id).update_average_rating

wills_3 = Review.create!(
  rating: 5,
  business_id: 11,
  user_id: 5,
  body: "Saber from Fate/Stay is a truly amazing character. From her striking appearance and regal demeanor to her unwavering sense of justice and selflessness, she embodies all of the qualities that make a hero truly great. She is a skilled warrior and leader, always putting the needs of others before her own, and willing to make the ultimate sacrifice for the greater good. Her unwavering dedication to her ideals, her loyalty to those she cares about, and her willingness to face any challenge with courage and determination make her a true inspiration to all who encounter her. Saber is a shining example of what it means to be a true hero, and her legacy will continue to inspire and empower us for generations to come.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee1.jpg"), filename: "image4.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee11.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee10.jpg"), filename: "image6.jpg" },
  ],
)
Business.find(wills_3.business_id).update_average_rating

wills_4 = Review.create!(
  rating: 5,
  business_id: 11,
  user_id: 6,
  body: "Naruto Uzumaki, the main character of the eponymous manga and anime series, is an iconic figure in modern shonen storytelling. He starts out as an underdog, an outcast in his village due to his status as a host for the Nine-Tailed Fox demon. But through his indomitable spirit, hard work, and perseverance, he rises to become one of the most powerful ninja in the world. Naruto's greatest strength lies in his unwavering determination, his ability to never give up even in the face of seemingly insurmountable obstacles. He possesses a heart of gold and a selfless desire to protect and help others, no matter the cost to himself. Naruto's journey is one of growth, both as a ninja and as a person, as he learns to navigate the complexities of the world and the people around him. He is a truly remarkable character, one whose impact on the world of anime and manga is undeniable..",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee7.jpg"), filename: "image4.jpg" },

  ],
)
Business.find(wills_4.business_id).update_average_rating

wills_5 = Review.create!(
  rating: 5,
  business_id: 11,
  user_id: 7,
  body: "Sasuke Uchiha, one of the most complex and fascinating characters in the Naruto universe, is a skilled and powerful shinobi with a tragic past. Haunted by the murder of his clan, Sasuke has become consumed by a desire for revenge against his older brother, Itachi. He is often cold and aloof, preferring to keep his emotions hidden beneath a façade of indifference. Despite this, Sasuke is fiercely loyal to those he cares about, especially his former teammate and friend, Naruto Uzumaki. Throughout his journey, Sasuke struggles with his own identity and sense of purpose, constantly questioning his decisions and motivations. But despite his flaws and mistakes, Sasuke remains a compelling and compellingly human character, a testament to the power of storytelling in the Naruto universe.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee5.jpg"), filename: "image6.jpg" },
  ],
)
Business.find(wills_5.business_id).update_average_rating

wills_6 = Review.create!(
  rating: 5,
  business_id: 11,
  user_id: 8,
  body: "Archer from Fate/stay is a complex and intriguing character. He is a skilled warrior with powerful abilities, but also a tortured soul with a troubled past. Despite his gruff exterior, Archer is deeply introspective and philosophical, often questioning the nature of heroism and the meaning of his own existence. His struggles with his own identity and purpose make him a compelling character to watch, and his conflicts with other characters in the Fate/stay series are always intense and emotional. Archer's abilities as a hero and a warrior are matched only by his depth as a character, making him an unforgettable figure in the world of anime and manga.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee8.jpg"), filename: "image6.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee11.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/coffee10.jpg"), filename: "image9.jpg" },
  ],
)
Business.find(wills_6.business_id).update_average_rating

# # end

p_1 = Review.create!(
  rating: 5,
  business_id: 1,
  user_id: 3,
  body: "Kirito, the protagonist of Sword Art Online, is a character who understands the power of prayer. Through his trials and tribulations, he has learned that sometimes the only thing that can sustain us is the strength we draw from a higher power. He has learned to trust in the universe, in God, and in the power of his own faith. And so he prays, not just for himself, but for those he loves and for the world he hopes to save. Kirito knows that prayer is not a magic solution to his problems, but rather a means of finding peace, of centering himself, and of tapping into a greater source of strength. For Kirito, prayer is a reminder that he is never truly alone, and that there is always hope in the darkest of moments.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza9.jpg"), filename: "image1.jpg" },

  ],
)
Business.find(p_1.business_id).update_average_rating
p_2 = Review.create!(
  rating: 5,
  business_id: 1,
  user_id: 4,
  body: "Dear God, I come to you today to offer up a prayer for Asuna, a brave and kindhearted warrior from the world of Sword Art Online. Please watch over her and keep her safe as she faces the challenges and dangers of this virtual world. Grant her strength and courage as she fights to protect herself and those she loves. Help her to find peace in the midst of chaos and to hold onto hope even in the darkest of moments. May she know that she is never alone, and that you are always with her, guiding and supporting her along the way. Thank you for blessing us with such a wonderful character, and for reminding us of the power of faith and determination. Amen.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizz3.jpg"), filename: "image4.jpg" },

  ],
)
Business.find(p_2.business_id).update_average_rating

p_3 = Review.create!(
  rating: 5,
  business_id: 1,
  user_id: 5,
  body: "Saber from Fate/Stay is a truly amazing character. From her striking appearance and regal demeanor to her unwavering sense of justice and selflessness, she embodies all of the qualities that make a hero truly great. She is a skilled warrior and leader, always putting the needs of others before her own, and willing to make the ultimate sacrifice for the greater good. Her unwavering dedication to her ideals, her loyalty to those she cares about, and her willingness to face any challenge with courage and determination make her a true inspiration to all who encounter her. Saber is a shining example of what it means to be a true hero, and her legacy will continue to inspire and empower us for generations to come.",

)
Business.find(p_3.business_id).update_average_rating

p_4 = Review.create!(
  rating: 4,
  business_id: 1,
  user_id: 6,
  body: "Naruto Uzumaki, the main character of the eponymous manga and anime series, is an iconic figure in modern shonen storytelling. He starts out as an underdog, an outcast in his village due to his status as a host for the Nine-Tailed Fox demon. But through his indomitable spirit, hard work, and perseverance, he rises to become one of the most powerful ninja in the world. Naruto's greatest strength lies in his unwavering determination, his ability to never give up even in the face of seemingly insurmountable obstacles. He possesses a heart of gold and a selfless desire to protect and help others, no matter the cost to himself. Naruto's journey is one of growth, both as a ninja and as a person, as he learns to navigate the complexities of the world and the people around him. He is a truly remarkable character, one whose impact on the world of anime and manga is undeniable..",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza11.jpg"), filename: "image9.jpg" },

  ],
)
Business.find(p_4.business_id).update_average_rating

p_5 = Review.create!(
  rating: 2,
  business_id: 1,
  user_id: 7,
  body: "Sasuke Uchiha, one of the most complex and fascinating characters in the Naruto universe, is a skilled and powerful shinobi with a tragic past. Haunted by the murder of his clan, Sasuke has become consumed by a desire for revenge against his older brother, Itachi. He is often cold and aloof, preferring to keep his emotions hidden beneath a façade of indifference. Despite this, Sasuke is fiercely loyal to those he cares about, especially his former teammate and friend, Naruto Uzumaki. Throughout his journey, Sasuke struggles with his own identity and sense of purpose, constantly questioning his decisions and motivations. But despite his flaws and mistakes, Sasuke remains a compelling and compellingly human character, a testament to the power of storytelling in the Naruto universe.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza7.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza6.jpg"), filename: "image9.jpg" },
  ],
)

Business.find(p_5.business_id).update_average_rating

p_6 = Review.create!(
  rating: 3,
  business_id: 1,
  user_id: 8,
  body: "Archer from Fate/stay is a complex and intriguing character. He is a skilled warrior with powerful abilities, but also a tortured soul with a troubled past. Despite his gruff exterior, Archer is deeply introspective and philosophical, often questioning the nature of heroism and the meaning of his own existence. His struggles with his own identity and purpose make him a compelling character to watch, and his conflicts with other characters in the Fate/stay series are always intense and emotional. Archer's abilities as a hero and a warrior are matched only by his depth as a character, making him an unforgettable figure in the world of anime and manga.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza11.jpg"), filename: "image6.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza9.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza10.jpg"), filename: "image9.jpg" },
  ],
)
Business.find(p_6.business_id).update_average_rating

p_11 = Review.create!(
  rating: 2,
  business_id: 2,
  user_id: 3,
  body: "Kirito, the protagonist of Sword Art Online, is a character who understands the power of prayer. Through his trials and tribulations, he has learned that sometimes the only thing that can sustain us is the strength we draw from a higher power. He has learned to trust in the universe, in God, and in the power of his own faith. And so he prays, not just for himself, but for those he loves and for the world he hopes to save. Kirito knows that prayer is not a magic solution to his problems, but rather a means of finding peace, of centering himself, and of tapping into a greater source of strength. For Kirito, prayer is a reminder that he is never truly alone, and that there is always hope in the darkest of moments.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza9.jpg"), filename: "image1.jpg" },

  ],
)
Business.find(p_11.business_id).update_average_rating
p_12 = Review.create!(
  rating: 1,
  business_id: 2,
  user_id: 4,
  body: "Dear God, I come to you today to offer up a prayer for Asuna, a brave and kindhearted warrior from the world of Sword Art Online. Please watch over her and keep her safe as she faces the challenges and dangers of this virtual world. Grant her strength and courage as she fights to protect herself and those she loves. Help her to find peace in the midst of chaos and to hold onto hope even in the darkest of moments. May she know that she is never alone, and that you are always with her, guiding and supporting her along the way. Thank you for blessing us with such a wonderful character, and for reminding us of the power of faith and determination. Amen.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizz3.jpg"), filename: "image4.jpg" },

  ],
)
Business.find(p_12.business_id).update_average_rating
p_13 = Review.create!(
  rating: 3,
  business_id: 2,
  user_id: 5,
  body: "Saber from Fate/Stay is a truly amazing character. From her striking appearance and regal demeanor to her unwavering sense of justice and selflessness, she embodies all of the qualities that make a hero truly great. She is a skilled warrior and leader, always putting the needs of others before her own, and willing to make the ultimate sacrifice for the greater good. Her unwavering dedication to her ideals, her loyalty to those she cares about, and her willingness to face any challenge with courage and determination make her a true inspiration to all who encounter her. Saber is a shining example of what it means to be a true hero, and her legacy will continue to inspire and empower us for generations to come.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizz5.jpg"), filename: "image5.jpg" },

  ],
)
Business.find(p_13.business_id).update_average_rating

p_14 = Review.create!(
  rating: 4,
  business_id: 2,
  user_id: 6,
  body: "Naruto Uzumaki, the main character of the eponymous manga and anime series, is an iconic figure in modern shonen storytelling. He starts out as an underdog, an outcast in his village due to his status as a host for the Nine-Tailed Fox demon. But through his indomitable spirit, hard work, and perseverance, he rises to become one of the most powerful ninja in the world. Naruto's greatest strength lies in his unwavering determination, his ability to never give up even in the face of seemingly insurmountable obstacles. He possesses a heart of gold and a selfless desire to protect and help others, no matter the cost to himself. Naruto's journey is one of growth, both as a ninja and as a person, as he learns to navigate the complexities of the world and the people around him. He is a truly remarkable character, one whose impact on the world of anime and manga is undeniable..",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza6.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza7.jpg"), filename: "image9.jpg" },

  ],
)
Business.find(p_14.business_id).update_average_rating

p_15 = Review.create!(
  rating: 1,
  business_id: 2,
  user_id: 7,
  body: "Sasuke Uchiha, one of the most complex and fascinating characters in the Naruto universe, is a skilled and powerful shinobi with a tragic past. Haunted by the murder of his clan, Sasuke has become consumed by a desire for revenge against his older brother, Itachi. He is often cold and aloof, preferring to keep his emotions hidden beneath a façade of indifference. Despite this, Sasuke is fiercely loyal to those he cares about, especially his former teammate and friend, Naruto Uzumaki. Throughout his journey, Sasuke struggles with his own identity and sense of purpose, constantly questioning his decisions and motivations. But despite his flaws and mistakes, Sasuke remains a compelling and compellingly human character, a testament to the power of storytelling in the Naruto universe.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza7.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza6.jpg"), filename: "image9.jpg" },
  ],
)
Business.find(p_15.business_id).update_average_rating
p_16 = Review.create!(
  rating: 2,
  business_id: 2,
  user_id: 8,
  body: "Archer from Fate/stay is a complex and intriguing character. He is a skilled warrior with powerful abilities, but also a tortured soul with a troubled past. Despite his gruff exterior, Archer is deeply introspective and philosophical, often questioning the nature of heroism and the meaning of his own existence. His struggles with his own identity and purpose make him a compelling character to watch, and his conflicts with other characters in the Fate/stay series are always intense and emotional. Archer's abilities as a hero and a warrior are matched only by his depth as a character, making him an unforgettable figure in the world of anime and manga.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza11.jpg"), filename: "image6.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza9.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/pizza10.jpg"), filename: "image9.jpg" },
  ],
)
Business.find(p_16.business_id).update_average_rating
p_22 = Review.create!(
  rating: 1,
  business_id: 16,
  user_id: 4,
  body: "Dear God, I come to you today to offer up a prayer for Asuna, a brave and kindhearted warrior from the world of Sword Art Online. Please watch over her and keep her safe as she faces the challenges and dangers of this virtual world. Grant her strength and courage as she fights to protect herself and those she loves. Help her to find peace in the midst of chaos and to hold onto hope even in the darkest of moments. May she know that she is never alone, and that you are always with her, guiding and supporting her along the way. Thank you for blessing us with such a wonderful character, and for reminding us of the power of faith and determination. Amen.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen2.jpg"), filename: "image4.jpg" },

  ],
)
Business.find(p_22.business_id).update_average_rating
p_23 = Review.create!(
  rating: 5,
  business_id: 16,
  user_id: 5,
  body: "Saber from Fate/Stay is a truly amazing character. From her striking appearance and regal demeanor to her unwavering sense of justice and selflessness, she embodies all of the qualities that make a hero truly great. She is a skilled warrior and leader, always putting the needs of others before her own, and willing to make the ultimate sacrifice for the greater good. Her unwavering dedication to her ideals, her loyalty to those she cares about, and her willingness to face any challenge with courage and determination make her a true inspiration to all who encounter her. Saber is a shining example of what it means to be a true hero, and her legacy will continue to inspire and empower us for generations to come.",

)

Business.find(p_23.business_id).update_average_rating
p_24 = Review.create!(
  rating: 4,
  business_id: 16,
  user_id: 6,
  body: "Naruto Uzumaki, the main character of the eponymous manga and anime series, is an iconic figure in modern shonen storytelling. He starts out as an underdog, an outcast in his village due to his status as a host for the Nine-Tailed Fox demon. But through his indomitable spirit, hard work, and perseverance, he rises to become one of the most powerful ninja in the world. Naruto's greatest strength lies in his unwavering determination, his ability to never give up even in the face of seemingly insurmountable obstacles. He possesses a heart of gold and a selfless desire to protect and help others, no matter the cost to himself. Naruto's journey is one of growth, both as a ninja and as a person, as he learns to navigate the complexities of the world and the people around him. He is a truly remarkable character, one whose impact on the world of anime and manga is undeniable..",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen7.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen3.jpg"), filename: "image9.jpg" },

  ],
)
Business.find(p_24.business_id).update_average_rating

p_25 = Review.create!(
  rating: 5,
  business_id: 16,
  user_id: 7,
  body: "Sasuke Uchiha, one of the most complex and fascinating characters in the Naruto universe, is a skilled and powerful shinobi with a tragic past. Haunted by the murder of his clan, Sasuke has become consumed by a desire for revenge against his older brother, Itachi. He is often cold and aloof, preferring to keep his emotions hidden beneath a façade of indifference. Despite this, Sasuke is fiercely loyal to those he cares about, especially his former teammate and friend, Naruto Uzumaki. Throughout his journey, Sasuke struggles with his own identity and sense of purpose, constantly questioning his decisions and motivations. But despite his flaws and mistakes, Sasuke remains a compelling and compellingly human character, a testament to the power of storytelling in the Naruto universe.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen4.jpg"), filename: "image5.jpg" },
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen6.jpg"), filename: "image9.jpg" },
  ],
)

Business.find(p_25.business_id).update_average_rating
p_26 = Review.create!(
  rating: 5,
  business_id: 16,
  user_id: 8,
  body: "Archer from Fate/stay is a complex and intriguing character. He is a skilled warrior with powerful abilities, but also a tortured soul with a troubled past. Despite his gruff exterior, Archer is deeply introspective and philosophical, often questioning the nature of heroism and the meaning of his own existence. His struggles with his own identity and purpose make him a compelling character to watch, and his conflicts with other characters in the Fate/stay series are always intense and emotional. Archer's abilities as a hero and a warrior are matched only by his depth as a character, making him an unforgettable figure in the world of anime and manga.",
  images: [
    { io: URI.open("https://zelp-seeds.s3.amazonaws.com/ramen2.jpg"), filename: "image6.jpg" },

  ],
)
Business.find(p_26.business_id).update_average_rating
