import React from 'react';

export const CustomerFeedback: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-ivory-light border-b border-sage/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-ivory border border-sage/60 rounded-sm p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-light/60 rounded border border-sage/60 text-earth text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-olive" />
            <span>AUTHENTIC COMMUNITY REVIEWS</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
            Customer Feedback & Reviews
          </h2>

          <p className="font-sans text-xs sm:text-sm text-charcoal/70 max-w-xl mx-auto leading-relaxed">
            We value genuine customer experiences above all else. Verified customer feedback, batch reviews, and notes from our community will be featured here as we fulfill early orders.
          </p>

          <div className="pt-2 text-xs font-sans text-earth italic">
            &ldquo;Honest skincare deserves honest reviews.&rdquo;
          </div>
        </div>

      </div>
    </section>
  );
};
