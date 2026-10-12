export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = 'admin' | 'customer';
export type ProductCategory = 'soaps' | 'hair-oils' | 'body-oils' | 'gift-sets';
export type ServiceCategory = 'bridal-groom' | 'occasion' | 'photoshoot';
export type InquiryType = 'product_order' | 'service_booking' | 'course_enrollment' | 'general';
export type InquiryStatus = 'new' | 'in_progress' | 'confirmed' | 'completed' | 'cancelled';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          phone: string | null;
          role: UserRole;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          phone?: string | null;
          role?: UserRole;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          phone?: string | null;
          role?: UserRole;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          name: string;
          category: ProductCategory;
          category_label: string;
          tagline: string | null;
          description: string | null;
          price_in_inr: number;
          size: string | null;
          ingredients: string[];
          directions: string | null;
          precautions: string | null;
          image_url: string | null;
          is_featured: boolean;
          is_in_stock: boolean;
          stock_quantity: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          category: ProductCategory;
          category_label: string;
          tagline?: string | null;
          description?: string | null;
          price_in_inr: number;
          size?: string | null;
          ingredients?: string[];
          directions?: string | null;
          precautions?: string | null;
          image_url?: string | null;
          is_featured?: boolean;
          is_in_stock?: boolean;
          stock_quantity?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          category?: ProductCategory;
          category_label?: string;
          tagline?: string | null;
          description?: string | null;
          price_in_inr?: number;
          size?: string | null;
          ingredients?: string[];
          directions?: string | null;
          precautions?: string | null;
          image_url?: string | null;
          is_featured?: boolean;
          is_in_stock?: boolean;
          stock_quantity?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      services: {
        Row: {
          id: string;
          name: string;
          category: ServiceCategory;
          category_label: string;
          description: string | null;
          occasion: string | null;
          starting_price: string | null;
          package_details: string[];
          image_url: string | null;
          gallery_images: string[];
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          name: string;
          category: ServiceCategory;
          category_label: string;
          description?: string | null;
          occasion?: string | null;
          starting_price?: string | null;
          package_details?: string[];
          image_url?: string | null;
          gallery_images?: string[];
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          category?: ServiceCategory;
          category_label?: string;
          description?: string | null;
          occasion?: string | null;
          starting_price?: string | null;
          package_details?: string[];
          image_url?: string | null;
          gallery_images?: string[];
          is_active?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      courses: {
        Row: {
          id: string;
          name: string;
          subtitle: string | null;
          description: string | null;
          what_you_will_learn: string[];
          format: string | null;
          duration: string | null;
          eligibility: string | null;
          fees: string | null;
          image_url: string | null;
          gallery_images: string[];
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id: string;
          name: string;
          subtitle?: string | null;
          description?: string | null;
          what_you_will_learn?: string[];
          format?: string | null;
          duration?: string | null;
          eligibility?: string | null;
          fees?: string | null;
          image_url?: string | null;
          gallery_images?: string[];
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          subtitle?: string | null;
          description?: string | null;
          what_you_will_learn?: string[];
          format?: string | null;
          duration?: string | null;
          eligibility?: string | null;
          fees?: string | null;
          image_url?: string | null;
          gallery_images?: string[];
          is_active?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      inquiries: {
        Row: {
          id: string;
          type: InquiryType;
          target_id: string | null;
          target_name: string | null;
          customer_name: string;
          customer_phone: string;
          customer_email: string | null;
          preferred_date: string | null;
          location: string | null;
          message: string | null;
          status: InquiryStatus;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          type: InquiryType;
          target_id?: string | null;
          target_name?: string | null;
          customer_name: string;
          customer_phone: string;
          customer_email?: string | null;
          preferred_date?: string | null;
          location?: string | null;
          message?: string | null;
          status?: InquiryStatus;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          type?: InquiryType;
          target_id?: string | null;
          target_name?: string | null;
          customer_name?: string;
          customer_phone?: string;
          customer_email?: string | null;
          preferred_date?: string | null;
          location?: string | null;
          message?: string | null;
          status?: InquiryStatus;
          notes?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          id: string;
          author_name: string;
          rating: number;
          comment: string;
          service_or_product_tag: string | null;
          is_approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          author_name: string;
          rating: number;
          comment: string;
          service_or_product_tag?: string | null;
          is_approved?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          author_name?: string;
          rating?: number;
          comment?: string;
          service_or_product_tag?: string | null;
          is_approved?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      user_role: UserRole;
      product_category: ProductCategory;
      service_category: ServiceCategory;
      inquiry_type: InquiryType;
      inquiry_status: InquiryStatus;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
