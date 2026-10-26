import { neon } from '@neondatabase/serverless';

const DATABASE_URL = 
  import.meta.env.VITE_DATABASE_URL || 
  (typeof process !== 'undefined' && process.env?.DATABASE_URL) ||
  '';

let sqlClient = null;

export function getSqlClient() {
  if (!sqlClient && DATABASE_URL) {
    try {
      sqlClient = neon(DATABASE_URL);
    } catch (err) {
      console.warn('[Neon] Error initializing Neon client:', err);
    }
  }
  return sqlClient;
}

/**
 * Fetch latest site content from Neon Postgres
 */
export async function fetchSiteContentFromNeon() {
  const sql = getSqlClient();
  if (!sql) return null;

  try {
    const rows = await sql`SELECT data, updated_at FROM site_content WHERE id = 'main' LIMIT 1`;
    if (rows && rows.length > 0) {
      return rows[0].data;
    }
  } catch (err) {
    console.warn('[Neon] Failed to fetch site content from Neon, falling back to local:', err);
  }
  return null;
}

/**
 * Save site content updates to Neon Postgres
 */
export async function saveSiteContentToNeon(data) {
  const sql = getSqlClient();
  if (!sql) return false;

  try {
    await sql`
      INSERT INTO site_content (id, data, updated_at)
      VALUES ('main', ${JSON.stringify(data)}, NOW())
      ON CONFLICT (id) DO UPDATE
      SET data = EXCLUDED.data, updated_at = NOW()
    `;
    return true;
  } catch (err) {
    console.error('[Neon] Failed to save site content to Neon:', err);
    return false;
  }
}

/**
 * Save customer inquiry to Neon Postgres inquiries table
 */
export async function saveInquiryToNeon({ name, email, phone, program, message }) {
  const sql = getSqlClient();
  if (!sql) return false;

  try {
    await sql`
      INSERT INTO inquiries (name, email, phone, program, message, created_at)
      VALUES (${name || ''}, ${email || ''}, ${phone || ''}, ${program || ''}, ${message || ''}, NOW())
    `;
    return true;
  } catch (err) {
    console.error('[Neon] Failed to save inquiry to Neon:', err);
    return false;
  }
}

/**
 * Fetch list of inquiries from Neon
 */
export async function fetchInquiriesFromNeon() {
  const sql = getSqlClient();
  if (!sql) return [];

  try {
    const rows = await sql`SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 100`;
    return rows || [];
  } catch (err) {
    console.warn('[Neon] Failed to fetch inquiries from Neon:', err);
    return [];
  }
}
