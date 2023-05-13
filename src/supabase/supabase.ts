
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://dobsljkcvpobgyulxhlh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvYnNsamtjdnBvYmd5dWx4aGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0NTk0MzEsImV4cCI6MTk5OTAzNTQzMX0.iNx1PBaXKeEh0WhNbMEk2ZrGrM790y2UGTCxYqk9Qn8')
