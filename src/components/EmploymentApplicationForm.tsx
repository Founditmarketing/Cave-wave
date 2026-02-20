import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Upload, X, Check } from 'lucide-react';

const EmploymentApplicationForm: React.FC = () => {
    // --- State Management ---
    const [formData, setFormData] = useState({
        // Section 1: Applicant Details
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        position: '',
        hasLicense: '', // 'yes' | 'no'
        backgroundCheck: '', // 'yes' | 'no'
        availability: '',

        // Section 2: Work Experience
        job1: '',
        job2: '',
        job3: '',

        // Section 3: Additional Info
        additionalInfo: '',
        captchaAnswer: '',
    });

    const [resume, setResume] = useState<File | null>(null);
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    // --- CAPTCHA Logic ---
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ num1, num2, answer: num1 + num2 });
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // --- Event Handlers ---
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'radio') {
            setFormData(prev => ({ ...prev, [name]: value }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
            if (errors.resume) {
                setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.resume;
                    return newErrors;
                });
            }
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setResume(e.dataTransfer.files[0]);
            if (errors.resume) {
                setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.resume;
                    return newErrors;
                });
            }
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        // Validation
        if (!formData.firstName) newErrors.firstName = 'Required';
        if (!formData.lastName) newErrors.lastName = 'Required';
        if (!formData.phone) newErrors.phone = 'Required';
        if (!formData.email) newErrors.email = 'Required';
        if (!formData.position) newErrors.position = 'Required';
        if (!formData.hasLicense) newErrors.hasLicense = 'Required';
        if (!formData.backgroundCheck) newErrors.backgroundCheck = 'Required';
        if (!formData.availability) newErrors.availability = 'Required';
        if (!resume) newErrors.resume = 'Required';

        if (parseInt(formData.captchaAnswer) !== captcha.answer) {
            newErrors.captchaAnswer = 'Incorrect math answer';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Real Submission
        setSubmissionStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    name: `${formData.firstName} ${formData.lastName}`,
                    type: 'careers'
                }),
            });

            if (response.ok) {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionStatus('error');
        }
    };

    if (submissionStatus === 'success') {
        return (
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl text-center border border-slate-200 dark:border-slate-800">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <Check size={40} />
                </div>
                <h2 className="text-3xl font-black uppercase text-slate-900 dark:text-white mb-4">Application Received!</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Thank you for applying to Cave Wave Car Wash. We will review your application and get back to you soon.
                </p>
                <button
                    onClick={() => {
                        setSubmissionStatus('idle');
                        setFormData({
                            firstName: '', lastName: '', phone: '', email: '', position: '',
                            hasLicense: '', backgroundCheck: '', availability: '',
                            job1: '', job2: '', job3: '', additionalInfo: '', captchaAnswer: ''
                        });
                        setResume(null);
                        generateCaptcha();
                    }}
                    className="px-8 py-3 bg-brand-neonBlue text-white font-bold rounded-full uppercase tracking-wider hover:bg-brand-neonBlue/80 transition-colors"
                >
                    Submit Another
                </button>
            </div>
        );
    }

    // Styles for inputs to ensure consistency
    const inputClasses = "w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-neonPink focus:border-transparent transition-all";
    const labelClasses = "block text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2";
    const errorClasses = "text-red-500 text-xs mt-1 absolute";

    return (
        <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-10 text-slate-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">
                    Apply Now
                </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10">

                {/* --- Section 1: Applicant Details --- */}
                <div>
                    <h3 className="text-2xl font-black uppercase text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                        Application
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Fields */}
                        <div className="md:col-span-2">
                            <label className={labelClasses}>Name <span className="text-brand-neonPink">*</span></label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="text" name="firstName" placeholder="First"
                                        value={formData.firstName} onChange={handleInputChange}
                                        className={`${inputClasses} ${errors.firstName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.firstName && <span className={errorClasses}>{errors.firstName}</span>}
                                </div>
                                <div className="relative">
                                    <input
                                        type="text" name="lastName" placeholder="Last"
                                        value={formData.lastName} onChange={handleInputChange}
                                        className={`${inputClasses} ${errors.lastName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.lastName && <span className={errorClasses}>{errors.lastName}</span>}
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <label className={labelClasses}>Phone <span className="text-brand-neonPink">*</span></label>
                            <input
                                type="tel" name="phone"
                                value={formData.phone} onChange={handleInputChange}
                                className={`${inputClasses} ${errors.phone ? 'border-red-500' : ''}`}
                            />
                            {errors.phone && <span className={errorClasses}>{errors.phone}</span>}
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <label className={labelClasses}>Email <span className="text-brand-neonPink">*</span></label>
                            <input
                                type="email" name="email"
                                value={formData.email} onChange={handleInputChange}
                                className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <span className={errorClasses}>{errors.email}</span>}
                        </div>

                        {/* Position */}
                        <div className="relative md:col-span-2">
                            <label className={labelClasses}>Position Applied For <span className="text-brand-neonPink">*</span></label>
                            <input
                                type="text" name="position"
                                value={formData.position} onChange={handleInputChange}
                                className={`${inputClasses} ${errors.position ? 'border-red-500' : ''}`}
                            />
                            {errors.position && <span className={errorClasses}>{errors.position}</span>}
                        </div>

                        {/* License */}
                        <div className="relative">
                            <label className={labelClasses}>Do You Have a Valid Driver's License <span className="text-brand-neonPink">*</span></label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.hasLicense === 'yes' ? 'border-brand-neonPink' : 'border-slate-400 dark:border-slate-600'}`}>
                                        {formData.hasLicense === 'yes' && <div className="w-2.5 h-2.5 rounded-full bg-brand-neonPink" />}
                                    </div>
                                    <input type="radio" name="hasLicense" value="yes" onChange={handleInputChange} className="hidden" />
                                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-brand-neonPink transition-colors">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.hasLicense === 'no' ? 'border-brand-neonPink' : 'border-slate-400 dark:border-slate-600'}`}>
                                        {formData.hasLicense === 'no' && <div className="w-2.5 h-2.5 rounded-full bg-brand-neonPink" />}
                                    </div>
                                    <input type="radio" name="hasLicense" value="no" onChange={handleInputChange} className="hidden" />
                                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-brand-neonPink transition-colors">No</span>
                                </label>
                            </div>
                            {errors.hasLicense && <span className={errorClasses}>{errors.hasLicense}</span>}
                        </div>

                        {/* Background Check */}
                        <div className="relative">
                            <label className={labelClasses}>Are You Willing to Undergo a Background Check <span className="text-brand-neonPink">*</span></label>
                            <div className="flex gap-6 mt-3">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.backgroundCheck === 'yes' ? 'border-brand-neonPink' : 'border-slate-400 dark:border-slate-600'}`}>
                                        {formData.backgroundCheck === 'yes' && <div className="w-2.5 h-2.5 rounded-full bg-brand-neonPink" />}
                                    </div>
                                    <input type="radio" name="backgroundCheck" value="yes" onChange={handleInputChange} className="hidden" />
                                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-brand-neonPink transition-colors">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.backgroundCheck === 'no' ? 'border-brand-neonPink' : 'border-slate-400 dark:border-slate-600'}`}>
                                        {formData.backgroundCheck === 'no' && <div className="w-2.5 h-2.5 rounded-full bg-brand-neonPink" />}
                                    </div>
                                    <input type="radio" name="backgroundCheck" value="no" onChange={handleInputChange} className="hidden" />
                                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-brand-neonPink transition-colors">No</span>
                                </label>
                            </div>
                            {errors.backgroundCheck && <span className={errorClasses}>{errors.backgroundCheck}</span>}
                        </div>

                        {/* Availability */}
                        <div className="relative md:col-span-2">
                            <label className={labelClasses}>Days and times available to work <span className="text-brand-neonPink">*</span></label>
                            <input
                                type="text" name="availability"
                                value={formData.availability} onChange={handleInputChange}
                                className={`${inputClasses} ${errors.availability ? 'border-red-500' : ''}`}
                            />
                            {errors.availability && <span className={errorClasses}>{errors.availability}</span>}
                        </div>
                    </div>
                </div>

                {/* --- Section 2: Work Experience --- */}
                <div>
                    <h3 className="text-2xl font-black uppercase text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                        Employment History
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <label className={labelClasses}>1. Employer Name / Job Title / Duties and Responsibilities</label>
                            <textarea
                                name="job1" rows={4} value={formData.job1} onChange={handleInputChange}
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>2. Employer Name / Job Title / Duties and Responsibilities</label>
                            <textarea
                                name="job2" rows={4} value={formData.job2} onChange={handleInputChange}
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label className={labelClasses}>3. Employer Name / Job Title / Duties and Responsibilities</label>
                            <textarea
                                name="job3" rows={4} value={formData.job3} onChange={handleInputChange}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                </div>

                {/* --- Section 3: Uploads & Final Details --- */}
                <div>
                    <h3 className="text-2xl font-black uppercase text-slate-800 dark:text-slate-200 mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                        Final Details
                    </h3>

                    {/* Resume Upload */}
                    <div className="mb-8">
                        <label className={labelClasses}>Resume Upload <span className="text-brand-neonPink">*</span></label>
                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${errors.resume
                                ? 'border-red-500 bg-red-50 dark:bg-red-900/10'
                                : 'border-slate-300 dark:border-slate-700 hover:border-brand-neonPink dark:hover:border-brand-neonPink bg-slate-50 dark:bg-slate-800/50'
                                }`}
                        >
                            {!resume ? (
                                <>
                                    <div className="mb-4 flex justify-center text-brand-neonPink">
                                        <Upload size={40} />
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium">
                                        Drag & Drop your file here or
                                    </p>
                                    <label className="inline-block px-6 py-2 bg-gradient-to-r from-brand-neonPurple to-brand-neonPink text-white font-bold rounded-full cursor-pointer hover:brightness-110 transition-all shadow-lg">
                                        SELECT FILES
                                        <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                                    </label>
                                </>
                            ) : (
                                <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-brand-neonPink/10 p-2 rounded-lg text-brand-neonPink">
                                            <Check size={20} />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-xs">{resume.name}</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setResume(null)}
                                        className="text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            )}
                            {errors.resume && <span className="text-red-500 text-xs absolute bottom-2 left-0 w-full">{errors.resume}</span>}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mb-8">
                        <label className={labelClasses}>Additional Information</label>
                        <textarea
                            name="additionalInfo" rows={4} value={formData.additionalInfo} onChange={handleInputChange}
                            className={inputClasses}
                        />
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500 italic">
                            Do not include any information that could be considered sensitive (SSN, Driver's License #, etc)
                        </p>
                    </div>

                    {/* CAPTCHA + Submit */}
                    <div className="flex flex-col md:flex-row items-end gap-6 justify-between border-t border-slate-200 dark:border-slate-800 pt-8">
                        <div className="w-full md:w-auto">
                            <label className={labelClasses}>Security Check <span className="text-brand-neonPink">*</span></label>
                            <div className="flex items-center gap-4">
                                <div className="text-xl font-bold font-mono text-slate-700 dark:text-slate-300">
                                    {captcha.num1} + {captcha.num2} =
                                </div>
                                <div className="relative w-24">
                                    <input
                                        type="number" name="captchaAnswer"
                                        value={formData.captchaAnswer} onChange={handleInputChange}
                                        className={`${inputClasses} text-center`}
                                        placeholder="?"
                                    />
                                </div>
                            </div>
                            {errors.captchaAnswer && <span className="text-red-500 text-xs mt-1 block">{errors.captchaAnswer}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={submissionStatus === 'loading'}
                            className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-brand-neonPurple to-brand-neonPink text-white text-lg font-black uppercase tracking-widest rounded-full hover:shadow-lg hover:shadow-brand-neonPink/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                            {submissionStatus === 'loading' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <span>Submit</span>
                            )}
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default EmploymentApplicationForm;
