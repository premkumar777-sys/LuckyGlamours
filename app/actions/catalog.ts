'use server';

import { createClient } from '@/lib/supabase/server';
import { PRODUCTS_CATALOG, type Product } from '@/data/products';
import { BEAUTY_SERVICES, type BeautyService } from '@/data/services';
import { ACADEMY_COURSES, type BeautyCourse } from '@/data/courses';

/**
 * Fetch products from Supabase, fallback to static data if table is empty or unconfigured
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return PRODUCTS_CATALOG;
    }

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      categoryLabel: item.category_label,
      tagline: item.tagline || '',
      description: item.description || '',
      priceInINR: Number(item.price_in_inr),
      size: item.size || '',
      ingredients: item.ingredients || [],
      directions: item.directions || '',
      precautions: item.precautions || '',
      placeholderLabel: item.name,
      imageUrl: item.image_url || undefined,
      isFeatured: item.is_featured,
    }));
  } catch {
    return PRODUCTS_CATALOG;
  }
}

/**
 * Fetch services from Supabase, fallback to static data
 */
export async function getServices(): Promise<BeautyService[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: true });

    if (error || !data || data.length === 0) {
      return BEAUTY_SERVICES;
    }

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      categoryLabel: item.category_label,
      description: item.description || '',
      occasion: item.occasion || '',
      startingPrice: item.starting_price || undefined,
      packageDetails: item.package_details || [],
      placeholderLabel: item.name,
      imageUrl: item.image_url || undefined,
      galleryImages: item.gallery_images || [],
    }));
  } catch {
    return BEAUTY_SERVICES;
  }
}

/**
 * Fetch academy courses from Supabase, fallback to static data
 */
export async function getCourses(): Promise<BeautyCourse[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: true });

    if (error || !data || data.length === 0) {
      return ACADEMY_COURSES;
    }

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      subtitle: item.subtitle || '',
      description: item.description || '',
      whatYouWillLearn: item.what_you_will_learn || [],
      format: item.format || '',
      duration: item.duration || 'Contact us for course details',
      eligibility: item.eligibility || 'Open to all',
      fees: item.fees || 'Contact us for course fees',
      placeholderLabel: item.name,
      imageUrl: item.image_url || undefined,
      galleryImages: item.gallery_images || [],
    }));
  } catch {
    return ACADEMY_COURSES;
  }
}
