import { supabase } from "../../supabase/supabase";

export const loginUserWithEmailAndPassword = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
        email,
        password
    });
};


export async function signInWithGoogle() {
    return await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}