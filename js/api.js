import { supabase } from "./supabaseClient.js";

export const api = {

  async getStudents() {
    const { data, error } = await supabase.from("students").select("*");
    if (error) throw error;
    return data;
  },

  async updateFeeStatus(id, status) {
    return supabase.from("students")
      .update({ fee_status: status })
      .eq("id", id);
  },

  async saveAttendance(records) {
    return supabase.from("attendance_records")
      .upsert(records, { onConflict: "student_id,date" });
  },

  async saveGrades(records) {
    return supabase.from("grades")
      .upsert(records, { onConflict: "student_id,subject,term,year" });
  },

  async getApplications() {
    const { data } = await supabase.from("applications").select("*");
    return data;
  }

};