import { supabase } from "@/integrations/supabase/client";

interface AnalyticsEvent {
  event_type: string;
  event_data?: Record<string, any>;
  session_id?: string;
  user_agent?: string;
}

class AnalyticsService {
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return crypto.randomUUID();
  }

  async track(event: AnalyticsEvent): Promise<void> {
    try {
      const { error } = await supabase
        .from('analytics_events')
        .insert([
          {
            event_type: event.event_type,
            event_data: event.event_data || {},
            session_id: event.session_id || this.sessionId,
            user_agent: navigator.userAgent,
            ip_address: null, // Will be handled server-side if needed
          }
        ]);

      if (error) {
        console.error('Analytics tracking error:', error);
      }
    } catch (error) {
      console.error('Failed to track analytics event:', error);
    }
  }

  // Calculator specific events
  async trackCalculatorInput(inputType: string, value: number | string): Promise<void> {
    await this.track({
      event_type: 'calculator_input',
      event_data: {
        input_type: inputType,
        value: value,
        timestamp: new Date().toISOString(),
      }
    });
  }

  async trackCalculatorCalculation(inputs: Record<string, any>, results: Record<string, any>): Promise<void> {
    await this.track({
      event_type: 'calculator_calculation',
      event_data: {
        inputs,
        results,
        timestamp: new Date().toISOString(),
      }
    });
  }

  async trackCalculatorShare(lostRevenue: number): Promise<void> {
    await this.track({
      event_type: 'calculator_share',
      event_data: {
        lost_revenue: lostRevenue,
        timestamp: new Date().toISOString(),
      }
    });
  }

  // Contact form events
  async trackContactFormSubmission(formData: Record<string, any>, leadScore: number): Promise<void> {
    await this.track({
      event_type: 'contact_form_submission',
      event_data: {
        ...formData,
        lead_score: leadScore,
        timestamp: new Date().toISOString(),
      }
    });
  }

  async trackContactFormStart(): Promise<void> {
    await this.track({
      event_type: 'contact_form_start',
      event_data: {
        timestamp: new Date().toISOString(),
      }
    });
  }

  // CTA and engagement events
  async trackCTAClick(ctaType: string, location: string): Promise<void> {
    await this.track({
      event_type: 'cta_click',
      event_data: {
        cta_type: ctaType,
        location: location,
        timestamp: new Date().toISOString(),
      }
    });
  }

  async trackPageView(page: string): Promise<void> {
    await this.track({
      event_type: 'page_view',
      event_data: {
        page,
        timestamp: new Date().toISOString(),
      }
    });
  }
}

export const analytics = new AnalyticsService();