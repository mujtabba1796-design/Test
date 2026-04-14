import { supabase } from "./supabaseClient.js";
import { showDashboard } from "./dashboard.js";

export let currentSession = null;

export async function staffLogin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  currentSession = {
    type: "staff",
    ...profile,
  };

  showDashboard();
}

export async function logout() {
  await supabase.auth.signOut();
  currentSession = null;
  location.reload();
}