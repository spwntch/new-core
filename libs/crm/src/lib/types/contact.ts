export interface Contact {
  id: string;
  email: string;
  phone?: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  spwntch_contact_id?: string;
  fieldValues: { field: string; value: string }[];
}
