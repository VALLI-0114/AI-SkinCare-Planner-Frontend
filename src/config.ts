/**
 * Central API base URL configuration.
 * All API calls should use this instead of hardcoding localhost.
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
