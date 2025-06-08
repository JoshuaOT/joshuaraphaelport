
// EmailJS configuration
export const EMAILJS_CONFIG = {
  publicKey: 'tJBzd_JOrtcHqiu1x',
  serviceId: 'service_y5q0yye',
  templateId: 'template_03e63eg',
};

// Template parameters interface for type safety
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name?: string;
}
