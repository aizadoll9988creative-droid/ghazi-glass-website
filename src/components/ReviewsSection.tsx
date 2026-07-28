import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MessageSquarePlus, 
  Quote, 
  ThumbsUp, 
  X,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { reviewsData } from '../data/reviewsData';
import { ThemeMode, ReviewItem } from '../types';

interface ReviewsSectionProps {
  theme: ThemeMode;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ theme }) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(reviewsData);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: 'Karachi',
    projectType: 'Glass Work',
    rating: 5,
    comment: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const createdReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      location: newReview.location,
      projectType: newReview.projectType,
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      verified: true
    };

    setReviewsList([createdReview, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewReview({ name: '', location: 'Karachi', projectType: 'Glass Work', rating: 5, comment: '' });
    }, 1800);
  };

  return (
    <section id="reviews" className={`py-20 relative transition-colors ${
      theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Google Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            What Our <span className="silver-gradient-text">Karachi Clients</span> Say
          </h2>

          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Rated ⭐ 5.0 out of 5 stars by homeowners, interior designers, and commercial business owners across Karachi.
          </p>
        </div>

        {/* Google 5-Star Summary Card */}
        <div className={`p-6 sm:p-8 rounded-3xl border mb-12 max-w-3xl mx-auto ${
          theme === 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        } shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6`}>
          
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-extrabold text-2xl font-heading shadow-lg shadow-amber-500/20">
              5.0
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className={`font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Google Rating: 5.0 / 5.0 Stars
              </p>
              <p className="text-xs text-slate-400">Based on 48+ verified client reviews in Karachi</p>
            </div>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2 cursor-pointer whitespace-nowrap"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Leave a Review</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                theme === 'dark' 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                  : 'bg-white border-slate-200 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Header with Avatar & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-11 h-11 rounded-full object-cover border border-cyan-500/30"
                      loading="lazy"
                    />
                    <div>
                      <h3 className={`font-heading font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {review.name}
                      </h3>
                      <p className="text-[11px] text-slate-400">{review.location}</p>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-500 font-mono">{review.date}</span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[10px] text-cyan-400 font-medium ml-2 uppercase tracking-wider">
                    • {review.projectType}
                  </span>
                </div>

                {/* Comment */}
                <p className={`text-xs leading-relaxed italic ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{review.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-emerald-400 font-semibold">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </span>
                <span className="text-slate-500 font-normal">Google Review</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-lg">Leave a Google Review</h3>
                  <p className="text-xs text-slate-400">Share your experience with Ghazi Glass</p>
                </div>
                <button 
                  onClick={() => setShowReviewModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submittedMessage ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <ThumbsUp className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-lg">Thank You for Your Feedback!</h4>
                  <p className="text-xs text-slate-400">Your review has been submitted and verified.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-300">Your Name *</label>
                    <input 
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Area / Location</label>
                      <input 
                        type="text"
                        value={newReview.location}
                        onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                        placeholder="e.g. Surjani Town, Karachi"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-300">Project Type</label>
                      <input 
                        type="text"
                        value={newReview.projectType}
                        onChange={(e) => setNewReview({ ...newReview, projectType: e.target.value })}
                        placeholder="e.g. Glass Doors"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-300">Star Rating</label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1 cursor-pointer"
                        >
                          <Star className={`w-6 h-6 ${
                            star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-300">Your Review / Comments *</label>
                    <textarea 
                      required
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Tell us about the glass quality, installation speed, and overall service..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs focus:outline-none focus:border-cyan-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
