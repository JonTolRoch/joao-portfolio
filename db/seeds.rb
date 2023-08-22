# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Project.destroy_all

telecosmo = Project.create(
  name: 'TeleCosmo',
  description: 'A collaborative Streaming mobile application for engaging youngsters in literature and story telling',
  url: 'http://www.telecosmo.com.br/',
  image: 'TeleCosmoLogo.png',
  in_depth_description: 'As for the final group project in my bootcamp ,my team decided to go for a mobile application.Drawing inspiration from the intuitive UI/UX of renowned streaming services , we came up with a multifaceted product that works not only as a streaming platform ,but included social components, enabling users to establish profiles, cultivate friendships, personalize avatars, and engage in dynamic chatrooms. My contributions can be checked on GitHub. All art was envisioned by Sonhorama.',
  modal_image: 'TelecosmoModal1.png',
  modal_image_2: 'TelecosmoModal2.png',
  modal_image_3: 'TelecosmoModal3.png',
  gh_repo: 'https://github.com/dlameira/Telecosmo'
)

mentormeet = Project.create(
  name:'MentorMeet',
  description:'A collaborative project that consists in a mentorship marketplace. Users can either offer or hire mentorships.',
  url:"http://meetmentor.herokuapp.com",
  image:'MentorMeetLogo.png',
  in_depth_description: "In my debut team project, we developed a browser application modeled after popular marketplaces like Airbnb. Built on the Ruby on Rails framework, this project expanded my knowledge regarding more complex databases, join tables, and nested structures. JavaScript functionalities were integrated for enhanced interactivity.You can check my contributions to this project on GitHub",
  modal_image:'MentorMeetModal1.png',
  modal_image_2:'MentorMeetModal2.png',
  modal_image_3:'MentorMeetModal3.png',
  gh_repo:"https://github.com/patricksanto/mentormeet"
)

movietime = Project.create(
  name:'MovieTime',
  description: 'A simple Application to create and edit your own Movie lists. Makes use of TMDB API.',
  url:'https://example.com',
  image:'MovieTimeLogo.png',
  in_depth_description:"My First Solo Project provided invaluable learning experiences, testing my understanding of CRUD actions, MVC architecture, database management, and the integration of external APIs. The project was developed using the Ruby on Rails framework.",
  modal_image:'MovieTimeModal1.png',
  modal_image_2:'MovieTimeModal2.png',
  modal_image_3:'MovieTimeModal3.png',
  gh_repo:"https://github.com/JonTolRoch/again-list"
)

puts  "Seeding successful"




