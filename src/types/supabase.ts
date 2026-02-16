export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      article_jobs: {
        Row: {
          article_id: string | null
          blog_id: string
          completed_at: string | null
          created_at: string
          current_step: string | null
          error_message: string | null
          id: string
          input_data: Json
          priority: number | null
          progress: number | null
          started_at: string | null
          status: Database["public"]["Enums"]["job_status"] | null
          updated_at: string
        }
        Insert: {
          article_id?: string | null
          blog_id: string
          completed_at?: string | null
          created_at?: string
          current_step?: string | null
          error_message?: string | null
          id?: string
          input_data: Json
          priority?: number | null
          progress?: number | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
          updated_at?: string
        }
        Update: {
          article_id?: string | null
          blog_id?: string
          completed_at?: string | null
          created_at?: string
          current_step?: string | null
          error_message?: string | null
          id?: string
          input_data?: Json
          priority?: number | null
          progress?: number | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_jobs_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_jobs_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
      article_tags: {
        Row: {
          article_id: string
          tag_id: string
        }
        Insert: {
          article_id: string
          tag_id: string
        }
        Update: {
          article_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_tags_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          author_avatar: string | null
          author_bio: string | null
          author_id: string
          author_name: string | null
          blog_id: string
          canonical_url: string | null
          category_id: string | null
          content: string | null
          content_json: Json | null
          created_at: string
          creation_params: Json | null
          excerpt: string | null
          featured_image: string | null
          featured_image_alt: string | null
          focus_keyword: string | null
          id: string
          instagram_post_url: string | null
          keywords: string[] | null
          language: string | null
          nofollow: boolean | null
          noindex: boolean | null
          og_data: Json | null
          published_at: string | null
          read_time: number | null
          scheduled_for: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          social_summary: string | null
          status: Database["public"]["Enums"]["article_status"] | null
          title: string
          translation_group_id: string | null
          updated_at: string
          views: number | null
        }
        Insert: {
          author_avatar?: string | null
          author_bio?: string | null
          author_id: string
          author_name?: string | null
          blog_id: string
          canonical_url?: string | null
          category_id?: string | null
          content?: string | null
          content_json?: Json | null
          created_at?: string
          creation_params?: Json | null
          excerpt?: string | null
          featured_image?: string | null
          featured_image_alt?: string | null
          focus_keyword?: string | null
          id?: string
          instagram_post_url?: string | null
          keywords?: string[] | null
          language?: string | null
          nofollow?: boolean | null
          noindex?: boolean | null
          og_data?: Json | null
          published_at?: string | null
          read_time?: number | null
          scheduled_for?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          social_summary?: string | null
          status?: Database["public"]["Enums"]["article_status"] | null
          title: string
          translation_group_id?: string | null
          updated_at?: string
          views?: number | null
        }
        Update: {
          author_avatar?: string | null
          author_bio?: string | null
          author_id?: string
          author_name?: string | null
          blog_id?: string
          canonical_url?: string | null
          category_id?: string | null
          content?: string | null
          content_json?: Json | null
          created_at?: string
          creation_params?: Json | null
          excerpt?: string | null
          featured_image?: string | null
          featured_image_alt?: string | null
          focus_keyword?: string | null
          id?: string
          instagram_post_url?: string | null
          keywords?: string[] | null
          language?: string | null
          nofollow?: boolean | null
          noindex?: boolean | null
          og_data?: Json | null
          published_at?: string | null
          read_time?: number | null
          scheduled_for?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          social_summary?: string | null
          status?: Database["public"]["Enums"]["article_status"] | null
          title?: string
          translation_group_id?: string | null
          updated_at?: string
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "articles_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      blogs: {
        Row: {
          config: Json | null
          created_at: string
          description: string | null
          domain: string | null
          favicon_url: string | null
          id: string
          logo_url: string | null
          name: string
          owner_id: string
          slug: string
          status: Database["public"]["Enums"]["blog_status"] | null
          updated_at: string
        }
        Insert: {
          config?: Json | null
          created_at?: string
          description?: string | null
          domain?: string | null
          favicon_url?: string | null
          id?: string
          logo_url?: string | null
          name: string
          owner_id: string
          slug: string
          status?: Database["public"]["Enums"]["blog_status"] | null
          updated_at?: string
        }
        Update: {
          config?: Json | null
          created_at?: string
          description?: string | null
          domain?: string | null
          favicon_url?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          owner_id?: string
          slug?: string
          status?: Database["public"]["Enums"]["blog_status"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blogs_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          blog_id: string
          color: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          parent_id: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          blog_id: string
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          parent_id?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          blog_id?: string
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          parent_id?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      clicks: {
        Row: {
          article_slug: string | null
          created_at: string | null
          id: string
          product_id: string | null
          user_agent: string | null
        }
        Insert: {
          article_slug?: string | null
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_agent?: string | null
        }
        Update: {
          article_slug?: string | null
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clicks_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      partners: {
        Row: {
          created_at: string | null
          id: string
          logo_url: string | null
          name: string
          status: string | null
          website_url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name: string
          status?: string | null
          website_url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          status?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          affiliate_link: string
          category_id: string | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          is_verified: boolean | null
          name: string
          partner_id: string | null
          price: number | null
          rating: number | null
          reviews_count: number | null
        }
        Insert: {
          affiliate_link: string
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_verified?: boolean | null
          name: string
          partner_id?: string | null
          price?: number | null
          rating?: number | null
          reviews_count?: number | null
        }
        Update: {
          affiliate_link?: string
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_verified?: boolean | null
          name?: string
          partner_id?: string | null
          price?: number | null
          rating?: number | null
          reviews_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          name: string | null
          role: Database["public"]["Enums"]["feature_role"] | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          id: string
          name?: string | null
          role?: Database["public"]["Enums"]["feature_role"] | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["feature_role"] | null
          updated_at?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      article_status:
        | "DRAFT"
        | "IN_REVIEW"
        | "SCHEDULED"
        | "PUBLISHED"
        | "ARCHIVED"
      blog_status: "ACTIVE" | "INACTIVE" | "SUSPENDED"
      feature_role: "ADMIN" | "EDITOR" | "WRITER" | "VIEWER"
      job_status:
        | "PENDING"
        | "PROCESSING"
        | "COMPLETED"
        | "FAILED"
        | "CANCELLED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      article_status: [
        "DRAFT",
        "IN_REVIEW",
        "SCHEDULED",
        "PUBLISHED",
        "ARCHIVED",
      ],
      blog_status: ["ACTIVE", "INACTIVE", "SUSPENDED"],
      feature_role: ["ADMIN", "EDITOR", "WRITER", "VIEWER"],
      job_status: ["PENDING", "PROCESSING", "COMPLETED", "FAILED", "CANCELLED"],
    },
  },
} as const
