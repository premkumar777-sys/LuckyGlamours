-- =============================================================================
-- LUCKY GLAMOURS - IDEMPOTENT DATABASE INITIALIZATION
-- Safe to run multiple times without 42710 errors!
-- =============================================================================

-- 1. ENUMS (Safe creation)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE user_role AS ENUM ('admin', 'customer');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'product_category') THEN
    CREATE TYPE product_category AS ENUM ('soaps', 'hair-oils', 'body-oils', 'gift-sets');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'service_category') THEN
    CREATE TYPE service_category AS ENUM ('bridal-groom', 'occasion', 'photoshoot');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'inquiry_type') THEN
    CREATE TYPE inquiry_type AS ENUM ('product_order', 'service_booking', 'course_enrollment', 'general');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'inquiry_status') THEN
    CREATE TYPE inquiry_status AS ENUM ('new', 'in_progress', 'confirmed', 'completed', 'cancelled');
  END IF;
END $$;

-- 2. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  role user_role DEFAULT 'customer',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category product_category NOT NULL,
  category_label TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  price_in_inr NUMERIC(10, 2) NOT NULL,
  size TEXT,
  ingredients TEXT[] DEFAULT '{}',
  directions TEXT,
  precautions TEXT,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_in_stock BOOLEAN DEFAULT true,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category service_category NOT NULL,
  category_label TEXT NOT NULL,
  description TEXT,
  occasion TEXT,
  starting_price TEXT,
  package_details TEXT[] DEFAULT '{}',
  image_url TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. COURSES TABLE
CREATE TABLE IF NOT EXISTS public.courses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  what_you_will_learn TEXT[] DEFAULT '{}',
  format TEXT,
  duration TEXT,
  eligibility TEXT,
  fees TEXT,
  image_url TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type inquiry_type NOT NULL,
  target_id TEXT,
  target_name TEXT,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  preferred_date DATE,
  location TEXT,
  message TEXT,
  status inquiry_status DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  service_or_product_tag TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
