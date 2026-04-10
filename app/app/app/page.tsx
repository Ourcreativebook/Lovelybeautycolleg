'use client'

import Link from 'next/link'
import { BookOpen, GraduationCap, Newspaper, MessageCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'Access books on peace, conflict resolution, and personal development',
      link: '/books',
      color: 'bg-blue-500'
    },
    {
      icon: GraduationCap,
      title: 'Online Courses',
      description: 'Enroll in courses with video lessons, quizzes, and certificates',
      link: '/courses',
      color: 'bg-green-500'
    },
    {
      icon: Newspaper,
      title: 'Peace Magazine',
      description: 'Read articles, interviews, and research on peace',
      link: '/magazine',
      color: 'bg-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Assistant',
      description: 'Get personalized recommendations and answers 24/7',
      link: '#',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to PeaceForYou
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your journey to peace, understanding, and personal growth starts here
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Start Learning
              </Link>
              <Link
                href="/books"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
              >
                Explore Library
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for your peace education journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Books Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Online Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Learners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who are making a difference
          </p>
          <Link
            href="/auth/signup"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
