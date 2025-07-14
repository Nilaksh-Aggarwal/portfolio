// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Email template parameters interface
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name?: string;
}
