'use server';

import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

type InquiryInsert = Database['public']['Tables']['inquiries']['Insert'];

export async function submitInquiry(data: InquiryInsert) {
  try {
    const supabase = createClient();
    
    const { data: inquiry, error } = await supabase
      .from('inquiries')
      .insert({
        type: data.type,
        target_id: data.target_id || null,
        target_name: data.target_name || null,
        customer_name: data.customer_name,
        customer_phone: data.customer_phone,
        customer_email: data.customer_email || null,
        preferred_date: data.preferred_date || null,
        location: data.location || null,
        message: data.message || null,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error inserting inquiry:', error);
      return { success: false, error: error.message };
    }

    return { success: true, inquiry };
  } catch (err: any) {
    console.error('Error submitting inquiry:', err);
    return { success: false, error: err?.message || 'Unexpected error' };
  }
}
