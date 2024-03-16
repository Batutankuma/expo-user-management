import { Session } from '@supabase/supabase-js';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { supabase } from './lib/supabase';
import Account from './components/compte';
import Auth from './components/auth';
import Sound from './components/sound';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <View style={{flex:1,marginTop: 40,}}>
      <Sound />
    </View>
  );
}

/**
 * <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
 */

