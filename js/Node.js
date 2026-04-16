// Node.js script (run with `node createUser.js`)
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY); // Use service_role key for admin operations

async function createUserWithUsername(username, email, password, fullName, role, section) {
  // Create auth user
  const { data: authUser, error: signUpError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });
  if (signUpError) throw signUpError;

  // Create profile
  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: authUser.user.id,
      username,
      full_name: fullName,
      email,
      role,
      section
    });
  if (profileError) throw profileError;

  console.log(`User created: ${username} (${email})`);
}

// Example usage
createUserWithUsername('john_teacher', 'john@school.com', 'SecurePass123', 'John Doe', 'teacher', 'regular islamiyyah');
