import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

// Load environment variables
dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📱 Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@chandanmee.com' });
    
    if (existingAdmin) {
      console.log('❌ Admin user already exists');
      process.exit(1);
    }

    // Create admin user
    const adminUser = await User.create({
      name: 'Chandan Admin',
      email: 'admin@chandanmee.com',
      password: 'admin123456', // This will be hashed automatically
      role: 'admin',
      bio: 'Portfolio Administrator',
      isActive: true
    });

    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@chandanmee.com');
    console.log('🔑 Password: admin123456');
    console.log('⚠️  Please change the password after first login');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
  }
};

createAdmin();