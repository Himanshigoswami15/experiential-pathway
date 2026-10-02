import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import './SchoolGroupPage.css';

export default function SchoolGroupPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw4S5yXbHl1kMM1qxMzPKygriXzxvWHWamqEbEXIrHAxQCjI88WppBixOnXdyp9clDs/exec';

  const quizData = [
    {
      id: "goal",
      question: "What is your primary goal for this school trip?",
      options: [
        { text: "Service Learning & Community Impact", value: "Service" },
        { text: "Cultural Immersion & History", value: "Culture" },
        { text: "Outdoor Adventure & Nature", value: "Nature" },
        { text: "Language Intensive Practice", value: "Language" },
        { text: "Other / Custom (Add comments)", value: "Other" }
      ]
    },
    {
      id: "age",
      question: "What age group are your students?",
      options: [
        { text: "Middle School (11-14)", value: "Middle" },
        { text: "High School (14-18)", value: "High" },
        { text: "College / University", value: "College" },
        { text: "Other / Mixed Age Groups (Add comments)", value: "Other" }
      ]
    },
    {
      id: "timing",
      question: "When are you planning to travel?",
      options: [
        { text: "Spring Break", value: "Spring" },
        { text: "Summer", value: "Summer" },
        { text: "Fall / Winter", value: "Fall" },
        { text: "Other / Flexible Dates (Add comments)", value: "Other" }
      ]
    }
  ];

  // Quiz States: 'hidden' | 'intro' | 'questions' | 'details' | 'completed'
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    school: '',
    phone: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggleQuiz = () => {
    setShowQuiz(!showQuiz);
    if (!showQuiz) {
      setTimeout(() => {
        const el = document.getElementById('quizContainer');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleOptionSelect = (optionValue) => {
    const currentQ = quizData[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionValue
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Collect any comments written during the quiz steps into formData.comments
      const collectedNotes = [];
      if (userAnswers.goal_comment) {
        collectedNotes.push(`Goal (${userAnswers.goal || 'Custom'}): ${userAnswers.goal_comment}`);
      }
      if (userAnswers.age_comment) {
        collectedNotes.push(`Age (${userAnswers.age || 'Custom'}): ${userAnswers.age_comment}`);
      }
      if (userAnswers.timing_comment) {
        collectedNotes.push(`Timing (${userAnswers.timing || 'Custom'}): ${userAnswers.timing_comment}`);
      }

      if (collectedNotes.length > 0 && !formData.comments) {
        setFormData(prev => ({
          ...prev,
          comments: collectedNotes.join('\n')
        }));
      }
      setQuizStep('details');
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setQuizStep('intro');
    }
  };

  const handleSubmitDetails = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const goalLabel = userAnswers.goal === 'Other'
      ? (userAnswers.goal_comment ? `Other (${userAnswers.goal_comment})` : 'Other / Custom')
      : (quizData[0].options.find(o => o.value === userAnswers.goal)?.text || '');

    const ageLabel = userAnswers.age === 'Other'
      ? (userAnswers.age_comment ? `Other (${userAnswers.age_comment})` : 'Other / Mixed')
      : (quizData[1].options.find(o => o.value === userAnswers.age)?.text || '');

    const timingLabel = userAnswers.timing === 'Other'
      ? (userAnswers.timing_comment ? `Other (${userAnswers.timing_comment})` : 'Other / Flexible')
      : (quizData[2].options.find(o => o.value === userAnswers.timing)?.text || '');

    const allComments = [
      formData.comments,
      userAnswers.goal_comment && !formData.comments?.includes(userAnswers.goal_comment) ? `Goal notes: ${userAnswers.goal_comment}` : '',
      userAnswers.age_comment && !formData.comments?.includes(userAnswers.age_comment) ? `Age notes: ${userAnswers.age_comment}` : '',
      userAnswers.timing_comment && !formData.comments?.includes(userAnswers.timing_comment) ? `Timing notes: ${userAnswers.timing_comment}` : '',
    ].filter(Boolean).join('\n');

    const submissionData = {
      fullName: formData.fullName,
      email: formData.email,
      school: formData.school,
      phone: formData.phone,
      comments: allComments || 'None',
      message: allComments || 'None',
      goal: goalLabel,
      age: ageLabel,
      timing: timingLabel
    };

    try {
      const params = new URLSearchParams();
      for (const key in submissionData) {
        params.append(key, submissionData[key]);
      }
      params.append('sheetName', 'Sheet1');

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        body: params
      });
      setQuizStep('completed');
    } catch (err) {
      console.error('Quiz submit error:', err);
      alert('There was an issue submitting your details. Please try again or reach out to us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQ = quizData[currentQuestionIndex];
  const isCurrentQAnswered = !!userAnswers[currentQ?.id];

  return (
    <div className="school-group-page">
      {/* ===== Hero Section ===== */}
      <section className="school-hero">
        <div className="container">
          <div className="school-hero-content">
            <h1 className="text-uppercase fw-bold school-main-heading">
              SCHOOL GROUP TRAVEL FOR EDUCATORS
            </h1>
            <h2 className="school-sub-heading">
              Customized, Hassle-Free Trips.
            </h2>
            <p className="school-desc">
              Experiential Pathways designs customized, hassle-free school group travel programs that help
              educators expand learning beyond the classroom through immersive service and cultural experiences.
            </p>
            <div className="hero-actions">
              <button 
                type="button" 
                id="heroCustomizeBtn"
                onClick={handleToggleQuiz}
                className="btn-primary-custom text-uppercase"
              >
                Start Customizing Your Program
              </button>
              <a 
                href="https://drive.google.com/file/d/1tphxyX0TYjiUmSC192HIbHaiWHk6LLQD/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary-custom text-uppercase"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Vision & Expertise Section ===== */}
      <section className="vision-section">
        <div className="container">
          {/* First Row */}
          <div className="row g-5 align-items-center mb-5 pb-5">
            <div className="col-lg-6 pe-lg-5">
              <h2 className="vision-heading">Your Vision for Educational Tours, Our Expertise in Student Travel</h2>
              <p className="vision-text">
                School group travel with Experiential Pathways takes education beyond the classroom to
                destinations across the world. We partner creatively with schools to help teachers support their
                educational trip visions.
              </p>
              <p className="vision-text">
                Our team of current and former educators has expertise customizing experiences that prioritize
                safety and align with your goals for educational tours.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="/gallery/school/1.png" 
                className="vision-image" 
                alt="Educational Tours in South Asia"
                onError={(e) => { e.target.src = 'gallery/school/1.png'; }}
              />
            </div>
          </div>

          {/* Second Row (Zig-Zag) */}
          <div className="row g-5 align-items-center flex-row-reverse mb-5 pb-5">
            <div className="col-lg-6 ps-lg-5">
              <p className="vision-text">
                Through custom school group travel, you can build the best trip to transform students into
                lifetime learners. You can plan the entire trip or leave it up to Experiential Pathways to build
                your perfect educational tour.
              </p>
              <p className="vision-text">
                We guide you through the process of traveling with students. We can pull the prep and details of
                student travel off of your plate while you can focus on your vision.
              </p>
              <p className="vision-text">
                We love working with educators who know what they want. From discovering local culture on a fun
                short trip to a deep dive into community service in Nepal. We are ready for your trip of a
                lifetime.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="/gallery/school/2.png" 
                className="vision-image" 
                alt="Students traveling and exploring"
                onError={(e) => { e.target.src = 'gallery/school/2.png'; }}
              />
            </div>
          </div>

          {/* Quiz Container (Opened from Hero Action) */}
          {showQuiz && (
            <div className="row mt-4">
              <div className="col-12 text-center">
                <div id="quizContainer" className="quiz-container mt-2">
                  <div className="d-flex justify-content-end mb-3">
                    <button 
                      type="button" 
                      onClick={() => setShowQuiz(false)} 
                      className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1"
                      style={{ fontSize: '0.85rem' }}
                    >
                      ✕ Close Customizer
                    </button>
                  </div>
                  {/* Step 0: Quiz Intro */}
                  {quizStep === 'intro' && (
                    <div id="quizIntro" className="quiz-card p-4 p-md-5 text-center mx-auto">
                      <img 
                        src="/gallery/home-page/11.png" 
                        alt="Quiz Illustration"
                        style={{ width: '120px', height: '120px', objectFit: 'cover', marginBottom: '25px', borderRadius: '50%' }}
                        onError={(e) => { e.target.src = 'gallery/home-page/11.png'; }}
                      />
                      <h3 className="fw-bold mb-3" style={{ color: '#3b3500', fontSize: '2rem' }}>
                        Find Your Perfect Program
                      </h3>
                      <p className="mb-4" style={{ color: '#5f5863', fontSize: '1.1rem' }}>
                        Take our 30-second quiz to discover your ideal Experiential Pathways trips!
                      </p>
                      <button 
                        id="startQuizBtn" 
                        onClick={() => { setQuizStep('questions'); setCurrentQuestionIndex(0); }}
                        className="btn-primary-custom"
                        style={{ padding: '12px 40px', fontSize: '1.1rem', borderRadius: '8px' }}
                      >
                        START QUIZ
                      </button>
                    </div>
                  )}

                  {/* Step 1-3: Quiz Questions */}
                  {quizStep === 'questions' && (
                    <div id="quizQuestionBox" className="quiz-card p-4 p-md-5 text-start mx-auto">
                      <h4 className="fw-bold mb-4" style={{ color: '#3b3500', fontSize: '1.5rem' }}>
                        {currentQ.question}
                      </h4>
                      <div className="quiz-options d-flex flex-column gap-3 mb-3">
                        {currentQ.options.map(opt => {
                          const isSelected = userAnswers[currentQ.id] === opt.value;
                          return (
                            <label 
                              key={opt.value} 
                              className={`quiz-option-label ${isSelected ? 'selected' : ''}`}
                              onClick={() => handleOptionSelect(opt.value)}
                            >
                              <input 
                                type="radio" 
                                name="quizOption" 
                                value={opt.value} 
                                checked={isSelected}
                                onChange={() => handleOptionSelect(opt.value)}
                              />
                              <span className="quiz-option-text">{opt.text}</span>
                            </label>
                          );
                        })}
                      </div>

                      {/* Comment section for the question option */}
                      {userAnswers[currentQ.id] === 'Other' ? (
                        <div className="mb-4 text-start">
                          <label htmlFor="stepCommentInput" className="form-label small fw-bold text-uppercase" style={{ color: '#3b3500' }}>
                            Please add your comments / specific requirements:
                          </label>
                          <textarea 
                            id="stepCommentInput"
                            className="form-control quiz-input"
                            rows={3}
                            placeholder="Write your comments, custom goals, or specific ideas here..."
                            value={userAnswers[currentQ.id + '_comment'] || ''}
                            onChange={(e) => {
                              const val = e.target.value;
                              setUserAnswers(prev => ({
                                ...prev,
                                [currentQ.id + '_comment']: val
                              }));
                            }}
                            autoFocus
                            style={{ resize: 'vertical', minHeight: '80px' }}
                          />
                        </div>
                      ) : (
                        <div className="mb-4 text-start">
                          <details className="quiz-comment-accordion">
                            <summary style={{ cursor: 'pointer', fontSize: '0.92rem', color: '#756f4f', fontWeight: '600' }}>
                              💬 Add comments or special notes for this choice (Optional)
                            </summary>
                            <textarea 
                              className="form-control quiz-input mt-2"
                              rows={2}
                              placeholder="Any specific comments or notes for this step?..."
                              value={userAnswers[currentQ.id + '_comment'] || ''}
                              onChange={(e) => {
                                const val = e.target.value;
                                setUserAnswers(prev => ({
                                  ...prev,
                                  [currentQ.id + '_comment']: val
                                }));
                              }}
                              style={{ resize: 'vertical' }}
                            />
                          </details>
                        </div>
                      )}
                      <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                        <button 
                          onClick={handleBackQuestion} 
                          className="btn btn-link text-muted text-decoration-none px-0 fs-5"
                          style={{ cursor: 'pointer' }}
                        >
                          ← Back
                        </button>
                        <button 
                          onClick={handleNextQuestion} 
                          disabled={!isCurrentQAnswered}
                          className="btn-primary-custom"
                          style={{
                            padding: '10px 35px',
                            borderRadius: '8px',
                            opacity: isCurrentQAnswered ? 1 : 0.5,
                            pointerEvents: isCurrentQAnswered ? 'auto' : 'none'
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: User Details Form */}
                  {quizStep === 'details' && (
                    <div id="quizUserDetailsBox" className="quiz-card p-4 p-md-5 text-start mx-auto">
                      <h3 className="fw-bold mb-3" style={{ color: '#3b3500', fontSize: '1.8rem' }}>
                        One Last Step!
                      </h3>
                      <p className="mb-4" style={{ color: '#5f5863' }}>
                        Please share your details so we can send you the best program recommendations.
                      </p>

                      <form onSubmit={handleSubmitDetails}>
                        <div className="mb-3">
                          <label htmlFor="fullName" className="form-label text-uppercase fw-bold small">
                            Full Name
                          </label>
                          <input 
                            type="text" 
                            className="form-control quiz-input" 
                            id="fullName" 
                            required 
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label text-uppercase fw-bold small">
                            Email Address
                          </label>
                          <input 
                            type="email" 
                            className="form-control quiz-input" 
                            id="email" 
                            required 
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="school" className="form-label text-uppercase fw-bold small">
                            School / Organization
                          </label>
                          <input 
                            type="text" 
                            className="form-control quiz-input" 
                            id="school" 
                            required 
                            placeholder="Highland High School"
                            value={formData.school}
                            onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label text-uppercase fw-bold small">
                            Phone Number
                          </label>
                          <input 
                            type="tel" 
                            className="form-control quiz-input" 
                            id="phone" 
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="comments" className="form-label text-uppercase fw-bold small">
                            Comments / Special Requests
                          </label>
                          <textarea 
                            className="form-control quiz-input" 
                            id="comments" 
                            rows={3}
                            placeholder="Share any special goals, group size, specific dates, or questions..."
                            value={formData.comments}
                            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                            style={{ resize: 'vertical', minHeight: '90px' }}
                          />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                          <button 
                            type="button" 
                            onClick={() => { setQuizStep('questions'); setCurrentQuestionIndex(quizData.length - 1); }}
                            className="btn btn-link text-muted text-decoration-none px-0 fs-5"
                            style={{ cursor: 'pointer' }}
                          >
                            ← Back
                          </button>
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn-primary-custom"
                            style={{ padding: '10px 35px', borderRadius: '8px', opacity: isSubmitting ? 0.7 : 1 }}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Details"}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Step 5: Completion */}
                  {quizStep === 'completed' && (
                    <div id="quizCompletionBox" className="quiz-card p-5 text-center mx-auto">
                      <div className="success-icon mb-4">
                        <i className="bi bi-check-circle-fill" style={{ fontSize: '4rem', color: '#3b3500' }}></i>
                      </div>
                      <h3 className="fw-bold mb-3" style={{ color: '#3b3500', fontSize: '2rem' }}>
                        Details Submitted!
                      </h3>
                      <p className="mb-4" style={{ color: '#5f5863', fontSize: '1.1rem' }}>
                        Thank you! We've received your information and our team will get back to you shortly with customized trip ideas.
                      </p>
                      <Link 
                        to="/" 
                        className="btn-primary-custom"
                        style={{ padding: '12px 40px', fontSize: '1.1rem', borderRadius: '8px' }}
                      >
                        RETURN HOME
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <div id="faq-placeholder">
        <FaqSection />
      </div>
    </div>
  );
}
