/*
============================================
============================================
            **** WARNING ****
  RUNNING THIS SCRIPT WILL DELETE AND\OR
  OVERWRITE YOUR Bnews DATABASE !!!!!!!
============================================
============================================
*/

const connectDB = require('./config/db')
const { users, contact, news, staff  } = require('./data/data')
const User = require('./models/User')
const News = require('./models/News')
const Contact = require('./models/contacts')
const Staff = require('./models/Staff')

const seedAll = async() => {

  console.log('\nDatabase seeding started...');

  try {
    
    // Seed news

      // delete all existing news
      await News.deleteMany();
      // insert seed news
      const insertedNews = await News.insertMany(news);
      console.log(`  [i] Inserted ${insertedNews.length} news`);

    // Seed users

      // delete all existing users
      await User.deleteMany();
      // insert seed users
      const insertedUsers = await User.insertMany(users);
      console.log(`  [i] Inserted ${insertedUsers.length} users`);

    // Seed contact

      // delete all existing users
      await Contact.deleteMany();
      // insert seed users
      const insertedContact = await Contact.insertMany(contact);
      console.log(`  [i] Inserted ${insertedContact.length} contacts`);
    
    // Seed staff

      // delete all existing users
      await Staff.deleteMany();
      // insert seed staff
      const insertedStaff = await Staff.insertMany(staff);
      console.log(`  [i] Inserted ${insertedStaff.length} staff`);

    // Success

      console.log('[v] Completed successfully');
      process.exit(0);

  } catch(e) {

    // Error

      console.log('[x] Seeding error')
      console.log(e.message)
      process.exit(1);

  }

}

// Connect to database
connectDB().then(()=>{
  // Seed all collections
  seedAll()
});


/*

npm run ceed.js

*/