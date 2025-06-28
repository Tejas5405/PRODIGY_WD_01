import React from 'react';
import { 
  ChevronDown, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Code,
  Database,
  Brain,
  Smartphone,
  Palette,
  Cloud,
  Lock,
  Settings,
  TrendingUp,
  MessageCircle,
  Clock,
  Award,
  Target,
  Lightbulb,
  Heart,
  Globe,
  CheckCircle,
  BookOpen,
  Briefcase,
  GraduationCap
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300 hover:bg-white/98 hover:shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                <span className="text-white font-bold text-lg">PI</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">Prodigy InfoTech</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform relative overflow-hidden group">
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 group">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="w-full h-0.5 bg-gray-600 mb-1 transition-all duration-300 group-hover:bg-blue-600"></span>
                <span className="w-full h-0.5 bg-gray-600 mb-1 transition-all duration-300 group-hover:bg-blue-600"></span>
                <span className="w-full h-0.5 bg-gray-600 transition-all duration-300 group-hover:bg-blue-600"></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section with Enhanced Animated Background */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Enhanced Floating Particles */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-float shadow-lg"></div>
          <div className="absolute top-40 right-32 w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full animate-float animation-delay-1000 shadow-lg"></div>
          <div className="absolute bottom-40 left-32 w-3 h-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full animate-float animation-delay-2000 shadow-lg"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-float animation-delay-3000 shadow-lg"></div>
          <div className="absolute top-60 left-60 w-2 h-2 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-float animation-delay-4000 shadow-lg"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-32 right-40 w-6 h-6 border-2 border-blue-300 rotate-45 animate-spin-slow opacity-60"></div>
          <div className="absolute bottom-32 left-40 w-8 h-8 border-2 border-purple-300 rounded-full animate-pulse opacity-60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              Empowering Future
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 block animate-gradient-x">Tech Leaders</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
              Join our self-paced internships and unlock hands-on experience in Web Development, Data Science, Software Engineering, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-1000">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-xl transform group relative overflow-hidden">
                <span className="relative z-10">Explore Internships</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:bg-blue-50 relative overflow-hidden group">
                <span className="relative z-10">View Success Stories</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            {/* Enhanced Stats with Professional Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-1500">
              <div className="text-center group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">5000+</div>
                <div className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-800">Active Interns</div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">50+</div>
                <div className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-800">Tech Domains</div>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">95%</div>
                <div className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-800">Completion Rate</div>
                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Features Section with Professional Enhancements */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-200 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Why Choose Prodigy InfoTech</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of learning with our innovative approach to tech education and career development.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-transparent hover:border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative z-10">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-blue-700 relative z-10">Learn by Doing</h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 relative z-10">
                Real-world projects across multiple domains including Web Development, Data Science, Machine Learning, and AI to build practical skills.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-transparent hover:border-purple-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative z-10">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-purple-700 relative z-10">Flexible & Remote</h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 relative z-10">
                100% online and self-paced internships that fit your schedule. Learn from anywhere, anytime with our comprehensive learning platform.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-transparent hover:border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative z-10">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-green-700 relative z-10">Get Certified</h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 relative z-10">
                Internship Certificate and Letter of Recommendation opportunities to boost your career prospects and stand out to employers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-transparent hover:border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative z-10">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-700 relative z-10">Self-Paced Learning</h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 relative z-10">
                Take control of your learning journey with flexible timelines and personalized progress tracking to achieve your goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-transparent hover:border-pink-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative z-10">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-pink-700 relative z-10">Community Support</h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 relative z-10">
                Join a vibrant community of learners and mentors. Get help, share knowledge, and network with peers and industry professionals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border border-transparent hover:border-indigo-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl relative z-10">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-indigo-700 relative z-10">Industry-Ready Skills</h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 relative z-10">
                Develop skills that matter in today's tech industry with projects designed by industry experts and aligned with current market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Professional Animations */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Professional Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border border-white rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-10 right-10 w-18 h-18 border border-white rounded-full animate-pulse animation-delay-3000"></div>
          </div>
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-float animation-delay-2000 opacity-60"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-float animation-delay-4000 opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">Ready to Start Your Tech Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their careers with our internship programs.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform group relative overflow-hidden">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-700">Start Your Internship Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-10 w-40 h-40 border border-blue-200 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-40 right-10 w-32 h-32 border border-purple-200 rounded-full animate-spin-slow animation-delay-3000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">
                About Prodigy InfoTech
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Shaping the Future of Tech Education
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                We are a future-focused EdTech platform offering self-paced, hands-on internships for students and freshers. Build real projects, grow your skills, and prepare for the future of work with industry-relevant training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform hover:shadow-lg group relative overflow-hidden">
                  <span className="relative z-10">Join Our Community</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform hover:bg-blue-50 hover:shadow-lg group relative overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 animate-fade-in-up animation-delay-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">Available Domains:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                  <Code className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-blue-600 font-medium">Web Development</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-all duration-300">
                  <Database className="w-5 h-5 text-green-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-green-600 font-medium">Data Science</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-purple-50 transition-all duration-300">
                  <Brain className="w-5 h-5 text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-purple-600 font-medium">Machine Learning</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-yellow-50 transition-all duration-300">
                  <Zap className="w-5 h-5 text-yellow-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-yellow-600 font-medium">Artificial Intelligence</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-pink-50 transition-all duration-300">
                  <Smartphone className="w-5 h-5 text-pink-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-pink-600 font-medium">Mobile Development</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                  <Cloud className="w-5 h-5 text-blue-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-blue-500 font-medium">Cloud Computing</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <Settings className="w-5 h-5 text-gray-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-gray-600 font-medium">DevOps</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-red-50 transition-all duration-300">
                  <Lock className="w-5 h-5 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-red-600 font-medium">Cybersecurity</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-indigo-50 transition-all duration-300">
                  <Palette className="w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-indigo-600 font-medium">UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition-all duration-300">
                  <TrendingUp className="w-5 h-5 text-orange-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-orange-600 font-medium">Digital Marketing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Core Values with Professional Hover Effects */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Our Core Values</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Target className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">Mission-Driven</h4>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Empowering the next generation of tech professionals</p>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Lightbulb className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-purple-600">Innovation First</h4>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Cutting-edge curriculum designed for tomorrow's jobs</p>
              <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Users className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-green-600">Community Focused</h4>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Building a supportive network of learners and mentors</p>
              <div className="w-8 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <TrendingUp className="w-8 h-8 text-orange-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-orange-600">Career Accelerator</h4>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Fast-track your journey to tech leadership roles</p>
              <div className="w-8 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enhanced Stats with Professional Hover Effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">2024</div>
              <div className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 font-medium">Founded</div>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">10K+</div>
              <div className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 font-medium">Students Trained</div>
              <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">95%</div>
              <div className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 font-medium">Success Rate</div>
              <div className="w-8 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group cursor-pointer p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">50+</div>
              <div className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 font-medium">Industry Partners</div>
              <div className="w-8 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-32 h-32 border border-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-purple-200 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Contact Us</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 hover:text-purple-600 transition-colors duration-300">Get in Touch</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your tech journey? Have questions about our internship programs? We're here to help you succeed.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">Let's Connect</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Whether you're a student looking to kickstart your tech career or have questions about our programs, we'd love to hear from you. Our team is ready to guide you on your learning journey.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 group cursor-pointer p-4 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Mail className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">Email Us</p>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">support@prodigyinfotech.dev</p>
                    <p className="text-sm text-gray-500">Send us an email anytime</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer p-4 rounded-xl transition-all duration-300 hover:bg-green-50 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <MessageCircle className="w-6 h-6 text-green-600 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-600">Live Chat</p>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Available 24/7</p>
                    <p className="text-sm text-gray-500">Get instant support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer p-4 rounded-xl transition-all duration-300 hover:bg-purple-50 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Clock className="w-6 h-6 text-purple-600 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">Response Time</p>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Within 24 hours</p>
                    <p className="text-sm text-gray-500">We're quick to respond</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-blue-300">
                <h4 className="font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">Why Contact Us?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                    <span className="transition-colors duration-300 group-hover:text-gray-800">Get personalized internship recommendations</span>
                  </li>
                  <li className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                    <span className="transition-colors duration-300 group-hover:text-gray-800">Learn about career opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                    <span className="transition-colors duration-300 group-hover:text-gray-800">Technical support and guidance</span>
                  </li>
                  <li className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
                    <span className="transition-colors duration-300 group-hover:text-gray-800">Partnership and collaboration inquiries</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-blue-300 animate-fade-in-up animation-delay-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">Send us a Message</h3>
              <p className="text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">Fill out the form below and we'll get back to you soon</p>
              <form className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 hover:shadow-md"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 hover:shadow-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400 hover:shadow-md"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform hover:shadow-lg group relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-pulse animation-delay-3000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <span className="text-white font-bold text-lg">PI</span>
                </div>
                <div className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-400">Prodigy InfoTech</div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed hover:text-gray-300 transition-colors duration-300">
                Empowering the next generation of tech professionals through innovative, self-paced internship programs in cutting-edge technologies.
              </p>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white transition-colors duration-300 cursor-pointer flex items-center space-x-2 group">
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>support@prodigyinfotech.dev</span>
                </p>
                <p className="hover:text-white transition-colors duration-300 cursor-pointer flex items-center space-x-2 group">
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className="hover:text-white transition-colors duration-300 cursor-pointer flex items-center space-x-2 group">
                  <Globe className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Global • Remote-First</span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 hover:text-blue-400 transition-colors duration-300">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">UI/UX Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 hover:text-blue-400 transition-colors duration-300">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 hover:text-blue-400 transition-colors duration-300">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">Community</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block hover:text-blue-400">FAQs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-4 md:mb-0">
                <a href="#" className="hover:text-white transition-colors duration-300 hover:text-blue-400">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300 hover:text-blue-400">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-300 hover:text-blue-400">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300 hover:text-blue-400">GDPR Compliance</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm mb-4">
                © 2025 Prodigy InfoTech. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-300 cursor-pointer group">
                  <span className="transition-transform duration-300 group-hover:scale-110">🚀</span>
                  <span>Trusted by 10,000+ students worldwide</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-300 cursor-pointer group">
                  <span className="transition-transform duration-300 group-hover:scale-110">🏆</span>
                  <span>95% completion rate</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 hover:text-gray-300 transition-colors duration-300 cursor-pointer group">
                  <span className="transition-transform duration-300 group-hover:scale-110">📜</span>
                  <span>Industry-recognized certificates</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-1 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                Built with <Heart className="w-4 h-4 text-red-500 animate-pulse hover:scale-110 transition-transform duration-300" /> for the future of tech education
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;