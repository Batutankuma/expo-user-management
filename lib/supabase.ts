import 'react-native-url-polyfill';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oqrlkfsdonhrivftpvbh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcmxrZnNkb25ocml2ZnRwdmJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwMDIxMDcsImV4cCI6MjAyNTU3ODEwN30.9v3gOnbFZA602GgZ-fB1Mz4b0HFYooOKIaSXsoQ-9wY";

export const supabase = createClient(supabaseUrl,supabaseAnonKey,{
    auth:{
        storage: AsyncStorage,
        autoRefreshToken:true,
        persistSession:true,
        detectSessionInUrl:true
    }
})