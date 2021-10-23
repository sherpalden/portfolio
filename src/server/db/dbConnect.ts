import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongooseObj

if (!cached) {
  cached = (global as any).mongooseObj = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    cached.promise = mongoose
      .connect(String(MONGODB_URI), opts)
      .then((mongoose) => {
        console.log('Database connection success')
        return mongoose
      })
      .catch((error) => {
        console.log('Database coneection error: ', error)
      })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export { dbConnect }
