import React from 'react'

export default function landingpage() {
    return (
        <div>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
                Skip to main content
            </a>

            <header className="relative z-50 bg-white dark:bg-gray-900">
                {/* Header content goes here */}
            </header>

            {/* Main content area */}
            <main id="main-content" className="flex-1 relative">
                {/* Content will be injected here */}
            </main>




            <div id="root">
                <nav className="fixed w-full z-50 bg-neutral-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="text-xl font-bold">SaaSTemplate</div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#hero" className="hover:text-indigo-500 px-3 py-2">Home</a>
                                    <a href="#features" className="hover:text-indigo-500 px-3 py-2">Features</a>
                                    <a href="#components" className="hover:text-indigo-500 px-3 py-2">Components</a>
                                    <a href="#authentication" className="hover:text-indigo-500 px-3 py-2">Auth</a>
                                    <a href="#pricing" className="hover:text-indigo-500 px-3 py-2">Pricing</a>
                                    <a href="#deployment" className="hover:text-indigo-500 px-3 py-2">Deploy</a>
                                    <a href="#documentation" className="hover:text-indigo-500 px-3 py-2">Docs</a>
                                </div>
                            </div>
                            <div className="md:hidden">
                                <button id="menuBtn" className="text-white hover:text-gray-300">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="mobileMenu" className="md:hidden bg-neutral-900 hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#hero" className="block hover:text-indigo-500 px-3 py-2">Home</a>
                            <a href="#features" className="block hover:text-indigo-500 px-3 py-2">Features</a>
                            <a href="#components" className="block hover:text-indigo-500 px-3 py-2">Components</a>
                            <a href="#authentication" className="block hover:text-indigo-500 px-3 py-2">Auth</a>
                            <a href="#pricing" className="block hover:text-indigo-500 px-3 py-2">Pricing</a>
                            <a href="#deployment" className="block hover:text-indigo-500 px-3 py-2">Deploy</a>
                            <a href="#documentation" className="block hover:text-indigo-500 px-3 py-2">Docs</a>
                        </div>
                    </div>
                </nav>

                <section id="hero" className="bg-neutral-900 text-white pt-16 min-h-[70vh] flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl animate__animated animate__fadeInDown">
                                <span className="block">Production-Ready</span>
                                <span className="block text-indigo-500">SaaS Template</span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate__animated animate__fadeInUp">
                                Launch your SaaS faster with authentication, payments, email integration, and more - all pre-configured and ready to deploy.
                            </p>
                            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 animate__animated animate__fadeInUp">
                                <div className="rounded-md shadow">
                                    <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Get Started
                                    </a>
                                </div>
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a href="#documentation" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                        Documentation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            <div id="root">
                <section id="features" className="bg-neutral-800 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate__animated animate__fadeInDown">
                                Everything You Need to Launch Your SaaS
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 animate__animated animate__fadeInUp">
                                Pre-built features and integrations to accelerate your development
                            </p>
                        </div>

                        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Authentication */}
                            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="text-indigo-500 text-4xl mb-4">🔐</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Authentication &amp; Authorization</h3>
                                <p className="text-gray-300">Secure user authentication and role-based access control out of the box.</p>
                            </div>

                            {/* Email Integration */}
                            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="text-indigo-500 text-4xl mb-4">📧</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Email Integration</h3>
                                <p className="text-gray-300">Built-in email service integration for notifications and user communication.</p>
                            </div>

                            {/* Database Setup */}
                            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="text-indigo-500 text-4xl mb-4">💾</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Database Setup</h3>
                                <p className="text-gray-300">Pre-configured database with schemas and essential models ready to use.</p>
                            </div>

                            {/* UI Components */}
                            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="text-indigo-500 text-4xl mb-4">🎨</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Shadcn/UI Components</h3>
                                <p className="text-gray-300">Beautiful, accessible UI components styled with Tailwind CSS.</p>
                            </div>

                            {/* Payment Gateway */}
                            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="text-indigo-500 text-4xl mb-4">💳</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Payment Gateway Integration</h3>
                                <p className="text-gray-300">Seamless payment processing with popular payment gateways.</p>
                            </div>

                            {/* Deployment Options */}
                            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
                                <div className="text-indigo-500 text-4xl mb-4">🚀</div>
                                <h3 className="text-xl font-semibold text-white mb-2">Multiple Deployment Options</h3>
                                <p className="text-gray-300">Deploy to your preferred platform with our deployment guides.</p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <a href="#components" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 animate__animated animate__fadeInUp">
                                Explore Components
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path filerule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="components" className="bg-neutral-900 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate__animated animate__fadeInDown">
                                Beautiful UI Components
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 animate__animated animate__fadeInUp">
                                Pre-built, customizable components powered by Shadcn/UI and Tailwind CSS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Interactive Component Preview 1 */}
                            <div className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-all animate__animated animate__fadeInLeft">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">Form Components</h3>
                                    <div className="space-y-4">
                                        <input type="text" placeholder="Email address" className="w-full px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Component Preview 2 */}
                            <div className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-all animate__animated animate__fadeInRight">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">Card Components</h3>
                                    <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                                                UI
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">Component Title</h4>
                                                <p className="text-gray-400 text-sm">Customizable description text</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Component Preview 3 */}
                            <div className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-all animate__animated animate__fadeInLeft">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">Alert Components</h3>
                                    <div className="bg-indigo-900/50 border border-indigo-500 text-white px-4 py-3 rounded-md">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path filerule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>This is an alert message</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Component Preview 4 */}
                            <div className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-all animate__animated animate__fadeInRight">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">Toggle Components</h3>
                                    <div className="space-y-4">
                                        <label className="inline-flex items-center space-x-3">
                                            <span className="text-white">Toggle Option</span>
                                            <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-indigo-600" role="switch" aria-checked="true">
                                                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                                            </button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center animate__animated animate__fadeInUp">
                            <a href="#authentication" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                Explore Authentication
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path filerule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="authentication" className="bg-neutral-800 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                            <div className="mb-12 lg:mb-0 animate__animated animate__fadeInLeft">
                                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                                    Secure Authentication &amp; Authorization
                                </h2>
                                <p className="text-lg text-gray-300 mb-8">
                                    Pre-built authentication system with multiple providers and role-based access control.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white">Multiple Auth Providers</h3>
                                            <p className="mt-2 text-gray-300">Support for OAuth providers including Google, GitHub, and more.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white">Role-Based Access</h3>
                                            <p className="mt-2 text-gray-300">Built-in role and permission management system.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white">Password Recovery</h3>
                                            <p className="mt-2 text-gray-300">Secure password reset and recovery workflow.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="animate__animated animate__fadeInRight">
                                <div className="bg-neutral-900 rounded-lg shadow-xl p-6 sm:p-8">
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-center space-x-4 mb-8">
                                                <button className="flex items-center px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-neutral-800 transition-colors">
                                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                                                    </svg>
                                                    Google
                                                </button>
                                                <button className="flex items-center px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-neutral-800 transition-colors">
                                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                                    </svg>
                                                    GitHub
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-gray-600"></div>
                                                </div>
                                                <div className="relative flex justify-center text-sm">
                                                    <span className="px-2 bg-neutral-900 text-gray-400">Or continue with</span>
                                                </div>
                                            </div>
                                        </div>
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">Email</label>
                                                <input type="email" className="mt-1 block w-full rounded-md bg-neutral-800 border-gray-600 text-white focus:border-indigo-500 focus:ring-indigo-500" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300">Password</label>
                                                <input type="password" className="mt-1 block w-full rounded-md bg-neutral-800 border-gray-600 text-white focus:border-indigo-500 focus:ring-indigo-500" />
                                            </div>
                                            <div>
                                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="pricing" className="bg-neutral-900 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate__animated animate__fadeInDown">
                                Simple, Transparent Pricing
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 animate__animated animate__fadeInUp">
                                Choose the perfect plan for your needs
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Starter Plan */}
                            <div className="bg-neutral-800 rounded-lg shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300 animate__animated animate__fadeInLeft">
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
                                    <div className="flex justify-center items-baseline mb-8">
                                        <span className="text-5xl font-extrabold text-white">$29</span>
                                        <span className="text-gray-400 ml-1">/month</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Authentication system
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Basic email integration
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Standard components
                                    </li>
                                </ul>
                                <button className="w-full bg-indigo-600 text-white rounded-md py-3 hover:bg-indigo-700 transition-colors">
                                    Get Started
                                </button>
                            </div>

                            {/* Pro Plan */}
                            <div className="bg-neutral-800 rounded-lg shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300 border-2 border-indigo-500 animate__animated animate__fadeInUp">
                                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-24 h-24 overflow-hidden">
                                    <div className="absolute transform rotate-45 bg-indigo-500 text-white text-center font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                                        Popular
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Pro</h3>
                                    <div className="flex justify-center items-baseline mb-8">
                                        <span className="text-5xl font-extrabold text-white">$79</span>
                                        <span className="text-gray-400 ml-1">/month</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Everything in Starter
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Advanced authentication
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Payment integration
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Premium components
                                    </li>
                                </ul>
                                <button className="w-full bg-indigo-600 text-white rounded-md py-3 hover:bg-indigo-700 transition-colors">
                                    Get Started
                                </button>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="bg-neutral-800 rounded-lg shadow-xl p-8 transform hover:-translate-y-1 transition-transform duration-300 animate__animated animate__fadeInRight">
                                <div className="text-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
                                    <div className="flex justify-center items-baseline mb-8">
                                        <span className="text-5xl font-extrabold text-white">$199</span>
                                        <span className="text-gray-400 ml-1">/month</span>
                                    </div>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Everything in Pro
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Custom integrations
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Dedicated support
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Custom deployment
                                    </li>
                                </ul>
                                <button className="w-full bg-indigo-600 text-white rounded-md py-3 hover:bg-indigo-700 transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="deployment" className="bg-neutral-800 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate__animated animate__fadeInDown">
                                Deploy Anywhere
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 animate__animated animate__fadeInUp">
                                Multiple deployment options to fit your workflow
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Vercel */}
                            <div className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-all cursor-pointer animate__animated animate__fadeInLeft">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">Vercel</h3>
                                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1L24 22H0L12 1Z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-300 mb-4">One-click deployment with zero configuration</p>
                                <div className="flex items-center text-indigo-400 hover:text-indigo-300">
                                    <span>Deploy to Vercel</span>
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Netlify */}
                            <div className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-all cursor-pointer animate__animated animate__fadeInUp">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">Netlify</h3>
                                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.437l3.98.669 3.077-2.901zm-12.207 5.188l-.53-3.929a1.044 1.044 0 0 1-.543-.454l-3.552 1.044 1.313 1.313 3.312 2.026zm2.396.628l.006-.01.02-.009a.996.996 0 0 1 .202-.022c.001 0 .001-.001.001-.001l2.301-.331-1.693-1.693-.838 2.066zm-.618-11.768l-2.73 4.292 2.317 1.455-.116-2.749a1.044 1.044 0 0 1 .529-2.998zm10.741-2.466a1.044 1.044 0 0 1 .22-.344l-2.301-2.301-4.293 2.731c.008.052.015.104.015.157a1.044 1.044 0 0 1-.41.831l2.015 3.444 4.754-4.518z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-300 mb-4">Automated builds and deployments</p>
                                <div className="flex items-center text-indigo-400 hover:text-indigo-300">
                                    <span>Deploy to Netlify</span>
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Docker */}
                            <div className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-all cursor-pointer animate__animated animate__fadeInRight">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">Docker</h3>
                                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-300 mb-4">Containerized deployment ready</p>
                                <div className="flex items-center text-indigo-400 hover:text-indigo-300">
                                    <span>Use Docker</span>
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* AWS */}
                            <div className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-all cursor-pointer animate__animated animate__fadeInUp">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">AWS</h3>
                                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.83-.447.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.060-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-300 mb-4">AWS deployment ready</p>
                                <div className="flex items-center text-indigo-400 hover:text-indigo-300">
                                    <span>Deploy to AWS</span>
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Digital Ocean */}
                            <div className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-all cursor-pointer animate__animated animate__fadeInUp">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">Digital Ocean</h3>
                                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.372 0 0 5.372 0 12c0 1.69.347 3.295.971 4.753V13.32H4.1v-3.455H.971C2.775 5.114 6.962 1.552 12 1.552c4.122 0 7.677 2.39 9.364 5.848l-2.13 1.24C17.904 5.925 15.163 4.31 12 4.31c-3.162 0-5.904 1.615-7.234 4.33l7.234.01v3.455H8.276v3.454H4.1v3.454H.971C2.775 22.938 6.962 24 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-300 mb-4">Deploy to Digital Ocean droplets</p>
                                <div className="flex items-center text-indigo-400 hover:text-indigo-300">
                                    <span>Deploy to DO</span>
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Self Hosted */}
                            <div className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-all cursor-pointer animate__animated animate__fadeInRight">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">Self Hosted</h3>
                                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-300 mb-4">Host on your own infrastructure</p>
                                <div className="flex items-center text-indigo-400 hover:text-indigo-300">
                                    <span>Learn More</span>
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="documentation" className="bg-neutral-900 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl animate__animated animate__fadeInDown">
                                Comprehensive Documentation
                            </h2>
                            <p className="mt-4 text-lg text-gray-300 animate__animated animate__fadeInUp">
                                Everything you need to get started and build your SaaS
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Left Column - Quick Start */}
                            <div className="animate__animated animate__fadeInLeft">
                                <div className="bg-neutral-800 rounded-lg p-8">
                                    <h3 className="text-2xl font-bold text-white mb-6">Quick Start Guide</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-indigo-600 rounded-full p-2 mt-1">
                                                <span className="text-white text-sm">01</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">Install Dependencies</h4>
                                                <p className="text-gray-300 mt-2">Clone the repository and install required packages</p>
                                                <div className="bg-neutral-900 p-3 rounded-md mt-2">
                                                    <code className="text-indigo-400">npm install @saas-template/core</code>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="bg-indigo-600 rounded-full p-2 mt-1">
                                                <span className="text-white text-sm">02</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">Configure Environment</h4>
                                                <p className="text-gray-300 mt-2">Set up your environment variables</p>
                                                <div className="bg-neutral-900 p-3 rounded-md mt-2">
                                                    <code className="text-indigo-400">cp .env.example .env</code>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="bg-indigo-600 rounded-full p-2 mt-1">
                                                <span className="text-white text-sm">03</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">Run the Application</h4>
                                                <p className="text-gray-300 mt-2">Start your development server</p>
                                                <div className="bg-neutral-900 p-3 rounded-md mt-2">
                                                    <code className="text-indigo-400">npm run dev</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Documentation Links */}
                            <div className="animate__animated animate__fadeInRight">
                                <div className="bg-neutral-800 rounded-lg p-8">
                                    <h3 className="text-2xl font-bold text-white mb-6">Documentation Sections</h3>
                                    <div className="space-y-4">
                                        <a href="#" className="block p-4 bg-neutral-900 rounded-lg hover:bg-neutral-700 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">Authentication Setup</h4>
                                                    <p className="text-gray-300 text-sm mt-1">Configure authentication providers</p>
                                                </div>
                                                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </a>

                                        <a href="#" className="block p-4 bg-neutral-900 rounded-lg hover:bg-neutral-700 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">Email Integration</h4>
                                                    <p className="text-gray-300 text-sm mt-1">Set up email services</p>
                                                </div>
                                                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </a>

                                        <a href="#" className="block p-4 bg-neutral-900 rounded-lg hover:bg-neutral-700 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">Database Configuration</h4>
                                                    <p className="text-gray-300 text-sm mt-1">Database setup and migrations</p>
                                                </div>
                                                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </a>

                                        <a href="#" className="block p-4 bg-neutral-900 rounded-lg hover:bg-neutral-700 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">UI Components</h4>
                                                    <p className="text-gray-300 text-sm mt-1">Available components and usage</p>
                                                </div>
                                                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center animate__animated animate__fadeInUp">
                            <a href="https://docs.example.com" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                View Full Documentation
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}
